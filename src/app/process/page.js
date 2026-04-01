import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE, PROCESS_STEPS } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Our Project Process | How NNC Delivers | Bangalore',
  description: "NNC's 6-step delivery: discovery, fixed quote, UI/UX, development, QA and handover. Your approval required at every stage. Zero surprises guaranteed.",
  alternates: { canonical: `${SITE.url}/process` },
}

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.25)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              How We Work · 6-Step Process
            </div>
            <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 16 }}>
              A Process Built Around<br /><span style={{ color: '#2196F3' }}>Your Confidence</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.72 }}>
              Fixed price agreed before a single wireframe is drawn. Weekly staging updates. You see progress every step of the way and pay the final balance only when you are satisfied.
            </p>
          </div>
        </section>

        {/* STEPS */}
        <section style={{ background: '#fff', padding: '80px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
            {PROCESS_STEPS.map((step, i) => {
              const isLast = i === PROCESS_STEPS.length - 1
              const color = isLast ? '#10B981' : '#2196F3'
              return (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '0 24px', alignItems: 'start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: color, color: '#fff', fontSize: 16, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 0 0 6px ${color}22` }}>
                      {step.num}
                    </div>
                    {!isLast && <div style={{ width: 2, flex: 1, background: '#E2E8F0', minHeight: 48, marginTop: 6 }} />}
                  </div>
                  <div style={{ paddingBottom: isLast ? 0 : 48 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                      <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.03em' }}>{step.title}</h2>
                      <span style={{ fontSize: 11, fontWeight: 700, color, background: `${color}18`, padding: '2px 10px', borderRadius: 20 }}>{step.time}</span>
                    </div>
                    <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.76, marginBottom: 16 }}>{step.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {i === 0 && ['Business goals review', 'Audience definition', 'Competitor analysis', 'Tech recommendation'].map(t => <span key={t} style={{ fontSize: 12, color: '#475569', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: 20 }}>{t}</span>)}
                      {i === 1 && ['Scope document', 'Fixed price in writing', 'Timeline agreed', 'Payment schedule'].map(t => <span key={t} style={{ fontSize: 12, color: '#475569', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: 20 }}>{t}</span>)}
                      {i === 2 && ['Figma wireframes', 'High-fidelity design', 'Mobile responsive', 'Unlimited revisions'].map(t => <span key={t} style={{ fontSize: 12, color: '#475569', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: 20 }}>{t}</span>)}
                      {i === 3 && ['Live staging URL', 'Weekly sprint updates', 'PM on WhatsApp/call', 'Friday progress reports'].map(t => <span key={t} style={{ fontSize: 12, color: '#475569', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: 20 }}>{t}</span>)}
                      {i === 4 && ['Cross-device testing', 'PageSpeed 90+ audit', 'On-page SEO', 'Security review'].map(t => <span key={t} style={{ fontSize: 12, color: '#475569', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: 20 }}>{t}</span>)}
                      {i === 5 && ['Live deployment', 'Source code delivery', 'All credentials handed over', '30-day support'].map(t => <span key={t} style={{ fontSize: 12, color: '#10B981', background: '#D1FAE5', border: '1px solid #A7F3D0', padding: '3px 10px', borderRadius: 20 }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* GUARANTEES */}
        <section style={{ background: '#071435', padding: '72px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', marginBottom: 10 }}>
                Written Into Every Contract
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,.4)', maxWidth: 480, margin: '0 auto' }}>
                These are not marketing promises. They are contractual commitments.
              </p>
            </div>
            <div className="row g-3">
              {[
                { n: '01', t: 'Fixed price no exceptions', d: 'The price in your proposal is the price you pay. Zero change orders, zero surprise invoices. Locked in writing before we start.' },
                { n: '02', t: 'PageSpeed 90+ guaranteed', d: 'Your website will score 90+ on Google PageSpeed on both mobile and desktop. Written into the contract. We fix it before final payment.' },
                { n: '03', t: 'Source code 100% yours', d: 'On delivery you receive every source file, credential and hosting login. Zero lock-in, zero ongoing obligation to NNC.' },
                { n: '04', t: 'Zero outsourcing commitment', d: 'Every person on your project is a full-time NNC employee. We will not subcontract any part of your project to a freelancer or third party.' },
              ].map((g, i) => (
                <div key={i} className="col-12 col-md-6 col-lg-3">
                  <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: '26px' }}>
                    <div style={{ fontSize: 44, fontWeight: 800, color: 'rgba(255,255,255,.06)', letterSpacing: '-.07em', lineHeight: 1, marginBottom: 8 }}>{g.n}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.25 }}>{g.t}</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', lineHeight: 1.65 }}>{g.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#F8FAFC', padding: '64px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', marginBottom: 14 }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ fontSize: 16, color: '#6B7A99', marginBottom: 28, lineHeight: 1.7 }}>
              Share your requirements. We respond with a full scope, timeline and fixed price within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                Get Free Quote <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href={SITE.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#0B1F4B', border: '1.5px solid #E2E8F0', padding: '13px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                {SITE.phone}
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
