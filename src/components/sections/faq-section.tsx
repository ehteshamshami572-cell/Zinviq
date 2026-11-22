'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'How long does a custom Shopify or WordPress website take to build?',
    a: 'Typical custom store and corporate builds take between 4 to 8 weeks depending on scope, custom third-party integrations, and catalog complexity. For clients with urgent launch targets, we offer expedited 3-week sprint delivery.',
  },
  {
    q: 'Why should we choose a custom build over pre-made Theme Forest or Shopify templates?',
    a: 'Off-the-shelf templates carry massive amounts of unused code, unoptimized scripts, and security vulnerabilities that drag mobile load speeds down to 4-6 seconds. A custom Zinviq build is coded cleanly from scratch, loads in under 1 second, and directly increases conversion rates by up to 40%.',
  },
  {
    q: 'How quickly can we expect to see results from your SEO campaigns?',
    a: 'Technical SEO fixes and indexing overhauls often produce traffic lifts within 30 to 60 days. Competitive high-volume commercial keyword rankings typically reach page #1 dominance within 3 to 6 months of systematic content clustering and authoritative backlink acquisition.',
  },
  {
    q: 'Can you migrate our existing store from WooCommerce to Shopify (or vice versa) without losing SEO rankings?',
    a: 'Yes. We specialize in zero-loss platform migrations. We preserve 100% of your historical URL structures, customer accounts, and order histories, and implement strict 1-to-1 301 redirect mapping so your Google rankings remain protected.',
  },
  {
    q: 'What is included in the free technical and SEO audit?',
    a: 'Our senior specialists perform an in-depth audit covering: Mobile Core Web Vitals, Checkout Friction Points, Technical SEO Crawlability, Meta & Google Ad Unit Economics, and a prioritized roadmap for immediate revenue improvements.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 bg-[#050814] relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="cyan" className="mb-3">
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
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00F0FF] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
