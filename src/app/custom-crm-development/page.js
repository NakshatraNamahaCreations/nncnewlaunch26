import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Custom CRM Development Company in Bangalore | NNC Digital',
  description: 'Custom CRM development in Bangalore. Proprietary CRM systems, SaaS platforms, admin dashboards and workflow automation built on React JS and Node JS. Fixed price, in-house team. Request a quote.',
  alternates: { canonical: `${SITE.url}/custom-crm-development` },
  keywords: 'custom crm development company bangalore, crm software development india, saas platform development, admin dashboard development, crm solutions bangalore',
  openGraph: {
    title: 'Custom CRM Development Company in Bangalore | NNC Digital',
    description: 'Proprietary CRM systems, SaaS platforms and admin dashboards built in-house on React JS and Node JS. Fixed price, full source code ownership. 80+ delivered.',
    url: `${SITE.url}/custom-crm-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Custom CRM Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom CRM Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom CRM systems, SaaS platforms and admin dashboards built in-house on React JS and Node JS. Replacing manual workflows with purpose-built software. Fixed price.',
  url: `${SITE.url}/custom-crm-development`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Custom CRM Development', item: `${SITE.url}/custom-crm-development` },
  ],
}

const data = {
  badge: 'Custom CRM Development',
  h1: 'Custom CRM Development',
  h1Accent: 'Purpose-Built Software for Your Business',
  tagline: 'Proprietary CRM systems, SaaS platforms and admin dashboards that replace manual workflows built in-house on React JS and Node JS. Fixed price. Zero outsourcing.',
  desc: "NNC Digital builds custom CRM and business software for companies across India. No Salesforce licences, no Zoho monthly fees, no feature compromises. Your CRM is built to your exact workflows, owned outright and maintained by your team from day one.",
  stat1: '80+',
  stat1Label: 'CRM & Software Projects',
  serviceName: 'custom CRM development',
  h2Features: 'What We Build for You',
  features: [
    { h3: 'Custom CRM for Any Sector', desc: 'Sales CRMs, real estate platforms, healthcare management systems, logistics trackers and education portals all custom-built.' },
    { h3: 'Lead Management & Sales Pipeline', desc: 'Lead capture from website, inbound calls and ad campaigns tracked through custom pipeline stages with alerts and follow-up reminders.' },
    { h3: 'Admin Dashboard & Analytics', desc: 'Role-based dashboards for managers, executives and field staff with real-time data, export and visual KPI reporting.' },
    { h3: 'WhatsApp & SMS Automation', desc: 'Automated WhatsApp messages, booking confirmations, payment reminders and follow-up sequences integrated into your CRM workflows.' },
    { h3: 'Razorpay Payment Integration', desc: 'Subscription billing, invoice generation, payment links and EMI collection all connected to your CRM with real-time status sync.' },
    { h3: 'Role-Based Access Control', desc: 'Granular permissions for admins, managers, sales agents and field staff each role sees only what they need to.' },
    { h3: 'API Integrations with Existing Tools', desc: 'Tally, Zoho, Google Workspace, Slack, third-party logistics and any legacy system your business currently uses.' },
    { h3: 'Mobile-Responsive CRM Interface', desc: 'Field agents update lead status, log calls and capture signatures from their phone full CRM functionality without a desktop.' },
    { h3: 'Data Migration from Existing Systems', desc: 'NNC migrates your existing data from spreadsheets, Zoho, Salesforce or legacy databases into your new custom CRM cleanly.' },
  ],
  h2Why: 'Why Build a Custom CRM Instead of Buying One?',
  why: [
    { n: '01', h3: 'Fits your workflow exactly no workarounds', body: "Off-the-shelf CRMs force your team to adapt to the software. A custom CRM adapts to your team. No unused modules, no missing features." },
    { n: '02', h3: 'No monthly SaaS licences you own it forever', body: "A ₹50,000 Salesforce or Zoho annual licence costs ₹5,00,000 over 10 years. Your custom CRM costs once and is yours permanently." },
    { n: '03', h3: 'Fixed price scoped before development starts', body: 'Every CRM project begins with a discovery session and fixed-price proposal. No sprint billing, no feature creep surprises.' },
    { n: '04', h3: 'Source code, database and APIs 100% yours', body: 'Complete handover at delivery. Your team or any future developer can maintain and extend the software. No vendor lock-in.' },
    { n: '05', h3: 'In-house React + Node + MongoDB team', body: "NNC's full-stack engineers build frontend dashboards, backend APIs and database schemas under one roof. No outsourced backend." },
    { n: '06', h3: '80+ custom software projects delivered', body: 'Real estate CRMs, hospital management systems, logistics platforms, education portals, subscription tools across 10+ industries.' },
  ],
  techStack: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'PostgreSQL', 'AWS', 'Razorpay API', 'WhatsApp API', 'Redis', 'REST APIs'],
  h2Tech: 'CRM Development Technology Stack',
  h2Faq: 'Custom CRM Development Frequently Asked Questions',
  faqs: [
    { q: 'How much does custom CRM development cost?', a: 'Custom CRM projects at NNC are scoped individually. Simple CRMs (lead management + admin dashboard) start from ₹75,000. Mid-complexity platforms with WhatsApp automation, payment integration and multi-role access range from ₹1,50,000 to ₹3,00,000. Full enterprise platforms are scoped separately. All pricing is fixed upfront.' },
    { q: 'How long does it take to build a custom CRM?', a: 'Simple CRM with lead management and admin panel: 8–10 weeks. Mid-complexity with integrations, payment collection and automated messaging: 12–16 weeks. Full enterprise platform: 16–24+ weeks. All timelines are agreed upfront with weekly staging milestones.' },
    { q: 'Is a custom CRM better than Salesforce or Zoho?', a: "A custom CRM is better when your workflows are complex, unusual or don't fit neatly into an off-the-shelf system and when the ongoing licence cost makes ownership economically sensible. NNC will give you an honest recommendation. If Zoho or HubSpot genuinely fits your need at lower cost, we'll say so." },
    { q: 'Can you integrate our existing tools with the new CRM?', a: 'Yes. NNC builds API integrations with Tally, Zoho, Google Workspace, Slack, Razorpay, WhatsApp Business, SMS gateways, logistics APIs and any legacy system with a documented API. Integration scope is confirmed during the discovery session.' },
    { q: 'Can we add features to the CRM after delivery?', a: "Yes. After the initial delivery, NNC can develop additional modules, integrations or features as separate fixed-price scopes. You can also hand the codebase to your own internal team or any other developer there's no proprietary code or dependency on NNC." },
    { q: 'Will the CRM work on mobile for field teams?', a: 'Yes. All NNC CRM builds are mobile-responsive. Field sales agents, delivery staff and on-site teams can update leads, log visits, capture signatures and access the full CRM from their smartphone. We also build PWA layers that allow offline data entry synced when connectivity is restored.' },
  ],
}

export default function CustomCrmDevelopmentPage() {
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
