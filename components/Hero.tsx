export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center pt-20">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-6xl font-bold text-white mb-4">
          Hey, I'm Kunal 🚀
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Full-Stack Developer | AI Enthusiast | Creative Designer
        </p>
        <p className="text-gray-500 mb-8">
          Building AI-powered tools, beautiful UIs, and digital experiences
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            View My Work
          </a>
          <a href="#contact" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}