import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_LIST } from '@/constants/services-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Check, ShoppingBag, Globe, Search, BarChart3, Sparkles } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export const metadata: Metadata = {
  title: 'Digital Engineering & Growth Services | Shopify, WordPress, SEO | Zinviq',
  description:
    'Explore Zinviq full suite of digital engineering capabilities: Custom Shopify development, enterprise WordPress, data-driven technical SEO, and paid performance marketing.',
  keywords: [
    'Shopify Development Services',
    'WordPress Development Agency',
    'Technical SEO Services',
    'Performance Marketing Agency',
    'Ecommerce Growth Services',
    'Custom Web Architecture',
  ],
  alternates: {
    canonical: 'https://zinviq.com/services',
  },
  openGraph: {
    title: 'Services & Capabilities | Zinviq Digital Engineering',
    description:
      'High-converting Shopify stores, zero-bloat WordPress portals, Page 1 Google SEO, and 4x+ ROAS paid advertising.',
    url: 'https://zinviq.com/services',
  },
};

const ICONS: Record<string, React.ReactNode> = {
  'shopify-development': <ShoppingBag className="w-6 h-6 text-[#00F0FF]" />,
  'wordpress-development': <Globe className="w-6 h-6 text-[#00F0FF]" />,
  'seo': <Search className="w-6 h-6 text-[#00F0FF]" />,
  'digital-marketing': <BarChart3 className="w-6 h-6 text-[#00F0FF]" />,
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Zinviq Core Services',
    itemListElement: SERVICES_LIST.map((srv, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: srv.title,
        description: srv.description,
        url: `https://zinviq.com/services/${srv.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#050814] pt-36 pb-28 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#00F0FF]/15 via-[#0070F3]/08 to-transparent blur-[130px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <Badge variant="cyan" className="mb-4">
              Core Capabilities Directory
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Engineered for Revenue Velocity & Market Dominance.
            </h1>
            <p className="text-slate-300 mt-5 text-lg leading-relaxed">
              We replace sluggish templates and fragmented agencies with a unified team of elite software engineers, SEO specialists, and direct-response performance marketers.
            </p>
          </div>

          {/* Detailed Service Cards */}
          <div className="space-y-12">
            {SERVICES_LIST.map((service, index) => (
              <SpotlightCard
                key={service.id}
                className="p-8 sm:p-12 border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl rounded-3xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        {ICONS[service.id]}
                      </div>
                      <Badge variant="blue" className="text-xs">
                        {service.badge}
                      </Badge>
                      <span className="font-mono text-xs text-slate-500">
                        {service.code}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-[#00F0FF] text-sm sm:text-base font-semibold">
                      {service.tagline}
                    </p>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                        Core Service Scope
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.slice(0, 4).map((d) => {
                          const deliverableTitle = typeof d === 'string' ? d : d.title;
                          return (
                            <div key={deliverableTitle} className="flex items-start gap-2 text-xs text-slate-200">
                              <Check className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                              <span>{deliverableTitle}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      <Link href={`/services/${service.slug}`}>
                        <Button variant="primary" size="md">
                          Deep-Dive & Architecture Spec
                          <ArrowUpRight className="w-4 h-4 ml-1.5" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="secondary" size="md">
                          Request Proposal
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Metrics */}
                  <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-8 space-y-6">
                    <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                      Verified Client Benchmarks
                    </div>

                    <div className="space-y-5">
                      {service.impactMetrics.map((metric) => (
                        <div key={metric.label} className="border-b border-white/[0.04] pb-4">
                          <div className="text-3xl font-bold text-white text-[#00F0FF]">
                            {metric.value}
                          </div>
                          <div className="text-xs font-semibold text-slate-200 mt-0.5">
                            {metric.label}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1">
                            {metric.detail}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Supported Ecosystem & Tech
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.featuredTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
