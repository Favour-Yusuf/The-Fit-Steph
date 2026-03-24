import { useCountdown } from '../hooks/useCountdown'

const fmt = (n: number) => String(n).padStart(2, '0')

const TAKEN_SLOTS = 0 // update as spots fill: 1, 2, 3...
const TOTAL_SLOTS = 5
const LEFT_SLOTS = TOTAL_SLOTS - TAKEN_SLOTS

export function UrgencyBar() {
  const {days, hours, mins, secs } = useCountdown()

  return (
    <div className="sticky top-0 z-50 bg-[#1A1A1A] border-b border-white/5 flex items-center justify-center gap-3 flex-wrap px-5 py-3 text-sm font-medium text-white">
      {/* Lightning icon */}
      <svg className="text-gold flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#C9903A">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>

      <span className="text-white/70 font-normal">Discount ends soon —</span>

      {/* Countdown boxes */}
      <div className="flex items-center gap-1.5">
        {[
  `${fmt(days)}D`,
  `${fmt(hours)}H`,
  `${fmt(mins)}M`,
  `${fmt(secs)}S`,
].map((unit) => (
          <span
            key={unit}
            className="bg-white/10 border border-white/10 rounded-md px-2.5 py-1 font-bold text-[#E8B86D] font-display text-sm min-w-[42px] text-center"
          >
            {unit}
          </span>
        ))}
      </div>

      <span className="text-white/70 font-normal">
        · Only{' '}
        <strong className="text-[#E8B86D]">{LEFT_SLOTS}</strong> spots left
      </span>
    </div>
  )
}
