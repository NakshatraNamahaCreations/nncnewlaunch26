// ─── NNC SITE DATA ───────────────────────────────────────────────────────────
// All content in one place. Update here — reflects everywhere.

export const SITE = {
  name: 'Nakshatra Namaha Creations Pvt. Ltd.',
  shortName: 'NNC Digital',
  tagline: 'Your Digital Solutions Partner',
  url: 'https://www.nakshatranamahacreations.com',
  phone: '+91 99005 66466',
  phoneHref: 'tel:+919900566466',
  whatsapp: 'https://wa.me/919900566466',
  email: 'info@nakshatranamahacreations.com',
  founded: '2015',
  cin: 'U74999KA2015PTC082563',
  logo: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png',
  teamPhoto: 'https://www.nakshatranamahacreations.com/media/teams/NNCGRPPHO.avif',
  social: {
    instagram: 'https://www.instagram.com/nnc.digitalbengaluru/',
    linkedin: 'https://www.linkedin.com/company/nakshatra-namaha-creation/',
    youtube: 'https://www.youtube.com/c/NakshatraNamahaCreations',
    facebook: 'https://www.facebook.com/Nakshatranamahacreations/',
    twitter: 'https://x.com/nncbengaluru',
  },
}

export const OFFICES = [
  {
    city: 'Bengaluru',
    type: 'Head Office',
    address: 'Darshan Plaza, 1st Floor, Channasandra',
    pin: '560 098',
    state: 'Karnataka',
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    city: 'Mumbai',
    type: 'Branch Office',
    address: 'Lodha Signet, Kolshet Rd, Thane West',
    pin: '400 607',
    state: 'Maharashtra',
    lat: 19.2183,
    lng: 72.9781,
  },
  {
    city: 'Mysuru',
    type: 'Branch Office',
    address: 'Suswani Towers, JP Nagar 2nd Stage',
    pin: '570 008',
    state: 'Karnataka',
    lat: 12.2958,
    lng: 76.6394,
  },
  {
    city: 'Hyderabad',
    type: 'Branch Office',
    address: 'Prakashnagar, Begumpet',
    pin: '500 016',
    state: 'Telangana',
    lat: 17.4449,
    lng: 78.4685,
  },
]

export const STATS = [
  { n: '565+', label: 'Projects Delivered', countVal: 565 },
  { n: '8+',   label: 'Years in Business' },
  { n: '35+',  label: 'In-house Specialists' },
  { n: '4.9★', label: 'Google Rating · 87 Reviews' },
  { n: '4',    label: 'Walk-in Offices' },
]

export const CLIENTS = [
  'Puran Interiors', 'Vijaya Home Services', 'Pro Leverage',
  'CND Play', 'Aadhya Instruments', 'Make My Documents',
  'Rent Angadi', '3M Car Care',
]

