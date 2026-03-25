import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import AboutContent from './AboutContent'

export const metadata = {
  title: 'About Us | Nakshatra Namaha Creations — Website Development Company in Bangalore Since 2015',
  description: "Learn about Nakshatra Namaha Creations (NNC) — a leading website development company in Bangalore founded in 2015. Meet our 35+ in-house team, discover our founder's vision, and see why 565+ clients trust us.",
  alternates: { canonical: 'https://www.nakshatranamahacreations.com/about-us' },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
