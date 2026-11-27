'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
  EVENTS,
  GTM_CONTAINER_ID,
  consentState,
  pushEvent,
  readConsent,
  type ConsentChoice,
} from '@/lib/analytics';

/**
 * GTM is injected only when the visitor grants analytics consent.
 * The consent default is set in the document head before this script runs.
 */
export function AnalyticsProvider() {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    setConsent(readConsent());

    const onConsentChange = (event: Event) => {
      const choice = (event as CustomEvent<ConsentChoice>).detail;
      setConsent(choice === 'all' || choice === 'necessary' ? choice : null);
    };
    const onConsentOpen = () => setConsent(null);

    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    window.addEventListener(CONSENT_OPEN_EVENT, onConsentOpen);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
      window.removeEventListener(CONSENT_OPEN_EVENT, onConsentOpen);
    };
  }, []);

  useEffect(() => {
    if (!consent || typeof window.gtag !== 'function') return;
    window.gtag('consent', 'update', consentState(consent));
  }, [consent]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (readConsent() !== 'all') return;
      const element = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-cta]');
      if (!element) return;
      pushEvent(EVENTS.ctaClick, {
        cta_id: element.dataset.cta || 'unknown',
        cta_location: element.dataset.ctaLocation || 'site',
        page_location: window.location.href,
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (consent !== 'all') return null;

  return (
    <Script
      id="zinviq-gtm"
      src={`https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`}
      strategy="afterInteractive"
    />
  );
}
