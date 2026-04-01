import Navbar from '@/components/Navbar'
import { Footer, WaFloat } from '@/components/Sections'
import BtsContent from './BtsContent'

export const metadata = {
  title: 'Behind The Scenes | NNC Team & Culture | Nakshatra Namaha Creations',
  description: 'Go behind the scenes at NNC — our team, our process, our culture. 35+ in-house specialists building real products every day.',
}

export default function BehindTheScenesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg,#020C1F 0%,#071630 45%,#0B2149 100%)',
          padding: 'clamp(48px,8vw,72px) 0 clamp(40px,6vw,60px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Dot grid */}
          <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,255,255,.045) 1px,transparent 1px)', backgroundSize:'26px 26px', pointerEvents:'none' }} />
          {/* Glow blob */}
          <div style={{ position:'absolute', top:'-80px', left:'50%', transform:'translateX(-50%)', width:'clamp(280px,80vw,600px)', height:'clamp(140px,40vw,300px)', background:'radial-gradient(ellipse,rgba(245,158,11,.18) 0%,transparent 70%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1220, margin:'0 auto', padding:'0 clamp(16px,4vw,24px)', textAlign:'center', position:'relative', zIndex:1 }}>

            <h1 style={{
              fontSize: 'clamp(26px,5vw,54px)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-.06em',
              lineHeight: 1.05,
              marginBottom: 18,
            }}>
              Behind The{' '}
              <span style={{
                background: 'linear-gradient(90deg,#F59E0B,#FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Scenes
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(13px,2.5vw,15.5px)',
              color: 'rgba(255,255,255,.48)',
              maxWidth: '100%',
              margin: '0 auto 28px',
              lineHeight: 1.75,
            }}>
              A candid look into how NNC&apos;s 35+ member team builds, creates and delivers every day.
            </p>

            {/* Stat pills */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center' }}>
              {[
                { n: '35+', l: 'Team Members' },
                { n: '8+', l: 'Years Together' },
                { n: '565+', l: 'Projects Delivered' },
                { n: '10+', l: 'Industries' },
              ].map(s => (
                <div key={s.l} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.1)',
                  padding: 'clamp(6px,1.5vw,8px) clamp(10px,3vw,16px)', borderRadius: 30,
                  backdropFilter: 'blur(8px)',
                }}>
                  <span style={{ fontSize:'clamp(13px,3vw,16px)', fontWeight:900, color:'#fff' }}>{s.n}</span>
                  <span style={{ fontSize:'clamp(10px,2vw,12px)', color:'rgba(255,255,255,.5)', fontWeight:600 }}>{s.l}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Content */}
        <BtsContent />
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}
