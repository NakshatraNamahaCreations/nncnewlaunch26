import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import OurWorksContent from './OurWorksContent'

export const metadata = {
  title: 'Our Work | 565+ Projects Delivered | NNC Bangalore',
  description: '565+ projects: 200+ websites, 150+ apps, 60+ CRM platforms, 90+ videos and 100+ branding projects. All built in-house across 10+ industries.',
  alternates: { canonical: `${SITE.url}/our-works` },
}

export default function OurWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{
          background: 'linear-gradient(135deg,#020C1F 0%,#071630 45%,#0B2149 100%)',
          padding: 'clamp(48px,8vw,72px) 0 clamp(40px,6vw,60px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Dot grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.045) 1px,transparent 1px)', backgroundSize: '26px 26px' }} />
          {/* Glow blob */}
          <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: 'clamp(280px,80vw,600px)', height: 'clamp(140px,40vw,300px)', background: 'radial-gradient(ellipse,rgba(99,102,241,.18) 0%,transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 clamp(16px,4vw,24px)', textAlign: 'center', position: 'relative', zIndex: 1 }}>

            {/* Heading */}
            <h1 style={{
              fontSize: 'clamp(26px,5vw,54px)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-.06em',
              lineHeight: 1.05,
              marginBottom: 18,
            }}>
              Work We Are{' '}
              <span style={{
                background: 'linear-gradient(90deg,#6366F1,#2563EB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Proud Of
              </span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: 'clamp(13px,2.5vw,15.5px)',
              color: 'rgba(255,255,255,.48)',
              maxWidth: '100%',
              margin: '0 auto 28px',
              lineHeight: 1.75,
            }}>
              Every project built by permanent NNC employees.<br />
              Not a single deliverable outsourced.
            </p>

            {/* Stat pills */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              gap: 8, justifyContent: 'center',
            }}>
              {[
                { n: '200+', l: 'Websites' },
                { n: '150+', l: 'Mobile Apps' },
                { n: '60+', l: 'CRM Platforms' },
                { n: '90+', l: 'Videos' },
              ].map(s => (
                <div key={s.l} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.1)',
                  padding: 'clamp(6px,1.5vw,8px) clamp(10px,3vw,16px)', borderRadius: 30,
                  backdropFilter: 'blur(8px)',
                }}>
                  <span style={{ fontSize: 'clamp(13px,3vw,16px)', fontWeight: 900, color: '#fff' }}>{s.n}</span>
                  <span style={{ fontSize: 'clamp(10px,2vw,12px)', color: 'rgba(255,255,255,.5)', fontWeight: 600 }}>{s.l}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORKS GRID WITH FILTERS */}
        <OurWorksContent />

      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
