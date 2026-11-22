import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Terms of Service | Zinviq',
  description: 'Zinviq terms of service and client engagement agreements.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#050814] pt-36 pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Badge variant="cyan" className="mb-4">
          Legal & Compliance
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">
          Terms of Engagement
        </h1>
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 bg-[#080E21]/80 border border-white/[0.08] p-8 sm:p-12 rounded-3xl">
          <p className="font-mono text-xs text-slate-400">
            LAST UPDATED: NOVEMBER 2026
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Scope of Services</h2>
          <p>
            Zinviq provides bespoke software engineering, e-commerce development (Shopify, WordPress, WooCommerce), search engine optimization (SEO), and performance digital marketing consulting as detailed in agreed Statements of Work (SOW).
          </p>

          <h2 className="text-xl font-bold text-white pt-4">2. Intellectual Property Ownership</h2>
          <p>
            Upon full settlement of milestone invoices, all custom themes, custom codebase, graphic design deliverables, and content produced by Zinviq become the 100% exclusive intellectual property of the client.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">3. Performance & Guarantees</h2>
          <p>
            While Zinviq guarantees adherence to professional coding best practices, Core Web Vitals thresholds, and agreed milestone schedules, external platform algorithms (including Google Search indexing and Meta Ads auction costs) are subject to third-party policies beyond any single entity's direct control.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">4. Governing Law</h2>
          <p>
            These terms are governed by standard commercial contracts and applicable enterprise laws. For inquiries regarding specific master service agreements, contact <span className="text-[#00F0FF] font-mono">contracts@zinviq.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
