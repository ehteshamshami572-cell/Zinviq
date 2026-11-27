/** GTM container supplied for Zinviq. Loaded only after analytics consent is granted. */
export const GTM_CONTAINER_ID = 'GTM-WNZS3ZJG';

export const CONSENT_STORAGE_KEY = 'zinviq-cookie-consent';
export const CONSENT_CHANGE_EVENT = 'zinviq:consent-change';
export const CONSENT_OPEN_EVENT = 'zinviq:consent-open';

export type ConsentChoice = 'all' | 'necessary';

/** Stable event names for GTM triggers / GA4 recommended events. */
export const EVENTS = {
  generateLead: 'generate_lead',
  formStart: 'form_start',
  ctaClick: 'cta_click',
  whatsappClick: 'whatsapp_click',
} as const;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: unknown[]) => void;
  }
}

export function pushEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function consentState(choice: ConsentChoice) {
  const granted = choice === 'all';
  return {
    ad_storage: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
  };
}

/** Injects GTM once. Safe to call on load and again after a consent change. */
export function loadGtm(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (document.querySelector(`script[data-gtm="${GTM_CONTAINER_ID}"]`)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
  script.setAttribute('data-gtm', GTM_CONTAINER_ID);
  document.head.appendChild(script);
}

export function readConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'all' || value === 'necessary' ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage can be disabled; the in-page choice still applies for this visit.
  }

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', consentState(choice));
  }
  if (choice === 'all') loadGtm();

  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }));
}

export function openCookieSettings(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
