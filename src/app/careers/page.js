import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import TeamPhoto from './TeamPhoto'
import JobOpenings from './JobOpenings'
import ApplyModal from './ApplyModal'

export const metadata = {
  title: 'Careers at NNC Digital | Join Our Team in Bangalore',
  description: 'NNC is hiring across design, development and digital marketing. Join a 35+ member in-house team at our Bengaluru, Mumbai or Mysuru office today.',
  alternates: { canonical: `${SITE.url}/careers` },
}

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
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
             
                <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 18 }}>
                  Join a Team That<br /><span style={{ color: '#2196F3' }}>Actually Builds Things</span>
                </h1>
                <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.58)', lineHeight: 1.74, maxWidth: 520 }}>
                  NNC is a 35+ member in-house team in Bengaluru. No outsourcing. No contractors. Every person you meet is permanent.{' '}
                  <strong style={{ color: 'rgba(255,255,255,.85)' }}>We are looking for people who want to build, not manage subcontractors.</strong>
                </p>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <TeamPhoto src={SITE.teamPhoto} />
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

        {/* OPENINGS client component with Apply Now popup */}
        <JobOpenings />

      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
      {/* Apply modal listens for open-apply event */}
      <ApplyModal />
    </>
  )
}
