import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import { BLOG_POSTS } from '@/data/landingData'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return { title: 'Blog | NNC Digital' }
  return {
    title: `${post.title} | NNC Digital Blog`,
    description: `${post.title} — insights from NNC Digital's team in Bengaluru. Read our guide on ${post.category.toLowerCase()}.`,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: { title: post.title, description: `NNC Digital blog — ${post.category}`, type: 'article', publishedTime: post.date },
  }
}

// Generate placeholder blog content from title
function generateContent(post) {
  const paras = [
    `This is a comprehensive guide on ${post.title.toLowerCase()} from NNC Digital's team in Bengaluru. Our in-house specialists have delivered 565+ projects and bring real, hands-on experience to every topic we cover.`,
    `Understanding ${post.category.toLowerCase()} is critical for businesses in India looking to grow their digital presence. Whether you're a startup or an established company, the insights here will help you make smarter decisions.`,
    `At NNC Digital, we've worked with businesses across healthcare, real estate, e-commerce, education and more. Our team of 35+ permanent in-house specialists has seen what works — and what doesn't — in the Indian market.`,
    `The key takeaway from our experience: the best results come from clarity of requirements, a fixed-price engagement, and a team that is permanently accountable for what they build. Not freelancers. Not outsourced work. Permanent employees with skin in the game.`,
    `If you have questions about ${post.title.toLowerCase()}, or want to discuss how NNC Digital can help your business, contact our team. We respond with a detailed scope and fixed price within 24 hours.`,
  ]
  return paras
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return <div style={{ padding: 80, textAlign: 'center', fontSize: 18, color: '#6B7A99' }}>Blog post not found.</div>

  const content = generateContent(post)
  const related = BLOG_POSTS.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    url: `${SITE.url}/blog/${post.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Topbar />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <nav style={{ background: '#071435', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 6, fontSize: 12.5, flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
            <span style={{ color: '#2196F3', fontWeight: 600 }}>{post.category}</span>
          </div>
        </nav>

        {/* Article */}
        <article style={{ background: '#fff' }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '64px 0 52px' }}>
            <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#2196F3', background: 'rgba(33,150,243,.18)', padding: '3px 10px', borderRadius: 20 }}>{post.category}</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{post.readTime} read</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.15, marginBottom: 16 }}>{post.title}</h1>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,.45)' }}>By <strong style={{ color: 'rgba(255,255,255,.7)' }}>NNC Digital Team</strong> · Bengaluru</p>
            </div>
          </div>

          {/* Body */}
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 24px 80px' }}>
            <div style={{ fontSize: 17, color: '#374151', lineHeight: 1.85, maxWidth: 720 }}>
              {content.map((para, i) => (
                <p key={i} style={{ marginBottom: 22 }}>{para}</p>
              ))}
            </div>

            {/* CTA block */}
            <div style={{ marginTop: 56, padding: '32px 36px', background: '#071435', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Want help with {post.category.toLowerCase()}?</div>
                <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.4)' }}>NNC Digital delivers {post.category.toLowerCase()} projects in Bengaluru, Mumbai & Hyderabad.</div>
              </div>
              <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Get Free Quote <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div style={{ marginTop: 56 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.03em', marginBottom: 20 }}>Related Articles</h2>
                <div className="row g-3">
                  {related.map(r => (
                    <div key={r.slug} className="col-12 col-md-4">
                      <Link href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                        <div className="card-hover" style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '18px', height: '100%' }}>
                          <span style={{ fontSize: 10.5, fontWeight: 700, color: '#2196F3', background: '#EFF6FF', padding: '2px 8px', borderRadius: 20, display: 'inline-block', marginBottom: 8 }}>{r.category}</span>
                          <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0B1F4B', lineHeight: 1.4 }}>{r.title}</div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
