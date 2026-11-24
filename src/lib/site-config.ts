/** Canonical public site URL. Override with NEXT_PUBLIC_SITE_URL in each environment. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://zinviq.com').replace(/\/$/, '');

export function absoluteUrl(path = ''): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
