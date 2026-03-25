import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing Guide | Website, App, Marketing | NNC Digital',
  description: 'NNC Digital pricing guide. Website from ₹24,999. Mobile apps from ₹75,000. All fixed price. No hourly billing, no surprises. Get a free quote within 24 hours.',
  alternates: { canonical: `${SITE.url}/pricing` },
}

const PACKAGES = [
  {
    name: 'Website Development',
    start: '₹24,999',
    suffix: 'onwards',
    color: '#2196F3',
    bg: 'rgba(33,150,243,.1)',
    ico: 'M3 3h18v14H3zM8 21h8M12 17v4',
    plans: [
      { label: 'Starter Website', price: '₹24,999', desc: '5–8 pages, corporate website, React JS, mobile responsive, basic SEO' },
      { label: 'Business Website', price: '₹45,000', desc: '10–15 pages, blog, enquiry forms, CMS, on-page SEO, AWS hosting' },
      { label: 'E-commerce', price: '₹65,000', desc: 'Product catalogue, Razorpay/Stripe, inventory, order management, admin panel' },
      { label: 'Custom Web App', price: 'Custom', desc: 'Portals, SaaS, booking platforms — scoped individually with fixed price' },
    ],
    includes: ['React JS / Next JS', 'Mobile responsive', 'PageSpeed 90+ guaranteed', 'On-page SEO', 'Source code 100% yours', 'AWS deployment support'],
  },
  {
    name: 'Mobile App Development',
    start: '₹75,000',
    suffix: 'onwards',
    color: '#10B981',
    bg: 'rgba(16,185,129,.1)',
    ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z',
    popular: true,
    plans: [
      { label: 'MVP App', price: '₹75,000', desc: 'Cross-platform, core features only, React Native, Play Store deployment' },
      { label: 'Business App', price: '₹1,50,000', desc: 'Android + iOS, admin dashboard, push notifications, payment integration' },
      { label: 'Enterprise App', price: '₹3,00,000+', desc: 'Complex workflows, CRM integration, ERP, multi-role, advanced analytics' },
      { label: 'Custom Scope', price: 'Custom', desc: 'Fully scoped to your requirements with fixed price agreed upfront' },
    ],
    includes: ['React Native / Flutter', 'Android + iOS', 'Admin dashboard', 'Weekly APK builds', 'Play Store + App Store deploy', 'Source code 100% yours'],
  },
  {
    name: 'Digital Marketing',
    start: '₹15,000',
    suffix: '/month',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,.1)',
    ico: 'M22 12h-4l-3 9L9 3l-3 9H2',
    plans: [
      { label: 'Starter Plan', price: '₹15,000/mo', desc: 'Social media management (3 platforms), 12 posts/month, basic reporting' },
      { label: 'Growth Plan', price: '₹30,000/mo', desc: 'Google Ads + Meta Ads + SEO + social media. Monthly reporting call' },
      { label: 'Scale Plan', price: '₹60,000/mo', desc: 'Full-stack digital marketing, dedicated team, weekly reporting, CRO' },
      { label: 'Enterprise', price: 'Custom', desc: 'Scoped for businesses with specific revenue targets and growth KPIs' },
    ],
    includes: ['Google Search & Display', 'Facebook & Instagram Ads', 'Technical SEO', 'Social media management', 'Monthly reporting', 'Dedicated account manager'],
  },
]

