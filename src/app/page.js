import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { StatsBar, ClientsBand } from '@/components/StatsBar'
import Services from '@/components/Services'
import WhyNNC from '@/components/WhyNNC'
import About from '@/components/About'
import {
  CaseStudies,
  Process,
  Testimonials,
  Industries,
  TechStack,
  FaqContact,
  CtaBand,
  Footer,
  WaFloat,
} from '@/components/Sections'
import AnimObserver from '@/components/AnimObserver'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ClientsBand />
        <Services />
        <WhyNNC />
        <About />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Industries />
        <TechStack />
        <FaqContact />
        <CtaBand />
      </main>
      <Footer />
      <WaFloat />
      {/* Fires IntersectionObserver after hydration */}
      <AnimObserver />
    </>
  )
}
