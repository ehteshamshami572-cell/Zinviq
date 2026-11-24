'use client';

import React from 'react';
import { SERVICES_LIST } from '@/constants/services-data';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowUpRight, ShoppingBag, Globe, Search, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'shopify-development': <ShoppingBag className="w-5 h-5 text-pink-200" />,
  'wordpress-development': <Globe className="w-5 h-5 text-pink-200" />,
  'seo': <Search className="w-5 h-5 text-pink-200" />,
  'digital-marketing': <BarChart3 className="w-5 h-5 text-pink-200" />,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-28 bg-navy-950 relative">
      {/* Subtle ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-pink-400/10 blur-[130px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-3xl">
            <Badge variant="lavender" className="mb-3">
              Core Agency Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              End-to-End Digital Engineering & Revenue Acceleration.
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
              We don’t use generic pre-made templates or surface-level marketing. Zinviq engineers customized digital systems and multi-channel acquisition funnels designed to scale top-line revenue.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-pink-200 hover:underline"
            >
              EXPLORE ALL SERVICES DIRECTORY →
            </Link>
          </div>
        </div>

        {/* 4 Core Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => (
            <SpotlightCard key={service.id} className="flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] shadow-pink-glow">
                      {SERVICE_ICONS[service.id]}
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {service.code}
                    </span>
                  </div>
                  <Badge variant="royal" className="text-[10px]">
                    {service.badge}
                  </Badge>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white mt-5 tracking-tight group-hover:text-pink-200 transition-colors">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>
                <p className="text-sm font-semibold text-pink-200 mt-1.5">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 space-y-2">
                  <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                    Core Capabilities & Deliverables
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.slice(0, 4).map((item) => {
                      const itemTitle = typeof item === 'string' ? item : item.title;
                      return (
                        <li key={itemTitle} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <Check className="w-4 h-4 text-pink-200 shrink-0 mt-0.5" />
                          <span>{itemTitle}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Footer: Quantifiable Metrics & Action */}
              <div className="mt-8 pt-5 border-t border-white/[0.08]">
                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2 mb-4 bg-white/[0.02] p-3 rounded-xl border border-white/[0.06]">
                  {service.impactMetrics.map((spec) => (
                    <div key={spec.label} className="text-center">
                      <div className="text-[10px] sm:text-xs font-mono text-slate-400">{spec.label}</div>
                      <div className="text-sm sm:text-base font-bold text-pink-200 mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack and Book CTA */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.featuredTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold text-pink-200 hover:text-white transition-colors gap-1.5 bg-pink-400/10 px-3.5 py-1.5 rounded-lg border border-pink-400/30 hover:bg-pink-400/20"
                  >
                    <span>Explore Service Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
