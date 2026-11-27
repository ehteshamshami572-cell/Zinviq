/**
 * Public contact configuration.
 * Set NEXT_PUBLIC_WHATSAPP_NUMBER in Netlify (digits only, with country code)
 * to override the default. Example: 923001234567
 */
export const rawWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923286880794';

export const whatsappNumber = rawWhatsappNumber.replace(/[^\d]/g, '');

export const isWhatsappEnabled = whatsappNumber.length >= 8;

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hi! I saw your portfolio. I need a Shopify / WordPress website for my business. Can you share your work and pricing?';

export function whatsappUrl(message = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CONTACT_EMAIL = 'growth@zinviq.com';
