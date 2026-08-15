'use client';
import { useState } from 'react';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  const projects = [
    {
      id: 1,
      title: "CodeMate - AI Code Review Bot",
      category: "DEVELOPMENT",
      description: "Full-stack AI with FastAPI & React",
      image: "💻",
      link: "https://github.com/kunal435573/codemate-ai"
    },
    {
      id: 2,
      title: "Your Graphic Design Project",
      category: "GRAPHIC DESIGN",
      description: "Your design description here",
      image: "🎨",
      link: "#"
    },
    {
      id: 3,
      title: "E-Commerce Website",
      category: "DEVELOPMENT",
      description: "Full-stack with payment integration",
      image: "🛒",
      link: "#"
    },
    {
      id: 4,
      title: "Your Video Project",
      category: "GRAPHIC DESIGN",
      description: "Your video description here",
      image: "🎬",
      link: "#"
    },
    {
      id: 5,
      title: "UI/UX Design System",
      category: "GRAPHIC DESIGN",
      description: "Complete design system",
      image: "✨",
      link: "#"
    },
    {
      id: 6,
      title: "Your Development Project",
      category: "DEVELOPMENT",
      description: "Project description here",
      image: "📊",
      link: "#"
    }
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "Python & FastAPI", level: 90 },
    { name: "UI/UX Design", level: 88 },
    { name: "Video Editing", level: 85 },
    { name: "Node.js", level: 92 },
    { name: "AI/LLM Integration", level: 87 }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, TechStartup",
      text: "Kunal delivered our website on time with exceptional quality!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Product Manager",
      text: "The design system saved us months of development time.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "CEO, Creative Studio",
      text: "Exceptional work on our video editing project.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Small projects: 1-2 weeks. Medium: 2-4 weeks. Large: 4-8 weeks."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! 2 rounds of revisions included. Additional revisions at hourly rate."
    },
    {
      question: "Can you work on existing projects?",
      answer: "Absolutely! I specialize in optimizing and adding features to existing apps."
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
            <li><a href="#home" className="hover:text-blue-600 transition">HOME</a></li>
            <li><a href="#work" className="hover:text-blue-600 transition">WORK</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition">SKILLS</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600 transition">REVIEWS</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">CONTACT</a></li>
          </ul>
          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition">
            HIRE ME →
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6">
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
              <button className="border-2 border-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition">
                ▶ PLAY SHOWREEL
              </button>
            </div>
          </div>
          
         <div className="relative h-96 rounded-3xl overflow-hidden">
  <img 
    src="/profile.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
        </div>

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
            <h3 className="text-5xl font-black mb-2">50+</h3>
            <p className="text-gray-600 font-semibold">HAPPY CLIENTS</p>
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
            <div className="group cursor-pointer">
              <div className="text-5xl mb-6">💻</div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition">DEVELOPMENT</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Web Applications</li>
                <li>• Full-Stack Solutions</li>
                <li>• API Integration</li>
                <li>• AI & LLM Integration</li>
              </ul>
            </div>

            <div className="group cursor-pointer">
              <div className="text-5xl mb-6">🎬</div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition">VIDEO EDITING</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Video Editing</li>
                <li>• Motion Graphics</li>
                <li>• Visual Effects</li>
                <li>• Color Grading</li>
              </ul>
            </div>

            <div className="group cursor-pointer">
              <div className="text-5xl mb-6">🎨</div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition">GRAPHIC DESIGN</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Brand Identity</li>
                <li>• UI/UX Design</li>
                <li>• Social Media Design</li>
                <li>• Illustrations</li>
              </ul>
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

          <div className="flex gap-4 mb-20 flex-wrap">
            {['ALL', 'DEVELOPMENT', 'GRAPHIC DESIGN'].map(filter => (
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

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 h-80 mb-6 flex items-center justify-center text-8xl group-hover:scale-105 transition duration-500">
                  {project.image}
                </div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">{project.category}</h4>
                <h3 className="text-3xl font-black mb-4 group-hover:text-blue-600 transition">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black font-bold hover:text-blue-600 transition">
                  VIEW PROJECT →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4">MY EXPERTISE ✦</h2>
          <h3 className="text-6xl font-black mb-20">TECHNICAL <span className="text-blue-600">SKILLS</span></h3>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between mb-3">
                  <span className="font-bold text-lg">{skill.name}</span>
                  <span className="text-blue-600 font-black">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-black h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4">TESTIMONIALS ✦</h2>
          <h3 className="text-6xl font-black mb-20">WHAT CLIENTS <span className="text-blue-600">SAY</span></h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-600 transition">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4 text-center">FAQ ✦</h2>
          <h3 className="text-6xl font-black mb-20 text-center">FREQUENTLY <span className="text-blue-600">ASKED</span></h3>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold flex justify-between items-center hover:bg-gray-100 transition"
                >
                  {faq.question}
                  <span className={`text-2xl transition ${expandedFaq === idx ? 'rotate-180' : ''}`}>↓</span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4 text-center">CONTACT ✦</h2>
          <h3 className="text-6xl font-black mb-12 text-center">LET'S WORK <span className="text-blue-600">TOGETHER</span></h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-bold mb-2">Email</h4>
              <a href="mailto:kp435573@gmail.com" className="text-blue-600 hover:underline font-semibold">kp435573@gmail.com</a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h4 className="font-bold mb-2">LinkedIn</h4>
              <a href="https://linkedin.com/in/kunal-pandey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Connect with me</a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🐙</div>
              <h4 className="font-bold mb-2">GitHub</h4>
              <a href="https://github.com/kunal435573" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">View projects</a>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <form className="space-y-6">
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
              <input type="email" placeholder="Your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
              <textarea placeholder="Your message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
              <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}