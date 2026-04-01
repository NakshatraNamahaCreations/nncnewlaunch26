import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Script from 'next/script'
import WhatsAppChat from '@/components/WhatsAppChat'
import QuoteModal from '@/components/QuoteModal'
import CallFloat from '@/components/CallFloat'

export const metadata = {
  title: 'Website & App Development Company in Bangalore | NNC',
  icons: {
    icon: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png',
    apple: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png',
    shortcut: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png',
  },
  description:
    'NNC builds websites, mobile apps, CRM software and runs digital marketing. 35+ in-house team, 565+ projects, 4 offices. Fixed price. Free quote in 24hrs.',
  keywords: [
    'website development company in bangalore',
    'web design company bangalore',
    'mobile app development company bangalore',
    'digital marketing agency bangalore',
    'react js development company bangalore',
    'next js development company bangalore',
    'crm software development bangalore',
    'seo company bangalore',
    '2d animation studio bangalore',
    'corporate video production bangalore',
    'software development company bangalore',
    'app development company bangalore',
    'ecommerce website development bangalore',
    'graphic design company bangalore',
    'it company bangalore',
    'nakshatra namaha creations',
    'nnc digital bangalore',
  ].join(', '),
  authors: [{ name: 'Nakshatra Namaha Creations Pvt. Ltd.' }],
  creator: 'Nakshatra Namaha Creations Pvt. Ltd.',
  publisher: 'Nakshatra Namaha Creations Pvt. Ltd.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://www.nakshatranamahacreations.com' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nakshatranamahacreations.com',
    siteName: 'NNC Digital Website Development Company Bangalore',
    title: 'Website & App Development Company in Bangalore | NNC',
    description:
      'NNC builds websites, mobile apps, CRM software and runs digital marketing. 35+ in-house team, 565+ projects, 4 offices. Fixed price. Free quote in 24hrs.',
    images: [
      {
        url: 'https://www.nakshatranamahacreations.com/media/teams/NNCGRPPHO.avif',
        width: 1200,
        height: 630,
        alt: 'Nakshatra Namaha Creations Digital Agency Team Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    creator: '@nncbengaluru',
    title: 'Website & App Development Company in Bangalore | NNC',
    description:
      'NNC builds websites, mobile apps, CRM software and runs digital marketing. 35+ in-house team, 565+ projects, 4 offices. Fixed price. Free quote in 24hrs.',
    images: ['https://www.nakshatranamahacreations.com/media/teams/NNCGRPPHO.avif'],
  },
  // verification: {
  //   google: 'REPLACE_WITH_YOUR_ACTUAL_GSC_TOKEN',  // get from Google Search Console → Settings → Ownership verification → HTML tag
  // },
}

/* ── JSON-LD Schemas ─────────────────────────────────────────── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.nakshatranamahacreations.com/#organization',
  name: 'Nakshatra Namaha Creations Pvt. Ltd.',
  alternateName: 'NNC Digital',
  url: 'https://www.nakshatranamahacreations.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png',
    width: 200,
    height: 60,
  },
  description:
    'Nakshatra Namaha Creations is a full-stack digital agency in Bangalore delivering website development, mobile app development, CRM software, digital marketing, 2D animation and corporate video production.',
  foundingDate: '2015',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 35 },
  legalName: 'Nakshatra Namaha Creations Private Limited',
  taxID: 'U74999KA2015PTC082563',
  telephone: '+91-99005-66466',
  email: 'info@nakshatranamahacreations.com',
  sameAs: [
    'https://www.instagram.com/nnc.digitalbengaluru/',
    'https://www.linkedin.com/company/nakshatra-namaha-creation/',
    'https://www.youtube.com/c/NakshatraNamahaCreations',
    'https://www.facebook.com/Nakshatranamahacreations/',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Darshan Plaza, 1st Floor, Channasandra',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560098',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Lodha Signet, Kolshet Road, Thane West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400607',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Suswani Towers, JP Nagar 2nd Stage',
      addressLocality: 'Mysuru',
      addressRegion: 'Karnataka',
      postalCode: '570008',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Prakashnagar, Begumpet',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500016',
      addressCountry: 'IN',
    },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ITService',
  '@id': 'https://www.nakshatranamahacreations.com/#localbusiness',
  name: 'Nakshatra Namaha Creations Pvt. Ltd.',
  image: 'https://www.nakshatranamahacreations.com/media/teams/NNCGRPPHO.avif',
  url: 'https://www.nakshatranamahacreations.com',
  telephone: '+91-99005-66466',
  email: 'info@nakshatranamahacreations.com',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Darshan Plaza, 1st Floor, Channasandra',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560098',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9716,
    longitude: 77.5946,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Software Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing & SEO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2D Animation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Video Production' } },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.nakshatranamahacreations.com/#website',
  name: 'NNC Digital Website Development Company Bangalore',
  url: 'https://www.nakshatranamahacreations.com',
  publisher: { '@id': 'https://www.nakshatranamahacreations.com/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.nakshatranamahacreations.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website or app project cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development starts from ₹24,999. E-commerce from ₹45,000. Mobile apps from ₹75,000. CRM and SaaS platforms are scoped individually. All pricing is fixed before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the source code after delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes completely and permanently. On delivery you receive every source file, database schema, admin credential and hosting login. The website or app is 100% yours with no platform dependency or licence fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NNC outsource any work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never. Every person on your project is a permanent full-time NNC employee. No freelancers, no offshore contractors. You can walk into any of our four offices and meet your team in person.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corporate website: 3–5 weeks. E-commerce: 5–8 weeks. Mobile app: 8–14 weeks. CRM: 10–18 weeks. All timelines are agreed upfront.',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PB7CNFK7');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PB7CNFK7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <WhatsAppChat />
        <CallFloat />
        <QuoteModal />
        {/* Bootstrap JS loaded after page content */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
