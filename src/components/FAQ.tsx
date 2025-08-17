// src/components/FAQ.tsx
export const FAQ = () => {
  const faqs = [
    { q: "Do I need gym access?", a: "No, all workouts are designed for home training." },
    { q: "What if I’m a beginner?", a: "Our plans are beginner-friendly and adaptable." },
    { q: "How do I join?", a: "Choose a program, make payment via Selar or bank transfer, then send proof on WhatsApp." }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-[#BCFF40] mb-12">FAQs</h2>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-[#BCFF40]">{f.q}</h3>
            <p className="mt-2 text-gray-300">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
