'use client';
import { useState } from 'react';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [email, setEmail] = useState('');

  const projects = [
    {
      id: 1,
      title: "CodeMate - AI Code Review Bot",
      category: "DEVELOPMENT",
      description: "Full-stack AI with FastAPI & React",
      image: "💻",
      details: "Built an intelligent code review system using Groq API, achieving 95% accuracy in code analysis."
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "GRAPHIC DESIGN",
      description: "Complete branding package for tech startup",
      image: "🎨",
      details: "Created comprehensive brand guidelines including logo, color palette, typography, and marketing materials."
    },
    {
      id: 3,
      title: "E-Commerce Website",
      category: "DEVELOPMENT",
      description: "Full-stack with payment integration",
      image: "🛒",
      details: "Developed responsive e-commerce platform with Stripe integration, product filtering, and secure checkout."
    },
    {
      id: 4,
      title: "Motion Graphics Teaser",
      category: "GRAPHIC DESIGN",
      description: "Cinematic video with VFX and color grading",
      image: "🎬",
      details: "Created suspense thriller teaser with professional sound design and motion graphics."
    },
    {
      id: 5,
      title: "UI/UX Design System",
      category: "GRAPHIC DESIGN",
      description: "Complete design system with components",
      image: "✨",
      details: "Built scalable design system with 100+ components for enterprise application."
    },
    {
      id: 6,
      title: "Web Application Dashboard",
      category: "DEVELOPMENT",
      description: "Real-time analytics dashboard",
      image: "📊",
      details: "Created real-time dashboard with live data visualization and WebSocket integration."
    }
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "Python & FastAPI", level: 90 },
    { name: "UI/UX Design", level: 88 },
    { name: "Video Editing", level: 85 },
    { name: "Node.js", level: 92 },
    { name: "AI/LLM Integration", level: 87 },
    { name: "Figma & Design Tools", level: 89 },
    { name: "Database Design", level: 86 }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, TechStartup",
      text: "Kunal delivered our website on time with exceptional quality. His attention to detail and problem-solving skills are outstanding!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Product Manager, Digital Agency",
      text: "The design system Kunal created saved us months of development time. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "CEO, Creative Studio",
      text: "Exceptional video editing work. The motion graphics really elevated our brand presence.",
      rating: 5
    }
  ];

  const achievements = [
    { icon: "🏆", title: "Best Developer Award", year: "2024" },
    { icon: "🎓", title: "Google Cloud Certification", year: "2023" },
    { icon: "⭐", title: "Top Freelancer on Fiverr", year: "2023-2024" },
    { icon: "🚀", title: "AI Agents Certification", year: "2024" }
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Depends on complexity. Small projects: 1-2 weeks. Medium: 2-4 weeks. Large: 4-8 weeks. We discuss timeline during consultation."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! I include 2 rounds of revisions in all packages. Additional revisions available at hourly rate."
    },
    {
      question: "What's your communication style?",
      answer: "I provide daily updates via email/Slack. Weekly check-in calls to discuss progress and gather feedback."
    },
    {
      question: "Can you work on existing projects?",
      answer: "Absolutely! I specialize in optimizing, redesigning, and adding features to existing applications."
    },
    {
      question: "What about post-project support?",
      answer: "30 days free support after launch. Extended support packages available at discounted rates."
    }
  ];

  const caseStudies = [
    {
      number: "01",
      title: "SaaS Dashboard Redesign",
      description: "Increased user engagement by 45% through modern UI/UX overhaul",
      results: ["45% engagement increase", "92% task completion rate", "4.8/5 user rating"]
    },
    {
      number: "02",
      title: "E-Commerce Performance",
      description: "Optimized website for 3x faster load times and better conversion",
      results: ["3x faster load", "156% conversion increase", "$2M additional revenue"]
    },
    {
      number: "03",
      title: "AI Integration Project",
      description: "Built intelligent automation system saving 40 hours/week",
      results: ["40 hrs/week saved", "94% accuracy rate", "30% cost reduction"]
    }
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    alert(`Thanks for signing up! Check ${email} for updates.`);
    setEmail('');
  };

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
                <a href="#" className="text-black font-bold hover:text-blue-600 transition">
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
                <div className="w-full bg-gray-300 rounded-full h-3">
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

      {/* Case Studies */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4">CASE STUDIES ✦</h2>
          <h3 className="text-6xl font-black mb-20">PROJECTS THAT <span className="text-blue-600">DELIVERED</span></h3>

          <div className="space-y-12">
            {caseStudies.map(study => (
              <div key={study.number} className="border-t border-gray-200 pt-12 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-7xl font-black text-gray-100 mb-4">{study.number}</p>
                  <h4 className="text-4xl font-black mb-4">{study.title}</h4>
                  <p className="text-lg text-gray-600 mb-8">{study.description}</p>
                  <div className="space-y-3">
                    {study.results.map(result => (
                      <div key={result} className="flex items-center gap-3">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span className="font-semibold">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-gray-50">
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

      {/* Achievements */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4">ACHIEVEMENTS ✦</h2>
          <h3 className="text-6xl font-black mb-20">CERTIFICATIONS &amp; <span className="text-blue-600">AWARDS</span></h3>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition">
                <div className="text-6xl mb-4">{achievement.icon}</div>
                <h4 className="font-black mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.year}</p>
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

      {/* Newsletter CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-5xl font-black mb-6">STAY UPDATED</h2>
            <p className="text-xl mb-8 opacity-90">Get exclusive design tips, development insights, and project updates</p>
            
            <form onSubmit={handleNewsletterSignup} className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full text-black font-semibold focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-gray-600 mb-4 text-center">CONTACT ✦</h2>
          <h3 className="text-6xl font-black mb-12 text-center">LET'S WORK <span className="text-blue-600">TOGETHER</span></h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-bold mb-2">Email</h4>
              <a href="mailto:kp435573@gmail.com" className="text-blue-600 hover:underline">kp435573@gmail.com</a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h4 className="font-bold mb-2">LinkedIn</h4>
              <a href="https://linkedin.com" target="_blank" className="text-blue-600 hover:underline">Connect with me</a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🐙</div>
              <h4 className="font-bold mb-2">GitHub</h4>
              <a href="https://github.com/kunal435573" target="_blank" className="text-blue-600 hover:underline">View projects</a>
            </div>
          </div>

          <form className="bg-white p-8 rounded-2xl border border-gray-200 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-600" />
              <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-600" />
            </div>
            <input type="text" placeholder="Project Title" className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-600" />
            <textarea placeholder="Tell me about your project..." rows="6" className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-600"></textarea>
            <button type="submit" className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2026 Kunal Pandey. Built with Next.js & Vercel.</p>
        </div>
      </footer>
    </div>
  );
}