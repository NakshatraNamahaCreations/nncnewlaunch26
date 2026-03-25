import { SITE, OFFICES } from '@/data/siteData'

export default function Topbar() {
  return (
    <div className="topbar d-none d-lg-block">
      <div className="topbar-inner d-flex align-items-center justify-content-between gap-3 flex-wrap"
           style={{ maxWidth: 1220, margin: '0 auto', padding: '0 48px' }}>
        <div className="d-flex gap-4 flex-wrap">
          <div className="tb-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </div>
          <div className="tb-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div className="tb-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {OFFICES.map(o => o.city).join(' · ')}
          </div>
        </div>
        <div className="d-flex gap-2">
          <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="tb-s">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="tb-s">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </a>
          <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="tb-s">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
