import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import BlogContent from './BlogContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Blog & Insights | Website Development, SEO & Digital Marketing Tips | NNC Digital',
  description: 'Expert articles on website development, mobile app development, SEO, digital marketing, React JS, Next JS and business growth strategies from NNC Digital a top-rated agency in Bangalore with 565+ projects delivered.',
  alternates: { canonical: `${SITE.url}/blog` },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 50%,#0e2d6a 100%)', padding: '64px 0 52px' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.055em', lineHeight: 1.06, marginBottom: 14 }}>
              NNC Digital <span style={{ color: '#2196F3' }}>Blog & Insights</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Practical guides and insights from NNC&apos;s in-house team on web development, mobile apps, digital marketing and more.
            </p>
          </div>
        </section>
        <BlogContent />
      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
