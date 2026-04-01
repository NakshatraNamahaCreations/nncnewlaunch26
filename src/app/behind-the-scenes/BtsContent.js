'use client'
import { useState, useEffect } from 'react'

// ─── ADD YOUR YOUTUBE VIDEO IDs HERE ────────────────────────────────────────
// To add a new video: copy a new object to this array with the YouTube video ID
const BTS_VIDEOS = [
  { id: 'wQzeomhXKJQ', title: 'NNC Behind The Scenes', tag: 'Company', desc: 'A candid look inside Nakshatra Namaha Creations — our team, our work, our culture.' },
  { id: 'KhaxwlQICRU', title: 'NNC Team & Culture', tag: 'Team', desc: 'Meet the people behind the projects at Nakshatra Namaha Creations.' },

  { id: 'IwDIP2xqRhU', title: 'NNC Studio Moments', tag: 'Studio', desc: 'Candid moments from inside the NNC studio — where the magic happens.' },
  { id: '_O2gIvfdUoM', title: 'NNC Team & Work', tag: 'Company', desc: 'A glimpse into everyday life at Nakshatra Namaha Creations.' },
  { id: 'lieEJPU7Xn0', title: 'NNC Culture & Creativity', tag: 'Culture', desc: 'Where creativity meets dedication — inside the NNC world.' },
  { id: 'rkxk2hhljqE', title: 'NNC Studio Life', tag: 'Studio', desc: 'Behind the camera, behind the code — this is how NNC works.' },
  { id: '3XkHFiM9NMM', title: 'NNC Team In Action', tag: 'Team', desc: 'Our team at work — building, creating and delivering every single day.' },
]

const TAG_COLOR = { Company:'#6366F1', Team:'#059669', Studio:'#DC2626', Process:'#2563EB', Build:'#7C3AED', Culture:'#D97706' }

function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, zIndex:99999, background:'rgba(0,0,0,.9)', backdropFilter:'blur(14px)', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <button onClick={onClose} style={{ position:'absolute', top:20, right:20, width:44, height:44, borderRadius:'50%', background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', fontSize:20, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
      <div onClick={e => e.stopPropagation()} style={{ width:'100%', maxWidth:900, borderRadius:16, overflow:'hidden', aspectRatio:'16/9', boxShadow:'0 32px 80px rgba(0,0,0,.6)' }}>
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} title="BTS Video" allow="autoplay; fullscreen" allowFullScreen style={{ width:'100%', height:'100%', border:'none', display:'block' }} />
      </div>
    </div>
  )
}

function BtsVideoCard({ v, onPlay }) {
  const [hovered, setHovered] = useState(false)
  const color = TAG_COLOR[v.tag] || '#6366F1'
  const thumb = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(v.id)}
      style={{ borderRadius:16, overflow:'hidden', cursor:'pointer', position:'relative', background:'#111', boxShadow: hovered ? '0 24px 60px rgba(0,0,0,.4)' : '0 4px 20px rgba(0,0,0,.2)', transform: hovered ? 'translateY(-6px)' : 'none', transition:'all .3s cubic-bezier(.16,1,.3,1)' }}
    >
      {/* Thumbnail */}
      <div style={{ position:'relative', aspectRatio:'16/9', overflow:'hidden' }}>
        <img src={thumb} alt={v.title} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition:'transform .5s cubic-bezier(.16,1,.3,1)' }} />
        <div style={{ position:'absolute', inset:0, background: hovered ? 'linear-gradient(to top,rgba(0,0,0,.85) 0%,rgba(0,0,0,.2) 55%,transparent 100%)' : 'linear-gradient(to top,rgba(0,0,0,.65) 0%,transparent 60%)', transition:'background .3s' }} />

        {/* Play button */}
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ width: hovered ? 68 : 56, height: hovered ? 68 : 56, borderRadius:'50%', background: hovered ? color : 'rgba(255,255,255,.9)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow: hovered ? `0 0 0 14px ${color}30` : '0 4px 20px rgba(0,0,0,.3)', transition:'all .3s cubic-bezier(.16,1,.3,1)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={hovered ? '#fff' : color} style={{ marginLeft:3 }}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Tag */}
        <div style={{ position:'absolute', top:12, left:12, background:color, color:'#fff', fontSize:9.5, fontWeight:800, padding:'3px 10px', borderRadius:20, letterSpacing:'.07em', textTransform:'uppercase' }}>{v.tag}</div>

        {/* REC dot */}
        <div style={{ position:'absolute', top:12, right:12, display:'flex', alignItems:'center', gap:5, background:'rgba(0,0,0,.5)', backdropFilter:'blur(8px)', padding:'4px 10px', borderRadius:20 }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#DC2626', display:'inline-block', animation:'bts-dot-pulse 1.2s ease-in-out infinite' }} />
          <span style={{ fontSize:9, fontWeight:800, color:'#fff', letterSpacing:'.06em' }}>BTS</span>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding:'14px 16px 16px', background:'#111' }}>
        <div style={{ fontSize:15, fontWeight:800, color:'#fff', letterSpacing:'-.02em', marginBottom:5 }}>{v.title}</div>
        <div style={{ fontSize:12, color:'rgba(255,255,255,.45)', lineHeight:1.6 }}>{v.desc}</div>
      </div>
    </div>
  )
}

export default function BtsContent() {
  const [playing, setPlaying] = useState(null)
  const [filter, setFilter] = useState('All')
  const tags = ['All', ...Object.keys(TAG_COLOR)]
  const filtered = filter === 'All' ? BTS_VIDEOS : BTS_VIDEOS.filter(v => v.tag === filter)

  return (
    <section style={{ background:'#0A0A14', minHeight:'60vh', padding:'clamp(32px,6vw,52px) 0 clamp(48px,8vw,80px)' }}>
      <style>{`@keyframes bts-dot-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:.5}}`}</style>
      <div style={{ maxWidth:1220, margin:'0 auto', padding:'0 clamp(16px,4vw,24px)' }}>

        {/* Filter chips */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:36, justifyContent:'center' }}>
          {tags.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{ fontSize:12.5, fontWeight:700, padding:'7px 18px', borderRadius:30, border: filter === t ? 'none' : '1.5px solid rgba(255,255,255,.15)', background: filter === t ? (TAG_COLOR[t] || '#6366F1') : 'transparent', color: filter === t ? '#fff' : 'rgba(255,255,255,.55)', cursor:'pointer', transition:'all .2s', fontFamily:'inherit' }}>
              {t}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="row g-4">
          {filtered.map((v, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4">
              <BtsVideoCard v={v} onPlay={setPlaying} />
            </div>
          ))}
        </div>


      </div>

      {playing && <VideoModal videoId={playing} onClose={() => setPlaying(null)} />}
    </section>
  )
}
