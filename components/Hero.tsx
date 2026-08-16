import React from "react";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#FF6B35] overflow-hidden flex flex-col justify-between">

      {/* Giant Background Name - always centered, never clips */}
      <div className="absolute inset-0 flex items-start justify-center pt-4 pointer-events-none select-none z-0">
        <span
          className="text-white font-black leading-none tracking-tight whitespace-nowrap"
          style={{ fontSize: "clamp(3.5rem, 22vw, 22rem)" }}
        >
            KUNAL
        </span>
      </div>

      {/* LET'S WORK Button - top right */}
      <div className="relative z-30 flex justify-end px-4 md:px-14 pt-6">
        <button
          className="rounded-full bg-white text-black flex flex-col items-center justify-center font-black hover:bg-gray-100 transition-all shadow-xl gap-0.5"
          style={{
            width: "clamp(72px, 12vw, 150px)",
            height: "clamp(72px, 12vw, 150px)",
            fontSize: "clamp(8px, 1.3vw, 15px)",
          }}
        >
          <MoveUpRight size={14} />
          <span>LET'S</span>
          <span>WORK</span>
        </button>
      </div>

      {/* Center Image */}
      <div className="relative z-10 flex justify-center items-end flex-1">
        <div className="relative">
          <img
            src="/images/profile.png"
            alt="Kunal Pandey"
            style={{ height: "clamp(300px, 55vh, 720px)" }}
            className="object-contain object-bottom mx-auto"
          />
          {/* Bottom Fade */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{
              height: "40%",
              background:
                "linear-gradient(to top, #FF6B35 0%, #FF6B35 15%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Bottom Row - Text Left + Stats Right */}
      <div className="relative z-20 flex items-end justify-between px-4 md:px-14 pb-6 md:pb-12 gap-4">

        {/* Left: Tagline */}
        <div className="max-w-[55%] md:max-w-sm">
          <h2
            className="text-white font-black leading-tight mb-1 md:mb-2"
            style={{ fontSize: "clamp(1rem, 3.5vw, 3rem)" }}
          >
            Turning Ideas Into Visual Stories.
          </h2>
          <p
            className="text-white font-medium opacity-90 leading-relaxed hidden md:block"
            style={{ fontSize: "clamp(0.65rem, 1vw, 0.9rem)" }}
          >
            I create bold digital experiences, illustrations, and designs that
            help brands stand out and connect with their audience.
          </p>
        </div>

        {/* Right: Stats */}
        <div className="flex gap-4 md:gap-8 text-white text-right shrink-0">
          <div>
            <h4
              className="font-black"
              style={{ fontSize: "clamp(1.4rem, 4vw, 3rem)" }}
            >
              50+
            </h4>
            <p className="text-[8px] md:text-[10px] font-bold opacity-75 uppercase tracking-widest">
              Projects
            </p>
          </div>
          <div>
            <h4
              className="font-black"
              style={{ fontSize: "clamp(1.4rem, 4vw, 3rem)" }}
            >
              2+
            </h4>
            <p className="text-[8px] md:text-[10px] font-bold opacity-75 uppercase tracking-widest">
              Yrs Exp
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}