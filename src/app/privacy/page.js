import Navbar from '@/components/Navbar'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Privacy Policy | NNC Digital',
  description: 'Privacy Policy for Nakshatra Namaha Creations Pvt. Ltd. (NNC Digital). How we collect, use and protect your personal information.',
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: false },
}

const sections = [
  {
    title: '1. Information We Collect',
    body: `When you submit an enquiry via our website forms, we collect your name, phone number, email address and any project details you provide. We may also automatically collect non-personal information such as browser type, pages visited and approximate location via analytics tools. We do not collect payment card information directly all transactions are handled by regulated payment processors.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `Information you submit is used solely to respond to your enquiry, prepare a project proposal and communicate with you about your project. We do not use your contact details for unsolicited mass marketing. You may receive a single follow-up communication after an enquiry if you have not responded within 7 days. All further communication will be on your request.`,
  },
  {
    title: '3. Data Sharing',
    body: `NNC Digital does not sell, rent or trade your personal information to any third party. We may share your information with our in-house team members for the purpose of delivering the service you requested. We do not share data with external marketing agencies or data brokers.`,
  },
  {
    title: '4. Data Storage & Security',
    body: `Your data is stored on secure servers hosted in India. We implement industry-standard security measures including encrypted connections (HTTPS) and access controls. While no transmission over the internet is 100% secure, we take reasonable precautions to protect your information.`,
  },
  {
    title: '5. Cookies',
    body: `Our website uses essential cookies to enable basic site functionality and analytics cookies (Google Analytics) to understand how visitors interact with our pages. No personally identifiable information is collected through cookies. You can disable cookies in your browser settings, though some site features may not function correctly.`,
  },
  {
    title: '6. Your Rights',
    body: `You have the right to request access to the personal data we hold about you, request correction of inaccurate data, or request deletion of your data. To exercise any of these rights, contact us at ${SITE.email}. We will respond to all requests within 30 days.`,
  },
  {
    title: '7. Third-Party Links',
    body: `Our website may contain links to third-party websites (Google Maps, social media profiles, etc.). NNC Digital is not responsible for the privacy practices of those websites and encourages you to review their respective privacy policies.`,
  },
  {
    title: '8. Changes to This Policy',
    body: `NNC Digital may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated date. Continued use of our website or services after such changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: '9. Contact',
    body: `For privacy-related questions or requests, contact us at ${SITE.email} or call ${SITE.phone}. Registered office: Darshan Plaza, 1st Floor, Channasandra, Bengaluru 560 098. CIN: ${SITE.cin}.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '64px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: '#fff', letterSpacing: '-.05em', marginBottom: 12 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.45)', margin: 0 }}>
              Last updated: March 2026 &nbsp;·&nbsp; Nakshatra Namaha Creations Pvt. Ltd.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
            {sections.map((s, i) => (
              <div key={i} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: i < sections.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0B1F4B', marginBottom: 12, letterSpacing: '-.02em' }}>{s.title}</h2>
                <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}
