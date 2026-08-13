'use client';
import { useState } from 'react';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: "CodeMate - AI Code Review Bot",
      category: "DEVELOPMENT",
      description: "Full-stack AI application with FastAPI backend and React frontend",
      image: "💻",
      link: "https://github.com/kunal435573/codemate-ai"
    },
    {
      id: 2,
      title: "Video Editing Showreel",
      category: "VIDEO EDITING",
      description: "Cinematic video editing with motion graphics and color grading",
      image: "🎬",
      link: "#"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "GRAPHIC DESIGN",
      description: "Complete brand identity including logo, guidelines and materials",
      image: "🎨",
      link: "#"
    },
    {
      id: 4,
      title: "E-commerce Website",
      category: "DEVELOPMENT",
      description: "Full-stack e-commerce with product filters and secure checkout",
      image: "🛒",
      link: "#"
    },
    {
      id: 5,
      title: "Motion Graphics Teaser",
      category: "VIDEO EDITING",
      description: "Suspense thriller teaser with sound design and VFX",
      image: "🎥",
      link: "#"
    },
    {
      id: 6,
      title: "UI/UX Design System",
      category: "GRAPHIC DESIGN",
      description: "Complete design system for tech startup with components",
      image: "✨",
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-black">KUNAL<br/>PANDEY</div>
          <ul className="hidden md:flex gap-8 text-sm font-semibold">
            <li><a href="#" className="hover:text-blue-600 transition">HOME</a></li>
            <li><a href="#work" className="hover:text-blue-600 transition">WORK</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">SKILLS</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">ABOUT</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">CONTACT</a></li>
          </ul>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition">
            LET'S WORK TOGETHER →
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-bold text-gray-600 mb-6">CREATIVE DEVELOPER ✦</p>
            <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
              I DESIGN.<br/>
              <span className="text-blue-600">I CODE.</span><br/>
              I EDIT.
            </h1>
            <p className="text-lg text-gray-600 mb-12 max-w-md">
              I build digital experiences with code, creativity and pixels. From idea to impact— I bring it all to life.
            </p>
            <div className="flex gap-6">
              <a href="#work" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition">
                VIEW MY WORK →
              </a>
              <button className="border-2 border-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition flex items-center gap-2">
                ▶ PLAY SHOWREEL
              </button>
            </div>
          </div>
          
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center text-8xl">
              🔮
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mt-32 pt-20 border-t border-gray-200">
          <div>
            <h3 className="text-5xl font-black mb-2">20+</h3>
            <p className="text-gray-600 font-semibold">PROJECTS COMPLETED</p>
          </div>
          <div>
            <h3 className="text-5xl font-black mb-2">3+</h3>
            <p className="text-gray-600 font-semibold">YEARS OF EXPERIENCE</p>
          </div>
          <div>
            <h3 className="text-5xl font-black mb-2">ALL-IN-ONE</h3>
            <p className="text-gray-600 font-semibold">DEVELOPMENT • DESIGN</p>
          </div>
          <div>
            <h3 className="text-5xl font-black mb-2">100%</h3>
            <p className="text-gray-600 font-semibold">CLIENT SATISFACTION</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4">WHAT I DO ✦</h2>
          <h3 className="text-6xl md:text-7xl font-black mb-20">
            SOLUTIONS THAT <span className="text-blue-600">CONNECT</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Development */}
            <div className="group cursor-pointer">
              <div className="text-5xl mb-6">💻</div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition">DEVELOPMENT</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Web Applications</li>
                <li>• Full-Stack Solutions</li>
                <li>• API Integration</li>
                <li>• AI & LLM Integration</li>
              </ul>
              <a href="#" className="text-blue-600 font-bold hover:underline">→</a>
            </div>

            {/* Video Editing */}
            <div className="group cursor-pointer">
              <div className="text-5xl mb-6">🎬</div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition">VIDEO EDITING</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Video Editing</li>
                <li>• Motion Graphics</li>
                <li>• Visual Effects</li>
                <li>• Color Grading</li>
              </ul>
              <a href="#" className="text-blue-600 font-bold hover:underline">→</a>
            </div>

            {/* Design */}
            <div className="group cursor-pointer">
              <div className="text-5xl mb-6">🎨</div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition">GRAPHIC DESIGN</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Brand Identity</li>
                <li>• UI/UX Design</li>
                <li>• Social Media Design</li>
                <li>• Illustrations</li>
              </ul>
              <a href="#" className="text-blue-600 font-bold hover:underline">→</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4">FEATURED WORK ✦</h2>
          <h3 className="text-6xl md:text-7xl font-black mb-8">
            SOME THINGS I'VE <span className="text-blue-600">BUILT</span>
          </h3>

          {/* Filters */}
          <div className="flex gap-4 mb-20 flex-wrap">
            {['ALL', 'DEVELOPMENT', 'VIDEO EDITING', 'GRAPHIC DESIGN'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'border-2 border-black hover:bg-black hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-80 mb-6 flex items-center justify-center text-8xl group-hover:scale-105 transition duration-500">
                  {project.image}
                </div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">{project.category}</h4>
                <h3 className="text-3xl font-black mb-4 group-hover:text-blue-600 transition">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a href={project.link} className="text-black font-bold hover:text-blue-600 transition">
                  VIEW PROJECT →
                </a>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-20 pt-20 border-t border-gray-200">
            <button className="w-10 h-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition">←</button>
            <button className="w-10 h-10 rounded-full bg-black text-white">1</button>
            <button className="w-10 h-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition">2</button>
            <button className="w-10 h-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition">3</button>
            <button className="w-10 h-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition">→</button>
          </div>
        </div>
      </section>

      {/* Stats Bottom */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-black mb-2">20+</p>
            <p className="text-gray-600 font-semibold">Projects Completed</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">10+</p>
            <p className="text-gray-600 font-semibold">Happy Clients</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">3+</p>
            <p className="text-gray-600 font-semibold">Years of Experience</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">100%</p>
            <p className="text-gray-600 font-semibold">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2026 Kunal Pandey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}