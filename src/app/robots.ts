import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    host: SITE_URL,
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
