import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Careers at NNC Digital | Join Our In-house Team | Bengaluru',
  description: 'Join NNC Digital\'s 35+ member in-house team in Bengaluru. We hire React JS, React Native, Flutter developers, UI/UX designers, SEO specialists and digital marketers.',
  alternates: { canonical: `${SITE.url}/careers` },
}

const OPENINGS = [
  { role: 'React JS Developer', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '2–5 years', skills: ['React JS', 'Next JS', 'Node JS', 'MongoDB'] },
  { role: 'React Native / Flutter Developer', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '2–5 years', skills: ['React Native', 'Flutter', 'REST APIs', 'Firebase'] },
  { role: 'UI/UX Designer', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '2–4 years', skills: ['Figma', 'Adobe XD', 'Prototyping', 'Web Design'] },
  { role: 'SEO & Digital Marketing Specialist', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '1–3 years', skills: ['Google Ads', 'Meta Ads', 'On-page SEO', 'Analytics'] },
  { role: '2D Animation Artist', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '2–4 years', skills: ['Adobe Animate', 'After Effects', 'Toon Boom', 'Character Animation'] },
  { role: 'Business Development Executive', type: 'Full-time', location: 'Bengaluru (In-office)', exp: '1–3 years', skills: ['B2B Sales', 'Proposal Writing', 'Client Management', 'Digital Services'] },
]

const PERKS = [
  { ico: '🏢', title: 'In-office culture', desc: 'A real team. Real collaboration. Not a remote gig.' },
  { ico: '📈', title: 'Fast growth', desc: 'We promote from within. Multiple team leads started as developers.' },
  { ico: '🛠️', title: 'Real projects', desc: '565+ live products. You build things that actually reach users.' },
  { ico: '💡', title: 'Skill development', desc: 'Training budget, tech sessions, certifications supported.' },
  { ico: '🤝', title: 'Honest culture', desc: 'Transparent feedback, no politics. We say what we mean.' },
  { ico: '📍', title: '4 offices', desc: 'Bengaluru, Mumbai, Mysuru and Hyderabad.' },
]

export default function CareersPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(16,185,129,.15)', border: '1px solid rgba(16,185,129,.3)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: '#10B981', letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  We Are Hiring · Bengaluru
                </div>
                <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 18 }}>
                  Join a Team That<br /><span style={{ color: '#2196F3' }}>Actually Builds Things</span>
                </h1>
                <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.58)', lineHeight: 1.74, maxWidth: 520 }}>
                  NNC is a 35+ member in-house team in Bengaluru. No outsourcing. No contractors. Every person you meet is permanent. <strong style={{ color: 'rgba(255,255,255,.85)' }}>We are looking for people who want to build, not manage subcontractors.</strong>
                </p>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)', boxShadow: '0 16px 40px rgba(0,0,0,.3)' }}>
                  <img src={SITE.teamPhoto} alt="NNC Bengaluru team" style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }} loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERKS */}
        <section style={{ background: '#fff', padding: '72px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="text-center mb-5 anim">
              <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em' }}>Why Work at NNC</h2>
            </div>
            <div className="row g-3">
              {PERKS.map((p, i) => (
                <div key={i} className="col-12 col-sm-6 col-lg-4 anim" style={{ transitionDelay: `${i * .07}s` }}>
                  <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 14, padding: '24px 22px', transition: 'all .2s' }}>
                    <div style={{ fontSize: 30, marginBottom: 12 }}>{p.ico}</div>
                    <div style={{ fontSize: 15.5, fontWeight: 700, color: '#0B1F4B', marginBottom: 7 }}>{p.title}</div>
                    <p style={{ fontSize: 13.5, color: '#6B7A99', lineHeight: 1.6, marginBottom: 0 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPENINGS */}
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
                  <a href={`mailto:${SITE.email}?subject=Application: ${job.role}`} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2196F3', color: '#fff', padding: '10px 20px', borderRadius: 8, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' }}>
                    Apply Now <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, textAlign: 'center', padding: '24px', background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14 }}>
              <p style={{ fontSize: 15, color: '#6B7A99', marginBottom: 14 }}>Don&apos;t see a role that fits? We&apos;re always open to hearing from talented people.</p>
              <a href={`mailto:${SITE.email}?subject=Open Application — NNC Digital`} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#0B1F4B', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Send Open Application
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
