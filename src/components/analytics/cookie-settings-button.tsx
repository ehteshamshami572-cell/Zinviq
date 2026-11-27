'use client';

import { openCookieSettings } from '@/lib/analytics';

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="hover:text-slate-300 focus-visible:outline-none focus-visible:underline"
    >
      Cookie settings
    </button>
  );
}
