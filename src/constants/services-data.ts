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
    tagline: 'High-converting Shopify stores engineered for maximum AOV, sub-second speed, and 8-figure scale.',
    badge: 'SHOPIFY PLUS & CUSTOM LIQUID',
    heroHighlight: 'Sub-Second Speeds. Zero Bloat. Maximum E-Commerce Conversions.',
    metaTitle: 'Custom Shopify Development Agency & Shopify Plus Experts | Zinviq',
    metaDescription: 'Zinviq engineers high-converting Shopify & Shopify Plus stores with custom Liquid themes, sub-second load times, and conversion-optimized checkout funnels.',
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
      'We architect bespoke Shopify and Shopify Plus experiences that convert traffic into loyal repeat buyers. From custom Liquid theme engineering and private app integrations to seamless checkout funnel optimization, our stores are built for 7 and 8-figure scaling.',
    longDescription:
      'Off-the-shelf Shopify themes are plagued with bloated scripts, excessive DOM nodes, and unnecessary CSS that slow your store down and kill your mobile conversion rates. At Zinviq, we develop custom Shopify 2.0 themes from scratch using clean, modular Liquid code, Tailwind CSS, and lightweight JavaScript. Every pixel is engineered around user psychology, reducing cart abandonment, and pushing mobile load times under 1 second.',
    impactMetrics: [
      { label: 'Average Conversion Lift', value: '+42.8%', detail: 'Measured across 25+ direct-to-consumer store redesigns' },
      { label: 'Mobile Page Speed', value: '< 1.1s', detail: 'Google PageSpeed Mobile Score consistently above 90' },
      { label: 'Checkout Drop-off Reduction', value: '-35%', detail: 'Streamlined single-page and slide-out checkout drawers' },
    ],
    deliverables: [
      {
        title: 'Custom Shopify 2.0 & Liquid Theme Architecture',
        description: 'Bespoke, brand-aligned e-commerce storefronts built with native Section Everywhere architecture for complete drag-and-drop freedom without sacrificing speed.',
      },
      {
        title: 'Headless Shopify (Next.js & Hydrogen)',
        description: 'Cutting-edge headless commerce architectures delivering instant page transitions, custom product configurators, and localized global currencies.',
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
        title: 'Zero-Downtime Platform Migrations',
        description: 'Flawless store migrations from WooCommerce, Magento, or BigCommerce to Shopify Plus with 100% preservation of SEO rankings, order history, and customer accounts.',
      },
    ],
    featuredTech: ['Shopify Plus', 'Liquid 2.0', 'Hydrogen', 'Next.js 14', 'GraphQL API', 'Klaviyo', 'Recharge'],
    conversionHighlight: 'Average client revenue scales by 3.2x within 6 months of store relaunch.',
    whyChooseUs: [
      {
        title: 'Zero Pre-Made Templates',
        description: 'We never install cheap ThemeForest templates that break. Every template is custom-coded for your brand identity and conversion goals.',
      },
      {
        title: 'Sub-Second Speed Guarantee',
        description: 'We optimize assets, defer non-critical scripts, and implement lazy loading to ensure your store flies on low-bandwidth mobile devices.',
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
        answer: 'Yes. We map every legacy URL with strict 301 redirects, migrate full customer order histories via API scripts, and ensure zero loss of Google organic visibility.',
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
    tagline: 'Custom, ultra-secure, and blazing-fast WordPress platforms free from bloated plugins.',
    badge: 'CUSTOM ACF & WOOCOMMERCE',
    heroHighlight: 'Zero Plugin Bloat. 100/100 Core Web Vitals. Institutional Security.',
    metaTitle: 'Custom WordPress & WooCommerce Development Agency | Zinviq',
    metaDescription: 'Zinviq builds custom WordPress and WooCommerce portals with bespoke Gutenberg blocks, ACF architectures, zero plugin bloat, and 100/100 Core Web Vitals.',
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
      'Say goodbye to slow, vulnerable, plugin-heavy websites. Zinviq builds enterprise WordPress and WooCommerce portals with tailor-made Gutenberg blocks, strict database optimization, and bank-grade security protocols.',
    longDescription:
      'Most WordPress agencies install 50+ third-party plugins that conflict with each other, slow the website to a crawl, and create dangerous security backdoors. Zinviq rejects that approach completely. We build tailor-made WordPress websites using Advanced Custom Fields (ACF Pro) and native Gutenberg blocks with lightweight PHP 8.3 code and clean object-oriented architectures. The result is a marketing machine that loads in under 800 milliseconds and gives your editorial team total creative freedom.',
    impactMetrics: [
      { label: 'Core Web Vitals Pass Rate', value: '100%', detail: 'Passed across all mobile and desktop real-user metrics' },
      { label: 'Security Vulnerability Score', value: '0.00', detail: 'Zero unvetted third-party plugins; strict CSP headers' },
      { label: 'Database Query Reduction', value: '-65%', detail: 'Custom transient caching and Redis object cache indexing' },
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
        description: 'Decoupled WordPress architectures utilizing WP GraphQL backend and Next.js App Router frontend for unhackable static security and sub-second rendering.',
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
    conversionHighlight: 'Zero plugin bloat guarantees top 1% speed benchmarks on Google PageSpeed Insights.',
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
        title: 'Bank-Grade Security',
        description: 'We implement server-side firewalls, XML-RPC lockdowns, and strict permission models to eliminate malware vulnerabilities.',
      },
    ],
    faqs: [
      {
        question: 'Why is a custom ACF WordPress build better than Elementor or Divi?',
        answer: 'Page builders inject massive nested DOM trees and render-blocking scripts that slow mobile load times to 4+ seconds. Custom ACF builds generate only the exact HTML required, achieving 98+ PageSpeed scores natively.',
      },
      {
        question: 'Can WooCommerce handle high order volumes and large product catalogs?',
        answer: 'Yes, when properly architected with Redis object caching, high-performance database indexing, and dedicated infrastructure, WooCommerce effortlessly handles millions in monthly GMV.',
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
    tagline: 'Dominate page #1 for commercial keywords that drive qualified, high-intent revenue.',
    badge: 'TECHNICAL & E-COMMERCE SEO',
    heroHighlight: 'Page #1 Rankings. Compounding Traffic. Unshakeable Organic Authority.',
    metaTitle: 'Technical SEO Agency & Organic Search Growth Services | Zinviq',
    metaDescription: 'Zinviq delivers data-driven Technical SEO, e-commerce organic rank dominance, high-authority digital PR backlinks, and Schema.org rich snippets.',
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
      'SEO is not just rankings; it is predictable, compounding revenue. We execute technical site architecture overhauls, programmatic SEO, semantic content strategies, and high-authority digital PR backlink campaigns that outrank your fiercest competitors.',
    longDescription:
      'Search engines have evolved beyond basic keyword stuffing. Modern Google ranking algorithms reward deep topical authority, semantic entity relationships, pristine Core Web Vitals, and authoritative editorial citations. Zinviq takes a mathematical, engineering-led approach to SEO. We diagnose crawl budget waste, fix faceted navigation canonical issues, build comprehensive topical content maps, and execute digital PR campaigns that earn links from tier-1 industry publications.',
    impactMetrics: [
      { label: 'Average Organic Traffic Lift', value: '+310%', detail: 'Measured across active 6-month client search campaigns' },
      { label: 'Page 1 Keyword Rankings', value: '1,850+', detail: 'High-intent commercial terms driving qualified buying intent' },
      { label: 'Organic Revenue ROI', value: '5.8x', detail: 'Compounding revenue that reduces reliance on expensive paid ads' },
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
        description: 'Data-driven content architecture that satisfies every stage of the buyer journey, positioning your brand as the definitive authority.',
      },
      {
        title: 'White-Hat Editorial Backlink Acquisition & Digital PR',
        description: 'High-impact outreach campaigns securing authoritative contextual mentions from recognized media outlets and industry publications.',
      },
      {
        title: 'Schema.org JSON-LD Structured Data Engineering',
        description: 'Custom rich snippets, review aggregations, product availability badges, and FAQ schema that dominate Google search engine result real estate.',
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
        title: '100% White-Hat Practices',
        description: 'Every tactic complies strictly with Google Search Essentials to protect your business from algorithmic penalties.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see tangible revenue results from SEO?',
        answer: 'Technical fixes and indexing corrections often produce positive ranking momentum within 4 to 8 weeks. Sustained Page #1 dominance on highly competitive commercial terms typically matures within 4 to 6 months.',
      },
      {
        question: 'How do you measure SEO success?',
        answer: 'We measure success through organic conversions, revenue generated, and non-branded organic keyword rankings in positions 1 through 3.',
      },
      {
        question: 'Will our SEO strategy adapt to Google AI Overviews and algorithm updates?',
        answer: 'Yes. Our strategies emphasize structured schema, information gain, and authoritative first-party data, ensuring your content is prominently cited in both traditional rankings and Google AI Overviews.',
      },
    ],
  },

  'digital-marketing': {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    code: 'SRV-04',
    title: 'Performance Digital Marketing & Paid Ad Scaling',
    shortTitle: 'Digital Marketing & Paid Ads',
    tagline: 'High-ROAS Meta, Google, and TikTok ad funnels backed by deep data attribution and retention.',
    badge: 'PAID ADS & RETENTION MARKETING',
    heroHighlight: '4x+ Target ROAS. Full-Funnel Paid Acquisition. High Customer LTV.',
    metaTitle: 'Performance Digital Marketing Agency | Meta & Google Ads | Zinviq',
    metaDescription: 'Zinviq scales e-commerce brands with high-ROAS Meta Ads, Google Performance Max, TikTok campaigns, server-side CAPI tracking, and Klaviyo retention funnels.',
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
      'Throwing money at paid ads without server-side tracking, scientific creative testing, and high-converting landing pages is a recipe for burning cash. Zinviq engineers full-funnel performance marketing machines. We set up Server-Side Conversions API (CAPI) to bypass iOS privacy blind spots, create direct-response video and static creatives, and pair every campaign with custom post-click landing pages that multiply your conversion rates.',
    impactMetrics: [
      { label: 'Average Client ROAS', value: '4.4x', detail: 'Blended return on ad spend maintained at scaling budgets' },
      { label: 'Managed Ad Spend', value: '$8.5M+', detail: 'Proven track record managing large-scale global ad accounts' },
      { label: 'Repeat Customer Rate', value: '+38%', detail: 'Driven by automated Klaviyo lifecycle retention workflows' },
    ],
    deliverables: [
      {
        title: 'Meta Ads (Facebook & Instagram) Direct Response Campaigns',
        description: 'Broad audience testing, dynamic creative optimization (DCO), and behavioral retargeting funnels designed for maximum efficiency.',
      },
      {
        title: 'Google Search & Performance Max (PMax) Campaigns',
        description: 'Capturing high-intent searchers at the exact moment of purchase intent with tightly themed ad groups and optimized shopping feeds.',
      },
      {
        title: 'First-Party Server-Side Tracking (CAPI & GA4)',
        description: 'Eliminating data loss from ad blockers and browser privacy restrictions to feed clean conversion signals back into ad platform algorithms.',
      },
      {
        title: 'Automated Klaviyo Lifecycle Flows (Email & SMS)',
        description: 'High-converting welcome series, browse abandonment, abandoned cart recovery, and post-purchase winback campaigns that drive 30%+ of store revenue.',
      },
      {
        title: 'Creative Strategy & Direct-Response Assets',
        description: 'Data-driven UGC briefs, split-screen hooks, problem-solution video edits, and static graphic carousels tested on strict weekly cadences.',
      },
    ],
    featuredTech: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads', 'Klaviyo', 'Triple Whale', 'GA4', 'Shopify Analytics'],
    conversionHighlight: 'Hyper-targeted creative testing and server-side tracking producing consistent 4x+ ROAS.',
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
        answer: 'You retain 100% ownership of all ad accounts, pixel data, custom audiences, and creative assets produced during our engagement.',
      },
    ],
  },
};

export const SERVICES_LIST = Object.values(SERVICES_DETAILED_DATA);
