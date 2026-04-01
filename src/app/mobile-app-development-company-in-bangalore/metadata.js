import { APP_PAGE } from '@/data/mobileAppData'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: APP_PAGE.title,
  description: APP_PAGE.description,
  keywords: APP_PAGE.keywords.join(', '),
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE.url}${APP_PAGE.slug}`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SITE.url}${APP_PAGE.slug}`,
    siteName: 'NNC Digital',
    title: APP_PAGE.title,
    description: APP_PAGE.description,
    images: [
      {
        url: 'https://www.nakshatranamahacreations.com/media/teams/NNCGRPPHO.avif',
        width: 1200,
        height: 630,
        alt: 'NNC Digital Mobile App Development Company Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: APP_PAGE.title,
    description: APP_PAGE.description,
  },
}

/* ── JSON-LD Schemas ─────────────────────────────────────────── */

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development',
  description:
    'Custom Android and iOS mobile app development using React Native and Flutter. Build on-demand apps, e-commerce apps, healthcare apps, fintech apps and enterprise platforms.',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Darshan Plaza, 1st Floor, Channasandra',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560098',
      addressCountry: 'IN',
    },
  },
  areaServed: ['Bengaluru', 'Mumbai', 'Mysuru', 'Hyderabad', 'India'],
  serviceType: 'Mobile App Development',
  offers: [
    {
      '@type': 'Offer',
      name: 'MVP App Development',
      price: '75000',
      priceCurrency: 'INR',
      description: 'React Native app with up to 8 screens, basic backend and Play Store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Business App Development',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured React Native or Flutter app with admin panel, payment gateway and analytics.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise App Platform',
      description: 'Custom-scoped enterprise mobile platform with microservices, multi-role access and CRM integration.',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'App Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native App Development Bangalore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter App Development Bangalore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Android App Development Bangalore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'iOS App Development Bangalore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-demand App Development Bangalore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce App Development Bangalore' } },
    ],
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: `${SITE.url}${APP_PAGE.slug}` },
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does mobile app development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic MVP app starts from ₹75,000. A full-featured business app is typically ₹1,50,000–₹2,50,000. Enterprise platforms are scoped individually. All pricing is fixed before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a mobile app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Timeline is agreed in writing before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'React Native or Flutter which should I choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both deliver Android and iOS apps from one codebase. React Native has a larger ecosystem. Flutter gives more precise UI control. NNC recommends the right framework after reviewing your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will NNC handle Play Store and App Store submission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes completely. NNC manages the full submission process including store listing, screenshots, review responses and release management on both platforms.',
      },
    },
  ],
}
