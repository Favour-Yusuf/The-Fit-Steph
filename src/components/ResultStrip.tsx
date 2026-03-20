const stats = [
  { num: '2–4', label: 'Inches off waist' },
  { num: '30',  label: 'Days only' },
  { num: '100%', label: 'Virtual & flexible' },
  { num: '5',   label: 'Spots this month' },
]

export function ResultStrip() {
  return (
    <div className="bg-[#c9903a]">
      <div className="flex items-stretch justify-center flex-wrap max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-stretch">
            <div className="flex flex-col items-center justify-center px-5 py-7 gap-1 flex-1 min-w-[120px]">
              <span className="font-display font-black text-white leading-none"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
                {s.num}
              </span>
              <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-white/75 text-center">
                {s.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px bg-white/25 my-4 self-stretch hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
