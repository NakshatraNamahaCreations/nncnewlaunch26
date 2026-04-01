import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Web Application Development Company in Bangalore | NNC Digital',
  description: 'Custom web application development in Bangalore. SaaS platforms, portals and enterprise web apps built on React JS, Next JS and Node JS. Fixed price, zero outsourcing. 80+ delivered.',
  alternates: { canonical: `${SITE.url}/web-application-development` },
  keywords: 'web application development company bangalore, custom web app development bangalore, saas development company india, react js web application, node js development company bangalore',
  openGraph: {
    title: 'Web Application Development Company in Bangalore | NNC Digital',
    description: 'Custom SaaS platforms, portals and enterprise web apps on React JS & Node JS. Fixed price, zero outsourcing, full source code ownership. 80+ delivered.',
    url: `${SITE.url}/web-application-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Web Application Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Application Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom web applications, SaaS platforms, portals and enterprise tools built on React JS, Node JS and MongoDB. Fixed price, zero outsourcing.',
  url: `${SITE.url}/web-application-development`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Web Application Development', item: `${SITE.url}/web-application-development` },
  ],
}

const data = {
  badge: 'Web Application Development',
  h1: 'Web Application Development',
  h1Accent: 'SaaS Platforms, Portals & Enterprise Tools',
  tagline: 'Custom web applications on React JS, Next JS and Node JS from MVP to enterprise-grade systems. Fixed price, zero outsourcing, full source code ownership.',
  desc: 'NNC Digital builds complex web applications for businesses that need more than a standard website. SaaS dashboards, customer portals, booking systems, data management tools and enterprise platforms all built in-house on a modern, scalable tech stack.',
  stat1: '80+',
  stat1Label: 'Web Apps Delivered',
  serviceName: 'web application development',
  h2Features: 'Types of Web Applications We Build',
  features: [
    { h3: 'SaaS Platforms & Subscription Apps', desc: 'Subscription management, billing cycles, feature gating and multi-tier access built on Next JS with Razorpay or Stripe.' },
    { h3: 'Customer & Vendor Portals', desc: 'Role-based access portals for customers, vendors, partners or field agents with custom dashboards and granular permissions.' },
    { h3: 'Booking & Appointment Systems', desc: 'Real-time availability calendars, booking flows, automated reminders and payment collection for service businesses.' },
    { h3: 'Data Management & Admin Dashboards', desc: 'Internal tools for managing leads, orders, inventory or employees replacing manual spreadsheet workflows.' },
    { h3: 'API Development & Integrations', desc: 'REST APIs, third-party integrations (WhatsApp, Razorpay, Tally, SMS gateways) and webhook-driven automation.' },
    { h3: 'Enterprise Workflow Applications', desc: 'Multi-department workflow tools with approval chains, document management and audit trails for larger organisations.' },
    { h3: 'Real-Time Dashboards', desc: 'Live data visualisation for operations, sales or analytics updated in real time via WebSocket or server-sent events.' },
    { h3: 'Multi-Tenant Architecture', desc: 'White-label or multi-tenant SaaS platforms where each client organisation gets their own isolated data environment.' },
    { h3: 'Progressive Web App (PWA) Layer', desc: 'Web apps that are installable, offline-capable and push-notification-enabled on any device without an app store.' },
  ],
  h2Why: 'Why NNC for Web Application Development?',
  why: [
    { n: '01', h3: 'Full-stack development in-house React, Node, MongoDB, PostgreSQL', body: "NNC's full-stack engineers handle frontend, backend, APIs and databases. No outsourced backend team, no mismatched handovers." },
    { n: '02', h3: 'Fixed price even for complex custom applications', body: 'NNC quotes a fixed price after a thorough discovery session. No sprint billing, no escalating timelines. The scope is locked before coding starts.' },
    { n: '03', h3: 'Scalable cloud deployment on AWS', body: 'Every web application is deployed on AWS with auto-scaling, load balancing and managed database services. Built to grow without re-architecting.' },
    { n: '04', h3: 'Source code, databases and credentials 100% yours', body: 'Complete ownership at handover. No SaaS dependency. If you ever want to work with another team, all code and infrastructure is immediately available.' },
    { n: '05', h3: 'Weekly staging updates throughout development', body: 'You have access to a live staging environment throughout the project. Review features as they\'re built not just at the end.' },
    { n: '06', h3: 'Post-delivery documentation and training', body: 'Technical documentation, admin training and a 30-day support window included after every web application delivery.' },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'Express JS', 'MongoDB', 'PostgreSQL', 'AWS', 'Redis', 'WebSockets', 'Razorpay API'],
  h2Tech: 'Web Application Technology Stack',
  h2Faq: 'Web Application Development Frequently Asked Questions',
  faqs: [
    { q: 'How much does web application development cost?', a: 'Web application costs at NNC range from ₹75,000 for simple MVP tools to ₹5,00,000+ for enterprise platforms. The price is always fixed after a scoping session no hourly billing, no sprint escalations. Request a discovery call for an accurate estimate.' },
    { q: 'How long does it take to build a web application?', a: 'Simple web apps (booking systems, portals) typically take 6–10 weeks. Mid-complexity SaaS platforms take 10–16 weeks. Full enterprise systems take 16–24+ weeks. All timelines are agreed upfront with weekly staging milestones.' },
    { q: 'Can you build an MVP first and scale it later?', a: 'Yes this is the most common pattern. NNC scopes an MVP with core features, delivers it on the agreed timeline, and then works with you on subsequent phases. Each phase has its own fixed price and scope.' },
    { q: 'Do you build multi-tenant SaaS platforms?', a: 'Yes. NNC has built multi-tenant platforms where each client organisation has isolated data, custom branding and role-based access. Architecture decisions are made based on your specific security and scale requirements.' },
    { q: 'What tech stack do you use for web applications?', a: "NNC's primary stack is React JS (frontend), Node JS / Express JS (backend), MongoDB or PostgreSQL (database) and AWS (hosting, storage, email). For complex real-time features we add Redis and WebSockets. The stack is chosen based on project requirements." },
    { q: 'Who owns the source code after delivery?', a: 'You do completely and permanently. Every source file, database schema, environment configuration, AWS access credentials and admin login is delivered to you at project close. No ongoing dependency on NNC.' },
  ],
}

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <ServicePageContent data={data} />
      </main>
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
