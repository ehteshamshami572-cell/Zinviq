import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ShieldCheck, Zap, Terminal, Target, Award, Users } from 'lucide-react';
import { BrandLogo } from '@/components/common/brand-logo';

export const metadata: Metadata = {
  title: 'About Zinviq | Precision in Motion — Digital Engineering Studio',
  description:
    'Discover the philosophy behind Zinviq: elite digital engineering, zero template bloat, sub-second load times, and compounding commercial revenue.',
  keywords: [
    'About Zinviq',
    'Digital Engineering Studio',
    'Shopify Plus Specialists',
    'WordPress Architects',
    'Technical SEO Team',
  ],
  alternates: {
    canonical: 'https://zinviq.com/about',
  },
  openGraph: {
    title: 'About Zinviq — Precision in Motion',
    description:
      'We reject slow templates and bloated plugins. Zinviq engineers high-performance web systems and data-driven growth machines.',
    url: 'https://zinviq.com/about',
  },
};

export default function AboutPage() {
  const VALUES = [
    {
      title: 'Precision Over Presumption',
      desc: 'We never guess. Every layout choice, code refactor, and SEO cluster is backed by empirical data, real user behavior, and Google Search telemetry.',
      icon: <Terminal className="w-6 h-6 text-[#00F0FF]" />,
    },
    {
      title: 'Zero-Bloat Engineering',
      desc: 'We refuse to install heavy page builders or cheap pre-made themes. Every line of code is custom-crafted for speed, stability, and longevity.',
      icon: <Zap className="w-6 h-6 text-[#00F0FF]" />,
    },
    {
      title: 'True Commercial Incrementality',
      desc: 'Rankings and traffic only matter if they drive revenue. We align our engineering sprints and paid ad funnels with top-line business growth.',
      icon: <Target className="w-6 h-6 text-[#00F0FF]" />,
    },
    {
      title: 'Radical Transparency',
      desc: 'No vague monthly agency reports. You receive direct access to senior engineers, real-time analytics dashboards, and clear sprint milestone tracking.',
      icon: <ShieldCheck className="w-6 h-6 text-[#00F0FF]" />,
    },
  ];

  return (
    <div className="bg-[#050814] pt-36 pb-28 relative overflow-hidden">
      {/* Top Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#00F0FF]/15 via-[#0070F3]/08 to-transparent blur-[130px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="cyan" className="mb-4">
            Studio Manifesto
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            We Replaced Traditional Agencies with Senior Engineering Precision.
          </h1>
          <p className="text-slate-300 mt-5 text-lg leading-relaxed">
            Founded on the belief that digital commerce shouldn't be held hostage by sluggish templates, fragile plugins, and vanity marketing metrics.
          </p>
        </div>

        {/* Brand Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 border-b border-white/[0.06] pb-24">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The Zinviq Standard: "Precision in Motion"
            </h2>
            <p>
              Too many ambitious companies partner with digital agencies only to receive a recycled ThemeForest template with 30 conflicting plugins that takes 5 seconds to load on mobile and converts at less than 1%.
            </p>
            <p>
              <strong className="text-white font-semibold">Zinviq was built to be the antidote.</strong> We are a modern software house combining rigorous computer science disciplines with conversion-rate psychology and data-driven marketing.
            </p>
            <p>
              When we build a Shopify Plus store or an enterprise WordPress platform, we build it to pass Core Web Vitals with 100/100 benchmarks. When we execute an SEO campaign, we target the exact high-intent queries your buyers use when they have their credit cards out.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#080E21]/80 border border-white/[0.08] backdrop-blur-xl p-8 rounded-3xl space-y-6 shadow-2xl">
            <BrandLogo size="lg" />
            <div className="border-t border-white/[0.06] pt-6 space-y-4 text-xs font-mono text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">HEADQUARTERS</span>
                <span className="text-white">GLOBAL DISTRIBUTED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CORE DISCIPLINES</span>
                <span className="text-[#00F0FF]">SHOPIFY • WORDPRESS • SEO • ADS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CLIENT RETENTION RATE</span>
                <span className="text-emerald-400">96.4% ANNUAL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">DELIVERY SPEED BENCHMARK</span>
                <span className="text-white">&lt; 1.0s MOBILE LCP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <Badge variant="blue" className="mb-3">
              Guiding Ethos
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-3xl border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl space-y-3 hover:border-[#00F0FF]/40 transition-colors"
              >
                <div className="p-3 w-fit rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{val.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-[#00F0FF]/30 bg-gradient-to-r from-[#00F0FF]/10 via-[#0070F3]/10 to-transparent p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Build With Precision. Scale With Certainty.
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Schedule an introductory consultation with our senior solutions directors to discover how Zinviq can accelerate your digital roadmap.
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
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
