import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { SocialProof } from '@/components/sections/social-proof';
import { ServicesGrid } from '@/components/sections/services-grid';
import { ProjectShowcase } from '@/components/sections/project-showcase';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FaqSection } from '@/components/sections/faq-section';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Zinviq | Premier Shopify, WordPress, SEO & Digital Marketing Agency',
  description:
    'Zinviq is a premier digital engineering & performance growth studio. We build custom Shopify & WordPress platforms, rank #1 on Google with Technical SEO, and scale paid ads with 4x+ ROAS.',
  alternates: {
    canonical: 'https://zinviq.com',
  },
  openGraph: {
    title: 'Zinviq — Shopify, WordPress, SEO & Digital Marketing Agency',
    description: 'We build high-converting e-commerce stores, rank brands #1 on Google, and scale profitable paid advertising funnels with predictable precision.',
    url: 'https://zinviq.com',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <ServicesGrid />
      <ProjectShowcase />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
