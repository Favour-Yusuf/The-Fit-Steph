import { useReveal } from '../hooks/useReveal'
import type { ReactNode } from 'react'

const features: {
  icon: ReactNode
  ghostIcon: ReactNode
  title: string
  body: string
  span?: 'wide' | 'tall' | 'normal'
  tag: string
}[] = [
  {
    tag: 'Workouts',
    title: 'Live Virtual Workouts',
    body: 'Guided sessions you can follow from your bedroom, living room, or anywhere you are.',
    span: 'wide',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    ghostIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    tag: 'Accountability',
    title: 'Daily Check-ins',
    body: 'Stay on track with daily touchpoints designed to keep you motivated and consistent.',
    span: 'normal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    ghostIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    tag: 'Community',
    title: 'Faith-Led Community Space',
    body: 'A private group where women pray, encourage, and push each other forward every single day.',
    span: 'normal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    ghostIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    tag: 'Coaching',
    title: 'Personal Coaching from Steph',
    body: "Direct access to a certified faith-based fitness coach who's been exactly where you are. She shows up — every day.",
    span: 'tall',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    ghostIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    tag: 'Access',
    title: '100% Online — Global',
    body: 'Join from Nigeria, the UK, the US, or anywhere in the world. No location barrier.',
    span: 'normal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    ghostIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    tag: 'Time',
    title: '30 Days — Not 90',
    body: 'Real results in a manageable timeframe. Prove to yourself what one focused month can do.',
    span: 'wide',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    ghostIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

function FeatureCard({
  icon,
  ghostIcon,
  title,
  body,
  tag,
  span,
}: {
  icon: ReactNode
  ghostIcon: ReactNode
  title: string
  body: string
  tag: string
  span?: 'wide' | 'tall' | 'normal'
}) {
  const ref = useReveal()

  // Bento spans only activate at md breakpoint.
  // On mobile (grid-cols-1) every card is naturally full width.
  const colSpan = span === 'wide' ? 'md:col-span-2' : ''
  const rowSpan = span === 'tall' ? 'md:row-span-2' : ''

  return (
    <div
      ref={ref}
      className={`reveal group relative rounded-[22px] p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 ${colSpan} ${rowSpan}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        minHeight: '180px',
      }}
    >
      {/* Hover bloom */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(201,144,58,0.09) 0%, transparent 65%)',
        }}
      />

      {/* Top border shimmer on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(201,144,58,0.7), transparent)',
        }}
      />

      {/* Ghost icon watermark */}
      <div
        className="absolute bottom-2 right-2 opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none"
        style={{ color: '#E8B86D' }}
      >
        {ghostIcon}
      </div>

      {/* Tag pill */}
      <span
        className="inline-block text-[0.65rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-5"
        style={{
          background: 'rgba(201,144,58,0.12)',
          border: '1px solid rgba(201,144,58,0.25)',
          color: '#E8B86D',
        }}
      >
        {tag}
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: 'rgba(201,144,58,0.1)' }}
      >
        {icon}
      </div>

      {/* Text */}
      <h3
        className="font-bold mb-2.5 leading-tight"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.05rem',
          color: '#fff',
        }}
      >
        {title}
      </h3>
      <p
        className="leading-[1.75] font-light"
        style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem' }}
      >
        {body}
      </p>

      {/* Arrow */}
      <div
        className="absolute bottom-6 right-6 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"
        style={{
          border: '1px solid rgba(201,144,58,0.35)',
          color: '#C9903A',
          fontSize: '0.9rem',
        }}
      >
        →
      </div>
    </div>
  )
}

export function WhatYouGet() {
  const labelRef = useReveal()
  const h2LeftRef = useReveal()
  const h2RightRef = useReveal()

  return (
    <section
      className="relative px-6 py-24 overflow-hidden"
      style={{ background: '#1B3A2D' }}
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 100% 0%, rgba(201,144,58,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 100%, rgba(10,28,18,0.8) 0%, transparent 50%)
          `,
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(201,144,58,0.35), transparent)',
        }}
      />

      {/* ── Header ── */}
      <div className="relative max-w-5xl mx-auto mb-14">
        <p
          ref={labelRef}
          className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase mb-8"
          style={{ color: '#C9903A' }}
        >
          What's Included
        </p>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <div ref={h2LeftRef} className="reveal flex-1">
            <h2
              className="text-white leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
              }}
            >
              Everything you need.
              <br />
              <em style={{ color: '#E8B86D', fontStyle: 'italic' }}>
                Nothing you don't.
              </em>
            </h2>
          </div>

          <div ref={h2RightRef} className="reveal flex-1 md:max-w-xs">
            <div
              className="w-8 h-[2px] mb-5"
              style={{ background: 'rgba(201,144,58,0.5)' }}
            />
            <p
              className="leading-[1.85] font-light text-[0.95rem]"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Six pillars. One focused month. Everything is designed to get you
              results without overwhelming your life.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bento grid ──
          • mobile  → grid-cols-1 : every card stacks full-width
          • sm      → grid-cols-2 : 2 equal columns, no bento tricks
          • md+     → grid-cols-3 : bento — wide=col-span-2, tall=row-span-2
      ── */}
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(201,144,58,0.2), transparent)',
        }}
      />
    </section>
  )
}