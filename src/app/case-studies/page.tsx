import React from 'react';
import { SITE_URL } from '@/lib/site-config';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/constants/projects-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { ProjectShowcase } from '@/components/sections/project-showcase';

export const metadata: Metadata = {
  title: 'Example Engagements & Delivery Approach | Zinviq',
  description:
    'Review illustrative engagement examples across Shopify, WordPress, technical SEO, and digital marketing, with the checks and deliverables used in each.',
  keywords: [
    'Shopify Case Studies',
    'WordPress Case Studies',
    'SEO Case Studies',
    'Ecommerce Growth Results',
    'Performance Marketing Case Studies',
  ],
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
  openGraph: {
    title: 'Example Engagements & Delivery Approach | Zinviq',
    description:
      'Illustrative Shopify, WordPress, SEO and paid acquisition engagements showing our delivery process.',
    url: `${SITE_URL}/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-navy-950 pt-36 pb-28 relative overflow-hidden">
      {/* Top Ambient Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-pink-400/15 via-pink-600/08 to-transparent blur-[130px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="lavender" className="mb-4">
            Delivery Approach
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            See How We Work. Not Just What We Claim.
          </h1>
          <p className="text-slate-300 mt-5 text-lg leading-relaxed">
            These examples show the audits, build standards and reporting we apply. Replace them with verified, permissioned client results when available.
          </p>
        </div>

        {/* Case Studies Grid (with client filtering component) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-navy-900/80 backdrop-blur-xl p-8 shadow-card-glow hover:border-pink-400/40 hover:shadow-pink-glow transition-all duration-300"
            >
              <div>
                {/* Top Client Metadata */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-5">
                  <span className="font-mono text-xs text-slate-400">
                    {project.client}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-pink-200 bg-pink-400/10 px-2.5 py-0.5 rounded-full border border-pink-400/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-pink-glow" />
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white group-hover:text-pink-200 transition-colors leading-snug">
                  <Link href={`/case-studies/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Impact Metric Callout */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-pink-400/10 to-pink-600/10 border border-pink-400/25 flex items-center gap-3.5">
                  <div className="p-2 rounded-lg bg-pink-400/15 border border-pink-400/30">
                    <TrendingUp className="w-4 h-4 text-pink-200" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-pink-200 tracking-tight leading-none">
                      {project.impactMetric.value}
                    </div>
                    <div className="text-xs text-slate-200 font-medium mt-1">
                      {project.impactMetric.label}
                    </div>
                  </div>
                </div>

                {/* Scope Highlights */}
                <div className="mt-6 space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Layers className="w-3 h-3 text-pink-200" />
                    Key Architecture Solutions
                  </div>
                  {project.deliverablesList.slice(0, 3).map((item) => (
                    <div key={item} className="text-xs text-slate-300 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-200 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Links & Tech */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${project.slug}`}
                  className="inline-flex items-center text-xs font-bold text-pink-200 hover:underline gap-1"
                >
                  Read Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
