import { useReveal } from '../hooks/useReveal'
import { useCountdown } from '../hooks/useCountdown'
import { FiCheck, FiLock, FiShield } from 'react-icons/fi'
import { RiInstagramLine, RiTimerFlashLine, RiHeartPulseLine } from 'react-icons/ri'
import { HiOutlineSparkles } from 'react-icons/hi'
import { TbStarFilled } from 'react-icons/tb'
import { BsLightningChargeFill } from 'react-icons/bs'
import { IoWarningOutline } from 'react-icons/io5'

const SELAR_LINK = 'https://selar.com/3r4373js67'
const TOTAL_SLOTS = 5
const TAKEN_SLOTS = 0

const fmt = (n: number) => String(n).padStart(2, '0')

// ─── FOR WHO ────────────────────────────────────────────────────
const whoItems = [
  { text: "You've tried programmes before but couldn't stay consistent",        tag: 'Been there',     icon: <RiTimerFlashLine size={12} />   },
  { text: 'You want weight loss that also feeds your spirit, not just your body', tag: 'Spirit first',  icon: <HiOutlineSparkles size={12} />  },
  { text: "You're tired of going it alone and want a real sisterhood around you", tag: 'Community',     icon: <RiHeartPulseLine size={12} />   },
  { text: 'You have a busy schedule and need something flexible and virtual',    tag: 'Flexible',       icon: <RiTimerFlashLine size={12} />   },
  { text: "You believe God has more for you and you're ready to steward your health", tag: 'Faith-led', icon: <HiOutlineSparkles size={12} />  },
  { text: 'You want a coach who holds you accountable and actually cares',       tag: 'Accountability', icon: <FiShield size={12} />           },
]

// ✅ Own component — useReveal at top level, not inside a .map()
function WhoItem({ text, tag, icon }: { text: string; tag: string; icon: React.ReactNode }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal group relative flex items-start gap-5 rounded-[20px] px-6 py-5 transition-all duration-300 cursor-default"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Hover bloom */}
      <div
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(201,144,58,0.07) 0%, transparent 70%)' }}
      />
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom, transparent, #C9903A, transparent)' }}
      />
      {/* Check badge */}
      <div
        className="relative shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: 'rgba(201,144,58,0.12)', border: '1px solid rgba(201,144,58,0.28)' }}
      >
        <FiCheck size={14} color="#C9903A" strokeWidth={3} />
      </div>
      <div className="flex-1 min-w-0">
        <span
          className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-2"
          style={{ background: 'rgba(201,144,58,0.1)', border: '1px solid rgba(201,144,58,0.2)', color: 'rgba(232,184,109,0.75)' }}
        >
          {icon}{tag}
        </span>
        <p className="text-[0.92rem] leading-[1.72]" style={{ color: 'rgba(255,255,255,0.72)' }}>
          {text}
        </p>
      </div>
    </div>
  )
}

