import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/constants/projects-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { ProjectShowcase } from '@/components/sections/project-showcase';

export const metadata: Metadata = {
  title: 'Client Case Studies & Verified Growth Results | Zinviq',
  description:
    'Review verified client case studies across Shopify, WordPress, technical SEO, and digital marketing. Real revenue gains, sub-second load times, and Page 1 Google rankings.',
  keywords: [
    'Shopify Case Studies',
    'WordPress Case Studies',
    'SEO Case Studies',
    'Ecommerce Growth Results',
    'Performance Marketing Case Studies',
  ],
  alternates: {
    canonical: 'https://zinviq.com/case-studies',
  },
  openGraph: {
    title: 'Verified Client Case Studies & Results | Zinviq',
    description:
      'Real client transformations: +340% e-commerce revenue, 100/100 Core Web Vitals, 180K+ organic visits, and 4.6x ROAS.',
    url: 'https://zinviq.com/case-studies',
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#050814] pt-36 pb-28 relative overflow-hidden">
      {/* Top Ambient Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#00F0FF]/15 via-[#0070F3]/08 to-transparent blur-[130px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="cyan" className="mb-4">
            Commercial Track Record
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Real Metrics. Real Revenue. Zero Fluff.
          </h1>
          <p className="text-slate-300 mt-5 text-lg leading-relaxed">
            Every case study represents an ambitious business that outgrew slow templates, eliminated technical bottlenecks, and captured market share through custom engineering.
          </p>
        </div>

        {/* Case Studies Grid (with client filtering component) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl p-8 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)] hover:border-[#00F0FF]/40 hover:shadow-[0_15px_45px_-8px_rgba(0,240,255,0.18)] transition-all duration-300"
            >
              <div>
                {/* Top Client Metadata */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-5">
                  <span className="font-mono text-xs text-slate-400">
                    {project.client}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-0.5 rounded-full border border-[#00F0FF]/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                  <Link href={`/case-studies/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Impact Metric Callout */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#00F0FF]/10 to-[#0070F3]/10 border border-[#00F0FF]/25 flex items-center gap-3.5">
                  <div className="p-2 rounded-lg bg-[#00F0FF]/15 border border-[#00F0FF]/30">
                    <TrendingUp className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#00F0FF] tracking-tight leading-none">
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
                    <Layers className="w-3 h-3 text-[#00F0FF]" />
                    Key Architecture Solutions
                  </div>
                  {project.deliverablesList.slice(0, 3).map((item) => (
                    <div key={item} className="text-xs text-slate-300 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
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
                  className="inline-flex items-center text-xs font-bold text-[#00F0FF] hover:underline gap-1"
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
