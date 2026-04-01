'use client'
import { useEffect, useRef } from 'react'
import { STATS, CLIENTS } from '@/data/siteData'

export function StatsBar() {
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        const cntEl = el.querySelector('#stat-count')
        if (!cntEl) return
        let s = 0
        const run = () => {
          s += 12
          if (s >= 565) { cntEl.textContent = '565'; return }
          cntEl.textContent = s
          requestAnimationFrame(run)
        }
        run()
        // Animate all stat items
        el.querySelectorAll('.stat-item').forEach((item, i) => {
          setTimeout(() => item.classList.add('in'), i * 80)
        })
      }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="stats-bar" ref={ref}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-0">
          {STATS.map((s, i) => (
            <div key={i} className="col stat-item anim text-center py-3 py-md-4">
              <span className="si-n d-block mb-1">
                {s.countVal ? (
                  <><span id="stat-count">0</span><em>+</em></>
                ) : (
                  <>{s.n.replace(/[0-9]/g, '').includes('★') ? s.n : s.n}</>
                )}
              </span>
              <span className="si-l">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ClientsBand() {
  const withLogos = CLIENTS.filter(c => c.logo)
  const ticker = [...withLogos, ...withLogos, ...withLogos, ...withLogos]

  const STATS_LIST = [
    { n: '100+', label: 'Clients Served',      color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
    { n: '10+',  label: 'Industries',           color: '#059669', bg: '#ECFDF5', border: '#A7F3D0' },
    { n: '565+', label: 'Projects Delivered',   color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  ]

  return (
    <section style={{
      background: '#fff',
      padding: '64px 0 0',
      overflow: 'hidden',
      position: 'relative',
      borderTop: '1px solid #F0F4FA',
    }}>
      <style>{`
        @keyframes cl3-scroll { 0% { transform: translateX(0) } 100% { transform: translateX(-25%) } }
        .cl3-ticker { display: flex; gap: 0; width: max-content; animation: cl3-scroll 30s linear infinite; }
        .cl3-ticker:hover { animation-play-state: paused; }
        .cl3-item {
          flex-shrink: 0;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 0 36px;
          height: 100px;
          border-right: 1px solid #F0F4FA;
          cursor: default;
          transition: background .2s;
          position: relative;
        }
        .cl3-item:hover { background: #F8FAFF; }
        .cl3-item:hover .cl3-img { transform: scale(1.06); }
        .cl3-img {
          height: 38px; max-width: 110px;
          object-fit: contain;
          display: block;
          transition: transform .3s;
        }
        .cl3-name { display: none; }
        .cl3-fade-l, .cl3-fade-r {
          position: absolute; top: 0; bottom: 0; width: 100px; z-index: 2; pointer-events: none;
        }
        .cl3-fade-l { left: 0; background: linear-gradient(to right, #fff, transparent); }
        .cl3-fade-r { right: 0; background: linear-gradient(to left, #fff, transparent); }
      `}</style>

      {/* ── Heading ── */}
      <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: 40 }}>
        <p style={{
          fontSize: 11, fontWeight: 700,
          letterSpacing: '.1em', textTransform: 'uppercase',
          color: '#94A3B8', marginBottom: 10,
        }}>
          TRUSTED BY LEADING BRANDS
        </p>
        <h2 style={{
          fontSize: 'clamp(22px,4vw,38px)',
          fontWeight: 900,
          color: '#0B1F4B',
          letterSpacing: '-.05em',
          lineHeight: 1.15,
          marginBottom: 12,
        }}>
          Companies That{' '}
          <span style={{
            background: 'linear-gradient(90deg,#2563EB,#06B6D4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Chose Us
          </span>
        </h2>
        <p style={{ fontSize: 14, color: '#64748B', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>
          From first-time founders to established enterprises — all built in-house, zero outsourced.
        </p>
      </div>

      {/* ── Stats row ── */}
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'center', gap: 12,
        padding: '0 24px', marginBottom: 40,
      }}>
        {STATS_LIST.map(s => (
          <div key={s.label} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: s.bg,
            border: `1.5px solid ${s.border}`,
            borderRadius: 14,
            padding: '12px 20px',
            minWidth: 140,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: s.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontSize: 13, fontWeight: 900, color: '#fff' }}>{s.n}</span>
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: s.color, lineHeight: 1.3 }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Logo ticker ── */}
      <div style={{ position: 'relative', borderTop: '1px solid #F0F4FA', borderBottom: '1px solid #F0F4FA' }}>
        <div className="cl3-fade-l" />
        <div className="cl3-fade-r" />
        <div style={{ overflow: 'hidden' }}>
          <div className="cl3-ticker">
            {ticker.map((c, i) => (
              <div key={i} className="cl3-item">
                <img src={c.logo} alt={c.name} className="cl3-img" style={c.logo === '/assets/st99.webp' ? { filter: 'brightness(0)' } : {}} />
                <span className="cl3-name">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
