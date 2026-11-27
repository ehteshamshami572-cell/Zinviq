/** Canonical public site URL. Override with NEXT_PUBLIC_SITE_URL in each environment. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://zinviq.netlify.app'
).replace(/\/$/, '');

/** Shared 1200x630 social preview image. */
export const OG_IMAGE = {
  url: '/brand/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Zinviq — Shopify, WordPress, SEO and growth services',
} as const;

/** Social profiles for Organization schema. Unset values are omitted, never invented. */
export const SOCIAL_URLS = [
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_X_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
].filter((url): url is string => Boolean(url && /^https:\/\//.test(url)));

export function absoluteUrl(path = ''): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
