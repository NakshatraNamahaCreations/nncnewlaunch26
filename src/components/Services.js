'use client'
import { SERVICES } from '@/data/siteData'

export default function Services() {
  return (
    <section className="svc-sec py-5" id="services" aria-label="Our Services">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
        
            <h2 className="sec-h">Eight Services.<br /><span className="sky">Zero Outsourcing.</span></h2>
          </div>
          <div className="col-lg-7 d-flex flex-column justify-content-end">
            <p className="sec-sub mb-3">
              NNC&apos;s in-house team covers the complete digital stack.{' '}
              <strong>Every project is built by permanent NNC employees.</strong>{' '}
              You can walk into any office and meet the team.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-sky fw-bold px-4"
                onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}>
                Start Your Project →
              </button>
           
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="row g-3">
          {SERVICES.map((s, i) => (
            <div key={s.id} className="col-12 col-sm-6 col-xl-3">
              <a href={s.slug}
                 className="svc-card d-block text-decoration-none anim"
                 style={{ transitionDelay: `${i * 0.06}s` }}
                 aria-label={`Learn about ${s.name}`}>
                {/* Icon */}
                <div className="svc-ico mb-3" style={{ background: s.iconBg }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                       stroke={s.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>

                <div className="svc-name mb-2">{s.name}</div>
                <div className="svc-body mb-3">{s.desc}</div>

                {/* Features */}
                <div className="mb-3">
                  {s.features.map((f, fi) => (
                    <div key={fi} className="svc-feat mb-2">
                      <div className="sfc-ck" style={{ background: s.iconBg }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none"
                             stroke={s.iconColor} strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="svc-link mt-auto">
                  Learn more
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
