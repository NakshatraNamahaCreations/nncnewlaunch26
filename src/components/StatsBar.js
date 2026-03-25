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
  const doubled = [...CLIENTS, ...CLIENTS]
  return (
    <section className="clients-band">
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
   
        <h3 className="cl-heading">Companies That <span style={{ color: 'var(--sky)' }}>Trust Us</span></h3>
      </div>
      <div className="cl-track-wrap">
        <div className="cl-fade cl-fade-l" />
        <div className="cl-fade cl-fade-r" />
        <div className="cl-track">
          {doubled.map((c, i) => (
            <div key={i} className="cl-card">
              <div className="cl-icon">
                {c.charAt(0)}
              </div>
              <span className="cl-card-name">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
