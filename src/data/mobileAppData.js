// ── Mobile App Development Landing Page Data ──────────────────────────────

export const APP_PAGE = {
  slug: '/mobile-app-development-company-in-bangalore',
  title: 'Mobile App Development Company in Bangalore | NNC Digital',
  description:
    'Top-rated mobile app development company in Bangalore. Custom Android & iOS apps on React Native & Flutter. 150+ apps delivered. 4.9★ Google. Fixed price. Source code yours. Call +91 99005 66466.',
  keywords: [
    'mobile app development company in bangalore',
    'android app development company bangalore',
    'ios app development company bangalore',
    'react native development company bangalore',
    'flutter app development bangalore',
    'app development company bangalore',
    'mobile app developers bangalore',
    'custom mobile app development bangalore',
    'on demand app development bangalore',
    'ecommerce app development bangalore',
    'startup app development bangalore',
    'cross platform app development bangalore',
  ],
  heroHeadline: ['Build a Mobile App That', 'Your Users Actually Love'],
  heroSub:
    'Custom Android & iOS apps built by a 35+ member in-house team in Bangalore. React Native, Flutter, zero outsourcing. 150+ apps delivered. Fixed price. Source code 100% yours.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Mobile App Development', href: null },
  ],
}

export const APP_STATS = [
  { n: '150+', label: 'Apps Delivered' },
  { n: '35+',  label: 'In-house Specialists' },
  { n: '4.9★', label: 'Google Rating' },
  { n: '8+',   label: 'Years Experience' },
  { n: '100%', label: 'Source Code Ownership' },
]

