"use client";

import React from "react";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // URL bar se hashtag ko completely strip karne ke liye:
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-16 py-6 max-w-7xl mx-auto">
      {/* Black Text-based Logo */}
      <div className="bg-black text-white font-bold text-sm px-5 py-2 rounded-xl">
        kunal.dev
      </div>

      {/* Center Navigation Links (Clean URL Buttons) */}
      <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-700">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
          }}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => handleScroll("about")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("services")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Services
        </button>
        <button
          onClick={() => handleScroll("portfolio")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Portfolio
        </button>
        <button
          onClick={() => handleScroll("reviews")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Reviews
        </button>
        <button
          onClick={() => handleScroll("journal")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Blog
        </button>
      </div>

      {/* Top Right Header Button */}
      <button className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors">
        Hire Me
      </button>
    </nav>
  );
}
