import { useReveal } from '../hooks/useReveal'

const pains = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'No Time',
    body: '"I\'m too busy with work, kids, and life to commit to a long programme."',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    title: 'No Consistency',
    body: '"I start strong, then fall off after week one. Every single time."',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'No Support',
    body: '"I\'m doing this alone and nobody around me understands the struggle."',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9903A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Too Expensive',
    body: '"Most programmes cost too much or lock me into months I can\'t afford."',
  },
]

function PainCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal bg-cream border border-black/7 rounded-2xl p-6 text-left text-[0.95rem] text-[#5A5A5A] leading-relaxed">
      <span className="block mb-2.5">{icon}</span>
      <strong className="block mb-1.5 text-deep-green">{title}</strong>
      {body}
    </div>
  )
}

export function Problem() {
  const labelRef = useReveal()
  const h2Ref = useReveal()

  return (
    <section className="bg-[#FFFBF5] px-6 py-20 text-center">
      <p ref={labelRef} className="reveal text-[11px] font-semibold tracking-[3px] uppercase text-[#c9903a] mb-4">
        Sound familiar?
      </p>
      <h2 ref={h2Ref} className="reveal font-display font-bold text-[#1B3A2D] max-w-xl mx-auto leading-[1.25]"
        style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
        You've tried before.<br />But something always gets in the way.
      </h2>
      <div className="grid gap-4 max-w-3xl mx-auto mt-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {pains.map((p) => <PainCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
