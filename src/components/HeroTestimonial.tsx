import { useReveal } from '../hooks/useReveal'
import { img4 } from '../assets'

const triedItems = [
  'Slim tea', 'Laxative seeds', 'Off-brand Ozempic',
  'Salt water cleanse', 'Slim patches', 'Drugs from India',
  'Just eating eggs', 'Oily poop pills',
]

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#C9903A">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export function HeroTestimonial() {
  const heroRef = useReveal()

  return (
    <div
      ref={heroRef}
      className="reveal relative max-w-4xl mx-auto mb-2 mt-10 mx-6 md:mx-auto rounded-[28px] overflow-hidden"
      style={{
        boxShadow: '0 16px 60px rgba(0,0,0,0.14)',
        background: '#fff',
      }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
          <img
            src={img4}
            alt="Client lost 25kg in 3 months"
            className="w-full h-full object-cover object-top absolute inset-0"
          />

          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(27,58,45,0.15) 0%, transparent 60%)',
            }}
          />

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

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
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
            She had tried <em style={{ color: '#C0392B' }}>everything.</em>
          </p>

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

          <p className="leading-[1.75] text-[0.9rem]" style={{ color: '#5A5A5A' }}>
            Nothing worked. Then she joined Deeper30 — and lost{' '}
            <strong style={{ color: '#1B3A2D' }}>25kg in 3 months</strong>{' '}
            doing fitness the God way. No shortcuts. No side effects.
          </p>

          <div className="flex items-center gap-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
            </div>
            <span className="text-[0.75rem] font-semibold" style={{ color: '#5A5A5A' }}>
              Deeper30 Member
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}