import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/skills";
import About from "../components/About";
import Process from "../components/process";
import Journal from "../components/Journal";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] space-y-12">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Process />
      <Journal />
      <Footer />
    </main>
  );
}
