import { useState } from "react"

export const AskQuestions = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    question: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSend = () => {
    const whatsappNumber = "2347033408291" // 🔥 Replace with YOUR WhatsApp number
    const message = `Hello, I would like to make some enquiries.\n\nName: ${form.name}\nPhone: ${form.phone}\nQuestions: ${form.question}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
      <h2 className="text-2xl font-bold mb-6 text-[#BCFF40]">Have Questions?</h2>
      <p className="text-gray-400 mb-6">Fill in your details and your questions below, and I’ll get back to you.</p>

      <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 max-w-md mx-auto shadow-lg">
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
        <textarea
          name="question"
          placeholder="Type your question here... (eg: How can I lose 10kg in 2 minutes? 😂😂)"
          value={form.question}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-600"
        />

        <button
          onClick={handleSend}
          className="w-full bg-[#BCFF40] text-black py-3 rounded-lg font-semibold hover:bg-lime-400 transition"
        >
          Send via WhatsApp
        </button>
      </div>
    </div>
  )
}
