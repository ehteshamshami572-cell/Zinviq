import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { FileCheck2, Gauge, CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: FileCheck2,
    title: 'Written scope before work',
    description: 'Deliverables, KPIs and approval steps are agreed before a sprint starts.',
  },
  {
    icon: Gauge,
    title: 'Baseline before claims',
    description: 'Speed, crawlability and conversion data are recorded before we recommend changes.',
  },
  {
    icon: CalendarCheck,
    title: 'Reporting on a cadence',
    description: 'Weekly build updates and monthly performance reviews against agreed goals.',
  },
  {
    icon: ShieldCheck,
    title: 'No invented proof',
    description: 'We do not publish testimonials, badges or scores without written permission and evidence.',
  },
];

export function TrustSection() {
  return (
    <section className="py-28 bg-navy-950 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="lavender" className="mb-3">
            Evidence-First Engagement
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Clear Process. Measurable Work. No Invented Proof.
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            We would rather show you how we work than paste numbers we cannot verify. Every engagement is measured
            against a baseline you can see.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/[0.08] bg-navy-900/80 backdrop-blur-xl p-7 hover:border-pink-400/40 transition-colors"
            >
              <Icon className="w-6 h-6 text-pink-200 mb-5" aria-hidden="true" />
              <h3 className="font-bold text-white text-lg">{title}</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl bg-pink-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-pink-600"
          >
            Review Our Approach
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-pink-400/50 hover:text-pink-200"
          >
            Request Your Baseline Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
