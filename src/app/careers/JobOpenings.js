'use client'
import { SITE } from '@/data/siteData'

const OPENINGS = [
  { role: 'React JS Developer', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '2–5 years', skills: ['React JS', 'Next JS', 'Node JS', 'MongoDB'] },
  { role: 'React Native / Flutter Developer', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '2–5 years', skills: ['React Native', 'Flutter', 'REST APIs', 'Firebase'] },
  { role: 'UI/UX Designer', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '2–4 years', skills: ['Figma', 'Adobe XD', 'Prototyping', 'Web Design'] },
  { role: 'SEO & Digital Marketing Specialist', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '1–3 years', skills: ['Google Ads', 'Meta Ads', 'On-page SEO', 'Analytics'] },
  { role: '2D Animation Artist', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '2–4 years', skills: ['Adobe Animate', 'After Effects', 'Toon Boom', 'Character Animation'] },
  { role: 'Business Development Executive', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '1–3 years', skills: ['B2B Sales', 'Proposal Writing', 'Client Management', 'Digital Services'] },
]

export default function JobOpenings() {
  const openApply = (role) => {
    window.dispatchEvent(new CustomEvent('open-apply', { detail: { role } }))
  }

  return (
    <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-5 anim">
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 10 }}>Current Openings</h2>
          <p style={{ fontSize: 16, color: '#6B7A99' }}>All roles are full-time, in-office positions at our Bengaluru headquarters.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {OPENINGS.map((job, i) => (
            <div key={i} className="anim" style={{ transitionDelay: `${i * .07}s`, background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14, padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', transition: 'all .2s' }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.025em', marginBottom: 6 }}>{job.role}</div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {[job.type, job.location, job.exp].map(tag => (
                    <span key={tag} style={{ fontSize: 11.5, fontWeight: 600, color: '#6B7A99', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '2px 10px', borderRadius: 20 }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {job.skills.map(s => (
                  <span key={s} style={{ fontSize: 11.5, fontWeight: 700, color: '#2196F3', background: '#EFF6FF', padding: '3px 10px', borderRadius: 20 }}>{s}</span>
                ))}
              </div>
              <button
                onClick={() => openApply(job.role)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2196F3', color: '#fff', padding: '10px 20px', borderRadius: 8, fontWeight: 700, fontSize: 13.5, border: 'none', cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap', transition: 'background .2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#1565C0'}
                onMouseLeave={e => e.currentTarget.style.background = '#2196F3'}
              >
                Apply Now
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          ))}
        </div>

        {/* Open application */}
        <div style={{ marginTop: 32, textAlign: 'center', padding: '24px', background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14 }}>
          <p style={{ fontSize: 15, color: '#6B7A99', marginBottom: 14 }}>Don&apos;t see a role that fits? We&apos;re always open to hearing from talented people.</p>
          <button
            onClick={() => openApply('Open Application')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#0B1F4B', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}
          >
            Send Open Application
          </button>
        </div>
      </div>
    </section>
  )
}