export function ForWho() {
  const labelRef  = useReveal()
  const h2LeftRef = useReveal()
  const h2RightRef = useReveal()

  return (
    <section className="relative px-6 py-24 overflow-hidden" style={{ background: '#1B3A2D' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 0% 55%, rgba(201,144,58,0.08) 0%, transparent 55%),
          radial-gradient(ellipse at 100% 0%, rgba(10,28,18,0.65) 0%, transparent 50%)
        `,
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,144,58,0.3), transparent)' }} />

      <div className="relative max-w-5xl mx-auto">
        <p ref={labelRef} className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase mb-8" style={{ color: '#C9903A' }}>
          This is for you if…
        </p>
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20 mb-16">
          <div ref={h2LeftRef} className="reveal flex-1">
            <h2 className="text-white leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(2.2rem, 6vw, 3.8rem)' }}>
              You're done<br />with excuses.<br />
              <em style={{ color: '#E8B86D', fontStyle: 'italic' }}>You're ready to move.</em>
            </h2>
          </div>
          <div ref={h2RightRef} className="reveal md:max-w-xs">
            <div className="w-8 h-[2px] mb-5" style={{ background: 'rgba(201,144,58,0.5)' }} />
            <p className="leading-[1.85] font-light text-[0.95rem]" style={{ color: 'rgba(255,255,255,0.52)' }}>
              Deeper30 isn't for everyone. It's for women who are tired of starting over — and ready to finally finish.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {whoItems.map((item) => <WhoItem key={item.tag} {...item} />)}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,144,58,0.2), transparent)' }} />
    </section>
  )
}

// ─── VERSE BREAK ────────────────────────────────────────────────
export function VerseBreak() {
  const ref = useReveal()
  return (
    <section className="relative px-6 py-20 text-center overflow-hidden" style={{ background: '#C9903A' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 18% 50%, rgba(255,255,255,0.1) 0%, transparent 55%),
          radial-gradient(ellipse at 82% 50%, rgba(0,0,0,0.12) 0%, transparent 55%)
        `,
      }} />
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(255,255,255,0.22)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'rgba(0,0,0,0.1)' }} />

      <div ref={ref} className="reveal relative max-w-2xl mx-auto">
        <div className="absolute -top-8 left-0 select-none pointer-events-none" style={{
          fontFamily: "'Playfair Display', serif", fontSize: '9rem', color: 'rgba(255,255,255,0.1)', lineHeight: 1,
        }}>"</div>

        <blockquote className="relative italic text-white leading-[1.65]" style={{
          fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
        }}>
          Do you not know that your bodies are temples of the Holy Spirit?
          Therefore honour God with your bodies.
        </blockquote>

        <div className="flex items-center justify-center gap-3 mt-8 mb-4">
          <div className="h-px flex-1 max-w-[72px]" style={{ background: 'rgba(255,255,255,0.32)' }} />
          <TbStarFilled size={13} color="rgba(255,255,255,0.55)" />
          <div className="h-px flex-1 max-w-[72px]" style={{ background: 'rgba(255,255,255,0.32)' }} />
        </div>

        <cite className="not-italic text-[0.8rem] tracking-[0.2em] uppercase font-semibold" style={{ color: 'rgba(255,255,255,0.62)' }}>
          1 Corinthians 6:19–20
        </cite>
      </div>
    </section>
  )
}

// ─── COUNTDOWN ──────────────────────────────────────────────────
function CountUnit({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="relative flex items-center justify-center rounded-[18px] font-black leading-none tabular-nums" style={{
        width: 78, height: 78,
        fontSize: 'clamp(1.9rem, 5vw, 2.8rem)',
        fontFamily: "'Playfair Display', serif",
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(201,144,58,0.3)',
        color: '#E8B86D',
        boxShadow: '0 0 24px rgba(201,144,58,0.08), inset 0 1px 0 rgba(201,144,58,0.2)',
      }}>
        {num}
      </div>
      <span className="text-[0.63rem] tracking-[0.22em] uppercase font-semibold" style={{ color: 'rgba(255,255,255,0.3)' }}>
        {label}
      </span>
    </div>
  )
}

