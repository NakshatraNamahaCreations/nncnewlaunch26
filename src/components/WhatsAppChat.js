'use client'
import { useState, useRef, useEffect, useCallback } from 'react'

const PHONE = '919900566466'
const LOGO = 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png'

/* ── 10 questions with selectable answers ──────────────── */
const QUESTIONS = [
  {
    id: 'service',
    question: "What service are you looking for?",
    options: [
      { label: 'Website Development', icon: '🌐' },
      { label: 'Mobile App Development', icon: '📱' },
      { label: 'CRM & Custom Software', icon: '⚙️' },
      { label: 'Digital Marketing & SEO', icon: '📈' },
      { label: 'Corporate Video Production', icon: '🎬' },
      { label: '2D Animation', icon: '✨' },
      { label: 'Graphic Design & Branding', icon: '🎨' },
    ],
  },
  {
    id: 'budget',
    question: "What's your approximate budget range?",
    options: [
      { label: 'Under ₹50,000 / $600', icon: '💰' },
      { label: '₹50,000 – ₹2,00,000 / $600 – $2,500', icon: '💰' },
      { label: '₹2,00,000 – ₹5,00,000 / $2,500 – $6,000', icon: '💎' },
      { label: 'Above ₹5,00,000 / $6,000+', icon: '💎' },
      { label: 'Not sure yet', icon: '🤔' },
    ],
  },
  {
    id: 'timeline',
    question: "When do you need this delivered?",
    options: [
      { label: 'ASAP within 2 weeks', icon: '🚀' },
      { label: '1 – 2 months', icon: '📅' },
      { label: '2 – 3 months', icon: '📅' },
      { label: '3+ months no rush', icon: '🕐' },
      { label: 'Just exploring options', icon: '🔍' },
    ],
  },
  {
    id: 'business_type',
    question: "What type of business is this for?",
    options: [
      { label: 'Startup / New Business', icon: '🚀' },
      { label: 'Small / Medium Business', icon: '🏢' },
      { label: 'Enterprise / Large Company', icon: '🏛️' },
      { label: 'Personal / Freelancer', icon: '👤' },
      { label: 'Agency / Reseller', icon: '🤝' },
    ],
  },
  {
    id: 'industry',
    question: "Which industry are you in?",
    options: [
      { label: 'Healthcare & Medical', icon: '🏥' },
      { label: 'Real Estate & Construction', icon: '🏗️' },
      { label: 'E-commerce & Retail', icon: '🛒' },
      { label: 'Education & EdTech', icon: '📚' },
      { label: 'Hospitality & Food', icon: '🍽️' },
      { label: 'Finance & Legal', icon: '⚖️' },
      { label: 'Other', icon: '📋' },
    ],
  },
  {
    id: 'existing_site',
    question: "Do you have an existing website or app?",
    options: [
      { label: 'Yes need a redesign / upgrade', icon: '🔄' },
      { label: 'Yes need additional features', icon: '➕' },
      { label: 'No building from scratch', icon: '🆕' },
      { label: 'Have a design / wireframe ready', icon: '🎯' },
    ],
  },
  {
    id: 'features',
    question: "What's most important to you?",
    options: [
      { label: 'Modern UI / UX design', icon: '🎨' },
      { label: 'SEO & Google ranking', icon: '🔍' },
      { label: 'Speed & performance', icon: '⚡' },
      { label: 'Payment / e-commerce integration', icon: '💳' },
      { label: 'Admin panel / dashboard', icon: '📊' },
      { label: 'All of the above', icon: '✅' },
    ],
  },
  {
    id: 'decision',
    question: "How soon are you looking to start?",
    options: [
      { label: 'Ready to start immediately', icon: '🟢' },
      { label: 'Within this month', icon: '📆' },
      { label: 'Within 2-3 months', icon: '🗓️' },
      { label: 'Just getting quotes', icon: '📝' },
    ],
  },
  {
    id: 'referral',
    question: "How did you find us?",
    options: [
      { label: 'Google Search', icon: '🔎' },
      { label: 'Social Media', icon: '📲' },
      { label: 'Referral / Word of mouth', icon: '🗣️' },
      { label: 'Saw our portfolio / case study', icon: '📁' },
      { label: 'Other', icon: '🌐' },
    ],
  },
  {
    id: 'contact_pref',
    question: "How would you prefer to discuss further?",
    options: [
      { label: 'WhatsApp chat', icon: '💬' },
      { label: 'Phone call', icon: '📞' },
      { label: 'Email', icon: '📧' },
      { label: 'Schedule a video call', icon: '📹' },
    ],
  },
]

