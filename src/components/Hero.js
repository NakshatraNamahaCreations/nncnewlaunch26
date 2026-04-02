'use client'
import Link from 'next/link'
import { SITE } from '@/data/siteData'

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-glow1" aria-hidden="true" />
      <div className="hero-glow2" aria-hidden="true" />

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(28px,6vw,60px) clamp(16px,4vw,24px)', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">


            {/* Trust badge */}
           
            <h1 className="hero-h1 mb-3">
              Website Development Company<br />
              <span className="sky">Apps, CRM &amp; Digital Marketing</span>
            </h1>

            <p className="hero-sub mb-4">
              <Link href="/website-development-company-in-bangalore" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,.3)' }}>Custom websites</Link>,{' '}
              <Link href="/mobile-app-development-company-in-bangalore" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,.3)' }}>mobile apps</Link>,{' '}
              <Link href="/custom-crm-development" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,.3)' }}>CRM systems</Link> &amp;{' '}
              <Link href="/digital-marketing-agency-in-bangalore" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,.3)' }}>digital marketing</Link> by a{' '}
              <strong>35+ member in-house team</strong> across Bengaluru, Mumbai, Mysuru &amp; Hyderabad.{' '}
              <strong>565+ projects delivered. Zero outsourced.</strong>
            </p>

            <div className="hero-btns d-flex flex-wrap gap-3 mb-4">
              <button className="btn btn-sky fw-bold px-4 py-3 d-inline-flex align-items-center gap-2"
                onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}>
                Get Free Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <Link href="/our-works" className="btn btn-outline-light fw-semibold px-4 py-3 d-inline-flex align-items-center gap-2" style={{ borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
                View Our Work
              </Link>
            </div>

            <div className="d-flex flex-wrap gap-3">
              {['PageSpeed 90+ Guaranteed', '4.9★ Google Rating', 'Fixed Price · No Surprises', 'Zero Outsourcing Ever'].map(t => (
                <div key={t} className="hero-check">
                  <div className="hc-ico">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--sky)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT Sketch Illustration */}
          <div className="col-lg-6 d-none d-lg-block">
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 500 }}>
              <svg width="100%" height="500" viewBox="0 0 560 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <filter id="sketch">
                    <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                  </filter>
                </defs>

                {/* ── Large lightbulb (main element) ── */}
                <g opacity="0.85">
                  {/* Bulb glass */}
                  <path d="M280 60 C220 60 170 115 170 180 C170 230 200 260 210 290 L220 320 L340 320 L350 290 C360 260 390 230 390 180 C390 115 340 60 280 60Z"
                    stroke="rgba(255,255,255,.55)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  {/* Inner filament */}
                  <path d="M250 180 C250 150 265 130 280 130 C295 130 310 150 310 180"
                    stroke="rgba(255,255,255,.3)" strokeWidth="1.2" fill="none" />
                  <path d="M258 185 Q268 160 280 165 Q292 160 302 185"
                    stroke="rgba(255,255,255,.25)" strokeWidth="1" fill="none" />
                  <line x1="280" y1="130" x2="280" y2="105" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
                  {/* Bulb base/screw */}
                  <rect x="228" y="320" width="104" height="12" rx="4" stroke="rgba(255,255,255,.45)" strokeWidth="1.5" fill="none" />
                  <rect x="232" y="336" width="96" height="10" rx="3" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" fill="none" />
                  <rect x="236" y="350" width="88" height="10" rx="3" stroke="rgba(255,255,255,.28)" strokeWidth="1.2" fill="none" />
                  <rect x="248" y="364" width="64" height="8" rx="4" stroke="rgba(255,255,255,.2)" strokeWidth="1" fill="none" />
                  {/* Light rays */}
                  <line x1="280" y1="35" x2="280" y2="10" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="195" y1="75" x2="175" y2="55" stroke="rgba(255,255,255,.2)" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="365" y1="75" x2="385" y2="55" stroke="rgba(255,255,255,.2)" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="145" y1="145" x2="118" y2="135" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeLinecap="round" />
                  <line x1="415" y1="145" x2="442" y2="135" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeLinecap="round" />
                  <line x1="140" y1="200" x2="110" y2="200" stroke="rgba(255,255,255,.12)" strokeWidth="1" strokeLinecap="round" />
                  <line x1="420" y1="200" x2="450" y2="200" stroke="rgba(255,255,255,.12)" strokeWidth="1" strokeLinecap="round" />
                  {/* Short rays */}
                  <line x1="230" y1="50" x2="220" y2="30" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeLinecap="round" />
                  <line x1="330" y1="50" x2="340" y2="30" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeLinecap="round" />
                </g>

                {/* ── Inside bulb: code brackets ── */}
                <g opacity="0.55">
                  <text x="240" y="220" fill="rgba(255,255,255,.5)" fontSize="28" fontWeight="300" fontFamily="monospace">&lt;</text>
                  <text x="295" y="220" fill="rgba(255,255,255,.5)" fontSize="28" fontWeight="300" fontFamily="monospace">/&gt;</text>
                </g>

                {/* ── Gear (top left) ── */}
                <g transform="translate(80, 60)" opacity="0.65">
                  <circle cx="30" cy="30" r="18" stroke="rgba(255,255,255,.4)" strokeWidth="1.3" fill="none" />
                  <circle cx="30" cy="30" r="8" stroke="rgba(255,255,255,.35)" strokeWidth="1" fill="none" />
                  {/* Teeth */}
                  <line x1="30" y1="8" x2="30" y2="0" stroke="rgba(255,255,255,.3)" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="30" y1="52" x2="30" y2="60" stroke="rgba(255,255,255,.3)" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="8" y1="30" x2="0" y2="30" stroke="rgba(255,255,255,.3)" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="52" y1="30" x2="60" y2="30" stroke="rgba(255,255,255,.3)" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="14" y1="14" x2="8" y2="8" stroke="rgba(255,255,255,.25)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="46" y1="14" x2="52" y2="8" stroke="rgba(255,255,255,.25)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="46" x2="8" y2="52" stroke="rgba(255,255,255,.25)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="46" y1="46" x2="52" y2="52" stroke="rgba(255,255,255,.25)" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* ── Mobile phone (right side) ── */}
                <g transform="translate(440, 120)" opacity="0.6">
                  <rect width="50" height="85" rx="8" stroke="rgba(255,255,255,.45)" strokeWidth="1.3" fill="none" />
                  <rect x="5" y="14" width="40" height="55" rx="3" stroke="rgba(255,255,255,.2)" strokeWidth="0.8" fill="none" />
                  <rect x="16" y="5" width="18" height="4" rx="2" stroke="rgba(255,255,255,.2)" strokeWidth="0.8" fill="none" />
                  <circle cx="25" cy="77" r="3" stroke="rgba(255,255,255,.25)" strokeWidth="0.8" fill="none" />
                  {/* App lines */}
                  <line x1="10" y1="24" x2="35" y2="24" stroke="rgba(255,255,255,.15)" strokeWidth="0.8" />
                  <line x1="10" y1="32" x2="28" y2="32" stroke="rgba(255,255,255,.12)" strokeWidth="0.8" />
                  <line x1="10" y1="40" x2="32" y2="40" stroke="rgba(255,255,255,.12)" strokeWidth="0.8" />
                  <rect x="10" y="48" width="30" height="10" rx="2" stroke="rgba(255,255,255,.15)" strokeWidth="0.8" fill="none" />
                </g>

                {/* ── Chart/graph (bottom left) ── */}
                <g transform="translate(50, 300)" opacity="0.55">
                  <rect width="100" height="70" rx="6" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" fill="none" />
                  {/* Bars */}
                  <line x1="18" y1="55" x2="18" y2="38" stroke="rgba(255,255,255,.3)" strokeWidth="5" strokeLinecap="round" />
                  <line x1="34" y1="55" x2="34" y2="28" stroke="rgba(255,255,255,.35)" strokeWidth="5" strokeLinecap="round" />
                  <line x1="50" y1="55" x2="50" y2="18" stroke="rgba(255,255,255,.4)" strokeWidth="5" strokeLinecap="round" />
                  <line x1="66" y1="55" x2="66" y2="24" stroke="rgba(255,255,255,.35)" strokeWidth="5" strokeLinecap="round" />
                  <line x1="82" y1="55" x2="82" y2="12" stroke="rgba(255,255,255,.45)" strokeWidth="5" strokeLinecap="round" />
                  {/* Trend arrow */}
                  <polyline points="14,40 34,30 50,20 66,26 86,8" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 4" />
                </g>

                {/* ── Cloud (top right area) ── */}
                <g transform="translate(380, 40)" opacity="0.5">
                  <path d="M30 45 Q10 45 10 32 Q10 20 22 18 Q24 8 36 8 Q48 5 52 16 Q62 16 62 28 Q62 45 45 45Z"
                    stroke="rgba(255,255,255,.4)" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                  {/* Download arrow */}
                  <line x1="36" y1="22" x2="36" y2="35" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" strokeLinecap="round" />
                  <polyline points="30,30 36,36 42,30" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </g>

                {/* ── Rocket (bottom right) ── */}
                <g transform="translate(430, 310)" opacity="0.55">
                  {/* Body */}
                  <path d="M30 10 Q30 0 30 5 C22 18 20 35 20 50 L40 50 C40 35 38 18 30 5Z"
                    stroke="rgba(255,255,255,.45)" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                  {/* Fins */}
                  <path d="M20 40 L10 55 L20 50" stroke="rgba(255,255,255,.3)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M40 40 L50 55 L40 50" stroke="rgba(255,255,255,.3)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Window */}
                  <circle cx="30" cy="25" r="5" stroke="rgba(255,255,255,.3)" strokeWidth="1" fill="none" />
                  {/* Flame */}
                  <path d="M24 52 Q27 65 30 60 Q33 65 36 52" stroke="rgba(255,255,255,.2)" strokeWidth="1" fill="none" strokeLinecap="round" />
                </g>

                {/* ── Cursor arrow (left) ── */}
                <g transform="translate(50, 180)" opacity="0.5">
                  <path d="M5 5 L5 40 L14 30 L25 42 L30 38 L19 26 L32 26Z"
                    stroke="rgba(255,255,255,.4)" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
                </g>

                {/* ── WiFi/signal (right) ── */}
                <g transform="translate(480, 240)" opacity="0.45">
                  <path d="M15 25 Q25 15 35 25" stroke="rgba(255,255,255,.35)" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                  <path d="M10 20 Q25 5 40 20" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                  <path d="M5 15 Q25 -5 45 15" stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none" strokeLinecap="round" />
                  <circle cx="25" cy="30" r="2.5" fill="rgba(255,255,255,.35)" />
                </g>

                {/* ── Scattered dots & crosses ── */}
                <circle cx="160" cy="420" r="2" fill="rgba(255,255,255,.2)" />
                <circle cx="400" cy="420" r="2.5" fill="rgba(255,255,255,.15)" />
                <circle cx="500" cy="170" r="1.5" fill="rgba(255,255,255,.2)" />
                <circle cx="520" cy="340" r="2" fill="rgba(255,255,255,.15)" />
                <circle cx="70" cy="160" r="1.5" fill="rgba(255,255,255,.18)" />
                {/* Small crosses */}
                <g transform="translate(470, 90)" opacity="0.3">
                  <line x1="0" y1="5" x2="10" y2="5" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="5" y1="0" x2="5" y2="10" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" strokeLinecap="round" />
                </g>
                <g transform="translate(130, 400)" opacity="0.25">
                  <line x1="0" y1="5" x2="10" y2="5" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="5" y1="0" x2="5" y2="10" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" strokeLinecap="round" />
                </g>
                <g transform="translate(350, 450)" opacity="0.2">
                  <line x1="0" y1="4" x2="8" y2="4" stroke="rgba(255,255,255,.4)" strokeWidth="1" strokeLinecap="round" />
                  <line x1="4" y1="0" x2="4" y2="8" stroke="rgba(255,255,255,.4)" strokeWidth="1" strokeLinecap="round" />
                </g>

                {/* ── Dashed connection lines ── */}
                <line x1="140" y1="90" x2="170" y2="120" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="390" y1="180" x2="440" y2="160" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="150" y1="320" x2="170" y2="290" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="390" y1="300" x2="430" y2="320" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeDasharray="4 6" />

                {/* ── Small diamond shapes ── */}
                <g transform="translate(200, 440)" opacity="0.2">
                  <path d="M6 0 L12 6 L6 12 L0 6Z" stroke="rgba(255,255,255,.4)" strokeWidth="1" fill="none" />
                </g>
                <g transform="translate(500, 300)" opacity="0.18">
                  <path d="M5 0 L10 5 L5 10 L0 5Z" stroke="rgba(255,255,255,.35)" strokeWidth="1" fill="none" />
                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
