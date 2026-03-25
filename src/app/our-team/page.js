import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Our In-house Team | 35+ Permanent Specialists | NNC Digital',
  description: 'Meet NNC Digital\'s 35+ permanent in-house specialists in Bengaluru. No freelancers, no outsourcing — every person you meet is a full-time NNC employee.',
  alternates: { canonical: `${SITE.url}/our-team` },
}

const TEAM = [
  { initials: 'HK', name: 'Harish Kashyap', role: 'Founder & Managing Director', color1: '#2196F3', color2: '#1565C0', bio: 'Founded NNC in Bengaluru in 2015. Oversees all client strategy, product architecture and business development across four offices.' },
  { initials: 'K', name: 'Kavana', role: 'Lead UI/UX Designer', color1: '#10B981', color2: '#065F46', bio: 'Leads UI/UX design across all web and mobile projects. Specialises in conversion-focused design systems for Indian and international markets.' },
  { initials: 'A', name: 'Anil', role: 'Senior Full-stack Developer', color1: '#F59E0B', color2: '#92400E', bio: 'Full-stack developer specialising in React JS, Next JS and Node JS. 80+ projects delivered in 6 years at NNC.' },
  { initials: 'Y', name: 'Yogesh', role: 'Mobile App Developer', color1: '#7C3AED', color2: '#4C1D95', bio: 'React Native and Flutter specialist. Handles all mobile app projects from architecture to Play Store and App Store submission.' },
  { initials: 'RK', name: 'Rakesh Kumar', role: 'Backend Developer', color1: '#EF4444', color2: '#991B1B', bio: 'Node JS and MongoDB specialist. Builds CRM systems, SaaS platforms and REST APIs for complex enterprise applications.' },
  { initials: 'PM', name: 'Priya M', role: 'Digital Marketing Lead', color1: '#2196F3', color2: '#1565C0', bio: 'Heads Google Ads, Meta Ads and SEO strategy. Managed 100+ brand campaigns across healthcare, real estate and e-commerce.' },
  { initials: 'SN', name: 'Suresh N', role: '2D Animation Director', color1: '#10B981', color2: '#065F46', bio: 'Adobe Animate and After Effects specialist. Scripts, storyboards and delivers all explainer animation projects in-house.' },
  { initials: 'DR', name: 'Divya R', role: 'Project Manager', color1: '#F59E0B', color2: '#92400E', bio: 'Manages end-to-end delivery for all development projects. Every client has a named PM — that\'s Divya for most web projects.' },
]

const ROLES_BREAKDOWN = [
  { dept: 'Development', count: 12, roles: 'React JS, Node JS, React Native, Flutter, Full-stack', color: '#2196F3' },
  { dept: 'Design & UI/UX', count: 6, roles: 'Figma, Adobe Suite, Branding, Motion Design', color: '#7C3AED' },
  { dept: 'Digital Marketing', count: 8, roles: 'Google Ads, Meta Ads, SEO, Social Media', color: '#10B981' },
  { dept: 'Video & Animation', count: 5, roles: '4K Production, 2D Animation, Motion Graphics', color: '#EF4444' },
  { dept: 'Project Management', count: 4, roles: 'Delivery, Client Communication, QA', color: '#F59E0B' },
]

export default function OurTeamPage() {
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
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.25)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  35+ Permanent Specialists · All In-house
                </div>
                <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 18 }}>
                  The People Who Actually<br /><span style={{ color: '#2196F3' }}>Build Your Product</span>
                </h1>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', lineHeight: 1.74, maxWidth: 520 }}>
                  Permanent employees. Not freelancers. Not contractors. The people you meet in the proposal are the people who build, test and deliver your project — then answer your calls after launch.
                </p>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {ROLES_BREAKDOWN.map(r => (
                    <div key={r.dept} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: `${r.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: 16, fontWeight: 800, color: r.color }}>{r.count}</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 13.5, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{r.dept}</div>
                        <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.35)' }}>{r.roles}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM GRID */}
        <section style={{ background: '#fff', padding: '80px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#2196F3', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 10 }}>Leadership & Specialists</div>
              <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em' }}>
                Meet the Core Team
              </h2>
            </div>
            <div className="row g-4">
              {TEAM.map((m, i) => (
                <div key={i} className="col-12 col-sm-6 col-lg-3">
                  <div className="card-hover" style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, overflow: 'hidden', height: '100%' }}>
                    <div style={{ height: 90, background: `linear-gradient(135deg,${m.color1},${m.color2})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,.2)', border: '2px solid rgba(255,255,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800, color: '#fff' }}>
                        {m.initials}
                      </div>
                    </div>
                    <div style={{ padding: '18px 20px 22px' }}>
                      <div style={{ fontSize: 15.5, fontWeight: 800, color: '#0B1F4B', marginBottom: 3 }}>{m.name}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: m.color1, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 10 }}>{m.role}</div>
                      <p style={{ fontSize: 12.5, color: '#94A3B8', lineHeight: 1.6 }}>{m.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 32, padding: '24px', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 14 }}>
              <p style={{ fontSize: 15, color: '#475569', marginBottom: 4 }}>
                And <strong style={{ color: '#0B1F4B' }}>27 more permanent specialists</strong> across development, design, marketing and production.
              </p>
              <p style={{ fontSize: 13, color: '#94A3B8' }}>All based in Bengaluru · Full-time employees · Available in-office Mon–Sat 9am–7pm</p>
            </div>
          </div>
        </section>

        {/* JOIN US */}
        <section style={{ background: '#071435', padding: '72px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(16,185,129,.15)', border: '1px solid rgba(16,185,129,.3)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: '#10B981', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              We Are Hiring · Bengaluru
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', marginBottom: 14 }}>
              Join a Team That Actually <span style={{ color: '#2196F3' }}>Builds Things</span>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 28, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 28px' }}>
              Full-time in-office positions in Bengaluru. React JS, React Native, Flutter, UI/UX, SEO and Digital Marketing.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/careers" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                View Open Positions <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
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
