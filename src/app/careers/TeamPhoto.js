'use client'
import { useState } from 'react'

function TeamIllustration() {
  return (
    <div style={{ width: '100%', height: 300, background: 'linear-gradient(135deg,#0a1f4e 0%,#0d2a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background dots */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)', backgroundSize: '20px 20px' }} />

      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>

        {/* Desk / table */}
        <rect x="30" y="185" width="340" height="10" rx="5" fill="#1a3a7a" />

        {/* Monitor 1 */}
        <rect x="55" y="120" width="90" height="64" rx="6" fill="#0d2255" stroke="#2196F3" strokeWidth="1.5" />
        <rect x="60" y="125" width="80" height="50" rx="3" fill="#0a1840" />
        {/* Code lines on monitor 1 */}
        <rect x="65" y="132" width="40" height="3" rx="1.5" fill="#2196F3" opacity=".7" />
        <rect x="65" y="139" width="55" height="3" rx="1.5" fill="#10B981" opacity=".6" />
        <rect x="65" y="146" width="30" height="3" rx="1.5" fill="#F59E0B" opacity=".6" />
        <rect x="65" y="153" width="48" height="3" rx="1.5" fill="#2196F3" opacity=".5" />
        <rect x="65" y="160" width="38" height="3" rx="1.5" fill="#10B981" opacity=".5" />
        <rect x="65" y="167" width="52" height="3" rx="1.5" fill="#7C3AED" opacity=".5" />
        {/* Monitor stand */}
        <rect x="94" y="184" width="12" height="8" rx="2" fill="#1a3a7a" />
        <rect x="84" y="190" width="32" height="4" rx="2" fill="#1a3a7a" />

        {/* Monitor 2 */}
        <rect x="195" y="115" width="100" height="70" rx="6" fill="#0d2255" stroke="#2196F3" strokeWidth="1.5" />
        <rect x="200" y="120" width="90" height="56" rx="3" fill="#0a1840" />
        {/* Design mockup on monitor 2 */}
        <rect x="205" y="125" width="80" height="20" rx="2" fill="#1a3a7a" />
        <rect x="208" y="128" width="30" height="14" rx="2" fill="#2196F3" opacity=".4" />
        <rect x="242" y="128" width="40" height="6" rx="1.5" fill="rgba(255,255,255,.15)" />
        <rect x="242" y="137" width="28" height="5" rx="1.5" fill="rgba(255,255,255,.08)" />
        <rect x="205" y="149" width="80" height="4" rx="2" fill="rgba(255,255,255,.07)" />
        <rect x="205" y="156" width="60" height="4" rx="2" fill="rgba(255,255,255,.07)" />
        <rect x="205" y="163" width="70" height="4" rx="2" fill="rgba(255,255,255,.07)" />
        {/* Monitor stand */}
        <rect x="239" y="184" width="12" height="8" rx="2" fill="#1a3a7a" />
        <rect x="229" y="190" width="32" height="4" rx="2" fill="#1a3a7a" />

        {/* Person 1 - left */}
        {/* Body */}
        <ellipse cx="100" cy="195" rx="18" ry="8" fill="#0d2255" opacity=".6" />
        <rect x="85" y="148" width="30" height="40" rx="12" fill="#1565C0" />
        {/* Head */}
        <circle cx="100" cy="138" r="14" fill="#FBBF6A" />
        {/* Hair */}
        <path d="M86 133 Q100 120 114 133" fill="#4B2C0A" />
        {/* Eyes */}
        <circle cx="95" cy="137" r="1.8" fill="#1a1a2e" />
        <circle cx="105" cy="137" r="1.8" fill="#1a1a2e" />
        {/* Smile */}
        <path d="M95 143 Q100 147 105 143" stroke="#c07a30" strokeWidth="1.2" fill="none" />
        {/* Arm reaching to keyboard */}
        <rect x="110" y="162" width="28" height="8" rx="4" fill="#1565C0" transform="rotate(-10 110 162)" />

        {/* Keyboard 1 */}
        <rect x="55" y="186" width="80" height="14" rx="4" fill="#1a3a7a" />
        <rect x="60" y="189" width="8" height="4" rx="1" fill="#2a4a8a" />
        <rect x="71" y="189" width="8" height="4" rx="1" fill="#2a4a8a" />
        <rect x="82" y="189" width="8" height="4" rx="1" fill="#2a4a8a" />
        <rect x="93" y="189" width="8" height="4" rx="1" fill="#2a4a8a" />
        <rect x="104" y="189" width="8" height="4" rx="1" fill="#2a4a8a" />
        <rect x="63" y="196" width="48" height="3" rx="1" fill="#2196F3" opacity=".4" />

        {/* Person 2 - right (standing / pointing) */}
        <ellipse cx="255" cy="197" rx="18" ry="8" fill="#0d2255" opacity=".6" />
        <rect x="240" y="148" width="30" height="44" rx="12" fill="#10B981" />
        {/* Head */}
        <circle cx="255" cy="136" r="14" fill="#F5CBA7" />
        {/* Hair short */}
        <path d="M241 132 Q255 121 269 132 Q269 126 255 123 Q241 126 241 132Z" fill="#2c1a0a" />
        {/* Eyes */}
        <circle cx="250" cy="135" r="1.8" fill="#1a1a2e" />
        <circle cx="260" cy="135" r="1.8" fill="#1a1a2e" />
        {/* Smile */}
        <path d="M249 141 Q255 145 261 141" stroke="#c09070" strokeWidth="1.2" fill="none" />
        {/* Arm pointing up */}
        <rect x="268" y="148" width="28" height="8" rx="4" fill="#10B981" transform="rotate(-45 268 148)" />

        {/* Person 3 - far right */}
        <ellipse cx="345" cy="197" rx="16" ry="7" fill="#0d2255" opacity=".6" />
        <rect x="330" y="152" width="28" height="40" rx="12" fill="#7C3AED" />
        {/* Head */}
        <circle cx="344" cy="141" r="13" fill="#FBBF6A" />
        {/* Hair long */}
        <path d="M331 137 Q344 124 357 137 L358 148 Q344 142 330 148Z" fill="#1a0a00" />
        {/* Eyes */}
        <circle cx="339" cy="141" r="1.6" fill="#1a1a2e" />
        <circle cx="349" cy="141" r="1.6" fill="#1a1a2e" />
        {/* Smile */}
        <path d="M338 147 Q344 151 350 147" stroke="#c07a30" strokeWidth="1.2" fill="none" />

        {/* Laptop for person 3 */}
        <rect x="318" y="172" width="52" height="34" rx="4" fill="#0d2255" stroke="#7C3AED" strokeWidth="1.2" />
        <rect x="322" y="176" width="44" height="26" rx="2" fill="#0a1840" />
        <rect x="326" y="180" width="20" height="3" rx="1" fill="#7C3AED" opacity=".6" />
        <rect x="326" y="186" width="32" height="3" rx="1" fill="rgba(255,255,255,.15)" />
        <rect x="326" y="192" width="25" height="3" rx="1" fill="rgba(255,255,255,.1)" />
        <rect x="310" y="206" width="68" height="6" rx="3" fill="#1a3a7a" />

        {/* Floating elements - code brackets */}
        <text x="22" y="80" fontSize="22" fill="#2196F3" opacity=".25" fontFamily="monospace">&lt;/&gt;</text>
        <text x="340" y="60" fontSize="18" fill="#10B981" opacity=".2" fontFamily="monospace">{'{}'}</text>
        <text x="160" y="40" fontSize="14" fill="#F59E0B" opacity=".2" fontFamily="monospace">npm run</text>

        {/* Stats badges */}
        <rect x="22" y="20" width="90" height="28" rx="14" fill="rgba(33,150,243,.15)" stroke="rgba(33,150,243,.3)" strokeWidth="1" />
        <text x="67" y="38" fontSize="11" fill="#2196F3" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">35+ Team Members</text>

        <rect x="288" y="20" width="90" height="28" rx="14" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.3)" strokeWidth="1" />
        <text x="333" y="38" fontSize="11" fill="#10B981" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">565+ Projects</text>

        {/* NNC tag */}
        <rect x="160" y="220" width="80" height="24" rx="12" fill="rgba(33,150,243,.2)" stroke="rgba(33,150,243,.35)" strokeWidth="1" />
        <text x="200" y="236" fontSize="11" fill="#fff" fontWeight="700" textAnchor="middle" fontFamily="sans-serif" opacity=".8">NNC · Bengaluru</text>
      </svg>
    </div>
  )
}

export default function TeamPhoto({ src }) {
  const [failed, setFailed] = useState(false)

  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)', boxShadow: '0 16px 40px rgba(0,0,0,.3)' }}>
      {!failed ? (
        <img
          src={src}
          alt="NNC Bengaluru team"
          style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }}
          loading="eager"
          onError={() => setFailed(true)}
        />
      ) : (
        <TeamIllustration />
      )}
    </div>
  )
}
