import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact-schema';
import { rateLimiter } from '@/lib/rate-limiter';
import { sendNotificationEmail } from '@/services/mail-service';

export async function POST(request: NextRequest) {
  try {
    // 1. Sliding Window Rate Limiting (5 requests per 10 mins per IP)
    const ip =
      request.ip ||
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      'anonymous-client';

    const isAllowed = await rateLimiter.checkLimit(ip, 5, 600);
    if (!isAllowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Rate limit exceeded. Please wait a few minutes before resubmitting.',
        },
        { status: 429 }
      );
    }

    // 2. Safe JSON Parsing
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, message: 'Invalid payload structure' },
        { status: 400 }
      );
    }

    // 3. Schema Validation with Zod
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

    // 4. Dispatch Email to Zinviq Systems
    const emailResult = await sendNotificationEmail(validation.data);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to deliver message at this time. Please email direct@zinviq.com directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received. A senior engineer will review your project parameters within 24 hours.',
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