export function CountdownSection() {
  const { days, hours, mins, secs } = useCountdown()
  const leftSlots = TOTAL_SLOTS - TAKEN_SLOTS
  const h3Ref    = useReveal()
  const pRef     = useReveal()
  const timerRef = useReveal()
  const slotsRef = useReveal()

  return (
    <section className="relative px-6 py-20 text-center overflow-hidden" style={{ background: '#111' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% -5%, rgba(201,144,58,0.12) 0%, transparent 60%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,144,58,0.55), transparent)' }} />

      <div className="relative max-w-lg mx-auto">
        <div className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6"
          style={{ background: 'rgba(201,144,58,0.1)', border: '1px solid rgba(201,144,58,0.25)', color: '#C9903A' }}>
          <BsLightningChargeFill size={10} color="#C9903A" />
          Limited Round
        </div>

        <h3 ref={h3Ref} className="reveal text-white mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>
          This round closes in…
        </h3>
        <p ref={pRef} className="reveal text-[0.88rem] mb-12" style={{ color: 'rgba(255,255,255,0.38)' }}>
          Don't miss your window. The next round won't open immediately.
        </p>

        <div ref={timerRef} className="reveal flex justify-center items-center gap-2.5 flex-wrap">
          <CountUnit num={fmt(days)}  label="Days"  />
          <span className="pb-7 font-bold text-2xl" style={{ color: 'rgba(201,144,58,0.4)' }}>:</span>
          <CountUnit num={fmt(hours)} label="Hours" />
          <span className="pb-7 font-bold text-2xl" style={{ color: 'rgba(201,144,58,0.4)' }}>:</span>
          <CountUnit num={fmt(mins)}  label="Mins"  />
          <span className="pb-7 font-bold text-2xl" style={{ color: 'rgba(201,144,58,0.4)' }}>:</span>
          <CountUnit num={fmt(secs)}  label="Secs"  />
        </div>

        <div ref={slotsRef} className="reveal mt-14">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[0.8rem]" style={{ color: 'rgba(255,255,255,0.38)' }}>{TOTAL_SLOTS} spots per round</span>
            <strong className="flex items-center gap-1.5 text-[0.85rem] font-semibold" style={{ color: '#FF6B6B' }}>
              <IoWarningOutline size={14} />
              {leftSlots} spot{leftSlots !== 1 ? 's' : ''} left
            </strong>
          </div>

          <div className="rounded-full overflow-hidden" style={{ height: '5px', background: 'rgba(255,255,255,0.07)' }}>
            <div className="h-full rounded-full transition-all duration-[1500ms] ease-out" style={{
              width: `${(TAKEN_SLOTS / TOTAL_SLOTS) * 100}%`,
              background: 'linear-gradient(90deg, #C9903A, #E8B86D, #FF6B6B)',
            }} />
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {[...Array(TOTAL_SLOTS)].map((_, i) => (
              <div key={i} className="w-5 h-5 rounded-full transition-all duration-300" style={{
                background: i < TAKEN_SLOTS ? '#C9903A' : 'transparent',
                border: `1.5px solid ${i < TAKEN_SLOTS ? '#C9903A' : 'rgba(201,144,58,0.3)'}`,
                boxShadow: i < TAKEN_SLOTS ? '0 0 12px rgba(201,144,58,0.5)' : 'none',
                transform: i < TAKEN_SLOTS ? 'scale(1.2)' : 'scale(1)',
              }} />
            ))}
          </div>

          <p className="text-[0.72rem] mt-4" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Intentionally limited so every woman gets real accountability
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── PRICING ────────────────────────────────────────────────────
const includes = [
  { icon: '🏋🏾‍♀️', text: 'Live virtual workout sessions'    },
  { icon: '📲',    text: 'Daily accountability check-ins'   },
  { icon: '🙏🏾',  text: 'Faith-led community access'       },
  { icon: '👑',    text: 'Personal coaching from Steph'     },
  { icon: '🌍',    text: 'Global access — join from anywhere'},
  { icon: '🔒',    text: 'Women-only safe space'            },
]

export function Pricing() {
  const labelRef   = useReveal()
  const h2LeftRef  = useReveal()
  const h2RightRef = useReveal()
  const boxRef     = useReveal()

  return (
    <section className="relative px-6 py-24 overflow-hidden" style={{ background: '#FDF6EE' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,144,58,0.09) 0%, transparent 60%)' }} />

      <div className="relative max-w-5xl mx-auto mb-14">
        <p ref={labelRef} className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase mb-8" style={{ color: '#C9903A' }}>
          Investment
        </p>
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <div ref={h2LeftRef} className="reveal flex-1">
            <h2 className="leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', color: '#1B3A2D' }}>
              One price.<br /><em style={{ color: '#C9903A', fontStyle: 'italic' }}>Full access.</em>
            </h2>
          </div>
          <div ref={h2RightRef} className="reveal flex-1 md:max-w-xs">
            <div className="w-8 h-[2px] mb-5" style={{ background: 'rgba(201,144,58,0.5)' }} />
            <p className="leading-[1.85] font-light text-[0.95rem]" style={{ color: '#5A5A5A' }}>
              No subscriptions. No hidden fees. One focused month with everything you need — for less than a gym membership.
            </p>
          </div>
        </div>
      </div>

      <div ref={boxRef} className="reveal relative max-w-lg mx-auto rounded-[32px] overflow-hidden" style={{
        background: '#1B3A2D',
        boxShadow: '0 24px 80px rgba(27,58,45,0.22), 0 0 0 1px rgba(201,144,58,0.14)',
      }}>
        {/* Top shimmer band */}
        <div className="h-[3px] w-full" style={{ background: 'linear-gradient(to right, transparent, #C9903A, #E8B86D, #C9903A, transparent)' }} />
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,144,58,0.18) 0%, transparent 70%)' }} />

        <div className="relative px-8 pt-10 pb-10 md:px-12">
          {/* Discount badge */}
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-8"
            style={{ background: 'rgba(201,144,58,0.16)', border: '1px solid rgba(201,144,58,0.4)', color: '#E8B86D' }}>
            <TbStarFilled size={11} color="#E8B86D" />
            50% Off — Launch Discount
          </div>

          {/* Price */}
          <div className="flex items-end gap-4 mb-2">
            <div>
              <span className="block text-[1rem] line-through mb-1"
                style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(255,255,255,0.22)' }}>
                ₦50,000
              </span>
              <span className="block leading-none" style={{
                fontFamily: "'Playfair Display', serif", fontWeight: 900,
                fontSize: 'clamp(3rem, 8vw, 4.2rem)', color: '#E8B86D',
              }}>
                ₦25,000
              </span>
            </div>
            <div className="mb-2 space-y-1">
              <span className="block text-[0.68rem] uppercase tracking-[0.15em] font-semibold" style={{ color: 'rgba(255,255,255,0.32)' }}>one-time</span>
              <span className="block text-[0.68rem] uppercase tracking-[0.15em] font-semibold" style={{ color: 'rgba(255,255,255,0.32)' }}>full 30 days</span>
            </div>
          </div>

          <div className="my-7 h-px w-full" style={{ background: 'rgba(201,144,58,0.18)' }} />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10">
            {includes.map((item) => (
              <li key={item.text} className="flex items-center gap-2.5 text-[0.87rem]" style={{ color: 'rgba(255,255,255,0.68)' }}>
                <span className="text-base leading-none">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>

          {/* CTA with shimmer */}
          <a href={SELAR_LINK} target="_blank" rel="noreferrer"
            className="group relative block text-center text-white font-bold text-[1.05rem] py-5 px-10 rounded-full transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
            style={{ background: '#C9903A', boxShadow: '0 8px 36px rgba(201,144,58,0.45)', letterSpacing: '0.01em' }}>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.14) 50%, transparent 70%)' }} />
            <span className="relative">I'm Ready — Join Now →</span>
          </a>

          <p className="flex items-center justify-center gap-2 text-[0.76rem] mt-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <FiLock size={11} />
            Secure payment · Only 5 spots available this month
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ─────────────────────────────────────────────────────
export function Footer() {
  const links = [
    { handle: '@thefitsteph_',     url: 'https://instagram.com/thefitsteph_'     },
    { handle: '@deeper30community', url: 'https://instagram.com/deeper30community' },
  ]

  return (
    <footer className="relative px-6 pt-16 pb-10 text-center overflow-hidden" style={{ background: '#1B3A2D' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,144,58,0.42), transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,24,16,0.4), transparent)' }} />

      {/* Star row */}
      <div className="flex items-center justify-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => <TbStarFilled key={i} size={12} color="rgba(201,144,58,0.5)" />)}
      </div>

      {/* Wordmark */}
      <p className="mb-0.5 font-black tracking-[0.05em]"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#E8B86D' }}>
        Deeper30
      </p>
      <p className="text-[0.68rem] tracking-[0.22em] uppercase mb-9" style={{ color: 'rgba(255,255,255,0.24)' }}>
        Faith · Fitness · Sisterhood
      </p>

      {/* IG links */}
      <div className="flex flex-wrap items-center justify-center gap-5 mb-9">
        {links.map((link) => (
          <a key={link.handle} href={link.url} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-[0.82rem] font-medium transition-all duration-200 hover:opacity-65 hover:-translate-y-px"
            style={{ color: '#E8B86D' }}>
            <RiInstagramLine size={15} />
            {link.handle}
          </a>
        ))}
      </div>

      <div className="max-w-[180px] mx-auto h-px mb-7" style={{ background: 'rgba(255,255,255,0.06)' }} />

      <p className="text-[0.74rem] mb-1" style={{ color: 'rgba(255,255,255,0.22)' }}>Questions? DM Steph on Instagram.</p>
      <p className="text-[0.7rem]"  style={{ color: 'rgba(255,255,255,0.14)' }}>© 2025 TheFitSteph. All rights reserved.</p>
    </footer>
  )
}