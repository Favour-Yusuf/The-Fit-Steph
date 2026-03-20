const SELAR_LINK = 'https://selar.com/3r4373js67'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-24 text-center overflow-hidden"
      style={{
        background: '#1B3A2D',
        backgroundImage: `
          radial-gradient(ellipse at 65% 20%, rgba(201,144,58,0.16) 0%, transparent 55%),
          radial-gradient(ellipse at 20% 85%, rgba(15,40,25,0.8) 0%, transparent 50%)
        `,
      }}
    >
      {/* Badge */}
      <span
        className="animate-fade-up inline-block text-[11px] font-semibold tracking-[2.5px] uppercase px-6 py-2.5 rounded-full mb-10"
        style={{
          background: 'rgba(201,144,58,0.15)',
          border: '1px solid rgba(201,144,58,0.6)',
          color: '#E8B86D',
          letterSpacing: '0.18em',
        }}
      >
        30-Day Challenge · Limited to 5 Women
      </span>

      {/* Headline */}
      <h1
        className="animate-fade-up-1 text-white leading-[1.08] max-w-[700px]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: 'clamp(2.8rem, 9vw, 5.2rem)',
        }}
      >
        Drop{' '}
        <em
          style={{
            fontStyle: 'italic',
            color: '#E8B86D',
          }}
        >
          2–4 Inches
        </em>
        <br />
        Off Your Waist
        <br />
        In 30 Days.
      </h1>

      {/* Sub */}
      <p
        className="animate-fade-up-2 max-w-[440px] mt-7 leading-[1.75] font-light"
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          color: 'rgba(255,255,255,0.72)',
        }}
      >
        No gym. No guesswork. Just a proven virtual community of women losing
        real inches — with faith, accountability, and a coach who actually shows
        up for you.
      </p>

      {/* Verse */}
      <p
        className="animate-fade-up-3 mt-8 text-[0.92rem]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.42)',
        }}
      >
        "She is clothed with strength and dignity." — Proverbs 31:25
      </p>

      {/* CTA */}
      <a
        href={SELAR_LINK}
        target="_blank"
        rel="noreferrer"
        className="animate-fade-up-4 mt-12 w-full max-w-sm block text-center text-white font-semibold text-[1.05rem] tracking-wide py-[20px] px-8 rounded-full transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: '#C9903A',
          boxShadow: '0 8px 36px rgba(201,144,58,0.42)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            '0 14px 44px rgba(201,144,58,0.62)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            '0 8px 36px rgba(201,144,58,0.42)'
        }}
      >
        Claim My Spot — ₦25,000 →
      </a>

      {/* Price note */}
      <p
        className="animate-fade-up-5 mt-5 text-[0.88rem]"
        style={{ color: 'rgba(255,255,255,0.52)' }}
      >
        One-time payment · Full 30-day access ·{' '}
        <strong style={{ color: '#E8B86D', fontSize: '1rem' }}>Only 5 spots</strong>
      </p>

      {/* Scroll indicator */}
      <div
        className="animate-fade-up-slow absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[10px] tracking-[2px] uppercase"
        style={{ color: 'rgba(255,255,255,0.28)' }}
      >
        scroll
        <span
          className="block w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)',
          }}
        />
      </div>
    </section>
  )
}