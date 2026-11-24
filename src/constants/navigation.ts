export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  children?: { label: string; href: string; description: string }[];
}

export const MAIN_NAV_LINKS: NavLink[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Shopify Development',
        href: '/services/shopify-development',
        description: 'Custom Liquid themes, headless Hydrogen stores, and checkout CRO.',
      },
      {
        label: 'WordPress Development',
        href: '/services/wordpress-development',
        description: 'Zero-bloat Gutenberg blocks, ACF architectures, and WooCommerce.',
      },
      {
        label: 'Search Engine Optimization',
        href: '/services/seo',
        description: 'Technical SEO, Core Web Vitals, and buyer-intent search visibility.',
      },
      {
        label: 'Digital Marketing & Ads',
        href: '/services/digital-marketing',
        description: 'High-ROAS Meta and Google ad funnels with server-side CAPI tracking.',
      },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'Shopify Development & CRO', href: '/services/shopify-development' },
    { label: 'Enterprise WordPress & WooCommerce', href: '/services/wordpress-development' },
    { label: 'Technical SEO & Google Ranks', href: '/services/seo' },
    { label: 'Performance Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Explore All Capabilities', href: '/services' },
  ],
  company: [
    { label: 'About Zinviq', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Free Technical & SEO Audit', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  caseStudies: [
    { label: 'Shopify rebuild example', href: '/case-studies/aura-luxe-shopify' },
    { label: 'WordPress platform example', href: '/case-studies/novacrest-wordpress-portal' },
    { label: 'Technical SEO programme example', href: '/case-studies/nordic-biohealth-seo' },
    { label: 'Paid acquisition example', href: '/case-studies/veloce-performance-marketing' },
  ],
};
