import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-16 py-6 max-w-7xl mx-auto">
      {/* Black Text-based Logo/Domain name */}
      <div className="bg-black text-white font-bold text-sm px-5 py-2 rounded-xl">
        impeccify.com
      </div>

      {/* Center Navigation Links (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-700">
        <a href="#" className="hover:text-black transition-colors">Home</a>
        <a href="#about" className="hover:text-black transition-colors">About</a>
        <a href="#services" className="hover:text-black transition-colors">Services</a>
        <a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a>
        <a href="#reviews" className="hover:text-black transition-colors">Reviews</a>
        <a href="#journal" className="hover:text-black transition-colors">Blog</a>
      </div>

      {/* Top Right Header Button */}
      <button className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors">
        Hire Me
      </button>
    </nav>
  );
}
