import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Marcus Vance',
    role: 'Founder & CEO, Aura Luxe London',
    project: 'Custom Shopify 2.0 & CRO Overhaul',
    stat: '+340% Revenue Increase',
    quote:
      'Zinviq completely transformed our Shopify storefront. We cut our mobile load time to under a second, and our checkout completion surged immediately. They operate with unbelievable technical precision.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Growth, Nordic BioHealth',
    project: 'Technical SEO & Programmatic Strategy',
    stat: '180K+ Organic Visits/Mo',
    quote:
      'We spent years hiring generic SEO agencies that delivered zero tangible revenue. Zinviq came in, rebuilt our site architecture, and within 4 months we were ranking #1 for all our core commercial terms.',
  },
  {
    name: 'David Reynolds',
    role: 'Managing Director, Novacrest Group',
    project: 'Custom WordPress & ACF Architecture',
    stat: '100/100 Core Web Vitals',
    quote:
      'Our previous WordPress site was plagued with slow speeds and bloated plugins. Zinviq built a clean, custom Gutenberg block framework that runs at lightning speed and gives our marketing team complete autonomy.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#050814] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-3">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Trusted by Ambitious Brands & Enterprises
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            See how our custom development, search engine dominance, and performance marketing drive tangible bottom-line growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl p-8 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-[#00F0FF]/40 transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#00F0FF]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_6px_#00F0FF]" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06]">
                <div className="text-xs font-mono font-bold text-[#00F0FF] mb-1">
                  {t.stat}
                </div>
                <div className="font-bold text-white text-base">{t.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-1">
                  Scope: {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
