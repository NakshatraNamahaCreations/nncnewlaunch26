import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Client Reviews | 4.9 Google Rating | NNC Bangalore',
  description: '87 verified Google reviews at 4.9 star NNC. Real client feedback on website, app and digital marketing projects delivered by NNC across India. Read them.',
  alternates: { canonical: `${SITE.url}/client-reviews` },
}

const REVIEWS = [
  { name: 'Puran Interiors', type: 'Interior Design · Bengaluru', stars: 5, text: 'NNC delivered a website that changed how our business operates online. Within 90 days we were on page 1 and receiving 12+ qualified enquiries per month that didn\'t exist before. Professional, communicative and on budget.', result: '12+ enquiries/month' },
  { name: 'Make My Documents', type: 'Document Services · Bengaluru', stars: 5, text: 'Professional, responsive and ensured the website was designed exactly as I envisioned. Clean, functional and user-friendly. A special thanks to the entire NNC team.', result: 'On time & on budget' },
  { name: 'Chaandini Srinivas', type: 'Client · Bengaluru', stars: 5, text: 'Our business consultant at NNC is excellent in understanding client requirements. The best support team — they guide and improve your ideas and deliver what they promise.', result: 'Ongoing relationship' },
  { name: 'Vijaya Home Services', type: 'On-demand Platform · Bengaluru', stars: 5, text: 'NNC built our entire on-demand app from scratch. The team was incredibly professional and understood exactly what we needed. The app has been running perfectly since launch.', result: '340% booking growth' },
  { name: 'HealthCare Solutions', type: 'Healthcare Tech · Bengaluru', stars: 5, text: 'Excellent experience working with NNC. They understood our vision completely and delivered a mobile app that exceeded expectations. The team was always responsive and available.', result: '10K+ downloads' },
  { name: 'Fashion House India', type: 'E-commerce · Mumbai', stars: 5, text: 'The team at NNC built our e-commerce platform from scratch with all integrations working perfectly on day one. Best web development company in Bangalore by far.', result: 'Live on schedule' },
  { name: 'Logistics Corp', type: 'Logistics · Hyderabad', stars: 5, text: 'NNC understood exactly what we needed for our CRM system. The development was clean, well documented and the team trained our staff properly. Highly recommend.', result: 'CRM delivered on time' },
  { name: 'Avyakth Roofing', type: 'Construction · Bengaluru', stars: 5, text: 'NNC gave us a complete brand identity and website in 4 weeks. We went from zero online presence to receiving calls every day within a month of launch.', result: '3× more enquiries' },
  { name: 'Ganesh Interiors', type: 'Interior Design · Bengaluru', stars: 5, text: 'The SEO work NNC did for us was outstanding. We\'re now ranking for our main keywords in Bangalore and getting consistent organic leads every week.', result: 'Page 1 Google · 90 days' },
]

export default function ClientReviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(245,158,11,.15)', border: '1px solid rgba(245,158,11,.3)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: '#F59E0B', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              87 Verified Google Reviews
            </div>
            <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 16 }}>
              What Our Clients<br /><span style={{ color: '#2196F3' }}>Say About NNC</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              87 verified reviews published publicly on Google. Not a curated list — a verifiable public record anyone can check.
            </p>
          </div>
        </section>

        {/* RATING SUMMARY */}
        <section style={{ background: '#fff', padding: '48px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '28px 32px', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center', minWidth: 110 }}>
                <div style={{ fontSize: 56, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.06em', lineHeight: 1 }}>4.9</div>
                <div style={{ color: '#F59E0B', fontSize: 20, letterSpacing: '2px', marginTop: 4 }}>★★★★★</div>
                <div style={{ fontSize: 12.5, color: '#94A3B8', marginTop: 5 }}>87 Google reviews</div>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                {[[5, 92], [4, 5], [3, 2], [2, 1], [1, 0]].map(([stars, pct]) => (
                  <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ fontSize: 12.5, color: '#94A3B8', width: 16 }}>{stars}</span>
                    <div style={{ flex: 1, background: '#E2E8F0', borderRadius: 4, height: 7 }}>
                      <div style={{ width: `${pct}%`, background: '#F59E0B', height: 7, borderRadius: 4 }} />
                    </div>
                    <span style={{ fontSize: 11.5, color: '#94A3B8', width: 30 }}>{Math.round(87 * pct / 100)}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="https://www.google.com/maps/search/nakshatra+namaha+creations" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '12px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                  View All on Google <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <div style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center' }}>Updated regularly · Verified reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS GRID */}
        <section style={{ background: '#F8FAFC', padding: '64px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="row g-4">
              {REVIEWS.map((r, i) => (
                <div key={i} className="col-12 col-md-6 col-lg-4">
                  <div style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14, padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 14, right: 18, fontSize: 56, color: '#DBEAFE', lineHeight: 1, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                    <div style={{ color: '#F59E0B', fontSize: 14, letterSpacing: '1.5px', marginBottom: 12 }}>{'★'.repeat(r.stars)}</div>
                    <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.74, marginBottom: 16, flex: 1 }}>&ldquo;{r.text}&rdquo;</p>
                    <div style={{ paddingTop: 14, borderTop: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#0B1F4B', marginBottom: 2 }}>{r.name}</div>
                      <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 8 }}>{r.type}</div>
                      <span style={{ display: 'inline-flex', fontSize: 11, fontWeight: 700, color: '#2196F3', background: '#EFF6FF', padding: '2px 9px', borderRadius: 20 }}>✓ {r.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#071435', padding: '64px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', marginBottom: 14 }}>
              Ready to Be Our Next <span style={{ color: '#2196F3' }}>Success Story?</span>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 28, lineHeight: 1.7 }}>
              Join 565+ businesses that trusted NNC to build, market and grow their digital presence.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                Start Your Project <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href={SITE.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,.7)', border: '1.5px solid rgba(255,255,255,.22)', padding: '13px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
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
