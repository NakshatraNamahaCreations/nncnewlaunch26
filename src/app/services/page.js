import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SERVICES, SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Website Development, Mobile Apps, CRM, Digital Marketing | NNC Digital Bangalore',
  description: 'NNC Digital offers website development, mobile app development, CRM & custom software, digital marketing & SEO, corporate video production, 2D animation, graphic design and B2B marketing. 35+ in-house specialists. Zero outsourcing. 565+ projects since 2015.',
  alternates: { canonical: 'https://www.nakshatranamahacreations.com/services' },
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 16 }}>
              Eight Services.<br /><span style={{ color: '#2196F3' }}>Zero Outsourcing.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.72 }}>
              NNC&apos;s in-house team covers the complete digital stack. Every project is built by permanent NNC employees you can walk into any office and meet them.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['565+ Projects Delivered', '4.9★ Google Rating', '35+ In-house Specialists', 'Since 2015'].map(t => (
                <span key={t} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.6)', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', padding: '5px 14px', borderRadius: 30 }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ALL SERVICES */}
        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="row g-4">
              {SERVICES.map((s, i) => (
                <div key={s.id} className="col-12 col-md-6 col-lg-4 anim" style={{ transitionDelay: `${i * .07}s` }}>
                  <Link href={s.slug} style={{ textDecoration: 'none' }}>
                    <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all .25s', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#2196F3', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s' }} className="svc-bar" />
                      <div style={{ width: 52, height: 52, borderRadius: 12, background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s.iconColor} strokeWidth="1.8" strokeLinecap="round">
                          <path d={s.icon} />
                        </svg>
                      </div>
                      <div style={{ fontSize: 9.5, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>Service {String(i+1).padStart(2,'0')}</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.025em', marginBottom: 10, lineHeight: 1.2 }}>{s.name}</div>
                      <p style={{ fontSize: 13.5, color: '#6B7A99', lineHeight: 1.65, marginBottom: 18, flex: 1 }}>{s.desc}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
                        {s.features.slice(0, 3).map(f => (
                          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: '#475569' }}>
                            <div style={{ width: 15, height: 15, borderRadius: '50%', background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={s.iconColor} strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            {f}
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: '#2196F3', marginTop: 'auto' }}>
                        Learn more <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#071435', padding: '64px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', marginBottom: 14 }}>
              Not Sure Which Service You Need?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 28, lineHeight: 1.7 }}>
              Call us or send a message and we&apos;ll tell you exactly what your business needs and give you a fixed price within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                Get Free Consultation <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href={SITE.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,.7)', border: '1.5px solid rgba(255,255,255,.22)', padding: '13px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                {SITE.phone}
              </a>
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
