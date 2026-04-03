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

function ServiceIllustration({ badge = '', stat1, stat1Label }) {
  const b = badge.toLowerCase()

  // Pick illustration based on service type
  const isApp     = b.includes('app') || b.includes('mobile') || b.includes('flutter') || b.includes('react native')
  const isCrm     = b.includes('crm') || b.includes('software') || b.includes('saas') || b.includes('erp')
  const isMarketing = b.includes('marketing') || b.includes('seo') || b.includes('ads') || b.includes('social')
  const isVideo   = b.includes('video') || b.includes('animation') || b.includes('production')
  const isEcom    = b.includes('ecommerce') || b.includes('e-commerce') || b.includes('shop')
  const isLanding = b.includes('landing')
  const isPwa     = b.includes('progressive') || b.includes('pwa')

  return (
    <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', padding: 32 }}>
      {/* Glow accent */}
      <div style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(33,150,243,.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Illustration */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
        {isApp ? (
          // Mobile app illustration
          <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect x="60" y="10" width="100" height="180" rx="18" fill="rgba(33,150,243,.12)" stroke="rgba(33,150,243,.4)" strokeWidth="2"/>
            <rect x="72" y="30" width="76" height="120" rx="6" fill="rgba(33,150,243,.15)"/>
            <rect x="80" y="38" width="60" height="10" rx="3" fill="rgba(33,150,243,.5)"/>
            <rect x="80" y="54" width="40" height="7" rx="3" fill="rgba(255,255,255,.2)"/>
            <rect x="80" y="66" width="56" height="7" rx="3" fill="rgba(255,255,255,.15)"/>
            <rect x="80" y="80" width="60" height="28" rx="6" fill="rgba(33,150,243,.25)" stroke="rgba(33,150,243,.4)" strokeWidth="1"/>
            <circle cx="100" cy="94" r="6" fill="rgba(33,150,243,.6)"/>
            <rect x="111" y="89" width="22" height="4" rx="2" fill="rgba(255,255,255,.3)"/>
            <rect x="111" y="96" width="14" height="3" rx="1.5" fill="rgba(255,255,255,.2)"/>
            <rect x="80" y="115" width="28" height="24" rx="5" fill="rgba(16,185,129,.2)" stroke="rgba(16,185,129,.4)" strokeWidth="1"/>
            <rect x="114" y="115" width="26" height="24" rx="5" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.35)" strokeWidth="1"/>
            <circle cx="110" cy="168" r="5" fill="rgba(255,255,255,.2)"/>
            {/* Floating badges */}
            <rect x="0" y="50" width="52" height="28" rx="8" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.35)" strokeWidth="1"/>
            <text x="10" y="59" fontSize="7" fill="rgba(16,185,129,.9)" fontWeight="700">React</text>
            <text x="10" y="70" fontSize="7" fill="rgba(255,255,255,.5)">Native</text>
            <rect x="168" y="80" width="50" height="28" rx="8" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.35)" strokeWidth="1"/>
            <text x="176" y="89" fontSize="7" fill="rgba(167,139,250,.9)" fontWeight="700">Flutter</text>
            <text x="176" y="100" fontSize="7" fill="rgba(255,255,255,.5)">iOS/Android</text>
          </svg>
        ) : isCrm ? (
          // CRM / Software illustration
          <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect x="20" y="20" width="180" height="130" rx="12" fill="rgba(33,150,243,.08)" stroke="rgba(33,150,243,.25)" strokeWidth="1.5"/>
            <rect x="20" y="20" width="180" height="28" rx="12" fill="rgba(33,150,243,.2)"/>
            <circle cx="38" cy="34" r="5" fill="rgba(239,68,68,.5)"/>
            <circle cx="53" cy="34" r="5" fill="rgba(245,158,11,.5)"/>
            <circle cx="68" cy="34" r="5" fill="rgba(16,185,129,.5)"/>
            <rect x="36" y="60" width="72" height="72" rx="8" fill="rgba(33,150,243,.12)" stroke="rgba(33,150,243,.25)" strokeWidth="1"/>
            <rect x="44" y="68" width="56" height="8" rx="3" fill="rgba(33,150,243,.4)"/>
            <rect x="44" y="82" width="40" height="6" rx="2" fill="rgba(255,255,255,.2)"/>
            <rect x="44" y="92" width="48" height="6" rx="2" fill="rgba(255,255,255,.15)"/>
            <rect x="44" y="102" width="35" height="6" rx="2" fill="rgba(255,255,255,.12)"/>
            <rect x="44" y="112" width="45" height="12" rx="4" fill="rgba(16,185,129,.25)" stroke="rgba(16,185,129,.4)" strokeWidth="1"/>
            <rect x="120" y="60" width="68" height="30" rx="8" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.3)" strokeWidth="1"/>
            <rect x="128" y="70" width="35" height="5" rx="2" fill="rgba(167,139,250,.5)"/>
            <rect x="128" y="79" width="25" height="5" rx="2" fill="rgba(255,255,255,.2)"/>
            <rect x="120" y="98" width="68" height="34" rx="8" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.3)" strokeWidth="1"/>
            <rect x="128" y="106" width="20" height="5" rx="2" fill="rgba(245,158,11,.5)"/>
            {[0,1,2].map(i => <rect key={i} x={128} y={115+i*5} width={[42,28,36][i]} height="4" rx="2" fill="rgba(255,255,255,.15)"/>)}
            {/* Connection lines */}
            <line x1="110" y1="100" x2="120" y2="80" stroke="rgba(33,150,243,.3)" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="110" y1="115" x2="120" y2="118" stroke="rgba(245,158,11,.3)" strokeWidth="1" strokeDasharray="3,3"/>
            {/* Bottom stats */}
            <rect x="36" y="148" width="148" height="0" rx="0" fill="none"/>
            {[['CRM','#2196F3'],['SaaS','#7C3AED'],['ERP','#10B981']].map(([l,c],i) => (
              <g key={l}>
                <rect x={36+i*56} y={148} width={48} height={20} rx={5} fill={`${c}22`} stroke={`${c}44`} strokeWidth="1"/>
                <text x={36+i*56+14} y={162} fontSize="9" fill={c} fontWeight="700">{l}</text>
              </g>
            ))}
          </svg>
        ) : isMarketing ? (
          // Digital Marketing / SEO illustration
          <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect x="20" y="30" width="180" height="130" rx="12" fill="rgba(33,150,243,.06)" stroke="rgba(33,150,243,.2)" strokeWidth="1.5"/>
            {/* Bar chart */}
            <rect x="40" y="120" width="20" height="25" rx="4" fill="rgba(33,150,243,.4)"/>
            <rect x="68" y="100" width="20" height="45" rx="4" fill="rgba(33,150,243,.55)"/>
            <rect x="96" y="80" width="20" height="65" rx="4" fill="rgba(33,150,243,.7)"/>
            <rect x="124" y="60" width="20" height="85" rx="4" fill="rgba(16,185,129,.6)"/>
            <rect x="152" y="40" width="20" height="105" rx="4" fill="rgba(16,185,129,.8)"/>
            {/* Trend line */}
            <polyline points="50,118 78,98 106,78 134,58 162,38" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            {[50,78,106,134,162].map((x,i) => <circle key={i} cx={x} cy={[118,98,78,58,38][i]} r="4" fill="#10B981" stroke="rgba(255,255,255,.3)" strokeWidth="1.5"/>)}
            {/* Floating metric cards */}
            <rect x="130" y="8" width="78" height="26" rx="7" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.35)" strokeWidth="1"/>
            <text x="140" y="18" fontSize="8" fill="rgba(16,185,129,.9)" fontWeight="700">↑ 143%</text>
            <text x="140" y="28" fontSize="7" fill="rgba(255,255,255,.4)">Organic Traffic</text>
            <rect x="8" y="55" width="70" height="26" rx="7" fill="rgba(33,150,243,.15)" stroke="rgba(33,150,243,.35)" strokeWidth="1"/>
            <text x="18" y="65" fontSize="8" fill="rgba(33,150,243,.9)" fontWeight="700">4.9★ Ads</text>
            <text x="18" y="75" fontSize="7" fill="rgba(255,255,255,.4)">Quality Score</text>
            {/* Bottom labels */}
            {['Jan','Mar','May','Jul','Sep'].map((l,i) => (
              <text key={l} x={46+i*28} y="172" fontSize="8" fill="rgba(255,255,255,.3)" textAnchor="middle">{l}</text>
            ))}
          </svg>
        ) : isVideo ? (
          // Video / Animation illustration
          <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect x="20" y="30" width="130" height="100" rx="10" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.35)" strokeWidth="1.5"/>
            <circle cx="85" cy="80" r="28" fill="rgba(124,58,237,.2)" stroke="rgba(124,58,237,.4)" strokeWidth="1.5"/>
            <polygon points="78,68 78,92 102,80" fill="rgba(167,139,250,.8)"/>
            {/* Film strip right */}
            <rect x="160" y="20" width="40" height="160" rx="6" fill="rgba(33,150,243,.1)" stroke="rgba(33,150,243,.25)" strokeWidth="1"/>
            {[0,1,2,3,4].map(i => <rect key={i} x="165" y={28+i*30} width="30" height="20" rx="3" fill={`rgba(33,150,243,${0.1+i*0.05})`}/>)}
            {/* Bottom timeline */}
            <rect x="20" y="142" width="130" height="22" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
            <rect x="26" y="148" width="50" height="10" rx="3" fill="rgba(124,58,237,.4)"/>
            <rect x="82" y="148" width="30" height="10" rx="3" fill="rgba(245,158,11,.3)"/>
            <rect x="118" y="148" width="25" height="10" rx="3" fill="rgba(16,185,129,.3)"/>
            {/* Labels */}
            <rect x="20" y="170" width="55" height="20" rx="5" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.3)" strokeWidth="1"/>
            <text x="30" y="183" fontSize="8" fill="rgba(167,139,250,.9)" fontWeight="700">2D/3D Anim</text>
            <rect x="83" y="170" width="55" height="20" rx="5" fill="rgba(33,150,243,.15)" stroke="rgba(33,150,243,.3)" strokeWidth="1"/>
            <text x="93" y="183" fontSize="8" fill="rgba(147,197,253,.9)" fontWeight="700">4K Video</text>
          </svg>
        ) : isEcom ? (
          // E-commerce illustration
          <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect x="20" y="20" width="180" height="140" rx="12" fill="rgba(33,150,243,.07)" stroke="rgba(33,150,243,.2)" strokeWidth="1.5"/>
            <rect x="20" y="20" width="180" height="24" rx="12" fill="rgba(33,150,243,.18)"/>
            <circle cx="38" cy="32" r="4" fill="rgba(239,68,68,.5)"/>
            <circle cx="51" cy="32" r="4" fill="rgba(245,158,11,.5)"/>
            <circle cx="64" cy="32" r="4" fill="rgba(16,185,129,.5)"/>
            {/* Product cards */}
            {[[36,52],[114,52],[36,120],[114,120]].map(([x,y],i) => (
              <g key={i}>
                <rect x={x} y={y} width="72" height="60" rx="7" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                <rect x={x+8} y={y+8} width="56" height="30" rx="4" fill={['rgba(33,150,243,.2)','rgba(16,185,129,.2)','rgba(245,158,11,.2)','rgba(124,58,237,.2)'][i]}/>
                <rect x={x+8} y={y+44} width="36" height="5" rx="2" fill="rgba(255,255,255,.25)"/>
                <rect x={x+8} y={y+52} width="22" height="4" rx="2" fill="rgba(33,150,243,.5)"/>
                <rect x={x+46} y={y+44} width="18" height="14" rx="4" fill="rgba(33,150,243,.35)"/>
              </g>
            ))}
            {/* Cart badge */}
            <rect x="145" y="8" width="55" height="26" rx="8" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.4)" strokeWidth="1"/>
            <text x="155" y="18" fontSize="8" fill="rgba(16,185,129,.9)" fontWeight="700">Cart: ₹4,299</text>
            <text x="155" y="28" fontSize="7" fill="rgba(255,255,255,.4)">Razorpay Ready</text>
          </svg>
        ) : isLanding ? (
          // Landing page / conversion illustration
          <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect x="30" y="10" width="160" height="175" rx="10" fill="rgba(33,150,243,.07)" stroke="rgba(33,150,243,.2)" strokeWidth="1.5"/>
            <rect x="30" y="10" width="160" height="18" rx="10" fill="rgba(33,150,243,.2)"/>
            <rect x="50" y="38" width="120" height="12" rx="4" fill="rgba(255,255,255,.2)"/>
            <rect x="65" y="54" width="90" height="8" rx="3" fill="rgba(255,255,255,.1)"/>
            <rect x="75" y="70" width="70" height="22" rx="6" fill="rgba(33,150,243,.6)"/>
            <text x="95" y="85" fontSize="9" fill="white" fontWeight="700">Get Quote</text>
            <line x1="50" y1="105" x2="170" y2="105" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
            {/* Feature row */}
            {[50,100,150].map((x,i) => (
              <g key={i}>
                <circle cx={x} cy="120" r="10" fill={['rgba(33,150,243,.2)','rgba(16,185,129,.2)','rgba(245,158,11,.2)'][i]}/>
                <rect x={x-18} y="135" width="36" height="5" rx="2" fill="rgba(255,255,255,.15)"/>
                <rect x={x-12} y="143" width="24" height="4" rx="2" fill="rgba(255,255,255,.08)"/>
              </g>
            ))}
            {/* Conversion arrow */}
            <path d="M100 160 L100 175 L110 168 M100 175 L90 168" stroke="rgba(16,185,129,.6)" strokeWidth="2" strokeLinecap="round"/>
            <text x="76" y="190" fontSize="8" fill="rgba(16,185,129,.7)" fontWeight="700">High Conversion</text>
          </svg>
        ) : isPwa ? (
          // PWA illustration
          <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect x="40" y="20" width="140" height="100" rx="10" fill="rgba(33,150,243,.1)" stroke="rgba(33,150,243,.3)" strokeWidth="1.5"/>
            <rect x="55" y="35" width="110" height="70" rx="6" fill="rgba(33,150,243,.08)"/>
            <rect x="63" y="43" width="70" height="8" rx="3" fill="rgba(33,150,243,.4)"/>
            <rect x="63" y="55" width="50" height="6" rx="2" fill="rgba(255,255,255,.2)"/>
            <rect x="63" y="65" width="60" height="20" rx="4" fill="rgba(16,185,129,.25)" stroke="rgba(16,185,129,.4)" strokeWidth="1"/>
            <text x="73" y="78" fontSize="8" fill="rgba(16,185,129,.9)" fontWeight="700">Install App</text>
            {/* Mobile below */}
            <rect x="85" y="128" width="50" height="60" rx="8" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.35)" strokeWidth="1.5"/>
            <rect x="92" y="138" width="36" height="36" rx="4" fill="rgba(124,58,237,.15)"/>
            <circle cx="110" cy="176" r="3" fill="rgba(255,255,255,.2)"/>
            {/* Badges */}
            <rect x="0" y="40" width="60" height="22" rx="6" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.3)" strokeWidth="1"/>
            <text x="10" y="50" fontSize="7" fill="rgba(16,185,129,.9)" fontWeight="700">Offline Ready</text>
            <text x="10" y="60" fontSize="6" fill="rgba(255,255,255,.4)">Service Worker</text>
            <rect x="158" y="90" width="58" height="22" rx="6" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.3)" strokeWidth="1"/>
            <text x="168" y="100" fontSize="7" fill="rgba(245,158,11,.9)" fontWeight="700">PageSpeed</text>
            <text x="168" y="110" fontSize="7" fill="rgba(255,255,255,.4)">90+ Score</text>
          </svg>
        ) : (
          // Default: Website Development illustration
          <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect x="15" y="20" width="190" height="130" rx="12" fill="rgba(33,150,243,.08)" stroke="rgba(33,150,243,.25)" strokeWidth="1.5"/>
            <rect x="15" y="20" width="190" height="28" rx="12" fill="rgba(33,150,243,.2)"/>
            <circle cx="33" cy="34" r="5" fill="rgba(239,68,68,.5)"/>
            <circle cx="48" cy="34" r="5" fill="rgba(245,158,11,.5)"/>
            <circle cx="63" cy="34" r="5" fill="rgba(16,185,129,.5)"/>
            {/* URL bar */}
            <rect x="78" y="27" width="110" height="14" rx="4" fill="rgba(255,255,255,.08)"/>
            <text x="85" y="38" fontSize="7.5" fill="rgba(255,255,255,.35)">nakshatranamahacreations.com</text>
            {/* Hero area */}
            <rect x="28" y="58" width="80" height="75" rx="6" fill="rgba(33,150,243,.12)"/>
            <rect x="36" y="66" width="64" height="9" rx="3" fill="rgba(33,150,243,.5)"/>
            <rect x="36" y="80" width="50" height="6" rx="2" fill="rgba(255,255,255,.2)"/>
            <rect x="36" y="90" width="58" height="6" rx="2" fill="rgba(255,255,255,.15)"/>
            <rect x="36" y="104" width="46" height="16" rx="5" fill="rgba(33,150,243,.5)"/>
            {/* Right content */}
            <rect x="118" y="58" width="74" height="34" rx="6" fill="rgba(16,185,129,.12)" stroke="rgba(16,185,129,.25)" strokeWidth="1"/>
            <rect x="126" y="66" width="40" height="6" rx="2" fill="rgba(16,185,129,.4)"/>
            <rect x="126" y="76" width="30" height="5" rx="2" fill="rgba(255,255,255,.15)"/>
            <rect x="118" y="100" width="34" height="33" rx="6" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.25)" strokeWidth="1"/>
            <rect x="126" y="108" width="18" height="5" rx="2" fill="rgba(245,158,11,.4)"/>
            <rect x="126" y="117" width="14" height="5" rx="2" fill="rgba(255,255,255,.12)"/>
            <rect x="160" y="100" width="32" height="33" rx="6" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.25)" strokeWidth="1"/>
            <rect x="167" y="108" width="18" height="5" rx="2" fill="rgba(167,139,250,.4)"/>
            {/* Code lines at bottom */}
            <rect x="28" y="142" width="164" height="0" rx="0"/>
            {/* Stand */}
            <rect x="95" y="150" width="30" height="8" rx="2" fill="rgba(33,150,243,.25)"/>
            <rect x="80" y="158" width="60" height="6" rx="3" fill="rgba(33,150,243,.2)"/>
          </svg>
        )}
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
        {[
          { n: stat1, l: stat1Label },
          { n: '4.9★', l: 'Google Rating' },
          { n: '8+', l: 'Years Operating' },
          { n: '35+', l: 'In-house Team' },
        ].map(s => (
          <div key={s.l} style={{ textAlign: 'center', padding: '14px 10px', background: 'rgba(255,255,255,.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,.06)' }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#2196F3', letterSpacing: '-.06em', lineHeight: 1, marginBottom: 4 }}>{s.n}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)' }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Office tag */}
      <div style={{ padding: '12px 14px', background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.2)', borderRadius: 10 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 3 }}>Bengaluru Head Office</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', lineHeight: 1.5 }}>Darshan Plaza, 1st Floor, Channasandra, Bengaluru – 560 098</div>
      </div>
    </div>
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
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { alert('Please enter a valid email address.'); return }
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

            {/* Illustration panel */}
            <div className="col-lg-5 d-none d-lg-block">
              <ServiceIllustration badge={data.badge} stat1={data.stat1} stat1Label={data.stat1Label} />
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
                Every project from NNC includes these capabilities delivered by permanent in-house specialists with no outsourcing and no compromises.
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
                      type="email" placeholder="Email address *" value={form.email}
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
