'use client'
import { useState } from 'react'
import { SITE } from '@/data/siteData'

const sc = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

function Svg({ d, size = 16, color = 'currentColor', sw = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  )
}

export default function CityServiceContent({ slug, svc, city, hood, titleOverride }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [open, setOpen] = useState(null)

  const location = hood ? `${hood.name}, ${city?.name}` : city?.name || 'India'
  const headline = titleOverride
    ? titleOverride.replace(' | NNC Digital', '').replace(' | NNC', '')
    : `${svc?.name} in ${location}`

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) { alert('Please enter your name and phone.'); return }
    setTimeout(() => setSent(true), 1000)
  }

  const faqs = [
    { q: `How much does ${svc?.name?.toLowerCase()} cost in ${location}?`, a: `NNC Digital offers transparent, fixed pricing for ${svc?.name?.toLowerCase()} projects in ${location}. Every project is scoped individually with a fixed price agreed before work begins. No hourly billing, no surprise invoices. Contact us for a free quote within 24 hours.` },
    { q: `How long does a ${svc?.name?.toLowerCase()} project take?`, a: `Timelines depend on scope. A standard project typically takes 3–8 weeks. All timelines are agreed upfront and tracked with weekly updates. You get access to a live staging environment throughout development.` },
    { q: 'Does NNC outsource any work?', a: `Never. Every person on your project is a permanent full-time NNC employee. No freelancers, no offshore contractors. You can walk into our ${city?.name || 'Bengaluru'} office and meet the team building your product.` },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive every source file, database schema, admin credential and hosting login. 100% yours with no ongoing obligation to NNC.' },
    { q: `Why choose NNC for ${svc?.name?.toLowerCase()} in ${location}?`, a: `NNC has been operating since 2015 with 565+ projects delivered and a 4.9★ Google rating from 87 verified reviews. We have a physical office presence, 35+ permanent in-house specialists, and a contractual PageSpeed 90+ guarantee on all website projects.` },
  ]

  return (
    <>
      {/* BREADCRUMB */}
      <nav style={{ background: '#071435', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 6, fontSize: 12.5, flexWrap: 'wrap' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Home</a>
          <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
          <a href="/services" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Services</a>
          <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
          <span style={{ color: '#2196F3', fontWeight: 600 }}>{headline}</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              {city && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.25)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  {location} · Since 2015
                </div>
              )}
              <h1 style={{ fontSize: 'clamp(28px,4.5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.05em', lineHeight: 1.06, marginBottom: 18 }}>
                {svc?.name} in<br />
                <span style={{ color: '#2196F3' }}>{location}</span>
              </h1>
              <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.58)', lineHeight: 1.74, marginBottom: 32, maxWidth: 520 }}>
                {svc?.desc} Serving businesses in {location} since 2015. <strong style={{ color: 'rgba(255,255,255,.85)' }}>35+ in-house specialists. Zero outsourcing. Fixed price.</strong>
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <button onClick={sc} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 14.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s' }}>
                  Get Free Quote <Svg d="M5 12h14M12 5l7 7-7 7" size={13} color="#fff" sw={2.5} />
                </button>
                <a href={SITE.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,.7)', border: '1.5px solid rgba(255,255,255,.22)', padding: '13px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                  <Svg d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={13} color="currentColor" sw={2} />
                  {SITE.phone}
                </a>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                {['PageSpeed 90+ Guaranteed', 'Source Code Yours', 'Fixed Price', 'Zero Outsourcing'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(33,150,243,.2)', border: '1px solid rgba(33,150,243,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Svg d="M20 6 9 17 4 12" size={9} color="#2196F3" sw={3} />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            {/* Stats panel */}
            <div className="col-lg-5 d-none d-lg-block">
              <div style={{ background: 'rgba(255,255,255,.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: 32 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.4)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '.1em' }}>NNC at a Glance</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {[
                    { n: svc?.stat1 || '200+', l: svc?.stat1Label || 'Projects' },
                    { n: '4.9★', l: 'Google Rating' },
                    { n: '8+', l: 'Years Operating' },
                    { n: '35+', l: 'In-house Team' },
                  ].map(s => (
                    <div key={s.l} style={{ textAlign: 'center', padding: '16px 12px', background: 'rgba(255,255,255,.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,.06)' }}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: '#2196F3', letterSpacing: '-.06em', lineHeight: 1, marginBottom: 5 }}>{s.n}</div>
                      <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.4)' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                {city && (
                  <div style={{ marginTop: 20, padding: '14px 16px', background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.2)', borderRadius: 10 }}>
                    <div style={{ fontSize: 10.5, fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 4 }}>Our {city.name} Office</div>
                    <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>{city.office}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section style={{ background: '#fff', padding: '72px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row g-5 mb-5 anim">
            <div className="col-lg-5">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.09)', border: '1px solid rgba(33,150,243,.18)', color: '#2196F3', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 30, letterSpacing: '.09em', textTransform: 'uppercase', marginBottom: 12 }}>
                What&apos;s Included
              </div>
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', lineHeight: 1.1 }}>
                {svc?.name} Services<br /><span style={{ color: '#2196F3' }}>in {location}</span>
              </h2>
            </div>
            <div className="col-lg-7 d-flex align-items-end">
              <p style={{ fontSize: 16, color: '#6B7A99', lineHeight: 1.74 }}>
                Every {svc?.name?.toLowerCase()} project from NNC&apos;s {location} team includes these capabilities — all delivered by permanent in-house specialists with no outsourcing.
              </p>
            </div>
          </div>
          <div className="row g-3">
            {svc?.features?.map((f, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="anim" style={{ transitionDelay: `${i * .06}s`, background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '22px 20px', transition: 'all .22s', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: svc.ib, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Svg d={svc.ico} size={16} color={svc.ic} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0B1F4B', marginBottom: 5 }}>{f}</div>
                    <div style={{ fontSize: 12.5, color: '#94A3B8', lineHeight: 1.5 }}>
                      In-house delivery · Fixed scope · On time
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NNC IN THIS CITY */}
      <section style={{ background: '#071435', padding: '72px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row g-5 mb-5 anim">
            <div className="col-lg-6">
              <h2 style={{ fontSize: 'clamp(24px,3.2vw,36px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.1 }}>
                Why Choose NNC for<br /><span style={{ color: 'rgb(255 255 255 / 42%)' }}>{svc?.name} in {location}?</span>
              </h2>
            </div>
            <div className="col-lg-6 d-flex align-items-end">
              <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.42)', lineHeight: 1.7 }}>
                {city ? `NNC has been delivering ${svc?.name?.toLowerCase()} projects for businesses in ${location} since 2015. ` : ''}
                These are the reasons clients in {location} choose NNC over competitors.
              </p>
            </div>
          </div>
          <div className="row g-0">
            {[
              { n: '01', t: '35+ permanent in-house employees', b: 'Every team member is a full-time NNC employee. Walk into our office and meet them. No freelancers, no offshore.' },
              { n: '02', t: 'Fixed price — agreed before work starts', b: 'In 565+ projects, not one client has been invoiced more than quoted. Price agreed before a wireframe is drawn.' },
              { n: '03', t: 'Source code 100% yours', b: 'Full source code, every credential and hosting login delivered to you. Zero lock-in, zero ongoing obligation.' },
              { n: '04', t: 'Verifiable 4.9★ Google rating', b: '87 verified Google reviews published publicly. Not a claim — a verifiable public record anyone can check.' },
              { n: '05', t: 'PageSpeed 90+ contractual guarantee', b: `All NNC website projects include a contractual PageSpeed 90+ guarantee on both mobile and desktop.` },
              { n: '06', t: 'One named PM — start to finish', b: 'Every project has a named project manager from discovery to handover. Weekly updates, direct access.' },
            ].map((w, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4 anim" style={{ transitionDelay: `${i * .07}s` }}>
                <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)', padding: '28px', transition: 'all .28s' }}>
                  <div style={{ fontSize: 44, fontWeight: 800, color: 'rgba(255,255,255,.06)', letterSpacing: '-.07em', marginBottom: 4 }}>{w.n}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 9, lineHeight: 1.3 }}>{w.t}</div>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.4)', lineHeight: 1.65, marginBottom: 0 }}>{w.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ background: '#F8FAFC', padding: '64px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-4 anim">
            <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 10 }}>
              Technology We Use
            </h2>
            <p style={{ fontSize: 15, color: '#6B7A99', maxWidth: 480, margin: '0 auto' }}>
              Industry-standard tools chosen for performance, scalability and long-term maintainability.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {svc?.tech?.map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 18px', background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 30, fontSize: 13.5, fontWeight: 700, color: '#0B1F4B', transition: 'all .18s' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2196F3', display: 'inline-block' }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CONTACT */}
      <section style={{ background: '#fff', padding: '80px 0' }} id="contact">
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row g-5">
            {/* FAQ */}
            <div className="col-lg-6 anim-l">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.09)', border: '1px solid rgba(33,150,243,.18)', color: '#2196F3', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 30, letterSpacing: '.09em', textTransform: 'uppercase', marginBottom: 12 }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 14 }}>
                Common Questions About<br /><span style={{ color: '#2196F3' }}>{svc?.name} in {location}</span>
              </h2>
              <div style={{ borderTop: '1px solid #E2E8F0' }}>
                {faqs.map((f, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <button onClick={() => setOpen(open === i ? null : i)}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '17px 0', background: 'none', border: 'none', textAlign: 'left', gap: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                      <span style={{ fontSize: 14.5, fontWeight: 700, color: '#2C3E6B', letterSpacing: '-.01em', lineHeight: 1.3 }}>{f.q}</span>
                      <div style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid #C5D0E4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: open === i ? '#2196F3' : '#fff', borderColor: open === i ? '#2196F3' : '#C5D0E4', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'all .22s' }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={open === i ? '#fff' : '#9BA8C0'} strokeWidth="2" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>
                    {open === i && <p style={{ fontSize: 14, color: '#6B7A99', lineHeight: 1.75, paddingBottom: 16, margin: 0 }}>{f.a}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="col-lg-6 anim-r">
              <div style={{ background: '#071435', borderRadius: 16, padding: 40 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#2196F3', letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 9 }}>
                  <div style={{ width: 20, height: 1.5, background: '#2196F3' }} />
                  Get a Free Quote
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: 8 }}>
                  {svc?.name} in {location}
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.38)', lineHeight: 1.68, marginBottom: 24 }}>
                  Tell us your requirements. We&apos;ll respond within 24 hours with scope, timeline and fixed price.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
                  <a href={SITE.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '11px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,.55)', textDecoration: 'none', transition: 'all .18s' }}>
                    <Svg d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={14} color="currentColor" sw={2} />
                    {SITE.phone}
                  </a>
                  <a href={`mailto:${SITE.email}`} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '11px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>
                    <Svg d="M2 4h20v16H2zM22 7l-10 6.5L2 7" size={14} color="currentColor" sw={2} />
                    {SITE.email}
                  </a>
                </div>
                {!sent ? (
                  <form onSubmit={submit} noValidate>
                    <div className="row g-2 mb-2">
                      <div className="col-6"><input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none', marginBottom: 0 }} placeholder="Your name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
                      <div className="col-6"><input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none' }} type="tel" placeholder="Phone *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
                    </div>
                    <input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none', marginBottom: 9, display: 'block' }} type="email" placeholder="Email address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    <textarea style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none', marginBottom: 9, resize: 'vertical', minHeight: 80 }} rows="3" placeholder={`Tell us about your ${svc?.name?.toLowerCase()} requirements...`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    <button type="submit" style={{ width: '100%', background: '#2196F3', color: '#fff', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, padding: 14, borderRadius: 8, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, marginBottom: 12 }}>
                      Send Enquiry <Svg d="M5 12h14M12 5l7 7-7 7" size={13} color="#fff" sw={2.5} />
                    </button>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                      {['✓ No spam', '✓ 24hr response', '✓ Fixed price'].map(t => <span key={t} style={{ fontSize: 11, color: 'rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', gap: 4 }}>{t}</span>)}
                    </div>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '24px 0' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(16,185,129,.14)', border: '1.5px solid rgba(16,185,129,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                      <Svg d="M20 6 9 17 4 12" size={22} color="#10B981" sw={2.5} />
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 7 }}>Enquiry Received!</div>
                    <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 14 }}>We&apos;ll call you within 24 hours. Urgent? Call {SITE.phone}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
