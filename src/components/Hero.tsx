// src/components/Hero.tsx
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden">
      {/* Background image (replace with founder photo / vector / pattern) */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1754590973/pexels-pixabay-416717_sva4hu.jpg"
          alt="fitness background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#BCFF40] to-lime-300 text-transparent bg-clip-text drop-shadow-lg">
          Staying Fit With God
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          A Christ-centered approach to health, fitness, and accountability.
        </p>

        {/* Social proof line */}
        <p className="mt-4 text-sm text-gray-400">
          💃 Trusted by 200+ Christian women worldwide
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#programs"
            className="px-8 py-4 bg-[#BCFF40] text-black font-bold rounded-full shadow-lg hover:bg-lime-400 transition"
          >
            🚀 Join Deeper30
          </a>
        </div>
      </motion.div>
    </div>
  );
};
