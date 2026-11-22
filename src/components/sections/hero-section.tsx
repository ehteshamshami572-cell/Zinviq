'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, TrendingUp, Zap, ShieldCheck, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#050814] pt-32 pb-20">
      {/* Precision Ambient Electric Cyan Glow (Derived from logo beacon) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#00F0FF]/20 via-[#0070F3]/10 to-transparent blur-[120px] rounded-full"
      />

      {/* Subtle Cyan Grid Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00F0FF_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-[0.04]"
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Kinetic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <Badge variant="cyan" className="text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
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
          We Build High-Converting Stores & Scale Brands with{' '}
          <span className="bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#0070F3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Predictable Precision.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Zinviq is a full-service digital engineering & growth agency. We architect custom <strong className="text-white font-semibold">Shopify</strong> & <strong className="text-white font-semibold">WordPress</strong> platforms, dominate Google rankings with <strong className="text-[#00F0FF] font-semibold">Technical SEO</strong>, and scale multi-channel <strong className="text-[#00F0FF] font-semibold">Digital Marketing</strong> funnels with guaranteed ROI.
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
              Explore Verified Case Studies
            </Button>
          </Link>
        </motion.div>

        {/* Live Agency Telemetry & Proof Metrics Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="mt-16 mx-auto max-w-4xl text-left rounded-2xl border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.8)]"
        >
          {/* Card Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
              <span className="font-mono text-xs font-semibold text-slate-200 tracking-wider">
                ZINVIQ GROWTH BENCHMARKS // AGGREGATED CLIENT PERFORMANCE
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                VERIFIED ROI TRACKER
              </span>
              <span>2026 BENCHMARK</span>
            </div>
          </div>

          {/* Metric Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#00F0FF]/30 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#00F0FF]" />
                CLIENT REVENUE
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">$48.6M+</div>
              <div className="text-[11px] text-[#00F0FF] mt-0.5 font-medium">Generated across stores</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#00F0FF]/30 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
                PAID ADS ROAS
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">4.4x Avg</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Meta & Google campaigns</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#00F0FF]/30 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
                CORE VITALS
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">&lt; 1.0s</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Sub-second mobile speed</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#00F0FF]/30 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                <ShoppingCart className="w-3.5 h-3.5 text-[#00F0FF]" />
                PAGE #1 RANKS
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">1,850+</div>
              <div className="text-[11px] text-slate-300 mt-0.5">High-intent commercial terms</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
