import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Mail, Download } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Auto-play entrance animation on page load
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      loadTl
        .fromTo(portraitRef.current, 
          { opacity: 0, x: 50 }, 
          { opacity: 1, x: 0, duration: 0.8 }, 
          0
        )
        .fromTo('.hero-text', 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 }, 
          0.2
        )
        .fromTo('.hero-cta', 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5 }, 
          0.6
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('projects');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen w-full bg-primary-dark overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'radial-gradient(ellipse at 80% 30%, rgba(75,108,255,0.1) 0%, transparent 50%)' 
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{ 
            background: 'linear-gradient(to top, #0B0F17, transparent)' 
          }}
        />
      </div>

      {/* Content Container */}
      <div 
        ref={contentRef}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <p className="hero-text label-mono mb-4" style={{ opacity: 0 }}>
                Technical Project Manager
              </p>
              
              <h1 
                className="hero-text font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-light leading-tight mb-6"
                style={{ opacity: 0 }}
              >
                Zaheen Parkar
              </h1>
              
              <h2 
                className="hero-text font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-light/90 mb-6 leading-snug"
                style={{ opacity: 0 }}
              >
                From Ideation to Launch — I Build Scalable Tech Products That Work.
              </h2>
              
              <p 
                className="hero-text text-secondary-light text-base lg:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
                style={{ opacity: 0 }}
              >
                11+ years delivering enterprise platforms, cloud solutions, and SaaS products 
                across FinTech, E-commerce, and Digital Learning domains.
              </p>

              <div 
                className="hero-cta flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                style={{ opacity: 0 }}
              >
                <button 
                  onClick={scrollToWork} 
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={scrollToContact} 
                  className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </button>
                <a 
                  href="/Zaheen_Parkar_Resume.pdf"
                  download
                  className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>

              <p 
                className="hero-text font-mono text-xs text-slate-light tracking-wide mt-8"
                style={{ opacity: 0 }}
              >
                Based in Dubai · Delivering globally · CSM® · ITIL
              </p>
            </div>

            {/* Right - Portrait */}
            <div 
              ref={portraitRef}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              style={{ opacity: 0 }}
            >
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem]">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-indigo-accent/30" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-indigo-accent/30" />
                
                {/* Portrait */}
                <div className="relative w-full h-full overflow-hidden card-border">
                  <img 
                    src="/zaheen-portrait.png" 
                    alt="Zaheen Parkar" 
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'contrast(1.05)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <div className="w-6 h-10 border-2 border-slate-light/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-indigo-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
