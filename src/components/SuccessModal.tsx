import { FiCheck } from "react-icons/fi"

interface Props {
  email: string
  onClose: () => void
}

export default function SuccessModal({ email, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ background: "rgba(10, 20, 15, 0.75)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-[28px] px-8 py-10 text-center overflow-hidden"
        style={{
          background: "#1B3A2D",
          boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
          border: "1px solid rgba(201,144,58,0.25)",
        }}
      >
        {/* Glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,144,58,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Icon */}
        <div
          className="mx-auto mb-6 flex items-center justify-center w-14 h-14 rounded-full"
          style={{
            background: "rgba(201,144,58,0.15)",
            border: "1px solid rgba(201,144,58,0.35)",
          }}
        >
          <FiCheck size={26} color="#E8B86D" />
        </div>

        {/* Title */}
        <h3
          className="mb-3 text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1.8rem",
          }}
        >
          Welcome to Deeper30 🎉
        </h3>

        {/* Message */}
        <p
          className="text-sm leading-[1.7] mb-6"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Your spot is secured.
          <br /><br />
          We’ve sent your next steps to:
          <br />
          <span style={{ color: "#E8B86D", fontWeight: 600 }}>
            {email}
          </span>
          <br /><br />
          Check your inbox (and spam folder) to get started.
        </p>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{ background: "rgba(201,144,58,0.2)" }}
        />

        <button
          onClick={onClose}
          className="w-full text-white font-semibold py-4 rounded-full"
          style={{
            background: "#C9903A",
            boxShadow: "0 10px 30px rgba(201,144,58,0.4)",
          }}
        >
          Got it →
        </button>
      </div>
    </div>
  )
}