'use client';
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
        <p className="text-gray-400 mb-12">Coding • Video Editing • Graphic Design</p>

        <div className="flex gap-4 mb-12">
          {["all", "coding", "video", "design"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}