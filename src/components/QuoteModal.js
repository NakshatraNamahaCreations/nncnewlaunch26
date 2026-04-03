'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const SERVICES = [
  'Website Development',
  'Mobile App Development',
  'CRM / Software Development',
  'Digital Marketing & SEO',
  '2D Animation',
  'Corporate Video Production',
  'Graphic Design',
  'Other',
]

export default function QuoteModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', landingPage: '' })

  const openModal = useCallback(() => {
    setOpen(true)
    setError('')
    setForm({ name: '', phone: '', email: '', service: '', message: '', landingPage: typeof window !== 'undefined' ? window.location.pathname : '/' })
  }, [])

  const closeModal = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handler = () => openModal()
    window.addEventListener('open-quote', handler)
    return () => window.removeEventListener('open-quote', handler)
  }, [openModal])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, closeModal])

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.name.trim().length < 2) { setError('Please enter your full name (at least 2 characters).'); return }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) { setError('Please enter a valid phone number.'); return }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Please enter a valid email address.'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        closeModal()
        router.push('/thankyou')
      } else {
        setError(data.error || 'Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Network error. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
      onClick={closeModal}
    >
      {/* Backdrop */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,14,37,.75)', backdropFilter: 'blur(4px)' }} />

      {/* Modal box */}
      <div
        style={{ position: 'relative', background: '#fff', borderRadius: 16, width: '100%', maxWidth: 520, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 64px rgba(0,0,0,.35)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          style={{ position: 'absolute', top: 16, right: 16, width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #E2E8F0', background: '#F8FAFC', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── Form State ── */}
        <div style={{ padding: '36px 40px 40px' }}>
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: 'inline-block', background: '#EFF6FF', color: '#2196F3', fontSize: 11.5, fontWeight: 700, padding: '4px 10px', borderRadius: 20, marginBottom: 10, letterSpacing: '.04em', textTransform: 'uppercase' }}>
                Free Quote 24hrs
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0B1F4B', margin: '0 0 6px', lineHeight: 1.2 }}>
                Tell Us About Your Project
              </h2>
              <p style={{ fontSize: 14, color: '#64748B', margin: 0 }}>Fixed price. No surprises. Source code is yours.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px' }}>
                <div style={{ gridColumn: '1' }}>
                  <label style={labelStyle}>Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Rajesh Kumar" required style={inputStyle} />
                </div>
                <div style={{ gridColumn: '2' }}>
                  <label style={labelStyle}>Phone *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required style={inputStyle} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="rajesh@company.com" style={inputStyle} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, color: form.service ? '#0B1F4B' : '#94A3B8' }}>
                    <option value="">Select a service…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Tell us more (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Brief description of your project, budget or timeline…" rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} />
                </div>
              </div>

              {error && (
                <p style={{ color: '#EF4444', fontSize: 13, marginTop: 10, marginBottom: 0 }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{ marginTop: 18, width: '100%', background: loading ? '#93C5FD' : '#2196F3', color: '#fff', border: 'none', borderRadius: 8, padding: '14px', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background .2s' }}
              >
                {loading ? 'Sending…' : (
                  <>
                    Get My Free Quote
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: '#94A3B8', marginTop: 12, marginBottom: 0 }}>
                We reply within 24 hours · No spam · No obligation
              </p>
            </form>
          </div>
      </div>
    </div>
  )
}

const labelStyle = { display: 'block', fontSize: 12.5, fontWeight: 600, color: '#374151', marginBottom: 5 }
const inputStyle = { width: '100%', padding: '10px 13px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, color: '#0B1F4B', background: '#fff', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }
