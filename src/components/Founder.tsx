// src/components/Founder.tsx
export const Founder = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      {/* Image placeholder */}
      <div className="bg-gray-800 w-full h-96 rounded-xl flex items-center justify-center">
        <img src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1755377300/IMG_3977_ubjbcy.jpg" alt="Stephnie" className="h-full object-cover w-full rounded-xl" />
      </div>

      {/* Bio */}
      <div>
        <h2 className="text-3xl font-bold text-[#BCFF40] mb-4">Meet Stephanie Bob Attah</h2>
        <p className="text-gray-300 leading-relaxed">
          My name is Stephanie Bob Attah, a Christian fitness accountability coach and founder of Deeper30. 
          I help women, especially Christian women, stay consistent in their fitness journey while deepening their walk with God.
          Through a proven structure of accountability, faith, and practical fitness guidance, 
          I teach them how to invite God into every part of their health journey.
        </p>

        <a
          href="https://www.instagram.com/thefitsteph_"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-[#BCFF40] font-semibold hover:underline"
        >
          📸 Follow me on Instagram
        </a>
      </div>
    </div>
  );
};
