import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import ContactContent from './ContactContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Contact NNC | Get a Free Quote Within 24 Hours',
  description: 'Get a fixed-price quote from NNC within 24 hours for your website, app, CRM or digital marketing. Call +91 99005 66466 or visit a branch office.',
  alternates: { canonical: `${SITE.url}/contact-us` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact NNC Digital',
  url: `${SITE.url}/contact-us`,
  mainEntity: {
    '@type': 'Organization',
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main><ContactContent /></main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
