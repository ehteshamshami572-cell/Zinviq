import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FAQS } from '@/constants/faqs-data';

export function FaqSection() {
  return (
    <section id="faq" className="py-28 bg-navy-950 relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="lavender" className="mb-3">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Everything You Need to Know
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Clear answers about our development standards, timelines, SEO deliverables, and pricing.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details
              key={faq.q}
              open={idx === 0}
              className="group overflow-hidden rounded-xl border border-white/[0.08] bg-navy-900/80 backdrop-blur-xl transition-colors hover:border-pink-400/40 open:border-pink-500/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white transition-colors hover:text-pink-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown
                  className="size-5 shrink-0 text-pink-300 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="border-t border-white/[0.06] px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
