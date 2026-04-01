import { SLUG_MAP } from '@/data/landingData'
import { BLOG_POSTS, CASE_STUDY_DATA } from '@/data/landingData'

const BASE = 'https://www.nakshatranamahacreations.com'

export default function sitemap() {
  const now = new Date().toISOString()

  // Core pages
  const core = [
    { url: BASE, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/about-us`, lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/services`, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/contact-us`, lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/careers`, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/blog`, lastModified: now, priority: 1.0, changeFrequency: 'daily' },
    { url: `${BASE}/our-works`, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/our-works/mobile-app-development`, lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/our-works/website-development`, lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/our-works/corporate-video-production`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/our-works/animation`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    // Note: crm-solutions, custom-crm-development, corporate-film-makers are in SLUG_MAP
    // and are already included via slugPages below do not duplicate them here.
    // ── Dedicated service sub-pages (static routes, not in SLUG_MAP) ──
    { url: `${BASE}/corporate-website-development`,   lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/web-application-development`,     lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/landing-page-development`,        lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/progressive-web-app-development`, lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
  ]

  // All dynamic slug pages
  const slugPages = Object.keys(SLUG_MAP).map(slug => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    priority: 1.0,
    changeFrequency: 'monthly',
  }))

  // Blog posts
  const blogPages = BLOG_POSTS.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date,
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  // Case studies
  const caseStudies = Object.keys(CASE_STUDY_DATA).map(key => ({
    url: `${BASE}/case-studies/${key}`,
    lastModified: now,
    priority: 1.0,
    changeFrequency: 'monthly',
  }))

  return [...core, ...slugPages, ...blogPages, ...caseStudies]
}
