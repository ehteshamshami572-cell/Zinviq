import React from 'react';
import { OG_IMAGE, SITE_URL } from '@/lib/site-config';
import { serializeJsonLd } from '@/lib/json-ld';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/constants/projects-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronRight, TrendingUp, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${project.title} — Example Engagement`,
    description: project.summary,
    alternates: {
      canonical: `${SITE_URL}/case-studies/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Example Engagement`,
      description: project.summary,
      url: `${SITE_URL}/case-studies/${project.slug}`,
      siteName: 'Zinviq',
      type: 'article',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: ['/brand/og-image.png'],
    },
  };
}

export default function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: `${SITE_URL}/case-studies`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${SITE_URL}/case-studies/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />

      <div className="bg-navy-950 pt-36 pb-28 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-pink-400/15 via-pink-600/08 to-transparent blur-[140px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/case-studies" className="hover:text-white transition-colors">
              CASE STUDIES
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-pink-200 font-semibold">{project.client}</span>
          </nav>

          {/* Header */}
          <div className="max-w-4xl space-y-6 mb-16">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="lavender">{project.categoryLabel}</Badge>
              <Badge variant="royal">{project.industry}</Badge>
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {project.status}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 bg-navy-900/80 border border-white/[0.08] backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
            <div className="border-r border-white/[0.06] pr-4">
              <div className="text-xs font-mono text-slate-400 uppercase">Primary Measure</div>
              <div className="text-4xl font-extrabold text-pink-200 mt-1">{project.impactMetric.value}</div>
              <div className="text-xs text-white font-medium mt-0.5">{project.impactMetric.label}</div>
            </div>

            {project.secondaryMetrics?.map((m) => (
              <div key={m.label} className="border-r border-white/[0.06] last:border-none pr-4">
                <div className="text-xs font-mono text-slate-400 uppercase">{m.label}</div>
                <div className="text-3xl font-bold text-white mt-1">{m.value}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Checked in Analytics</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-navy-900/60 backdrop-blur-xl space-y-4">
              <span className="font-mono text-xs text-rose-400 uppercase tracking-wider font-semibold">
                The Bottleneck
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                The Core Challenge
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 sm:p-10 rounded-3xl border border-pink-400/30 bg-navy-900/60 backdrop-blur-xl space-y-4 shadow-pink-glow">
              <span className="font-mono text-xs text-pink-200 uppercase tracking-wider font-semibold">
                Engineering Approach
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                The Zinviq Architecture
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results Overview & Client Testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="lavender">What We Measure</Badge>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Business & Operational Results
              </h2>
              <div className="space-y-3">
                {project.resultsOverview?.map((res) => (
                  <div key={res} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-pink-200 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Conversion CTA */}
          <div className="rounded-3xl border border-pink-400/30 bg-gradient-to-r from-pink-400/10 via-pink-600/10 to-transparent p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to See What Your Site Needs?
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
              Book a technical scoping session. We review your website architecture and document a prioritised roadmap after the audit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Claim Free Store & SEO Audit
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="secondary">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
