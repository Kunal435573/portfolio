import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-between px-6 md:px-16 py-8 max-w-7xl mx-auto">
      {/* Main Hero Content - Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c26d47]"></span>
            <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase">
              Creative Developer
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-black leading-none mb-6 tracking-tight">
            I DESIGN.<br />
            I CODE.<br />
            <span className="text-blue-600">I EDIT.</span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md leading-relaxed">
            I craft modern digital experiences that are intuitive, functional, and visually striking. From idea to impact—I bring it all to life.
          </p>

          <div className="flex items-center gap-6 mb-12">
            <button className="bg-[#c26d47] text-white px-7 py-3.5 rounded-full text-xs font-semibold hover:bg-[#a85b39] transition-colors flex items-center gap-2 shadow-sm">
              Let's Work Together ↗
            </button>

            <button className="flex items-center gap-3 text-xs font-semibold text-gray-800 hover:opacity-80 transition-opacity">
              <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
                <Play size={14} className="fill-black text-black ml-0.5" />
              </span>
              Watch Showreel
            </button>
          </div>
        </div>

        {/* Right Column: Profile Picture with Circles */}
        <div className="relative flex justify-center items-center">
          {/* Main Terracotta Circle Background */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#c26d47] absolute -z-10 translate-x-4 -translate-y-4"></div>
          
          {/* Outer Gray Ring */}
          <div className="w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-full border-[20px] border-gray-100 absolute -z-20"></div>

          {/* Actual Profile Picture Container */}
          <div className="w-72 h-[400px] md:w-80 md:h-[460px] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="flex items-center gap-12 pt-12 border-t border-gray-200 mt-12">
        <div>
          <h4 className="text-3xl font-extrabold text-black">120+</h4>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Projects Completed</p>
        </div>
        <div className="h-8 w-[1px] bg-gray-300"></div>
        <div>
          <h4 className="text-3xl font-extrabold text-black">10yr</h4>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Experience</p>
        </div>
        <div className="h-8 w-[1px] bg-gray-300"></div>
        <div>
          <h4 className="text-3xl font-extrabold text-black">98%</h4>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
