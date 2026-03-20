import { useReveal } from '../hooks/useReveal'
import { img1, img2, img3, img4 } from '../assets'

const triedItems = [
  'Slim tea', 'Laxative seeds', 'Off-brand Ozempic',
  'Salt water cleanse', 'Slim patches', 'Drugs from India',
  'Just eating eggs', 'Oily poop pills',
]

const stats = [
  { value: '25kg', label: 'Lost in 3 months' },
  { value: '8kg', label: 'Lost in 30 days' },
  { value: '5kg', label: 'Lost + acne cleared' },
  { value: '100%', label: 'Faith-led, zero shortcuts' },
]

const resultCards = [
  { img: img1, caption: 'Visible toning and posture improvement in just weeks', metric: '–14 lbs' },
  { img: img2, caption: 'Day 1 to Week 12. Face slimmer, confidence restored', metric: 'Week 12' },
  { img: img3, caption: 'Lost the weight and found her glow — face lift and all', metric: '–2 sizes' },
]

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#C9903A">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

function ResultCard({ img, caption, metric }: { img: string; caption: string; metric: string }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal group relative rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
      style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.25)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '340px' }}>
        <img
          src={img}
          alt={caption}
          className="w-full h-full object-cover object-top block transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(27,58,45,0.92) 0%, rgba(27,58,45,0.2) 50%, transparent 100%)',
          }}
        />
        {/* Metric badge */}
        <div
          className="absolute top-4 right-4 font-bold text-sm px-3 py-1.5 rounded-full"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: 'rgba(201,144,58,0.95)',
            color: '#fff',
            boxShadow: '0 4px 16px rgba(201,144,58,0.45)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {metric}
        </div>
        {/* Caption over gradient */}
        <p
          className="absolute bottom-0 left-0 right-0 px-5 pb-5 text-[0.88rem] font-light leading-snug"
          style={{ color: 'rgba(255,255,255,0.82)' }}
        >
          {caption}
        </p>
      </div>
    </div>
  )
}

export function Results() {
  const labelRef = useReveal()
  const h2Ref = useReveal()
  const statsRef = useReveal()
  const heroRef = useReveal()
  const cardsRef = useReveal()

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--cream, #FDF6EE)' }}
    >
      {/* ── Section header ── */}
      <div className="relative px-6 pt-24 pb-0 text-center">
        <p
          ref={labelRef}
          className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: '#C9903A' }}
        >
          Real Women. Real Results.
        </p>
        <h2
          ref={h2Ref}
          className="reveal mx-auto leading-[1.1] max-w-lg"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
            color: '#1B3A2D',
          }}
        >
          See what 30 days
          <br />
          <em style={{ color: '#C9903A', fontStyle: 'italic' }}>can actually do.</em>
        </h2>
      </div>

      {/* ── Stats strip ── */}
      <div
        ref={statsRef}
        className="reveal relative mx-6 mt-14 rounded-[24px] overflow-hidden"
        style={{ background: '#1B3A2D', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(201,144,58,0.15) 0%, transparent 65%)',
          }}
        />
        <div className="relative grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined,
              }}
            >
              <span
                className="block leading-none mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                  color: '#E8B86D',
                }}
              >
                {s.value}
              </span>
              <span
                className="text-[0.73rem] uppercase tracking-[0.15em] font-medium"
                style={{ color: 'rgba(255,255,255,0.42)' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Hero testimonial ── */}
      <div
        ref={heroRef}
        className="reveal relative max-w-4xl mx-auto mt-10 mx-6 md:mx-auto rounded-[28px] overflow-hidden"
        style={{
          boxShadow: '0 16px 60px rgba(0,0,0,0.14)',
          background: '#fff',
        }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image side */}
          <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
            <img
              src={img4}
              alt="Client lost 25kg in 3 months"
              className="w-full h-full object-cover object-top absolute inset-0"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(27,58,45,0.15) 0%, transparent 60%)',
              }}
            />
            {/* Pill badge */}
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-[0.72rem] font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full whitespace-nowrap"
              style={{
                background: '#C9903A',
                boxShadow: '0 4px 20px rgba(201,144,58,0.5)',
              }}
            >
              25kg Lost · 3 Months
            </div>
          </div>

          {/* Content side */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
            {/* Big quote */}
            <div
              className="leading-none select-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '5rem',
                color: '#C9903A',
                opacity: 0.22,
                lineHeight: 0.7,
                marginBottom: '-8px',
              }}
            >
              "
            </div>

            <p
              className="leading-[1.2] font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                color: '#1B3A2D',
              }}
            >
              She had tried{' '}
              <em
                className="italic"
                style={{ color: '#C0392B' }}
              >
                everything.
              </em>
            </p>

            {/* Tried items — strikethrough tags */}
            <div className="flex flex-wrap gap-1.5">
              {triedItems.map((item) => (
                <span
                  key={item}
                  className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full line-through"
                  style={{
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    color: '#B91C1C',
                    textDecorationColor: '#B91C1C',
                    opacity: 0.82,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Body */}
            <p
              className="leading-[1.75] text-[0.9rem]"
              style={{ color: '#5A5A5A' }}
            >
              Nothing worked. Then she joined Deeper30 — and lost{' '}
              <strong style={{ color: '#1B3A2D' }}>25kg in 3 months</strong>{' '}
              doing fitness the God way. No shortcuts. No side effects. Just
              faith, consistency, and real accountability.
            </p>

            {/* Stars + label */}
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} />)}
              </div>
              <span
                className="text-[0.75rem] font-semibold"
                style={{ color: '#5A5A5A' }}
              >
                Deeper30 Community Member
              </span>
            </div>

            {/* Thin gold rule */}
            <div
              className="h-px w-16 mt-1"
              style={{ background: 'rgba(201,144,58,0.4)' }}
            />
          </div>
        </div>
      </div>

      {/* ── Result cards ── */}
      <div
        ref={cardsRef}
        className="reveal relative px-6 pt-10 pb-24 max-w-4xl mx-auto"
      >
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {resultCards.map((c) => (
            <ResultCard key={c.caption} {...c} />
          ))}
        </div>
      </div>

      {/* Bottom decorative fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(253,246,238,1) 0%, transparent 100%)',
        }}
      />
    </section>
  )
}