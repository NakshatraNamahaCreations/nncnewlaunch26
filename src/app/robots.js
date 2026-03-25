export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://www.nakshatranamahacreations.com/sitemap.xml',
    host: 'https://www.nakshatranamahacreations.com',
  }
}
