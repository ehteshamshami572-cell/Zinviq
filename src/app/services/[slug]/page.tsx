import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES_DETAILED_DATA } from '@/constants/services-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, ShieldCheck, Zap, ArrowLeft, HelpCircle } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/spotlight-card';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DETAILED_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES_DETAILED_DATA[params.slug];
  if (!service) {
    return {
      title: 'Service Not Found | Zinviq',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://zinviq.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://zinviq.com/services/${service.slug}`,
      siteName: 'Zinviq',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES_DETAILED_DATA[params.slug];
  if (!service) {
    notFound();
  }

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.shortTitle,
    description: service.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Zinviq',
      url: 'https://zinviq.com',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.deliverables.map((d, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: d.title,
          description: d.description,
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://zinviq.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://zinviq.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.shortTitle,
        item: `https://zinviq.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-[#050814] pt-36 pb-28 relative overflow-hidden">
        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#00F0FF]/15 via-[#0070F3]/08 to-transparent blur-[140px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/services" className="hover:text-white transition-colors">
              SERVICES
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#00F0FF] font-semibold">{service.code}</span>
          </nav>

          {/* Service Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse mr-1" />
                {service.badge}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                {service.title}
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-[#00F0FF]">
                {service.heroHighlight}
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                {service.longDescription}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Request {service.shortTitle} Scope
                    <ArrowUpRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="secondary" size="lg">
                    View Verified Results
                  </Button>
                </Link>
              </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="lg:col-span-4 bg-[#080E21]/80 border border-white/[0.08] backdrop-blur-xl p-8 rounded-3xl space-y-6 shadow-2xl">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider border-b border-white/[0.06] pb-3">
                Expected Performance Outcomes
              </div>

              <div className="space-y-5">
                {service.impactMetrics.map((m) => (
                  <div key={m.label} className="border-b border-white/[0.04] pb-4">
                    <div className="text-3xl font-extrabold text-[#00F0FF]">
                      {m.value}
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Specialized Tech Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.featuredTech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Deliverables Section */}
          <div className="mb-24">
            <div className="max-w-3xl mb-12">
              <Badge variant="blue" className="mb-3">
                Engineering Scope
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                What We Deliver
              </h2>
              <p className="text-slate-300 mt-3 text-base">
                Every engagement follows an exhaustive scope to ensure your digital platform outperforms market competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliverables.map((d, index) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl p-7 flex flex-col justify-between hover:border-[#00F0FF]/40 transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs text-[#00F0FF] font-bold">
                      DELIVERABLE // 0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-3">
                      {d.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Zinviq */}
          <div className="mb-24 border-y border-white/[0.06] py-20">
            <div className="max-w-3xl mb-12">
              <Badge variant="cyan" className="mb-3">
                Competitive Advantage
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Why Industry Leaders Choose Zinviq
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.whyChooseUs.map((w) => (
                <div
                  key={w.title}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]"
                >
                  <ShieldCheck className="w-8 h-8 text-[#00F0FF] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {w.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {w.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs for Service */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-12">
              <Badge variant="cyan" className="mb-3">
                Service FAQ
              </Badge>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Frequently Asked Questions about {service.shortTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl"
                >
                  <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                    <HelpCircle className="w-4 h-4 text-[#00F0FF] shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="rounded-3xl border border-[#00F0FF]/30 bg-gradient-to-r from-[#00F0FF]/10 via-[#0070F3]/10 to-transparent p-10 sm:p-14 text-center relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to Accelerate Your {service.shortTitle}?
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
              Contact our senior engineering and growth directors today. We analyze your parameters and deliver a complimentary 40-point technical roadmap within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Claim Free Technical Audit
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="secondary">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
