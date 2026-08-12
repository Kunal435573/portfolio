export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kunal</h1>
          <ul className="flex gap-8 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center pt-20">
        <div className="text-center max-w-2xl px-6">
          <h1 className="text-6xl font-bold mb-4">Hey, I'm Kunal 🚀</h1>
          <p className="text-xl text-gray-400 mb-8">Full-Stack Developer | AI Enthusiast | Creative Designer</p>
          <p className="text-gray-500 mb-8">Building AI-powered tools, beautiful UIs, and digital experiences</p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">View My Work</a>
            <a href="#contact" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6">I'm Kunal, a full-stack developer and AI enthusiast passionate about building innovative solutions.</p>
              <p className="text-gray-300 mb-6">I specialize in React, Node.js, Python, and AI/LLM integration. When I'm not coding, you'll find me creating designs or editing videos.</p>
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Next.js", "Python", "FastAPI", "Node.js", "AI/LLM", "Figma", "Premiere Pro"].map(skill => (
                  <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-gray-300">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg h-96 flex items-center justify-center">
              <span className="text-white text-center">Your Photo Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* CodeMate */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-gray-300">CodeMate AI</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">CodeMate - AI Code Review Bot</h3>
                <p className="text-gray-400 mb-4">Full-stack AI application that reviews code using Groq API</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["FastAPI", "React", "Groq AI", "Python"].map(tag => (
                    <span key={tag} className="bg-blue-600/30 text-blue-400 text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <a href="https://github.com/kunal435573/codemate-ai" className="text-blue-400 hover:text-blue-300 font-semibold">View Project →</a>
              </div>
            </div>

            {/* Video Editing */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-gray-300">Video Editing</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Video Editing Portfolio</h3>
                <p className="text-gray-400 mb-4">Creative video editing and motion graphics work</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Premiere Pro", "After Effects"].map(tag => (
                    <span key={tag} className="bg-blue-600/30 text-blue-400 text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">View Project →</a>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <span className="text-gray-300">Design Work</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Graphic Design Portfolio</h3>
                <p className="text-gray-400 mb-4">Branding and UI/UX design work</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Figma", "Adobe XD", "Canva"].map(tag => (
                    <span key={tag} className="bg-blue-600/30 text-blue-400 text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-12">Have an interesting project? Let's talk!</p>
          <div className="flex flex-col gap-4 mb-12">
            <a href="mailto:kp435573@gmail.com" className="text-blue-400 hover:text-blue-300 text-lg">📧 kp435573@gmail.com</a>
            <a href="https://linkedin.com/in/kunal-pandey" className="text-blue-400 hover:text-blue-300 text-lg">🔗 LinkedIn</a>
            <a href="https://github.com/kunal435573" className="text-blue-400 hover:text-blue-300 text-lg">🐙 GitHub</a>
          </div>
          <a href="mailto:kp435573@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block">Send Me an Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>© 2026 Kunal. Built with Next.js & Vercel.</p>
        </div>
      </footer>
    </div>
  );
}