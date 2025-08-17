// src/components/Footer.tsx
export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 text-center text-gray-400">
      <p>© {new Date().getFullYear()} TheFitSteph. All rights reserved.</p>
      <a href="https://www.instagram.com/thefitsteph_" target="_blank" rel="noopener noreferrer" className="text-[#BCFF40] hover:underline mt-2 block">
        Instagram
      </a>
    </footer>
  );
};
