import SmoothScroll from '@/app/components/SmoothScroll';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Stack from '@/app/components/Stack';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg text-fg">
      <SmoothScroll />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-0 h-[720px]" aria-hidden="true" />
      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
