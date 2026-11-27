/** GTM container supplied for Zinviq. Loaded only after analytics consent is granted. */
export const GTM_CONTAINER_ID = 'GTM-WNZS3ZJG';

/** Tawk.to live chat widget URL. Loaded only after analytics consent is granted. */
export const TAWK_SCRIPT_URL = 'https://embed.tawk.to/6b09d70adf19f73d01323344/1k8f700qo';

/** OneSignal Web Push SDK. Loaded only after analytics consent is granted. */
export const ONESIGNAL_SCRIPT_URL = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
export const ONESIGNAL_APP_ID = '949a24b3-f8c9-4fc0-bd69-b7c52fb2aa64';

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
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
    OneSignalDeferred?: Array<
      (oneSignal: { init: (config: { appId: string }) => Promise<void> }) => Promise<void> | void
    >;
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

/** Injects the supplied Tawk.to widget once, preserving its required globals. */
export function loadTawk(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (document.querySelector('script[data-tawk="zinviq"]')) return;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = window.Tawk_LoadStart || new Date();

  const script = document.createElement('script');
  script.async = true;
  script.src = TAWK_SCRIPT_URL;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  script.setAttribute('data-tawk', 'zinviq');

  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
}

/** Injects OneSignal once using the supplied deferred-init snippet. */
export function loadOneSignal(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (document.querySelector('script[data-onesignal="zinviq"]')) return;

  window.OneSignalDeferred = window.OneSignalDeferred || [];
  window.OneSignalDeferred.push(async (oneSignal) => {
    await oneSignal.init({ appId: ONESIGNAL_APP_ID });
  });

  const script = document.createElement('script');
  script.src = ONESIGNAL_SCRIPT_URL;
  script.defer = true;
  script.setAttribute('data-onesignal', 'zinviq');

  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
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
  if (choice === 'all') {
    loadGtm();
    loadTawk();
    loadOneSignal();
  }

  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }));
}

export function openCookieSettings(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
