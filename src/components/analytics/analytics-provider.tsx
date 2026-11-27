'use client';

import { useEffect } from 'react';
import {
  CONSENT_CHANGE_EVENT,
  EVENTS,
  loadGtm,
  loadOneSignal,
  loadTawk,
  pushEvent,
  readConsent,
} from '@/lib/analytics';

/**
 * Keeps GTM available after consent without depending on React hydration.
 * The document-head consent script also loads GTM for returning visitors, so
 * a late or failed hydration cannot block analytics.
 */
export function AnalyticsProvider() {
  useEffect(() => {
    if (readConsent() === 'all') {
      loadGtm();
      loadTawk();
      loadOneSignal();
    }

    const onConsentChange = () => {
      if (readConsent() === 'all') {
        loadGtm();
        loadTawk();
        loadOneSignal();
      }
    };

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

    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