/* ── component ─────────────────────────────────────────── */
export default function WhatsAppChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [step, setStep] = useState('welcome') // welcome -> name -> phone -> email -> questions -> done
  const [qIndex, setQIndex] = useState(0)
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [textInput, setTextInput] = useState('')
  const [answers, setAnswers] = useState({})
  const [typing, setTyping] = useState(false)
  const [pulse, setPulse] = useState(true)
  const [showOptions, setShowOptions] = useState(false)
  const chatRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) {
      setTimeout(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
      }, 50)
    }
  }, [messages, typing, showOptions])

  useEffect(() => {
    if (open && ['name', 'phone', 'email'].includes(step) && inputRef.current) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open, step])

  useEffect(() => { const t = setTimeout(() => setPulse(false), 8000); return () => clearTimeout(t) }, [])

  const addBot = useCallback((text, delay = 1500) => {
    setShowOptions(false)
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(p => [...p, { from: 'bot', text, time: new Date() }])
      // Show options after bot message appears
      setTimeout(() => setShowOptions(true), 300)
    }, delay)
  }, [])

  const handleOpen = () => {
    setOpen(true)
    setPulse(false)
    if (messages.length === 0) {
      setTyping(true)
      setTimeout(() => {
        setTyping(false)
        setMessages([{
          from: 'bot',
          text: "Welcome to Nakshatra Namaha Creations trusted by 565+ businesses across 4 countries.\n\nI'll ask you a few quick questions to understand your project. It takes less than 2 minutes.\n\nLet's start what's your name?",
          time: new Date(),
        }])
        setStep('name')
        setTimeout(() => setShowOptions(true), 300)
      }, 1800)
    }
  }

  const handleTextSubmit = () => {
    const val = textInput.trim()
    if (!val) return
    setTextInput('')
    setMessages(p => [...p, { from: 'user', text: val, time: new Date() }])
    setShowOptions(false)

    if (step === 'name') {
      setUserName(val)
      setStep('phone')
      addBot(`Thanks, ${val}! What's your contact number so our team can reach you?`, 1400)
    } else if (step === 'phone') {
      setUserPhone(val)
      setStep('email')
      addBot(`Got it! And your email address? (or type "skip" to continue without)`, 1400)
    } else if (step === 'email') {
      if (val.toLowerCase() !== 'skip') setUserEmail(val)
      setStep('questions')
      addBot(`Perfect! Now let's understand your project.\n\nQuestion 1 of 10:`, 1400)
      setTimeout(() => {
        addBot(QUESTIONS[0].question, 1800)
      }, 1800)
    }
  }

  const handleAnswer = (answer) => {
    const q = QUESTIONS[qIndex]
    // Save answer
    const newAnswers = { ...answers, [q.id]: answer }
    setAnswers(newAnswers)
    setShowOptions(false)

    // Add user's answer as a message
    setMessages(p => [...p, { from: 'user', text: answer, time: new Date() }])

    const nextIndex = qIndex + 1

    if (nextIndex < QUESTIONS.length) {
      // Ask next question
      setQIndex(nextIndex)
      const progressText = `Got it! Question ${nextIndex + 1} of 10:`
      addBot(progressText, 1200)
      setTimeout(() => {
        addBot(QUESTIONS[nextIndex].question, 1600)
      }, 1500)
    } else {
      // All 10 questions done
      setStep('done')
      addBot(`Thank you, ${userName}! That's everything I need.\n\nHere's a summary of your requirements:`, 1400)

      setTimeout(() => {
        const summary = buildSummary(newAnswers, userName, userPhone, userEmail)
        addBot(summary, 2200)

        // Auto-send to WhatsApp + email after summary is shown
        setTimeout(() => {
          sendLeadToWhatsApp(newAnswers, userName, userPhone, userEmail)
          sendLeadToEmail(newAnswers, userName, userPhone, userEmail)
          addBot(`Your enquiry has been sent to our team! A senior project consultant will reach out to you within 24 hours.\n\nFor immediate assistance, you can also call us at +91 99005 66466.`, 2000)
        }, 2800)
      }, 2000)
    }
  }

  const buildSummary = (ans, name, phone, email) => {
    const lines = [
      `👤 Name: ${name}`,
      `📞 Phone: ${phone || '-'}`,
      `📧 Email: ${email || '-'}`,
      ``,
      `🎯 Service: ${ans.service || '-'}`,
      `💰 Budget: ${ans.budget || '-'}`,
      `📅 Timeline: ${ans.timeline || '-'}`,
      `🏢 Business: ${ans.business_type || '-'}`,
      `🏭 Industry: ${ans.industry || '-'}`,
      `🔄 Current Status: ${ans.existing_site || '-'}`,
      `⭐ Priority: ${ans.features || '-'}`,
      `🟢 Start Date: ${ans.decision || '-'}`,
      `📲 Found via: ${ans.referral || '-'}`,
      `💬 Preferred Contact: ${ans.contact_pref || '-'}`,
    ]
    return lines.join('\n')
  }

  const sendLeadToWhatsApp = (ans, name, phone, email) => {
    const lines = [
      `*New Lead from NNC Website Chatbot*`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone || '-'}`,
      `*Email:* ${email || '-'}`,
      ``,
      `*Service:* ${ans.service || '-'}`,
      `*Budget:* ${ans.budget || '-'}`,
      `*Timeline:* ${ans.timeline || '-'}`,
      `*Business Type:* ${ans.business_type || '-'}`,
      `*Industry:* ${ans.industry || '-'}`,
      `*Current Status:* ${ans.existing_site || '-'}`,
      `*Priority:* ${ans.features || '-'}`,
      `*Ready to Start:* ${ans.decision || '-'}`,
      `*Found Via:* ${ans.referral || '-'}`,
      `*Preferred Contact:* ${ans.contact_pref || '-'}`,
      ``,
      `---`,
      `Submitted: ${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}`,
    ]
    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank')
  }

  const sendLeadToEmail = async (ans, name, phone, email) => {
    try {
      const message = [
        `Service: ${ans.service || '-'}`,
        `Budget: ${ans.budget || '-'}`,
        `Timeline: ${ans.timeline || '-'}`,
        `Business Type: ${ans.business_type || '-'}`,
        `Industry: ${ans.industry || '-'}`,
        `Current Status: ${ans.existing_site || '-'}`,
        `Priority: ${ans.features || '-'}`,
        `Ready to Start: ${ans.decision || '-'}`,
        `Found Via: ${ans.referral || '-'}`,
        `Preferred Contact: ${ans.contact_pref || '-'}`,
      ].join('\n')
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: phone || 'Via Chatbot',
          email: email || '',
          service: ans.service || 'General',
          message: `[Chatbot Lead]\n\n${message}`,
          landingPage: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      })
    } catch { /* silent fail WhatsApp is the primary channel */ }
  }

  const fmtTime = (d) => d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })

  const currentQ = step === 'questions' && qIndex < QUESTIONS.length ? QUESTIONS[qIndex] : null
  const progress = step === 'name' ? 0 : step === 'phone' ? 5 : step === 'email' ? 10 : step === 'questions' ? (10 + (qIndex / QUESTIONS.length) * 90) : 100

  return (
    <>
      {/* ── Floating trigger ─────────────────────────────── */}
      <div style={{ position: 'fixed', bottom: 100, right: 28, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
        {!open && (
          <div style={{
            background: '#fff', padding: '10px 16px', borderRadius: 12,
            boxShadow: '0 4px 24px rgba(0,0,0,.12)', maxWidth: 220,
            fontSize: 13, fontWeight: 600, color: '#1a1a2e', lineHeight: 1.45,
            animation: 'nncFadeIn .4s ease-out .5s both', position: 'relative',
          }}>
            <span style={{ color: '#64748b', fontWeight: 400 }}>Need help?</span> Chat with us
            <div style={{ position: 'absolute', bottom: -6, right: 28, width: 12, height: 12, background: '#fff', transform: 'rotate(45deg)', boxShadow: '2px 2px 4px rgba(0,0,0,.06)' }} />
          </div>
        )}
        <button
          onClick={() => open ? setOpen(false) : handleOpen()}
          aria-label="Chat with us"
          className={pulse ? 'nnc-pulse' : ''}
          style={{
            width: 64, height: 64, borderRadius: 20, border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(37,211,102,.35), 0 2px 8px rgba(0,0,0,.1)',
            transition: 'transform .25s cubic-bezier(.34,1.56,.64,1)',
            position: 'relative',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {open
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.552 4.083 1.515 5.8L0 24l6.37-1.492A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.371l-.36-.214-3.719.872.934-3.614-.235-.372A9.773 9.773 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
          }
          {!open && messages.length === 0 && (
            <span style={{ position: 'absolute', top: -4, right: -4, width: 20, height: 20, borderRadius: '50%', background: '#EF4444', border: '2.5px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#fff' }}>1</span>
          )}
        </button>
      </div>

      {/* ── Back to Top ─────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999, width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(37,99,235,.4)', transition: 'transform .2s, box-shadow .2s' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(37,99,235,.55)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,.4)' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
      </button>

      {/* ── Chat window ─────────────────────────────────── */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 180, right: 28, zIndex: 9998,
          width: 400, maxWidth: 'calc(100vw - 24px)',
          borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.04)',
          display: 'flex', flexDirection: 'column',
          height: 'min(660px, calc(100vh - 140px))',
          fontFamily: "'Plus Jakarta Sans', 'Inter', 'Segoe UI', sans-serif",
          animation: 'nncSlideUp .3s cubic-bezier(.34,1.56,.64,1)',
          background: '#fff',
        }}>

          {/* ── Header ──────────────────────────────────── */}
          <div style={{
            background: 'linear-gradient(135deg, #0B1F4B 0%, #142D6B 50%, #1a3a7a 100%)',
            padding: '18px 22px 14px', flexShrink: 0,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, overflow: 'hidden', border: '2px solid rgba(255,255,255,.15)', flexShrink: 0, background: '#fff' }}>
                  <img src={LOGO} alt="NNC" width={44} height={44} style={{ objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-.02em' }}>NNC Digital</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#25D366', display: 'inline-block', boxShadow: '0 0 6px rgba(37,211,102,.6)' }} />
                    {typing ? <span style={{ color: '#25D366', fontWeight: 600 }}>typing...</span> : 'Online 24/7'}
                  </div>
                </div>
                <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,.08)', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 10, transition: 'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.15)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>

              {/* Progress bar */}
              {step !== 'welcome' && (
                <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,.45)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                      {step === 'done' ? 'Complete' : step === 'name' ? 'Getting started' : step === 'phone' ? 'Contact details' : step === 'email' ? 'Contact details' : `Question ${qIndex + 1} of 10`}
                    </span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#25D366' }}>{Math.round(progress)}%</span>
                  </div>
                  <div style={{ height: 3, background: 'rgba(255,255,255,.1)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg, #25D366, #10B981)', borderRadius: 4, width: `${progress}%`, transition: 'width .6s cubic-bezier(.4,0,.2,1)' }} />
                  </div>
                </div>
              )}

              {/* Trust bar */}
              {['welcome', 'name', 'phone', 'email'].includes(step) ? (
                <div style={{ display: 'flex', gap: 16, marginTop: 14, padding: '8px 0 0', borderTop: '1px solid rgba(255,255,255,.08)' }}>
                  {[{ n: '565+', l: 'Projects' }, { n: '4.9★', l: 'Google' }, { n: '4', l: 'Countries' }, { n: '8+', l: 'Years' }].map(s => (
                    <div key={s.l} style={{ textAlign: 'center', flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-.03em' }}>{s.n}</div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,.4)', fontWeight: 500, marginTop: 1, textTransform: 'uppercase', letterSpacing: '.06em' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          {/* ── Messages ────────────────────────────────── */}
          <div ref={chatRef} style={{
            flex: 1, minHeight: 0, overflowY: 'auto', padding: '16px 14px',
            background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.from === 'user' ? 'flex-end' : 'flex-start', animation: 'nncMsgIn .3s ease-out' }}>
                {m.from === 'bot' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3, paddingLeft: 2 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 5, overflow: 'hidden', background: '#0B1F4B' }}>
                      <img src={LOGO} alt="" width={16} height={16} style={{ objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8' }}>NNC Assistant</span>
                  </div>
                )}
                <div style={{
                  maxWidth: '88%',
                  background: m.from === 'user' ? 'linear-gradient(135deg, #0B1F4B, #1a3a7a)' : '#fff',
                  color: m.from === 'user' ? '#fff' : '#1e293b',
                  padding: '10px 14px 6px',
                  borderRadius: m.from === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  boxShadow: m.from === 'user' ? '0 2px 12px rgba(11,31,75,.2)' : '0 1px 6px rgba(0,0,0,.05), 0 0 0 1px rgba(0,0,0,.03)',
                }}>
                  <div style={{ fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{m.text}</div>
                  <div style={{ fontSize: 9.5, textAlign: 'right', marginTop: 3, color: m.from === 'user' ? 'rgba(255,255,255,.4)' : '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3 }}>
                    {fmtTime(m.time)}
                    {m.from === 'user' && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3, paddingLeft: 2 }}>
                  <div style={{ width: 16, height: 16, borderRadius: 5, overflow: 'hidden', background: '#0B1F4B' }}>
                    <img src={LOGO} alt="" width={16} height={16} style={{ objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8' }}>NNC Assistant</span>
                </div>
                <div style={{ background: '#fff', padding: '12px 18px', borderRadius: '14px 14px 14px 4px', boxShadow: '0 1px 6px rgba(0,0,0,.05)', display: 'flex', gap: 5, alignItems: 'center' }}>
                  <span className="nnc-dot" style={{ animationDelay: '0s' }} />
                  <span className="nnc-dot" style={{ animationDelay: '.2s' }} />
                  <span className="nnc-dot" style={{ animationDelay: '.4s' }} />
                </div>
              </div>
            )}

            {/* ── Answer options (shown inside chat area) ── */}
            {showOptions && !typing && step === 'questions' && currentQ && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4, animation: 'nncMsgIn .3s ease-out' }}>
                {currentQ.options.map((opt, i) => (
                  <button key={i} onClick={() => handleAnswer(opt.label)}
                    className="nnc-option-btn"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '11px 16px', borderRadius: 12,
                      border: '1.5px solid #e2e8f0', background: '#fff',
                      fontSize: 13, fontWeight: 600, color: '#1e293b',
                      cursor: 'pointer', textAlign: 'left', width: '100%',
                      transition: 'all .2s', boxShadow: '0 1px 4px rgba(0,0,0,.04)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#2196F3'; e.currentTarget.style.background = '#EFF6FF'; e.currentTarget.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateX(0)' }}
                  >
                    <span style={{ fontSize: 17, flexShrink: 0, width: 28, textAlign: 'center' }}>{opt.icon}</span>
                    <span style={{ flex: 1 }}>{opt.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Bottom area ─────────────────────────────── */}
          <div style={{ flexShrink: 0, background: '#fff', borderTop: '1px solid #f1f5f9' }}>

            {/* Text input for name / phone / email */}
            {['name', 'phone', 'email'].includes(step) && showOptions && !typing && (
              <div style={{ padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{
                  flex: 1, display: 'flex', alignItems: 'center',
                  background: '#f1f5f9', borderRadius: 14, padding: '0 6px 0 18px',
                  border: '1.5px solid transparent', transition: 'all .15s',
                }}
                  onFocusCapture={e => { e.currentTarget.style.borderColor = '#0B1F4B'; e.currentTarget.style.background = '#fff' }}
                  onBlurCapture={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = '#f1f5f9' }}
                >
                  <input
                    ref={inputRef}
                    value={textInput}
                    onChange={e => setTextInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleTextSubmit()}
                    placeholder={step === 'name' ? 'Enter your name...' : step === 'phone' ? 'Enter your phone number...' : 'Enter your email...'}
                    type={step === 'phone' ? 'tel' : step === 'email' ? 'email' : 'text'}
                    style={{ flex: 1, padding: '12px 0', border: 'none', fontSize: 14, outline: 'none', background: 'transparent', color: '#1e293b', fontFamily: 'inherit' }}
                  />
                </div>
                <button onClick={handleTextSubmit}
                  style={{
                    width: 44, height: 44, borderRadius: 14, border: 'none', cursor: 'pointer',
                    background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(11,31,75,.25)', transition: 'transform .15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
            )}

            {/* Questions phase - instruction */}
            {step === 'questions' && showOptions && !typing && (
              <div style={{ padding: '10px 16px 12px', textAlign: 'center' }}>
                <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>
                  Select an option above to continue
                </span>
              </div>
            )}

            {/* Done - confirmation */}
            {step === 'done' && showOptions && !typing && (
              <div style={{ padding: '12px 16px' }}>
                <div
                  style={{
                    width: '100%', padding: '13px 16px', borderRadius: 14,
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-.01em',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Enquiry Sent Successfully
                </div>
              </div>
            )}

            {/* Footer */}
            <div style={{ textAlign: 'center', paddingBottom: 8 }}>
              <span style={{ fontSize: 10, color: '#cbd5e1', fontWeight: 500 }}>
                Bengaluru · Mumbai · Mysuru · Hyderabad
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Styles ──────────────────────────────────────── */}
      <style>{`
        @keyframes nncSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes nncFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nncMsgIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nnc-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #94a3b8; display: inline-block;
          animation: nncBounce .6s infinite alternate;
        }
        @keyframes nncBounce {
          from { opacity: .3; transform: translateY(0) scale(.8); }
          to   { opacity: 1; transform: translateY(-5px) scale(1); }
        }
        .nnc-pulse {
          animation: nncPulseRing 2s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes nncPulseRing {
          0%, 100% { box-shadow: 0 8px 32px rgba(37,211,102,.35), 0 0 0 0 rgba(37,211,102,.4); }
          50% { box-shadow: 0 8px 32px rgba(37,211,102,.35), 0 0 0 14px rgba(37,211,102,0); }
        }
      `}</style>
    </>
  )
}
