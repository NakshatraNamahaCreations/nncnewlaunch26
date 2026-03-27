import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Website Portfolio | 200+ Projects | NNC Digital',
  description: "NNC's website portfolio: 200+ corporate, e-commerce and portal projects across India and international markets. Built on React JS and Next JS.",
  alternates: { canonical: `${SITE.url}/our-works/website-development` },
}

export default function PortfolioSubPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 14 }}>
              Website Development Portfolio
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.7 }}>
              200+ websites built on React JS and Next JS. Corporate, e-commerce, portals and SaaS.
            </p>
            <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
              Start Your Project <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>
        <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <p style={{ fontSize: 17, color: '#6B7A99', marginBottom: 32 }}>Portfolio images are loaded from our main website. <a href="https://www.nakshatranamahacreations.com/our-works/website-development" style={{ color: '#2196F3', fontWeight: 700 }}>View live portfolio →</a></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 900, margin: '0 auto' }}>
              {[1,2,3,4,5,6].map(n => (
                <div key={n} style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 12, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>
                  Project {n}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
