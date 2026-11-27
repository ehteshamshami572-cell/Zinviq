'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
const SCRIPT_READY_EVENT = 'zinviq:turnstile-ready';

interface TurnstileApi {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
      theme: 'dark' | 'light';
      size: 'flexible' | 'compact' | 'normal';
    }
  ) => string;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire: () => void;
}

/** Cloudflare Turnstile widget. Hidden until a site key is configured. */
export function Turnstile({ onVerify, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!SITE_KEY) return;

    let cancelled = false;

    const render = () => {
      if (cancelled || widgetId.current || !containerRef.current || !window.turnstile) return;
      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: onVerify,
        'expired-callback': () => {
          widgetId.current = null;
          onExpire();
        },
        'error-callback': () => {
          widgetId.current = null;
          onExpire();
        },
        theme: 'dark',
        size: 'flexible',
      });
    };

    render();
    window.addEventListener(SCRIPT_READY_EVENT, render);
    return () => {
      cancelled = true;
      window.removeEventListener(SCRIPT_READY_EVENT, render);
    };
  }, [onExpire, onVerify]);

  if (!SITE_KEY) return null;

  return (
    <div className="min-h-[64px]">
      <Script
        id="turnstile-api"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => {
          window.dispatchEvent(new Event(SCRIPT_READY_EVENT));
        }}
      />
      <div ref={containerRef} />
    </div>
  );
}
