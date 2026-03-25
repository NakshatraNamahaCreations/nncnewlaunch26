import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import ContactContent from './ContactContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Contact Us | NNC Digital — Nakshatra Namaha Creations',
  description: 'Contact NNC Digital — Website Development, Mobile App Development, Digital Marketing. Call +91 99005 66466 or visit us in Bengaluru, Mumbai, Mysuru or Hyderabad.',
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
      <Topbar />
      <Navbar />
      <main><ContactContent /></main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
