import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import { CASE_STUDY_DATA } from '@/data/landingData'
import Link from 'next/link'

export const metadata = {
  title: 'Case Studies | Real Projects. Documented Results. | NNC Digital',
  description: 'NNC Digital case studies — real client challenges, what we built, and documented outcomes. Healthcare, home services, e-commerce and more. Every client reachable for a reference.',
  alternates: { canonical: `${SITE.url}/case-studies` },
}

export default function CaseStudiesListPage() {
  const studies = Object.entries(CASE_STUDY_DATA).map(([key, data]) => ({ key, ...data }))

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.25)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              Documented Results
            </div>
            <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 16 }}>
              Case Studies With<br /><span style={{ color: '#2196F3' }}>Real Outcomes</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.72 }}>
              Every case study includes the exact challenge, what NNC built, and verifiable outcomes. Every client is reachable for a reference call.
            </p>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {studies.map((cs) => {
                const colors = { healthcare: '#2196F3', 'home-services': '#10B981' }
                const bgColors = { healthcare: 'linear-gradient(135deg,#0a2055,#1565C0)', 'home-services': 'linear-gradient(135deg,#064E3B,#10B981)' }
                const c = colors[cs.category] || '#2196F3'
                const bg = bgColors[cs.category] || 'linear-gradient(135deg,#0a2055,#1565C0)'
                return (
                  <Link key={cs.key} href={`/case-studies/${cs.category}/${cs.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 16, overflow: 'hidden', transition: 'all .22s' }}>
                      <div className="row g-0">
                        <div className="col-md-3">
                          <div style={{ background: bg, height: '100%', minHeight: 160, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px 24px' }}>
                            <div>
                              <span style={{ display: 'inline-flex', fontSize: 10.5, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,.2)', padding: '2px 10px', borderRadius: 20, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                                {cs.industry}
                              </span>
                              <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{cs.client}</div>
                            </div>
                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
                              {cs.tags.map(t => <span key={t} style={{ fontSize: 10.5, fontWeight: 600, color: 'rgba(255,255,255,.6)', background: 'rgba(255,255,255,.1)', padding: '2px 8px', borderRadius: 20 }}>{t}</span>)}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div style={{ padding: '28px 32px' }}>
                            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0B1F4B', marginBottom: 10, letterSpacing: '-.025em' }}>{cs.title}</h2>
                            <div className="row g-3 mb-16">
                              <div className="col-md-6">
                                <div style={{ fontSize: 10.5, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 5 }}>Challenge</div>
                                <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.65 }}>{cs.challenge}</p>
                              </div>
                              <div className="col-md-6">
                                <div style={{ fontSize: 10.5, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 5 }}>What NNC Built</div>
                                <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.65 }}>{cs.solution.substring(0, 120)}...</p>
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginTop: 14 }}>
                              {cs.outcomes.slice(0, 3).map(o => (
                                <span key={o} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: c, background: `${c}12`, border: `1px solid ${c}30`, padding: '4px 10px', borderRadius: 20 }}>
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                  {o}
                                </span>
                              ))}
                              <span style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 700, color: c, display: 'flex', alignItems: 'center', gap: 5 }}>
                                Read Full Case Study <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#071435', padding: '64px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', marginBottom: 14 }}>
              Ready to Be Our Next <span style={{ color: '#2196F3' }}>Case Study?</span>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 28, lineHeight: 1.7 }}>
              Get a free consultation and fixed price within 24 hours.
            </p>
            <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
              Start Your Project <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