export const APP_TECH = [
  { name: 'React Native', desc: 'Single codebase for Android & iOS. Near-native performance. Ideal for most business apps.', ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', tag: 'Cross-platform' },
  { name: 'Flutter',      desc: "Google's UI toolkit. Pixel-perfect custom UI. Excellent for design-heavy apps.", ico: 'M4 4h6l6 6-6 6H4l6-6z', tag: 'Cross-platform' },
  { name: 'Android (Kotlin)', desc: 'Native Android for apps needing deep hardware integration or Play Store exclusives.', ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', tag: 'Native Android' },
  { name: 'iOS (Swift)',  desc: 'Native iOS for apps requiring App Store features, ARKit or CoreML integration.', ico: 'M12 2a10 10 0 100 20 10 10 0 000-20z', tag: 'Native iOS' },
]

export const APP_TYPES = [
  { ico: '🛍️', name: 'E-commerce Apps',       desc: 'Product catalogues, cart, Razorpay/UPI payments, order tracking and vendor dashboards.' },
  { ico: '🚗', name: 'On-demand Apps',          desc: 'Uber-style booking customer app, service provider app and admin panel.' },
  { ico: '🏥', name: 'Healthcare Apps',         desc: 'Appointment booking, doctor consultation, prescription management and health records.' },
  { ico: '📚', name: 'EdTech Apps',             desc: 'Course delivery, video streaming, live classes, quizzes and certificate generation.' },
  { ico: '🏋️', name: 'Fitness & Sports Apps',   desc: 'Workout tracking, coach booking, tournament management and leaderboards.' },
  { ico: '🏠', name: 'Real Estate Apps',         desc: 'Property listings, virtual tours, agent CRM and EMI calculators.' },
  { ico: '🍽️', name: 'Food & Restaurant Apps',  desc: 'Menu ordering, table booking, kitchen display system and loyalty programmes.' },
  { ico: '💰', name: 'Finance & Fintech Apps',   desc: 'Portfolio tracking, investment calculators, KYC onboarding and wallet management.' },
  { ico: '🚚', name: 'Logistics & Delivery Apps',desc: 'Driver tracking, route optimisation, proof of delivery and fleet management.' },
  { ico: '🏢', name: 'Enterprise & HRMS Apps',  desc: 'Employee self-service, leave management, payroll and performance reviews.' },
]

export const APP_PROCESS = [
  { n: '01', title: 'Requirement Discovery',   desc: 'We map your complete user journey, feature list and tech requirements. No assumptions.', time: 'Day 1' },
  { n: '02', title: 'UI/UX Wireframing',        desc: 'Figma screens for every flow onboarding, core features, edge cases. You approve before code.', time: 'Week 1–2' },
  { n: '03', title: 'API & Backend Setup',      desc: 'Node JS REST APIs, MongoDB/PostgreSQL database and AWS infrastructure provisioned.', time: 'Week 2–3' },
  { n: '04', title: 'App Development',          desc: 'React Native or Flutter build. Weekly TestFlight/APK drops so you track progress live.', time: 'Week 3–10' },
  { n: '05', title: 'QA & Device Testing',      desc: 'Tested on 15+ real devices. Performance, crash and battery benchmarks run before submission.', time: 'Week 10–11' },
  { n: '06', title: 'Store Submission & Launch',desc: 'Play Store & App Store submission handled by NNC. Full source code and credentials delivered.', time: 'Week 11–12' },
]

export const APP_FEATURES = [
  { ico: '⚡', title: 'React Native & Flutter',  desc: 'Single codebase for Android + iOS. 60fps performance. 30–40% faster delivery vs. native builds.' },
  { ico: '☁️', title: 'AWS Cloud Backend',       desc: 'Node JS APIs + MongoDB/PostgreSQL on AWS EC2/RDS. Auto-scaling. 99.9% uptime SLA.' },
  { ico: '🔐', title: 'Secure by Default',        desc: 'JWT auth, data encryption at rest and in transit, OWASP best practices on every build.' },
  { ico: '📊', title: 'Analytics Built-in',       desc: 'Firebase Analytics, Mixpanel or custom dashboards track every user action from day one.' },
  { ico: '🔔', title: 'Push Notifications',       desc: 'Firebase Cloud Messaging for targeted, segmented push notifications on both platforms.' },
  { ico: '💳', title: 'Payment Integrations',     desc: 'Razorpay, Stripe, PayU, PhonePe and UPI all PCI-DSS compliant integrations.' },
  { ico: '🌐', title: 'Offline Mode Support',     desc: 'Local SQLite caching so your app works without internet and syncs when back online.' },
  { ico: '🛠️', title: '30 Days Post-launch',      desc: 'Bug fixes and minor updates for 30 days after Play Store / App Store launch at no extra cost.' },
]

export const APP_PRICING = [
  {
    tier: 'MVP / Startup',
    price: '₹75,000',
    priceGst: '₹88,500',
    timeline: '6–8 weeks',
    best: 'First version to validate your idea',
    includes: [
      'React Native (Android + iOS)',
      'Up to 8 core screens',
      'Basic REST API + Node JS backend',
      'MongoDB database',
      'User auth (email + OTP)',
      'Basic push notifications',
      'Play Store deployment',
      '30 days support',
    ],
    cta: 'Start MVP',
    highlight: false,
  },
  {
    tier: 'Business App',
    price: '₹1,75,000',
    priceGst: '₹2,06,500',
    timeline: '10–14 weeks',
    best: 'Full-featured app for a growing business',
    includes: [
      'React Native or Flutter',
      'Up to 20 screens',
      'Node JS REST API + admin panel',
      'Payment gateway integration',
      'Push notifications + in-app chat',
      'AWS hosting setup',
      'Analytics dashboard',
      'Play Store + App Store',
      '30 days support',
    ],
    cta: 'Get a Quote',
    highlight: true,
  },
  {
    tier: 'Enterprise Platform',
    price: 'Custom',
    priceGst: null,
    timeline: '14–24 weeks',
    best: 'Multi-role complex platform',
    includes: [
      'React Native / Flutter / Native',
      'Unlimited screens & modules',
      'Microservices architecture',
      'CRM + ERP integrations',
      'Multi-language & multi-currency',
      'Role-based access control',
      'Dedicated AWS infrastructure',
      'CI/CD pipeline',
      '3 months support',
    ],
    cta: 'Discuss Project',
    highlight: false,
  },
]

export const APP_PORTFOLIO = [
  {
    name: 'Vijaya Home Services',
    type: 'On-demand Services Platform',
    stack: 'React Native · Node JS · AWS',
    result: '340% booking growth in 6 months',
    metric: '340%',
    metricLabel: 'Booking growth',
    img: 'https://www.nakshatranamahacreations.com/media/ourwork/vijayhome.webp',
    stores: ['Play Store'],
  },
  {
    name: 'Pro Leverage',
    type: 'Finance & Investment App',
    stack: 'Flutter · REST API · Firebase',
    result: '10,000+ downloads in month one',
    metric: '10K+',
    metricLabel: 'Downloads M1',
    img: 'https://www.nakshatranamahacreations.com/media/ourwork/proleverage.webp',
    stores: ['Play Store'],
  },
  {
    name: 'CND Play',
    type: 'OTT Streaming Platform',
    stack: 'React Native · Video SDK · Node JS',
    result: 'Subscription-based OTT with live channels',
    metric: '4.4★',
    metricLabel: 'Play Store rating',
    img: 'https://www.nakshatranamahacreations.com/media/ourwork/cdn.webp',
    stores: ['Play Store'],
  },
]

export const APP_FAQS = [
  {
    q: 'How much does mobile app development cost in Bangalore?',
    a: 'A basic MVP app starts from ₹75,000. A full-featured business app is typically ₹1,50,000–₹2,50,000. Enterprise platforms with complex features are scoped individually. All pricing is fixed before work begins no hourly billing or surprise invoices.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'An MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Your timeline is agreed in writing before development begins and tracked weekly.',
  },
  {
    q: 'React Native or Flutter which is better for my app?',
    a: 'Both are excellent. React Native has a larger ecosystem and shares code with web React projects. Flutter gives more precise UI control and better performance for animation-heavy apps. NNC recommends the best fit after understanding your specific requirements.',
  },
  {
    q: 'Do I need separate apps for Android and iOS?',
    a: 'Not with React Native or Flutter. One codebase delivers both Android and iOS apps saving 30–40% in development time and cost while maintaining near-native performance.',
  },
  {
    q: 'Will NNC handle Play Store and App Store submission?',
    a: 'Yes completely. NNC manages the full submission process including store listing, screenshots, description, review responses and release management on both Google Play Store and Apple App Store.',
  },
  {
    q: 'Do I own the source code?',
    a: 'Yes completely and permanently. On delivery you receive the full app source code, backend code, database schema, all API credentials and hosting logins. The app is 100% yours with zero ongoing obligation to NNC.',
  },
]

export const APP_TESTIMONIALS = [
  {
    quote: '"NNC built our complete on-demand platform customer app, vendor app and admin panel in 8 weeks. Within 6 months of launch we had 340% more bookings. The team was always reachable and delivered exactly what was scoped."',
    author: 'Vijaya Home Services',
    role: 'On-demand Services · Bengaluru',
    result: '340% booking growth',
    featured: true,
  },
  {
    quote: '"We needed a finance app that retail investors could actually use. NNC got it right first time. 10,000 downloads in month one and 4.4 stars on Play Store. They knew exactly what they were doing."',
    author: 'Pro Leverage',
    role: 'Finance App · Bengaluru',
    result: '10K+ downloads M1',
    featured: false,
  },
  {
    quote: '"The team at NNC understood our OTT product inside out. The React Native app performed exactly like a native app. Deployment was smooth and they handled all the Play Store formalities."',
    author: 'CND Play',
    role: 'OTT Platform · Bengaluru',
    result: '4.4★ Play Store',
    featured: false,
  },
]
