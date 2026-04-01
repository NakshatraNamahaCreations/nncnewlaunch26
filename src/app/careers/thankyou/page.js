import Navbar from '@/components/Navbar'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Application Received | Careers at NNC Digital',
  description: 'Thank you for applying at NNC Digital. We have received your application and our HR team will get back to you within 48 hours.',
  alternates: { canonical: `${SITE.url}/careers/thankyou` },
  robots: { index: false },
}

const STEPS = [
  {
    num: '1',
    title: 'Application Review',
    desc: 'Our HR team reviews your resume and application within 48 hours.',
    color: '#2196F3',
  },
  {
    num: '2',
    title: 'Screening Call',
    desc: 'A quick 15–20 min call to understand your background and expectations.',
    color: '#10B981',
  },
  {
    num: '3',
    title: 'Technical Round',
    desc: 'Role-specific assignment or interview with the team lead.',
    color: '#F59E0B',
  },
  {
    num: '4',
    title: 'Final Interview & Offer',
    desc: "Meet the founders. If it's a fit, we move fast with an offer.",
    color: '#7C3AED',
  },
]

export default function CareerThankyouPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{
          background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Dot grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

          {/* Glow */}
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle,rgba(33,150,243,.08) 0%,transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>

            {/* Icon */}
            <div style={{ position: 'relative', display: 'inline-flex', marginBottom: 32 }}>
              <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'rgba(16,185,129,.12)', border: '2px solid rgba(16,185,129,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17 4 12" />
                </svg>
              </div>
              {/* Pulse rings */}
              <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '1.5px solid rgba(16,185,129,.15)', animation: 'ping 2s cubic-bezier(0,0,.2,1) infinite' }} />
              <div style={{ position: 'absolute', inset: -16, borderRadius: '50%', border: '1px solid rgba(16,185,129,.07)', animation: 'ping 2s cubic-bezier(0,0,.2,1) infinite .4s' }} />
            </div>

            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(16,185,129,.12)', border: '1px solid rgba(16,185,129,.25)', padding: '5px 16px', borderRadius: 30, marginBottom: 20, fontSize: 11.5, fontWeight: 700, color: '#10B981', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              Application Received
            </div>

            <h1 style={{ fontSize: 'clamp(34px,5.5vw,58px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.05, marginBottom: 18 }}>
              We&apos;ve Got<br />
              <span style={{ color: '#2196F3' }}>Your Application!</span>
            </h1>

            <p style={{ fontSize: 17, color: 'rgba(255,255,255,.6)', lineHeight: 1.75, marginBottom: 10, maxWidth: 520, margin: '0 auto 10px' }}>
              Thank you for applying at <strong style={{ color: '#fff' }}>Nakshatra Namaha Creations</strong>. Our HR team will review your profile and get back to you within{' '}
              <strong style={{ color: '#fff' }}>48 hours.</strong>
            </p>

            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.35)', lineHeight: 1.7, marginBottom: 48, maxWidth: 460, margin: '10px auto 48px' }}>
              We review every application personally. If your profile is a match, you&apos;ll hear from us with next steps.
            </p>

            {/* Process steps */}
            <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: '32px 28px', marginBottom: 40, textAlign: 'left' }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 24, textAlign: 'center' }}>
                What happens next
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 20 }}>
                {STEPS.map((s) => (
                  <div key={s.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${s.color}22`, border: `2px solid ${s.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: s.color, flexShrink: 0 }}>
                      {s.num}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{s.title}</div>
                      <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.35)', lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact strip */}
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.3)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '.08em' }}>Have a question?</p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={SITE.phoneHref}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 10, fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}?subject=Career Application Follow-up`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 10, fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  {SITE.email}
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
              {[
                { icon: 'M20 6 9 17 4 12', text: '35+ In-house Team' },
                { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', text: '4.9★ Glassdoor Culture' },
                { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Transparent Process' },
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={b.icon} />
                  </svg>
                  {b.text}
                </div>
              ))}
            </div>

            {/* CTA links */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/careers"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '11px 22px', background: '#2196F3', borderRadius: 9, fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                View All Openings
              </Link>
              <Link href="/"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '11px 22px', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 9, fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}>
                Back to Home
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WaFloat />

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </>
  )
}
