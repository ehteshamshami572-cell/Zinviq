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
        description: 'Technical SEO, Core Web Vitals, and Page #1 Google search ranking dominance.',
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
    { label: 'Verified Case Studies', href: '/case-studies' },
    { label: 'Free Technical & SEO Audit', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  caseStudies: [
    { label: 'Aura Luxe London (+340% Sales)', href: '/case-studies/aura-luxe-shopify' },
    { label: 'Novacrest Capital (100 Core Vitals)', href: '/case-studies/novacrest-wordpress-portal' },
    { label: 'Nordic BioHealth (180K SEO Visits)', href: '/case-studies/nordic-biohealth-seo' },
    { label: 'Veloce Chronographs (4.6x ROAS)', href: '/case-studies/veloce-performance-marketing' },
  ],
};
