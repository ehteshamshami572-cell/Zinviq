import type { CaseStudyItem } from '@/types/project';

export const PROJECTS_DATA: CaseStudyItem[] = [
  {
    id: 'proj-01',
    slug: 'aura-luxe-shopify',
    title: 'Aura Luxe Global Apparel Flagship',
    client: 'Aura Luxe London',
    industry: 'Luxury Fashion & Apparel',
    category: 'SHOPIFY',
    categoryLabel: 'Shopify Plus & CRO',
    summary: 'Custom Shopify 2.0 architecture and one-click upsell checkout funnel scaling monthly revenue from $40k to $185k.',
    challenge:
      'Aura Luxe was struggling with a bloated pre-made Shopify theme loaded with 28 conflicting apps. Mobile page load times exceeded 4.8 seconds, causing a 72% cart abandonment rate and limiting their international scaling efforts.',
    solution:
      'Zinviq engineered a custom Shopify 2.0 theme from the ground up using clean Liquid and Tailwind CSS. We replaced 16 third-party apps with native Liquid components, implemented a slide-out AJAX cart drawer with dynamic tiered free-shipping thresholds, and integrated multi-currency localized checkout.',
    impactMetric: {
      value: '+340%',
      label: 'Monthly Revenue Growth',
    },
    secondaryMetrics: [
      { label: 'Mobile Page Speed', value: '0.9s' },
      { label: 'Conversion Rate', value: '4.2%' },
      { label: 'Cart Abandonment Drop', value: '-38%' },
    ],
    techStack: ['Shopify Plus', 'Liquid 2.0', 'Klaviyo', 'Recharge Subscriptions', 'Tailwind CSS', 'Alpine.js'],
    deliverablesList: [
      'Custom Shopify 2.0 theme built from scratch with zero app bloat',
      'Dynamic slide-out cart drawer with tiered upsell progress bars',
      'Sub-second mobile checkout funnel optimization',
      'Multi-currency global checkout routing for UK, US, and EU',
    ],
    resultsOverview: [
      'Scaled monthly revenue from $40,000 to over $185,000 within 90 days of launch.',
      'Average Order Value (AOV) increased from $78 to $112 through native cart recommendations.',
      'Reduced mobile load time from 4.8s to 0.9s, passing Google Core Web Vitals with flying colors.',
    ],
    clientQuote: {
      text: 'Zinviq completely transformed our business. Cutting mobile load time to under a second caused our conversion rate to skyrocket immediately. They are in a league of their own.',
      author: 'Marcus Vance',
      title: 'Founder & CEO, Aura Luxe London',
    },
    status: 'LIVE STORE',
    growthBadge: '4.2% E-comm Conversion Rate',
    year: '2026',
  },
  {
    id: 'proj-02',
    slug: 'novacrest-wordpress-portal',
    title: 'Novacrest Institutional Investment Hub',
    client: 'Novacrest Capital Partners',
    industry: 'Private Equity & Financial Services',
    category: 'WORDPRESS',
    categoryLabel: 'Custom WordPress & ACF',
    summary: 'High-security, zero-bloat custom WordPress portal with customized Gutenberg editor blocks and 100/100 Core Web Vitals.',
    challenge:
      'Novacrest operated a legacy WordPress site built on an unmaintained page builder. The site suffered frequent security warnings, took 6+ seconds to load, and required developer assistance for every simple press release update.',
    solution:
      'We designed and coded a modern, custom WordPress platform using Advanced Custom Fields (ACF Pro) and native Gutenberg blocks. We decoupled bloated dependencies, introduced Redis object caching, and applied bank-grade Cloudflare Enterprise security rules.',
    impactMetric: {
      value: '100 / 100',
      label: 'Google PageSpeed Score',
    },
    secondaryMetrics: [
      { label: 'Server Response Time (TTFB)', value: '180ms' },
      { label: 'Security Vulnerability Score', value: '0.00' },
      { label: 'Publishing Velocity', value: '5x Faster' },
    ],
    techStack: ['WordPress 6.5', 'PHP 8.3', 'Custom Gutenberg', 'ACF Pro', 'Cloudflare Enterprise', 'Redis'],
    deliverablesList: [
      'Custom Gutenberg block suite enabling self-serve editorial publishing',
      'Bank-grade SSL encryption, immutable file permissions, and 2FA enforcement',
      'Sub-200ms TTFB via Redis persistent object cache',
      'Zero layout shifts (CLS: 0.0) across all devices and viewports',
    ],
    resultsOverview: [
      'Achieved a perfect 100/100 performance score on Google PageSpeed Insights.',
      'Reduced content publishing turnaround time from 3 days to under 15 minutes.',
      'Completely eliminated recurring DDoS attacks through edge firewall rules.',
    ],
    clientQuote: {
      text: 'Our previous WordPress site was plagued with slow speeds and vulnerabilities. Zinviq built a clean, custom framework that runs at lightning speed and gives our marketing team complete autonomy.',
      author: 'David Reynolds',
      title: 'Managing Director, Novacrest Group',
    },
    status: 'ENTERPRISE DEPLOYED',
    growthBadge: 'Zero Plugin Bloat Architecture',
    year: '2026',
  },
  {
    id: 'proj-03',
    slug: 'nordic-biohealth-seo',
    title: 'Nordic BioHealth Organic Search Takeover',
    client: 'Nordic Supplements Inc.',
    industry: 'Nutraceuticals & E-Commerce Health',
    category: 'SEO',
    categoryLabel: 'E-Commerce SEO Campaign',
    summary: 'Strategic technical SEO and programmatic content cluster campaign generating 180,000+ monthly non-branded organic visitors.',
    challenge:
      'Nordic BioHealth was spending over $60,000 per month on Google Ads with diminishing returns. Their e-commerce store was invisible in organic search due to severe canonicalization loops and poor internal link structure.',
    solution:
      'Zinviq executed an exhaustive technical SEO overhaul: fixing crawl budget traps across 4,000 product variants, implementing comprehensive Schema.org JSON-LD markup, and launching an authoritative content hub backed by high-tier digital PR outreach.',
    impactMetric: {
      value: '+380%',
      label: 'Organic Revenue Increase',
    },
    secondaryMetrics: [
      { label: 'Monthly Organic Visits', value: '180,000+' },
      { label: 'Page 1 Keyword Rankings', value: '450+' },
      { label: 'Blended Customer Acquisition Cost', value: '-52%' },
    ],
    techStack: ['Ahrefs', 'Semrush', 'Google Search Console', 'Schema.org JSON-LD', 'SurferSEO', 'Screaming Frog'],
    deliverablesList: [
      'Full technical crawl audit fixing 2,400+ duplicate canonical indexing errors',
      'Programmatic collection page optimization for high-intent search terms',
      'Automated product review aggregation schema and Google Merchant feed sync',
      'High-authority editorial backlink placements in health and lifestyle publications',
    ],
    resultsOverview: [
      'Grew non-branded organic search traffic from 22,000 to over 180,000 monthly visits.',
      'Captured position #1 on Google for 450+ high-volume commercial keywords.',
      'Allowed the client to reduce paid search spend by 40% while growing total revenue.',
    ],
    clientQuote: {
      text: 'We spent years hiring generic SEO agencies that delivered zero tangible revenue. Zinviq came in, rebuilt our site architecture, and within 4 months we were ranking #1 for all our core commercial terms.',
      author: 'Sarah Jenkins',
      title: 'Head of Growth, Nordic BioHealth',
    },
    status: 'RANK #1 GOOGLE',
    growthBadge: '180K+ Monthly Organic Visits',
    year: '2025',
  },
  {
    id: 'proj-04',
    slug: 'veloce-performance-marketing',
    title: 'Veloce Watches Multi-Channel Ad Scaling',
    client: 'Veloce Chronographs',
    industry: 'Direct-to-Consumer Luxury Goods',
    category: 'MARKETING',
    categoryLabel: 'Meta & Google Ads Campaign',
    summary: 'Performance marketing scale-up taking paid customer acquisition from $15,000/mo to $220,000/mo at 4.6x blended ROAS.',
    challenge:
      'Veloce was stuck at a $15k/month ad spend ceiling on Meta. Their ad account suffered from ad fatigue, post-iOS 14 attribution blindness, and high acquisition costs that rendered paid marketing unprofitable.',
    solution:
      'Zinviq implemented a full-funnel paid acquisition strategy: deploying server-side Meta Conversions API (CAPI) via Cloudflare Workers, restructuring Google Performance Max campaigns, and implementing a high-velocity UGC creative testing matrix.',
    impactMetric: {
      value: '4.6x',
      label: 'Blended Paid Ads ROAS',
    },
    secondaryMetrics: [
      { label: 'Annual Paid Revenue Generated', value: '$1.4M+' },
      { label: 'First-Order Customer Acquisition Cost', value: '$42' },
      { label: 'Repeat Customer Rate (Email/SMS)', value: '+28%' },
    ],
    techStack: ['Meta Ads Manager', 'Google PMax', 'Triple Whale', 'Klaviyo', 'TikTok Ads', 'Shopify Plus'],
    deliverablesList: [
      'Full-funnel creative testing engine producing 15+ bespoke ad angles weekly',
      'Server-side CAPI integration ensuring 98% accurate conversion attribution',
      'Automated Klaviyo email and SMS retention workflows maximizing LTV',
      'Dedicated high-converting mobile landing pages tested for each hero product',
    ],
    resultsOverview: [
      'Scaled profitable ad spend from $15,000/mo to over $220,000/mo in 6 months.',
      'Maintained a verified 4.6x blended return on ad spend across all channels.',
      'Klaviyo retention flows now generate 34% of total top-line store revenue.',
    ],
    clientQuote: {
      text: 'Zinviq unlocked our paid advertising profitability. Their creative strategy combined with server-side attribution gave us the confidence to aggressively scale our ad budgets.',
      author: 'Matteo Rossi',
      title: 'Brand Director, Veloce Chronographs',
    },
    status: 'ACTIVE SCALE',
    growthBadge: '$1.4M+ Annual Paid Revenue',
    year: '2026',
  },
  {
    id: 'proj-05',
    slug: 'kroma-cosmetics-shopify-plus',
    title: 'Kroma Cosmetics Headless Shopify Experience',
    client: 'Kroma Beauty Global',
    industry: 'Beauty & Cosmetics',
    category: 'SHOPIFY',
    categoryLabel: 'Headless Shopify & Hydrogen',
    summary: 'Next-generation headless e-commerce store with real-time shade match quiz and instant edge page transitions.',
    challenge:
      'With over 300 cosmetic shades and complex personalization quizzes, Kroma was hitting the architectural limits of standard Shopify themes, resulting in slow interactions and abandoned quiz sessions.',
    solution:
      'We built a decoupled headless storefront connecting Shopify Plus backend with Next.js App Router on Vercel. We engineered an interactive WebGL-assisted shade finder quiz with direct AJAX cart insertion.',
    impactMetric: {
      value: '+52%',
      label: 'Quiz-to-Checkout Conversion',
    },
    secondaryMetrics: [
      { label: 'Global Edge Page Load', value: '420ms' },
      { label: 'Average Order Value Lift', value: '+48%' },
      { label: 'Bounce Rate Reduction', value: '-31%' },
    ],
    techStack: ['Shopify Plus', 'Next.js 14', 'Tailwind CSS', 'Shopify Storefront API', 'Vercel Edge', 'Sanity CMS'],
    deliverablesList: [
      'Sub-500ms edge rendering across North America, Europe, and Asia-Pacific',
      'Interactive shade-matching quiz with instant bundle recommendation',
      'Multi-currency and localized international checkout support',
      'Automated headless Sanity CMS editorial blog integration',
    ],
    resultsOverview: [
      'Edge page transitions reduced visitor bounce rates by 31%.',
      'Quiz completion rate increased to 78%, lifting overall checkout conversion by 52%.',
      'International revenue doubled within 4 months of launching localized stores.',
    ],
    status: 'LIVE STORE',
    growthBadge: 'Sub-500ms Page Loads',
    year: '2026',
  },
  {
    id: 'proj-06',
    slug: 'apex-wholesale-woocommerce',
    title: 'Apex Industrial B2B Wholesale Portal',
    client: 'Apex Industrial Supply',
    industry: 'B2B Industrial Supply & Manufacturing',
    category: 'WORDPRESS',
    categoryLabel: 'Enterprise WooCommerce',
    summary: 'High-volume B2B e-commerce platform handling 14,000 product SKUs with tiered corporate pricing and ERP sync.',
    challenge:
      'Apex was manually taking orders via phone and spreadsheet emails for 14,000 complex industrial parts. Their buyers demanded a modern online ordering portal with custom contracted price tiers and net-30 terms.',
    solution:
      'Zinviq engineered a robust WooCommerce B2B platform with customer role-based tiered pricing, quick-order CSV upload tools, automated invoice generation, and bi-directional ERP inventory sync.',
    impactMetric: {
      value: '$2.1M+',
      label: 'Quarterly Wholesale Volume',
    },
    secondaryMetrics: [
      { label: 'Catalog SKUs Synchronized', value: '14,000+' },
      { label: 'Order Processing Time', value: '-85%' },
      { label: 'Faceted Search Speed', value: '0.4s' },
    ],
    techStack: ['WooCommerce', 'WordPress', 'MySQL InnoDB', 'REST API', 'Redis Object Cache', 'Tailwind CSS'],
    deliverablesList: [
      'Custom quick-order spreadsheet interface for bulk buyers',
      'Automated net-30 credit application and approval workflows',
      'Sub-second faceted product filtering across 14,000 complex catalog items',
      'Real-time automated inventory synchronization with SAP ERP systems',
    ],
    resultsOverview: [
      'Processed over $2.1M in online wholesale orders within the first quarter.',
      'Reduced manual sales representative order-entry time by 85%.',
      'Customer re-order frequency jumped by 44% thanks to the quick-order portal.',
    ],
    status: 'ENTERPRISE DEPLOYED',
    growthBadge: '14,000+ SKUs Synchronized',
    year: '2026',
  },
];
