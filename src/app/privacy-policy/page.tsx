import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zinviq',
  description: 'Zinviq data privacy, cookies, and client confidentiality policy.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#050814] pt-36 pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Badge variant="cyan" className="mb-4">
          Legal & Compliance
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 bg-[#080E21]/80 border border-white/[0.08] p-8 sm:p-12 rounded-3xl">
          <p className="font-mono text-xs text-slate-400">
            LAST UPDATED: NOVEMBER 2026
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Commitment to Client Confidentiality</h2>
          <p>
            At Zinviq Technologies Inc. ("Zinviq", "we", "us"), we prioritize client confidentiality, data security, and privacy. When you request a technical audit, submit your business website, or engage our engineering services, we treat all intellectual property, revenue figures, store analytics, and technical architectures under strict non-disclosure obligations.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">2. Information We Collect</h2>
          <p>
            We collect information you explicitly provide to us via contact forms, project scoping questionnaires, and discovery calls. This may include your full name, corporate email address, organization name, current website URL, estimated budget parameters, and project descriptions.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">3. Use of Information</h2>
          <p>
            We utilize collected data strictly to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Perform requested website performance, speed, and technical SEO audits.</li>
            <li>Deliver tailored engineering and digital marketing proposals.</li>
            <li>Communicate project milestones and operational updates.</li>
            <li>Comply with applicable legal and financial compliance obligations.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">4. Third-Party Sharing</h2>
          <p>
            Zinviq never sells, rents, or monetizes client information or audit submissions. We do not disclose your proprietary information to any external marketing brokers.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">5. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data deletion, contact our privacy compliance officer at <span className="text-[#00F0FF] font-mono">legal@zinviq.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
