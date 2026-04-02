import { WHY_NNC } from '@/data/siteData'

export default function WhyNNC() {
  return (
    <section className="why-section py-5" id="why" aria-label="Why Choose NNC">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(36px,6vw,80px) clamp(16px,4vw,24px)' }}>

        {/* Header */}
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
           
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Six Things We Do<br /><span className="sky">That Others Don&apos;t</span>
            </h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">
              These aren&apos;t promises on a website. They&apos;re verifiable facts about how NNC operates every single day
              facts you can confirm by walking into any of our four offices.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="row g-0">
          {WHY_NNC.map((w, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="why-card h-100 anim" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="wc-n">{w.num}</div>
                <div className="wc-title mb-2">{w.title}</div>
                <p className="wc-body mb-3">{w.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
