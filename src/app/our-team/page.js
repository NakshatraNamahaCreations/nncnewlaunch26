import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Our In-house Team | NNC Digital Agency | Bangalore',
  description: "NNC's 35+ permanent designers, developers and marketers across 4 India offices. View profiles, no outsourcing ever. Walk in and meet the team.",
  alternates: { canonical: `${SITE.url}/our-team` },
}

// Row 1 Founders / Leadership (2 cards, displayed larger & centred)
const TEAM_ROW1 = [
  { name: 'Harish Kashyap', role: 'Founder & Managing Director',  photo: '/team-12.jpg' },
  { name: 'Anjana DR',       role: 'Operations',                   photo: '/team-22.jpg' },
   { name: 'Nithin',              role: 'Business Development Manager',       bg: '#EF4444',photo: '/team-18.jpg' },
]

// Row 2 Senior Team (5 cards)
const TEAM_ROW2 = [
  { name: 'Anil Dev',    role: 'Sr UI/UX Designer',      bg: '#1E40AF', photo: '/team-3.jpg' },
  { name: 'Yogesh PV',   role: 'Sr Full Stack Developer', bg: '#2DD4BF', photo: '/team-25.jpg' },
  { name: 'Suman Raj',   role: 'Sr Full Stack Developer', bg: '#7C3AED', photo: '/team-10.jpg' },
  { name: 'Kavana NP',   role: 'Sr Website Developer',    bg: '#D97706', photo: '/team-15.jpg' },
  { name: 'Jyanth P',    role: 'Sr Flutter Developer',    bg: '#F97316' ,photo: '/team-20.jpg'},
]

// Row 3 Team (5 cards)
const TEAM_ROW3 = [
  { name: 'Kiruthika M',         role: 'Full Stack Developer',    bg: '#A78BFA' ,photo: '/team-21.jpg'},
  { name: 'Dashwanth',           role: 'Motion Graphic Designer', bg: '#34D399' ,photo: '/team-24.jpg'},
  { name: 'SingamSetty Sathish', role: 'QA Tester',               bg: '#60A5FA',photo: '/team-1.jpg' },
  { name: 'Aishwarya',         role: 'Project Co-ordinator',       bg: '#FDA4AF',photo: '/team-23.jpg' },
 
]

const ROLES_BREAKDOWN = [
  { dept: 'Development',        count: 12, roles: 'React JS, Node JS, React Native, Flutter', color: '#2196F3' },
  { dept: 'Design & UI/UX',    count: 6,  roles: 'Figma, Adobe Suite, Branding, Motion',     color: '#7C3AED' },
  { dept: 'Digital Marketing', count: 8,  roles: 'Google Ads, Meta Ads, SEO, Social Media',  color: '#10B981' },
  { dept: 'Video & Animation', count: 5,  roles: '4K Production, 2D Animation, Motion Gfx',  color: '#EF4444' },
  { dept: 'Project Management',count: 4,  roles: 'Delivery, Client Communication, QA',        color: '#F59E0B' },
]

function TeamCard({ m }) {
  const initials = m.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Photo / initials block white background, no colour */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '120%',
        overflow: 'hidden',
        marginBottom: 16,
      }}>
        {m.photo ? (
          <img
            src={m.photo}
            alt={m.name}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 10%',
              display: 'block',
            }}
          />
        ) : (
          /* Initials neutral background, coloured circle */
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: m.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, fontWeight: 900, color: '#fff',
              letterSpacing: '-.02em',
              boxShadow: `0 4px 16px ${m.bg}55`,
            }}>{initials}</div>
          </div>
        )}
      </div>

      <div style={{ fontSize: 15, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.03em', marginBottom: 4 }}>{m.name}</div>
      <div style={{ fontSize: 10.5, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.08em' }}>{m.role}</div>
    </div>
  )
}

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
                  Permanent employees. Not freelancers. Not contractors. The people you meet in the proposal are the people who build, test and deliver your project.
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
        <section style={{ background: '#fff', padding: '88px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>

            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 12 }}>
                Our leadership team
              </h2>
              <p style={{ fontSize: 16.5, color: '#94A3B8', maxWidth: 520, margin: '0 auto' }}>
                With over 8 years of combined expertise, we&apos;ve built a well-seasoned team delivering real digital outcomes.
              </p>
            </div>

            {/* All team 5 per row, founders first */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '56px 28px' }}>
              {[...TEAM_ROW1, ...TEAM_ROW2, ...TEAM_ROW3].map((m, i) => (
                <TeamCard key={i} m={m} />
              ))}
            </div>

          
          </div>
        </section>

        {/* JOIN US */}
        <section style={{ background: '#071435', padding: '72px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
           
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', marginBottom: 14 }}>
              Join a Team That Actually <span style={{ color: '#2196F3' }}>Builds Things</span>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 28px' }}>
              Full-time in-office positions in Bengaluru. React JS, React Native, Flutter, UI/UX, SEO and Digital Marketing.
            </p>
            <Link href="/careers" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
              View Open Positions
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
