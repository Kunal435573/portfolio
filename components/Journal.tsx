'use client';

import React from 'react';
import { ArrowUpRight, Search, Mail } from 'lucide-react';

const articles = [
  { title: 'Building a Scalable SaaS Dashboard with Next.js & Tailwind', tag: 'DEVELOPMENT', date: 'May 12, 2024', read: '6 min read' },
  { title: 'Cinematic Color Grading in DaVinci Resolve', tag: 'VIDEO EDITING', date: 'Apr 28, 2024', read: '5 min read' },
  { title: 'Designing a Brand Identity That Tells a Story', tag: 'GRAPHIC DESIGN', date: 'Apr 15, 2024', read: '4 min read' },
  { title: 'Glassmorphism in 2024: Still Relevant?', tag: 'EXPERIMENTS', date: 'Apr 05, 2024', read: '3 min read' },
  { title: 'Optimizing Core Web Vitals for Perfect Performance', tag: 'DEVELOPMENT', date: 'Mar 22, 2024', read: '7 min read' },
  { title: 'How I Edit Travel Videos for YouTube', tag: 'VIDEO EDITING', date: 'Mar 10, 2024', read: '5 min read' },
];

export default function Journal() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase">06 / JOURNAL / INSIGHTS</p>
        <h2 className="text-6xl font-extrabold text-black">
          Ideas, thoughts and experiments from my <span className="text-indigo-600">creative lab.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((item, idx) => (
          <div key={idx} className="bg-black text-white p-6 rounded-2xl flex flex-col justify-between h-64 border border-gray-800 hover:border-purple-500 transition-colors">
            <div>
              <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase">{item.tag}</span>
              <h3 className="text-lg font-extrabold mt-2 leading-snug">{item.title}</h3>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-800">
              <span>{item.date} • {item.read}</span>
              <span className="p-2 bg-gray-900 rounded-full text-white">
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Card */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-black">Stay inspired.</h4>
            <p className="text-xs text-gray-500">Get new insights, tutorials and behind-the-scenes straight to your inbox.</p>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <input type="email" placeholder="Enter your email address" className="bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-full text-xs outline-none w-full md:w-64" />
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider hover:bg-gray-800">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