const OTHER_SERVICES = [
  { name: '2D Explainer Animation', price: '₹18,000', unit: '/minute', desc: 'Script to final MP4. Voiceover included.' },
  { name: 'Corporate Brand Film', price: '₹50,000', unit: ' onwards', desc: '4K, scripted, drone optional.' },
  { name: 'Logo & Brand Identity', price: '₹8,000', unit: ' onwards', desc: 'Logo, colors, fonts, brand guide.' },
  { name: 'UI/UX Design Only', price: '₹20,000', unit: ' onwards', desc: 'Figma files, wireframes, prototypes.' },
  { name: 'CRM / Custom Software', price: 'Custom', unit: '', desc: 'Fixed price, scoped individually.' },
  { name: 'B2B Marketing', price: 'Custom', unit: '', desc: 'LinkedIn, ABM, pipeline building.' },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(33,150,243,.15)', border: '1px solid rgba(33,150,243,.25)', padding: '5px 14px', borderRadius: 30, marginBottom: 18, fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              Transparent Fixed Pricing · No Hourly Billing
            </div>
            <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 16 }}>
              Clear Pricing.<br /><span style={{ color: '#2196F3' }}>No Surprises. Ever.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.72 }}>
              Every project is fixed price — agreed in writing before work starts. In 565+ projects over 8 years, not one client has paid more than quoted.
            </p>
          </div>
        </section>

        {/* PACKAGES */}
        <section style={{ background: '#fff', padding: '80px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="row g-4">
              {PACKAGES.map((pkg) => (
                <div key={pkg.name} className="col-12 col-lg-4">
                  <div style={{ border: `${pkg.popular ? '2.5px' : '1.5px'} solid ${pkg.popular ? '#2196F3' : '#E2E8F0'}`, borderRadius: 16, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    {pkg.popular && (
                      <div style={{ position: 'absolute', top: 0, right: 0, background: '#2196F3', color: '#fff', fontSize: 10.5, fontWeight: 700, padding: '4px 14px', borderRadius: '0 0 0 8px' }}>Most Popular</div>
                    )}
                    {/* Header */}
                    <div style={{ background: '#0B1F4B', padding: '24px 24px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 9, background: pkg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={pkg.color} strokeWidth="1.8" strokeLinecap="round"><path d={pkg.ico} /></svg>
                        </div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.45)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{pkg.name}</div>
                      </div>
                      <div style={{ fontSize: 36, fontWeight: 800, color: pkg.color, letterSpacing: '-.06em', lineHeight: 1 }}>
                        {pkg.start}
                        <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,.35)' }}> {pkg.suffix}</span>
                      </div>
                    </div>
                    {/* Plans */}
                    <div style={{ padding: '20px 24px', borderBottom: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Plans</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {pkg.plans.map((plan) => (
                          <div key={plan.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: pkg.color, marginTop: 6, flexShrink: 0 }} />
                            <div>
                              <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0B1F4B' }}>{plan.label}</span>
                              <span style={{ fontSize: 12.5, color: pkg.color, fontWeight: 700, marginLeft: 7 }}>{plan.price}</span>
                              <div style={{ fontSize: 12, color: '#94A3B8', lineHeight: 1.5 }}>{plan.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Includes */}
                    <div style={{ padding: '16px 24px', flex: 1 }}>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>Always Included</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        {pkg.includes.map(inc => (
                          <div key={inc} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#475569' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                            {inc}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding: '0 24px 24px' }}>
                      <Link href="/contact-us" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: pkg.popular ? '#2196F3' : '#0B1F4B', color: '#fff', padding: '13px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                        Get Fixed Quote <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section style={{ background: '#F8FAFC', padding: '64px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#2196F3', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 8 }}>Other Services</div>
              <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em' }}>Video, Animation & Design</h2>
            </div>
            <div className="row g-3">
              {OTHER_SERVICES.map((s, i) => (
                <div key={i} className="col-12 col-sm-6 col-lg-4">
                  <div style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0B1F4B', marginBottom: 3 }}>{s.name}</div>
                      <div style={{ fontSize: 12.5, color: '#94A3B8' }}>{s.desc}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#2196F3', letterSpacing: '-.04em' }}>{s.price}</div>
                      {s.unit && <div style={{ fontSize: 11, color: '#94A3B8' }}>{s.unit}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICE PROMISE */}
        <section style={{ background: '#071435', padding: '64px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', marginBottom: 14 }}>
                  The NNC <span style={{ color: '#2196F3' }}>Price Promise</span>
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,.48)', lineHeight: 1.74, marginBottom: 20 }}>
                  The price in your proposal is the price you pay. Not an estimate. Not a starting figure. A fixed commitment in writing — agreed before a single wireframe is drawn, before a single line of code is written.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,.38)', lineHeight: 1.7 }}>
                  In 565+ projects across 8 years of operation, not one client has been invoiced more than their original quote.
                </p>
              </div>
              <div className="col-lg-5">
                <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 28 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 22 }}>
                    {['Fixed price agreed before work starts', 'No hourly billing — ever', 'No change order invoices', 'No surprise fees on delivery', 'Pay final 50% only when satisfied'].map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#fff' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                        {p}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact-us" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '14px', borderRadius: 9, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                    Get Your Fixed Quote <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
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
