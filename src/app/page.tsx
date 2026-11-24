import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';
import { HeroSection } from '@/components/sections/hero-section';
import { SocialProof } from '@/components/sections/social-proof';
import { ServicesGrid } from '@/components/sections/services-grid';
import { ProjectShowcase } from '@/components/sections/project-showcase';
import { ProcessSection } from '@/components/sections/process-section';
import { TrustSection } from '@/components/sections/testimonials-section';
import { FaqSection } from '@/components/sections/faq-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FAQS } from '@/constants/faqs-data';

export const metadata: Metadata = {
  title: 'Zinviq | Shopify, WordPress, SEO & Growth Agency',
  description:
    'Zinviq builds fast Shopify and WordPress platforms, ranks brands on Google with technical SEO, and scales paid growth with clear reporting.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Zinviq — Shopify, WordPress, SEO & Growth Agency',
    description: 'Fast builds, technical SEO and measurable paid growth for ambitious brands.',
    url: SITE_URL,
  },
};

export default function HomePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <SocialProof />
      <ServicesGrid />
      <ProjectShowcase />
      <ProcessSection />
      <TrustSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
