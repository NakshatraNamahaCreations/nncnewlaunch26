'use client'
import { useState } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { SITE, OFFICES } from '@/data/siteData'

// Row 1 Founders
const TEAM_ROW1 = [
  { name: 'Harish Kashyap', role: 'Founder & Managing Director', photo: '/team-12.jpg' },
  { name: 'Anjana DR',       role: 'Head of Operations',          bg: '#059669', photo: '/team-22.jpg' },
  { name: 'Nithin',          role: 'Business Development Manager', bg: '#EF4444', photo: '/team-18.jpg' },
]
// Row 2 Senior Team
const TEAM_ROW2 = [
  { name: 'Anil Dev',    role: 'Sr UI/UX Designer',      bg: '#1E40AF', photo: '/team-3.jpg' },
  { name: 'Yogesh PV',   role: 'Sr Full Stack Developer', bg: '#2DD4BF', photo: '/team-25.jpg' },
  { name: 'Suman Raj',   role: 'Sr Full Stack Developer', bg: '#7C3AED', photo: '/team-10.jpg' },
  { name: 'Kavana NP',   role: 'Sr Website Developer',    bg: '#D97706', photo: '/team-15.jpg' },
  { name: 'Jyanth P',    role: 'Sr Flutter Developer',    bg: '#F97316' ,photo: '/team-20.jpg'},
]
// Row 3 Team
const TEAM_ROW3 = [
  { name: 'Kiruthika M',         role: 'Full Stack Developer',    bg: '#A78BFA' ,photo: '/team-21.jpg'},
  { name: 'Dashwanth',           role: 'Motion Graphic Designer', bg: '#34D399' ,photo: '/team-24.jpg'},
  { name: 'SingamSetty Sathish', role: 'QA Tester',               bg: '#60A5FA',photo: '/team-1.jpg' },
  { name: 'Aishwarya',         role: 'Project Co-ordinator',       bg: '#FDA4AF',photo: '/team-23.jpg' },
 
]

const TIMELINE = [
  { year: '2015', badge: 'Founded', title: 'NNC founded in Bengaluru', body: 'Nakshatra Namaha Creations was established in Bengaluru with a clear mission to make professional digital solutions accessible to every growing Indian business.' },
  { year: '2017', badge: 'Expansion', title: 'First 100 projects delivered', body: 'Within two years, NNC delivered over 100 client projects. Client referrals became the primary source of new business.' },
  { year: '2019', badge: 'New services', title: 'Mobile app & video studio launched', body: 'NNC launched in-house mobile app development (React Native & Flutter) and a full video production studio.' },
  { year: '2021', badge: 'Growth', title: 'Mysuru & Hyderabad offices open', body: 'NNC expanded with new offices in Mysuru and Hyderabad. The team grew to 25+ members.' },
  { year: '2023', badge: 'Mumbai', title: 'Mumbai branch opens 4 cities', body: "NNC's Mumbai (Thane West) office completed the 4-city footprint. International projects commenced." },
  { year: '2025', badge: 'Today', title: '565+ projects. Expanding globally.', body: 'NNC has delivered 565+ digital projects and is expanding its international client base.' },
]

