import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { OG_IMAGE, SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy',
  description:
    'How Zinviq handles enquiry data, cookies, Google Analytics consent, spam checks, and client confidentiality.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: 'Privacy & Cookie Policy | Zinviq',
    description: 'Data handling, analytics consent and confidentiality practices at Zinviq.',
    url: `${SITE_URL}/privacy-policy`,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-navy-950 pt-36 pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Badge variant="lavender" className="mb-4">
          Legal & Compliance
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 bg-navy-900/80 border border-white/[0.08] p-8 sm:p-12 rounded-3xl">
          <p className="font-mono text-xs text-slate-400">
            LAST UPDATED: NOVEMBER 2026
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Commitment to Client Confidentiality</h2>
          <p>
            At Zinviq ("we", "us"), we prioritize client confidentiality, data security, and privacy. When you request a technical audit, submit your business website, or engage our engineering services, we treat all intellectual property, revenue figures, store analytics, and technical architectures under strict non-disclosure obligations.
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

          <h2 className="text-xl font-bold text-white pt-4">4. Cookies, Analytics and Consent</h2>
          <p>
            Necessary storage is used to run this site and remember your cookie choice. Google Analytics 4 is loaded through our Google Tag Manager container (GTM-WNZS3ZJG) only after you select &ldquo;Accept all&rdquo;; before that, Google Consent Mode is set to denied for analytics and advertising storage. Analytics helps us see which pages and enquiries are useful. You can change your choice at any time using the &ldquo;Cookie settings&rdquo; link in the footer.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">5. Spam Protection</h2>
          <p>
            Our contact form uses a honeypot field, a form-open timestamp, rate limiting and, where enabled, Cloudflare Turnstile. Turnstile verifies that a submission came from a person and does not set analytics cookies.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">6. Retention and Your Choices</h2>
          <p>
            Enquiry details are kept only as long as needed to respond and manage the engagement. You can ask for access to or deletion of your data at the address in section 8.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">7. Third-Party Sharing</h2>
          <p>
            Zinviq never sells, rents, or monetizes client information or audit submissions. We do not disclose your proprietary information to any external marketing brokers. Service providers such as Resend (email delivery), Upstash (rate limiting) and Google (analytics, with your consent) process data only for the stated purpose.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">8. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data deletion, contact our privacy compliance officer at <span className="text-pink-200 font-mono">legal@zinviq.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
