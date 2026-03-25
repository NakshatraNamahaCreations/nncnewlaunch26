'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SITE, OFFICES } from '@/data/siteData'

const TEAM = [
  { name: 'Anil', role: 'Developer', dept: 'Development Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Anil.jpeg' },
  { name: 'Yogesh', role: 'Developer', dept: 'Development Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Yogesh.jpeg' },
  { name: 'Suman', role: 'Developer', dept: 'Development Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Suman.jpeg' },
  { name: 'Kavana', role: 'Designer', dept: 'Design Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Kavana.jpg' },
  { name: 'Kiruthika', role: 'Designer', dept: 'Design Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Kiruthika.jpeg' },
  { name: 'Sonali', role: 'Marketing Specialist', dept: 'Marketing Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Sonali.jpeg' },
  { name: 'Jayanth', role: 'Developer', dept: 'Development Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Jayanth.jpeg' },
  { name: 'Guru', role: 'Developer', dept: 'Development Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Guru.jpeg' },
  { name: 'Dashavantha', role: 'Specialist', dept: 'Operations Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Dashu.jpeg' },
  { name: 'Sathish', role: 'Developer', dept: 'Development Team', photo: 'https://www.nakshatranamahacreations.com/media/teams/Satish.jpeg' },
]

const TIMELINE = [
  { year: '2015', badge: 'Founded', title: 'NNC founded in Bengaluru', body: 'Nakshatra Namaha Creations was established in Bengaluru with a clear mission — to make professional digital solutions accessible to every growing Indian business.' },
  { year: '2017', badge: 'Expansion', title: 'First 100 projects delivered', body: 'Within two years, NNC delivered over 100 client projects. Client referrals became the primary source of new business.' },
  { year: '2019', badge: 'New services', title: 'Mobile app & video studio launched', body: 'NNC launched in-house mobile app development (React Native & Flutter) and a full video production studio.' },
  { year: '2021', badge: 'Growth', title: 'Mysuru & Hyderabad offices open', body: 'NNC expanded with new offices in Mysuru and Hyderabad. The team grew to 25+ members.' },
  { year: '2023', badge: 'Mumbai', title: 'Mumbai branch opens — 4 cities', body: "NNC's Mumbai (Thane West) office completed the 4-city footprint. International projects commenced." },
  { year: '2025', badge: 'Today', title: '565+ projects. Expanding globally.', body: 'NNC has delivered 565+ digital projects and is expanding its international client base.' },
]

const VALUES = [
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Full accountability', body: 'Every project has one accountable team and one contact. We do not outsource, sub-contract or pass your work to a third party.' },
  { icon: 'M22 12h-4l-3 9L9 3l-3 9H2', title: 'Performance first', body: 'Every website we build scores 90+ on Core Web Vitals. Speed, mobile-first architecture and SEO are built in from the first line of code.' },
  { icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z', title: 'Radical transparency', body: 'You know the scope, timeline and price before we start. No surprise invoices, no scope creep. Weekly progress reports, always.' },
  { icon: 'M3 3h18v14H3zM8 21h8M12 17v4', title: 'Source code ownership', body: 'Your IP is yours. Full source code transfers to you on completion. No lock-in, no monthly licence fees.' },
  { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75', title: 'In-house, always', body: '35+ permanent, full-time specialists. Developers, designers, marketers, animators — all under one roof.' },
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
      <section style={{ padding: '72px 0', background: '#fff', borderBottom: '1px solid var(--border)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '60px 60px', opacity: .35, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
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
              <div className="d-flex" style={{ background: '#fff', border: '1.5px solid var(--border)', borderRadius: 'var(--r)', boxShadow: 'var(--sh)', overflow: 'hidden' }}>
                {[['565+', 'Projects'], ['8+', 'Years'], ['35+', 'Team'], ['98%', 'Satisfaction'], ['4', 'Offices']].map(([n, l]) => (
                  <div key={l} style={{ flex: 1, textAlign: 'center', padding: '16px 12px', borderRight: l !== 'Offices' ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.04em', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 500, marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--sh2)', border: '1.5px solid var(--border)', aspectRatio: '4/3', background: 'var(--surface)' }}>
                <img src={SITE.teamPhoto} alt="NNC team — Nakshatra Namaha Creations Bangalore" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(7,20,53,.88)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.12)', padding: '10px 14px', borderRadius: 'var(--r)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,.55)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', display: 'inline-block' }} />Our full in-house team
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>35+ specialists. Same team. Every project.</p>
                  <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,.5)', marginBottom: 0 }}>Bengaluru headquarters — not outsourced, never.</p>
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
                  &ldquo;I started NNC because I saw too many good businesses failing online — not because their products were bad, but because their digital presence did not reflect who they were.&rdquo;
                </p>
                <cite style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--sky)', fontStyle: 'normal' }}>— Founder &amp; Managing Director, Nakshatra Namaha Creations</cite>
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
            { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z', title: '35+ specialists in-house', body: 'Full-time developers, designers, marketers, animators — all permanently employed.' },
            { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10', title: '4 offices — walk in anytime', body: 'Bengaluru, Hyderabad, Mumbai and Mysuru. Physical offices mean real accountability.' },
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
      <section id="team" style={{ borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row align-items-end mb-5 g-4">
            <div className="col-lg-7 anim">
              <div className="section-tag"><span className="tag-dot" />Meet the team</div>
              <h2 className="sec-h">The people who build <span className="sky">your digital products.</span></h2>
              <p className="sec-sub">Designers, developers, marketers, animators — all working under one roof, all accountable to you.</p>
            </div>
            <div className="col-lg-5 anim">
              <div style={{ background: 'var(--sky-pale)', border: '1.5px solid #BBDEFB', borderRadius: 'var(--r)', padding: '22px 24px' }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>We&apos;re hiring</h4>
                <p style={{ fontSize: 13.5, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 12 }}>Join a team that builds real products for real businesses.</p>
                <Link href="/careers" style={{ fontSize: 13, fontWeight: 700, color: 'var(--sky)' }}>View open positions ↗</Link>
              </div>
            </div>
          </div>
          <div className="row g-3">
            {TEAM.map((m, i) => (
              <div key={m.name} className="col-6 col-md-4 col-lg anim" style={{ transitionDelay: `${i * .05}s` }}>
                <div style={{ borderRadius: 'var(--r)', overflow: 'hidden', border: '1.5px solid var(--border)', transition: 'all .25s', background: 'var(--surface)' }}>
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative' }}>
                    <img src={m.photo} alt={`${m.name} — ${m.role} at NNC`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '14px 12px' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)', marginBottom: 2 }}>{m.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--sky)', fontWeight: 600 }}>{m.role}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--ink4)', marginTop: 1 }}>{m.dept}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Group photo */}
          <div className="anim" style={{ position: 'relative', borderRadius: 'var(--r)', overflow: 'hidden', border: '1.5px solid var(--border)', marginTop: 24, aspectRatio: '16/6' }}>
            <img src={SITE.teamPhoto} alt="The complete NNC team" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top,rgba(7,20,53,.88),transparent)', padding: 28 }}>
              <p style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 4 }}>The complete NNC team — not outsourced, not freelancers. Your people.</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', marginBottom: 0 }}>Every person in this photograph is a full-time, permanent NNC team member.</p>
            </div>
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
                    <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 0 }}>{o.address}, {o.state} — {o.pin}</p>
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
              <div className="section-tag"><span className="tag-dot" />About NNC — FAQ</div>
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
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.45)', lineHeight: 1.65, marginBottom: 24 }}>Now you know who we are. The next step is a 30-minute call — no sales pressure, just an honest conversation.</p>
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
