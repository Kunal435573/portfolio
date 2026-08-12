export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-12">
          Have an interesting project? Let's talk!
        </p>
        <div className="flex flex-col gap-4 mb-12">
          <a href="mailto:kp435573@gmail.com" className="text-blue-400 hover:text-blue-300 text-lg">
            📧 kp435573@gmail.com
          </a>
          <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 text-lg">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/kunal435573" className="text-blue-400 hover:text-blue-300 text-lg">
            🐙 GitHub
          </a>
        </div>
        <a href="mailto:kp435573@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block">
          Send Me an Email
        </a>
      </div>
    </section>
  );
}