const VALUES = [
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Full accountability', body: 'Every project has one accountable team and one contact. We do not outsource, sub-contract or pass your work to a third party.' },
  { icon: 'M22 12h-4l-3 9L9 3l-3 9H2', title: 'Performance first', body: 'Every website we build scores 90+ on Core Web Vitals. Speed, mobile-first architecture and SEO are built in from the first line of code.' },
  { icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z', title: 'Radical transparency', body: 'You know the scope, timeline and price before we start. No surprise invoices, no scope creep. Weekly progress reports, always.' },
  { icon: 'M3 3h18v14H3zM8 21h8M12 17v4', title: 'Source code ownership', body: 'Your IP is yours. Full source code transfers to you on completion. No lock-in, no monthly licence fees.' },
  { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75', title: 'In-house, always', body: '35+ permanent, full-time specialists. Developers, designers, marketers, animators all under one roof.' },
  { icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2', title: 'Long-term thinking', body: 'We build for scalability, maintainability and growth. A site that breaks under load in a year is not a success.' },
]

const ABOUT_FAQS = [
  { q: 'When was Nakshatra Namaha Creations founded?', a: 'NNC was founded in 2015 in Bengaluru. It has grown into a 35+ member in-house agency with four offices across India.' },
  { q: 'How many projects has NNC delivered?', a: 'NNC has delivered 565+ digital projects since 2015 across website development, mobile apps, CRM, digital marketing, 2D animation and corporate video.' },
  { q: 'Does NNC outsource its work?', a: 'Never. Every project is handled by our in-house team of 35+ permanent employees. We do not outsource.' },
  { q: 'Where are NNC offices located?', a: 'Head office in Bengaluru (Channasandra), branch offices in Mysuru, Hyderabad and Mumbai (Thane West).' },
  { q: 'What industries does NNC specialise in?', a: 'Hospitality, healthcare, real estate, education, e-commerce, legal, events, manufacturing, automobile and fitness.' },
  { q: 'How can I join the NNC team?', a: 'Visit our Careers page or email info@nakshatranamahacreations.com.' },
]

function Ico({ d, size = 22, color = 'currentColor' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
}

function TeamCard({ m, priority = false }) {
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const initials = m.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const accent = m.bg || '#2563EB'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Photo */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '115%',
        overflow: 'hidden',
        borderRadius: 16,
        marginBottom: 14,
        background: 'transparent',
        boxShadow: 'none',
        transition: 'box-shadow .35s cubic-bezier(.16,1,.3,1)',
      }}>
        {m.photo ? (
          <>
            {/* Skeleton shimmer shown until image loads */}
            {!imgLoaded && (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, #E8ECF4 25%, #F4F6FA 50%, #E8ECF4 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.4s infinite',
                borderRadius: 16,
              }} />
            )}
            <NextImage
              src={m.photo}
              alt={m.name}
              fill
              sizes="(max-width: 576px) 45vw, (max-width: 992px) 28vw, 220px"
              quality={78}
              priority={priority}
              onLoad={() => setImgLoaded(true)}
              style={{
                objectFit: 'cover',
                objectPosition: '50% 10%',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform .45s cubic-bezier(.16,1,.3,1)',
                opacity: imgLoaded ? 1 : 0,
                transitionProperty: 'transform, opacity',
              }}
            />
          </>
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 66, height: 66, borderRadius: '50%',
              background: accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, fontWeight: 900, color: '#fff',
              letterSpacing: '-.02em',
              boxShadow: `0 4px 16px ${accent}55`,
            }}>{initials}</div>
          </div>
        )}

        {/* Subtle gradient overlay on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,.28) 0%, transparent 55%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity .3s',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Info */}
      <div>
        {/* Colored accent bar */}
        <div style={{
          width: hovered ? 32 : 20,
          height: 3, borderRadius: 2,
          background: accent,
          marginBottom: 8,
          transition: 'width .3s cubic-bezier(.16,1,.3,1)',
        }} />

        {/* Name */}
        <div style={{
          fontSize: 14.5, fontWeight: 800,
          color: '#0B1F4B',
          letterSpacing: '-.03em',
          lineHeight: 1.2,
          marginBottom: 6,
        }}>
          {m.name}
        </div>

        {/* Role */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontSize: 10.5, fontWeight: 700,
          color: accent,
          background: accent + '12',
          border: `1px solid ${accent}28`,
          padding: '3px 10px 3px 7px',
          borderRadius: 20,
          lineHeight: 1.45,
          maxWidth: '100%',
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: accent, flexShrink: 0,
          }} />
          <span style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
            {m.role}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function AboutContent() {
  const [faqOpen, setFaqOpen] = useState(0)

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <nav style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
          <Link href="/" style={{ color: 'var(--sky)', fontWeight: 500 }}>Home</Link>
          <span style={{ color: 'var(--ink5)', fontSize: 11 }}>›</span>
          <span style={{ color: 'var(--ink2)', fontWeight: 600 }}>About Us</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: 'clamp(40px,7vw,72px) 0', background: '#fff', borderBottom: '1px solid var(--border)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '60px 60px', opacity: .35, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 clamp(16px,4vw,24px)', position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="section-tag"><span className="tag-dot" />About Nakshatra Namaha Creations</div>
              <h1 className="sec-h" style={{ marginBottom: 18 }}>
                The team that builds<br /><span className="sky">digital India&apos;s</span> best business platforms.
              </h1>
              <p style={{ fontSize: 17, color: 'var(--ink3)', lineHeight: 1.72, maxWidth: 520, marginBottom: 36 }}>
                Founded in <strong style={{ color: 'var(--ink2)' }}>Bengaluru in 2015</strong>, NNC is a full-stack digital agency with <strong style={{ color: 'var(--ink2)' }}>35+ in-house specialists</strong>, four city offices and <strong style={{ color: 'var(--ink2)' }}>565+ projects</strong> delivered for businesses across India and internationally.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="#team" className="btn btn-sky fw-bold px-4 py-3 d-inline-flex align-items-center gap-2">Meet the team <Ico d="M5 12h14M12 5l7 7-7 7" size={15} color="#fff" /></a>
                <a href="#founder" className="btn btn-outline-dark fw-semibold px-4 py-3 d-inline-flex align-items-center gap-2"><Ico d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 8a3 3 0 100 6 3 3 0 000-6z" size={14} /> Founder&apos;s story</a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 64px rgba(7,20,53,.18)', border: '1.5px solid rgba(37,99,235,.15)', background: 'linear-gradient(135deg, #071435 0%, #0f2460 50%, #1a3a8f 100%)', padding: 32 }}>
                {/* Decorative circles */}
                <div style={{ position: 'absolute', top: -40, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'rgba(37,99,235,.12)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -30, left: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(14,165,233,.1)', pointerEvents: 'none' }} />

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, position: 'relative', zIndex: 1 }}>
                  <div style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', borderRadius: 10, padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Nakshatra Namaha Creations</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Full-Stack Digital Agency</div>
                  </div>
                </div>

                {/* Services grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                  {[
                    { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Website Development' },
                    { icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', label: 'Mobile App Dev' },
                    { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Digital Marketing' },
                    { icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z', label: 'Video Production' },
                    { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'Custom CRM' },
                    { icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', label: 'SEO & Growth' },
                  ].map(({ icon, label }) => (
                    <div key={label} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, backdropFilter: 'blur(4px)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icon} /></svg>
                      <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.85)' }}>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom stats bar */}
                <div style={{ display: 'flex', gap: 0, background: 'rgba(255,255,255,.07)', borderRadius: 12, border: '1px solid rgba(255,255,255,.1)', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                  {[['565+', 'Projects'], ['35+', 'Experts'], ['4', 'Cities'], ['Since', '2015']].map(([n, l], i, arr) => (
                    <div key={l} style={{ flex: 1, textAlign: 'center', padding: '14px 8px', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: '#38bdf8', letterSpacing: '-.03em', lineHeight: 1 }}>{n}</div>
                      <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.45)', fontWeight: 500, marginTop: 3 }}>{l}</div>
                    </div>
                  ))}
                </div>

                {/* Live badge */}
                <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(34,197,94,.15)', border: '1px solid rgba(34,197,94,.3)', borderRadius: 20, padding: '5px 12px', zIndex: 2 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e' }}>100% In-house</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER SECTION ── */}
      <section id="founder" style={{ background: 'var(--navy2)', padding: '96px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 14 }}>The founder&apos;s story</div>
              <h2 style={{ fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.06, color: '#fff', marginBottom: 20 }}>
                From a <span style={{ color: 'var(--sky)' }}>Bengaluru startup</span><br />to India&apos;s trusted<br />digital agency.
              </h2>
              <div style={{ borderLeft: '3px solid var(--sky)', padding: '20px 24px', background: 'rgba(33,150,243,.08)', borderRadius: '0 var(--r) var(--r) 0', marginBottom: 28 }}>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,.75)', lineHeight: 1.75, marginBottom: 10 }}>
                  &ldquo;I started NNC because I saw too many good businesses failing online not because their products were bad, but because their digital presence did not reflect who they were.&rdquo;
                </p>
                <cite style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--sky)', fontStyle: 'normal' }}>Founder &amp; Managing Director, Nakshatra Namaha Creations</cite>
              </div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.78 }}>
                <p style={{ marginBottom: 14 }}>In 2015, NNC was founded in Bengaluru with a single office, a small team and a clear conviction: every business deserves professional digital solutions built with care, accountability and real technical depth.</p>
                <p style={{ marginBottom: 14 }}>What started as a website development practice grew into a full-stack digital agency as clients returned asking for mobile apps, CRM systems, marketing campaigns and video production.</p>
                <p style={{ marginBottom: 0 }}>Today NNC operates from four cities with 35+ permanent team members and 565+ delivered projects. The founding principle has never changed.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { n: '10+', l: 'Years in digital industry' },
                  { n: '565+', l: 'Projects overseen' },
                  { n: '4', l: 'Offices built and scaled' },
                  { n: '35+', l: 'Team members hired & trained' },
                ].map(s => (
                  <div key={s.l} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 'var(--r)', padding: 20 }}>
                    <div style={{ fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: '-.05em', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.4)', marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-5 anim">
            <div className="section-tag" style={{ margin: '0 auto 12px' }}><span className="tag-dot" />What drives us</div>
            <h2 className="sec-h">Our mission <span className="sky">&amp; vision</span></h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 anim">
              <div style={{ background: 'var(--navy)', borderRadius: 'var(--r)', padding: '44px 40px', height: '100%' }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--r)', background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                  <Ico d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" color="var(--sky)" />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Our mission</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,.55)', marginBottom: 20 }}>To help businesses grow with smart and practical digital solutions. We deliver value through honest work, consistent quality and long-term support.</p>
                <div className="d-flex flex-wrap gap-2">
                  {['Honest work', 'Consistent quality', 'Long-term support'].map(t => (
                    <span key={t} style={{ background: 'rgba(33,150,243,.12)', border: '1px solid rgba(33,150,243,.2)', padding: '4px 11px', borderRadius: 20, fontSize: 11, fontWeight: 600, color: 'var(--sky)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 anim">
              <div style={{ background: 'var(--sky-pale)', border: '1.5px solid #BBDEFB', borderRadius: 'var(--r)', padding: '44px 40px', height: '100%' }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--r)', background: '#fff', border: '1px solid #BBDEFB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                  <Ico d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z" color="var(--sky)" />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 14 }}>Our vision</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink2)', marginBottom: 20 }}>To be recognised as a trusted website and mobile app development company known for building meaningful digital experiences and result-oriented solutions.</p>
                <div className="d-flex flex-wrap gap-2">
                  {['Digital excellence', 'Trusted partner', 'Meaningful outcomes'].map(t => (
                    <span key={t} style={{ background: '#fff', border: '1.5px solid #BBDEFB', padding: '4px 11px', borderRadius: 20, fontSize: 11, fontWeight: 600, color: 'var(--sky)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section style={{ borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-5 anim">
            <div className="section-tag" style={{ margin: '0 auto 12px' }}><span className="tag-dot" />Our journey</div>
            <h2 className="sec-h">10 years of <span className="sky">building digital India.</span></h2>
          </div>
          <div className="row g-4">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className="col-12 col-md-6 col-lg-4 anim" style={{ transitionDelay: `${i * .07}s` }}>
                <div style={{ background: '#fff', border: '1.5px solid var(--border)', borderRadius: 'var(--r)', padding: 28, height: '100%', boxShadow: 'var(--sh)', transition: 'all .2s' }}>
                  <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-.06em', color: 'var(--navy)', lineHeight: 1, marginBottom: 8 }}>{t.year}</div>
                  <span style={{ display: 'inline-flex', background: 'var(--sky-pale)', border: '1px solid #BBDEFB', padding: '4px 11px', borderRadius: 20, fontSize: 11, fontWeight: 700, color: 'var(--sky)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 10 }}>{t.badge}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)', letterSpacing: '-.02em', marginBottom: 7 }}>{t.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 0 }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-5 anim">
            <div className="section-tag" style={{ margin: '0 auto 12px' }}><span className="tag-dot" />What we stand for</div>
            <h2 className="sec-h">Six values that <span className="sky">guide every project</span></h2>
          </div>
          <div className="row g-4">
            {VALUES.map((v, i) => (
              <div key={v.title} className="col-12 col-md-6 col-lg-4 anim" style={{ transitionDelay: `${i * .06}s` }}>
                <div style={{ border: '1.5px solid var(--border)', borderRadius: 'var(--r)', padding: '32px 26px', background: '#fff', transition: 'all .2s', height: '100%' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--r)', background: 'var(--sky-pale)', border: '1.5px solid #BBDEFB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <Ico d={v.icon} color="var(--sky)" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 13.5, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 0 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE BAND ── */}
      <div style={{ background: 'var(--sky)' }}>
        <div className="row g-0">
          {[
            { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z', title: '35+ specialists in-house', body: 'Full-time developers, designers, marketers, animators all permanently employed.' },
            { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10', title: '4 offices walk in anytime', body: 'Bengaluru, Hyderabad, Mumbai and Mysuru. Physical offices mean real accountability.' },
            { icon: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', title: 'Modern tech stack', body: 'React JS, Node JS, PostgreSQL, AWS, React Native and Flutter.' },
            { icon: 'M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3', title: '565+ projects delivered', body: 'Every single one is live, verifiable and owned by the client.' },
          ].map(c => (
            <div key={c.title} className="col-12 col-md-6 col-lg-3">
              <div style={{ padding: '32px 28px', borderRight: '1px solid rgba(255,255,255,.15)', height: '100%' }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--r2)', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Ico d={c.icon} size={20} color="#fff" />
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 7 }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 1.65, marginBottom: 0 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TEAM GRID ── */}
      <section id="team" style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(48px,8vw,88px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 clamp(16px,4vw,24px)' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(36px,6vw,64px)' }}>
            <h2 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 12 }}>
              Our leadership team
            </h2>
            <p style={{ fontSize: 'clamp(14px,2.5vw,16.5px)', color: '#94A3B8', maxWidth: 520, margin: '0 auto' }}>
              Designers, developers, animators all permanent, all in-house, all accountable to you.
            </p>
          </div>

          {/* Shimmer animation */}
          <style>{`
            @keyframes shimmer {
              0% { background-position: 200% 0 }
              100% { background-position: -200% 0 }
            }
            .team-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 52px 24px;
            }
            @media (max-width: 992px) {
              .team-grid { grid-template-columns: repeat(4, 1fr); gap: 36px 16px; }
            }
            @media (max-width: 768px) {
              .team-grid { grid-template-columns: repeat(3, 1fr); gap: 28px 14px; }
            }
            @media (max-width: 480px) {
              .team-grid { grid-template-columns: repeat(2, 1fr); gap: 24px 12px; }
            }
          `}</style>

          {/* All team responsive grid, founders first */}
          <div className="team-grid">
            {[...TEAM_ROW1, ...TEAM_ROW2, ...TEAM_ROW3].map((m, i) => (
              <TeamCard key={i} m={m} priority={i < 5} />
            ))}

            {/* Hiring card */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Link href="/careers" style={{ textDecoration: 'none', width: '100%' }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  borderRadius: 12,
                  border: '2px dashed #CBD5E1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  marginBottom: 18,
                  background: '#F8FAFC',
                  cursor: 'pointer',
                }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0B1F4B', textAlign: 'center', padding: '0 12px' }}>Join our team</div>
                  <div style={{ fontSize: 11.5, color: '#94A3B8', textAlign: 'center', padding: '0 16px', lineHeight: 1.5 }}>Real products, real impact.</div>
                </div>
              </Link>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.03em', marginBottom: 4 }}>We&apos;re Hiring</div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '.08em' }}>View open positions ↗</div>
            </div>
          </div>

          {/* Footer note */}
          <div style={{ textAlign: 'center', marginTop: 56, padding: '24px', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 14 }}>
            <p style={{ fontSize: 15, color: '#475569', marginBottom: 2 }}>
              And <strong style={{ color: '#0B1F4B' }}>26 more permanent specialists</strong> across development, design, marketing and production.
            </p>
            <p style={{ fontSize: 13, color: '#94A3B8', marginBottom: 0 }}>All in-house · Full-time employees · Mon–Sat 9am–7pm</p>
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-5 anim">
            <div className="section-tag" style={{ margin: '0 auto 12px' }}><span className="tag-dot" />Our offices</div>
            <h2 className="sec-h">Four cities. <span className="sky">One team.</span></h2>
            <p className="sec-sub">All four NNC offices are fully staffed and client-ready. Walk in anytime.</p>
          </div>
          <div className="row g-4">
            {OFFICES.map((o, i) => {
              const colors = ['#2196F3', '#10B981', '#F59E0B', '#7C3AED']
              return (
                <div key={o.city} className="col-12 col-sm-6 col-lg-3 anim" style={{ transitionDelay: `${i * .08}s` }}>
                  <div style={{ border: '1.5px solid var(--border)', borderRadius: 'var(--r)', padding: '28px 24px', background: '#fff', transition: 'all .2s', height: '100%' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: colors[i], marginBottom: 14 }} />
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 6 }}>{o.type}</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{o.city}</div>
                    <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 0 }}>{o.address}, {o.state} {o.pin}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row g-5">
            <div className="col-lg-7 anim">
              <div className="section-tag"><span className="tag-dot" />About NNC FAQ</div>
              <h2 className="sec-h" style={{ marginBottom: 40 }}>Common questions <span style={{ color: 'var(--ink3)' }}>about our agency</span></h2>
              <div style={{ borderTop: '1px solid var(--border)' }}>
                {ABOUT_FAQS.map((f, i) => (
                  <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', cursor: 'pointer', gap: 20, background: 'none', border: 'none', textAlign: 'left', fontFamily: 'inherit' }}>
                      <span style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--navy)' }}>{f.q}</span>
                      <span style={{ width: 30, height: 30, borderRadius: '50%', border: '1.5px solid var(--border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .2s', background: faqOpen === i ? 'var(--sky)' : '#fff', color: faqOpen === i ? '#fff' : 'var(--ink3)', transform: faqOpen === i ? 'rotate(45deg)' : 'none', borderColor: faqOpen === i ? 'var(--sky)' : 'var(--border2)' }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                      </span>
                    </button>
                    {faqOpen === i && <p style={{ fontSize: 14.5, color: 'var(--ink3)', lineHeight: 1.72, paddingBottom: 20, maxWidth: 700 }}>{f.a}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 anim">
              <div style={{ background: 'var(--navy2)', borderRadius: 'var(--r)', padding: 36, boxShadow: 'var(--sh2)', position: 'sticky', top: 88 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--sky)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 9 }}>Get in touch</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.03em', marginBottom: 8 }}>Ready to start your project?</h3>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.45)', lineHeight: 1.65, marginBottom: 24 }}>Now you know who we are. The next step is a 30-minute call no sales pressure, just an honest conversation.</p>
                <Link href="/contact-us" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, width: '100%', padding: 14, borderRadius: 'var(--r2)', background: 'var(--sky)', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                  Start a conversation <Ico d="M5 12h14M12 5l7 7-7 7" size={15} color="#fff" />
                </Link>
                <div style={{ display: 'flex', gap: 14, marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.08)', flexWrap: 'wrap' }}>
                  <a href={SITE.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.42)' }}>
                    <Ico d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={13} color="currentColor" />
                    {SITE.phone}
                  </a>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.42)' }}>WhatsApp us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: 'var(--navy2)', borderBottom: '1px solid rgba(255,255,255,.05)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <h2 className="cta-h">Ready to build something<br /><span className="sky">that actually converts?</span></h2>
              <p className="cta-sub" style={{ marginTop: 10, maxWidth: 560 }}>565+ businesses trusted us. Same in-house team, direct communication, source code ownership.</p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-lg-end gap-2">
              <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 15, fontWeight: 700, color: 'var(--navy)', background: '#fff', padding: '16px 32px', borderRadius: 'var(--r2)', textDecoration: 'none', boxShadow: '0 2px 12px rgba(0,0,0,.15)' }}>
                Get a free quote <Ico d="M5 12h14M12 5l7 7-7 7" size={15} color="var(--navy)" />
              </Link>
              <a href={SITE.phoneHref} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.4)' }}>Call {SITE.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
