'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SITE } from '@/data/siteData'

const sc = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

function Svg({ d, size = 16, color = 'currentColor', sw = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  )
}

function ServiceIllustration({ svcName = '', stat1, stat1Label, city }) {
  const n = (svcName || '').toLowerCase()
  const isApp      = n.includes('app') || n.includes('mobile') || n.includes('flutter') || n.includes('react native')
  const isCrm      = n.includes('crm') || n.includes('software') || n.includes('erp') || n.includes('saas')
  const isMarketing= n.includes('marketing') || n.includes('seo') || n.includes('ads') || n.includes('b2b') || n.includes('social media')
  const is2dAnim   = n.includes('2d') || n.includes('animation') || n.includes('explainer') || n.includes('whiteboard')
  const isVideo    = !is2dAnim && (n.includes('video') || n.includes('production') || n.includes('motion'))
  const isEcom     = n.includes('ecommerce') || n.includes('e-commerce') || n.includes('shop')
  const isUiux     = n.includes('ui') || n.includes('design') || n.includes('branding') || n.includes('graphic') || n.includes('logo')

  return (
    <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', padding: '28px 24px 24px' }}>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle,rgba(33,150,243,.18) 0%,transparent 70%)', pointerEvents: 'none' }} />

      {/* Illustration */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        {isMarketing ? (
          <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
            <rect x="20" y="20" width="220" height="150" rx="12" fill="rgba(33,150,243,.06)" stroke="rgba(33,150,243,.2)" strokeWidth="1.5"/>
            {/* Bar chart */}
            <rect x="40" y="130" width="24" height="25" rx="4" fill="rgba(33,150,243,.35)"/>
            <rect x="74" y="108" width="24" height="47" rx="4" fill="rgba(33,150,243,.5)"/>
            <rect x="108" y="85" width="24" height="70" rx="4" fill="rgba(33,150,243,.65)"/>
            <rect x="142" y="65" width="24" height="90" rx="4" fill="rgba(16,185,129,.6)"/>
            <rect x="176" y="45" width="24" height="110" rx="4" fill="rgba(16,185,129,.8)"/>
            {/* Trend line */}
            <polyline points="52,128 86,106 120,83 154,63 188,43" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            {[52,86,120,154,188].map((x,i)=><circle key={i} cx={x} cy={[128,106,83,63,43][i]} r="4" fill="#10B981" stroke="rgba(255,255,255,.3)" strokeWidth="1.5"/>)}
            {/* Metric cards */}
            <rect x="150" y="6" width="90" height="28" rx="8" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.35)" strokeWidth="1"/>
            <text x="162" y="17" fontSize="9" fill="rgba(16,185,129,.9)" fontWeight="700">↑ 143% Traffic</text>
            <text x="162" y="28" fontSize="8" fill="rgba(255,255,255,.4)">Organic Growth</text>
            <rect x="4" y="55" width="82" height="28" rx="8" fill="rgba(33,150,243,.15)" stroke="rgba(33,150,243,.35)" strokeWidth="1"/>
            <text x="14" y="66" fontSize="9" fill="rgba(33,150,243,.9)" fontWeight="700">4.9★ Quality Score</text>
            <text x="14" y="77" fontSize="8" fill="rgba(255,255,255,.4)">Google Ads</text>
            {['Jan','Apr','Jul','Oct','Dec'].map((l,i)=>(
              <text key={l} x={46+i*34} y="170" fontSize="9" fill="rgba(255,255,255,.3)" textAnchor="middle">{l}</text>
            ))}
          </svg>
        ) : isApp ? (
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
            <rect x="0" y="40" width="62" height="26" rx="8" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.3)" strokeWidth="1"/>
            <text x="10" y="51" fontSize="8" fill="rgba(16,185,129,.9)" fontWeight="700">React Native</text>
            <text x="10" y="62" fontSize="8" fill="rgba(255,255,255,.4)">iOS & Android</text>
            <rect x="196" y="70" width="58" height="26" rx="8" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.3)" strokeWidth="1"/>
            <text x="206" y="81" fontSize="8" fill="rgba(167,139,250,.9)" fontWeight="700">Flutter</text>
            <text x="206" y="92" fontSize="8" fill="rgba(255,255,255,.4)">Play Store</text>
          </svg>
        ) : is2dAnim ? (
          // 2D Animation illustration character + keyframe timeline
          <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
            {/* Canvas area */}
            <rect x="20" y="10" width="150" height="110" rx="10" fill="rgba(245,158,11,.08)" stroke="rgba(245,158,11,.3)" strokeWidth="1.5"/>
            {/* Stick figure character */}
            <circle cx="95" cy="38" r="14" fill="rgba(245,158,11,.2)" stroke="rgba(245,158,11,.6)" strokeWidth="1.5"/>
            <text x="89" y="42" fontSize="11" fill="rgba(245,158,11,.9)" fontWeight="800">:)</text>
            <line x1="95" y1="52" x2="95" y2="80" stroke="rgba(245,158,11,.6)" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="95" y1="60" x2="78" y2="72" stroke="rgba(245,158,11,.6)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="95" y1="60" x2="112" y2="68" stroke="rgba(245,158,11,.6)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="95" y1="80" x2="82" y2="100" stroke="rgba(245,158,11,.6)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="95" y1="80" x2="108" y2="100" stroke="rgba(245,158,11,.6)" strokeWidth="2" strokeLinecap="round"/>
            {/* Ghost frames */}
            <circle cx="60" cy="38" r="12" fill="none" stroke="rgba(245,158,11,.2)" strokeWidth="1"/>
            <line x1="60" y1="50" x2="60" y2="76" stroke="rgba(245,158,11,.15)" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="130" cy="38" r="12" fill="none" stroke="rgba(245,158,11,.2)" strokeWidth="1"/>
            <line x1="130" y1="50" x2="130" y2="76" stroke="rgba(245,158,11,.15)" strokeWidth="2" strokeLinecap="round"/>
            {/* Stars / sparkles */}
            {[[38,22],[148,18],[35,85],[152,78]].map(([x,y],i)=>(
              <g key={i}>
                <line x1={x} y1={y-5} x2={x} y2={y+5} stroke="rgba(245,158,11,.4)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1={x-5} y1={y} x2={x+5} y2={y} stroke="rgba(245,158,11,.4)" strokeWidth="1.5" strokeLinecap="round"/>
              </g>
            ))}
            {/* Timeline bar */}
            <rect x="20" y="128" width="220" height="52" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
            <rect x="28" y="136" width="204" height="6" rx="3" fill="rgba(255,255,255,.06)"/>
            {/* Keyframe diamonds */}
            {[28,82,130,180,220].map((x,i)=>(
              <g key={i} transform={`translate(${x},139) rotate(45)`}>
                <rect x="-5" y="-5" width="10" height="10" rx="1" fill={i===2?'#F59E0B':'rgba(245,158,11,.35)'}/>
              </g>
            ))}
            {/* Track labels */}
            <text x="28" y="158" fontSize="8" fill="rgba(255,255,255,.3)">Character</text>
            <rect x="28" y="162" width="100" height="5" rx="2" fill="rgba(245,158,11,.25)"/>
            <text x="140" y="158" fontSize="8" fill="rgba(255,255,255,.3)">Background</text>
            <rect x="140" y="162" width="80" height="5" rx="2" fill="rgba(124,58,237,.25)"/>
            {/* Tools panel right */}
            <rect x="180" y="10" width="60" height="110" rx="8" fill="rgba(124,58,237,.1)" stroke="rgba(124,58,237,.25)" strokeWidth="1"/>
            <text x="192" y="28" fontSize="8" fill="rgba(167,139,250,.7)" fontWeight="700">Tools</text>
            {['Pen','Brush','Fill','Ease'].map((t,i)=>(
              <g key={t}>
                <rect x="188" y={34+i*20} width="44" height="14" rx="4" fill={i===1?'rgba(124,58,237,.4)':'rgba(255,255,255,.05)'} stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
                <text x="196" y={44+i*20} fontSize="8" fill={i===1?'white':'rgba(255,255,255,.4)'}>{t}</text>
              </g>
            ))}
          </svg>
        ) : isVideo ? (
          <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
            <rect x="20" y="25" width="155" height="115" rx="12" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.35)" strokeWidth="1.5"/>
            <circle cx="97" cy="82" r="32" fill="rgba(124,58,237,.2)" stroke="rgba(124,58,237,.4)" strokeWidth="1.5"/>
            <polygon points="89,68 89,96 117,82" fill="rgba(167,139,250,.9)"/>
            <rect x="188" y="15" width="48" height="175" rx="8" fill="rgba(33,150,243,.1)" stroke="rgba(33,150,243,.25)" strokeWidth="1"/>
            {[0,1,2,3,4,5].map(i=><rect key={i} x="194" y={23+i*28} width="36" height="18" rx="4" fill={`rgba(33,150,243,${0.08+i*0.04})`}/>)}
            <rect x="20" y="152" width="155" height="26" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
            <rect x="28" y="160" width="55" height="10" rx="3" fill="rgba(124,58,237,.5)"/>
            <rect x="90" y="160" width="35" height="10" rx="3" fill="rgba(245,158,11,.35)"/>
            <rect x="132" y="160" width="34" height="10" rx="3" fill="rgba(16,185,129,.3)"/>
          </svg>
        ) : isEcom ? (
          <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
            <rect x="20" y="15" width="220" height="160" rx="12" fill="rgba(33,150,243,.07)" stroke="rgba(33,150,243,.2)" strokeWidth="1.5"/>
            <rect x="20" y="15" width="220" height="26" rx="12" fill="rgba(33,150,243,.18)"/>
            {[[38,21],[53,21],[68,21]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy+6} r="4" fill={['rgba(239,68,68,.5)','rgba(245,158,11,.5)','rgba(16,185,129,.5)'][i]}/>)}
            {[[36,52],[128,52],[36,120],[128,120]].map(([x,y],i)=>(
              <g key={i}>
                <rect x={x} y={y} width="84" height="60" rx="7" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
                <rect x={x+8} y={y+8} width="68" height="32" rx="4" fill={['rgba(33,150,243,.2)','rgba(16,185,129,.2)','rgba(245,158,11,.15)','rgba(124,58,237,.18)'][i]}/>
                <rect x={x+8} y={y+45} width="44" height="5" rx="2" fill="rgba(255,255,255,.2)"/>
                <rect x={x+8} y={y+53} width="26" height="4" rx="2" fill="rgba(33,150,243,.5)"/>
              </g>
            ))}
            <rect x="158" y="6" width="90" height="28" rx="8" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.4)" strokeWidth="1"/>
            <text x="168" y="18" fontSize="9" fill="rgba(16,185,129,.9)" fontWeight="700">Cart: ₹4,299</text>
            <text x="168" y="29" fontSize="8" fill="rgba(255,255,255,.4)">Razorpay Ready</text>
          </svg>
        ) : isUiux ? (
          <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
            <rect x="20" y="20" width="220" height="150" rx="12" fill="rgba(33,150,243,.06)" stroke="rgba(33,150,243,.2)" strokeWidth="1.5"/>
            {[[36,36,80,70,'rgba(33,150,243,.15)'],[126,36,80,70,'rgba(16,185,129,.12)'],[36,118,80,42,'rgba(245,158,11,.12)'],[126,118,80,42,'rgba(124,58,237,.12)']].map(([x,y,w,h,bg],i)=>(
              <g key={i}>
                <rect x={x} y={y} width={w} height={h} rx="8" fill={bg} stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                <rect x={x+8} y={y+10} width={w-16} height={8} rx="3" fill="rgba(255,255,255,.2)"/>
                <rect x={x+8} y={y+24} width={w-28} height={6} rx="2" fill="rgba(255,255,255,.12)"/>
              </g>
            ))}
            <rect x="136" y="8" width="90" height="26" rx="8" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.35)" strokeWidth="1"/>
            <text x="148" y="19" fontSize="8" fill="rgba(167,139,250,.9)" fontWeight="700">Figma Design</text>
            <text x="148" y="29" fontSize="7" fill="rgba(255,255,255,.4)">Pixel Perfect UI</text>
          </svg>
        ) : (
          // Default: Website Development
          <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
            <rect x="15" y="15" width="230" height="150" rx="12" fill="rgba(33,150,243,.07)" stroke="rgba(33,150,243,.22)" strokeWidth="1.5"/>
            <rect x="15" y="15" width="230" height="30" rx="12" fill="rgba(33,150,243,.2)"/>
            {[[33,21],[48,21],[63,21]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy+9} r="5" fill={['rgba(239,68,68,.5)','rgba(245,158,11,.5)','rgba(16,185,129,.5)'][i]}/>)}
            <rect x="82" y="24" width="130" height="14" rx="4" fill="rgba(255,255,255,.08)"/>
            <text x="90" y="34.5" fontSize="8" fill="rgba(255,255,255,.35)">nakshatranamahacreations.com</text>
            <rect x="30" y="58" width="96" height="90" rx="8" fill="rgba(33,150,243,.1)"/>
            <rect x="40" y="68" width="76" height="10" rx="3" fill="rgba(33,150,243,.5)"/>
            <rect x="40" y="84" width="60" height="7" rx="2" fill="rgba(255,255,255,.18)"/>
            <rect x="40" y="95" width="68" height="7" rx="2" fill="rgba(255,255,255,.13)"/>
            <rect x="40" y="112" width="54" height="20" rx="6" fill="rgba(33,150,243,.55)"/>
            <rect x="138" y="58" width="90" height="42" rx="8" fill="rgba(16,185,129,.1)" stroke="rgba(16,185,129,.22)" strokeWidth="1"/>
            <rect x="148" y="68" width="50" height="7" rx="2" fill="rgba(16,185,129,.45)"/>
            <rect x="148" y="79" width="36" height="6" rx="2" fill="rgba(255,255,255,.15)"/>
            <rect x="138" y="108" width="42" height="40" rx="8" fill="rgba(245,158,11,.1)" stroke="rgba(245,158,11,.22)" strokeWidth="1"/>
            <rect x="186" y="108" width="42" height="40" rx="8" fill="rgba(124,58,237,.1)" stroke="rgba(124,58,237,.22)" strokeWidth="1"/>
          </svg>
        )}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: city ? 14 : 0 }}>
        {[
          { n: stat1 || '200+', l: stat1Label || 'Projects' },
          { n: '4.9★', l: 'Google Rating' },
          { n: '8+', l: 'Years Operating' },
          { n: '35+', l: 'In-house Team' },
        ].map(s => (
          <div key={s.l} style={{ textAlign: 'center', padding: '13px 10px', background: 'rgba(255,255,255,.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,.06)' }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#2196F3', letterSpacing: '-.06em', lineHeight: 1, marginBottom: 4 }}>{s.n}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)' }}>{s.l}</div>
          </div>
        ))}
      </div>

      {city && (
        <div style={{ padding: '12px 14px', background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.2)', borderRadius: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 3 }}>Our {city.name} Office</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', lineHeight: 1.5 }}>{city.office}</div>
        </div>
      )}
    </div>
  )
}

