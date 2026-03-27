import Navbar from '@/components/Navbar'
import { Footer, WaFloat } from '@/components/Sections'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Terms of Service | NNC Digital',
  description: 'Terms of Service for Nakshatra Namaha Creations Pvt. Ltd. (NNC Digital). Read our service agreement, project delivery terms and usage policies.',
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: false },
}

const sections = [
  {
    title: '1. Agreement',
    body: `By engaging NNC Digital (Nakshatra Namaha Creations Pvt. Ltd.) for any service — including website development, mobile app development, CRM software, digital marketing, graphic design or video production — you ("Client") agree to be bound by these Terms of Service. These terms govern all projects, proposals and engagements between NNC Digital and the Client.`,
  },
  {
    title: '2. Project Scope & Fixed Pricing',
    body: `All projects are delivered against a mutually agreed, fixed-price scope document. Work begins only after the scope, timeline and price have been confirmed in writing by both parties. Any additions to scope after project commencement will be quoted and approved separately before work begins. NNC Digital does not bill hourly and will never raise a surprise invoice outside the agreed scope.`,
  },
  {
    title: '3. Payment Terms',
    body: `Projects are typically structured with an advance payment before work begins, followed by milestone-based or completion-based payments as detailed in the project proposal. All payments are non-refundable once the corresponding milestone deliverables have been provided. NNC Digital reserves the right to pause delivery if payments are overdue beyond the agreed schedule.`,
  },
  {
    title: '4. Intellectual Property & Source Code',
    body: `Upon receipt of final payment, the Client receives full ownership of all deliverables including source code, design files, database schemas, admin credentials and hosting logins. NNC Digital retains no rights over the delivered work. NNC Digital may showcase completed projects in its portfolio unless the Client explicitly requests otherwise in writing before project commencement.`,
  },
  {
    title: '5. Client Responsibilities',
    body: `The Client is responsible for providing accurate content, branding assets, domain access and timely feedback at designated review stages. Delays caused by late content provision or feedback may affect the agreed project timeline. NNC Digital will not be held liable for project delays attributable to the Client.`,
  },
  {
    title: '6. Warranty & Support',
    body: `NNC Digital provides a 30-day post-delivery warranty covering bugs or defects in the delivered scope. Issues arising from Client-side modifications, third-party integrations added after delivery, or hosting environment changes are not covered under warranty. Post-warranty support is available under a separate maintenance agreement.`,
  },
  {
    title: '7. Confidentiality',
    body: `Both parties agree to keep confidential any proprietary information shared during the engagement. NNC Digital will not disclose Client business data, strategy or technical details to third parties without written consent. This obligation survives the termination of the engagement.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `NNC Digital's total liability for any claim arising from a project shall not exceed the total amount paid by the Client for that specific project. NNC Digital is not liable for indirect, consequential or incidental damages including loss of revenue or data.`,
  },
  {
    title: '9. Governing Law',
    body: `These Terms of Service are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.`,
  },
  {
    title: '10. Contact',
    body: `For questions about these terms, contact us at ${SITE.email} or call ${SITE.phone}. Registered office: Darshan Plaza, 1st Floor, Channasandra, Bengaluru — 560 098. CIN: ${SITE.cin}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '64px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: '#fff', letterSpacing: '-.05em', marginBottom: 12 }}>
              Terms of Service
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
