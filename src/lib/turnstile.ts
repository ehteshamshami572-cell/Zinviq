interface CaptchaResult {
  ok: boolean;
  unavailable: boolean;
}

/**
 * Verifies a Cloudflare Turnstile token server-side.
 * When no secret is configured the legacy honeypot + timestamp + rate limit remain active.
 * If a site key is published in production, a missing secret is treated as a hard failure
 * so the visible widget is never silently ignored.
 */
export async function verifyCaptcha(token: string | undefined, clientIp: string): Promise<CaptchaResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === 'production' && siteKey) {
      return { ok: false, unavailable: true };
    }
    return { ok: true, unavailable: false };
  }

  if (!token) return { ok: false, unavailable: false };

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token, remoteip: clientIp || undefined }),
      cache: 'no-store',
    });
    if (!response.ok) return { ok: false, unavailable: true };

    const result = (await response.json()) as { success?: boolean };
    return { ok: result.success === true, unavailable: false };
  } catch {
    return { ok: false, unavailable: true };
  }
}
