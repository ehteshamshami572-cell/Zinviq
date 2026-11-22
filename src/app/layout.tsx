import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/store/provider';
import { Navbar } from '@/components/common/navbar';
import { Footer } from '@/components/common/footer';
import { ToastContainer } from '@/components/ui/toast';

export const metadata: Metadata = {
  metadataBase: new URL('https://zinviq.com'),
  title: {
    default: 'Zinviq | High-Converting Shopify, WordPress, SEO & Digital Marketing Agency',
    template: '%s | Zinviq',
  },
  description:
    'Zinviq is a premier digital engineering and performance growth agency. We architect custom Shopify & WordPress platforms, dominate Page #1 Google search rankings, and scale paid acquisition with 4x+ ROAS.',
  keywords: [
    'Zinviq',
    'Shopify Development Agency',
    'Shopify Plus Development',
    'Custom WordPress Development',
    'WooCommerce Development',
    'Technical SEO Agency',
    'E-Commerce SEO Services',
    'Performance Digital Marketing',
    'Meta Ads Agency',
    'Google Ads Management',
    'Conversion Rate Optimization CRO',
  ],
  authors: [{ name: 'Zinviq Digital Technologies' }],
  creator: 'Zinviq',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zinviq.com',
    title: 'Zinviq — Shopify, WordPress, SEO & Digital Marketing Agency',
    description:
      'We build high-converting e-commerce stores, rank brands #1 on Google, and scale profitable paid advertising funnels with predictable precision.',
    siteName: 'Zinviq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zinviq — Precision in Motion',
    description: 'High-converting Shopify, WordPress, SEO & Digital Marketing studio.',
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
    url: 'https://zinviq.com',
    logo: 'https://zinviq.com/brand/logo.svg',
    slogan: 'Precision in Motion',
    description:
      'Full-service digital engineering and growth agency specializing in Shopify development, WordPress development, technical SEO, and digital marketing.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Core Agency Capabilities',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopify Development & CRO',
            description: 'Custom Shopify Plus, Liquid themes, and high-converting checkout funnels.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise WordPress & WooCommerce',
            description: 'Custom Gutenberg blocks, enterprise speed optimization, and secure portals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data-Driven Technical SEO',
            description: 'Page #1 Google search ranking dominance and organic revenue generation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Performance Digital Marketing',
            description: 'High-ROAS Meta Ads, Google Ads, and automated Klaviyo retention flows.',
          },
        },
      ],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global',
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050814] text-white font-sans antialiased selection:bg-[#00F0FF]/30 selection:text-white">
        <StoreProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
