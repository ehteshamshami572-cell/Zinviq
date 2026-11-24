export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: 'How long does a custom Shopify or WordPress website take to build?',
    a: 'Typical custom store and corporate builds take between 4 to 8 weeks depending on scope, integrations, and catalog complexity. Urgent launch targets can be accommodated with an expedited sprint.',
  },
  {
    q: 'Why choose a custom build over a pre-made template?',
    a: 'Off-the-shelf templates ship with unused code, heavy scripts and unnecessary plugins that slow down mobile pages. A custom Zinviq build is written for your exact requirements, which improves speed, security and conversion rate.',
  },
  {
    q: 'How quickly can we expect to see SEO results?',
    a: 'Technical fixes and indexing improvements often show movement within 30 to 60 days. Competitive commercial rankings typically take 3 to 6 months of consistent content and authority work. We report progress monthly rather than promise fixed positions.',
  },
  {
    q: 'Can you migrate our store without losing SEO rankings?',
    a: 'Yes. We preserve URL structures, customer accounts and order history where the platform allows, and implement 1-to-1 301 redirect mapping to protect existing search visibility.',
  },
  {
    q: 'What is included in the free audit?',
    a: 'A focused review of mobile performance, checkout friction, technical crawlability, metadata and current acquisition setup, followed by a prioritised list of recommended fixes.',
  },
];
