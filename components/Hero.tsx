import React from "react";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#FF6B35] overflow-hidden flex flex-col">

      {/* Giant Background Name - CENTERED */}
      <div className="absolute top-0 left-0 w-full flex justify-center pt-8 pointer-events-none select-none z-0">
        <span className="text-white font-black leading-none text-[12rem] md:text-[24rem] tracking-tight">
          KUNAL
        </span>
      </div>

      {/* Image - PERFECTLY CENTERED */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <img
            src="/profile.png"
            alt="Kunal Pandey"
            className="h-[420px] md:h-[600px] object-contain object-bottom"
          />
          {/* Bottom Fade */}
          <div
            className="absolute bottom-0 left-0 w-full h-40 md:h-56 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #FF6B35 0%, #FF6B35 25%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Floating Circle Button */}
      <button className="absolute right-6 md:right-16 top-[40%] z-30 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-black flex flex-col items-center justify-center text-sm md:text-base font-black hover:bg-gray-100 transition-all shadow-xl gap-1">
        <MoveUpRight size={33} />
        <span>LET'S</span>
        <span>WORK</span>
      </button>

      {/* Bottom Left Text */}
      <div className="absolute bottom-8 md:bottom-14 left-6 md:left-16 z-20 max-w-xs md:max-w-sm">
        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-3">
          Turning Ideas Into Visual Stories.
        </h2>
        <p className="text-white text-xs md:text-sm font-medium opacity-90 leading-relaxed">
          I create bold digital experiences, illustrations, and designs that
          help brands stand out and connect with their audience.
        </p>
      </div>

      {/* Bottom Right Stats */}
      <div className="absolute bottom-8 md:bottom-14 right-6 md:right-16 z-20 flex gap-8 text-white text-right">
        <div>
          <h4 className="text-3xl md:text-4xl font-black">50+</h4>
          <p className="text-[10px] font-bold opacity-75 uppercase tracking-widest">
            Projects Completed
          </p>
        </div>
        <div>
          <h4 className="text-3xl md:text-4xl font-black">2+</h4>
          <p className="text-[10px] font-bold opacity-75 uppercase tracking-widest">
            Years of Experience
          </p>
        </div>
      </div>

    </section>
  );
}