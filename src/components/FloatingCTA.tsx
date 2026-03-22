import { useEffect, useState } from "react"
import { FiLock } from "react-icons/fi"

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPricing = () => {
    const el = document.getElementById("pricing")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToPricing}
        className="flex items-center gap-2 px-6 py-4 rounded-full text-white font-semibold text-sm"
        style={{
          background: "#C9903A",
          boxShadow: "0 10px 40px rgba(201,144,58,0.45)",
          backdropFilter: "blur(6px)",
        }}
      >
        <FiLock size={14} />
        Secure your spot now →
      </button>
    </div>
  )
}