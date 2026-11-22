import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Search, Compass, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Technical & Commercial Discovery',
    icon: <Search className="w-5 h-5 text-[#00F0FF]" />,
    description:
      'We audit your current tech stack, checkout drop-off rates, SEO crawl depth, and paid ad unit economics to identify high-leverage growth bottlenecks.',
    output: 'Comprehensive 40-Point Growth & Tech Audit',
  },
  {
    step: '02',
    title: 'Architecture & UX Blueprinting',
    icon: <Compass className="w-5 h-5 text-[#00F0FF]" />,
    description:
      'We design high-converting wireframes, custom Gutenberg/Liquid architectures, and data-backed search intent matrices before writing a single line of code.',
    output: 'Figma UI/UX Prototypes & Technical Spec',
  },
  {
    step: '03',
    title: 'Bespoke Development & Sprint Execution',
    icon: <Code2 className="w-5 h-5 text-[#00F0FF]" />,
    description:
      'Our senior engineers code your custom Shopify or WordPress platform with zero bloat, sub-second speeds, and 100% strict Schema.org markup.',
    output: 'Staging Environment & QA Verification',
  },
  {
    step: '04',
    title: 'Zero-Downtime Launch & Paid Scale',
    icon: <Rocket className="w-5 h-5 text-[#00F0FF]" />,
    description:
      'We manage DNS cutovers with zero downtime, submit XML sitemaps to Google, launch multi-channel ad funnels, and continuously optimize conversions.',
    output: 'Compounding Revenue & Organic Growth',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-[#050814] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-3">
            Execution Framework
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            How We Deliver Compounding ROI
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            A battle-tested 4-step engineering and growth methodology designed to mitigate launch risks and maximize revenue velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-white/[0.08] bg-[#080E21]/80 backdrop-blur-xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#00F0FF]/40 transition-all group"
            >
              {/* Step Number with Cyan glow */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-3xl font-extrabold text-white/[0.12] group-hover:text-[#00F0FF]/40 transition-colors">
                  {step.step}
                </span>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] shadow-[0_0_12px_rgba(0,240,255,0.15)]">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#00F0FF]">
                Deliverable: {step.output}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
