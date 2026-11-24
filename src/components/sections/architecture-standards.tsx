import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Terminal } from 'lucide-react';

const STANDARDS = [
  {
    title: 'Type-Safe Delivery',
    description: 'Strict TypeScript, validated API boundaries and production builds checked before every release.',
    metric: 'Strict TS',
  },
  {
    title: 'Performance Budgets',
    description: 'Core Web Vitals are measured on staging and monitored after launch, not treated as an afterthought.',
    metric: 'CWV monitored',
  },
  {
    title: 'Repeatable Deployment',
    description: 'Versioned releases, environment separation and fast rollback paths for lower launch risk.',
    metric: 'Rollback ready',
  },
  {
    title: 'Security by Default',
    description: 'Secret management, hardened response headers, input validation and rate limiting on write endpoints.',
    metric: 'Headers set',
  },
];

export function ArchitectureStandards() {
  return (
    <section id="architecture" className="py-24 bg-navy-900 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Badge variant="dot" className="mb-3">
              Engineering Governance
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              We Don&apos;t Ship Shortcuts. Every Release Is Checked.
            </h2>
            <p className="text-slate-300 mt-4 text-base leading-relaxed">
              Performance, security and maintainability are built into our delivery process from the first commit.
            </p>

            <div className="mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
              <Terminal className="w-5 h-5 text-pink-200 shrink-0" aria-hidden="true" />
              <div className="font-mono text-xs text-slate-300">
                <span className="text-slate-500">$</span> zinviq audit --strict-verification
                <div className="text-pink-200 font-semibold mt-0.5">
                  ✓ Build passed | Types checked | Headers set
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {STANDARDS.map((std) => (
              <div
                key={std.title}
                className="rounded-2xl border border-white/[0.08] bg-navy-900 p-6 transition-colors hover:border-pink-400/40"
              >
                <div className="flex items-center justify-between mb-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-200" aria-hidden="true" />
                  <span className="font-mono text-[11px] font-bold text-white bg-white/[0.05] px-2 py-0.5 rounded">
                    {std.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{std.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{std.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
