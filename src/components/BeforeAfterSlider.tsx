// src/components/BeforeAfterSlider.tsx
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"

const images = [
  "/before-after-1.PNG",
  "/before-after2.PNG",
  "/before-after3.PNG",
  "/before-after4.PNG",
  "/before-after5.PNG",
  "/before-after6.PNG",
  "/before-after7.PNG",
]

export const BeforeAfterSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // 4s autoplay
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Slider */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div className="flex-[0_0_100%]" key={i}>
              <img
                src={img}
                alt={`Before & After ${i}`}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === selectedIndex ? "bg-[#BCFF40]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
