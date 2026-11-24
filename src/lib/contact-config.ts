/**
 * Public contact configuration.
 * Set NEXT_PUBLIC_WHATSAPP_NUMBER in Vercel (digits only, with country code)
 * to enable the WhatsApp button. Example: 923001234567
 */
export const rawWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

export const whatsappNumber = rawWhatsappNumber.replace(/[^\d]/g, '');

export const isWhatsappEnabled = whatsappNumber.length >= 8;

export function whatsappUrl(message = 'Hi Zinviq, I would like a free website and growth audit.'): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CONTACT_EMAIL = 'growth@zinviq.com';
