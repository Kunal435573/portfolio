export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              I'm Kunal, a full-stack developer and AI enthusiast passionate about building innovative solutions.
            </p>
            <p className="text-gray-300 mb-6">
              I specialize in React, Node.js, Python, and AI/LLM integration. When I'm not coding, you'll find me creating designs or editing videos.
            </p>
            <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
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
  );
}