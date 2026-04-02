'use client'
import Link from 'next/link'
import { OFFICES } from '@/data/siteData'

const HIGHLIGHTS = [
  { n: '565+', l: 'Projects Delivered', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { n: '35+', l: 'In-house Experts', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
  { n: '8+', l: 'Years of Trust', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2' },
  { n: '4', l: 'City Offices', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
]

function Ico({ d, size = 20, color = 'currentColor' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
}

export default function About() {
  return (
    <section id="about" aria-label="About NNC" style={{ overflow: 'hidden' }}>

      {/* ── BANNER WITH OVERLAY ── */}
      <div className="about-banner" style={{
        position: 'relative',
        minHeight: 'clamp(360px,60vw,600px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(/abtnnc.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }} />
        {/* Dark gradient overlay — full overlay on mobile, side-heavy on desktop */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(7,20,53,.55) 0%, rgba(7,20,53,.88) 100%)',
        }} />

        <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(36px,6vw,80px) clamp(16px,4vw,24px)', position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="row align-items-center">
            {/* Left spacer — only on large screens */}
            <div className="col-lg-5 d-none d-lg-block" />

            {/* Content */}
            <div className="col-12 col-lg-7">
              <span style={{ fontSize: 'clamp(10px,2vw,11px)', fontWeight: 700, color: '#90CAF9', textTransform: 'uppercase', letterSpacing: '.1em', display: 'block', marginBottom: 16 }}>About NNC</span>

              <h2 style={{
                fontSize: 'clamp(26px,5vw,50px)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-.04em',
                lineHeight: 1.1,
                marginBottom: 20,
              }}>
                Built in Bangalore.<br />
                <span style={{ color: '#64B5F6' }}>Operating Across India.</span>
              </h2>

              <p style={{ fontSize: 'clamp(14px,2.5vw,17px)', color: 'rgba(255,255,255,.75)', lineHeight: 1.8, maxWidth: 540, marginBottom: 10 }}>
                NNC was founded in Bengaluru in 2015 with one principle: every project built by the people
                accountable for it. <strong style={{ color: '#fff' }}>Not outsourced. Not freelanced. Done by a permanent team.</strong>
              </p>
              <p style={{ fontSize: 'clamp(13px,2vw,15.5px)', color: 'rgba(255,255,255,.55)', lineHeight: 1.75, maxWidth: 540, marginBottom: 32 }}>
                Ten years later: 35+ permanent specialists, 565+ projects, four physical offices across India.
                You can walk into any of them and meet your project team in person.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/our-works" className="btn-about-primary">
                  See Our Work <Ico d="M5 12h14M12 5l7 7-7 7" size={15} color="#fff" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* ── OFFICES GRID ── */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '48px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}><span className="tag-dot" />Our Offices</span>
            <h3 className="sec-h" style={{ fontSize: 'clamp(24px, 2.8vw, 32px)' }}>
              Present in <span className="sky">4 Cities</span> Across India
            </h3>
          </div>
          <div className="row g-3 justify-content-center">
            {OFFICES.map((o, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="about-office-card">
                  <span className="about-oc-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                  <div className="about-oc-city">{o.city}</div>
                  <div className="about-oc-type">{o.type}</div>
                  <div className="about-oc-addr">{o.address}, {o.pin}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
