import { useState } from "react"

export const TwoPartPayment = () => {
  const [showStep1, setShowStep1] = useState(false)
  const [showStep2, setShowStep2] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    receipt: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (files && files.length > 0) {
      setForm({ ...form, receipt: files[0] })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSend = () => {
    const whatsappNumber = "2347033408291" // 🔥 replace with your number
    const receiptNote = form.receipt
      ? `Receipt: ${form.receipt.name} (please attach the file in WhatsApp chat)`
      : "Receipt: Not uploaded"
    const message = `Hello, I would love to join the waitlist for the 75 Soft Challenge.\n\nI have made part payment. Kindly confirm.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n${receiptNote}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="text-center my-12">
      {/* Trigger button */}
            <h2 className="text-xl font-bold text-[#BCFF40] mb-4">Can't make a one time Payment?</h2>
      <button
        onClick={() => setShowStep1(true)}
        className="bg-[#BCFF40] text-black py-3 px-6 rounded-lg font-semibold hover:bg-lime-400 transition"
      >
        Join with 2-Part Payment
      </button>

      {/* Step 1 Modal */}
      {showStep1 && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold text-[#BCFF40] mb-4">2-Part Payment Plan</h2>
            <p className="text-gray-300 mb-4">
              Pay <span className="font-bold">₦75,000 now</span> and complete the remaining{" "}
              <span className="font-bold">₦75,000</span> on or before{" "}
              <span className="font-bold">October 1st</span>.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 text-left text-gray-200 mb-4">
              <p>Bank: Kuda bank</p>
              <p>Account Number: 1101162804</p>
              <p>Account Name: Stephanie Okechukwu</p>
            </div>
            <button
              onClick={() => {
                setShowStep1(false)
                setShowStep2(true)
              }}
              className="w-full bg-[#BCFF40] text-black py-2 rounded-lg font-semibold"
            >
              Confirm Payment
            </button>
            <button
              onClick={() => setShowStep1(false)}
              className="w-full mt-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Step 2 Modal */}
      {showStep2 && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold text-[#BCFF40] mb-4">Confirm Your Payment</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="file"
              name="receipt"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="w-full p-2 mb-4 text-gray-400"
            />

            <button
              onClick={handleSend}
              className="w-full bg-[#BCFF40] text-black py-3 rounded-lg font-semibold hover:bg-lime-400 transition"
            >
              Send via WhatsApp
            </button>

            <button
              onClick={() => setShowStep2(false)}
              className="w-full mt-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
