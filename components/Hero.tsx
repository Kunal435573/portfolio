"use client";
import React, { useEffect, useState, useRef } from "react";
import { MoveUpRight } from "lucide-react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const LEFT_TARGET = "Pan";
const RIGHT_TARGET = "dey";
const FULL_TARGET = LEFT_TARGET + RIGHT_TARGET;

export default function Hero() {
  const [displayText, setDisplayText] = useState("######");
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // ✨ Scramble Effect
  useEffect(() => {
    let iteration = 0;
    const totalIterations = FULL_TARGET.length * 7;

    const interval = setInterval(() => {
      setDisplayText(
        FULL_TARGET.split("")
          .map((char, index) => {
            if (index < Math.floor(iteration / 7)) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (iteration >= totalIterations) clearInterval(interval);
      iteration++;
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // 🧲 Magnetic Button
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );
    if (distance < 160) {
      setBtnPos({
        x: (e.clientX - centerX) * 0.4,
        y: (e.clientY - centerY) * 0.4,
      });
    } else {
      setBtnPos({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => setBtnPos({ x: 0, y: 0 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#FF6B35] overflow-hidden flex flex-col justify-between"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🌾 Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-50 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* 🔤 Giant Scrambling Name */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-2 md:px-6 pt-3 pointer-events-none select-none z-0">
        <span
          className="text-white font-black leading-none tracking-tight"
          style={{
            fontSize: "clamp(4rem, 20vw, 20rem)",
            animation: "slideInLeft 0.9s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          {displayText.slice(0, 3)}
        </span>
        <span
          className="text-white font-black leading-none tracking-tight"
          style={{
            fontSize: "clamp(4rem, 20vw, 20rem)",
            animation: "slideInRight 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both",
          }}
        >
          {displayText.slice(3)}
        </span>
      </div>

      {/* 🧲 Magnetic LET'S WORK Button */}
      <div
        className="relative z-30 flex justify-end px-4 md:px-14 pt-5"
        style={{ animation: "fadeInUp 0.8s ease 0.8s both" }}
      >
        <button
          ref={btnRef}
          className="rounded-full bg-white text-black flex flex-col items-center justify-center font-black shadow-xl gap-0.5 relative"
          style={{
            width: "clamp(72px, 10vw, 140px)",
            height: "clamp(72px, 10vw, 140px)",
            fontSize: "clamp(8px, 1.1vw, 14px)",
            transform: `translate(${btnPos.x}px, ${btnPos.y}px)`,
            transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Spinning dashed ring */}
          <div
            className="absolute inset-[-6px] rounded-full border-2 border-white border-dashed opacity-50"
            style={{ animation: "spinSlow 8s linear infinite" }}
          />
          <MoveUpRight size={16} />
          <span>LET'S</span>
          <span>WORK</span>
        </button>
      </div>

      {/* 🧍 Character - touches bottom + floats */}
      <div
        className="absolute bottom-0 left-1/2 z-10"
        style={{
          animation:
            "slideUp 1s cubic-bezier(0.22,1,0.36,1) 0.3s both, float 4s ease-in-out 1.5s infinite",
        }}
      >
        <div className="relative">
          <img
            src="/images/profile.png"
            alt="Kunal Pandey"
            style={{ height: "clamp(340px, 65vh, 780px)" }}
            className="object-contain object-bottom"
          />
          {/* Bottom fade blend */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{
              height: "38%",
              background:
                "linear-gradient(to top, #FF6B35 0%, #FF6B35 18%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative z-20 flex items-end justify-between px-4 md:px-14 pb-6 md:pb-12 gap-4">

        {/* Left: Tagline */}
        <div
          className="max-w-[55%] md:max-w-sm"
          style={{ animation: "fadeInUp 0.8s ease 0.7s both" }}
        >
          <h2
            className="text-white font-black leading-tight mb-1 md:mb-2"
            style={{ fontSize: "clamp(1rem, 3.2vw, 2.8rem)" }}
          >
            Turning Ideas Into Visual Stories.
          </h2>
          <p
            className="text-white font-medium opacity-80 leading-relaxed hidden md:block"
            style={{ fontSize: "clamp(0.65rem, 1vw, 0.88rem)" }}
          >
            I create bold digital experiences, illustrations, and designs that
            help brands stand out and connect with their audience.
          </p>
        </div>

        {/* Right: Stats */}
        <div
          className="flex gap-4 md:gap-8 text-white text-right shrink-0"
          style={{ animation: "fadeInUp 0.8s ease 0.9s both" }}
        >
          <div>
            <h4 className="font-black" style={{ fontSize: "clamp(1.4rem, 3.5vw, 3rem)" }}>
              50+
            </h4>
            <p className="text-[8px] md:text-[10px] font-bold opacity-75 uppercase tracking-widest">
              Projects
            </p>
          </div>
          <div>
            <h4 className="font-black" style={{ fontSize: "clamp(1.4rem, 3.5vw, 3rem)" }}>
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