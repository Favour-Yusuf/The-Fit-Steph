import { useState } from "react"

export const JoinSteps = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    package: "Select Package",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleConfirm = () => {
    const whatsappNumber = "2347033408291" // replace with YOUR WhatsApp number
    const message = `Hello, I have made a payment for ${form.package} and would like you to confirm.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPackage: ${form.package}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
      <h2 className="text-2xl font-bold mb-6 text-[#BCFF40]">How to Join</h2>

      <ol className="text-gray-300 space-y-4 text-left max-w-lg mx-auto">
        {/* <li>1️⃣ Choose your package (30 Days Challenge or 75 Soft).</li> */}
        <li>2️⃣ Pay securely via <a href="https://selar.com/m/ThefitSteph" target="_blank" rel="noopener noreferrer" className="text-[#BCFF40] underline">Selar</a>.</li>
        <li>3️⃣ Come back here and click the button below to confirm your payment.</li>
      </ol>

      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 bg-[#BCFF40] text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-400 transition"
      >
        Confirm Payment
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-md w-full border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Confirm Your Payment</h3>

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

            <select
              name="package"
              value={form.package}
              onChange={handleChange}
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-600"
            >
              <option value="30 Days Challenge">30 Days Challenge</option>
              <option value="75 Soft">75 Soft</option>
            </select>

            <div className="flex justify-between gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-gray-700 py-2 rounded-lg text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 bg-[#BCFF40] text-black py-2 rounded-lg font-semibold"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
