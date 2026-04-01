import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Landing Page Development Company in Bangalore | High-Converting Pages | NNC Digital',
  description: 'Professional landing page development in Bangalore. High-converting sales funnels, lead capture pages and campaign landing pages built on Next JS. PageSpeed 90+. Fixed price. Request a quote.',
  alternates: { canonical: `${SITE.url}/landing-page-development` },
  keywords: 'landing page development company bangalore, sales funnel development, lead generation landing page, high converting landing page, google ads landing page development',
  openGraph: {
    title: 'Landing Page Development Company in Bangalore | NNC Digital',
    description: 'High-converting landing pages for Google Ads, Meta campaigns and SEO PageSpeed 90+, conversion-optimised, fixed price. Delivery in 5–7 days.',
    url: `${SITE.url}/landing-page-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Landing Page Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Landing Page Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'High-converting landing pages for Google Ads, Meta campaigns and organic SEO. Built on Next JS with PageSpeed 90+, conversion tracking and A/B test-ready architecture.',
  url: `${SITE.url}/landing-page-development`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Landing Page Development', item: `${SITE.url}/landing-page-development` },
  ],
}

const data = {
  badge: 'Landing Page Development',
  h1: 'Landing Page Development',
  h1Accent: 'Pages That Convert Visitors into Leads',
  tagline: 'High-converting landing pages for Google Ads, Meta campaigns and organic SEO built on Next JS with PageSpeed 90+ and A/B testing ready. Fixed price.',
  desc: 'NNC Digital builds conversion-optimised landing pages for marketing campaigns, lead generation and product launches. Each page is custom-coded for speed, SEO and conversion not a drag-and-drop builder template. Designed to lower your cost-per-lead and increase ROI on ad spend.',
  stat1: '150+',
  stat1Label: 'Landing Pages Delivered',
  serviceName: 'landing page development',
  h2Features: 'What Every NNC Landing Page Includes',
  features: [
    { h3: 'Conversion-Optimised Layout', desc: 'Above-the-fold messaging, trust signals, benefit-led copy structure and CTA placement tested across hundreds of campaigns.' },
    { h3: 'PageSpeed 90+ on Mobile & Desktop', desc: "Fast landing pages convert more. NNC's contractual PageSpeed 90+ guarantee means your ads land on pages that load instantly." },
    { h3: 'Lead Capture Forms & CRM Integration', desc: 'Multi-step forms, single-step forms and click-to-call CTAs connected to your CRM, Google Sheets or WhatsApp.' },
    { h3: 'Google Ads & Meta Ads Tracking', desc: 'Google Tag Manager, Google Ads conversion tracking and Meta Pixel set up and tested before your campaign goes live.' },
    { h3: 'A/B Test Ready Architecture', desc: 'Variant pages, UTM parameter preservation and event tracking built in ready to split-test headlines, CTAs and layouts.' },
    { h3: 'Video & Testimonial Sections', desc: 'Lazy-loaded video embeds, customer testimonials and star-rating trust badges conversion elements that move the needle.' },
    { h3: 'Countdown Timers & Urgency Elements', desc: 'Real-time countdown timers, limited-availability prompts and sticky CTAs all conversion psychology, no dark patterns.' },
    { h3: 'Mobile-First Design', desc: 'Over 80% of ad traffic arrives on mobile. Every landing page is designed mobile-first with simplified forms and large tap targets.' },
    { h3: 'WhatsApp & Click-to-Call CTAs', desc: 'One-click WhatsApp enquiry and direct call buttons the most effective CTAs for Indian B2C and B2B campaigns.' },
  ],
  h2Why: 'Why NNC Builds Landing Pages That Perform',
  why: [
    { n: '01', h3: 'Built on Next JS not Unbounce or Leadpages', body: 'Custom-coded on Next JS. No SaaS fees. No monthly landing page builder subscriptions. Full source code ownership with PageSpeed 90+ guaranteed.' },
    { n: '02', h3: 'Fixed price single page or multi-page funnel', body: 'Single landing pages, thank-you pages and multi-step funnels are quoted as a fixed scope. No per-variant billing.' },
    { n: '03', h3: 'Campaign-ready within 5–7 working days', body: 'Standard landing pages are delivered within 5–7 working days. Urgent campaign launches handled within 72 hours with prior booking.' },
    { n: '04', h3: 'Tracking and analytics configured pre-launch', body: 'Google Tag Manager, Ads conversion tracking, Meta Pixel and heat-mapping are configured by NNC before your campaign goes live.' },
    { n: '05', h3: '35+ in-house specialists designers and developers', body: "Landing pages are designed by NNC's in-house UI team and built by NNC's frontend developers. No freelancers, no white-labelling." },
    { n: '06', h3: 'Tested across 15+ mobile and desktop configurations', body: 'Every landing page is QA-tested on iOS, Android and major desktop browsers before delivery not just Chrome on a laptop.' },
  ],
  techStack: ['Next JS', 'React JS', 'Google Tag Manager', 'Meta Pixel', 'Google Analytics 4', 'Razorpay', 'WhatsApp API', 'Hotjar'],
  h2Tech: 'Landing Page Technology & Tracking Stack',
  h2Faq: 'Landing Page Development Frequently Asked Questions',
  faqs: [
    { q: 'How much does landing page development cost?', a: 'A single conversion landing page starts from ₹12,000. Multi-page funnels (landing page + thank-you page + upsell page) range from ₹25,000–₹60,000. All prices are fixed upfront. Ongoing CRO (A/B testing and optimisation) is available as a separate retainer.' },
    { q: 'How quickly can NNC deliver a landing page?', a: 'Standard landing pages are delivered within 5–7 working days from content receipt. For urgent campaign launches, NNC can deliver within 72 hours with prior arrangement. The 72-hour option requires all copy, brand assets and tracking IDs to be provided upfront.' },
    { q: 'Will the landing page score well on PageSpeed Insights?', a: "Yes PageSpeed 90+ is contractual on all NNC pages, including landing pages. A slow landing page destroys your quality score in Google Ads and raises your cost-per-click. NNC's pages consistently score 90–98 on mobile and desktop." },
    { q: 'Can NNC set up Google Ads conversion tracking?', a: 'Yes. NNC configures Google Tag Manager, Google Ads conversion events and Google Analytics 4 as standard on every landing page. Meta Pixel is also set up if you\'re running Meta campaigns. You receive full Tag Manager access.' },
    { q: 'Can I use the landing page for multiple campaigns?', a: 'Yes. NNC can build variant pages for different ad groups or audience segments each with different copy and CTAs all under one fixed-price scope. UTM parameters and source tracking are configured so you can measure each variant independently.' },
    { q: "What's the difference between a landing page and a homepage?", a: 'A homepage serves multiple audiences with multiple goals. A landing page has one message and one action designed to convert a specific type of visitor from a specific campaign. Landing pages have significantly higher conversion rates than sending ad traffic to a homepage.' },
  ],
}

export default function LandingPageDevelopmentPage() {
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
