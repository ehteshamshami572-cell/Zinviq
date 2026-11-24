'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, TrendingUp, Zap, ShieldCheck, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-navy-950 pt-32 pb-20">
      {/* Ambient hot-pink glow derived from the brand beacon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-pink-400/20 via-pink-600/10 to-transparent blur-[120px] rounded-full"
      />

      {/* Subtle hot-pink grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--pink-400))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--pink-400))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-[0.04]"
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Kinetic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <Badge variant="lavender" className="text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-pink-glow animate-pulse" />
            Shopify • WordPress • SEO • Digital Marketing
          </Badge>
        </motion.div>

        {/* High-Conversion Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-5xl mx-auto"
        >
          IT services for fast, high-converting websites and{' '}
          <span className="bg-gradient-to-r from-pink-200 via-pink-400 to-pink-600 bg-clip-text text-transparent drop-shadow-pink-glow">
            measurable growth.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Zinviq is a digital engineering and growth partner. We build custom <strong className="text-white font-semibold">Shopify</strong> and <strong className="text-white font-semibold">WordPress</strong> platforms, improve visibility with <strong className="text-pink-200 font-semibold">technical SEO</strong>, and manage <strong className="text-pink-200 font-semibold">paid acquisition</strong> with transparent reporting.
        </motion.p>

        {/* Conversion Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              <Sparkles className="w-4 h-4 mr-2" />
              Claim Free Store & SEO Audit
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href="/case-studies" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Explore Case Studies
            </Button>
          </Link>
        </motion.div>

        {/* Live Agency Telemetry & Proof Metrics Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="mt-16 mx-auto max-w-4xl text-left rounded-2xl border border-white/[0.08] bg-navy-900/80 backdrop-blur-xl p-6 sm:p-8 shadow-card-glow"
        >
          {/* Card Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-pink-glow" />
              <span className="font-mono text-xs font-semibold text-slate-200 tracking-wider">
                ZINVIQ DELIVERY STANDARDS // WHAT WE CHECK
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                PROCESS CHECK
              </span>
              <span>2026 STANDARD</span>
            </div>
          </div>

          {/* Metric Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-400/30 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-pink-200" />
                DISCOVERY
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">4 areas</div>
              <div className="text-[11px] text-pink-200 mt-0.5 font-medium">Speed, SEO, CRO and ads</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-400/30 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                <Zap className="w-3.5 h-3.5 text-pink-200" />
                RESPONSE
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">24h target</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Audit notes after review</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-400/30 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-200" />
                BUILD QA
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Pre-launch</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Build, type and header checks</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-400/30 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                <ShoppingCart className="w-3.5 h-3.5 text-pink-200" />
                REPORTING
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Monthly</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Against agreed KPIs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
