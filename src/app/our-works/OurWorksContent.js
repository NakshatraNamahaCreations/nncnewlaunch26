'use client'
import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'

// ─── Project Data ─────────────────────────────────────────────────────────────
const WORKS = [
  // ── Website Development ──
  { name: 'Puran Interiors', type: 'Corporate Website & SEO', category: 'Website Development', tech: ['Next JS', 'SEO', 'CMS'], result: 'Page 1 Google in 90 days', resultColor: '#059669', logo: '/assets/puraninteriors.png' },
  { name: 'Brainwave Consultancy', type: 'Education Consultancy Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Top 5 Google ranking', resultColor: '#4F46E5', logo: '/assets/bc-logo.webp' },
  { name: 'Novus', type: 'Corporate Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'Animations'], result: '95 PageSpeed Score', resultColor: '#2563EB', bg: 'linear-gradient(135deg,#1E40AF,#2563EB)' },
  { name: 'Avyakth', type: 'E-commerce Platform', category: 'Website Development', tech: ['React JS', 'Node JS', 'Razorpay'], result: '3× faster checkout', resultColor: '#7C3AED', bg: 'linear-gradient(135deg,#6D28D9,#8B5CF6)' },
  { name: 'Make My Documents', type: 'Service Portal', category: 'Website Development', tech: ['Next JS', 'Node JS', 'MySQL'], result: '200+ daily enquiries', resultColor: '#059669', logo: '/assets/md.png' },
  { name: 'CND Play', type: 'Entertainment Portal', category: 'Website Development', tech: ['React JS', 'CMS', 'AWS S3'], result: '500+ uploads/month', resultColor: '#DC2626', bg: 'linear-gradient(135deg,#991B1B,#DC2626)' },
  { name: 'Rent Angadi', type: 'Rental Listing Website', category: 'Website Development', tech: ['Next JS', 'Maps API', 'Node JS'], result: '1,200+ active listings', resultColor: '#D97706', logo: '/assets/rent-logo.jpg' },
  { name: 'Avyakth Roofing Solutions', type: 'Corporate Website', category: 'Website Development', tech: ['React JS', 'CMS', 'SEO'], result: '3× more lead enquiries', resultColor: '#2563EB', logo: '/assets/avyakth-logo.webp' },
  { name: 'Ganesh Interiors', type: 'Portfolio & Lead Gen', category: 'Website Development', tech: ['Next JS', 'CMS', 'Google Ads'], result: 'Top 3 local search rank', resultColor: '#059669', logo: '/assets/gd.webp' },
  { name: 'Perar Infotech', type: 'IT Services Website', category: 'Website Development', tech: ['Next JS', 'SEO', 'Node JS'], result: '40% growth in organic traffic', resultColor: '#7C3AED', logo: '/assets/pi-logo.png' },
  { name: 'Anuflow Controls', type: 'Industrial Corporate Site', category: 'Website Development', tech: ['React JS', 'CMS', 'SEO'], result: 'Page 1 for 12 keywords', resultColor: '#D97706', logo: '/assets/afc-logo.jpeg' },
  { name: 'Learn Telugu Now', type: 'EdTech Learning Platform', category: 'Website Development', tech: ['Next JS', 'Node JS', 'MySQL'], result: '2,000+ enrolled learners', resultColor: '#F97316', logo: '/assets/lt-logo.png' },
  { name: 'Kulkarni Housing', type: 'Real Estate Website', category: 'Website Development', tech: ['Next JS', 'Maps API', 'CMS'], result: '500+ property enquiries/mo', resultColor: '#0284C7', logo: '/assets/kh-logo.webp' },
  { name: 'Destination Wedding', type: 'Wedding Portfolio Site', category: 'Website Development', tech: ['Next JS', 'CMS', 'Gallery'], result: '120+ booking enquiries', resultColor: '#DB2777', logo: '/assets/dh-logo.jpeg' },
  { name: 'CarePro', type: 'Healthcare Service Website', category: 'Website Development', tech: ['React JS', 'Node JS', 'SEO'], result: '80+ daily appointment requests', resultColor: '#059669', logo: '/assets/cr-logo.jpeg' },
  { name: 'Kangrow Health', type: 'Health & Wellness Platform', category: 'Website Development', tech: ['Next JS', 'Node JS', 'CMS'], result: '4.9★ customer satisfaction', resultColor: '#16A34A', logo: '/assets/kg-logo.png' },
  { name: 'Rent Your PC', type: 'Tech Rental Platform', category: 'Website Development', tech: ['React JS', 'Node JS', 'Razorpay'], result: '300+ rentals processed/mo', resultColor: '#6366F1', logo: '/assets/rent-logo.webp' },
  { name: 'Chiru Holidays', type: 'Tour & Travel Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'Google Maps'], result: '250+ tour bookings/month', resultColor: '#D97706', logo: '/assets/chiru-logo.webp' },
  { name: 'Studio99', type: 'Creative Studio Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'Animations'], result: 'Premium brand presence', resultColor: '#7C3AED', logo: '/assets/st99.webp' },

  // ── Mobile Apps ──
  { name: 'Homjee', type: 'Home Services App', category: 'Mobile Apps', tech: ['Flutter', 'Node JS', 'Firebase'], result: '5,000+ service bookings', resultColor: '#2563EB', logo: '/assets/logo.png' },
  { name: 'Rent Angadi', type: 'Rental Marketplace App', category: 'Mobile Apps', tech: ['React Native', 'Node JS', 'Maps API'], result: '1,200+ active listings', resultColor: '#D97706', logo: '/assets/rent-logo.jpg' },
  { name: 'Novus', type: 'Business Management App', category: 'Mobile Apps', tech: ['Flutter', 'Firebase', 'REST API'], result: '95 performance score', resultColor: '#6366F1', logo: '/assets/novus-logo.webp' },
  { name: 'Coffee Mart', type: 'Food & Beverage Ordering App', category: 'Mobile Apps', tech: ['React Native', 'Node JS', 'Razorpay'], result: '800+ daily orders processed', resultColor: '#92400E', logo: '/assets/cf-logo.jpeg' },
  { name: 'Kangrow Health', type: 'Health & Wellness App', category: 'Mobile Apps', tech: ['Flutter', 'Node JS', 'MySQL'], result: '4.8★ on Play Store', resultColor: '#16A34A', logo: '/assets/kg-logo.png' },
  { name: 'Vijay Home Services', type: 'On-demand Service App', category: 'Mobile Apps', tech: ['React Native', 'Node JS', 'AWS'], result: '340% booking growth', resultColor: '#059669', logo: '/assets/vhs-logo.png' },
  { name: 'Think It', type: 'Productivity & Ideas App', category: 'Mobile Apps', tech: ['Flutter', 'Firebase', 'Hive DB'], result: '10,000+ active users', resultColor: '#7C3AED', logo: '/assets/th-logo.png' },
  { name: 'Make My Documents', type: 'Document Service App', category: 'Mobile Apps', tech: ['React Native', 'Node JS', 'MySQL'], result: '200+ daily document requests', resultColor: '#DC2626', logo: '/assets/md.png' },

  // ── CRM & Web Apps ──
  { name: 'Vijay Home Services', type: 'Service Booking CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '340% booking growth', resultColor: '#059669', logo: '/assets/vhs-logo.png' },
  { name: 'Think It', type: 'Project Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'Firebase'], result: '10,000+ active users', resultColor: '#7C3AED', logo: '/assets/th-logo.png' },
  { name: 'Make My Documents', type: 'Document Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '200+ daily requests handled', resultColor: '#2563EB', logo: '/assets/md.png' },
  { name: 'Ramsnest', type: 'Operations Dashboard', category: 'CRM & Web Apps', tech: ['React JS', 'Express', 'MySQL'], result: '80% less manual work', resultColor: '#D97706', bg: 'linear-gradient(135deg,#78350F,#D97706)' },
  { name: 'Classy Capture', type: 'Photography Studio CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'AWS S3'], result: '3× faster booking flow', resultColor: '#DB2777', bg: 'linear-gradient(135deg,#9D174D,#EC4899)' },
  { name: 'Rent Angadi', type: 'Rental Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'Maps API'], result: '1,200+ listings managed', resultColor: '#F97316', logo: '/assets/rent-logo.jpg' },
  { name: 'Kangrow Health', type: 'Healthcare CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '4.9★ patient satisfaction', resultColor: '#16A34A', logo: '/assets/kg-logo.png' },
  { name: 'Coffee Mart', type: 'F&B Order Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'Razorpay'], result: '800+ daily orders tracked', resultColor: '#92400E', logo: '/assets/cf-logo.jpeg' },
  { name: 'Ecomgyan', type: 'E-learning Admin CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '5,000+ learners managed', resultColor: '#0284C7', logo: '/assets/eg.webp' },
  { name: 'ProLeverage', type: 'Finance & Investment CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Firebase', 'REST API'], result: '10,000+ investor profiles', resultColor: '#6366F1', logo: '/assets/pr.png' },
  { name: 'Nithya Event', type: 'Event Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '500+ events organised', resultColor: '#DC2626', logo: '/assets/nt-logo.png' },
  { name: 'Tarus Technology', type: 'IT Services CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'Postgres'], result: '40% fewer support tickets', resultColor: '#2563EB', logo: '/assets/tt-logo.jpeg' },

  // ── Animation ──

  // ── Corporate Video ──
  { name: 'NNC Corporate Film', type: '4K Corporate Video', category: 'Corporate Video', tech: ['4K Production', 'Drone', 'Colour Grade'], result: 'Premium brand film', videoId: 'rkxk2hhljqE' },
  { name: 'Brand Film', type: 'Corporate Brand Video', category: 'Corporate Video', tech: ['4K Production', 'VFX', 'Sound Design'], result: 'Cinematic brand story', videoId: 'lZliMJm5DzM' },
  { name: 'Corporate Video', type: '4K Corporate Film', category: 'Corporate Video', tech: ['4K Production', 'Colour Grade', 'Sound Design'], result: 'Professional brand story', videoId: 'iJTVv1HKLIo' },
  { name: 'Client Success Film', type: 'Brand Documentary', category: 'Corporate Video', tech: ['4K Production', 'Drone', 'Motion Gfx'], result: 'Impactful brand story', videoId: 'SzLCHQWqsqA' },
  { name: 'Brand Story Film', type: '4K Corporate Video', category: 'Corporate Video', tech: ['4K Production', 'VFX', 'Colour Grade'], result: 'Cinematic brand identity', videoId: 'rh_hLGbRpwo' },

  // ── Digital Marketing ──
  { name: 'Puran Interiors SEO', type: 'Google SEO Campaign', category: 'Digital Marketing', tech: ['On-page SEO', 'Link Building', 'CWV'], result: 'Page 1 Google in 90 days', resultColor: '#059669', bg: 'linear-gradient(135deg,#14532D,#16A34A)' },
  { name: 'Vijaya Home Services', type: 'Meta & Google Ads', category: 'Digital Marketing', tech: ['Google Ads', 'Meta Ads', 'Analytics'], result: '3.2× ROAS on ad spend', resultColor: '#2563EB', bg: 'linear-gradient(135deg,#1E40AF,#3B82F6)' },
  { name: 'E-commerce Growth', type: 'Full Funnel Marketing', category: 'Digital Marketing', tech: ['SEO', 'Meta Ads', 'Email Marketing'], result: '180% revenue in 4 months', resultColor: '#7C3AED', bg: 'linear-gradient(135deg,#4C1D95,#8B5CF6)' },

  // ── Videos ──

  // ── Animation Videos ──
  { name: 'Animation Reel Vol.1', type: '2D Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Brand storytelling', videoId: '2IVW069hDGo' },
  { name: 'Motion Graphics Film', type: 'Motion Graphics', category: 'Animation', tech: ['After Effects', 'Cinema 4D', 'VFX'], result: 'Premium visual quality', videoId: '-4sN_QzE_vU' },
  { name: 'Character Animation', type: 'Character Animation', category: 'Animation', tech: ['Adobe Animate', 'After Effects', 'Illustrator'], result: 'Full character rigging', videoId: 'JHd3ocRFiw4' },
  { name: 'Product Animation', type: '3D Product Showcase', category: 'Animation', tech: ['Cinema 4D', 'After Effects', 'Colour Grade'], result: 'Used in ad campaigns', videoId: 'G5QmqH8jwEA' },
  { name: 'Brand Explainer', type: 'Explainer Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Voice Over'], result: '2M+ views', videoId: 'ov3pOoah8F8' },
  { name: 'Social Media Reels', type: 'Animated Reels Pack', category: 'Animation', tech: ['After Effects', 'Premiere Pro', 'Motion Gfx'], result: '3× engagement boost', videoId: '_Sx2ETyA2PM' },
  { name: 'Animation Showcase', type: '2D & Motion Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Award-worthy visuals', videoId: 'OCcw65d7zXQ' },
  { name: 'Animation Reel Vol.2', type: '2D Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Creative storytelling', videoId: 'PND2cqMerUs' },
  { name: 'Motion Design Reel', type: 'Motion Graphics', category: 'Animation', tech: ['After Effects', 'Cinema 4D', 'Premiere Pro'], result: 'High-impact visuals', videoId: 'gigcIj4HrAc' },
  { name: 'Animation Reel Vol.3', type: '2D Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Creative animation work', videoId: 'F_GUkFhIpPI' },
  { name: 'Animation Reel Vol.4', type: '2D Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Stunning visual storytelling', videoId: 'G-HyMJsBveo' },
]

const CATEGORIES = [
  'All',
  'Website Development',
  'Mobile Apps',
  'CRM & Web Apps',
  'Animation',
  'Corporate Video',
]

const CAT_META = {
  'All':                 { color: '#6366F1', light: '#EEF2FF', icon: 'M4 6h16M4 12h16M4 18h16' },
  'Website Development': { color: '#2563EB', light: '#DBEAFE', icon: 'M3 3h18v14H3zM8 21h8M12 17v4' },
  'Mobile Apps':         { color: '#059669', light: '#D1FAE5', icon: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z' },
  'CRM & Web Apps':      { color: '#D97706', light: '#FEF3C7', icon: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5' },
  'Animation':           { color: '#7C3AED', light: '#EDE9FE', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  'Corporate Video':     { color: '#DC2626', light: '#FEE2E2', icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z' },
  'Digital Marketing':   { color: '#0284C7', light: '#E0F2FE', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  'Videos':              { color: '#DC2626', light: '#FEE2E2', icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z' },
  'Behind The Scenes':   { color: '#B45309', light: '#FEF3C7', icon: 'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z' },
}

// ─── Video Card ───────────────────────────────────────────────────────────────
function VideoCard({ w, onPlay }) {
  const [hovered, setHovered] = useState(false)
  const thumb = `https://img.youtube.com/vi/${w.videoId}/maxresdefault.jpg`

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(w.videoId)}
      style={{
        borderRadius: 18,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 24px 60px rgba(220,38,38,.25), 0 4px 16px rgba(0,0,0,.2)'
          : '0 4px 20px rgba(0,0,0,.12)',
        transform: hovered ? 'translateY(-5px) scale(1.01)' : 'translateY(0) scale(1)',
        transition: 'all .32s cubic-bezier(.16,1,.3,1)',
        aspectRatio: '16/9',
      }}
    >
      {/* Thumbnail */}
      <img
        src={thumb}
        alt={w.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        onError={e => { e.target.style.background = '#1C1C2E' }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.2) 50%, transparent 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,.7) 0%, rgba(0,0,0,.1) 60%, transparent 100%)',
        transition: 'background .3s',
      }} />

      {/* Play button */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: hovered ? 72 : 60,
          height: hovered ? 72 : 60,
          borderRadius: '50%',
          background: hovered ? '#DC2626' : 'rgba(255,255,255,.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: hovered ? '0 0 0 12px rgba(220,38,38,.25), 0 8px 32px rgba(220,38,38,.4)' : '0 4px 20px rgba(0,0,0,.3)',
          transition: 'all .3s cubic-bezier(.16,1,.3,1)',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill={hovered ? '#fff' : '#DC2626'} style={{ marginLeft: 3 }}>
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      {/* Duration-style badge */}
      <div style={{
        position: 'absolute', top: 12, left: 12,
        display: 'flex', alignItems: 'center', gap: 5,
        background: 'rgba(220,38,38,.9)',
        backdropFilter: 'blur(8px)',
        padding: '4px 10px',
        borderRadius: 20,
        fontSize: 9.5, fontWeight: 800,
        color: '#fff',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: '#fff',
          display: 'inline-block',
          animation: 'vid-rec 1.2s ease-in-out infinite',
        }} />
        VIDEO
      </div>

      {/* Bottom info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 16px',
      }}>
        <div style={{
          fontSize: 15, fontWeight: 800,
          color: '#fff', letterSpacing: '-.02em',
          lineHeight: 1.3, marginBottom: 4,
        }}>
          {w.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: 11, fontWeight: 600,
            color: 'rgba(255,255,255,.65)',
          }}>{w.type}</span>
          <span style={{
            fontSize: 10.5, fontWeight: 700,
            color: '#FCA5A5',
            background: 'rgba(220,38,38,.3)',
            padding: '2px 8px', borderRadius: 12,
          }}>{w.result}</span>
        </div>
      </div>
    </div>
  )
}

// ─── Video Modal ──────────────────────────────────────────────────────────────
function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'rgba(0,0,0,.88)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        animation: 'modal-in .25s ease',
      }}
    >
      <style>{`
        @keyframes modal-in { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
        @keyframes vid-rec { 0%,100% { opacity:1 } 50% { opacity:.2 } }
      `}</style>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 20, right: 20,
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(255,255,255,.12)',
          border: '1px solid rgba(255,255,255,.2)',
          color: '#fff', fontSize: 20, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(220,38,38,.7)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.12)'}
      >
        ✕
      </button>

      {/* Player */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 900,
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,.6)',
          aspectRatio: '16/9',
          position: 'relative',
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="NNC Video"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      </div>
    </div>
  )
}

// ─── Behind The Scenes Card ───────────────────────────────────────────────────
const BTS_ROTATIONS = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.5]
function BtsCard({ w, index }) {
  const [hovered, setHovered] = useState(false)
  const [flashed, setFlashed] = useState(false)
  const rotation = BTS_ROTATIONS[index % BTS_ROTATIONS.length]

  const handleHover = (on) => {
    setHovered(on)
    if (on && !flashed) {
      setFlashed(true)
      setTimeout(() => setFlashed(false), 400)
    }
  }

  const TAG_COLORS = { Team:'#6366F1', Process:'#059669', Build:'#2563EB', Studio:'#DC2626', Culture:'#7C3AED', People:'#D97706' }
  const tagColor = TAG_COLORS[w.tag] || '#6366F1'

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{
        transform: hovered ? 'rotate(0deg) translateY(-8px) scale(1.03)' : `rotate(${rotation}deg)`,
        transition: 'transform .4s cubic-bezier(.16,1,.3,1)',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Camera flash overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        background: '#fff',
        borderRadius: 4,
        opacity: flashed ? 0.7 : 0,
        transition: flashed ? 'opacity 0s' : 'opacity .4s',
        pointerEvents: 'none',
      }} />

      {/* Polaroid frame */}
      <div style={{
        background: '#fff',
        padding: '10px 10px 48px',
        borderRadius: 4,
        boxShadow: hovered
          ? '0 28px 60px rgba(0,0,0,.22), 0 4px 12px rgba(0,0,0,.12)'
          : '0 8px 24px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.08)',
        transition: 'box-shadow .4s',
      }}>
        {/* Photo area */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '4/3',
          background: '#E2E8F0',
        }}>
          <img
            src={w.img}
            alt={w.name}
            loading="lazy"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              display: 'block',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform .5s cubic-bezier(.16,1,.3,1)',
            }}
          />
          {/* Tag badge */}
          <div style={{
            position: 'absolute', top: 10, left: 10,
            background: tagColor,
            color: '#fff',
            fontSize: 9, fontWeight: 800,
            padding: '3px 9px', borderRadius: 20,
            letterSpacing: '.08em', textTransform: 'uppercase',
          }}>
            {w.tag}
          </div>
          {/* Camera icon top-right */}
          <div style={{
            position: 'absolute', top: 10, right: 10,
            width: 28, height: 28, borderRadius: '50%',
            background: 'rgba(0,0,0,.45)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>

        {/* Polaroid caption area */}
        <div style={{ padding: '10px 4px 0', textAlign: 'center' }}>
          <div style={{
            fontSize: 12.5, fontWeight: 800,
            color: '#1E293B',
            letterSpacing: '-.02em',
            marginBottom: 4,
            fontFamily: "'Caveat', cursive, sans-serif",
            fontSize: 15,
          }}>
            {w.name}
          </div>
          <div style={{
            fontSize: 10.5, color: '#94A3B8',
            fontStyle: 'italic', lineHeight: 1.5,
          }}>
            {w.caption}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Work Card ────────────────────────────────────────────────────────────────
function WorkCard({ w }) {
  const [hovered, setHovered] = useState(false)
  const meta = CAT_META[w.category] || CAT_META['All']

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 18,
        padding: '22px 22px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        border: `1.5px solid ${hovered ? meta.color + '45' : '#E9EEF5'}`,
        boxShadow: hovered
          ? `0 16px 48px rgba(11,31,75,.13), 0 2px 12px ${meta.color}18`
          : '0 2px 10px rgba(11,31,75,.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all .28s cubic-bezier(.16,1,.3,1)',
        cursor: 'default',
      }}
    >
      {/* Top row: icon + category badge */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {/* Icon box or Logo */}
        <div style={{
          width: 52, height: 52,
          borderRadius: 14,
          background: w.logo ? '#fff' : hovered ? meta.color : meta.light,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'background .28s',
          boxShadow: hovered
            ? w.logo ? '0 6px 20px rgba(0,0,0,.12)' : `0 6px 18px ${meta.color}40`
            : w.logo ? '0 2px 8px rgba(0,0,0,.08)' : 'none',
          border: w.logo ? '1.5px solid #F0F4FA' : 'none',
          overflow: 'hidden',
          padding: w.logo ? 4 : 0,
        }}>
          {w.logo ? (
            <img src={w.logo} alt={w.name} style={{ width:'100%', height:'100%', objectFit:'contain', filter: w.logo === '/assets/st99.webp' ? 'brightness(0)' : 'none' }} />
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke={hovered ? '#fff' : meta.color}
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              style={{ transition: 'stroke .28s' }}>
              <path d={meta.icon} />
            </svg>
          )}
        </div>

        {/* Category pill */}
        <span style={{
          fontSize: 10, fontWeight: 700,
          color: meta.color,
          background: meta.light,
          border: `1px solid ${meta.color}28`,
          padding: '4px 10px',
          borderRadius: 20,
          letterSpacing: '.05em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          {w.category}
        </span>
      </div>

      {/* Project name + type */}
      <div>
        <div style={{
          fontSize: 16, fontWeight: 800,
          color: '#0B1F4B',
          letterSpacing: '-.03em',
          lineHeight: 1.3,
          marginBottom: 4,
        }}>
          {w.name}
        </div>
        <div style={{
          fontSize: 12, fontWeight: 600,
          color: '#94A3B8',
          letterSpacing: '.02em',
        }}>
          {w.type}
        </div>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {w.tech.map(t => (
          <span key={t} style={{
            fontSize: 10.5, fontWeight: 600,
            color: '#64748B',
            background: '#F5F7FA',
            border: '1px solid #E9EEF5',
            padding: '3px 9px',
            borderRadius: 20,
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Result metric */}
      <div style={{
        marginTop: 'auto',
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 13px',
        background: meta.light,
        borderRadius: 12,
        border: `1.5px solid ${meta.color}22`,
      }}>
        <div style={{
          width: 26, height: 26,
          borderRadius: 8,
          background: meta.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="#fff" strokeWidth="2.8" strokeLinecap="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        <span style={{
          fontSize: 12.5, fontWeight: 700,
          color: meta.color,
          lineHeight: 1.3,
        }}>
          {w.result}
        </span>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function OurWorksContent() {
  const [active, setActive] = useState('All')
  const [playingVideo, setPlayingVideo] = useState(null)
  const scrollRef = useRef(null)

  const filtered = useMemo(
    () => active === 'All' ? WORKS : WORKS.filter(w => w.category === active),
    [active]
  )

  const countFor = cat =>
    cat === 'All' ? WORKS.length : WORKS.filter(w => w.category === cat).length

  const activeMeta = CAT_META[active] || CAT_META['All']

  return (
    <>
      {/* ── Filter Tab Bar ── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'linear-gradient(180deg,#F8FAFF 0%,#fff 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1.5px solid #E8EEFF',
        boxShadow: '0 4px 24px rgba(99,102,241,.08)',
      }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '10px clamp(12px,3vw,24px)' }}>
          <div
            ref={scrollRef}
            className="ow-tab-scroll"
            style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>
            <div style={{ display: 'flex', gap: 6, minWidth: 'max-content', padding: '2px 0' }}>
              {CATEGORIES.map(cat => {
                const isActive = cat === active
                const meta = CAT_META[cat] || CAT_META['All']
                const count = countFor(cat)

                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className="ow-tab-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      padding: '8px 14px',
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#fff' : '#475569',
                      border: isActive ? 'none' : '1.5px solid #E2E8F0',
                      borderRadius: 10,
                      cursor: 'pointer',
                      transition: 'all .22s cubic-bezier(.16,1,.3,1)',
                      fontFamily: 'inherit',
                      whiteSpace: 'nowrap',
                      outline: 'none',
                      WebkitTapHighlightColor: 'transparent',
                      background: isActive
                        ? `linear-gradient(135deg,${meta.color},${meta.color}CC)`
                        : '#fff',
                      boxShadow: isActive
                        ? `0 4px 14px ${meta.color}40`
                        : '0 1px 3px rgba(0,0,0,.06)',
                      transform: isActive ? 'translateY(-1px)' : 'none',
                    }}
                  >
                    {/* Icon — hidden on mobile */}
                    <span className="ow-tab-icon" style={{
                      width: 24, height: 24,
                      borderRadius: 6,
                      background: isActive ? 'rgba(255,255,255,.2)' : meta.color + '15',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke={isActive ? '#fff' : meta.color}
                        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={meta.icon} />
                      </svg>
                    </span>

                    {/* Label */}
                    {cat === 'Videos' ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <span style={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: isActive ? '#fff' : '#DC2626',
                          display: 'inline-block',
                          animation: 'rec-pulse 1.2s ease-in-out infinite',
                          flexShrink: 0,
                        }} />
                        Videos
                      </span>
                    ) : cat}

                    {/* Count badge */}
                    <span style={{
                      fontSize: 10.5, fontWeight: 700,
                      padding: '1px 7px',
                      borderRadius: 20,
                      background: isActive ? 'rgba(255,255,255,.25)' : meta.color + '15',
                      color: isActive ? '#fff' : meta.color,
                      minWidth: 22, textAlign: 'center',
                      transition: 'all .22s',
                    }}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid Section ── */}
      <section style={{
        background: active === 'Behind The Scenes'
          ? 'linear-gradient(180deg,#FFFBEB 0%,#FEF3C7 100%)'
          : '#F7F9FC',
        padding: '48px 0 80px',
        transition: 'background .4s',
      }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>

          {/* Result count bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 32,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 5, height: 22,
                borderRadius: 3,
                background: activeMeta.color,
              }} />
              <p style={{
                fontSize: 14, color: '#64748B',
                fontWeight: 600, margin: 0,
              }}>
                Showing{' '}
                <strong style={{ color: '#0B1F4B', fontSize: 15 }}>
                  {filtered.length}
                </strong>{' '}
                project{filtered.length !== 1 ? 's' : ''}
                {active !== 'All' && (
                  <>
                    {' '}in{' '}
                    <strong style={{ color: activeMeta.color }}>{active}</strong>
                  </>
                )}
              </p>
            </div>

            {/* Active category chip */}
            {active !== 'All' && (
              <button
                onClick={() => setActive('All')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '6px 13px',
                  background: activeMeta.light,
                  border: `1.5px solid ${activeMeta.color}30`,
                  borderRadius: 20,
                  fontSize: 12.5, fontWeight: 700,
                  color: activeMeta.color,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all .2s',
                }}
              >
                {active}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Project grid */}
          <div className="row g-4" style={active === 'Behind The Scenes' ? { padding: '20px 0 40px' } : {}}>
            {filtered.map((w, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                {w.videoId ? (
                  <VideoCard w={w} onPlay={setPlayingVideo} />
                ) : w.category === 'Behind The Scenes' ? (
                  <BtsCard w={w} index={i} />
                ) : (
                  <WorkCard w={w} />
                )}
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '80px 20px',
            }}>
              <div style={{
                width: 72, height: 72,
                borderRadius: 20,
                background: '#EFF2F8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="#CBD5E1" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0B1F4B', marginBottom: 8 }}>
                No projects found
              </h3>
              <p style={{ color: '#94A3B8', fontSize: 14 }}>
                Try selecting a different category above.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ── Video Modal ── */}
      {playingVideo && (
        <VideoModal videoId={playingVideo} onClose={() => setPlayingVideo(null)} />
      )}
    </>
  )
}
