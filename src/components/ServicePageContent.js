'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SITE } from '@/data/siteData'

function Svg({ d, size = 16, color = 'currentColor', sw = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  )
}

export default function ServicePageContent({ data }) {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const openQuote = () => window.dispatchEvent(new CustomEvent('open-quote'))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.name.trim().length < 2) { alert('Please enter your full name (at least 2 characters).'); return }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) { alert('Please enter a valid phone number.'); return }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { alert('Please enter a valid email address.'); return }
    setSending(true)
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: data.serviceName, landingPage: typeof window !== 'undefined' ? window.location.pathname : '' }),
      })
      router.push('/thankyou')
    } catch {
      router.push('/thankyou')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* BREADCRUMB */}
      <nav style={{ background: '#071435', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 6, fontSize: 12.5, flexWrap: 'wrap' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Home</a>
          <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
          <a href="/services" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Services</a>
          <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
          <span style={{ color: '#2196F3', fontWeight: 600 }}>{data.badge}</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.25)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                {data.badge}
              </div>
              <h1 style={{ fontSize: 'clamp(28px,4.5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.05em', lineHeight: 1.06, marginBottom: 18 }}>
                {data.h1}<br />
                <span style={{ color: '#2196F3' }}>{data.h1Accent}</span>
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', lineHeight: 1.72, marginBottom: 14, maxWidth: 540 }}>
                {data.tagline}
              </p>
              <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.42)', lineHeight: 1.74, marginBottom: 32, maxWidth: 520 }}>
                {data.desc}
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <button onClick={openQuote} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 14.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
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
                    { n: data.stat1, l: data.stat1Label },
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
                <div style={{ marginTop: 20, padding: '14px 16px', background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.2)', borderRadius: 10 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 4 }}>Bengaluru Head Office</div>
                  <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>Darshan Plaza, 1st Floor, Channasandra, Bengaluru – 560 098</div>
                </div>
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
              <h2 style={{ fontSize: 'clamp(24px,3.2vw,36px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', lineHeight: 1.12 }}>
                {data.h2Features}
              </h2>
            </div>
            <div className="col-lg-7 d-flex align-items-end">
              <p style={{ fontSize: 16, color: '#6B7A99', lineHeight: 1.74 }}>
                Every project from NNC includes these capabilities — delivered by permanent in-house specialists with no outsourcing and no compromises.
              </p>
            </div>
          </div>
          <div className="row g-3">
            {data.features.map((f, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="anim" style={{ transitionDelay: `${i * .06}s`, background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '22px 20px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 13 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(33,150,243,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Svg d="M20 6 9 17 4 12" size={14} color="#2196F3" sw={2.5} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0B1F4B', marginBottom: 6, lineHeight: 1.3 }}>{f.h3}</h3>
                      <p style={{ fontSize: 13, color: '#6B7A99', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NNC */}
      <section style={{ background: '#071435', padding: '72px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row g-5 mb-5 anim">
            <div className="col-lg-6">
              <h2 style={{ fontSize: 'clamp(24px,3.2vw,36px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.1 }}>
                {data.h2Why}
              </h2>
            </div>
            <div className="col-lg-6 d-flex align-items-end">
              <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.42)', lineHeight: 1.7 }}>
                These are the reasons businesses across India choose NNC Digital over other agencies and freelancers.
              </p>
            </div>
          </div>
          <div className="row g-0">
            {data.why.map((w, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4 anim" style={{ transitionDelay: `${i * .07}s` }}>
                <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)', padding: 28, height: '100%' }}>
                  <div style={{ fontSize: 44, fontWeight: 800, color: 'rgba(255,255,255,.06)', letterSpacing: '-.07em', marginBottom: 4 }}>{w.n}</div>
                  <h3 style={{ fontSize: 15.5, fontWeight: 700, color: '#fff', marginBottom: 9, lineHeight: 1.3 }}>{w.h3}</h3>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.4)', lineHeight: 1.65, marginBottom: 0 }}>{w.body}</p>
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
              {data.h2Tech}
            </h2>
            <p style={{ fontSize: 15, color: '#6B7A99', maxWidth: 480, margin: '0 auto' }}>
              Industry-standard tools chosen for performance, scalability and long-term maintainability.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {data.techStack.map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 18px', background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 30, fontSize: 13.5, fontWeight: 700, color: '#0B1F4B' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2196F3', display: 'inline-block' }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CONTACT */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row g-5">
            {/* FAQ */}
            <div className="col-lg-6 anim-l">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.09)', border: '1px solid rgba(33,150,243,.18)', color: '#2196F3', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 30, letterSpacing: '.09em', textTransform: 'uppercase', marginBottom: 12 }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(20px,2.8vw,30px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 14, lineHeight: 1.2 }}>
                {data.h2Faq}
              </h2>
              <div style={{ borderTop: '1px solid #E2E8F0' }}>
                {data.faqs.map((f, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '17px 0', background: 'none', border: 'none', textAlign: 'left', gap: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                      <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#2C3E6B', letterSpacing: '-.01em', lineHeight: 1.3, margin: 0 }}>{f.q}</h3>
                      <div style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: openFaq === i ? '#2196F3' : '#fff', borderColor: openFaq === i ? '#2196F3' : '#C5D0E4', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'all .22s' }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#fff' : '#9BA8C0'} strokeWidth="2" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>
                    {openFaq === i && <p style={{ fontSize: 14, color: '#6B7A99', lineHeight: 1.75, paddingBottom: 16, margin: 0 }}>{f.a}</p>}
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
                  {data.badge}
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.38)', lineHeight: 1.68, marginBottom: 24 }}>
                  Tell us your requirements. We&apos;ll respond within 24 hours with scope, timeline and fixed price.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
                  <a href={SITE.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '11px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>
                    <Svg d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={14} color="currentColor" sw={2} />
                    {SITE.phone}
                  </a>
                  <a href={`mailto:${SITE.email}`} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '11px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>
                    <Svg d="M2 4h20v16H2zM22 7l-10 6.5L2 7" size={14} color="currentColor" sw={2} />
                    {SITE.email}
                  </a>
                </div>
                <form onSubmit={submit} noValidate>
                    <div className="row g-2 mb-2">
                      <div className="col-6">
                        <input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none' }}
                          placeholder="Your name *" value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value.replace(/[^A-Za-z\s.'-]/g, '') })}
                          maxLength={100} />
                      </div>
                      <div className="col-6">
                        <input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none' }}
                          type="tel" placeholder="Phone *" value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9+\-\s()]/g, '') })}
                          maxLength={15} />
                      </div>
                    </div>
                    <input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none', marginBottom: 9, display: 'block' }}
                      type="email" placeholder="Email address" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })} />
                    <textarea style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none', marginBottom: 9, resize: 'vertical', minHeight: 80 }}
                      rows="3" placeholder={`Tell us about your ${data.serviceName} requirements...`}
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    <button type="submit" disabled={sending}
                      style={{ width: '100%', background: '#2196F3', color: '#fff', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, padding: 14, borderRadius: 8, border: 'none', cursor: sending ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, marginBottom: 12, opacity: sending ? .7 : 1 }}>
                      {sending ? 'Sending…' : <>Send Enquiry <Svg d="M5 12h14M12 5l7 7-7 7" size={13} color="#fff" sw={2.5} /></>}
                    </button>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                      {['✓ No spam', '✓ 24hr response', '✓ Fixed price'].map(t => (
                        <span key={t} style={{ fontSize: 11, color: 'rgba(255,255,255,.22)' }}>{t}</span>
                      ))}
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
