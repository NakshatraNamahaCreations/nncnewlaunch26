'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SITE, OFFICES } from '@/data/siteData'

function Svg({ d, size = 16, color = 'currentColor', sw = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  )
}

export default function ContactContent() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
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
        body: JSON.stringify({ ...form, landingPage: '/contact-us' }),
      })
      const data = await res.json()
      if (res.ok) {
        router.push('/thankyou')
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
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.25)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', animation: 'pulse 2s infinite', display: 'inline-block' }} />
            4 Offices · Open Mon–Sat 9am–7pm
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 14 }}>
            Let&apos;s Talk About<br /><span style={{ color: '#2196F3' }}>Your Project</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, margin: '0 auto', lineHeight: 1.72 }}>
            Share your requirements. We&apos;ll come back with scope, timeline and a fixed price within 24 hours. No obligation.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div className="row g-5">

            {/* LEFT direct contacts + offices */}
            <div className="col-lg-5">
              {/* Quick contact */}
              <div style={{ marginBottom: 36 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>Direct Contact</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { ico: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z', label: SITE.phone, sub: 'Mon–Sat, 9am–7pm IST', href: SITE.phoneHref, color: '#2196F3' },
                    { ico: 'M2 4h20v16H2zM22 7l-10 6.5L2 7', label: SITE.email, sub: 'We respond within 24 hours', href: `mailto:${SITE.email}`, color: '#10B981' },
                    { ico: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z', label: 'WhatsApp Chat', sub: 'Chat directly with our team', href: SITE.whatsapp, color: '#25D366' },
                  ].map(item => (
                    <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 12, textDecoration: 'none', transition: 'all .2s' }}>
                      <div style={{ width: 42, height: 42, borderRadius: 10, background: `${item.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Svg d={item.ico} size={18} color={item.color} sw={2} />
                      </div>
                      <div>
                        <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0B1F4B' }}>{item.label}</div>
                        <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 2 }}>{item.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office cards */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>Walk-in Offices</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {OFFICES.map((o, i) => {
                    const colors = ['#2196F3', '#10B981', '#F59E0B', '#7C3AED']
                    const c = colors[i]
                    return (
                      <div key={o.city} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 18px', background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 12 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Svg d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10m-3 0a3 3 0 106 0 3 3 0 00-6 0" size={18} color={c} sw={2} />
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                            <div style={{ fontSize: 14.5, fontWeight: 800, color: '#0B1F4B' }}>{o.city}</div>
                            <span style={{ fontSize: 10, fontWeight: 700, color: c, background: `${c}18`, padding: '1px 7px', borderRadius: 20 }}>{o.type}</span>
                          </div>
                          <div style={{ fontSize: 12.5, color: '#94A3B8', lineHeight: 1.55 }}>
                            {o.address}<br />{o.state} {o.pin}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT contact form */}
            <div className="col-lg-7">
              <div style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #E2E8F0', padding: '40px', boxShadow: '0 4px 40px rgba(11,31,75,.06)' }}>
                <div style={{ marginBottom: 28 }}>
                  <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 8 }}>
                    Send Us a Message
                  </h2>
                  <p style={{ fontSize: 14.5, color: '#6B7A99', lineHeight: 1.6 }}>
                    Fill in your details and we&apos;ll respond with a detailed scope, timeline and fixed price within 24 hours.
                  </p>
                </div>

                <form onSubmit={submit} noValidate>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label style={{ fontSize: 12.5, fontWeight: 600, color: '#475569', marginBottom: 6, display: 'block' }}>Your Name *</label>
                        <input style={{ width: '100%', border: '1.5px solid #E2E8F0', borderRadius: 8, padding: '13px 16px', fontFamily: 'inherit', fontSize: 14, color: '#1E293B', outline: 'none', transition: 'border-color .15s' }} type="text" placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value.replace(/[^A-Za-z\s.'-]/g, '') })} maxLength={100}
                          onFocus={e => e.target.style.borderColor = '#2196F3'} onBlur={e => e.target.style.borderColor = '#E2E8F0'} required />
                      </div>
                      <div className="col-md-6">
                        <label style={{ fontSize: 12.5, fontWeight: 600, color: '#475569', marginBottom: 6, display: 'block' }}>Phone Number *</label>
                        <input style={{ width: '100%', border: '1.5px solid #E2E8F0', borderRadius: 8, padding: '13px 16px', fontFamily: 'inherit', fontSize: 14, color: '#1E293B', outline: 'none', transition: 'border-color .15s' }} type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9+\-\s()]/g, '') })} maxLength={15}
                          onFocus={e => e.target.style.borderColor = '#2196F3'} onBlur={e => e.target.style.borderColor = '#E2E8F0'} required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label style={{ fontSize: 12.5, fontWeight: 600, color: '#475569', marginBottom: 6, display: 'block' }}>Email Address</label>
                      <input style={{ width: '100%', border: '1.5px solid #E2E8F0', borderRadius: 8, padding: '13px 16px', fontFamily: 'inherit', fontSize: 14, color: '#1E293B', outline: 'none', transition: 'border-color .15s' }} type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={e => e.target.style.borderColor = '#2196F3'} onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                    </div>
                    <div className="mb-3">
                      <label style={{ fontSize: 12.5, fontWeight: 600, color: '#475569', marginBottom: 6, display: 'block' }}>Service Required</label>
                      <select style={{ width: '100%', border: '1.5px solid #E2E8F0', borderRadius: 8, padding: '13px 16px', fontFamily: 'inherit', fontSize: 14, color: form.service ? '#1E293B' : '#94A3B8', outline: 'none', background: '#fff', transition: 'border-color .15s' }} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                        onFocus={e => e.target.style.borderColor = '#2196F3'} onBlur={e => e.target.style.borderColor = '#E2E8F0'}>
                        <option value="" disabled>Select a service</option>
                        {['Website Development', 'Mobile App Development', 'CRM & Custom Software', 'Digital Marketing & SEO', 'Corporate Video Production', '2D Animation', 'Graphic Design & Branding', 'B2B Marketing', 'Multiple Services', 'Not Sure Yet'].map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label style={{ fontSize: 12.5, fontWeight: 600, color: '#475569', marginBottom: 6, display: 'block' }}>Project Description</label>
                      <textarea style={{ width: '100%', border: '1.5px solid #E2E8F0', borderRadius: 8, padding: '13px 16px', fontFamily: 'inherit', fontSize: 14, color: '#1E293B', outline: 'none', resize: 'vertical', minHeight: 120, lineHeight: 1.6, transition: 'border-color .15s' }} rows="4" placeholder="Tell us about your project what you need, timeline, budget range, any specific requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        onFocus={e => e.target.style.borderColor = '#2196F3'} onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                    </div>
                    <button type="submit" disabled={sending} style={{ width: '100%', background: sending ? '#6B7A99' : '#2196F3', color: '#fff', fontFamily: 'inherit', fontSize: 15.5, fontWeight: 700, padding: '16px', borderRadius: 10, border: 'none', cursor: sending ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, marginBottom: 16, transition: 'all .2s' }}>
                      {sending ? 'Sending…' : (
                        <><Svg d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" size={16} color="#fff" sw={2} /> Send Message</>
                      )}
                    </button>
                    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                      {['✓ No spam ever', '✓ Reply within 24 hours', '✓ Fixed price quotes', '✓ No obligation'].map(t => (
                        <span key={t} style={{ fontSize: 12, color: '#94A3B8', fontWeight: 500 }}>{t}</span>
                      ))}
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section style={{ background: '#fff', padding: '64px 0', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 10 }}>
              Find Us Across India
            </h2>
            <p style={{ fontSize: 15, color: '#6B7A99' }}>Four walk-in offices. Meet your project team in person any day.</p>
          </div>
          <div className="row g-4">
            {OFFICES.map((o, i) => {
              const colors = ['#2196F3', '#10B981', '#F59E0B', '#7C3AED']
              const c = colors[i]
              return (
                <div key={o.city} className="col-12 col-sm-6 col-lg-3">
                  <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 14, padding: '24px', textAlign: 'center', transition: 'all .22s', height: '100%' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${c}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <Svg d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10m-3 0a3 3 0 106 0 3 3 0 00-6 0" size={22} color={c} sw={2} />
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: '#0B1F4B', marginBottom: 4 }}>{o.city}</div>
                    <span style={{ display: 'inline-flex', fontSize: 10.5, fontWeight: 700, color: c, background: `${c}18`, padding: '2px 9px', borderRadius: 20, marginBottom: 10 }}>{o.type}</span>
                    <p style={{ fontSize: 12.5, color: '#94A3B8', lineHeight: 1.6, marginBottom: 14 }}>
                      {o.address}<br />{o.state} {o.pin}
                    </p>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: '#475569' }}>Mon – Sat · 9am – 7pm IST</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
