import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/store/provider';
import { Navbar } from '@/components/common/navbar';
import { Footer } from '@/components/common/footer';
import { ToastContainer } from '@/components/ui/toast';
import { WhatsAppButton } from '@/components/common/whatsapp-button';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zinviq | Shopify, WordPress, SEO & Growth Agency',
    template: '%s | Zinviq',
  },
  description:
    'Zinviq builds fast Shopify and WordPress platforms, ranks brands on Google with technical SEO, and scales profitable paid growth.',
  keywords: [
    'Zinviq',
    'Shopify development agency',
    'WordPress development agency',
    'Technical SEO services',
    'E-commerce growth agency',
    'Performance digital marketing',
  ],
  authors: [{ name: 'Zinviq Digital Technologies' }],
  creator: 'Zinviq',
  category: 'Technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Zinviq — Shopify, WordPress, SEO & Growth Agency',
    description:
      'Fast e-commerce builds, technical SEO that ranks, and paid acquisition built for measurable return.',
    siteName: 'Zinviq',
    images: [
      {
        url: '/brand/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Zinviq — navy and hot-pink brand card with Shopify, WordPress, SEO and growth services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zinviq — Precision in Motion',
    description: 'Shopify, WordPress, technical SEO and performance marketing for ambitious brands.',
    images: ['/brand/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Zinviq',
    url: siteUrl,
    logo: `${siteUrl}/brand/logo.svg`,
    slogan: 'Precision in Motion',
    description:
      'Digital engineering and growth agency specializing in Shopify development, WordPress development, technical SEO, and performance marketing.',
    areaServed: 'Worldwide',
    email: 'growth@zinviq.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'growth@zinviq.com',
      availableLanguage: ['English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Core Agency Capabilities',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopify Development & CRO',
            description: 'Custom Shopify Plus builds, Liquid themes, and checkout optimization.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise WordPress & WooCommerce',
            description: 'Custom Gutenberg blocks, speed optimization, and secure portals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical SEO',
            description: 'Site architecture, Core Web Vitals, and high-intent search visibility.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Performance Digital Marketing',
            description: 'Paid acquisition funnels and retention campaigns with clear reporting.',
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-white font-sans antialiased selection:bg-pink-500/50 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pink-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <StoreProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ToastContainer />
          <WhatsAppButton />
        </StoreProvider>
      </body>
    </html>
  );
}
