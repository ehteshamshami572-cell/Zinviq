import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { OG_IMAGE, SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms of Engagement',
  description:
    'Terms covering Zinviq audit requests, project scoping, delivery milestones and client responsibilities.',
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: 'Terms of Engagement | Zinviq',
    description: 'Scope, delivery and engagement terms for Zinviq services.',
    url: `${SITE_URL}/terms`,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-navy-950 pt-36 pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Badge variant="lavender" className="mb-4">
          Legal & Compliance
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">
          Terms of Engagement
        </h1>
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 bg-navy-900/80 border border-white/[0.08] p-8 sm:p-12 rounded-3xl">
          <p className="font-mono text-xs text-slate-400">
            LAST UPDATED: NOVEMBER 2026
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Scope of Services</h2>
          <p>
            Zinviq provides bespoke software engineering, e-commerce development (Shopify, WordPress, WooCommerce), search engine optimization (SEO), and performance digital marketing consulting as detailed in agreed Statements of Work (SOW).
          </p>

          <h2 className="text-xl font-bold text-white pt-4">2. Intellectual Property Ownership</h2>
          <p>
            Upon full settlement of milestone invoices, ownership of custom themes, custom codebase, graphic design deliverables, and content produced by Zinviq transfers to the client as set out in the signed agreement.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">3. Performance & Guarantees</h2>
          <p>
            Zinviq commits to professional coding practices, agreed performance budgets and milestone schedules. External platform algorithms and auction costs remain subject to third-party policies beyond any single entity's direct control.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">4. Governing Law</h2>
          <p>
            These terms are governed by standard commercial contracts and applicable enterprise laws. For inquiries regarding specific master service agreements, contact <span className="text-pink-200 font-mono">contracts@zinviq.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
