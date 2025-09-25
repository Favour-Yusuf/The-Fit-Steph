// src/components/HomeWorkout9jaStepper.tsx
import { useState, useRef } from "react"

export default function HomeWorkout9jaStepper() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleAudioPlay = () => {
    if (step < 2) setStep(2)
  }

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(
      "Account Name: Stephanie Okechukwu\nBank:Opay\nAccount Number:7033408291"
    )
    alert("Account details copied!")
  }

  const handleProceedToForm = () => {
    if (step < 3) setStep(3)
  }

  const handleSubmit = () => {
    const message = `Hello, I’ve made payment for HomeWorkout9ja.%0A
Name: ${name}%0A
WhatsApp Number: ${phone}%0A
I would like you to confirm my payment. Receipt attached.`

    window.open(`https://wa.me/2347033408291?text=${message}`)
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-6 text-center space-y-10">
      <h1 className="text-3xl font-bold text-white">
        Join <span className="text-[#BCFF40]">HomeWorkout9ja</span>
      </h1>
      <p className="text-gray-400 font-semibold text-xl max-w-lg mx-auto">
        Follow these 3 simple steps to sign up ✨ {" "} <br />
        Pay <span className="text-[#BCFF40] text-2xl font-semibold"> ₦3,500</span> to secure your spot. Anything more? Na bonus love. 💚
      </p>

      {/* --- Stepper Header --- */}
      <div className="flex items-center justify-between max-w-lg mx-auto">
        {[1, 2, 3].map((s, i) => (
          <div key={s} className="flex-1 flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                step >= s ? "bg-[#BCFF40] text-black" : "bg-gray-700 text-gray-400"
              }`}
            >
              {s}
            </div>
            {i < 2 && (
              <div
                className={`flex-1 h-[2px] ${
                  step > s ? "bg-[#BCFF40]" : "bg-gray-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* --- Step 1 --- */}
      <div
        className={`p-6 rounded-xl border ${
          step >= 1 ? "border-[#BCFF40]" : "border-gray-700 opacity-50"
        } bg-gray-900`}
      >
        <h2 className="text-xl font-semibold text-white mb-3">
          Step 1: Listen to the Welcome Note
        </h2>
        <audio
          ref={audioRef}
          controls
          className="w-full"
          onPlay={handleAudioPlay}
        >
          <source src="/audio/Homework9ja.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* --- Step 2 --- */}
      <div
        className={`p-6 rounded-xl border ${
          step >= 2 ? "border-[#BCFF40]" : "border-gray-700 opacity-50"
        } bg-gray-900`}
      >
        <h2 className="text-xl font-semibold text-white mb-3">
          Step 2: Make Payment
        </h2>
        {step >= 2 ? (
          <div>
            <p className="text-gray-400 text-lg mb-4">
              Sow what you believe this is worth. Minimum is{" "}
              <span className="text-[#BCFF40] text-2xl font-bold">₦3,500</span>.
            </p>
            <div className="bg-black/40 p-4 rounded-lg border border-gray-700 text-left">
              <p className="text-gray-300">
                <strong>Account Name:</strong> Stephanie Okechukwu
              </p>
              <p className="text-gray-300">
                <strong>Bank:</strong> Opay
              </p>
              <p className="text-gray-300">
                <strong>Account Number:</strong> 7033408291 
              </p>
              <button
                onClick={handleCopyDetails}
                className="mt-3 bg-[#BCFF40] text-black px-4 py-2 rounded-lg font-medium"
              >
                Copy Details
              </button>
            </div>
            <button
              onClick={handleProceedToForm}
              className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Proceed
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Complete Step 1 to unlock.</p>
        )}
      </div>

      {/* --- Step 3 --- */}
      <div
        className={`p-6 rounded-xl border ${
          step >= 3 ? "border-[#BCFF40]" : "border-gray-700 opacity-50"
        } bg-gray-900`}
      >
        <h2 className="text-xl font-semibold text-white mb-3">
          Step 3: Confirm Your Payment
        </h2>
        {step >= 3 ? (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="WhatsApp Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-[#BCFF40] text-black px-4 py-3 rounded-lg font-semibold hover:bg-[#a3e634]"
            >
              Confirm via WhatsApp
            </button>
            <p className="text-gray-500 text-sm mt-2">
              ⚠ Don’t forget to send your payment receipt in the WhatsApp chat.
            </p>
          </div>
        ) : (
          <p className="text-gray-500">Complete Step 2 to unlock.</p>
        )}
      </div>
    </div>
  )
}
