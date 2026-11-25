import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Search, Compass, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Technical & Commercial Discovery',
    icon: <Search className="w-5 h-5 text-pink-200" />,
    description:
      'We audit your current tech stack, checkout drop-off rates, SEO crawl depth, and paid ad unit economics to identify high-leverage growth bottlenecks.',
    output: 'Prioritised Growth & Tech Audit',
  },
  {
    step: '02',
    title: 'Architecture & UX Blueprinting',
    icon: <Compass className="w-5 h-5 text-pink-200" />,
    description:
      'We design conversion-focused wireframes, custom Gutenberg/Liquid architectures and documented search-intent maps before development starts.',
    output: 'Figma UI/UX Prototypes & Technical Spec',
  },
  {
    step: '03',
    title: 'Bespoke Development & Sprint Execution',
    icon: <Code2 className="w-5 h-5 text-pink-200" />,
    description:
      'Our engineers build your custom Shopify or WordPress platform with lean code, measured speed budgets and valid structured data where eligible.',
    output: 'Staging Environment & QA Verification',
  },
  {
    step: '04',
    title: 'Launch & Paid Scale',
    icon: <Rocket className="w-5 h-5 text-pink-200" />,
    description:
      'We plan DNS cutovers, submit XML sitemaps to Google, launch the agreed acquisition channels and check results after release.',
    output: 'Launch Checklist & Performance Review',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-navy-950 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="lavender" className="mb-3">
            Execution Framework
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            How We Plan, Build and Measure Growth
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            A documented four-step engineering and growth process designed to reduce launch risk and make each decision measurable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-white/[0.08] bg-navy-900/80 backdrop-blur-xl p-6 sm:p-7 shadow-card-glow hover:border-pink-400/40 transition-all group"
            >
              {/* Step Number with hot-pink glow */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-3xl font-extrabold text-pink-200/60 group-hover:text-pink-200 transition-colors">
                  {step.step}
                </span>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] shadow-pink-glow">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-pink-200">
                Deliverable: {step.output}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
