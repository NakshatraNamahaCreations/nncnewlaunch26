import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { BLOG_POSTS } from '@/data/landingData'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Blog & Insights | Website Development, SEO & Digital Marketing Tips | NNC Digital',
  description: 'Expert articles on website development, mobile app development, SEO, digital marketing, React JS, Next JS and business growth strategies from NNC Digital — a top-rated agency in Bangalore with 565+ projects delivered.',
  alternates: { canonical: 'https://www.nakshatranamahacreations.com/blog' },
}

const CATEGORIES = [...new Set(BLOG_POSTS.map(p => p.category))]

export default function BlogPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 50%,#0e2d6a 100%)', padding: '64px 0 52px' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 14 }}>
              NNC Digital <span style={{ color: '#2196F3' }}>Blog & Insights</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Practical guides and insights from NNC&apos;s in-house team — on web development, mobile apps, digital marketing and more.
            </p>
          </div>
        </section>

        <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
            {/* Category filters */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
              {['All', ...CATEGORIES].map((cat, i) => (
                <span key={cat} style={{ padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 600, background: i === 0 ? '#2196F3' : '#fff', color: i === 0 ? '#fff' : '#475569', border: '1.5px solid', borderColor: i === 0 ? '#2196F3' : '#E2E8F0', cursor: 'pointer', transition: 'all .15s' }}>
                  {cat}
                </span>
              ))}
            </div>

            <div className="row g-4">
              {BLOG_POSTS.map((post, i) => (
                <div key={post.slug} className="col-12 col-md-6 col-lg-4 anim" style={{ transitionDelay: `${(i % 6) * .07}s` }}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all .22s' }}>
                      {/* Color bar */}
                      <div style={{ height: 4, background: 'linear-gradient(90deg,#2196F3,#1565C0)' }} />
                      <div style={{ padding: '22px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                          <span style={{ fontSize: 10.5, fontWeight: 700, color: '#2196F3', background: '#EFF6FF', padding: '2px 8px', borderRadius: 20 }}>{post.category}</span>
                          <span style={{ fontSize: 11, color: '#94A3B8' }}>{post.readTime} read</span>
                        </div>
                        <h2 style={{ fontSize: 15.5, fontWeight: 700, color: '#0B1F4B', lineHeight: 1.4, marginBottom: 12, flex: 1 }}>{post.title}</h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 14, borderTop: '1px solid #E2E8F0' }}>
                          <span style={{ fontSize: 12, color: '#94A3B8' }}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12.5, fontWeight: 700, color: '#2196F3' }}>
                            Read more <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
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
