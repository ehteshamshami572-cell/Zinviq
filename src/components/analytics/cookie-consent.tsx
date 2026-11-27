'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CONSENT_OPEN_EVENT, readConsent, saveConsent } from '@/lib/analytics';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
    const open = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-navy-950/95 px-6 py-5 shadow-2xl backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="cookie-consent-title" className="text-sm font-bold text-white">
            Cookie preferences
          </h2>
          <p id="cookie-consent-description" className="mt-1 max-w-3xl text-xs leading-relaxed text-slate-300">
            We use necessary cookies for this site to work. With your permission, Google Analytics via
            Google Tag Manager helps us understand which pages and enquiries are useful. No analytics
            cookies are set unless you choose &ldquo;Accept all&rdquo;. See our{' '}
            <Link href="/privacy-policy" className="text-pink-200 underline hover:text-pink-100">
              Privacy &amp; Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              saveConsent('necessary');
              setVisible(false);
            }}
            className="rounded-lg border border-white/15 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-pink-400/60 hover:text-pink-200"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={() => {
              saveConsent('all');
              setVisible(false);
            }}
            className="rounded-lg bg-pink-500 px-4 py-2.5 text-xs font-bold text-navy-950 transition-colors hover:bg-pink-400"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
