import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { CASE_STUDY_DATA } from '@/data/landingData'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export async function generateStaticParams() {
  return Object.keys(CASE_STUDY_DATA).map(key => {
    const [category, slug] = key.split('/')
    return { category, slug }
  })
}

export async function generateMetadata({ params }) {
  const key = `${params.category}/${params.slug}`
  const cs = CASE_STUDY_DATA[key]
  if (!cs) return { title: 'Case Study | NNC Digital' }
  return {
    title: `${cs.title} | Case Study | NNC Digital`,
    description: `${cs.challenge} NNC Digital delivered: ${cs.result}`,
    alternates: { canonical: `${SITE.url}/case-studies/${params.category}/${params.slug}` },
  }
}

export default function CaseStudyPage({ params }) {
  const key = `${params.category}/${params.slug}`
  const cs = CASE_STUDY_DATA[key]

  if (!cs) return (
    <>
      <Navbar />
      <main style={{ padding: '80px 24px', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: 28, color: '#0B1F4B' }}>Case study not found.</h1>
        <Link href="/our-works" style={{ color: '#2196F3', fontWeight: 700 }}>View all portfolio →</Link>
      </main>
      <Footer /><WaFloat />
    </>
  )

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <nav style={{ background: '#071435', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 6, fontSize: 12.5, flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
            <Link href="/our-works" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Our Works</Link>
            <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
            <span style={{ color: '#2196F3', fontWeight: 600 }}>{cs.title}</span>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '64px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
                  {cs.tags.map(t => <span key={t} style={{ fontSize: 11, fontWeight: 700, color: '#2196F3', background: 'rgba(33,150,243,.18)', padding: '3px 10px', borderRadius: 20 }}>{t}</span>)}
                </div>
                <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 800, color: '#fff', letterSpacing: '-.05em', lineHeight: 1.1, marginBottom: 16 }}>{cs.title}</h1>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,.12)', border: '1px solid rgba(16,185,129,.25)', padding: '8px 16px', borderRadius: 10, fontSize: 14, fontWeight: 700, color: '#10B981' }}>
                  ✓ {cs.result}
                </div>
              </div>
              {cs.img && (
                <div className="col-lg-5 d-none d-lg-block">
                  <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)', boxShadow: '0 16px 40px rgba(0,0,0,.3)' }}>
                    <img src={cs.img} alt={cs.title} style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }} loading="lazy" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <h2 style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 12 }}>The Challenge</h2>
                    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>{cs.challenge}</p>
                  </div>
                  <div className="col-md-6">
                    <h2 style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 12 }}>What NNC Built</h2>
                    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>{cs.solution}</p>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 32 }}>
                  <h2 style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 18 }}>Outcomes</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
                    {cs.outcomes.map((o, i) => (
                      <div key={i} style={{ padding: '16px 18px', background: '#EFF6FF', border: '1px solid rgba(33,150,243,.18)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#0B1F4B' }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div style={{ background: '#071435', borderRadius: 16, padding: 28 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Ready to start your project?</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 20, lineHeight: 1.6 }}>Get a free consultation and fixed price within 24 hours.</p>
                  <Link href="/contact-us" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '12px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                    Get Free Quote →
                  </Link>
                  <a href={SITE.phoneHref} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 10, padding: '10px', borderRadius: 8, border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.55)', fontSize: 13.5, fontWeight: 600, textDecoration: 'none' }}>
                    {SITE.phone}
                  </a>
                </div>
              </div>
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
