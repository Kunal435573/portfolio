'use client';

import React from 'react';
import { Download, Sparkles, Code, Video, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase">04 / ABOUT ME</p>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-black leading-tight">
            I'm Kunal, a digital creator who loves turning <span className="text-indigo-600">ideas into reality.</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-md leading-relaxed">
            I blend code, creativity and storytelling to build digital experiences that connect, inspire and leave a lasting impact.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 hover:bg-gray-800">
              DOWNLOAD RESUME <Download size={14} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-80 h-96 bg-gradient-to-br from-purple-200 to-indigo-100 rounded-3xl overflow-hidden relative shadow-lg">
            <img 
              src="/profile.jpg" 
              alt="Kunal" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white/40 text-xs">
              <p className="font-bold text-black">📍 Based in India</p>
              <p className="text-purple-600 font-semibold">• Open for opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story & Drivers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">• MY STORY</p>
          <h3 className="text-3xl font-extrabold text-black">From curiosity to creating <span className="text-indigo-600">impact.</span></h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            My journey started with curiosity about how things work on the web and how stories can move people. Today, I help brands, businesses and creators bring their ideas to life.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">• WHAT DRIVES ME</p>
          <div className="space-y-4">
            {[
              { icon: Sparkles, title: 'Pixel Perfect Design', desc: 'I care about every tiny detail.' },
              { icon: Code, title: 'Clean & Scalable Code', desc: 'Performance and scalability first.' },
              { icon: Video, title: 'Creative Storytelling', desc: 'Every project tells a unique story.' },
              { icon: Award, title: 'Client Success', desc: 'Your success is my top priority.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <item.icon size={18} className="text-purple-600 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-black">{item.title}</h4>
                  <p className="text-[11px] text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
