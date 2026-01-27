import ParallaxBackground from '@/app/components/ParallaxBackground';
import SmoothScroll from '@/app/components/SmoothScroll';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import CV from '@/app/components/CV';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <SmoothScroll />
      <ParallaxBackground />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <CV />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}