'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/landingData'

const CATEGORIES = ['All', ...[...new Set(BLOG_POSTS.map(p => p.category))]]

export default function BlogContent() {
  const [active, setActive] = useState('All')

  const posts = useMemo(
    () => active === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === active),
    [active]
  )

  return (
    <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {CATEGORIES.map(cat => {
            const isActive = cat === active
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 600,
                  background: isActive ? '#2196F3' : '#fff',
                  color: isActive ? '#fff' : '#475569',
                  border: `1.5px solid ${isActive ? '#2196F3' : '#E2E8F0'}`,
                  cursor: 'pointer', transition: 'all .15s', fontFamily: 'inherit',
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Post count */}
        <p style={{ fontSize: 13.5, color: '#94A3B8', marginBottom: 24, fontWeight: 500 }}>
          {posts.length} {posts.length === 1 ? 'article' : 'articles'}{active !== 'All' ? ` in "${active}"` : ''}
        </p>

        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#94A3B8', fontSize: 15 }}>
            No articles found in this category yet.
          </div>
        ) : (
          <div className="row g-4">
            {posts.map((post, i) => (
              <div key={post.slug} className="col-12 col-md-6 col-lg-4" style={{ transitionDelay: `${(i % 6) * .07}s` }}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all .22s' }}>
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
        )}
      </div>
    </section>
  )
}
