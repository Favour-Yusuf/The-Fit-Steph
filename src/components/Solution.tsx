import { useReveal } from '../hooks/useReveal'

const pillars = [
  {
    num: '01',
    title: 'Faith-Centered',
    body: "Every session, every check-in is rooted in God's word. Your body is a temple — we honour it together.",
    tag: 'Spirit',
  },
  {
    num: '02',
    title: 'Virtual & Flexible',
    body: 'Live sessions you can join from anywhere. No gym. No commute. Just you, your device, and your community.',
    tag: 'Freedom',
  },
  {
    num: '03',
    title: 'Real Accountability',
    body: 'Daily check-ins, group support, and a coach who genuinely shows up for you — not just a programme you do alone.',
    tag: 'Consistency',
  },
  {
    num: '04',
    title: 'Women Like You',
    body: 'A community of women on the same journey — cheering for each other, praying for each other, winning together.',
    tag: 'Sisterhood',
  },
]

function PillarRow({
  num,
  title,
  body,
  tag,
  index,
}: {
  num: string
  title: string
  body: string
  tag: string
  index: number
}) {
  const ref = useReveal()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden rounded-[24px] transition-all duration-500"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Shimmer sweep on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: isEven
            ? 'linear-gradient(105deg, transparent 30%, rgba(201,144,58,0.07) 50%, transparent 70%)'
            : 'linear-gradient(255deg, transparent 30%, rgba(201,144,58,0.07) 50%, transparent 70%)',
        }}
      />

      {/* Gold left border glow on hover */}
      <div
        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to bottom, transparent, #C9903A, transparent)' }}
      />

      <div className="relative flex items-center gap-0 px-8 py-10 md:px-12 md:py-12">
        {/* Ghost number — left side */}
        <div
          className="absolute select-none pointer-events-none leading-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(7rem, 16vw, 11rem)',
            color: 'rgba(201,144,58,0.07)',
            top: '50%',
            left: isEven ? '-0.05em' : undefined,
            right: isEven ? undefined : '-0.05em',
            transform: 'translateY(-50%)',
            lineHeight: 1,
            transition: 'color 0.5s',
          }}
        >
          {num}
        </div>
        <div
          className="absolute select-none pointer-events-none leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(7rem, 16vw, 11rem)',
            color: 'rgba(201,144,58,0.13)',
            top: '50%',
            left: isEven ? '-0.05em' : undefined,
            right: isEven ? undefined : '-0.05em',
            transform: 'translateY(-50%)',
            lineHeight: 1,
          }}
        >
          {num}
        </div>

        {/* Content — push away from ghost number */}
        <div
          className={`relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full ${
            isEven ? 'md:pl-20' : 'md:pr-20 md:flex-row-reverse'
          }`}
        >
          {/* Number + tag pill — visible small indicator */}
          <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2 shrink-0">
            <span
              className="text-[0.72rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
              style={{
                background: 'rgba(201,144,58,0.15)',
                color: '#E8B86D',
                border: '1px solid rgba(201,144,58,0.3)',
              }}
            >
              {tag}
            </span>
          </div>

          {/* Divider */}
          <div
            className="hidden md:block shrink-0 w-px self-stretch"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          />

          {/* Text */}
          <div className="flex-1">
            <h3
              className="text-white font-bold mb-3 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.2rem, 3vw, 1.55rem)',
              }}
            >
              {title}
            </h3>
            <p
              className="leading-[1.8] font-light"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}
            >
              {body}
            </p>
          </div>

          {/* Arrow indicator */}
          <div
            className="hidden md:flex shrink-0 w-10 h-10 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
            style={{
              border: '1px solid rgba(201,144,58,0.4)',
              color: '#C9903A',
              fontSize: '1.1rem',
            }}
          >
            →
          </div>
        </div>
      </div>
    </div>
  )
}

export function Solution() {
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
            radial-gradient(ellipse at 50% -10%, rgba(201,144,58,0.14) 0%, transparent 60%),
            radial-gradient(ellipse at 90% 80%, rgba(15,35,22,0.9) 0%, transparent 50%)
          `,
        }}
      />
      {/* Decorative horizontal rule with glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(201,144,58,0.4), transparent)',
        }}
      />

      {/* ── Intro — editorial 2-col layout ── */}
      <div className="relative max-w-5xl mx-auto mb-20">
        <p
          ref={labelRef}
          className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase mb-8"
          style={{ color: '#C9903A' }}
        >
          The Deeper30 Difference
        </p>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          {/* Left — headline */}
          <div ref={h2LeftRef} className="reveal flex-1">
            <h2
              className="text-white leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 'clamp(2.4rem, 6vw, 4rem)',
              }}
            >
              Real inches lost.
              <br />
              <em style={{ color: '#E8B86D', fontStyle: 'italic' }}>
                Real faith built.
              </em>
            </h2>
          </div>

          {/* Right — body + gold rule */}
          <div ref={h2RightRef} className="reveal flex-1 md:max-w-sm">
            <div
              className="w-10 h-[2px] mb-6"
              style={{ background: 'rgba(201,144,58,0.5)' }}
            />
            <p
              className="leading-[1.85] font-light"
              style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.98rem' }}
            >
              Women in Deeper30 drop 2–4 inches off their waist in 30 days —
              because they're not doing it alone. Faith, accountability, and a
              community that keeps you moving even when motivation runs out.
            </p>
          </div>
        </div>
      </div>

      {/* ── Pillars — stacked rows ── */}
      <div className="relative max-w-5xl mx-auto flex flex-col gap-4">
        {pillars.map((p, i) => (
          <PillarRow key={p.num} {...p} index={i} />
        ))}
      </div>

      {/* Bottom decorative rule */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(201,144,58,0.2), transparent)',
        }}
      />
    </section>
  )
}