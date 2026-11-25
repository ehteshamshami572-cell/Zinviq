import type { Metadata } from 'next';
import { OG_IMAGE, SITE_URL } from '@/lib/site-config';
import { serializeJsonLd } from '@/lib/json-ld';
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
  title: 'Shopify, WordPress, SEO & Growth Agency',
  description:
    'Zinviq builds Shopify and WordPress platforms, improves search visibility with technical SEO, and manages paid growth with clear reporting.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Zinviq — Shopify, WordPress, SEO & Growth Agency',
    description: 'Fast builds, technical SEO and measurable paid growth for ambitious brands.',
    url: SITE_URL,
    images: [OG_IMAGE],
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
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
