// src/components/BeforeAfterSlider.tsx
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/before-after-1.PNG",
  "/before-after2.PNG",
  "/before-after3.PNG",
  "/before-after4.PNG",
  "/before-after5.PNG",
  "/before-after6.PNG",
  "/before-after7.PNG",
  // "/IMG_4375.PNG",
  // "/IMG_4376.PNG",
]

export const BeforeAfterSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Update active slide
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

      {/* Navigation Buttons */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-900/70 p-2 rounded-full hover:bg-gray-800"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-900/70 p-2 rounded-full hover:bg-gray-800"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full ${
              i === selectedIndex ? "bg-[#BCFF40]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
