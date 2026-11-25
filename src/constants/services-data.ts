export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetailItem {
  id: string;
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  heroHighlight: string;
  description: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  impactMetrics: { label: string; value: string; detail: string }[];
  deliverables: ServiceDeliverable[];
  featuredTech: string[];
  conversionHighlight: string;
  faqs: ServiceFAQ[];
  whyChooseUs: { title: string; description: string }[];
}

export const SERVICES_DETAILED_DATA: Record<string, ServiceDetailItem> = {
  'shopify-development': {
    id: 'shopify-development',
    slug: 'shopify-development',
    code: 'SRV-01',
    title: 'Shopify Development & E-Commerce Engineering',
    shortTitle: 'Shopify Development',
    tagline: 'Shopify stores engineered for clear funnel logic, measured speed and maintainable growth.',
    badge: 'SHOPIFY PLUS & CUSTOM LIQUID',
    heroHighlight: 'Lean Builds. Measured Speed. Clear Funnel Checks.',
    metaTitle: 'Custom Shopify Development Agency & Shopify Plus Experts',
    metaDescription: 'Zinviq engineers Shopify and Shopify Plus stores with custom Liquid themes, measured mobile speed budgets and checkout funnel optimisation.',
    keywords: [
      'Shopify Development Agency',
      'Shopify Plus Development',
      'Custom Shopify Theme Development',
      'Liquid Code Optimization',
      'Headless Shopify Development',
      'Shopify Speed Optimization',
      'Shopify CRO Agency',
    ],
    description:
      'We architect bespoke Shopify and Shopify Plus experiences around the buyer journey. From custom Liquid theme engineering and private app integrations to checkout funnel optimisation, each build is scoped to your catalogue, integrations and growth goals.',
    longDescription:
      'Off-the-shelf Shopify themes can carry bloated scripts, excessive DOM nodes and unused CSS that slow mobile pages. At Zinviq, we develop custom Shopify 2.0 themes from scratch using clean, modular Liquid code, Tailwind CSS and lightweight JavaScript. The build is measured against agreed speed budgets and checkout analytics instead of relying on generic claims.',
    impactMetrics: [
      { label: 'Conversion Baseline', value: 'Recorded', detail: 'Analytics captured before design and development starts' },
      { label: 'Speed Budget', value: 'Agreed', detail: 'Mobile performance target set with you and checked on staging' },
      { label: 'Checkout Review', value: 'Per release', detail: 'Funnel steps checked against analytics events' },
    ],
    deliverables: [
      {
        title: 'Custom Shopify 2.0 & Liquid Theme Architecture',
        description: 'Bespoke, brand-aligned e-commerce storefronts built with native Section Everywhere architecture for complete drag-and-drop freedom without sacrificing speed.',
      },
      {
        title: 'Headless Shopify (Next.js & Hydrogen)',
        description: 'Headless commerce architectures with custom product configurators and locale-aware currency handling, measured against agreed performance budgets.',
      },
      {
        title: 'Private App Development & ERP/CRM Integrations',
        description: 'Bi-directional integrations with NetSuite, SAP, Klaviyo, Gorgias, and custom fulfillment centers to automate order routing and inventory synchronization.',
      },
      {
        title: 'Conversion Rate Optimization (CRO) & Cart Drawers',
        description: 'Sticky slide-out cart drawers with tiered free-shipping progress bars, 1-click upsells, cross-sells, and trust reassurance elements.',
      },
      {
        title: 'Planned Platform Migrations',
        description: 'Planned migrations from WooCommerce, Magento or BigCommerce to Shopify Plus with URL mapping, redirect checks and order/customer data transfer where the source platform allows.',
      },
    ],
    featuredTech: ['Shopify Plus', 'Liquid 2.0', 'Hydrogen', 'Next.js 14', 'GraphQL API', 'Klaviyo', 'Recharge'],
    conversionHighlight: 'Custom builds measured against agreed speed, checkout and conversion baselines.',
    whyChooseUs: [
      {
        title: 'Zero Pre-Made Templates',
        description: 'We never install cheap ThemeForest templates that break. Every template is custom-coded for your brand identity and conversion goals.',
      },
      {
        title: 'Measured Speed Budget',
        description: 'We optimise assets, defer non-critical scripts and use lazy loading, then verify the result against the agreed mobile performance budget.',
      },
      {
        title: 'Proven Shopify Plus Ecosystem',
        description: 'Deep mastery over Shopify Scripts, Functions, Checkout Extensibility, and Custom Customizer schemas.',
      },
    ],
    faqs: [
      {
        question: 'How long does a custom Shopify store build typically take?',
        answer: 'A custom Shopify 2.0 theme usually takes 4 to 7 weeks from discovery and Figma UI design to full development, QA testing, and live cutover.',
      },
      {
        question: 'Will our existing customer data and SEO rankings be preserved during a migration?',
        answer: 'Yes. We map legacy URLs to 301 redirects, migrate customer and order data where the source platform allows, and monitor Search Console after cutover. No provider can guarantee that rankings will not fluctuate.',
      },
      {
        question: 'Do you offer ongoing Shopify maintenance and CRO retainers?',
        answer: 'Yes, we provide monthly engineering and conversion optimization retainers that include continuous A/B testing, speed monitoring, and new feature deployment.',
      },
    ],
  },

  'wordpress-development': {
    id: 'wordpress-development',
    slug: 'wordpress-development',
    code: 'SRV-02',
    title: 'Enterprise WordPress & WooCommerce Architecture',
    shortTitle: 'WordPress Development',
    tagline: 'Lean WordPress platforms built with minimal dependencies and checked against agreed performance budgets.',
    badge: 'CUSTOM ACF & WOOCOMMERCE',
    heroHighlight: 'Lean Builds. Measured Core Web Vitals. Hardened Security.',
    metaTitle: 'Custom WordPress & WooCommerce Development Agency',
    metaDescription: 'Zinviq builds custom WordPress and WooCommerce portals with bespoke Gutenberg blocks, ACF architectures, minimal dependencies and measured Core Web Vitals.',
    keywords: [
      'WordPress Development Agency',
      'Custom WordPress Themes',
      'Enterprise WooCommerce Development',
      'ACF Pro Development',
      'Custom Gutenberg Blocks',
      'WordPress Speed Optimization',
      'Headless WordPress Agency',
    ],
    description:
      'Zinviq builds enterprise WordPress and WooCommerce portals with tailor-made Gutenberg blocks, database query review and hardened permission models.',
    longDescription:
      'Plugin-heavy builds can add conflicting scripts, unnecessary database work and a wider attack surface. Zinviq uses Advanced Custom Fields (ACF Pro), native Gutenberg blocks and lightweight PHP with a lean dependency list. The result is a maintainable platform measured against agreed performance budgets.',
    impactMetrics: [
      { label: 'Performance Validation', value: 'Per build', detail: 'Core Web Vitals checked on staging and after launch' },
      { label: 'Security Review', value: 'Per release', detail: 'Dependencies, headers and access rules checked before deploy' },
      { label: 'Query Audits', value: 'Per sprint', detail: 'Slow queries identified and optimised where needed' },
    ],
    deliverables: [
      {
        title: 'Custom Gutenberg Block Suites',
        description: 'Modular, editable block systems tailored exactly to your brand guidelines, making content creation intuitive without breaking design consistency.',
      },
      {
        title: 'Enterprise WooCommerce Development',
        description: 'Scalable WooCommerce platforms handling 20,000+ SKUs with tiered corporate B2B pricing, automated tax compliance, and custom payment gateways.',
      },
      {
        title: 'Headless WordPress with Next.js',
        description: 'Decoupled WordPress architectures using a WPGraphQL backend and Next.js App Router frontend to reduce the public server-side attack surface and support fast static delivery.',
      },
      {
        title: 'Database Query Optimization & Speed Hardening',
        description: 'Eliminating bloated SQL queries, integrating Redis object caching, and optimizing media delivery via global Cloudflare Enterprise edge networks.',
      },
      {
        title: 'Enterprise Security Hardening & Automated Backups',
        description: 'Strict 2FA login enforcement, customized admin entry points, immutable file system monitoring, and automated multi-region off-site backups.',
      },
    ],
    featuredTech: ['WordPress 6.5+', 'WooCommerce', 'PHP 8.3', 'ACF Pro', 'MySQL', 'Redis', 'Cloudflare Enterprise'],
    conversionHighlight: 'Lean WordPress builds with measurable speed and security checks.',
    whyChooseUs: [
      {
        title: 'Strictly Zero-Bloat Philosophy',
        description: 'We code custom solutions instead of relying on heavy plugins like Elementor or WPBakery that ruin site speed.',
      },
      {
        title: 'Editorial Team Independence',
        description: 'Your marketing team will be able to build landing pages in minutes without needing a developer for everyday changes.',
      },
      {
        title: 'Hardened Security',
        description: 'We implement server-side firewalls, XML-RPC lockdowns and strict permission models to reduce common WordPress attack surfaces.',
      },
    ],
    faqs: [
      {
        question: 'Why is a custom ACF WordPress build better than Elementor or Divi?',
        answer: 'Page builders often add nested markup and render-blocking scripts. Custom ACF builds generate only the HTML the page needs and are checked against agreed Core Web Vitals budgets on staging.',
      },
      {
        question: 'Can WooCommerce handle high order volumes and large product catalogs?',
        answer: 'Yes, when the build is architected with object caching, database indexing and infrastructure sized to the catalogue and order volume. We scope those limits with you before development.',
      },
      {
        question: 'How do you handle ongoing WordPress security updates?',
        answer: 'We provide automated staging test suites that verify core and minor updates in isolated sandboxes before pushing changes to production.',
      },
    ],
  },

  'seo': {
    id: 'seo',
    slug: 'seo',
    code: 'SRV-03',
    title: 'Data-Driven Technical SEO & Search Dominance',
    shortTitle: 'Search Engine Optimization (SEO)',
    tagline: 'Improve visibility for commercial keywords that match buyer intent.',
    badge: 'TECHNICAL & E-COMMERCE SEO',
    heroHighlight: 'Technical Fixes. Buyer-Intent Content. Transparent Reporting.',
    metaTitle: 'Technical SEO Agency & Organic Search Growth Services',
    metaDescription: 'Zinviq delivers technical SEO, e-commerce structure, editorially earned links and Schema.org structured data with transparent reporting.',
    keywords: [
      'Technical SEO Agency',
      'Ecommerce SEO Services',
      'Search Engine Optimization Services',
      'Core Web Vitals SEO',
      'Organic Revenue Growth',
      'Enterprise SEO Agency',
      'Schema Markup Optimization',
    ],
    description:
      'SEO is structured, measurable work that compounds over time. We carry out technical architecture fixes, buyer-intent content mapping and editorial outreach, with progress tracked against agreed search queries and conversions.',
    longDescription:
      'Search engines have evolved beyond basic keyword stuffing. Modern Google ranking algorithms reward deep topical authority, semantic entity relationships, pristine Core Web Vitals, and authoritative editorial citations. Zinviq takes a mathematical, engineering-led approach to SEO. We diagnose crawl budget waste, fix faceted navigation canonical issues, build comprehensive topical content maps, and execute digital PR campaigns that earn links from tier-1 industry publications.',
    impactMetrics: [
      { label: 'Technical Issue Register', value: 'Tracked', detail: 'Crawl, index and template issues logged with before/after checks' },
      { label: 'Non-Brand Visibility', value: 'Reported monthly', detail: 'Keyword movement reviewed in Search Console' },
      { label: 'Organic Conversions', value: 'Goal-based', detail: 'Measured against conversion goals agreed with you' },
    ],
    deliverables: [
      {
        title: 'Comprehensive Technical Site Architecture Audits',
        description: 'Exhaustive crawls identifying crawl budget traps, indexing roadblocks, JavaScript rendering barriers, and canonical errors.',
      },
      {
        title: 'E-Commerce SEO (Category & Product Optimization)',
        description: 'Optimizing high-revenue collection pages, eliminating duplicate content in faceted filters, and structuring internal linking funnels.',
      },
      {
        title: 'Topical Authority & Semantic Content Clustering',
        description: 'Content architecture mapped to the buyer journey and documented search intent, with each page tied to a measurable purpose.',
      },
      {
        title: 'White-Hat Editorial Backlink Acquisition & Digital PR',
        description: 'High-impact outreach campaigns securing authoritative contextual mentions from recognized media outlets and industry publications.',
      },
      {
        title: 'Schema.org JSON-LD Structured Data Engineering',
        description: 'Valid Product, FAQ and Organisation structured data where eligible, checked against Google’s current rich-result guidance.',
      },
    ],
    featuredTech: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'SurferSEO', 'Schema.org', 'BigQuery'],
    conversionHighlight: 'Long-term organic search dominance delivering compounding monthly customer acquisition.',
    whyChooseUs: [
      {
        title: 'Engineering-First SEO',
        description: 'Unlike traditional agencies that only write blog posts, we fix the deep server-side and code-level bottlenecks that block rankings.',
      },
      {
        title: 'Revenue-Focused Keyword Strategy',
        description: 'We target commercial and transactional keywords with active buyer intent, not vanity metrics with zero purchase probability.',
      },
      {
        title: 'Search Essentials Aligned',
        description: 'Tactics follow Google Search Essentials and are documented so changes can be reviewed if rankings move.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see tangible revenue results from SEO?',
        answer: 'Technical fixes and indexing corrections often produce positive ranking momentum within 4 to 8 weeks. Competitive commercial rankings typically require 3 to 6 months of consistent technical and content work.',
      },
      {
        question: 'How do you measure SEO success?',
        answer: 'We measure against the goals agreed with you: organic conversions, revenue where tracking permits, and movement in agreed non-brand search queries.',
      },
      {
        question: 'Will our SEO strategy adapt to Google AI Overviews and algorithm updates?',
        answer: 'We focus on ordinary search eligibility: crawlable pages, clear structure, useful first-party content and valid structured data. Google has confirmed there is no special markup required for AI Overviews or AI Mode.',
      },
    ],
  },

  'digital-marketing': {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    code: 'SRV-04',
    title: 'Performance Digital Marketing & Paid Ad Scaling',
    shortTitle: 'Digital Marketing & Paid Ads',
    tagline: 'Meta, Google and TikTok funnels backed by clear attribution rules and retention flows.',
    badge: 'PAID ADS & RETENTION MARKETING',
    heroHighlight: 'Tested Creative. Attribution Setup. Clear Reporting.',
    metaTitle: 'Performance Digital Marketing Agency | Meta & Google Ads',
    metaDescription: 'Zinviq manages Meta Ads, Google Performance Max, TikTok campaigns, first-party conversion tracking and Klaviyo retention flows with transparent reporting.',
    keywords: [
      'Performance Marketing Agency',
      'Meta Ads Agency',
      'Google Ads Management',
      'Ecommerce Paid Advertising',
      'PPC Management Services',
      'Conversion Rate Optimization',
      'Klaviyo Email Marketing Agency',
    ],
    description:
      'We engineer profitable paid advertising funnels across Google Ads, Meta Ads (Facebook & Instagram), and TikTok. Combined with automated retention flows (email and SMS), we drive predictable customer acquisition at scale while maximizing Customer Lifetime Value (LTV).',
    longDescription:
      'Running paid ads without reliable tracking, structured creative tests and focused landing pages makes optimisation difficult. Zinviq sets up first-party conversion signals such as Meta CAPI where consent allows, produces direct-response creative, and pairs campaigns with dedicated post-click pages that are checked against the same agreed KPIs.',
    impactMetrics: [
      { label: 'Creative Tests', value: 'Tracked', detail: 'Each test recorded with a hypothesis and decision rule' },
      { label: 'Spend Control', value: 'Rule-based', detail: 'Budgets scaled only against agreed performance rules' },
      { label: 'Reporting Cadence', value: 'Weekly', detail: 'Clear performance view with stop, learn and scale decisions' },
    ],
    deliverables: [
      {
        title: 'Meta Ads (Facebook & Instagram) Direct Response Campaigns',
        description: 'Audience testing, dynamic creative optimisation and retargeting flows judged against agreed acquisition targets.',
      },
      {
        title: 'Google Search & Performance Max (PMax) Campaigns',
        description: 'Capturing high-intent searchers at the exact moment of purchase intent with tightly themed ad groups and optimized shopping feeds.',
      },
      {
        title: 'First-Party Server-Side Tracking (CAPI & GA4)',
        description: 'Reducing signal loss from ad blockers and browser privacy restrictions so cleaner conversion data reaches ad platforms where consent allows.',
      },
      {
        title: 'Automated Klaviyo Lifecycle Flows (Email & SMS)',
        description: 'Welcome, browse abandonment, abandoned cart and post-purchase flows measured against agreed revenue and retention goals.',
      },
      {
        title: 'Creative Strategy & Direct-Response Assets',
        description: 'Data-driven UGC briefs, split-screen hooks, problem-solution video edits, and static graphic carousels tested on strict weekly cadences.',
      },
    ],
    featuredTech: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads', 'Klaviyo', 'Triple Whale', 'GA4', 'Shopify Analytics'],
    conversionHighlight: 'Creative tests and first-party tracking judged against agreed contribution-margin goals.',
    whyChooseUs: [
      {
        title: 'True Incrementality Focus',
        description: 'We optimize for real contribution margin and new customer acquisition (NCAC), not misleading in-platform click-attribution models.',
      },
      {
        title: 'Dedicated Creative Strategy',
        description: 'Winning ads require non-stop creative velocity. We produce high-converting direct-response concepts every week.',
      },
      {
        title: 'Complete Full-Funnel Synergy',
        description: 'Our developers and marketers work in the same room. When an ad needs a dedicated landing page, it gets built and shipped in hours.',
      },
    ],
    faqs: [
      {
        question: 'What monthly ad spend budget is required to work together?',
        answer: 'We typically partner with brands spending a minimum of $5,000 to $50,000+ per month across Meta and Google Ads to ensure sufficient statistical data for rapid creative testing.',
      },
      {
        question: 'How do you combat iOS 14+ tracking and data loss?',
        answer: 'We implement server-side tracking via Meta Conversions API (CAPI) and Google Tag Manager Server Container, paired with attribution tools like Triple Whale for source-of-truth analytics.',
      },
      {
        question: 'Who owns the advertising accounts and creative assets?',
        answer: 'Ad accounts, first-party data and creative assets remain yours, with ownership and handover terms set out in the signed agreement.',
      },
    ],
  },
};

export const SERVICES_LIST = Object.values(SERVICES_DETAILED_DATA);
