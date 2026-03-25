'use client'
import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

const PORTFOLIO_CATEGORIES = [
  { name: 'Mobile App Development', slug: '/our-works/mobile-app-development', count: '150+', icon: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', ic: '#10B981', ib: 'rgba(16,185,129,.1)', desc: 'Android and iOS apps built on React Native and Flutter. From on-demand platforms to enterprise apps.' },
  { name: 'Website Development', slug: '/our-works/website-development', count: '200+', icon: 'M3 3h18v14H3zM8 21h8M12 17v4', ic: '#2196F3', ib: 'rgba(33,150,243,.1)', desc: 'Corporate websites, e-commerce platforms, web apps and portals. All on React JS and Next JS.' },
  { name: 'Corporate Video Production', slug: '/our-works/corporate-video-production', count: '200+', icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z', ic: '#EF4444', ib: 'rgba(239,68,68,.1)', desc: 'Brand films, product shoots, drone footage and motion graphics. Full in-house 4K production.' },
  { name: '2D Animation', slug: '/our-works/animation', count: '90+', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', ic: '#7C3AED', ib: 'rgba(124,58,237,.1)', desc: 'Explainer videos, character animation, whiteboard animations and social media reels.' },
]

const FEATURED_WORKS = [
  { name: 'Vijaya Home Services', type: 'On-demand App', img: 'https://www.nakshatranamahacreations.com/media/ourwork/vijayhom.webp', tag: 'React Native · Node JS', result: '340% booking growth', slug: '/case-studies/home-services/ganesh-interior' },
  { name: 'Pro Leverage', type: 'Finance App', img: 'https://www.nakshatranamahacreations.com/media/ourwork/proleverage.webp', tag: 'Flutter · Firebase', result: '10K+ downloads M1', slug: '/case-studies/healthcare/scinado' },
  { name: 'Puran Interiors', type: 'Website & SEO', img: 'https://www.nakshatranamahacreations.com/media/tech/puranInterio.avif', tag: 'Next JS · SEO', result: 'Page 1 Google · 90 days', slug: '/our-works/website-development' },
]

export default function OurWorksContent() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 16 }}>
              565+ Projects.<br /><span style={{ color: '#2196F3' }}>All In-house. All Documented.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.72 }}>
              Not a single project outsourced. Every deliverable in our portfolio was built by permanent NNC employees — and every client is reachable for a reference.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="row g-4">
              {PORTFOLIO_CATEGORIES.map((cat, i) => (
                <div key={cat.slug} className="col-12 col-md-6 anim" style={{ transitionDelay: `${i * .1}s` }}>
                  <Link href={cat.slug} style={{ textDecoration: 'none' }}>
                    <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, padding: '32px', height: '100%', display: 'flex', gap: 20, alignItems: 'flex-start', transition: 'all .25s' }}>
                      <div style={{ width: 60, height: 60, borderRadius: 14, background: cat.ib, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cat.ic} strokeWidth="1.6" strokeLinecap="round"><path d={cat.icon} /></svg>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                          <div style={{ fontSize: 18, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.025em' }}>{cat.name}</div>
                          <span style={{ fontSize: 11, fontWeight: 700, color: cat.ic, background: cat.ib, padding: '2px 8px', borderRadius: 20 }}>{cat.count}</span>
                        </div>
                        <p style={{ fontSize: 14, color: '#6B7A99', lineHeight: 1.65, marginBottom: 14 }}>{cat.desc}</p>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 700, color: '#2196F3' }}>
                          View Portfolio <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#F8FAFC', padding: '80px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="text-center mb-5 anim">
              <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em' }}>Featured Case Studies</h2>
            </div>
            <div className="row g-4">
              {FEATURED_WORKS.map((w, i) => (
                <div key={i} className="col-12 col-md-4 anim" style={{ transitionDelay: `${i * .1}s` }}>
                  <div style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(11,31,75,.05)', transition: 'all .22s', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: 200, overflow: 'hidden', background: '#E2E8F0' }}>
                      <img src={w.img} alt={`${w.name} — ${w.type} project by NNC Digital Bangalore`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.target.style.transform = ''} />
                    </div>
                    <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>{w.type}</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.025em', marginBottom: 6 }}>{w.name}</div>
                      <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 14 }}>{w.tag}</div>
                      <div style={{ padding: '10px 14px', background: '#EFF6FF', borderRadius: 8, border: '1px solid rgba(33,150,243,.15)', marginTop: 'auto' }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#2196F3' }}>{w.result}</div>
                      </div>
                    </div>
                  </div>
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
