// src/components/Programs.tsx
import { motion } from "framer-motion";
import { Dumbbell, BookOpen, Utensils, Users, Calendar, Heart } from "lucide-react";

export const Programs = () => {
  const programData = [
    {
      title: "Deeper 30 Challenge",
      subtitle: "30-Day Fitness Faith & Accountability Challenge for Women 💚",
      intro: "Tired of starting and stopping your fitness journey? Deeper 30 is designed for women who want to stay consistent, grow spiritually, and build lasting healthy habits — all from home.",
      benefits: [
        { icon: <Dumbbell className="w-5 h-5 text-[#BCFF40]" />, text: "5x/week live workouts you can do at home" },
        { icon: <BookOpen className="w-5 h-5 text-[#BCFF40]" />, text: "Daily Bible study, devotion & prayer" },
        { icon: <Utensils className="w-5 h-5 text-[#BCFF40]" />, text: "Meal & intermittent fasting guide" },
        { icon: <Heart className="w-5 h-5 text-[#BCFF40]" />, text: "Printable accountability tracker" },
        { icon: <Users className="w-5 h-5 text-[#BCFF40]" />, text: "1-on-1 daily accountability so you never feel alone" },
        { icon: <Calendar className="w-5 h-5 text-[#BCFF40]" />, text: "Weekly live check-ins for motivation & guidance" },
      ],
      who: [
        "💃 Women who want a Christ-centered approach to fitness",
        "🏋🏾‍♀️ Women who want to get fit from home without gym pressure",
        "⏳ Busy women who need structure and accountability",
        "🙏 Women who want to combine faith, fitness, and discipline",
      ],
      start: "September 8",
      fee: "₦25,000",
      location: "Online | Women Only",
      cta: "🚀 Secure Your Spot",
      link: "https://selar.com/3r4373js67",
    },
    {
      title: "75 Soft",
      subtitle: "75-Day Fitness Faith & Accountability Challenge for Women 💚",
      intro: "If you’ve been struggling to stay committed, the 75 Soft Challenge will change everything. Build unshakable consistency through small, sustainable steps over 11 weeks.",
      benefits: [
        { icon: <Dumbbell className="w-5 h-5 text-[#BCFF40]" />, text: "Daily workouts (morning & evening sessions)" },
        { icon: <BookOpen className="w-5 h-5 text-[#BCFF40]" />, text: "Daily Bible study, devotion & prayer" },
        { icon: <Utensils className="w-5 h-5 text-[#BCFF40]" />, text: "Meal & intermittent fasting guide for long-term results" },
        { icon: <Heart className="w-5 h-5 text-[#BCFF40]" />, text: "TheFitSteph 365-Day Accountability Journal (Free)" },
        { icon: <Users className="w-5 h-5 text-[#BCFF40]" />, text: "Daily 1-on-1 accountability support" },
        { icon: <Calendar className="w-5 h-5 text-[#BCFF40]" />, text: "Weekly live check-ins" },
        { icon: <Heart className="w-5 h-5 text-[#BCFF40]" />, text: "25% cashback when you finish strong" },
        { icon: <Users className="w-5 h-5 text-[#BCFF40]" />, text: "2-part payment plan available" },
      ],
      who: [
        "💃 Women ready to commit for 75 days and see real transformation",
        "🏋🏾‍♀️ Women who need more than a quick challenge — they want a lifestyle shift",
        "⏳ Women who value accountability and structure over quick fixes",
        "🙏 Women who want to keep God at the center of their journey",
      ],
      start: "October 1",
      fee: "₦150,000",
      location: "Online | Women Only",
      cta: "🔥 Commit to 75 Days",
      link: "https://selar.com/51q67079ky",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center text-[#BCFF40] mb-16">
        Pick Your Transformation Journey
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {programData.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-900 to-black p-10 rounded-3xl shadow-xl border border-gray-700 relative"
          >
            {/* Title */}
            <p className="text-sm text-left">Deeper 30</p>
            <h3 className="text-3xl font-bold text-[#BCFF40]">{p.title}</h3>
            <p className="mt-2 text-gray-300 italic">{p.subtitle}</p>

            {/* Intro */}
            <p className="mt-6 text-gray-300">{p.intro}</p>

            {/* Benefits */}
            <h4 className="mt-6 text-xl font-semibold text-[#BCFF40]">What You’ll Get:</h4>
            <ul className="mt-4 space-y-3">
              {p.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  {b.icon}
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            {/* Who this is for */}
            <h4 className="mt-6 text-xl font-semibold text-[#BCFF40]">Who This is For:</h4>
            <ul className="mt-3 space-y-2 text-gray-300">
              {p.who.map((w, idx) => (
                <li key={idx}>{w}</li>
              ))}
            </ul>

            {/* Footer Info */}
            <div className="mt-8 p-4 rounded-xl bg-gray-800/70 border border-gray-700 text-gray-200">
              <p>📅 Start Date: <b>{p.start}</b></p>
              <p>💰 Fee: <b>{p.fee}</b></p>
              <p>🌍 {p.location}</p>
            </div>

            {/* CTA */}
            <a
              href={p.link}
              className="mt-6 block text-center bg-[#BCFF40] text-black py-4 rounded-full font-bold text-lg hover:bg-lime-400 transition"
            >
              {p.cta}
            </a>
            <p className="mt-3 text-sm text-gray-400 text-center">⚡ 5 slots available</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
