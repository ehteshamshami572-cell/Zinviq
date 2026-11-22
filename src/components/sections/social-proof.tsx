import React from 'react';
import { ShoppingBag, Globe, Search, BarChart3, CheckCircle } from 'lucide-react';

const BADGES = [
  { name: 'Shopify Plus Partner', icon: <ShoppingBag className="w-4 h-4 text-[#00F0FF]" /> },
  { name: 'Google Premier Partner', icon: <Search className="w-4 h-4 text-[#00F0FF]" /> },
  { name: 'Meta Business Partner', icon: <BarChart3 className="w-4 h-4 text-[#00F0FF]" /> },
  { name: 'WordPress VIP Ecosystem', icon: <Globe className="w-4 h-4 text-[#00F0FF]" /> },
  { name: 'Klaviyo Master Gold', icon: <CheckCircle className="w-4 h-4 text-[#00F0FF]" /> },
];

export function SocialProof() {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#050814] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-mono text-xs text-slate-400 uppercase tracking-widest mb-6">
          Official Industry Certifications & Ecosystem Partnerships
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {BADGES.map((badge) => (
            <div
              key={badge.name}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-[#00F0FF]/30 transition-all hover:bg-white/[0.05]"
            >
              {badge.icon}
              <span className="text-xs font-semibold text-slate-300">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
