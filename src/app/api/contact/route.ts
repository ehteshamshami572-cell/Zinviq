import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact-schema';
import { checkRateLimit } from '@/lib/rate-limiter';
import { SITE_URL } from '@/lib/site-config';
import { sendNotificationEmail } from '@/services/mail-service';

function getClientIp(request: NextRequest): string {
  // Netlify sets this header at the edge; prefer it over caller-controlled headers.
  const netlifyIp = request.headers.get('x-nf-client-connection-ip');
  if (netlifyIp) return netlifyIp;

  const clientIp = request.headers.get('client-ip');
  if (clientIp) return clientIp;

  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0].trim();
  if (forwarded) return forwarded;

  if (request.ip) return request.ip;

  // Avoid a global shared bucket when no trustworthy IP is available.
  if (typeof globalThis.crypto !== 'undefined' && 'randomUUID' in globalThis.crypto) {
    return `anonymous-${globalThis.crypto.randomUUID()}`;
  }
  return `anonymous-${Math.random().toString(36).slice(2)}`;
}

function isAllowedOrigin(origin: string): boolean {
  try {
    const originHost = new URL(origin).host;
    const siteHost = new URL(SITE_URL).host;
    return (
      originHost === siteHost ||
      originHost === `www.${siteHost}` ||
      (siteHost.startsWith('www.') && originHost === siteHost.slice(4))
    );
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    if (origin && !isAllowedOrigin(origin)) {
      return NextResponse.json({ success: false, message: 'Forbidden origin' }, { status: 403 });
    }

    // Sliding window: 5 requests per 10 minutes per client, backed by Upstash in production.
    const rateLimit = await checkRateLimit(getClientIp(request), 5, 600);
    if (rateLimit.unavailable) {
      return NextResponse.json(
        {
          success: false,
          message: 'The contact form is temporarily unavailable. Please email growth@zinviq.com.',
        },
        { status: 503 }
      );
    }
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Rate limit exceeded. Please wait a few minutes before resubmitting.',
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, message: 'Invalid payload structure' },
        { status: 400 }
      );
    }

    // Silently accept honeypot submissions so bots get no feedback loop.
    if (typeof body.company === 'string' && body.company.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Inquiry received.' }, { status: 200 });
    }

    // Reject instant form completions and direct API posts without a form-open timestamp.
    if (typeof body.formLoadedAt !== 'number' || Date.now() - body.formLoadedAt < 2000) {
      return NextResponse.json(
        { success: false, message: 'Please review your details before submitting.' },
        { status: 400 }
      );
    }

    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please verify the submitted fields.',
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const emailResult = await sendNotificationEmail(validation.data);
    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to deliver message at this time. Please email growth@zinviq.com directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received. The project team will review your project and respond within 24 hours.',
        inquiryId: emailResult.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API_CONTACT_CRITICAL_FAILURE]', error);
    return NextResponse.json(
      { success: false, message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
