'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function ApplyModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resume, setResume] = useState(null)
  const [resumeError, setResumeError] = useState('')
  const fileRef = useRef(null)

  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    experience: '', noticePeriod: '', currentCtc: '', expectedCtc: '',
    location: '', portfolio: '', message: '',
  })

  const openModal = useCallback((jobRole) => {
    setRole(jobRole)
    setError('')
    setResumeError('')
    setResume(null)
    setForm({ name: '', phone: '', email: '', experience: '', noticePeriod: '', currentCtc: '', expectedCtc: '', location: '', portfolio: '', message: '' })
    setOpen(true)
  }, [])

  const closeModal = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handler = (e) => openModal(e.detail?.role || '')
    window.addEventListener('open-apply', handler)
    return () => window.removeEventListener('open-apply', handler)
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

  const handleFile = (e) => {
    const file = e.target.files[0]
    setResumeError('')
    if (!file) { setResume(null); return }
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(file.type)) { setResumeError('Only PDF, DOC or DOCX files are allowed.'); setResume(null); return }
    if (file.size > 5 * 1024 * 1024) { setResumeError('File size must be under 5 MB.'); setResume(null); return }
    setResume(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.name.trim().length < 2) { setError('Please enter your full name (at least 2 characters).'); return }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) { setError('Please enter a valid phone number.'); return }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Please enter a valid email address.'); return }
    if (resumeError) return
    setLoading(true)
    setError('')
    try {
      const fd = new FormData()
      Object.entries({ ...form, role }).forEach(([k, v]) => fd.append(k, v))
      if (resume) fd.append('resume', resume)

      const res = await fetch('/api/apply', { method: 'POST', body: fd })
      const data = await res.json()
      if (res.ok) { closeModal(); router.push('/careers/thankyou') }
      else setError(data.error || 'Something went wrong. Please try again.')
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }} onClick={closeModal}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,14,37,.82)', backdropFilter: 'blur(5px)' }} />

      <div style={{ position: 'relative', background: '#fff', borderRadius: 18, width: '100%', maxWidth: 600, maxHeight: '94vh', overflowY: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,.45)' }} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 100%)', padding: '28px 32px 24px', borderRadius: '18px 18px 0 0', position: 'relative' }}>
          <button onClick={closeModal} aria-label="Close"
            style={{ position: 'absolute', top: 16, right: 16, width: 32, height: 32, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.2)', background: 'rgba(255,255,255,.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(33,150,243,.2)', border: '1px solid rgba(33,150,243,.35)', padding: '3px 12px', borderRadius: 20, marginBottom: 10, fontSize: 11, fontWeight: 700, color: '#60B4FF', letterSpacing: '.06em', textTransform: 'uppercase' }}>
            Apply Now
          </div>
          <h2 style={{ fontSize: 21, fontWeight: 800, color: '#fff', margin: '0 0 4px', letterSpacing: '-.03em' }}>{role}</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', margin: 0 }}>Nakshatra Namaha Creations · Bengaluru (In-office)</p>
        </div>

        {/* Form body */}
        <div style={{ padding: '28px 32px 32px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px' }}>

              {/* Name */}
              <div>
                <label style={lbl}>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" required style={inp} />
              </div>

              {/* Phone */}
              <div>
                <label style={lbl}>Phone *</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required style={inp} />
              </div>

              {/* Email */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={lbl}>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="rahul@gmail.com" required style={inp} />
              </div>

              {/* Experience */}
              <div>
                <label style={lbl}>Years of Experience</label>
                <select name="experience" value={form.experience} onChange={handleChange} style={{ ...inp, color: form.experience ? '#0B1F4B' : '#94A3B8' }}>
                  <option value="">Select…</option>
                  <option>0–1 years (Fresher)</option>
                  <option>1–2 years</option>
                  <option>2–4 years</option>
                  <option>4–6 years</option>
                  <option>6+ years</option>
                </select>
              </div>

              {/* Notice Period */}
              <div>
                <label style={lbl}>Notice Period</label>
                <select name="noticePeriod" value={form.noticePeriod} onChange={handleChange} style={{ ...inp, color: form.noticePeriod ? '#0B1F4B' : '#94A3B8' }}>
                  <option value="">Select…</option>
                  <option>Immediate Joiner</option>
                  <option>15 Days</option>
                  <option>30 Days</option>
                  <option>60 Days</option>
                  <option>90 Days</option>
                </select>
              </div>

              {/* Current CTC */}
              <div>
                <label style={lbl}>Current CTC (LPA)</label>
                <input name="currentCtc" value={form.currentCtc} onChange={handleChange} placeholder="e.g. 4.5 LPA" style={inp} />
              </div>

              {/* Expected CTC */}
              <div>
                <label style={lbl}>Expected CTC (LPA)</label>
                <input name="expectedCtc" value={form.expectedCtc} onChange={handleChange} placeholder="e.g. 6 LPA" style={inp} />
              </div>

              {/* Location */}
              <div>
                <label style={lbl}>Current Location</label>
                <input name="location" value={form.location} onChange={handleChange} placeholder="Bengaluru" style={inp} />
              </div>

              {/* Portfolio */}
              <div>
                <label style={lbl}>Portfolio / LinkedIn</label>
                <input name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="linkedin.com/in/yourname" style={inp} />
              </div>

              {/* Resume Upload */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={lbl}>Upload Resume <span style={{ color: '#94A3B8', fontWeight: 400 }}>(PDF, DOC, DOCX · max 5 MB)</span></label>
                <div
                  onClick={() => fileRef.current?.click()}
                  style={{ border: `2px dashed ${resume ? '#10B981' : '#E2E8F0'}`, borderRadius: 10, padding: '18px 16px', cursor: 'pointer', background: resume ? 'rgba(16,185,129,.04)' : '#FAFBFC', display: 'flex', alignItems: 'center', gap: 12, transition: 'all .2s' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: resume ? 'rgba(16,185,129,.12)' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {resume ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2"><polyline points="20 6 9 17 4 12" /></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    {resume ? (
                      <>
                        <div style={{ fontSize: 13.5, fontWeight: 700, color: '#10B981' }}>{resume.name}</div>
                        <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 2 }}>{(resume.size / 1024).toFixed(1)} KB · Click to change</div>
                      </>
                    ) : (
                      <>
                        <div style={{ fontSize: 13.5, fontWeight: 600, color: '#0B1F4B' }}>Click to upload your resume</div>
                        <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 2 }}>PDF, DOC or DOCX · Max 5 MB</div>
                      </>
                    )}
                  </div>
                </div>
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFile} style={{ display: 'none' }} />
                {resumeError && <p style={{ color: '#EF4444', fontSize: 12, marginTop: 6 }}>{resumeError}</p>}
              </div>

              {/* Cover note */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={lbl}>Why do you want to join NNC? <span style={{ color: '#94A3B8', fontWeight: 400 }}>(optional)</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about yourself, your key projects and why NNC excites you…" rows={4} style={{ ...inp, resize: 'vertical', minHeight: 90 }} />
              </div>

            </div>

            {error && <p style={{ color: '#EF4444', fontSize: 13, marginTop: 10, marginBottom: 0 }}>{error}</p>}

            <button type="submit" disabled={loading}
              style={{ marginTop: 20, width: '100%', background: loading ? '#93C5FD' : '#2196F3', color: '#fff', border: 'none', borderRadius: 10, padding: '15px', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background .2s' }}>
              {loading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                  Submitting…
                </>
              ) : (
                <>
                  Submit Application
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </>
              )}
            </button>

            <p style={{ textAlign: 'center', fontSize: 12, color: '#94A3B8', marginTop: 12, marginBottom: 0 }}>
              🔒 Your application is sent directly to our HR team and kept confidential.
            </p>
          </form>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

const lbl = { display: 'block', fontSize: 12.5, fontWeight: 600, color: '#374151', marginBottom: 5 }
const inp = { width: '100%', padding: '10px 13px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, color: '#0B1F4B', background: '#fff', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }
