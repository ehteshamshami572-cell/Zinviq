'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { isWhatsappEnabled, whatsappUrl } from '@/lib/contact-config';

export function WhatsAppButton() {
  if (!isWhatsappEnabled) return null;

  return (
    <a
      href={whatsappUrl(
        "Hi Zinviq, I'd like a free audit of my website: " +
          (typeof window === 'undefined' ? '' : window.location.href)
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zinviq on WhatsApp"
      className="fixed bottom-24 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-[#062B14] shadow-card-glow transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
