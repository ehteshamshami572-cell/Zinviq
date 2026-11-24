export type ProjectCategory = 'ALL' | 'SHOPIFY' | 'WORDPRESS' | 'SEO' | 'MARKETING';

export interface ProjectSpec {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetric: {
    value: string;
    label: string;
  };
  secondaryMetrics: { label: string; value: string }[];
  techStack: string[];
  deliverablesList: string[];
  resultsOverview: string[];
  status: 'EXAMPLE BUILD' | 'EXAMPLE PROGRAMME' | 'EXAMPLE PLATFORM';
  growthBadge: string;
  year: string;
}

export type CaseStudyItem = ProjectSpec;
