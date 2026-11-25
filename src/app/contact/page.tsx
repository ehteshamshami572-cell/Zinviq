import React from 'react';
import { OG_IMAGE, SITE_URL } from '@/lib/site-config';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact-section';
import { Badge } from '@/components/ui/badge';
import { Mail, Clock, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Claim Your Free Store & SEO Audit',
  description:
    'Connect directly with the Zinviq project team. Request a focused technical and SEO audit with a 24-hour response target.',
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
    title: 'Claim Your Free Store, SEO & Growth Audit',
    description:
      'Direct engineering consultation with a 24-hour response target and confidential review of your project details.',
    url: `${SITE_URL}/contact`,
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-navy-950 pt-20 relative overflow-hidden">
      <ContactSection />
    </div>
  );
}
