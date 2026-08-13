'use client';

import React, { useState } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Box, Smile, Calendar, Star } from 'lucide-react';

const projectsData = [
  {
    id: '01',
    title: 'Finova – SaaS Dashboard',
    category: 'DEVELOPMENT',
    type: 'dev',
    desc: 'A responsive SaaS dashboard built with Next.js, Tailwind CSS and Recharts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    linkText: 'VIEW CASE STUDY',
    isVideo: false,
  },
  {
    id: '02',
    title: 'Cinematic Travel Edit',
    category: 'VIDEO EDITING',
    type: 'video',
    desc: 'A cinematic travel edit with storytelling, color grading and smooth transitions.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    linkText: 'WATCH PROJECT',
    isVideo: true,
  },
  {
    id: '03',
    title: 'Productivity Landing Page',
    category: 'DEVELOPMENT',
    type: 'dev',
    desc: 'Clean and conversion-focused landing page for a productivity SaaS product.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    linkText: 'VIEW CASE STUDY',
    isVideo: false,
  },
  {
    id: '04',
    title: 'Nexora – Brand Identity',
    category: 'GRAPHIC DESIGN',
    type: 'design',
    desc: 'Complete brand identity for a tech startup including logo, stationery and guidelines.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
    linkText: 'VIEW PROJECT',
    isVideo: false,
  },
  {
    id: '05',
    title: 'Stride – E-commerce Website',
    category: 'DEVELOPMENT',
    type: 'dev',
    desc: 'Full stack e-commerce website with product filters, cart and secure checkout.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    linkText: 'VIEW CASE STUDY',
    isVideo: false,
  },
  {
    id: '06',
    title: 'Beyond Reality Teaser',
    category: 'VIDEO EDITING',
    type: 'video',
    desc: 'A suspense thriller teaser edit with sound design and VFX compositing.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80',
    linkText: 'WATCH PROJECT',
    isVideo: true,
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredProjects = activeTab === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section className="relative min-h-screen py-16 px-6 max-w-7xl mx-auto">
      {/* Top Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase">
            02 / MY WORK
          </p>
          <h2 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-black leading-none">
            Selected<br />
            <span className="text-indigo-600">work.</span>
          </h2>
        </div>

        <div className="lg:col-span-5 relative flex flex-col justify-center">
          <p className="text-gray-600 text-sm max-w-sm font-normal leading-relaxed mb-6">
            A collection of projects across development, design and video editing. Each one crafted with purpose and precision.
          </p>
          {/* Subtle 3D Glass graphic background effect */}
          <div className="absolute right-0 top-0 -z-10 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>

      {/* Filter Tabs & Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-100">
        <div className="flex flex-wrap gap-2">
          {['ALL', 'DEVELOPMENT', 'VIDEO EDITING', 'GRAPHIC DESIGN'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider transition-all uppercase ${
                activeTab === tab
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-xs text-gray-500 font-medium flex items-center gap-1">
          SORT BY: <span className="font-bold text-black cursor-pointer">LATEST ▼</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-center"
          >
            {/* Project Image Box */}
            <div className="relative w-full sm:w-1/2 h-56 rounded-xl overflow-hidden group flex-shrink-0 bg-gray-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              {project.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 text-white hover:scale-110 transition-transform">
                    <Play size={20} className="fill-white ml-0.5" />
                  </span>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="w-full sm:w-1/2 flex flex-col justify-between h-full py-2 space-y-3">
              <div>
                <span className="text-xs font-bold text-purple-600 tracking-wider">
                  {project.id}
                </span>
                <h3 className="text-lg font-bold text-black mt-1 leading-snug">
                  {project.title}
                </h3>
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">
                  • {project.category}
                </p>
                <p className="text-gray-500 text-xs mt-3 line-clamp-3 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-purple-600 transition-colors pt-2"
              >
                {project.linkText} 
                <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-black">
                  <ArrowRight size={12} />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mb-16">
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-colors">
          <ChevronLeft size={16} />
        </button>
        <button className="w-8 h-8 rounded-full bg-black text-white text-xs font-bold">1</button>
        <button className="w-8 h-8 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-100">2</button>
        <button className="w-8 h-8 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-100">3</button>
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Bottom Stats Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
            <Box size={24} />
          </div>
          <div>
            <h4 className="text-2xl font-extrabold text-black">20+</h4>
            <p className="text-xs font-bold text-gray-800 mt-1">Projects Completed</p>
            <p className="text-[11px] text-gray-400">Across the globe</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
            <Smile size={24} />
          </div>
          <div>
            <h4 className="text-2xl font-extrabold text-black">10+</h4>
            <p className="text-xs font-bold text-gray-800 mt-1">Happy Clients</p>
            <p className="text-[11px] text-gray-400">Long term relationships</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
            <Calendar size={24} />
          </div>
          <div>
            <h4 className="text-2xl font-extrabold text-black">3+</h4>
            <p className="text-xs font-bold text-gray-800 mt-1">Years of Experience</p>
            <p className="text-[11px] text-gray-400">Delivering quality work</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
            <Star size={24} />
          </div>
          <div>
            <h4 className="text-2xl font-extrabold text-black">100%</h4>
            <p className="text-xs font-bold text-gray-800 mt-1">Client Satisfaction</p>
            <p className="text-[11px] text-gray-400">Quality is my priority</p>
          </div>
        </div>
      </div>
    </section>
  );
}
