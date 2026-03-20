import { useState } from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { TestimonialsSlider } from "./TestimonialsSlider";

/* ── Expandable long testimonial card ── */
const ExpandableTestimonial = ({
  name,
  program,
  paragraphs,
}: {
  name: string;
  program: string;
  paragraphs: string[];
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-[20px] p-8 relative overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(201,144,58,0.2)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(201,144,58,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Name */}
      <h4
        className="relative font-bold text-lg mb-1"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--gold-light, #E8B86D)",
        }}
      >
        {name}
      </h4>
      <p className="relative text-[0.8rem] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
        {program}
      </p>

      {/* Paragraphs */}
      <div className="relative space-y-4">
        {paragraphs
          .slice(0, expanded ? paragraphs.length : 2)
          .map((p, i) => (
            <p
              key={i}
              className="text-[0.95rem] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {p}
            </p>
          ))}
      </div>

      {/* Toggle */}
      <div className="relative mt-5">
        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--gold, #C9903A)" }}
          >
            Read Full Story →
          </button>
        ) : (
          <button
            onClick={() => setExpanded(false)}
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Show Less ↑
          </button>
        )}
      </div>
    </div>
  );
};

/* ── Main Testimonials section ── */
export const Testimonials = () => {
  const longTestimonials = [
    {
      name: "Minella",
      program: "Deeper 30 — July",
      paragraphs: [
        "Dear Coach Steph, I've been meaning to write this for a while, and I hope these words can capture even a little bit of what your DEEPER30 challenge meant to me. When I joined the challenge in July, I was honestly just hoping to lose a bit of weight and feel more like myself again — especially after having a baby nine months ago. What I didn't expect was how deeply the challenge would impact me, body, soul, and spirit.",
        "Losing over 8kg in just 30 days was something I didn't think was possible for me. I had been trying, and nothing was working. But DEEPER30 was different. It wasn't just about the workouts or the food (even though you put me on that salad challenge, now all my dishes have a salad) — it was how the challenge was rooted in Christ. Every day, we had Scriptures to reflect on, and those verses became fuel for my journey.",
        "The weekend fasts were powerful. They weren't easy, but they reminded me that this wasn't just about my weight — it was about discipline, surrender, and healing from the inside out.",
        "The live workouts? The absolute best!! There was something powerful about showing up in real-time, knowing you were right there with us — guiding, cheering, and sometimes lovingly pushing us past the limits we had placed on ourselves.",
        "What made the biggest difference for me, though, was you. Coach Steph, you created such a safe, encouraging, and non-judgmental space. You weren't just a coach yelling out instructions — you cared. You noticed people. You prayed with us. You checked in. You celebrated little wins and encouraged us when we felt stuck.",
        "In a season where I was still trying to find my feet again as a new mom in a new country, your guidance and presence meant more than you probably know. There was no shame, no pressure, just consistent support and love. That's rare — and I'm so grateful.",
        "Thank you for listening. Thank you for teaching. Thank you for showing up — consistently and with so much heart. DEEPER30 wasn't just a challenge; it was a divine appointment.",
        "With love, Minella",
      ],
    },
    {
      name: "Iyanu",
      program: "Deeper 30 — August",
      paragraphs: [
        "Deeper 30 is not just a program, it is the divine answer to prayers I once whispered in weariness. From the start, it has been a sacred call into deeper waters — an invitation to surrender, stretch, and transform.",
        "This journey has shifted me spiritually, emotionally, mentally, and physically. I've grown in intimacy with God, and discovered layers of myself I had buried or overlooked. My prayer life is better — consistent, intentional, and alive with meaning.",
        "The transformation has also been tangible. I've lost 5kg, my acne has cleared, and for the first time in a long time, my period came pain-free. I've become noticeably more fit, and my stamina has increased significantly.",
        "Each day of this journey has been sacred — marked by quiet reflection, honest journaling, and intimate moments with God. Through it all, He has been peeling back layers and pouring in strength.",
        "Deeper30 has also given me a sisterhood of real women, showing up raw, praying together, healing together, holding space for one another. There's been no pretence, no pressure, just presence.",
        "To Stephanie, our leader — thank you. Your obedience is changing lives. You have poured without withholding, led without ego. There's no gatekeeping here, just grace. And that has made all the difference.",
        "I'm not who I was when this started, and I know God is not finished with me yet.",
      ],
    },
    {
      name: "Hannah",
      program: "Deeper 30 — August",
      paragraphs: [
        "My honest review of August's Deeper 30. I am actually glad I did this.",
        "Yesterday, one of my teammates said 'Hannah your food nowadays is massive.' I was eating walnut. Who eats walnut? People close to me now ask if I should eat this or that, because they see I'm intentional about everything.",
        "I used the toilet this morning and I did 10 squats — right there and then. I determined I'd do 10 squats anytime I use the restroom. I now hop comfortably over bridges and staircases, telling myself I need to be fit.",
        "I now stay conscious of what I eat, consume more fruits and water, though I still default occasionally with spaghetti. Recently I see ladies with curvy bodies and I think — that's possible for me too. And I am loved as I am right now.",
        "How did I get here? Through Deeper 30. I've come to understand how important my body, health, spirit, energy, and soul is to God. God wants me wholesome, agile and well grounded.",
        "I'm grateful for your prayers and how you show up for us. It's beyond money — how much is it, really? This era is to a better me, and that dream started when I got into Deeper 30.",
      ],
    },
  ];

  return (
    <section
      style={{ background: "var(--deep-green, #1B3A2D)" }}
      className="relative overflow-hidden"
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,144,58,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative px-6 py-20">
        {/* Section header */}
        <p
          className="text-center text-[11px] font-semibold tracking-[3px] uppercase mb-4"
          style={{ color: "var(--gold, #C9903A)" }}
        >
          Real Women. Real Results.
        </p>
        <h2
          className="text-center mx-auto max-w-[560px] leading-[1.25] mb-16"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            color: "#fff",
          }}
        >
          What Women Are <em style={{ color: "var(--gold-light, #E8B86D)", fontStyle: "italic" }}>Saying</em>
        </h2>

        {/* ── Transformations Slider ── */}
        <div className="max-w-5xl mx-auto mb-20">
          <p
            className="text-center text-[11px] font-semibold tracking-[3px] uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Before & After
          </p>
          <h3
            className="text-center text-xl font-bold mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--gold-light, #E8B86D)",
            }}
          >
            Transformations
          </h3>
          <BeforeAfterSlider />
        </div>

        {/* ── Short Testimonials Slider ── */}
        <div className="mb-4">
          <p
            className="text-center text-[11px] font-semibold tracking-[3px] uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Community Love
          </p>
          <h3
            className="text-center text-xl font-bold mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--gold-light, #E8B86D)",
            }}
          >
            From the Group Chat
          </h3>
          <TestimonialsSlider />
        </div>

        {/* ── Long Expandable Testimonials ── */}
        <div className="max-w-3xl mx-auto mb-20">
          <p
            className="text-center text-[11px] font-semibold tracking-[3px] uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Full Stories
          </p>
          <h3
            className="text-center text-xl font-bold mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--gold-light, #E8B86D)",
            }}
          >
            Letters from the Community
          </h3>
          <div className="space-y-6">
            {longTestimonials.map((t, i) => (
              <ExpandableTestimonial key={i} {...t} />
            ))}
          </div>
        </div>

        {/* ── Video Stories ── */}
        <div className="max-w-4xl mx-auto">
          <p
            className="text-center text-[11px] font-semibold tracking-[3px] uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Hear It Yourself
          </p>
          <h3
            className="text-center text-xl font-bold mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--gold-light, #E8B86D)",
            }}
          >
            Video Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "https://res.cloudinary.com/dcuad6p9z/video/upload/v1755459619/d1c8c9e0-e8c1-4d70-968d-0ecb47d6d377_1_cwufxb.mp4",
              "https://res.cloudinary.com/dcuad6p9z/video/upload/v1755459767/6f2388b6-d24b-4d83-8993-d2fc3e6ac902_1_h03vw2.mp4",
            ].map((src, i) => (
              <div
                key={i}
                className="relative w-full aspect-video rounded-[20px] overflow-hidden"
                style={{
                  border: "1px solid rgba(201,144,58,0.25)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                }}
              >
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-contain"
                  style={{ background: "#000" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};