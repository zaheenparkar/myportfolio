import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Testimonials data for future use
// const testimonials = [
//   {
//     quote: "Zaheen turned a vague brief into a shipped product—on time and within compliance.",
//     attribution: "Engineering Lead · Tier-1 Bank",
//   },
//   {
//     quote: "His ability to bridge technical and business teams is exceptional. Delivered our MVP 2 weeks ahead of schedule.",
//     attribution: "CEO · FinTech Startup",
//   },
//   {
//     quote: "The most organized PM I've worked with. Documentation was always clear, and sprints ran like clockwork.",
//     attribution: "CTO · E-commerce Platform",
//   },
// ];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0-30%)
      scrollTl
        .fromTo(imageRef.current, 
          { y: '-55vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(quoteRef.current, 
          { y: '28vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.08
        )
        .fromTo(accentRef.current, 
          { scale: 0, opacity: 0 }, 
          { scale: 1, opacity: 0.14, ease: 'none' }, 
          0
        );

      // EXIT (70-100%)
      scrollTl
        .to(imageRef.current, 
          { y: '-14vh', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .to(quoteRef.current, 
          { y: '8vh', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .to(accentRef.current, 
          { scale: 0.7, opacity: 0, ease: 'power2.in' }, 
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section-pinned z-80 bg-primary-dark"
    >
      {/* Top image strip */}
      <div 
        ref={imageRef}
        className="absolute left-0 top-[10vh] w-full h-[40vh] z-[2] overflow-hidden"
        style={{ opacity: 0 }}
      >
        <img 
          src="/testimonial-meeting.jpg" 
          alt="Team meeting" 
          className="w-full h-full object-cover image-grade"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F17]" />
      </div>

      {/* Bottom-right accent block */}
      <div 
        ref={accentRef}
        className="absolute right-[8vw] top-[62vh] w-[22vw] h-[22vh] accent-bg z-[1]"
        style={{ opacity: 0, transform: 'scale(0)' }}
      />

      {/* Quote block */}
      <div 
        ref={quoteRef}
        className="absolute left-[8vw] top-[58vh] w-[44vw] z-[5]"
        style={{ opacity: 0 }}
      >
        <Quote className="w-10 h-10 text-indigo-accent mb-4 opacity-60" />
        <blockquote className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-primary-light leading-snug mb-6">
          "Zaheen turned a vague brief into a shipped product—on time and within compliance."
        </blockquote>
        <cite className="font-mono text-sm text-slate-light not-italic tracking-wide">
          Engineering Lead · Tier-1 Bank
        </cite>
      </div>
    </section>
  );
}
