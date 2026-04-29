import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";
import ScrollProgress from "@/components/ScrollProgress";
import Konami from "@/components/Konami";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Spotlight />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Konami />
    </main>
  );
}
