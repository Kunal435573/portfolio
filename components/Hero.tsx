import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-12 pb-20 px-8 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Left Vertical Floating Sidebar */}
      <div className="hidden lg:flex flex-col items-center gap-6 fixed left-6 top-1/3 z-50 text-xs tracking-widest text-gray-400">
        <span className="rotate-90 uppercase whitespace-nowrap mb-8 text-[10px] tracking-widest text-gray-500">
          • AVAILABLE FOR FREELANCE
        </span>
        <a href="#" className="hover:text-black transition-colors">GH</a>
        <a href="#" className="hover:text-black transition-colors">IN</a>
        <a href="#" className="hover:text-black transition-colors">IG</a>
        <a href="#" className="hover:text-black transition-colors">MAIL</a>
      </div>

      {/* Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase">
            CREATIVE DEVELOPER •
          </p>
          
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-black leading-none uppercase">
            I DESIGN.<br />
            I CODE.<br />
            <span className="text-indigo-600">I EDIT.</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            I build digital experiences with code, creativity, and pixels. From idea to impact—I bring it all to life.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gray-800 transition-all">
              VIEW MY WORK <ArrowUpRight size={16} />
            </button>
            <button className="flex items-center gap-2 text-xs font-semibold text-black px-4 py-3 hover:text-purple-600 transition-colors">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <Play size={12} className="fill-black" />
              </span>
              PLAY SHOWREEL
            </button>
          </div>
        </div>

        {/* Right Column: 3D Visual Concept */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-200 to-indigo-100 absolute -z-10 blur-xl opacity-70"></div>
          {/* Replace src with your 3D cube illustration asset */}
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" 
            alt="3D Glass Art" 
            className="w-full max-w-md object-contain drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>

      {/* Clients Logos */}
      <div className="mt-16 border-t border-gray-200 pt-8">
        <p className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase mb-4">
          TRUSTED BY CLIENTS WORLDWIDE
        </p>
        <div className="flex flex-wrap gap-8 items-center text-gray-400 font-bold text-sm">
          <span>startupindia</span>
          <span>Google</span>
          <span>Microsoft</span>
          <span>upwork</span>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="text-center md:border-r border-gray-200 pr-2">
          <h3 className="text-2xl font-extrabold text-black">20+</h3>
          <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-1">PROJECTS COMPLETED</p>
        </div>
        <div className="text-center md:border-r border-gray-200 pr-2">
          <h3 className="text-2xl font-extrabold text-black">3+</h3>
          <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-1">YEARS OF EXPERIENCE</p>
        </div>
        <div className="text-center md:border-r border-gray-200 pr-2">
          <h3 className="text-2xl font-extrabold text-black">ALL-IN-ONE</h3>
          <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-1">DEVELOPMENT • DESIGN • EDITING</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-black">100%</h3>
          <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-1">CLIENT SATISFACTION</p>
        </div>
      </div>
    </section>
  );
}
