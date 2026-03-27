import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import AboutContent from './AboutContent'

export const metadata = {
  title: 'About NNC Digital Agency | Bangalore Since 2015',
  description: 'Founded in 2015, NNC is a Bangalore-based digital agency with 35+ specialists on 565+ projects. Four offices across India. Zero outsourcing. Meet the team.',
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
