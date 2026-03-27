'use client'
import { useState } from 'react'
import Image from 'next/image'
import { CASE_STUDIES, PROCESS_STEPS, TESTIMONIALS, CLIENTS, INDUSTRIES, TECH_STACK, FAQS, SITE, OFFICES } from '@/data/siteData'

/* ── CASE STUDIES ─────────────────────────────────────────────── */
export function CaseStudies() {
  return (
    <section className="results-sec py-5" id="work" aria-label="Case Studies">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '80px 24px' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />Case Studies</div>
            <h2 className="sec-h">Real Outcomes.<br /><span className="sky">Documented Results.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">Three representative NNC projects — the brief, what was built and the measured result.</p>
          </div>
        </div>

        <div className="d-flex flex-column gap-3">
          {CASE_STUDIES.map((r, i) => (
            <div key={i} className="result-card anim" style={{ transitionDelay: `${i * 0.12}s` }}>
              {/* Top bar */}
              <div className="rc-top d-flex align-items-start justify-content-between flex-wrap gap-3">
                <div>
                  <div className="rc-client">{r.client} · {r.industry}</div>
                  <div className="rc-title">{r.title}</div>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                  {r.tags.map((t, ti) => <span key={ti} className="rc-tag">{t}</span>)}
                </div>
              </div>
              {/* Body */}
              <div className="row g-0" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="col-md-6 rc-col" style={{ borderRight: '1px solid var(--border)', padding: 28 }}>
                  <div className="rc-lbl">Before NNC</div>
                  <p className="rc-tx">{r.challenge}</p>
                </div>
                <div className="col-md-6 rc-col" style={{ padding: 28 }}>
                  <div className="rc-lbl">What NNC Built</div>
                  <p className="rc-tx">{r.solution}</p>
                  <div className="rc-hl">{r.highlight}</div>
                </div>
              </div>
              {/* Metrics */}
              <div className="row g-0">
                {r.metrics.map((m, mi) => (
                  <div key={mi} className="col-6 col-md-3 rcm-item"
                       style={{ borderRight: mi < r.metrics.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div className="rcm-n">{m.n}</div>
                    <div className="rcm-l">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PROCESS ──────────────────────────────────────────────────── */
export function Process() {
  return (
    <section className="proc-sec" aria-label="Our Process">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '48px 24px 64px' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />How We Work</div>
            <h2 className="sec-h">Six Steps. Your Approval<br /><span className="sky">At Every Stage.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">No black boxes. You see and approve every major decision before we proceed. Weekly updates on a live staging site you can access.</p>
          </div>
        </div>

        <div className="row g-0" style={{ border: '1.5px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', boxShadow: 'var(--sh)' }}>
          {PROCESS_STEPS.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-2 proc-card anim"
                 style={{ transitionDelay: `${i * 0.06}s`, borderRight: i < PROCESS_STEPS.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="ps-num"><span>{p.num}</span></div>
              <div className="ps-ti">{p.title}</div>
              <p className="ps-tx">{p.desc}</p>
              <span className="ps-time">{p.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── TESTIMONIALS ─────────────────────────────────────────────── */
export function Testimonials() {
  return (
    <section className="testi-section py-5" id="testimonials" aria-label="Client Reviews">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-4 mb-4 anim">
          <div>
           
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Google Reviews.<br /><span className="sky">One Consistent Verdict.</span>
            </h2>
          </div>
          <button className="btn btn-outline-light fw-semibold">View All on Google →</button>
        </div>

        {/* Google badge */}
        <div className="g-badge mb-4 anim">
          <div className="gb-main">
            <div className="gb-g">
              <svg width="19" height="19" viewBox="0 0 24 24">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064 5.96 5.96 0 014.117 1.592l2.896-2.896A9.995 9.995 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="#4285F4" />
              </svg>
            </div>
            <div>
              <div className="gb-score">4.9</div>
              <div className="d-flex gap-1 my-1">{[...Array(5)].map((_, i) => <div key={i} className="gb-star" />)}</div>
              <div className="gb-lbl">Google Business Profile · Bengaluru</div>
            </div>
          </div>
          {[{ n: '87', l: 'Verified Reviews' }, { n: '565+', l: 'Projects Delivered' }, { n: '8+', l: 'Years Operating' }, { n: '4', l: 'Physical Offices' }].map((s, i) => (
            <div key={i} className="gb-stat">
              <div className="gb-sn">{s.n}</div>
              <div className="gb-sl">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="row g-1 mb-1">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className={`tc-card h-100 anim ${t.featured ? 'tc-feat' : ''}`}
                   style={{ transitionDelay: `${i * 0.09}s` }}>
                <div className="d-flex gap-1 mb-3">{[...Array(5)].map((_, si) => <div key={si} className="tc-s" />)}</div>
                <p className="tc-q mb-3">{t.quote}</p>
                <hr style={{ background: 'rgba(255,255,255,.08)', margin: '14px 0' }} />
                <div className="tc-auth">{t.author}</div>
                <div className="tc-co">{t.company}</div>
                <div className="tc-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="tc-badge-tx">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client strip */}
        <div className="d-flex flex-wrap" style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}>
          {CLIENTS.map((c, i) => (
            <div key={i} className="csi-item flex-grow-1">
              <div className="csi-n">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── INDUSTRIES ───────────────────────────────────────────────── */
export function Industries() {
  return (
    <section className="ind-sec" id="industries" aria-label="Industries We Serve">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '80px 24px' }}>
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-5 anim">
            <div className="section-tag"><span className="tag-dot" />Industries We Serve</div>
            <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: 16 }}>
              Ten Industries.<br /><span style={{ color: 'var(--sky)' }}>Sector-Specific Knowledge.</span>
            </h2>
            <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: 24, maxWidth: 420 }}>
              Deep domain expertise across verticals — not generic templates, but solutions shaped by real industry workflows.
            </p>
            <a href="#faq" className="btn btn-sky fw-bold px-4"
               onClick={e => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Discuss Your Sector →
            </a>
          </div>
          <div className="col-lg-7 anim-r">
            <div className="ind-grid">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="ind-card">
                  <div className="ind-ico" style={{ background: ind.bg, color: ind.color }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ind.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={ind.icon} /></svg>
                  </div>
                  <div>
                    <div className="ind-name">{ind.name}</div>
                    <div className="ind-sub">{ind.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── TECH STACK ───────────────────────────────────────────────── */
export function TechStack() {
  return (
    <section className="tech-sec py-5" aria-label="Technology Stack">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '72px 24px' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />Technology Stack</div>
            <h2 className="sec-h">Modern Technology.<br /><span className="sky">Proven in Production.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">We choose the stack that fits your project — not the easiest for us. React JS, Next JS and Node JS for web. React Native and Flutter for mobile.</p>
          </div>
        </div>

        <div className="row g-0" style={{ border: '1.5px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', background: 'var(--border)' }}>
          {TECH_STACK.map((t, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg ti-item anim"
                 style={{ transitionDelay: `${i * 0.05}s`, borderRight: i < TECH_STACK.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="ti-ico mx-auto">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                     stroke="var(--sky)" strokeWidth="1.8" strokeLinecap="round">
                  <path d={t.icon} />
                </svg>
              </div>
              <span className="ti-name">{t.name}</span>
              <span className="ti-type">{t.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ + CONTACT ────────────────────────────────────────────── */
export function FaqContact() {
  const [open, setOpen] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const toggle = (i) => setOpen(open === i ? null : i)

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
        body: JSON.stringify({ ...form, landingPage: typeof window !== 'undefined' ? window.location.pathname : '/' }),
      })
      const data = await res.json()
      if (res.ok) {
        setSent(true)
      } else {
        alert(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      alert('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="faq-sec" id="faq" aria-label="FAQ and Contact">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '48px 24px 64px' }}>
        <div className="row g-5">

          {/* FAQ */}
          <div className="col-lg-6 anim-l">
            <div className="section-tag"><span className="tag-dot" />FAQ</div>
            <h2 className="faq-h mb-2">Questions. <span className="sky">Answered Honestly.</span></h2>
            <p className="sec-sub mb-4" style={{ fontSize: 15.5 }}>
              Every new client asks these questions. We answer them directly — including the ones that make us look harder to work with.
            </p>

            <div style={{ borderTop: '1px solid var(--border)' }}>
              {FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <button className="faq-btn w-100 d-flex justify-content-between align-items-center py-3 border-0 bg-transparent text-start"
                          onClick={() => toggle(i)} aria-expanded={open === i}>
                    <span className="faq-q">{f.q}</span>
                    <span className={`faq-ic flex-shrink-0 ${open === i ? 'open' : ''}`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {open === i && (
                    <p className="faq-ans pb-3" style={{ margin: 0 }}>{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-6 anim-r">
            <div className="contact-card">
              <div className="cc-eyebrow"><span className="cc-eyebrow-tx">Start a Project</span></div>
              <div className="cc-h mb-2">Let&apos;s talk about<br />what you need.</div>
              <p className="cc-sub mb-4">Tell us your goals. We&apos;ll come back with clear scope, timeline and a fixed price within 24 hours. No obligation.</p>

              {/* Direct links */}
              <div className="d-flex flex-column gap-2 mb-4">
                <a href={SITE.phoneHref} className="cc-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    {SITE.phone}
                    <small>Mon–Sat, 9am–7pm IST</small>
                  </div>
                </a>
                <a href={`mailto:${SITE.email}`} className="cc-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                  {SITE.email}
                </a>
              </div>

              {!sent ? (
                <form onSubmit={submit} noValidate>
                  <div className="row g-2 mb-2">
                    <div className="col-6"><input className="cc-inp" type="text" placeholder="Your name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value.replace(/[^A-Za-z\s.'-]/g, '') })} maxLength={100} required /></div>
                    <div className="col-6"><input className="cc-inp" type="tel" placeholder="Phone *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9+\-\s()]/g, '') })} maxLength={15} required /></div>
                  </div>
                  <input className="cc-inp d-block mb-2" type="email" placeholder="Email address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} maxLength={150} />
                  <input className="cc-inp d-block mb-2" placeholder="What do you need? (website, app, CRM...)" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} />
                  <textarea className="cc-ta d-block mb-2" rows="3" placeholder="Brief description of your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  <button type="submit" className="cc-submit mb-3" disabled={sending}>
                    {sending ? 'Sending…' : <>Send Enquiry <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></>}
                  </button>
                  <div className="d-flex justify-content-center gap-4 flex-wrap">
                    <span className="cc-ti">✓ No spam</span>
                    <span className="cc-ti">✓ 24hr response</span>
                    <span className="cc-ti">✓ Fixed price</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="cc-ok-ico mx-auto mb-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div className="fw-800 fs-5 text-white mb-2">Enquiry Received!</div>
                  <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 14 }}>We&apos;ll call you within 24 hours. Urgent? Call {SITE.phone} directly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA BAND ─────────────────────────────────────────────────── */
export function CtaBand() {
  return (
    <section className="cta-section py-5" aria-label="Call to Action">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-8 anim">
            <h2 className="cta-h mb-2">
              Ready to Build Something<br /><span className="sky">That Actually Grows Your Business?</span>
            </h2>
            <p className="cta-sub mb-3">Tell us what you need. We&apos;ll come back with a clear scope, timeline and fixed price within 24 hours.</p>
            <div className="d-flex flex-wrap gap-4">
              {['Free consultation', 'PageSpeed 90+ guaranteed', 'Source code 100% yours', 'Fixed price'].map((chip, i) => (
                <span key={i} className="cta-chip">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-lg-end gap-2 anim">
            <button className="btn btn-sky fw-bold px-4 py-3 d-inline-flex align-items-center gap-2 w-100 w-lg-auto justify-content-center"
              onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}>
              Get Free Quote
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a href={SITE.phoneHref} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.4)', textAlign: 'center' }}>
              Or call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ───────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="main-footer" aria-label="Footer">

   

      {/* ── MAIN FOOTER ── */}
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '56px 24px 0' }}>
        <div className="row g-4 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,.06)' }}>

          {/* Brand column */}
          <div className="col-12 col-lg-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={SITE.logo} alt="Nakshatra Namaha Creations — NNC Digital Logo" width={44} height={44} style={{ borderRadius: 10, objectFit: 'contain' }} />
              <span className="ft-brand">{SITE.name}</span>
            </div>
            <p className="ft-desc">
              Full-stack digital agency in Bangalore. Website development, mobile apps, CRM software, digital marketing, 2D animation &amp; corporate video production. 565+ projects since 2015.
            </p>
            <div className="d-flex flex-column gap-2 mb-4">
              <a href={SITE.phoneHref} className="ft-cl">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="ft-cl">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg>
                {SITE.email}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="ft-cl">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                WhatsApp Us
              </a>
            </div>
            {/* Social */}
            <div className="d-flex gap-2">
              {[
                { href: SITE.social.instagram, icon: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></> },
                { href: SITE.social.linkedin, icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /> },
                { href: SITE.social.youtube, icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
                { href: SITE.social.facebook, icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-soc">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="ft-col-h">Services</div>
            <a href="/website-development-company-in-bangalore" className="ft-link">Website Development</a>
            <a href="/mobile-app-development-company-in-bangalore" className="ft-link">Mobile App Development</a>
            <a href="/custom-crm-development" className="ft-link">CRM & Custom Software</a>
            <a href="/digital-marketing-agency-in-bangalore" className="ft-link">Digital Marketing & SEO</a>
            <a href="/corporate-video-production-company-in-bangalore" className="ft-link">Corporate Video Production</a>
            <a href="/graphic-design-company-in-bangalore" className="ft-link">Graphic Design & Branding</a>
            <a href="/2d-animation-studio-in-bangalore" className="ft-link">2D Animation</a>
            <a href="/b2b-marketing-agency-in-bangalore" className="ft-link">B2B Marketing</a>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="ft-col-h">Company</div>
            <a href="/about-us" className="ft-link">About Us</a>
            <a href="/our-team" className="ft-link">Our Team</a>
            <a href="/client-reviews" className="ft-link">Client Reviews</a>
            <a href="/case-studies" className="ft-link">Case Studies</a>
            <a href="/process" className="ft-link">Our Process</a>
            <a href="/pricing" className="ft-link">Pricing Guide</a>
            <a href="/careers" className="ft-link">Careers</a>
            <a href="/contact-us" className="ft-link">Contact Us</a>
          </div>

          {/* Portfolio & Resources */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="ft-col-h">Portfolio</div>
            <a href="/our-works" className="ft-link">All Projects</a>
            <a href="/our-works/website-development" className="ft-link">Website Projects</a>
            <a href="/our-works/mobile-app-development" className="ft-link">Mobile App Projects</a>
            <a href="/our-works/corporate-video-production" className="ft-link">Video Production Work</a>
            <a href="/our-works/animation" className="ft-link">Animation Projects</a>

            <div className="ft-col-h mt-4">Resources</div>
            <a href="/blog" className="ft-link">Blog & Insights</a>
            <a href="/privacy" className="ft-link">Privacy Policy</a>
            <a href="/terms" className="ft-link">Terms of Service</a>
          </div>

          {/* Offices */}
          <div className="col-6 col-md-3 col-lg-3">
            <div className="ft-col-h">Our Offices</div>
            {OFFICES.map((o, i) => (
              <div key={i} className="ft-office">
                <div className="ft-office-city">
                  <span className="ft-office-dot" style={{ animationDelay: `${i * 0.5}s` }} />
                  {o.city} <span className="ft-office-type">· {o.type}</span>
                </div>
                <div className="ft-office-addr">{o.address}, {o.pin}</div>
              </div>
            ))}
            <div style={{ marginTop: 16 }}>
              <div className="ft-col-h">Working Hours</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>
                Mon – Sat: 9:00 AM – 7:00 PM IST<br />Sunday: Closed
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3" style={{ padding: '20px 0' }}>
          <p className="ft-copy mb-0">© {new Date().getFullYear()} {SITE.name}. All rights reserved. CIN: {SITE.cin}</p>
          <div className="d-flex align-items-center flex-wrap gap-3">
            <span className="ft-copy">Bengaluru</span>
            <span className="ft-copy">·</span>
            <span className="ft-copy">Mumbai</span>
            <span className="ft-copy">·</span>
            <span className="ft-copy">Mysuru</span>
            <span className="ft-copy">·</span>
            <span className="ft-copy">Hyderabad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── FLOATING WHATSAPP ────────────────────────────────────────── */
// Replaced by the WhatsAppChat chatbot in layout.js — render nothing here.
export function WaFloat() {
  return null
}
