import type { CaseStudyItem } from '@/types/project';

/**
 * Illustrative engagement examples.
 * These describe our delivery approach and are not published client results.
 * Replace with verified, permissioned case studies before using them as proof.
 */
export const PROJECTS_DATA: CaseStudyItem[] = [
  {
    id: 'proj-01',
    slug: 'aura-luxe-shopify',
    title: 'Shopify Store Rebuild (Illustrative)',
    client: 'Example apparel retailer',
    industry: 'Fashion & apparel',
    category: 'SHOPIFY',
    categoryLabel: 'Shopify & CRO',
    summary: 'How we replace app-heavy themes with maintainable Liquid and a checkout built around the buyer journey.',
    challenge:
      'A typical app-heavy Shopify theme carries conflicting scripts, duplicated cart logic and slow mobile pages. Checkout friction is usually visible in analytics but never prioritised.',
    solution:
      'We rebuild the theme with clean Liquid sections, replace redundant apps with native components, add a focused cart drawer and instrument the funnel so every change can be measured.',
    impactMetric: {
      value: 'Audit-led',
      label: 'Baseline recorded before work',
    },
    secondaryMetrics: [
      { label: 'Page speed', value: 'Measured per release' },
      { label: 'Checkout flow', value: 'Reviewed against analytics' },
      { label: 'App footprint', value: 'Reduced where possible' },
    ],
    techStack: ['Shopify Plus', 'Liquid', 'Klaviyo', 'Tailwind CSS', 'Alpine.js'],
    deliverablesList: [
      'Custom Shopify theme built from scratch with no unused app scripts',
      'Cart drawer with clear shipping and upsell logic',
      'Mobile checkout funnel reviewed against analytics events',
      'Multi-currency and regional checkout routing where required',
    ],
    resultsOverview: [
      'A documented performance and checkout baseline before development starts.',
      'A leaner theme that can be edited without stacking new apps.',
      'Post-launch checks against the agreed conversion and speed KPIs.',
    ],
    status: 'EXAMPLE BUILD',
    growthBadge: 'Custom Shopify Rebuild',
    year: '2026',
  },
  {
    id: 'proj-02',
    slug: 'novacrest-wordpress-portal',
    title: 'WordPress Publishing Platform (Illustrative)',
    client: 'Example professional services firm',
    industry: 'Professional services',
    category: 'WORDPRESS',
    categoryLabel: 'Custom WordPress & ACF',
    summary: 'A custom Gutenberg and ACF platform that gives editors control without page-builder bloat.',
    challenge:
      'Legacy page-builder sites often need a developer for simple edits, ship excessive CSS and JavaScript, and accumulate unvetted plugins over time.',
    solution:
      'We design a native Gutenberg block library with ACF fields, strict role permissions, caching and release checks so the editorial team can publish confidently.',
    impactMetric: {
      value: 'Custom build',
      label: 'No page-builder dependency',
    },
    secondaryMetrics: [
      { label: 'Core Web Vitals', value: 'Checked on staging' },
      { label: 'Editor workflow', value: 'Defined and documented' },
      { label: 'Plugin surface', value: 'Kept minimal' },
    ],
    techStack: ['WordPress', 'PHP', 'Custom Gutenberg', 'ACF Pro', 'Redis', 'Cloudflare'],
    deliverablesList: [
      'Custom Gutenberg block suite with documented usage rules',
      'Role-based editing permissions and publishing workflow',
      'Object caching and image delivery configuration',
      'Security headers, 2FA enforcement and backup plan',
    ],
    resultsOverview: [
      'Editors can publish without relying on a page builder.',
      'Performance and security checks are part of the release process.',
      'Dependencies are limited to what the build actually needs.',
    ],
    status: 'EXAMPLE BUILD',
    growthBadge: 'Lean WordPress Architecture',
    year: '2026',
  },
  {
    id: 'proj-03',
    slug: 'nordic-biohealth-seo',
    title: 'Technical SEO Programme (Illustrative)',
    client: 'Example health e-commerce brand',
    industry: 'Health & e-commerce',
    category: 'SEO',
    categoryLabel: 'Technical SEO',
    summary: 'A technical-first SEO programme that fixes crawlability, structure and buyer-intent content before chasing rankings.',
    challenge:
      'Commercial SEO often stalls because canonical rules, faceted navigation and internal linking are never addressed. More blog posts cannot fix a crawl problem.',
    solution:
      'We run a crawl and indexation audit, correct canonical and template issues, build topic clusters around commercial intent and report movement in Search Console.',
    impactMetric: {
      value: 'Tracked',
      label: 'KPIs set with you',
    },
    secondaryMetrics: [
      { label: 'Crawl errors', value: 'Logged and prioritised' },
      { label: 'Non-brand visibility', value: 'Reported monthly' },
      { label: 'Conversions', value: 'Attributed to agreed goals' },
    ],
    techStack: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'Schema.org'],
    deliverablesList: [
      'Technical crawl audit with prioritised fixes',
      'Canonical and faceted-navigation rules for category pages',
      'Product and collection schema implementation',
      'Buyer-intent topic map and internal linking plan',
    ],
    resultsOverview: [
      'A documented issue register with before-and-after verification.',
      'Content built around commercial intent rather than vanity traffic.',
      'Monthly reporting against agreed visibility and conversion goals.',
    ],
    status: 'EXAMPLE PROGRAMME',
    growthBadge: 'Technical SEO Framework',
    year: '2025',
  },
  {
    id: 'proj-04',
    slug: 'veloce-performance-marketing',
    title: 'Paid Acquisition Programme (Illustrative)',
    client: 'Example direct-to-consumer brand',
    industry: 'Direct-to-consumer retail',
    category: 'MARKETING',
    categoryLabel: 'Meta & Google Ads',
    summary: 'A structured paid acquisition programme with tracking cleanup, creative testing and clear stop/scale rules.',
    challenge:
      'Paid accounts often scale on unreliable attribution and untested creative. The result is noisy reporting and budget spent on the wrong audiences.',
    solution:
      'We verify events, set up server-side tracking where available, build a creative testing matrix and define budget rules before increasing spend.',
    impactMetric: {
      value: 'Controlled',
      label: 'Spend scaled by agreed rules',
    },
    secondaryMetrics: [
      { label: 'Event quality', value: 'Validated first' },
      { label: 'Creative tests', value: 'Tracked by hypothesis' },
      { label: 'Reporting', value: 'Weekly dashboard' },
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'GA4', 'Server-side CAPI', 'Klaviyo'],
    deliverablesList: [
      'Tracking audit and event validation',
      'Creative testing backlog with clear success criteria',
      'Campaign structure for prospecting and retargeting',
      'Weekly reporting with stop, learn and scale decisions',
    ],
    resultsOverview: [
      'Budget decisions tied to verified events and agreed KPIs.',
      'Creative tests documented so learnings compound.',
      'Retention flows connected to acquisition messaging.',
    ],
    status: 'EXAMPLE PROGRAMME',
    growthBadge: 'Measured Paid Growth',
    year: '2026',
  },
  {
    id: 'proj-05',
    slug: 'kroma-cosmetics-shopify-plus',
    title: 'Headless Storefront (Illustrative)',
    client: 'Example beauty brand',
    industry: 'Beauty & cosmetics',
    category: 'SHOPIFY',
    categoryLabel: 'Headless Shopify',
    summary: 'A decoupled Shopify and Next.js architecture for complex product discovery experiences.',
    challenge:
      'Large catalogues and interactive quizzes can push standard themes into slow client-side patterns that hurt both speed and completion rates.',
    solution:
      'We separate the storefront from Shopify using the Storefront API, keep checkout native, and build the discovery experience as a controlled React application.',
    impactMetric: {
      value: 'Edge-ready',
      label: 'Architecture built for speed',
    },
    secondaryMetrics: [
      { label: 'Rendering', value: 'Measured at edge' },
      { label: 'Quiz flow', value: 'Instrumented end to end' },
      { label: 'Checkout', value: 'Kept native to Shopify' },
    ],
    techStack: ['Shopify Plus', 'Next.js', 'Storefront API', 'Tailwind CSS', 'Sanity'],
    deliverablesList: [
      'Headless storefront with native Shopify checkout',
      'Interactive product discovery flow with analytics events',
      'Localised routing and currency handling where needed',
      'CMS integration for editorial content',
    ],
    resultsOverview: [
      'Complex product discovery separated from checkout reliability.',
      'Performance measured at each release rather than assumed.',
      'Analytics attached to quiz and checkout steps.',
    ],
    status: 'EXAMPLE PLATFORM',
    growthBadge: 'Headless Commerce Ready',
    year: '2026',
  },
  {
    id: 'proj-06',
    slug: 'apex-wholesale-woocommerce',
    title: 'B2B Wholesale Portal (Illustrative)',
    client: 'Example industrial supplier',
    industry: 'B2B wholesale',
    category: 'WORDPRESS',
    categoryLabel: 'Enterprise WooCommerce',
    summary: 'A WooCommerce B2B portal for tiered pricing, bulk ordering and ERP-connected inventory.',
    challenge:
      'Wholesale teams still relying on phone and spreadsheet orders lose time and make pricing mistakes, especially with contract tiers and credit terms.',
    solution:
      'We build role-based pricing, quick-order tools, invoice workflows and an inventory sync layer, then test the order journey with real buyer scenarios.',
    impactMetric: {
      value: 'Workflow-first',
      label: 'Built around buyer roles',
    },
    secondaryMetrics: [
      { label: 'Catalogue', value: 'Tested at scale' },
      { label: 'Order entry', value: 'Self-serve' },
      { label: 'Inventory', value: 'Sync rules defined' },
    ],
    techStack: ['WooCommerce', 'WordPress', 'MySQL', 'REST API', 'Redis'],
    deliverablesList: [
      'Tiered pricing by customer role',
      'Quick-order spreadsheet interface for bulk buyers',
      'Net-terms and invoice workflow',
      'Inventory synchronisation rules with the ERP',
    ],
    resultsOverview: [
      'Buyers can place repeat orders without manual sales intervention.',
      'Pricing and credit rules are enforced by the platform.',
      'Integration behaviour is tested before rollout.',
    ],
    status: 'EXAMPLE PLATFORM',
    growthBadge: 'B2B Ordering Portal',
    year: '2026',
  },
];
