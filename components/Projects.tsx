"use client";

import React, { useState } from "react";
import { Play, ExternalLink, X, Image as ImageIcon } from "lucide-react";

// Rest of your Projects code below...


// Flexible Centralized Projects Data Structure
const PROJECTS_DATA = [
  // --- VIDEO EDITING ---
  {
    id: "01",
    title: "Cinematic kanya west Edit",
    category: "VIDEO EDITING",
    description: "A cinematic travel edit with storytelling, color grading, and smooth transitions.",
    thumbnail: "images/Graphic7.jpeg",
    type: "video",
    mediaUrl: "/showreel1.mp4",
  },
  {
    id: "02",
    title: "Beyond Reality Teaser",
    category: "VIDEO EDITING",
    description: "A suspense thriller teaser edit with sound design and VFX compositing.",
    thumbnail: "images/Graphic9.jpeg",
    type: "video",
    mediaUrl: "/showreel.mp4",
  },

  // --- DEVELOPMENT ---
  {
    id: "03",
    title: "SaaS Analytics Dashboard",
    category: "DEVELOPMENT",
    description: "Built a responsive, high-performance web dashboard using Next.js & TailwindCSS.",
    thumbnail: "/projects/dev1.jpg",
    type: "link",
    mediaUrl: "https://github.com",
  },
  {
    id: "04",
    title: "E-Commerce Mobile Platform",
    category: "DEVELOPMENT",
    description: "Custom shop UI platform with smooth checkout flows and modern state management.",
    thumbnail: "/projects/dev2.jpg",
    type: "link",
    mediaUrl: "https://github.com",
  },

  // --- GRAPHIC DESIGN ---
  {
    id: "05",
    title: "Minimalist Brand Identity",
    category: "GRAPHIC DESIGN",
    description: "Complete visual identity design including typography, logo, and brand kit.",
    thumbnail: "/images/graphic.jpeg",
    type: "image",
    mediaUrl: "/images/graphic.jpeg",
  },
 
   {
    id: "06",
    title: "PRODUCT AD GRAPHIC",
    category: "GRAPHIC DESIGN",
    description: "Abstract 3D compositions and high-impact poster artwork designed for campaigns.",
    thumbnail: "/images/graphic2.jpeg",
    type: "image",
    mediaUrl: "/images/graphic2.jpeg",
  },
  
 {
    id: "07",
    title: "CASTLE GRAPHIC POSTER",
    category: "GRAPHIC DESIGN",
    description: "Abstract 3D compositions and high-impact poster artwork designed for campaigns.",
    thumbnail: "/images/graphic3.jpeg",
    type: "image",
    mediaUrl: "/images/graphic3.jpeg",
  },
   {
    id: "08",
    title: "3D Burger AD",
    category: "GRAPHIC DESIGN",
    description: "Abstract 3D compositions and high-impact poster artwork designed for campaigns.",
    thumbnail: "/images/graphic4.jpeg",
    type: "image",
    mediaUrl: "/images/graphic4.jpeg",
  },
 {
    id: "09",
    title: "DARK GRAPHIC OF VISUAL BOAT",
    category: "GRAPHIC DESIGN",
    description: "Abstract 3D compositions and high-impact poster artwork designed for campaigns.",
    thumbnail: "/images/graphic5.jpeg",
    type: "image",
    mediaUrl: "/images/graphic5.jpeg",
  },
   {
    id: "10",
    title: "3D Visual OF SHUSHI MENU",
    category: "GRAPHIC DESIGN",
    description: "Abstract 3D compositions and high-impact poster artwork designed for campaigns.",
    thumbnail: "/images/graphic6.jpeg",
    type: "image",
    mediaUrl: "/images/graphic6.jpeg",
  },
];

const CATEGORIES = ["ALL", "DEVELOPMENT", "VIDEO EDITING", "GRAPHIC DESIGN"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("VIDEO EDITING");
  const [activeMedia, setActiveMedia] = useState<{ type: string; url: string } | null>(null);

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="scroll-mt-20 ...">
      {/* Title & Category Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <h2 className="text-4xl font-black text-black tracking-tight">
          Work<span className="text-blue-600">.</span>
        </h2>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-2xl w-fit">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-black text-white shadow-md"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              if (project.type === "link") {
                window.open(project.mediaUrl, "_blank");
              } else {
                setActiveMedia({ type: project.type, url: project.mediaUrl });
              }
            }}
            className="group cursor-pointer bg-gray-50 border border-gray-100 rounded-3xl p-5 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all duration-300"
          >
            {/* Thumbnail Box */}
            <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white text-black flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all">
                  {project.type === "video" && <Play size={18} className="fill-black ml-1" />}
                  {project.type === "image" && <ImageIcon size={18} />}
                  {project.type === "link" && <ExternalLink size={18} />}
                </div>
              </div>
            </div>

            {/* Details Box */}
            <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">
                  {project.id} • {project.category}
                </span>
                <h3 className="text-lg font-bold text-black mt-1 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-black mt-4 group-hover:translate-x-1 transition-transform">
                {project.type === "video" && "WATCH PROJECT ↗"}
                {project.type === "image" && "VIEW ARTWORK ↗"}
                {project.type === "link" && "VISIT SITE ↗"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Universal Lightbox Modal (Videos & High-Res Images) */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800 flex items-center justify-center">
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            {activeMedia.type === "video" && (
              <video src={activeMedia.url} controls autoPlay className="w-full h-full object-contain" />
            )}

            {activeMedia.type === "image" && (
              <img src={activeMedia.url} alt="Project Preview" className="w-full h-full object-contain" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
