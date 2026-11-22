import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Shield, GitCommit, Gauge, Terminal } from 'lucide-react';

const STANDARDS = [
  {
    title: 'Zero-Compromise Type Safety',
    description: '100% strict TypeScript compilation with zero `any` escapes. Zod schema boundary validation on all external API requests.',
    metric: '100% Type-Safe',
  },
  {
    title: 'Core Web Vitals SLA Guarantee',
    description: 'Every web platform delivered adheres to Google Core Web Vitals thresholds: Sub-1.1s LCP, 0 layout shifts (CLS), and <80ms INP.',
    metric: '< 1.1s LCP Target',
  },
  {
    title: 'Automated CI/CD & Blue-Green Deployments',
    description: 'Deterministic GitHub Actions workflows executing automated linting, unit tests, E2E Playwright suites, and instant rollback triggers.',
    metric: '0-Downtime Rollouts',
  },
  {
    title: 'Enterprise Security by Default',
    description: 'Cryptographic secret management, OWASP Top 10 automated sanitization, CSRF tokens, strict CSP headers, and rate-limiting middleware.',
    metric: 'OWASP Compliant',
  },
];

export function ArchitectureStandards() {
  return (
    <section id="architecture" className="py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <Badge variant="dot" className="mb-3 text-slate-800 border-sky-200">
              Engineering Governance
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              We Don't Ship Shortcuts. Every Line of Code is Battle-Tested.
            </h2>
            <p className="text-slate-600 mt-4 text-base leading-relaxed">
              Software failure costs orders of magnitude more than building it right the first time. Zinviq enforces uncompromising engineering disciplines across every phase of delivery.
            </p>

            <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
              <Terminal className="w-5 h-5 text-[#00A3FF] shrink-0" />
              <div className="font-mono text-xs text-slate-700">
                <span className="text-slate-400">$</span> zinviq audit --strict-verification
                <div className="text-emerald-600 font-semibold mt-0.5">
                  ✓ 0 Vulnerabilities | 0 Type Errors | Pass 100%
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Standards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {STANDARDS.map((std) => (
              <div
                key={std.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-sky-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3FF]" />
                  <span className="font-mono text-[11px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                    {std.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
