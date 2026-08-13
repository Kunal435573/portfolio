'use client';
import { useState } from 'react';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "CodeMate - AI Code Review Bot",
      desc: "Full-stack AI application that reviews code using Groq API",
      tags: ["FastAPI", "React", "Groq AI", "Python"],
      link: "https://github.com/kunal435573/codemate-ai",
      gradient: "from-blue-600 to-cyan-600",
      icon: "💻"
    },
    {
      id: 2,
      title: "Video Editing Portfolio",
      desc: "Creative video editing and motion graphics work",
      tags: ["Premiere Pro", "After Effects"],
      link: "#",
      gradient: "from-purple-600 to-pink-600",
      icon: "🎬"
    },
    {
      id: 3,
      title: "Graphic Design Portfolio",
      desc: "Branding and UI/UX design work",
      tags: ["Figma", "Adobe XD", "Canva"],
      link: "#",
      gradient: "from-orange-600 to-red-600",
      icon: "🎨"
    }
  ];

  const skills = [
    "React", "Next.js", "Python", "FastAPI", 
    "Node.js", "AI/LLM", "Figma", "Premiere Pro"
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full bg-black/40 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Kunal</h1>
          <ul className="flex gap-8 text-gray-300">
            <li><a href="#home" className="hover:text-blue-400 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-400 text-sm font-semibold backdrop-blur">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            Hey, I'm Kunal 🚀
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-6">Full-Stack Developer | AI Enthusiast | Creative Designer</p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            I build intelligent solutions, stunning interfaces, and digital experiences that make a difference
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="group relative px-8 py-4 text-lg font-bold overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">View My Work</span>
            </a>
            <a href="#contact" className="px-8 py-4 text-lg font-bold rounded-xl border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 backdrop-blur transition-all duration-300 hover:border-blue-400">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm Kunal, a full-stack developer and AI enthusiast passionate about building innovative solutions that solve real problems.
              </p>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                I specialize in React, Node.js, Python, and AI/LLM integration. When I'm not coding, you'll find me creating designs or editing videos.
              </p>
              
              <h3 className="text-2xl font-bold mb-8">Skills & Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map(skill => (
                  <div key={skill} className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur cursor-default">
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors font-semibold">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center border border-white/20 backdrop-blur-xl">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">📸</span>
                  <span className="text-white/60">Your Photo Here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Featured Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Card content */}
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{project.desc}</p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 group-hover:border-blue-400/60 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <a href={project.link} className="mt-auto inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    View Project
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
            
            <div className="relative p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Let's Connect</h2>
              
              <p className="text-xl text-gray-400 mb-12">Have an interesting project? I'd love to hear from you!</p>
              
              <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
                <a href="mailto:kp435573@gmail.com" className="group flex items-center justify-center gap-3 text-lg text-blue-400 hover:text-blue-300 transition-colors">
                  <span className="text-2xl">📧</span>
                  <span className="group-hover:underline">kp435573@gmail.com</span>
                </a>
                <a href="https://linkedin.com" className="group flex items-center justify-center gap-3 text-lg text-blue-400 hover:text-blue-300 transition-colors">
                  <span className="text-2xl">🔗</span>
                  <span className="group-hover:underline">LinkedIn</span>
                </a>
                <a href="https://github.com/kunal435573" className="group flex items-center justify-center gap-3 text-lg text-blue-400 hover:text-blue-300 transition-colors">
                  <span className="text-2xl">🐙</span>
                  <span className="group-hover:underline">GitHub</span>
                </a>
              </div>
              
              <a href="mailto:kp435573@gmail.com" className="inline-block px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 transform hover:scale-105">
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2026 Kunal. Built with Next.js, Tailwind & ❤️ on Vercel.</p>
        </div>
      </footer>
    </div>
  );
}