export default function CityServiceContent({ slug, svc, city, hood, titleOverride }) {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [open, setOpen] = useState(null)

  const location = hood ? `${hood.name}, ${city?.name}` : city?.name || 'India'
  const headline = titleOverride
    ? titleOverride.replace(' | NNC Digital', '').replace(' | NNC', '')
    : `${svc?.name} in ${location}`

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.name.trim().length < 2) { alert('Please enter your full name (at least 2 characters).'); return }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) { alert('Please enter a valid phone number.'); return }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { alert('Please enter a valid email address.'); return }
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: svc?.name, landingPage: `/${slug}` }),
      })
    } catch {}
    router.push('/thankyou')
  }

  const faqs = [
    { q: `How much does ${svc?.name?.toLowerCase()} cost in ${location}?`, a: `NNC Digital offers transparent, fixed pricing for ${svc?.name?.toLowerCase()} projects in ${location}. Every project is scoped individually with a fixed price agreed before work begins. No hourly billing, no surprise invoices. Contact us for a free quote within 24 hours.` },
    { q: `How long does a ${svc?.name?.toLowerCase()} project take?`, a: `Timelines depend on scope. A standard project typically takes 3–8 weeks. All timelines are agreed upfront and tracked with weekly updates. You get access to a live staging environment throughout development.` },
    { q: 'Does NNC outsource any work?', a: `Never. Every person on your project is a permanent full-time NNC employee. No freelancers, no offshore contractors. You can walk into our ${city?.name || 'Bengaluru'} office and meet the team building your product.` },
    { q: 'Do I own the source code?', a: 'Yes completely and permanently. On delivery you receive every source file, database schema, admin credential and hosting login. 100% yours with no ongoing obligation to NNC.' },
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
            {/* Illustration panel */}
            <div className="col-lg-5 d-none d-lg-block">
              <ServiceIllustration svcName={svc?.name} stat1={svc?.stat1} stat1Label={svc?.stat1Label} city={city} />
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
                Every {svc?.name?.toLowerCase()} project from NNC&apos;s {location} team includes these capabilities all delivered by permanent in-house specialists with no outsourcing.
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
              { n: '02', t: 'Fixed price agreed before work starts', b: 'In 565+ projects, not one client has been invoiced more than quoted. Price agreed before a wireframe is drawn.' },
              { n: '03', t: 'Source code 100% yours', b: 'Full source code, every credential and hosting login delivered to you. Zero lock-in, zero ongoing obligation.' },
              { n: '04', t: 'Verifiable 4.9★ Google rating', b: '87 verified Google reviews published publicly. Not a claim a verifiable public record anyone can check.' },
              { n: '05', t: 'PageSpeed 90+ contractual guarantee', b: `All NNC website projects include a contractual PageSpeed 90+ guarantee on both mobile and desktop.` },
              { n: '06', t: 'One named PM start to finish', b: 'Every project has a named project manager from discovery to handover. Weekly updates, direct access.' },
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
                <form onSubmit={submit} noValidate>
                    <div className="row g-2 mb-2">
                      <div className="col-6"><input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none', marginBottom: 0 }} placeholder="Your name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value.replace(/[^A-Za-z\s.'-]/g, '') })} maxLength={100} /></div>
                      <div className="col-6"><input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none' }} type="tel" placeholder="Phone *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9+\-\s()]/g, '') })} maxLength={15} /></div>
                    </div>
                    <input style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none', marginBottom: 9, display: 'block' }} type="email" placeholder="Email address *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    <textarea style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#fff', outline: 'none', marginBottom: 9, resize: 'vertical', minHeight: 80 }} rows="3" placeholder={`Tell us about your ${svc?.name?.toLowerCase()} requirements...`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    <button type="submit" style={{ width: '100%', background: '#2196F3', color: '#fff', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, padding: 14, borderRadius: 8, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, marginBottom: 12 }}>
                      Send Enquiry <Svg d="M5 12h14M12 5l7 7-7 7" size={13} color="#fff" sw={2.5} />
                    </button>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                      {['✓ No spam', '✓ 24hr response', '✓ Fixed price'].map(t => <span key={t} style={{ fontSize: 11, color: 'rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', gap: 4 }}>{t}</span>)}
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
