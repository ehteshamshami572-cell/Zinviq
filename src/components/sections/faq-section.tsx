'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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

        <Accordion type="single" collapsible defaultValue="0" className="space-y-4">
          {FAQS.map((faq, idx) => (
            <AccordionItem key={faq.q} value={String(idx)}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
