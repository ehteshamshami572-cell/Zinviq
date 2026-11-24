import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Compass, Sparkles, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '404 - Page Not Found | Zinviq',
  description: 'The requested page could not be located on Zinviq.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-navy-950 px-6 py-24 relative overflow-hidden">
      {/* Ambient hot-pink glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-b from-pink-400/15 via-pink-600/10 to-transparent blur-[140px] rounded-full"
      />

      <div className="relative max-w-2xl mx-auto text-center z-10">
        <Badge variant="lavender" className="mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-pink-glow animate-pulse" />
          HTTP 404 // ROUTE_NOT_LOCATED
        </Badge>

        <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight font-mono">
          4<span className="text-pink-200 drop-shadow-pink-glow">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
          System Route Not Found
        </h2>

        <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          The requested URL does not match any production endpoint. It may have been relocated, restructured, or temporarily taken offline.
        </p>

        {/* Action Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" variant="primary">
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="secondary">
              <Compass className="w-4 h-4 mr-2" />
              Explore All Services
            </Button>
          </Link>
        </div>

        {/* Quick Links Directory */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-pink-200" />
            Frequently Accessed Pages
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/services/shopify-development"
              className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-400/40 text-xs font-semibold text-slate-200 hover:text-pink-200 transition-all"
            >
              Shopify Dev →
            </Link>
            <Link
              href="/services/wordpress-development"
              className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-400/40 text-xs font-semibold text-slate-200 hover:text-pink-200 transition-all"
            >
              WordPress →
            </Link>
            <Link
              href="/services/seo"
              className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-400/40 text-xs font-semibold text-slate-200 hover:text-pink-200 transition-all"
            >
              Technical SEO →
            </Link>
            <Link
              href="/case-studies"
              className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-400/40 text-xs font-semibold text-slate-200 hover:text-pink-200 transition-all"
            >
              Case Studies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
