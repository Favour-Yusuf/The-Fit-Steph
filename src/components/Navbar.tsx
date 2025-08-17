// src/components/Navbar.tsx
export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#BCFF40]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
      
            <img src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1755376325/Logo_for_TheFitSteph_Brand__Design_1_.zip_-_1-removebg-preview_xegwul.png" alt="TheFitSteph Logo"  className="h-20" />
        

        {/* Links */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <a href="#home" className="hover:text-[#BCFF40]">Home</a>
          <a href="#founder" className="hover:text-[#BCFF40]">Founder</a>
          <a href="#programs" className="hover:text-[#BCFF40]">Programs</a>
          <a href="#testimonials" className="hover:text-[#BCFF40]">Testimonials</a>
          <a href="#faq" className="hover:text-[#BCFF40]">FAQ</a>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#programs"
            className="bg-[#BCFF40] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#A3D93B] transition-colors"
          >
            Join Now
          </a>
        </div>
        
      </div>
    </nav>
  );
};