export const SERVICES = [
  {
    id: 'website-development',
    num: '01',
    name: 'Website Development',
    slug: '/website-development-company-in-bangalore',
    icon: 'M3 3h18v14H3zM8 21h8M12 17v4',
    iconBg: 'rgba(33,150,243,.1)',
    iconColor: '#2196F3',
    desc: 'Custom React JS & Next JS websites — corporate, e-commerce, portals and SaaS. PageSpeed 90+ in every delivery contract.',
    features: ['Corporate & business websites', 'E-commerce & portals', 'React JS / Next JS', 'PageSpeed 90+ guaranteed'],
    price: 'From ₹24,999',
  },
  {
    id: 'mobile-app-development',
    num: '02',
    name: 'Mobile App Development',
    slug: '/mobile-app-development-company-in-bangalore',
    icon: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z',
    iconBg: 'rgba(16,185,129,.1)',
    iconColor: '#10B981',
    desc: 'iOS & Android on React Native & Flutter — MVP to enterprise with complete Play Store & App Store deployment.',
    features: ['React Native cross-platform', 'Flutter for iOS & Android', 'Play Store deployment', 'On-demand platforms'],
    price: 'From ₹75,000',
  },
  {
    id: 'crm-software',
    num: '03',
    name: 'CRM & Custom Software',
    slug: '/services',
    icon: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5',
    iconBg: 'rgba(245,158,11,.1)',
    iconColor: '#F59E0B',
    desc: 'Proprietary CRM systems, SaaS platforms and admin dashboards — replacing manual workflows with scalable software.',
    features: ['Custom CRM for any sector', 'SaaS & subscription platforms', 'Razorpay & WhatsApp integration', 'Admin dashboards'],
    price: 'Custom scope',
  },
  {
    id: 'digital-marketing',
    num: '04',
    name: 'Digital Marketing & SEO',
    slug: '/digital-marketing-agency-in-bangalore',
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
    iconBg: 'rgba(124,58,237,.1)',
    iconColor: '#7C3AED',
    desc: 'Google Ads, Meta Ads, SEO & social media — real leads reported, not vanity metrics.',
    features: ['Google Search & Display', 'Facebook & Instagram Ads', 'Technical SEO & on-page', 'Social media management'],
    price: 'From ₹15,000/mo',
  },
  {
    id: 'corporate-video',
    num: '05',
    name: 'Corporate Video Production',
    slug: '/corporate-video-production-company-in-bangalore',
    icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z',
    iconBg: 'rgba(239,68,68,.1)',
    iconColor: '#EF4444',
    desc: 'Brand films, drone footage & motion graphics — full in-house production from scripting to 4K.',
    features: ['Corporate brand films', 'Drone & aerial video', 'Product & ad shoots', 'Motion graphics'],
    price: 'From ₹50,000',
  },
  {
    id: '2d-animation',
    num: '06',
    name: '2D Animation',
    slug: '/2d-animation-studio-in-bangalore',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    iconBg: 'rgba(16,185,129,.1)',
    iconColor: '#10B981',
    desc: 'Explainer videos, character animation & social media reels — script to delivery, entirely in-house.',
    features: ['Explainer & demo videos', 'Character animation', 'Whiteboard animations', 'Social media reels'],
    price: 'From ₹18,000/min',
  },
  {
    id: 'graphic-design',
    num: '07',
    name: 'Graphic Design & Branding',
    slug: '/graphic-design-company-in-bangalore',
    icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z',
    iconBg: 'rgba(245,158,11,.1)',
    iconColor: '#F59E0B',
    desc: 'Logo design, brand identity, UI/UX design & social media creatives.',
    features: ['Logo & brand identity', 'UI/UX for web & apps', 'Social media creative kits', 'Brand guidelines'],
    price: 'From ₹8,000',
  },
  {
    id: 'b2b-marketing',
    num: '08',
    name: 'B2B Marketing',
    slug: '/b2b-marketing-agency-in-bangalore',
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z',
    iconBg: 'rgba(33,150,243,.1)',
    iconColor: '#2196F3',
    desc: 'ABM, LinkedIn outreach & enterprise pipeline building for B2B businesses.',
    features: ['Account-based marketing', 'LinkedIn lead generation', 'Email outreach', 'Pipeline reporting'],
    price: 'Custom scope',
  },
]

export const WHY_NNC = [
  {
    num: '01',
    title: '35+ permanent in-house employees — zero outsourcing',
    body: "Every person on your project is a full-time NNC employee. Walk into our Bengaluru office today and meet them. No freelancers, no offshore contractors.",
    proof: '4 walk-in offices · Meet your team in person',
  },
  {
    num: '02',
    title: 'PageSpeed 90+ written into every delivery contract',
    body: "Not a target — a contractual requirement. If the website doesn't hit 90+ on mobile and desktop, we fix it before you pay the balance.",
    proof: 'Every project · Mobile + Desktop · Contractual',
  },
  {
    num: '03',
    title: 'Fixed price agreed before work starts — zero surprises',
    body: 'We quote a fixed price before a single wireframe is drawn. In 565+ projects over 8 years, not one client has been invoiced more than agreed.',
    proof: '50% at kickoff · 50% before delivery',
  },
  {
    num: '04',
    title: 'You own 100% of the source code — forever, no strings',
    body: 'On delivery: every source file, database, admin credential and hosting login is yours. No platform lock-in, no monthly fees, no obligation.',
    proof: 'No lock-in · No monthly fees · Full ownership',
  },
  {
    num: '05',
    title: '565+ delivered projects — a verifiable track record',
    body: 'Operating continuously since 2015. Our portfolio is viewable, our 87 Google reviews are public. We are not a new agency building a portfolio at your expense.',
    proof: 'Verifiable on Google · Since 2015',
  },
  {
    num: '06',
    title: 'One named project manager — same team, start to finish',
    body: "Every project has a named PM from discovery to handover. Weekly staging updates, direct access and no 'that's not my department' moments.",
    proof: 'Weekly updates · Direct access · No handoffs',
  },
]

