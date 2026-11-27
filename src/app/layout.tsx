import type { Metadata } from 'next';
import { OG_IMAGE, SITE_URL, SOCIAL_URLS } from '@/lib/site-config';
import { Inter } from 'next/font/google';
import './globals.css';
import { serializeJsonLd } from '@/lib/json-ld';
import { Navbar } from '@/components/common/navbar';
import { Footer } from '@/components/common/footer';
import { ToastProvider } from '@/components/ui/toast';
import { WhatsAppButton } from '@/components/common/whatsapp-button';
import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { CookieConsent } from '@/components/analytics/cookie-consent';
import { GTM_CONTAINER_ID } from '@/lib/analytics';

/**
 * Consent Mode v2 defaults: no Google storage until the visitor opts in.
 * Returning visitors who already accepted analytics get GTM immediately here,
 * before React hydration, so the container is never blocked by a hydration issue.
 */
const consentDefaultScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
  try {
    if (localStorage.getItem('zinviq-cookie-consent') === 'all') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
      if (!document.querySelector('script[data-gtm="${GTM_CONTAINER_ID}"]')) {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}';
        s.setAttribute('data-gtm', '${GTM_CONTAINER_ID}');
        document.head.appendChild(s);
      }
    }
  } catch (e) {}
`;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zinviq | Shopify, WordPress, SEO & Growth Agency',
    template: '%s | Zinviq',
  },
  description:
    'Zinviq builds Shopify and WordPress platforms, improves search visibility with technical SEO, and manages paid growth with clear reporting.',
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
  applicationName: 'Zinviq',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Zinviq — Shopify, WordPress, SEO & Growth Agency',
    description:
      'Fast e-commerce builds, technical SEO that ranks, and paid acquisition built for measurable return.',
    siteName: 'Zinviq',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zinviq — Precision in Motion',
    description: 'Shopify, WordPress, technical SEO and performance marketing for ambitious brands.',
    images: ['/brand/og-image.png'],
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
    ...(SOCIAL_URLS.length > 0 ? { sameAs: SOCIAL_URLS } : {}),
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
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentDefaultScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        <meta name="msvalidate.01" content="4D614D444DCD06CD337A566141DB6B07" />
        <meta name="google-site-verification" content="I1eYWxiXP_atAIp1Wrpg4_ultLkQpugHgUw680FCwSI" />
      </head>
      <body className="min-h-screen bg-background text-white font-sans antialiased selection:bg-pink-500/50 selection:text-white">
        <AnalyticsProvider />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pink-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <ToastProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ToastProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
