'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE } from '@/data/siteData'

/* ─── DATA ─────────────────────────────────────────────────────── */
const SERVICES = [
  {
    key: 'web', name: 'Website Development', sub: 'React JS · Next JS · E-commerce',
    ico: 'M3 3h18v14H3zM8 21h8M12 17v4', ib: 'rgba(33,150,243,.12)', ic: '#2196F3',
    slug: '/website-development-company-in-bangalore',
    eyebrow: 'Web Solutions', title: ['High-performance', 'Websites'],
    desc: 'Custom React JS and Next JS websites built for speed, SEO and conversion. Every delivery includes a PageSpeed 90+ guarantee written into the contract.',
    links: [
      { name: 'Corporate & Business Websites', href: '/website-development-company-in-bangalore' },
      { name: 'E-commerce Platforms',          href: '/ecommerce-website-development-company' },
      { name: 'Web Applications & Portals',    href: '/react-js-development-company' },
      { name: 'Landing Pages & Funnels',       href: '/website-development-company-in-bangalore' },
      { name: 'CMS & Content Platforms',       href: '/website-development-company-in-bangalore' },
      { name: 'Progressive Web Apps',          href: '/website-development-company-in-bangalore' },
    ],
  },
  {
    key: 'app', name: 'Mobile App Development', sub: 'React Native · Flutter · iOS & Android',
    ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', ib: 'rgba(16,185,129,.12)', ic: '#10B981',
    slug: '/mobile-app-development-company-in-bangalore',
    eyebrow: 'Mobile Solutions', title: ['iOS & Android', 'Mobile Apps'],
    desc: 'Cross-platform React Native and Flutter apps built by dedicated in-house specialists. Weekly APK/TestFlight builds so you track progress throughout development.',
    links: [
      { name: 'On-demand Service Apps',  href: '/mobile-app-development-company-in-bangalore' },
      { name: 'E-commerce Mobile Apps',  href: '/mobile-app-development-company-in-bangalore' },
      { name: 'Healthcare & Clinic Apps',href: '/mobile-app-development-company-in-bangalore' },
      { name: 'React Native Apps',       href: '/react-native-mobile-app-developers' },
      { name: 'Flutter App Development', href: '/flutter-app-development' },
      { name: 'iOS & Android Apps',      href: '/android-app-development' },
    ],
  },
  {
    key: 'crm', name: 'CRM & Custom Software', sub: 'SaaS · Dashboards · Automations',
    ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', ib: 'rgba(245,158,11,.12)', ic: '#F59E0B',
    slug: '/custom-crm-development',
    eyebrow: 'Software Solutions', title: ['Custom CRM &', 'SaaS Platforms'],
    desc: 'Proprietary CRM systems, SaaS platforms and admin dashboards replacing manual workflows with software your team actually uses.',
    links: [
      { name: 'Custom CRM Systems',           href: '/custom-crm-development' },
      { name: 'SaaS & Subscription Platforms',href: '/custom-crm-development' },
      { name: 'Admin Dashboards',              href: '/crm-solutions' },
      { name: 'Workflow Automation',           href: '/custom-crm-development' },
      { name: 'ERP & Inventory Systems',       href: '/custom-crm-development' },
      { name: 'API Integrations',              href: '/node-js-development-company' },
    ],
  },
  {
    key: 'mkt', name: 'Digital Marketing & SEO', sub: 'Google Ads · Meta · SEO',
    ico: 'M22 12h-4l-3 9L9 3l-3 9H2', ib: 'rgba(124,58,237,.12)', ic: '#7C3AED',
    slug: '/digital-marketing-agency-in-bangalore',
    eyebrow: 'Growth & Marketing', title: ['Digital Marketing', 'That Drives Leads'],
    desc: 'Google Ads, Meta Ads, technical SEO and social media managed by in-house specialists who report on real business outcomes.',
    links: [
      { name: 'Google Search & Display Ads', href: '/paid-marketing-services' },
      { name: 'Facebook & Instagram Ads',    href: '/paid-marketing-services' },
      { name: 'Technical SEO & On-page',     href: '/seo-services' },
      { name: 'Social Media Management',     href: '/social-media-marketing' },
      { name: 'Google Shopping Campaigns',   href: '/paid-marketing-services' },
      { name: 'Local SEO & GMB',             href: '/seo-services' },
    ],
  },
  {
    key: 'vid', name: 'Corporate Video & Animation', sub: 'Brand Films · 2D Animation · Drone',
    ico: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z', ib: 'rgba(239,68,68,.12)', ic: '#EF4444',
    slug: '/corporate-video-production-company-in-bangalore',
    eyebrow: 'Visual Production', title: ['Video & Animation', 'Production'],
    desc: 'Brand films to explainer animations scripted, shot and edited by the NNC in-house production team. Zero outsourcing from brief to final file.',
    links: [
      { name: 'Corporate Brand Films',    href: '/corporate-video-makers' },
      { name: '2D Explainer Animation',   href: '/animated-video-creators' },
      { name: 'Character Animation',      href: '/2d-animation-studio' },
      { name: 'Drone & Aerial Footage',   href: '/corporate-video-production-company-in-bangalore' },
      { name: 'Product Ad Shoots',        href: '/corporate-film-makers' },
      { name: 'Social Media Reels',       href: '/motion-graphics-services' },
    ],
  },
  {
    key: 'brd', name: 'Graphic Design & Branding', sub: 'Logo · UI/UX · Brand Identity',
    ico: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z', ib: 'rgba(245,158,11,.12)', ic: '#F59E0B',
    slug: '/graphic-design-company-in-bangalore',
    eyebrow: 'Design & Branding', title: ['Brand Identity &', 'UI/UX Design'],
    desc: 'Logo design, brand identity systems, UI/UX for web and apps and complete social media creative kits. Consistent visual language across every touchpoint.',
    links: [
      { name: 'Logo & Brand Identity',       href: '/graphic-designing-company' },
      { name: 'UI/UX for Web & Apps',        href: '/ui-ux-design-agency' },
      { name: 'Social Media Creative Kits',  href: '/graphic-design-company-in-bangalore' },
      { name: 'Brand Guidelines & Systems',  href: '/graphic-design-company-in-bangalore' },
      { name: 'Marketing Collateral',        href: '/graphic-designing-company' },
      { name: 'Pitch Deck Design',           href: '/graphic-designing-company' },
    ],
  },
]