export const CASE_STUDIES = [
  {
    client: 'Puran Interiors',
    industry: 'Interior Design · Bengaluru',
    tags: ['Next JS', 'SEO', 'CMS'],
    img: 'https://www.nakshatranamahacreations.com/media/tech/puranInterio.avif',
    title: 'Website & SEO — Page 1 Google in 90 Days',
    challenge: 'No website, no Google ranking. Every client searching for interior designers in Bangalore found competitors first.',
    solution: 'NNC built a Next JS portfolio website with on-page SEO, custom CMS and Core Web Vitals optimisation. PageSpeed 95 on delivery.',
    highlight: 'Page 1 Google ranking within 90 days. 12+ qualified enquiries per month ongoing.',
    metrics: [
      { n: '1st', l: 'Google page · 90 days' },
      { n: '12+', l: 'Enquiries/month' },
      { n: '95', l: 'PageSpeed' },
      { n: '4wk', l: 'Delivery' },
    ],
  },
  {
    client: 'Vijaya Home Services',
    industry: 'On-demand Services · Bengaluru',
    tags: ['React Native', 'Node JS', 'AWS'],
    img: 'https://www.nakshatranamahacreations.com/media/tech/vijayhom.avif',
    title: 'Full Platform — 340% Booking Growth in 6 Months',
    challenge: 'All bookings managed by phone. No app, no CRM, zero management visibility. Revenue capped by manual processes.',
    solution: 'NNC built a complete ecosystem: Android customer app, vendor staff app, admin CRM with analytics — all on AWS.',
    highlight: '340% more bookings in 6 months. Zero phone bookings remaining. 4.6 stars Play Store.',
    metrics: [
      { n: '340%', l: 'Booking growth' },
      { n: '4.6★', l: 'Play Store' },
      { n: '0', l: 'Phone bookings' },
      { n: '8wk', l: 'Delivery' },
    ],
  },
  {
    client: 'Pro Leverage',
    industry: 'Finance & Investment · Bengaluru',
    tags: ['Flutter', 'REST API'],
    img: 'https://www.nakshatranamahacreations.com/media/ourwork/proleverage.webp',
    title: 'Finance App — 10,000 Downloads in Month One',
    challenge: 'Real-time financial data needed to be accessible to retail investors on mobile. Competitor apps were unusable.',
    solution: 'NNC built a Flutter app with real-time charts, live data feeds and a UI designed around retail investor behaviour.',
    highlight: '10,000+ Play Store downloads in month one. 4.4 stars. 60% fewer support queries.',
    metrics: [
      { n: '10K+', l: 'Downloads M1' },
      { n: '4.4★', l: 'Play Store' },
      { n: '60%', l: 'Fewer queries' },
      { n: '6wk', l: 'Delivery' },
    ],
  },
]

export const PROCESS_STEPS = [
  { num: '01', title: 'Discovery',       desc: 'We understand your business, goals and audience. No assumptions, no templates.',      time: 'Day 1' },
  { num: '02', title: 'Scope & Quote',   desc: 'Fixed-price proposal agreed in writing before any work begins.',                     time: 'Day 1–2' },
  { num: '03', title: 'UI/UX Design',    desc: 'Figma wireframes and design — your approval before development starts.',             time: 'Week 1–2' },
  { num: '04', title: 'Development',     desc: 'Weekly sprints with a live staging environment you can review anytime.',             time: 'Week 2–4' },
  { num: '05', title: 'QA & PageSpeed',  desc: 'Cross-device testing, PageSpeed 90+ audit and on-page SEO before launch.',          time: 'Week 4–5' },
  { num: '06', title: 'Launch & Handoff',desc: 'Full source code, all credentials, 30 days post-launch support included.',          time: 'Week 5' },
]

export const TESTIMONIALS = [
  {
    quote: '"NNC delivered a website that changed how our business operates online. Within 90 days we were on page 1 and receiving 12+ qualified enquiries per month that didn\'t exist before. Professional, communicative and on budget."',
    author: 'Puran Interiors',
    company: 'Interior Design · Bengaluru · Google Review',
    result: '12+ enquiries/month',
    featured: true,
  },
  {
    quote: '"Professional, responsive and ensured the website was designed exactly as I envisioned. Clean, functional and user-friendly. A special thanks to the entire NNC team."',
    author: 'Make My Documents',
    company: 'Document Services · Bengaluru · Google Review',
    result: 'On time & on budget',
    featured: false,
  },
  {
    quote: '"Our business consultant at NNC is excellent in understanding client requirements. The best support team — they guide and improve your ideas and deliver what they promise."',
    author: 'Chaandini Srinivas',
    company: 'Client · Bengaluru · Google Review',
    result: 'Ongoing relationship',
    featured: false,
  },
]

