export interface ServiceMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  description: string;
  impactMetrics: ServiceMetric[];
  deliverables: (string | ServiceDeliverable)[];
  featuredTech: string[];
  conversionHighlight: string;
  heroHighlight?: string;
  longDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  whyChooseUs?: { title: string; description: string }[];
  faqs?: ServiceFAQ[];
}
