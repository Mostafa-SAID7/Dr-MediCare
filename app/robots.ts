import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/patient-portal/', '/api/'],
    },
    sitemap: 'https://dr-medicare.vercel.app/sitemap.xml',
  }
}