const INDUSTRIES = [
  { name: 'Healthcare',     sub: 'Clinics & hospitals',    ic: '#EF4444', ib: 'rgba(239,68,68,.1)',   ico: 'M4.5 12.75l6 6 9-13.5' },
  { name: 'Real Estate',    sub: 'Builders & brokers',     ic: '#10B981', ib: 'rgba(16,185,129,.1)',  ico: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
  { name: 'E-commerce',     sub: 'D2C & marketplaces',     ic: '#2196F3', ib: 'rgba(33,150,243,.1)',  ico: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18' },
  { name: 'Education',      sub: 'EdTech & coaching',      ic: '#7C3AED', ib: 'rgba(124,58,237,.1)',  ico: 'M12 14l9-5-9-5-9 5z' },
  { name: 'Finance',        sub: 'Fintech & investment',   ic: '#10B981', ib: 'rgba(16,185,129,.1)',  ico: 'M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' },
  { name: 'Hospitality',    sub: 'Hotels & restaurants',   ic: '#F59E0B', ib: 'rgba(245,158,11,.1)',  ico: 'M3 21h18M5 21V7l8-4v18M19 21V11l-6-4' },
  { name: 'Logistics',      sub: 'Delivery & fleet',       ic: '#2196F3', ib: 'rgba(33,150,243,.1)',  ico: 'M1 3h15v13H1zM16 8h4l3 3v5h-7V8z' },
  { name: 'Events',         sub: 'Weddings & corporate',   ic: '#EF4444', ib: 'rgba(239,68,68,.1)',   ico: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 000 4h6a2 2 0 000-4M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { name: 'Fitness',        sub: 'Gyms & sports',          ic: '#7C3AED', ib: 'rgba(124,58,237,.1)',  ico: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z' },
  { name: 'Manufacturing',  sub: 'B2B & industrial',       ic: '#F59E0B', ib: 'rgba(245,158,11,.1)',  ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5' },
]

const PORTFOLIO_ITEMS = [
  { name: 'Websites',             sub: 'Corporate, E-commerce, Portals',      count: '200+', color: '#2196F3' },
  { name: 'Mobile Apps',          sub: 'Android, iOS, Cross-platform',        count: '150+', color: '#10B981' },
  { name: 'CRM & Software',       sub: 'Custom platforms, SaaS tools',        count: '80+',  color: '#F59E0B' },
  { name: 'Video & Animation',    sub: 'Brand films, explainers, reels',      count: '90+',  color: '#7C3AED' },
  { name: 'Branding & Design',    sub: 'Logos, UI/UX, social kits',           count: '100+', color: '#EF4444' },
]

const COMPANY_ABOUT = [
  { name: 'About NNC',         dot: '#2196F3', href: '/about-us' },
  { name: 'Our In-house Team', dot: '#10B981', href: '/about-us' },
  { name: 'Careers',           dot: '#F59E0B', badge: 'Hiring', bb: '#FEF9C3', bc: '#713F12', href: '/careers' },
  { name: 'Client Reviews',    dot: '#0B1F4B', badge: '4.9 ★', bb: '#EFF6FF', bc: '#1E40AF', href: '/client-reviews' },
]
const COMPANY_RES = [
  { name: 'Blog & Insights',   dot: '#7C3AED', href: '/blog' },
  { name: 'Case Studies',      dot: '#EF4444', href: '/case-studies' },
  { name: 'Process Overview',  dot: '#10B981', href: '/process' },
  { name: 'Pricing Guide',     dot: '#2196F3', href: '/pricing' },
]

const OFFICES_DATA = [
  { city: 'Bengaluru', type: 'Head Office', addr: 'Darshan Plaza, 1st Floor, Channasandra · 560 098', ic: '#2196F3' },
  { city: 'Mumbai',    type: 'Branch',      addr: 'Lodha Signet, Kolshet Rd, Thane West · 400 607',  ic: '#10B981' },
  { city: 'Mysuru',    type: 'Branch',      addr: 'Suswani Towers, JP Nagar, 2nd Stage · 570 008',    ic: '#F59E0B' },
  { city: 'Hyderabad', type: 'Branch',      addr: 'Prakashnagar, Begumpet · 500 016',                 ic: '#7C3AED' },
]

/* ─── SMALL REUSABLE SVG ──────────────────────────────────────── */
function Svg({ d, size = 16, color = 'currentColor', sw = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}
function Chevron({ open, size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
      style={{ transition: 'transform .22s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
function ArrowRight({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

/* ─── DROPDOWN SHELL ─────────────────────────────────────────── */
function DDShell({ open, children, style = {} }) {
  return (
    <div style={{
      position: 'absolute',
      top: 'calc(100% + 0px)',
      background: '#fff',
      border: '1.5px solid #E2E8F0',
      borderRadius: 12,
      boxShadow: '0 4px 6px -1px rgba(11,31,75,.04),0 20px 60px -8px rgba(11,31,75,.14)',
      opacity: open ? 1 : 0,
      visibility: open ? 'visible' : 'hidden',
      transform: open ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity .22s cubic-bezier(.16,1,.3,1),transform .22s cubic-bezier(.16,1,.3,1),visibility .22s',
      pointerEvents: open ? 'all' : 'none',
      zIndex: 500,
      overflow: 'hidden',
      ...style,
    }}>
      {children}
    </div>
  )
}

/* ─── SERVICES MEGA (SIDEBAR LAYOUT) ─────────────────────────── */
function ServicesMega({ open }) {
  const [activeKey, setActiveKey] = useState('web')
  const active = SERVICES.find(s => s.key === activeKey) || SERVICES[0]

  return (
    <DDShell open={open} style={{ left: 0, width: 800 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr' }}>

        {/* Sidebar */}
        <div style={{ background: '#F8FAFC', borderRight: '1px solid #E2E8F0', padding: '24px 0' }}>
          <div style={{ padding: '0 20px 14px', fontSize: 10, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em' }}>
            What We Build
          </div>
          {SERVICES.map(s => (
            <div key={s.key}
              onMouseEnter={() => setActiveKey(s.key)}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '11px 20px',
                cursor: 'pointer', transition: 'background .15s',
                background: activeKey === s.key ? '#fff' : 'transparent',
                borderLeft: `2.5px solid ${activeKey === s.key ? '#2196F3' : 'transparent'}`,
              }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: s.ib, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Svg d={s.ico} size={16} color={s.ic} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: activeKey === s.key ? '#2196F3' : '#1E293B' }}>{s.name}</div>
                <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 1 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Content panel */}
        <div style={{ padding: '28px 28px 24px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#2196F3', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 8 }}>
            {active.eyebrow}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', lineHeight: 1.15, marginBottom: 10 }}>
            {active.title[0]}<br />{active.title[1]}
          </div>
          <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7, marginBottom: 20 }}>{active.desc}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 22 }}>
            {active.links.map(link => (
              <Link key={link.name} href={link.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 9, padding: '10px 12px',
                  borderRadius: 8, background: '#F8FAFC', border: '1px solid #E2E8F0',
                  transition: 'all .18s', cursor: 'pointer',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: '#1E293B', flex: 1 }}>{link.name}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: '#0B1F4B', borderRadius: 10 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: '#fff', marginBottom: 3 }}>Ready to start a project?</div>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.4)' }}>Get a fixed-price quote within 24 hours</div>
            </div>
            <Link href="/contact-us" style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2196F3', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: 7, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0, transition: 'background .18s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1565C0'}
              onMouseLeave={e => e.currentTarget.style.background = '#2196F3'}>
              Talk to us <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </DDShell>
  )
}

/* ─── INDUSTRIES DROPDOWN ────────────────────────────────────── */
function IndustriesDrop({ open }) {
  return (
    <DDShell open={open} style={{ left: 0, width: 540 }}>
      <div style={{ padding: 24 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Industries We Serve</span>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: '#10B981', display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            10 sectors
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, marginBottom: 20 }}>
          {INDUSTRIES.map(ind => (
            <a key={ind.name} href="#" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, transition: 'background .15s', cursor: 'pointer' }}>
                <div style={{ width: 30, height: 30, borderRadius: 7, background: ind.ib, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Svg d={ind.ico} size={14} color={ind.ic} sw={2} />
                </div>
                <div>
                  <div className="idi-nm" style={{ fontSize: 13, fontWeight: 600, color: '#1E293B', transition: 'color .15s' }}>{ind.name}</div>
                  <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 1 }}>{ind.sub}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: '#F8FAFC', borderRadius: 8, border: '1px solid #E2E8F0' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>Not sure where you fit?</div>
            <div style={{ fontSize: 11.5, color: '#94A3B8', marginTop: 1 }}>We&apos;ve worked across 10+ verticals</div>
          </div>
          <Link href="/contact-us" style={{ fontSize: 12.5, fontWeight: 700, color: '#2196F3', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Talk to us <ArrowRight />
          </Link>
        </div>
      </div>
    </DDShell>
  )
}

/* ─── PORTFOLIO DROPDOWN ─────────────────────────────────────── */
function PortfolioDrop({ open }) {
  return (
    <DDShell open={open} style={{ left: '50%', transform: open ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(12px)', width: 380 }}>
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>
          565+ Projects Delivered
        </div>
        {PORTFOLIO_ITEMS.map(p => (
          <Link key={p.name} href="/our-works" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 9, border: '1px solid transparent', transition: 'all .18s', marginBottom: 4, cursor: 'pointer' }}>
              <div style={{ width: 3, height: 36, borderRadius: 2, background: p.color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div className="pi-nm" style={{ fontSize: 13.5, fontWeight: 700, color: '#1E293B', marginBottom: 2, transition: 'color .18s' }}>{p.name}</div>
                <div style={{ fontSize: 11.5, color: '#94A3B8' }}>{p.sub}</div>
              </div>
              <span style={{ fontSize: 12, fontWeight: 800, color: '#2196F3', background: '#EFF6FF', padding: '3px 10px', borderRadius: 20, flexShrink: 0 }}>{p.count}</span>
            </div>
          </Link>
        ))}
        <Link href="/our-works" style={{ textDecoration: 'none', display: 'block', marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 14px', borderRadius: 9, background: '#EFF6FF', border: '1px solid rgba(33,150,243,.2)', cursor: 'pointer' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2196F3' }}>View All Our Works</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </Link>
      </div>
    </DDShell>
  )
}

/* ─── COMPANY DROPDOWN ───────────────────────────────────────── */
function CompanyDrop({ open }) {
  return (
    <DDShell open={open} style={{ left: '50%', transform: open ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(12px)', width: 460 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {[{ label: 'About', items: COMPANY_ABOUT }, { label: 'Resources', items: COMPANY_RES }].map(col => (
          <div key={col.label} style={{ padding: 20, borderRight: col.label === 'About' ? '1px solid #E2E8F0' : 'none' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 12 }}>{col.label}</div>
            {col.items.map(item => (
              <Link key={item.name} href={item.href || '#'} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 10px', borderRadius: 8, transition: 'background .15s', cursor: 'pointer' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
                  <span className="dcl-nm" style={{ fontSize: 13, fontWeight: 600, color: '#1E293B', flex: 1, transition: 'color .15s' }}>{item.name}</span>
                  {item.badge && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 20, background: item.bb, color: item.bc }}>{item.badge}</span>}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      {/* Stats strip */}
      <div style={{ borderTop: '1px solid #E2E8F0', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '14px 8px' }}>
        {[['565+', 'Projects'], ['8+', 'Years'], ['4.9★', 'Google'], ['35+', 'Team']].map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center', padding: '4px 8px', borderRight: l !== 'Team' ? '1px solid #E2E8F0' : 'none' }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.04em', lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 10.5, color: '#94A3B8', marginTop: 3 }}>{l}</div>
          </div>
        ))}
      </div>
    </DDShell>
  )
}

/* ─── OFFICES DROPDOWN ───────────────────────────────────────── */
function OfficesDrop({ open }) {
  return (
    <DDShell open={open} style={{ right: 0, width: 360 }}>
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Our Offices</span>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: '#10B981', display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            All open
          </span>
        </div>
        {OFFICES_DATA.map(o => (
          <div key={o.city} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '13px 14px', borderRadius: 9, border: '1px solid transparent', transition: 'all .15s', marginBottom: 4, cursor: 'default' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Svg d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10m-3 0a3 3 0 106 0 3 3 0 00-6 0" size={16} color={o.ic} sw={2} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.02em', marginBottom: 4 }}>{o.city}</div>
              <span style={{ display: 'inline-flex', fontSize: 10, fontWeight: 700, color: '#2196F3', background: '#DBEAFE', padding: '1px 7px', borderRadius: 20, marginBottom: 5 }}>{o.type}</span>
              <div style={{ fontSize: 12, color: '#94A3B8', lineHeight: 1.5 }}>{o.addr}</div>
            </div>
          </div>
        ))}
      </div>
    </DDShell>
  )
}

/* ─── NAV TRIGGER BUTTON ─────────────────────────────────────── */
function NavTrigger({ label, open, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 5, height: 64,
      padding: '0 12px', fontSize: 13.5, fontWeight: 600,
      color: open ? '#2196F3' : '#475569',
      background: 'none', border: 'none',
      borderBottom: `2px solid ${open ? '#2196F3' : 'transparent'}`,
      marginBottom: -1.5, cursor: 'pointer', transition: 'color .18s,border-color .18s',
      whiteSpace: 'nowrap', fontFamily: 'inherit',
    }}>
      {label} <Chevron open={open} />
    </button>
  )
}

/* ─── MOBILE SECTION ─────────────────────────────────────────── */
function MobSection({ title, open, onToggle, children }) {
  return (
    <div style={{ borderBottom: '1px solid #E2E8F0' }}>
      <div onClick={onToggle} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 4px', cursor: 'pointer' }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: '#0B1F4B' }}>{title}</span>
        <Chevron open={open} />
      </div>
      {open && <div style={{ paddingBottom: 8 }}>{children}</div>}
    </div>
  )
}

/* ─── MAIN EXPORT ────────────────────────────────────────────── */
export default function Navbar() {
  const [stuck, setStuck] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobSec, setMobSec] = useState({})
  const ref = useRef(null)
  const pathname = usePathname()

  // Close all menus on every page navigation
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const s = () => setStuck(window.scrollY > 0)
    window.addEventListener('scroll', s, { passive: true })
    return () => window.removeEventListener('scroll', s)
  }, [])

  useEffect(() => {
    const c = (e) => { if (!ref.current?.contains(e.target)) setOpenMenu(null) }
    document.addEventListener('click', c)
    return () => document.removeEventListener('click', c)
  }, [])

  const tog = (id) => setOpenMenu(v => v === id ? null : id)
  const togMob = (id) => setMobSec(v => ({ ...v, [id]: !v[id] }))

  return (
    <header ref={ref} style={{
      position: 'sticky', top: 0, zIndex: 400,
      boxShadow: stuck ? '0 1px 0 #E2E8F0,0 8px 32px rgba(11,31,75,.07)' : 'none',
      transition: 'box-shadow .25s',
    }}>
      {/* Topbar */}
      {/* <div className="d-none d-lg-block" style={{ background: '#071435', height: 38, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 40px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {[
              { ico: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z', text: SITE.phone, href: SITE.phoneHref },
              { ico: 'M2 4h20v16H2zM22 7l-10 6.5L2 7', text: SITE.email, href: `mailto:${SITE.email}` },
              { ico: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z', text: 'Bengaluru · Mumbai · Mysuru · Hyderabad' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,.45)' }}>
                <Svg d={item.ico} size={11} color="#2196F3" sw={2} />
                {item.href
                  ? <a href={item.href} style={{ color: 'rgba(255,255,255,.65)', textDecoration: 'none' }}>{item.text}</a>
                  : <span>{item.text}</span>}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.9)', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', padding: '3px 10px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ color: '#F59E0B' }}>★</span> 4.9 · 87 Google reviews
          </div>
        </div>
      </div> */}

      {/* Main header */}
      <div style={{ background: 'rgba(255,255,255,.98)', borderBottom: '1.5px solid #E2E8F0' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 clamp(16px,4vw,48px)', display: 'flex', alignItems: 'center', height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0, marginRight: 16 }}>
            <img src={SITE.logo} alt="NNC Digital Logo" width={46} height={46} style={{ borderRadius: 8, objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{ fontSize: 'clamp(11px,2.5vw,14px)', fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.02em', whiteSpace: 'nowrap' }}>Nakshatra Namaha Creations</span>
              <span style={{ fontSize: 'clamp(9px,2vw,11px)', fontWeight: 500, color: '#94A3B8', letterSpacing: '.01em', whiteSpace: 'nowrap' }}>Yours Digital Partner Solutions</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="d-none d-xl-flex" style={{ alignItems: 'center', gap: 2, flex: 1, justifyContent: 'flex-end' }}>
            <div style={{ position: 'relative', height: 72, display: 'flex', alignItems: 'center' }}>
              <NavTrigger label="Services" open={openMenu === 'svc'} onClick={() => tog('svc')} />
              <ServicesMega open={openMenu === 'svc'} />
            </div>
            <div style={{ position: 'relative', height: 72, display: 'flex', alignItems: 'center' }}>
              <NavTrigger label="Industries" open={openMenu === 'ind'} onClick={() => tog('ind')} />
              <IndustriesDrop open={openMenu === 'ind'} />
            </div>
            <div style={{ position: 'relative', height: 72, display: 'flex', alignItems: 'center' }}>
              <Link href="/our-works" style={{
                display: 'flex', alignItems: 'center', height: 64,
                padding: '0 12px', fontSize: 13.5, fontWeight: 600,
                color: pathname === '/our-works' ? '#2196F3' : '#475569',
                textDecoration: 'none',
                borderBottom: `2px solid ${pathname === '/our-works' ? '#2196F3' : 'transparent'}`,
                marginBottom: -1.5, transition: 'color .18s,border-color .18s',
                whiteSpace: 'nowrap',
              }}>
                Our Works
              </Link>
            </div>
            <div style={{ position: 'relative', height: 72, display: 'flex', alignItems: 'center' }}>
              <NavTrigger label="Company" open={openMenu === 'co'} onClick={() => tog('co')} />
              <CompanyDrop open={openMenu === 'co'} />
            </div>
            <div style={{ position: 'relative', height: 72, display: 'flex', alignItems: 'center' }}>
              <NavTrigger label="Offices" open={openMenu === 'loc'} onClick={() => tog('loc')} />
              <OfficesDrop open={openMenu === 'loc'} />
            </div>
            <Link href="/about-us" style={{ display: 'flex', alignItems: 'center', height: 64, padding: '0 12px', fontSize: 13.5, fontWeight: 600, color: '#475569', textDecoration: 'none', borderBottom: '2px solid transparent', marginBottom: -1.5, transition: 'color .18s,border-color .18s', whiteSpace: 'nowrap' }}>
              About Us
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="d-none d-lg-flex" style={{ alignItems: 'center', gap: 10, marginLeft: 16, flexShrink: 0 }}>
            <Link href="/behind-the-scenes" className="bts-nav-pill" title="Behind The Scenes" style={{ textDecoration: 'none' }}>
              <span className="bts-pill-ring" />
              <span className="bts-pill-inner">
                <span className="bts-pill-dot" />
                <span className="bts-pill-icon">🎬</span>
                <span className="bts-pill-text">BTS</span>
              </span>
            </Link>
            <a href={SITE.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: '#475569', padding: '0 16px', height: 38, borderRadius: 8, border: '1.5px solid #E2E8F0', background: '#fff', textDecoration: 'none', transition: 'all .2s', whiteSpace: 'nowrap' }}>
              <Svg d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={13} color="currentColor" sw={2} />
              Call
            </a>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 700, color: '#fff', padding: '0 22px', height: 40, borderRadius: 8, border: 'none', background: '#2196F3', cursor: 'pointer', transition: 'all .2s', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
              Get Free Quote <ArrowRight />
            </button>
          </div>

          {/* Hamburger */}
          <button className="d-xl-none" style={{ width: 40, height: 40, borderRadius: 8, border: '1.5px solid #E2E8F0', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: 'auto', flexShrink: 0 }}
            onClick={() => setMobileOpen(v => !v)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B1F4B" strokeWidth="2.5">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #E2E8F0', maxHeight: 'calc(100dvh - 64px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <div style={{ padding: '8px 16px 32px' }}>
            <MobSection title="Services" open={mobSec.svc} onToggle={() => togMob('svc')}>
              {SERVICES.map(s => (
                <Link key={s.key} href={s.slug} onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 8px', borderRadius: 8, transition: 'background .15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#EFF6FF'}
                    onMouseLeave={e => e.currentTarget.style.background = ''}>
                    <div style={{ width: 32, height: 32, borderRadius: 7, background: s.ib, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Svg d={s.ico} size={14} color={s.ic} sw={2} />
                    </div>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: '#1E293B' }}>{s.name}</span>
                  </div>
                </Link>
              ))}
            </MobSection>

            <MobSection title="Industries" open={mobSec.ind} onToggle={() => togMob('ind')}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {INDUSTRIES.map(i => (
                  <div key={i.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px', borderRadius: 7 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: i.ic, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#1E293B' }}>{i.name}</span>
                  </div>
                ))}
              </div>
            </MobSection>

            <MobSection title="Our Works" open={mobSec.port} onToggle={() => togMob('port')}>
              {PORTFOLIO_ITEMS.map(p => (
                <Link key={p.name} href="/our-works" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 8px', borderRadius: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: '#1E293B', flex: 1 }}>{p.name}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#2196F3', background: '#EFF6FF', padding: '2px 8px', borderRadius: 20 }}>{p.count}</span>
                  </div>
                </Link>
              ))}
            </MobSection>

            <MobSection title="Company" open={mobSec.co} onToggle={() => togMob('co')}>
              {[...COMPANY_ABOUT, ...COMPANY_RES].map(c => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 8px', borderRadius: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: c.dot, flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: '#1E293B', flex: 1 }}>{c.name}</span>
                  {c.badge && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 20, background: c.bb, color: c.bc }}>{c.badge}</span>}
                </div>
              ))}
            </MobSection>

            <Link href="/about-us" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '12px 8px', fontSize: 14, fontWeight: 700, color: '#0B1F4B', textDecoration: 'none', borderBottom: '1px solid #F1F5F9' }}>
              About Us
            </Link>

            <MobSection title="Offices" open={mobSec.loc} onToggle={() => togMob('loc')}>
              {OFFICES_DATA.map(o => (
                <div key={o.city} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 8px', borderRadius: 8 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: o.ic, marginTop: 5, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0B1F4B' }}>{o.city}</div>
                    <div style={{ fontSize: 11.5, color: '#94A3B8', marginTop: 1 }}>{o.addr}</div>
                  </div>
                </div>
              ))}
            </MobSection>

            <Link href="/behind-the-scenes" onClick={() => setMobileOpen(false)} className="bts-mob-btn" style={{ textDecoration: 'none' }}>
              <span className="bts-pill-dot" style={{ width:8, height:8 }} />
              🎬 Behind The Scenes
            </Link>

            <div style={{ paddingTop: 0, display: 'flex', gap: 8 }}>
              <a href={SITE.phoneHref} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: 13, borderRadius: 8, border: '1.5px solid #E2E8F0', background: '#fff', fontSize: 14, fontWeight: 600, color: '#0B1F4B', textDecoration: 'none' }}>
                <Svg d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={14} color="currentColor" sw={2} />
                Call
              </a>
              <button onClick={() => { setMobileOpen(false); window.dispatchEvent(new CustomEvent('open-quote')) }} style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: 13, borderRadius: 8, border: 'none', background: '#2196F3', fontSize: 14, fontWeight: 700, color: '#fff', cursor: 'pointer', fontFamily: 'inherit' }}>
                Get Free Quote →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
