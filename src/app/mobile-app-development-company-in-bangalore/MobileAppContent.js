'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  APP_PAGE, APP_STATS, APP_TECH, APP_TYPES,
  APP_PROCESS, APP_FEATURES, APP_PRICING,
  APP_PORTFOLIO, APP_FAQS, APP_TESTIMONIALS,
} from '@/data/mobileAppData'
import { SITE } from '@/data/siteData'

/* ── helpers ── */
const sc = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

/* ── SVG icons ── */
const Icon = ({ d, size = 14, color = 'currentColor', sw = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)
const Check = ({ color = 'var(--sky)', size = 9 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════
   1. BREADCRUMB
══════════════════════════════════════════════════════════════ */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ background: 'var(--navy2)', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <ol className="d-flex align-items-center gap-2 list-unstyled mb-0 flex-wrap" style={{ fontSize: 12.5 }}>
          {APP_PAGE.breadcrumb.map((b, i) => (
            <li key={i} className="d-flex align-items-center gap-2">
              {i > 0 && <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>}
              {b.href ? (
                <Link href={b.href} style={{ color: 'rgba(255,255,255,.45)', fontWeight: 500, transition: 'color .15s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--sky)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.45)'}>
                  {b.label}
                </Link>
              ) : (
                <span style={{ color: 'var(--sky)', fontWeight: 600 }}>{b.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

/* ═══════════════════════════════════════════════════════════════
   2. HERO
══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ background: 'linear-gradient(135deg,var(--navy3) 0%,#0a2055 55%,#0e2d6a 100%)', minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
      aria-label="Hero">
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '55vw', height: '55vw', background: 'radial-gradient(circle,rgba(33,150,243,.14),transparent 65%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'drift 10s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '35vw', height: '35vw', background: 'radial-gradient(circle,rgba(16,185,129,.07),transparent 65%)', borderRadius: '50%', filter: 'blur(80px)', animation: 'drift 14s ease-in-out infinite reverse', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '64px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">
            {/* Service tag */}
            <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2"
              style={{ background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.3)', borderRadius: 30, fontSize: 11.5, fontWeight: 700, color: 'var(--sky)', letterSpacing: '.06em', textTransform: 'uppercase', animation: 'fadeUp .6s .1s ease both' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--sky)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Mobile App Development · Bangalore
            </div>

            {/* H1 */}
            <h1 style={{ fontSize: 'clamp(34px,4.5vw,58px)', fontWeight: 800, letterSpacing: '-.055em', lineHeight: 1.06, color: '#fff', marginBottom: 18, animation: 'slideRight .7s .2s ease both' }}>
              {APP_PAGE.heroHeadline[0]}<br />
              <span style={{ color: 'var(--sky)' }}>{APP_PAGE.heroHeadline[1]}</span>
            </h1>

            <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.58)', lineHeight: 1.74, marginBottom: 32, maxWidth: 520, animation: 'fadeUp .7s .35s ease both' }}>
              {APP_PAGE.heroSub}
            </p>

            {/* CTAs */}
            <div className="d-flex flex-wrap gap-3 mb-4" style={{ animation: 'fadeUp .7s .5s ease both' }}>
              <button className="btn btn-sky fw-bold px-4 py-3 d-inline-flex align-items-center gap-2"
                onClick={() => sc('contact')}>
                Get a Free Quote
                <Icon d="M5 12h14M12 5l7 7-7 7" color="#fff" sw={2.5} />
              </button>
              <button className="btn btn-outline-light fw-semibold px-4 py-3"
                onClick={() => sc('portfolio')}>
                See App Portfolio
              </button>
              <a href={SITE.phoneHref}
                className="btn btn-outline-light fw-semibold px-4 py-3 d-inline-flex align-items-center gap-2">
                <Icon d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" color="currentColor" size={13} />
                {SITE.phone}
              </a>
            </div>

            {/* Trust chips */}
            <div className="d-flex flex-wrap gap-3" style={{ animation: 'fadeUp .7s .65s ease both' }}>
              {['React Native & Flutter', 'Play Store & App Store', 'Fixed Price', 'Source Code Yours', '30 Days Support'].map(t => (
                <div key={t} className="d-flex align-items-center gap-2" style={{ fontSize: 13, color: 'rgba(255,255,255,.55)' }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(33,150,243,.2)', border: '1px solid rgba(33,150,243,.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={9} />
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT illustration panel (matches other service pages) */}
          <div className="col-lg-6 d-none d-lg-block">
            <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', padding: '28px 24px 24px' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle,rgba(33,150,243,.18) 0%,transparent 70%)', pointerEvents: 'none' }} />

              {/* Mobile app illustration */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
                  <rect x="70" y="5" width="90" height="175" rx="18" fill="rgba(33,150,243,.12)" stroke="rgba(33,150,243,.4)" strokeWidth="2"/>
                  <rect x="82" y="22" width="66" height="130" rx="8" fill="rgba(33,150,243,.1)"/>
                  <rect x="90" y="30" width="50" height="10" rx="3" fill="rgba(33,150,243,.5)"/>
                  <rect x="90" y="45" width="35" height="7" rx="2" fill="rgba(255,255,255,.2)"/>
                  <rect x="90" y="57" width="50" height="32" rx="6" fill="rgba(33,150,243,.2)" stroke="rgba(33,150,243,.35)" strokeWidth="1"/>
                  <polyline points="96,83 106,72 116,76 126,65 136,68" stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  {[96,106,116,126,136].map((x,i)=><circle key={i} cx={x} cy={[83,72,76,65,68][i]} r="2.5" fill="#2196F3"/>)}
                  <rect x="90" y="96" width="23" height="20" rx="4" fill="rgba(16,185,129,.2)" stroke="rgba(16,185,129,.4)" strokeWidth="1"/>
                  <rect x="118" y="96" width="23" height="20" rx="4" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.35)" strokeWidth="1"/>
                  <rect x="90" y="122" width="50" height="14" rx="4" fill="rgba(33,150,243,.4)"/>
                  <circle cx="115" cy="168" r="5" fill="rgba(255,255,255,.2)"/>
                  <rect x="0" y="30" width="62" height="26" rx="8" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.3)" strokeWidth="1"/>
                  <text x="10" y="41" fontSize="8" fill="rgba(16,185,129,.9)" fontWeight="700">React Native</text>
                  <text x="10" y="52" fontSize="8" fill="rgba(255,255,255,.4)">iOS & Android</text>
                  <rect x="198" y="60" width="58" height="26" rx="8" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.3)" strokeWidth="1"/>
                  <text x="208" y="71" fontSize="8" fill="rgba(167,139,250,.9)" fontWeight="700">Flutter</text>
                  <text x="208" y="82" fontSize="8" fill="rgba(255,255,255,.4)">Play Store</text>
                  <rect x="198" y="100" width="58" height="26" rx="8" fill="rgba(33,150,243,.15)" stroke="rgba(33,150,243,.3)" strokeWidth="1"/>
                  <text x="208" y="111" fontSize="8" fill="rgba(147,197,253,.9)" fontWeight="700">Firebase</text>
                  <text x="208" y="122" fontSize="8" fill="rgba(255,255,255,.4)">Real-time DB</text>
                  <rect x="0" y="120" width="62" height="26" rx="8" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.3)" strokeWidth="1"/>
                  <text x="10" y="131" fontSize="8" fill="rgba(251,191,36,.9)" fontWeight="700">App Store</text>
                  <text x="10" y="142" fontSize="8" fill="rgba(255,255,255,.4)">iOS Approved</text>
                </svg>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                {[
                  { n: '150+', l: 'Apps Delivered' },
                  { n: '4.9★', l: 'Google Rating' },
                  { n: '8+',   l: 'Years Operating' },
                  { n: '35+',  l: 'In-house Team' },
                ].map(s => (
                  <div key={s.l} style={{ textAlign: 'center', padding: '13px 10px', background: 'rgba(255,255,255,.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,.06)' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: '#2196F3', letterSpacing: '-.06em', lineHeight: 1, marginBottom: 4 }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)' }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '12px 14px', background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.2)', borderRadius: 10 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 3 }}>Bengaluru Head Office</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', lineHeight: 1.5 }}>Darshan Plaza, 1st Floor, Channasandra, Bengaluru – 560 098</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   3. STATS BAR
══════════════════════════════════════════════════════════════ */
function Stats() {
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-0">
          {APP_STATS.map((s, i) => (
            <div key={i} className="col text-center py-4 anim"
              style={{ borderRight: i < APP_STATS.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background .2s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.background = '#F0F8FF'}
              onMouseLeave={e => e.currentTarget.style.background = ''}>
              <div style={{ fontSize: 'clamp(28px,3.2vw,44px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.07em', lineHeight: 1, marginBottom: 5 }}>
                {s.n.includes('★') ? <>{s.n.replace('★','')}<em style={{ color: 'var(--sky)', fontStyle: 'normal' }}>★</em></> :
                 s.n.includes('+') ? <>{s.n.replace('+','')}<em style={{ color: 'var(--sky)', fontStyle: 'normal' }}>+</em></> :
                 s.n.includes('%') ? <>{s.n.replace('%','')}<em style={{ color: 'var(--sky)', fontStyle: 'normal' }}>%</em></> : s.n}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink4)', fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   4. TECH STACK
══════════════════════════════════════════════════════════════ */
function TechSection() {
  return (
    <section style={{ background: 'var(--off)', padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />Technology We Use</div>
            <h2 className="sec-h">React Native. Flutter.<br /><span className="sky">Right tool for your app.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">Both React Native and Flutter deliver Android + iOS from one codebase saving you 30–40% in cost. We recommend the right one after understanding your specific requirements.</p>
          </div>
        </div>

        <div className="row g-4">
          {APP_TECH.map((t, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="anim h-100" style={{ transitionDelay: `${i * .07}s`, background: '#fff', border: '1.5px solid var(--border)', borderRadius: 'var(--r)', padding: '28px 24px', transition: 'all .25s', cursor: 'default' }}>
                {/* Icon */}
                <div style={{ width: 52, height: 52, borderRadius: 'var(--r)', background: 'rgba(33,150,243,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, transition: 'transform .25s' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sky)" strokeWidth="1.8" strokeLinecap="round"><path d={t.ico} /></svg>
                </div>
                <div style={{ display: 'inline-flex', fontSize: 10, fontWeight: 700, color: 'var(--sky)', background: 'var(--sky-pale)', border: '1px solid #BBDEFB', padding: '2px 10px', borderRadius: 20, marginBottom: 10 }}>{t.tag}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.025em', marginBottom: 8 }}>{t.name}</div>
                <p style={{ fontSize: 13.5, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 0 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5. APP TYPES
══════════════════════════════════════════════════════════════ */
function AppTypes() {
  return (
    <section style={{ background: '#fff', padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-5 anim">
          <div className="section-tag d-inline-flex"><span className="tag-dot" />What We Build</div>
          <h2 className="sec-h mt-1">10 Types of Apps<br /><span className="sky">Delivered Across Industries</span></h2>
          <p className="sec-sub mx-auto mt-2" style={{ maxWidth: 540 }}>From on-demand apps to enterprise platforms NNC has in-house expertise built from 150+ delivered mobile projects.</p>
        </div>

        <div className="row g-3">
          {APP_TYPES.map((t, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="anim h-100" style={{ transitionDelay: `${i * .05}s`, background: 'var(--off)', border: '1.5px solid var(--border)', borderRadius: 'var(--r)', padding: '22px 20px', transition: 'all .22s', cursor: 'default' }}>
                <div style={{ fontSize: 30, lineHeight: 1, marginBottom: 12 }}>{t.ico}</div>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.02em', marginBottom: 7 }}>{t.name}</div>
                <p style={{ fontSize: 12.5, color: 'var(--ink3)', lineHeight: 1.62, marginBottom: 0 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   6. FEATURES
══════════════════════════════════════════════════════════════ */
function Features() {
  return (
    <section style={{ background: 'var(--navy2)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag" style={{ background: 'rgba(33,150,243,.15)', borderColor: 'rgba(33,150,243,.3)' }}><span className="tag-dot" />What Every App Gets</div>
            <h2 className="sec-h" style={{ color: '#fff' }}>Eight Things Included<br /><span className="sky">In Every NNC App</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">These aren&apos;t add-ons they&apos;re the baseline NNC delivers on every mobile app project. No surprise extras, no hidden fees.</p>
          </div>
        </div>

        <div className="row g-3">
          {APP_FEATURES.map((f, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="anim h-100" style={{ transitionDelay: `${i * .06}s`, background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 'var(--r)', padding: '26px 22px', transition: 'all .25s', cursor: 'default' }}>
                <div style={{ fontSize: 30, lineHeight: 1, marginBottom: 14 }}>{f.ico}</div>
                <div style={{ fontSize: 15.5, fontWeight: 800, color: '#fff', letterSpacing: '-.02em', marginBottom: 8 }}>{f.title}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.42)', lineHeight: 1.65, marginBottom: 0 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   7. PROCESS
══════════════════════════════════════════════════════════════ */
function Process() {
  return (
    <section style={{ background: '#fff', padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />How We Build</div>
            <h2 className="sec-h">Six Steps.<br /><span className="sky">Your App. On Time.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">From discovery to Play Store every step is transparent. You get weekly APK/TestFlight builds so you can test on your own phone throughout development.</p>
          </div>
        </div>

        <div className="row g-0" style={{ border: '1.5px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', boxShadow: 'var(--sh)' }}>
          {APP_PROCESS.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-2 anim"
              style={{ transitionDelay: `${i * .06}s`, background: '#fff', padding: '28px 20px', borderRight: i < APP_PROCESS.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background .2s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.background = '#F0F8FF'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#E3F2FD', border: '1.5px solid #BBDEFB', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--sky)' }}>{p.n}</span>
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.02em', marginBottom: 7 }}>{p.title}</div>
              <p style={{ fontSize: 12.5, color: 'var(--ink3)', lineHeight: 1.58, marginBottom: 9 }}>{p.desc}</p>
              <span style={{ display: 'inline-flex', fontSize: 10, fontWeight: 700, color: 'var(--sky)', background: '#E3F2FD', padding: '3px 9px', borderRadius: 20 }}>{p.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   8. PORTFOLIO
══════════════════════════════════════════════════════════════ */
function Portfolio() {
  return (
    <section style={{ background: 'var(--off)', padding: '80px 0', borderBottom: '1px solid var(--border)' }} id="portfolio">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />App Portfolio</div>
            <h2 className="sec-h">Apps We&apos;ve Built.<br /><span className="sky">Results We Can Prove.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">Three live apps from NNC&apos;s 150+ mobile portfolio. All on the Play Store. All with measurable outcomes.</p>
          </div>
        </div>

        <div className="row g-4">
          {APP_PORTFOLIO.map((p, i) => (
            <div key={i} className="col-12 col-lg-4">
              <div className="anim h-100" style={{ transitionDelay: `${i * .1}s`, background: '#fff', border: '1.5px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', boxShadow: 'var(--sh)', transition: 'box-shadow .25s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--sh2)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--sh)'}>
                {/* App preview illustration */}
                <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: ['linear-gradient(135deg,#0B1F4B,#1565C0)','linear-gradient(135deg,#064e3b,#0d9488)','linear-gradient(135deg,#3b0764,#7c3aed)'][i % 3], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(255,255,255,.15)', border: '2px solid rgba(255,255,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                      </svg>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,.8)' }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 4 }}>{p.type}</div>
                  </div>
                  {/* Store badges */}
                  <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 6 }}>
                    {p.stores.map((s, si) => (
                      <span key={si} style={{ fontSize: 9.5, fontWeight: 700, color: '#fff', background: 'rgba(7,14,53,.75)', border: '1px solid rgba(255,255,255,.2)', padding: '3px 9px', borderRadius: 20 }}>{s}</span>
                    ))}
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: 24 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--sky)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>{p.type}</div>
                  <div style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.025em', marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink3)', marginBottom: 16 }}>{p.stack}</div>
                  {/* Metric highlight */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: '#F0F8FF', borderRadius: 'var(--r2)', border: '1px solid var(--sky-pale)' }}>
                    <div>
                      <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--sky)', letterSpacing: '-.06em', lineHeight: 1 }}>{p.metric}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 2 }}>{p.metricLabel}</div>
                    </div>
                    <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                    <div style={{ fontSize: 12.5, color: 'var(--ink2)', fontWeight: 600, textAlign: 'right', lineHeight: 1.4 }}>{p.result}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   9. PRICING
══════════════════════════════════════════════════════════════ */
function Pricing() {
  return (
    <section style={{ background: '#fff', padding: '80px 0', borderBottom: '1px solid var(--border)' }} id="pricing">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-5 anim">
          <div className="section-tag d-inline-flex"><span className="tag-dot" />Transparent Pricing</div>
          <h2 className="sec-h mt-1">Fixed Price. No Surprises.<br /><span className="sky">Three Plans for Every Stage.</span></h2>
          <p className="sec-sub mx-auto mt-2" style={{ maxWidth: 500 }}>All prices are fixed before work begins. 50% at kickoff, 50% before delivery. Source code 100% yours on delivery.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {APP_PRICING.map((plan, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="anim h-100 d-flex flex-column" style={{ transitionDelay: `${i * .1}s`, background: plan.highlight ? 'var(--navy)' : '#fff', border: plan.highlight ? '2px solid var(--sky)' : '1.5px solid var(--border)', borderRadius: 'var(--r)', padding: '32px 28px', boxShadow: plan.highlight ? '0 12px 40px rgba(33,150,243,.25)' : 'var(--sh)', position: 'relative', overflow: 'hidden' }}>
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--sky)' }} />
                )}
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, fontWeight: 700, color: '#fff', background: 'var(--sky)', padding: '3px 10px', borderRadius: 20, letterSpacing: '.06em', textTransform: 'uppercase' }}>Most Popular</div>
                )}

                {/* Tier + price */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: plan.highlight ? 'rgba(255,255,255,.5)' : 'var(--ink4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>{plan.tier}</div>
                  <div style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: plan.highlight ? '#fff' : 'var(--navy)', letterSpacing: '-.06em', lineHeight: 1, marginBottom: 4 }}>{plan.price}</div>
                  {plan.priceGst && (
                    <div style={{ fontSize: 12.5, color: plan.highlight ? 'rgba(255,255,255,.4)' : 'var(--ink4)', marginBottom: 8 }}>{plan.priceGst} incl. GST</div>
                  )}
                  <div style={{ display: 'inline-flex', fontSize: 11, fontWeight: 700, color: 'var(--sky)', background: plan.highlight ? 'rgba(33,150,243,.2)' : '#E3F2FD', border: '1px solid rgba(33,150,243,.25)', padding: '3px 10px', borderRadius: 20 }}>{plan.timeline}</div>
                </div>

                <div style={{ fontSize: 13, color: plan.highlight ? 'rgba(255,255,255,.45)' : 'var(--ink3)', marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${plan.highlight ? 'rgba(255,255,255,.08)' : 'var(--border)'}` }}>
                  Best for: {plan.best}
                </div>

                {/* Features */}
                <div className="d-flex flex-column gap-2 mb-4 flex-grow-1">
                  {plan.includes.map((f, fi) => (
                    <div key={fi} className="d-flex align-items-start gap-2" style={{ fontSize: 13.5, color: plan.highlight ? 'rgba(255,255,255,.7)' : 'var(--ink2)' }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: plan.highlight ? 'rgba(33,150,243,.25)' : 'rgba(33,150,243,.1)', border: '1px solid rgba(33,150,243,.3)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Check size={8} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`btn fw-bold w-100 py-3 mt-auto ${plan.highlight ? 'btn-sky' : 'btn-outline-dark'}`}
                  onClick={() => sc('contact')}>
                  {plan.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-4" style={{ fontSize: 13, color: 'var(--ink4)' }}>
          All prices exclude 18% GST · 50% at project kickoff · 50% before delivery · Source code 100% yours
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   10. TESTIMONIALS
══════════════════════════════════════════════════════════════ */
function Testimonials() {
  return (
    <section style={{ background: 'var(--navy2)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-5 anim">
          <div className="section-tag d-inline-flex" style={{ background: 'rgba(33,150,243,.15)', borderColor: 'rgba(33,150,243,.3)' }}><span className="tag-dot" />Client Reviews</div>
          <h2 className="sec-h mt-1" style={{ color: '#fff' }}>What Our App Clients<br /><span className="sky">Say on Google</span></h2>
        </div>

        {/* Google badge */}
        <div className="d-flex align-items-center mb-4 anim" style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', borderRadius: 'var(--r)', overflow: 'hidden', flexWrap: 'wrap' }}>
          <div className="d-flex align-items-center gap-3 p-4" style={{ borderRight: '1px solid rgba(255,255,255,.08)', flexShrink: 0 }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="19" height="19" viewBox="0 0 24 24"><path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064 5.96 5.96 0 014.117 1.592l2.896-2.896A9.995 9.995 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="#4285F4" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 30, fontWeight: 800, color: '#fff', letterSpacing: '-.05em', lineHeight: 1 }}>4.9</div>
              <div className="d-flex gap-1 my-1">{[...Array(5)].map((_, si) => <div key={si} style={{ width: 12, height: 12, background: 'var(--amber)', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />)}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)' }}>Google Business · Bengaluru</div>
            </div>
          </div>
          {[{ n: '87', l: 'Reviews' }, { n: '150+', l: 'Apps Delivered' }, { n: '8+', l: 'Years' }, { n: '4', l: 'Offices' }].map((s, si) => (
            <div key={si} className="flex-grow-1 text-center p-4" style={{ borderRight: si < 3 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: '-.05em' }}>{s.n}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="row g-1">
          {APP_TESTIMONIALS.map((t, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className={`anim h-100 ${t.featured ? 'tc-feat' : ''}`}
                style={{ transitionDelay: `${i * .09}s`, background: t.featured ? 'rgba(33,150,243,.1)' : 'rgba(255,255,255,.03)', border: `1px solid ${t.featured ? 'rgba(33,150,243,.2)' : 'rgba(255,255,255,.07)'}`, borderRadius: 'var(--r)', padding: 28 }}>
                <div className="d-flex gap-1 mb-3">{[...Array(5)].map((_, si) => <div key={si} style={{ width: 12, height: 12, background: 'var(--amber)', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />)}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.62)', lineHeight: 1.73, fontStyle: 'italic', marginBottom: 18 }}>{t.quote}</p>
                <hr style={{ background: 'rgba(255,255,255,.08)', margin: '14px 0' }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{t.author}</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.3)', marginTop: 2 }}>{t.role}</div>
                <div className="d-inline-flex align-items-center gap-2 mt-3 px-3 py-2" style={{ background: 'rgba(16,185,129,.1)', border: '1px solid rgba(16,185,129,.2)', borderRadius: 20 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--mint)' }}>{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   11. FAQ + CONTACT
══════════════════════════════════════════════════════════════ */
function FaqContact() {
  const router = useRouter()
  const [open, setOpen] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', app: '', budget: '', message: '' })
  const [sending, setSending] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.name.trim().length < 2) { alert('Please enter your full name (at least 2 characters).'); return }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) { alert('Please enter a valid phone number.'); return }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { alert('Please enter a valid email address.'); return }
    setSending(true)
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, service: `Mobile App ${form.app || ''}`, message: form.budget ? `Budget: ${form.budget}` : '', landingPage: '/mobile-app-development-company-in-bangalore' }),
      })
      if (res.ok) { router.push('/thankyou') } else { alert('Something went wrong. Please try again.') }
    } catch { alert('Network error. Please try again.') }
    finally { setSending(false) }
  }

  return (
    <section style={{ background: '#fff', padding: '80px 0' }} id="contact">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5">

          {/* FAQ */}
          <div className="col-lg-6 anim-l">
            <div className="section-tag"><span className="tag-dot" />FAQ</div>
            <h2 className="faq-h mb-2">App Development<br /><span className="sky">Questions Answered</span></h2>
            <p className="sec-sub mb-4" style={{ fontSize: 15.5 }}>The most common questions we get from clients building their first or next mobile app.</p>

            <div style={{ borderTop: '1px solid var(--border)' }}>
              {APP_FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                    <span className="faq-q">{f.q}</span>
                    <span className={`faq-ic ${open === i ? 'open' : ''}`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {open === i && <p className="faq-ans pb-3" style={{ margin: 0 }}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-6 anim-r">
            <div className="contact-card">
              <div className="cc-eyebrow"><span className="cc-eyebrow-tx">Get a Free App Quote</span></div>
              <div className="cc-h mb-2">Tell us about<br />your app idea.</div>
              <p className="cc-sub mb-4">Share your concept. We&apos;ll come back with a clear scope, recommended tech stack, timeline and fixed price within 24 hours.</p>

              <div className="d-flex flex-column gap-2 mb-4">
                <a href={SITE.phoneHref} className="cc-link">
                  <Icon d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={14} />
                  <div>{SITE.phone}<small>Mon–Sat, 9am–7pm IST</small></div>
                </a>
                <a href={`mailto:${SITE.email}`} className="cc-link">
                  <Icon d="M2 4h20v16H2zM22 7l-10 6.5L2 7" size={14} />
                  {SITE.email}
                </a>
              </div>

              <form onSubmit={submit} noValidate>
                  <div className="row g-2 mb-2">
                    <div className="col-6"><input className="cc-inp" type="text" placeholder="Your name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value.replace(/[^A-Za-z\s.'-]/g, '') })} maxLength={100} required /></div>
                    <div className="col-6"><input className="cc-inp" type="tel" placeholder="Phone *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9+\-\s()]/g, '') })} maxLength={15} required /></div>
                  </div>
                  <input className="cc-inp d-block mb-2" type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} maxLength={150} />
                  <input className="cc-inp d-block mb-2" placeholder="Type of app (on-demand, e-commerce, etc.)" value={form.app} onChange={e => setForm({ ...form, app: e.target.value })} />
                  <select className="cc-inp d-block mb-2" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} style={{ background: 'rgba(255,255,255,.07)', color: form.budget ? '#fff' : 'rgba(255,255,255,.2)' }}>
                    <option value="" disabled>Estimated budget</option>
                    <option value="75k-150k">₹75,000 – ₹1,50,000 (MVP)</option>
                    <option value="150k-300k">₹1,50,000 – ₹3,00,000 (Business App)</option>
                    <option value="300k+">₹3,00,000+ (Enterprise)</option>
                    <option value="discuss">Not sure let&apos;s discuss</option>
                  </select>
                  <textarea className="cc-ta d-block mb-2" rows="3" placeholder="Brief description of your app idea..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  <button type="submit" className="cc-submit mb-3" disabled={sending}>
                    {sending ? 'Sending…' : <>Get Free App Quote <Icon d="M5 12h14M12 5l7 7-7 7" color="#fff" size={13} sw={2.5} /></>}
                  </button>
                  <div className="d-flex justify-content-center gap-4 flex-wrap">
                    <span className="cc-ti">✓ No spam</span>
                    <span className="cc-ti">✓ 24hr response</span>
                    <span className="cc-ti">✓ Fixed price</span>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   12. CTA BAND
══════════════════════════════════════════════════════════════ */
function CtaBand() {
  return (
    <section style={{ background: 'linear-gradient(135deg,var(--navy2) 0%,#0d2a5e 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px)', backgroundSize: '26px 26px' }} />
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-4">
          <div className="col-lg-8 anim">
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-.055em', color: '#fff', marginBottom: 12 }}>
              Ready to Build Your App?<br />
              <span style={{ color: 'var(--sky)' }}>Let&apos;s Talk Scope, Stack & Price.</span>
            </h2>
            <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.42)', lineHeight: 1.7, marginBottom: 18 }}>
              Share your idea. We&apos;ll recommend the right tech stack, give you a realistic timeline and a fixed price in writing, within 24 hours.
            </p>
            <div className="d-flex flex-wrap gap-4">
              {['Free consultation', 'React Native & Flutter', 'Play Store & App Store', 'Fixed price', 'Source code yours'].map((c, i) => (
                <span key={i} className="d-inline-flex align-items-center gap-2" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.42)' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--sky)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-lg-end gap-3 anim">
            <button className="btn btn-sky fw-bold px-4 py-3 d-inline-flex align-items-center gap-2 w-100 w-lg-auto justify-content-center"
              onClick={() => sc('contact')}>
              Get Free App Quote
              <Icon d="M5 12h14M12 5l7 7-7 7" color="#fff" size={13} sw={2.5} />
            </button>
            <a href={SITE.phoneHref} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.35)', textAlign: 'center' }}>
              Or call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   ROOT EXPORT
══════════════════════════════════════════════════════════════ */
export default function MobileAppContent() {
  return (
    <>
      <Breadcrumb />
      <Hero />
      <Stats />
      <TechSection />
      <AppTypes />
      <Features />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FaqContact />
      <CtaBand />
    </>
  )
}
