'use client';

import React from 'react';
import { Code, Video, Palette, ArrowRight, Calendar } from 'lucide-react';

export default function Skills() {
  return (
  <section id="services" className="scroll-mt-20 ...">
    {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase">
            03 / MY SKILLS
          </p>
          <h2 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-black leading-none">
            What I<br />
            <span className="text-indigo-600">do best.</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-gray-600 text-sm max-w-sm font-normal leading-relaxed">
            A blend of technical expertise, creative vision and storytelling. I bring ideas to life through code, motion and design.
          </p>
        </div>
      </div>

      {/* Primary Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-white border border-purple-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-600 text-white rounded-xl">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600">DEVELOPMENT</h3>
              <p className="text-xs text-gray-500 mt-1">Building fast, scalable and modern web solutions.</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-gray-400" />
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-black text-white rounded-xl">
              <Video size={24} />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-black">VIDEO EDITING</h3>
              <p className="text-xs text-gray-500 mt-1">Crafting cinematic stories that connect and inspire.</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-gray-400" />
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-black text-white rounded-xl">
              <Palette size={24} />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-black">GRAPHIC DESIGN</h3>
              <p className="text-xs text-gray-500 mt-1">Designing brands and visuals that leave a lasting impact.</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-gray-400" />
        </div>
      </div>
     {/* Local Video Showreel Section */}
<div id="showreel" className="mb-12 bg-black text-white p-6 rounded-3xl">
  <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">
    VIDEO EDITING SHOWREEL
  </p>
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
    <video
      controls
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/showreel1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


      {/* Tools & Tech Grid */}
      <div className="bg-white/60 p-8 rounded-3xl border border-gray-100 mb-12">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">• TOOLS & TECHNOLOGIES</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">• DEVELOPMENT</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-gray-800">
              {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git & GitHub'].map((tool) => (
                <div key={tool} className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span> {tool}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">• VIDEO EDITING</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-gray-800">
              {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cavalry'].map((tool) => (
                <div key={tool} className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> {tool}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">• GRAPHIC DESIGN</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-gray-800">
              {['Photoshop', 'Illustrator', 'Figma', 'Framer', 'Adobe XD', 'InDesign'].map((tool) => (
                <div key={tool} className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span> {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Level Skill Bars */}

{/* Playable Showreel Video Card */}
{/* ✅ Is naye updated block se replace karein: */}
<video
  controls
  className="w-full h-[350px] object-cover rounded-2xl bg-black shadow-lg"
  playsInline
  preload="metadata"
  

>
  <source src="/showreel.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">• MY EXPERTISE LEVEL</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'DEVELOPMENT', items: [['Frontend Dev', '95%'], ['Backend Dev', '90%'], ['Database & APIs', '88%'], ['Optimization', '85%']] },
          { title: 'VIDEO EDITING', items: [['Video Editing', '95%'], ['Motion Graphics', '90%'], ['Visual Effects', '85%'], ['Color Grading', '90%']] },
          { title: 'GRAPHIC DESIGN', items: [['Brand Identity', '90%'], ['UI/UX Design', '85%'], ['Print & Digital', '90%'], ['Illustration', '80%']] }
        ].map((col, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{col.title}</h4>
            {col.items.map(([skill, level]) => (
              <div key={skill} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span>{skill}</span>
                  <span className="text-purple-600">{level}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-600" style={{ width: level }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
