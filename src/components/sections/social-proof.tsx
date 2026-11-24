import React from 'react';
import { ShoppingBag, Globe, Search, BarChart3, Mail } from 'lucide-react';

const PLATFORMS = [
  { name: 'Shopify Plus', icon: <ShoppingBag className="w-4 h-4 text-pink-200" /> },
  { name: 'Google Ads & Analytics', icon: <Search className="w-4 h-4 text-pink-200" /> },
  { name: 'Meta Ads Manager', icon: <BarChart3 className="w-4 h-4 text-pink-200" /> },
  { name: 'WordPress & WooCommerce', icon: <Globe className="w-4 h-4 text-pink-200" /> },
  { name: 'Klaviyo', icon: <Mail className="w-4 h-4 text-pink-200" /> },
];

export function SocialProof() {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-mono text-xs text-slate-400 uppercase tracking-widest mb-6">
          Platforms & ecosystems we build on
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-pink-400/40 transition-all hover:bg-white/[0.05]"
            >
              {platform.icon}
              <span className="text-xs font-semibold text-slate-300">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
