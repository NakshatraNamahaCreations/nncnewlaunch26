import { SLUG_MAP, SERVICE_DEFS, CITY_DEFS, NEIGHBOURHOOD_DEFS } from '@/data/landingData'
import { SITE } from '@/data/siteData'
import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import CityServiceContent from './CityServiceContent'

export async function generateStaticParams() {
  return Object.keys(SLUG_MAP).map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const config = SLUG_MAP[slug]
  if (!config) return { title: 'NNC Digital', description: SITE.tagline }

  const svc = SERVICE_DEFS[config.service] || {}
  const city = config.city ? CITY_DEFS[config.city] : null
  const hood = config.neighbourhood ? NEIGHBOURHOOD_DEFS[config.neighbourhood] : null

  const location = hood ? `${hood.name}, ${city?.name}` : city?.name || 'India'
  const defaultTitle = `${svc.name} Company in ${location} | NNC Digital`
  const title = config.titleOverride || defaultTitle
  const description = `NNC Digital — ${svc.name?.toLowerCase()} company in ${location}. ${svc.desc} 565+ projects. 4.9★ Google. Call +91 99005 66466.`

  return {
    title,
    description,
    keywords: [
      `${svc.shortName?.toLowerCase()} ${location?.toLowerCase()}`,
      `${svc.shortName?.toLowerCase()} company ${location?.toLowerCase()}`,
      `best ${svc.shortName?.toLowerCase()} ${location?.toLowerCase()}`,
      'nakshatra namaha creations',
      'nnc digital',
    ].join(', '),
    alternates: { canonical: `${SITE.url}/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/${slug}`,
      type: 'website',
    },
  }
}

export default function CityServicePage({ params }) {
  const { slug } = params
  const config = SLUG_MAP[slug]

  if (!config) return <div style={{ padding: 80, textAlign: 'center' }}>Page not found</div>

  const svc = SERVICE_DEFS[config.service]
  const city = config.city ? CITY_DEFS[config.city] : null
  const hood = config.neighbourhood ? NEIGHBOURHOOD_DEFS[config.neighbourhood] : null
  const titleOverride = config.titleOverride

  // JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc?.name,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
    areaServed: city?.name || 'India',
    description: svc?.desc,
    url: `${SITE.url}/${slug}`,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
      { '@type': 'ListItem', position: 3, name: config.titleOverride || `${svc?.name} in ${city?.name || 'India'}`, item: `${SITE.url}/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <CityServiceContent slug={slug} svc={svc} city={city} hood={hood} titleOverride={titleOverride} />
      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
