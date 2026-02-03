import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster } from 'sonner';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Skills from './sections/Skills';
import FreelanceOffer from './sections/FreelanceOffer';
import Contact from './sections/Contact';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Simple reveal animations for flowing sections
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-primary-dark min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Toast notifications */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#121A25',
            color: '#F5F7FF',
            border: '1px solid rgba(245, 247, 255, 0.14)',
          },
        }}
      />
      
      {/* Main content */}
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Process />
        <Skills />
        <FreelanceOffer />
        <Contact />
      </main>
    </div>
  );
}

export default App;
