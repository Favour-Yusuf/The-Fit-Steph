"use client";
import { useState } from "react";
// import Image from "next/image";
// import ReactPlayer from "react-player";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { TestimonialsSlider } from "./TestimonialsSlider";

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

    
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg">
      
      <h4 className="text-[#BCFF40] font-bold mb-4">{name}</h4>
      <div className="space-y-4 text-gray-300">
        {paragraphs.slice(0, expanded ? paragraphs.length : 2).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-4 text-sm font-semibold text-[#BCFF40] hover:underline"
        >
          Read Full Story →
        </button>
      )}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          className="mt-4 text-sm font-semibold text-gray-400 hover:text-white"
        >
          Show Less ↑
        </button>
      )}
      <p className="mt-4 text-sm text-gray-500">Joined: {program}</p>
    </div>
  );
};

// 🔥 Before & After Slider (using one combined image)

export const Testimonials = () => {
  // Example long testimonials
  const longTestimonials = [
    {
      name: "Minella",
      program: "Deeper 30",
      paragraphs: [
        "Dear Coach Steph,I’ve been meaning to write this for a while, and I hope these words can capture even a little bit of what your DEEPER30 challenge meant to me. When I joined the challenge in July, I was honestly just hoping to lose a bit of weight and feel more like myself again — especially after having a baby nine months ago. What I didn’t expect was how deeply the challenge would impact me, body, soul, and spirit.",
        "Losing over 8kg in just 30 days was something I didn’t think was possible for me. I had been trying, and nothing was working. But DEEPER30 was different. It wasn’t just about the workouts or the food (even though you put me on that salad challenge, now all my dishes have a salad) — it was how the challenge was rooted in Christ. Every day, we had Scriptures to reflect on, and those verses became fuel for my journey. I didn’t feel like I was just in a fitness program — I felt like I was being spiritually and emotionally refreshed as well.",
        "The weekend fasts were powerful. They weren’t easy, but they reminded me that this wasn’t just about my weight — it was about discipline, surrender, and healing from the inside out.",
        "The live workouts? The absolute best!! There was something powerful about showing up in real-time, knowing you were right there with us — guiding, cheering, and sometimes lovingly pushing us past the limits we had placed on ourselves. I found strength I didn’t even know I had. Even on the days I felt tired or unsure, your energy and words reminded me that I could keep going. ",
        "What made the biggest difference for me, though, was you. Coach Steph, you created such a safe, encouraging, and non-judgmental space. You weren’t just a coach yelling out instructions or counting reps — you cared. You noticed people. You prayed with us. You checked in. You celebrated little wins and encouraged us when we felt stuck. You made me feel seen, like I mattered, and like I wasn’t alone in this journey.",
        "In a season where I was still trying to find my feet again as a new mom in a new country, your guidance and presence meant more than you probably know. There was no shame, no pressure, just consistent support and love. That’s rare — and I’m so grateful.",
        "I know you hear these things enough, but I want you to know that what you’re doing is changing lives. You certainly changed mine.",
        "Thank you for listening. Thank you for teaching. Thank you for showing up — consistently and with so much heart. DEEPER30 wasn’t just a challenge; it was a divine appointment. I’ll always be grateful I got to be part of it.",
        "With love Minella",
      ],
    },
    {
      name: "Iyanu",
      program: "Deeper 30",
      paragraphs: [
        "Deeper 30 is not just a program, it is the divine answer to prayers I once whispered in weariness. From the start, it has been a sacred call into deeper waters, an invitation to surrender, stretch, and transform.",
        "This journey has shifted me spiritually, emotionally, mentally, and physically. I’ve grown in intimacy with God, and discovered layers of myself I had buried or overlooked. I’ve experienced discipline and self-control in dimensions I didn’t even know I was capable of. My prayer life is better consistent, intentional, and alive with meaning. I no longer show up from obligation but from a deep desire to commune.",
        "The transformation has also been tangible. I’ve lost 5kg, my acne has cleared, and for the first time in a long time , my period came pain-free. I’ve become noticeably more fit, and my stamina has increased significantly. I no longer feel as heavy or drained as I used to. My relationship with food, with rest, and with my body is no longer rooted in shame but in reverence.",
        "Each day of this journey has been sacred marked by quiet reflection, honest journaling, and intimate moments with God. Through it all, He has been peeling back layers and pouring in strength. I’ve learned that transformation isn’t always loud or public; sometimes it’s still, slow, and deeply personal.",
        "Deeper30 has also given me a sisterhood of real women, showing up raw, praying together, healing together, holding space for one another. There’s been no pretence, no pressure, just presence.",
        "To Stephanie, our leader, thank you. Your obedience is changing lives. You have poured without withholding, offered without selling, and led without ego. There’s no gatekeeping here just grace. And that has made all the difference.",
        "As we round off this sacred journey, I can’t help but feel full, full of gratitude for how far I’ve come, yet expectant for what’s still unfolding. I’m not who I was when this started, and I know God is not finished with me yet.",
        "Deeper30 is changing me from the inside out. I’m carrying this shift into every part of my life.",
        // add rest of her story...
      ],
    },
    {
      name: "Hannah",
      program: "Deeper 30",
      paragraphs: [
        "My honest review of August’s Deeper 30. I am actually glad I did this.",
        "Yesterday, one of my team mate said “Hannah your food nowadays is massive”. I was eating walnut. Who eats walnut. People close to me would ask if I’m to eat this or that cause they see I’m now intentional about everything. But that’s how refined I’m becoming. ",
        "I used the toilet this morning and I did 10 squats. There and then I determined I’d do 10 squats anytime I use the restroom.This morning I noticed I hop comfortably and always when I used the bridge or office stair case, telling myself I need to be fit.",
        "I now stay conscious of what I eat, consume more fruits and water, though I still default occasionally with spaghetti and eating till I’m full. Recently I see ladies with curvy bodies and bumbum and I’m like, great. God when. But I also understand it’s possible for me and that I’m good and loved as I am. ",
        "How did I get here? Through Deeper 30. I have come to understand how important my body, health, spirit, energy and soul is to God. God wants me wholesome, agile and well grounded. And I can make that happen with His help. I’m amazed how you keep track of every member. Checking up and also respectfully holding us accountable. You even used the term “clients” for us on your status and I love how you value everyone. ",
        "I’m grateful for your prayers today. And how you show up for us. It’s beyond money, cause how much is it. This era is to a better me and that dream started when I got in to Deeper 30. Not easy but I’m doing well.",
      ],
    },
  ];

  return (
    <div className="bg-gray-950 py-20">
      <h2 className="text-4xl px-6 font-bold text-center text-[#BCFF40] mb-12">
        What Women Are Saying
      </h2>


      {/* ✅ Before & After Slider */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h3 className="text-2xl font-bold text-[#BCFF40] mb-6 text-center">
          Transformations
        </h3>
        <BeforeAfterSlider />
      </div>

      {/* ✅ Short Testimonials Grid */}
      <TestimonialsSlider/>
      

      {/* ✅ Expandable Long Testimonials */}
      <div className="max-w-4xl mx-auto space-y-8 px-6 mb-16">
        {longTestimonials.map((t, i) => (
          <ExpandableTestimonial key={i} {...t} />
        ))}
      </div>

      

      {/* ✅ Video Testimonials */}

      <div className="max-w-5xl mx-auto px-6">
  <h3 className="text-2xl font-bold text-[#BCFF40] mb-6 text-center">Video Stories</h3>
  <div className="grid md:grid-cols-2 gap-6">
    {/* Video 1 */}
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-700">
      <video
        src="https://res.cloudinary.com/dcuad6p9z/video/upload/v1755459619/d1c8c9e0-e8c1-4d70-968d-0ecb47d6d377_1_cwufxb.mp4"
       autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-contain"
        controls = {true}
      />
    </div>

    {/* Video 2 */}
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-700">
      <video
        src="https://res.cloudinary.com/dcuad6p9z/video/upload/v1755459767/6f2388b6-d24b-4d83-8993-d2fc3e6ac902_1_h03vw2.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls = {true}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>

    </div>
  );
};
