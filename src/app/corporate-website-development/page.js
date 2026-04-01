import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate Website Development Company in Bangalore | NNC Digital',
  description: 'Professional corporate website development in Bangalore. Custom React JS & Next JS websites for businesses PageSpeed 90+ guaranteed, fixed price, zero outsourcing. 200+ delivered. Call NNC Digital.',
  alternates: { canonical: `${SITE.url}/corporate-website-development` },
  keywords: 'corporate website development bangalore, business website development company bangalore, professional website development, custom corporate website, react js website company bangalore',
  openGraph: {
    title: 'Corporate Website Development Company in Bangalore | NNC Digital',
    description: 'Custom React JS & Next JS corporate websites PageSpeed 90+ guaranteed, fixed price. 200+ delivered. In-house team, zero outsourcing.',
    url: `${SITE.url}/corporate-website-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Corporate Website Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Website Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom React JS and Next JS corporate websites for businesses across India. PageSpeed 90+ guaranteed, fixed price, zero outsourcing.',
  url: `${SITE.url}/corporate-website-development`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Corporate Website Development', item: `${SITE.url}/corporate-website-development` },
  ],
}

const data = {
  badge: 'Corporate Website Development',
  h1: 'Corporate Website Development',
  h1Accent: 'Built for Business Credibility',
  tagline: 'Custom Next JS websites for corporate and business clients designed to rank, convert and perform. PageSpeed 90+ in every delivery contract.',
  desc: 'NNC Digital builds professional corporate websites for companies across India. Each site is custom-coded on React JS and Next JS no WordPress, no templates. Designed to rank on Google, load fast on mobile and convert visitors into enquiries.',
  stat1: '200+',
  stat1Label: 'Corporate Sites Delivered',
  serviceName: 'corporate website development',
  h2Features: "What's Included in Every Corporate Website",
  features: [
    { h3: 'Custom Design No Templates', desc: "Every design is built from scratch in Figma to reflect your brand identity. No page builder, no theme. Yours exclusively." },
    { h3: 'React JS & Next JS Development', desc: "Built on the industry's fastest stack server-side rendering, SEO-ready architecture and PageSpeed 90+ guaranteed." },
    { h3: 'Mobile-First Responsive Layout', desc: 'Over 70% of corporate website visits are on mobile. NNC designs mobile-first and tests across 15+ device configurations.' },
    { h3: 'SEO-Ready Page Structure', desc: 'Proper H1–H6 hierarchy, schema markup, sitemap.xml, canonical URLs and meta titles written before launch.' },
    { h3: 'Content Management System', desc: 'Update team pages, services, news and case studies through an admin panel no developer needed post-launch.' },
    { h3: 'Enquiry Forms & Lead Capture', desc: 'Contact forms, service enquiry funnels and WhatsApp integration connected to your preferred CRM or inbox.' },
    { h3: 'Integrations & Third-Party APIs', desc: 'Google Analytics, HubSpot, Salesforce, Razorpay, Calendly and any other system your team relies on.' },
    { h3: 'PageSpeed 90+ Contractual', desc: "Written into every delivery contract. If your website doesn't score 90+ on mobile and desktop, we fix it before you pay the balance." },
    { h3: '30-Day Post-Launch Support', desc: 'One month of included support after launch bug fixes, minor updates and content changes at no extra charge.' },
  ],
  h2Why: 'Why Corporate Businesses Choose NNC Digital',
  why: [
    { n: '01', h3: '35+ permanent in-house employees zero outsourcing', body: "Every designer, developer and project manager is a full-time NNC employee. Walk into our Bengaluru office and meet the team building your website." },
    { n: '02', h3: 'Fixed price agreed before work starts', body: "In 565+ projects over 8 years, not one client has been invoiced more than the agreed price. Scope locked before development begins." },
    { n: '03', h3: 'Source code 100% yours on delivery', body: "Every file, every database and every admin credential is handed over. No platform dependency, no lock-in, no ongoing obligation to NNC." },
    { n: '04', h3: '4.9★ Google rating 87 verified reviews', body: "Our track record is public. Not a claim, not a marketing number 87 real reviews from real clients verified on Google." },
    { n: '05', h3: 'One named project manager, start to finish', body: "A dedicated PM from discovery to handover. Weekly staging updates, direct phone access and no 'that's not my department' moments." },
    { n: '06', h3: 'Serving businesses across India since 2015', body: "Offices in Bengaluru, Mumbai, Mysuru and Hyderabad. Operating for 8+ years with a verifiable portfolio of 200+ corporate websites." },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'MongoDB', 'AWS', 'Figma', 'Vercel', 'Google Analytics'],
  h2Tech: 'Technology Stack for Corporate Websites',
  h2Faq: 'Corporate Website Development Frequently Asked Questions',
  faqs: [
    { q: 'How much does a corporate website cost?', a: 'Corporate websites at NNC typically range from ₹24,999 to ₹1,50,000 depending on scope number of pages, custom features, CMS complexity and integrations. All pricing is fixed before work begins. No hourly billing, no surprise invoices. Request a free quote for your specific requirements.' },
    { q: 'How long does it take to build a corporate website?', a: 'A standard 10–20 page corporate website takes 3–5 weeks from design to launch. Larger sites with custom CMS, product catalogues or portal features typically take 6–10 weeks. All timelines are agreed upfront and tracked with weekly staging updates.' },
    { q: 'Will my corporate website rank on Google?', a: "NNC builds every website with SEO-ready architecture correct H1–H6 structure, schema markup, sitemap.xml, canonical URLs and PageSpeed 90+. We don't guarantee specific keyword rankings (no one can), but we deliver technically sound websites designed to rank." },
    { q: 'Do I need to provide content and images?', a: "You provide your company's brand content logo, team photos, service descriptions and case studies. NNC handles all technical writing for SEO meta titles, descriptions and headings. Stock photography can be provided if you don't have original images." },
    { q: 'Can I update my website myself after launch?', a: 'Yes. Every corporate website from NNC includes a custom admin panel so your team can update pages, add news posts, change team members and manage enquiries without needing a developer. Full training is included at handover.' },
    { q: 'What if I already have a website and want a redesign?', a: "Corporate website redesigns are one of our most common projects. NNC migrates existing content, preserves SEO rankings and delivers a modern, fast website. We analyse your current site's performance before starting to ensure no loss in organic traffic." },
  ],
}

export default function CorporateWebsiteDevelopmentPage() {
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
