import React from 'react';
import { SITE_URL } from '@/lib/site-config';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact-section';
import { Badge } from '@/components/ui/badge';
import { Mail, Clock, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Zinviq | Claim Your Free Store & SEO Audit',
  description:
    'Connect directly with Zinviq senior solutions architects. Request a focused technical and SEO audit with a 24-hour response target.',
  keywords: [
    'Contact Zinviq',
    'Free SEO Audit',
    'Shopify Audit',
    'WordPress Consultation',
    'Digital Marketing Consultation',
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Claim Your Free Store, SEO & Growth Audit | Zinviq',
    description:
      'Direct engineering consultation with 24-hour turnaround and 100% strict mutual confidentiality.',
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-navy-950 pt-20 relative overflow-hidden">
      <ContactSection />
    </div>
  );
}
