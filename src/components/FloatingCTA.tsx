import { useEffect, useState } from "react"
import { FiLock } from "react-icons/fi"

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPricing = () => {
    const el = document.getElementById("pricing")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToPricing}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full text-white text-[0.78rem] font-medium overflow-hidden"
        style={{
          background: "rgba(201,144,58,0.95)",
          boxShadow: "0 6px 24px rgba(201,144,58,0.35)",
          backdropFilter: "blur(6px)",
          letterSpacing: "0.03em",
        }}
      >
        {/* subtle shimmer flicker */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
            animation: "shimmer 2.5s infinite",
          }}
        />

        {/* icon */}
        <FiLock size={13} className="opacity-90" />

        {/* text */}
        <span className="relative">
          Secure your spot →
        </span>
      </button>

      {/* shimmer animation */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  )
}