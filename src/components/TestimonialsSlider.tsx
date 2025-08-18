import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"


const testimonials = [
  {
    text: `“Believe me that TheFitSteph live workout is fire and better than
      the youtube workout I use. The best part is praying and speaking in
      other tongues. Omoor... the Spirit of God came down. Please try to
      pay, you won't regret it. A try would convince you.”`,
    author: "— Jennifer Suberu",
  },
  {
    text: `“Today was explosives. The workouts and the prayer session today was
      definitely by the leading of the Holy Spirit. Thank you TheFitSteph.
      I'm glad that I got to do this everyday with you. You are Godsent!
      Now, let me lock in and take the 6kg I've lost so far to 12kg by the
      grace of God and by showing up everyday, under your guidance.”`,
    author: "— Favour O.",
  },
]

export const TestimonialsSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })] // 5s per slide
  )

  return (
    <div className="max-w-5xl mx-auto px-6 mb-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] px-2" // full width per slide
            >
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <p className="text-gray-300">{t.text}</p>
                <span className="block mt-4 text-sm text-gray-400">
                  {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
