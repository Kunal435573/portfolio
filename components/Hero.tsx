import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-between px-6 md:px-16 py-8 max-w-7xl mx-auto">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Typography */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c26d47]"></span>
            <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">
              Creative Developer
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.95] mb-6 tracking-tight">
            I DESIGN.<br />
            I CODE.<br />
            <span className="text-[#c26d47]">I EDIT.</span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md leading-relaxed font-medium">
            I craft modern digital experiences that are intuitive, functional, and visually striking.
          </p>

          <div className="flex items-center gap-6 mb-12">
            <button className="bg-[#c26d47] text-white px-7 py-3.5 rounded-full text-xs font-bold hover:bg-[#a85b39] transition-all shadow-md">
              Let's Work Together ↗
            </button>

            <button className="flex items-center gap-3 text-xs font-bold text-gray-800 hover:opacity-80 transition-opacity">
              <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
                <Play size={14} className="fill-black text-black ml-0.5" />
              </span>
              Watch Showreel
            </button>
          </div>
        </div>

               {/* Right Column: 3D Pop-out Cutout over Terracotta Circle */}
        <div className="relative flex justify-center items-end h-[480px] md:h-[580px]">
          {/* Terracotta Circle Background */}
          <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-[#c26d47] absolute bottom-4 z-0"></div>

          {/* Scaled PNG Cutout - Head pops out */}
         <img
  src="/profile1.png"
  alt="Profile Cutout"
  className="relative z-10 h-[520px] md:h-[620px] object-contain scale-110 translate-y-3 drop-shadow-xl"
  style={{
    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
  }}
/>

        </div>

      </div>

      {/* Bottom Stats Bar */}
      <div className="flex items-center gap-12 pt-12 border-t border-gray-200 mt-12">
        <div>
          <h4 className="text-3xl font-black text-black">120+</h4>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Projects Completed</p>
        </div>
        <div className="h-8 w-[1px] bg-gray-300"></div>
        <div>
          <h4 className="text-3xl font-black text-black">10yr</h4>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Experience</p>
        </div>
        <div className="h-8 w-[1px] bg-gray-300"></div>
        <div>
          <h4 className="text-3xl font-black text-black">98%</h4>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