export const INDUSTRIES = [
  { icon: 'M3 21h18M5 21V7l8-4v18M19 21V11l-6-4', color: '#EF4444', bg: 'rgba(239,68,68,.08)', name: 'Hospitality', sub: 'Hotels & Resorts' },
  { icon: 'M22 12h-4l-3 9L9 3l-3 9H2', color: '#10B981', bg: 'rgba(16,185,129,.08)', name: 'Healthcare', sub: 'Clinics & Hospitals' },
  { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', color: '#2196F3', bg: 'rgba(33,150,243,.08)', name: 'Real Estate', sub: 'Builders & Brokers' },
  { icon: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z', color: '#7C3AED', bg: 'rgba(124,58,237,.08)', name: 'Education', sub: 'EdTech & Coaching' },
  { icon: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0', color: '#F59E0B', bg: 'rgba(245,158,11,.08)', name: 'E-commerce', sub: 'D2C & Marketplaces' },
  { icon: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', color: '#6366F1', bg: 'rgba(99,102,241,.08)', name: 'Legal', sub: 'Law Firms & LLPs' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: '#EC4899', bg: 'rgba(236,72,153,.08)', name: 'Events', sub: 'Weddings & Corporate' },
  { icon: 'M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z', color: '#F97316', bg: 'rgba(249,115,22,.08)', name: 'Manufacturing', sub: 'B2B & FMCG' },
  { icon: 'M5 17h2l2-4h6l2 4h2M7 17a2 2 0 11-4 0M21 17a2 2 0 11-4 0M15 6a3 3 0 11-6 0v7h6V6z', color: '#0EA5E9', bg: 'rgba(14,165,233,.08)', name: 'Automobile', sub: 'Dealers & Service' },
  { icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z', color: '#14B8A6', bg: 'rgba(20,184,166,.08)', name: 'Fitness', sub: 'Gyms & Sports' },
]

export const TECH_STACK = [
  { name: 'React JS',      type: 'Frontend',   icon: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5' },
  { name: 'Next JS',       type: 'SSR + SEO',  icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20' },
  { name: 'Node JS',       type: 'Backend',    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { name: 'MongoDB',       type: 'Database',   icon: 'M12 2v20M10 6s1 2 2 2 2-2 2-2M10 18s1-2 2-2 2 2 2 2' },
  { name: 'React Native',  type: 'Mobile',     icon: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z' },
  { name: 'Flutter',       type: 'Mobile',     icon: 'M12 2l8 4-8 4-8-4z' },
  { name: 'AWS',           type: 'Cloud',      icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z' },
  { name: 'PostgreSQL',    type: 'Database',   icon: 'M12 2a10 10 0 100 20z' },
]

export const FAQS = [
  {
    q: 'How much does a website or app project cost?',
    a: 'Website development starts from ₹24,999. E-commerce from ₹45,000. Mobile apps from ₹75,000. CRM and SaaS platforms are scoped individually. All pricing is fixed before work begins — no hourly billing, no change orders, no surprise invoices.',
  },
  {
    q: 'Do I own the source code after delivery?',
    a: 'Yes — completely and permanently. On delivery you receive every source file, database schema, admin credential and hosting login. The website or app is 100% yours — no platform dependency, no licence fees, no ongoing obligation to NNC.',
  },
  {
    q: 'Does NNC outsource any work?',
    a: 'Never. Every person on your project is a permanent full-time NNC employee. No freelancers, no offshore contractors. You can walk into any of our four offices and meet your team in person any day between 9am and 7pm.',
  },
  {
    q: 'How long does a project take?',
    a: 'Corporate website: 3–5 weeks. E-commerce: 5–8 weeks. Mobile app: 8–14 weeks. CRM: 10–18 weeks. All timelines are agreed upfront and tracked weekly through a live staging environment you can access throughout.',
  },
  {
    q: 'What if I am not satisfied with the result?',
    a: 'NNC includes 30 days of post-launch support on every project at no extra charge. You approve the design before development begins and approve the final build on staging before paying the balance.',
  },
  {
    q: 'Do you work with clients outside Bangalore?',
    a: 'Yes. Offices in Bengaluru, Mumbai, Mysuru and Hyderabad — and we have delivered projects for clients in the US, UK and Canada. Most collaboration is remote-first using Slack, Jira and weekly video calls.',
  },
]
