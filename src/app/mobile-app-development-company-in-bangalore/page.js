import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import MobileAppContent from './MobileAppContent'
import { metadata as pageMeta, serviceSchema, breadcrumbSchema, faqSchema } from './metadata'

export const metadata = pageMeta

export default function MobileAppPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main>
        <MobileAppContent />
      </main>

      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
