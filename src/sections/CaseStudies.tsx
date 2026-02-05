import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 'fashquik',
    label: 'Featured Case Study',
    title: 'FashQuik — Quick-Commerce Fashion',
    meta: 'Role: Technical PM & Director · Timeline: 6 months',
    description: 'Led full SDLC for a last-mile fashion delivery platform. Designed Try & Buy, Insta Returns, and omni-channel fulfillment. Built cloud-native, scalable infrastructure.',
    cta: 'Read the case study',
    badge: 'MVP launch · Omni-channel fulfillment',
    image: '/case-fashquik.jpg',
    layout: 'left-image',
  },
  {
    id: 'pmiq',
    label: 'Case Study',
    title: 'PM-IQ — AI-Powered Project Management',
    meta: '',
    description: 'Translated AI/ML capabilities into a usable SaaS product. Defined BRDs, user flows, and automation logic. Coordinated AI engineers, UI/UX, and backend teams.',
    cta: 'See how it works',
    badge: '',
    image: '/case-pmiq.jpg',
    layout: 'top-image',
  },
  {
    id: 'fintech',
    label: 'Case Study',
    title: 'FinTech Loan Origination System',
    meta: 'Regulatory documentation · API/ETL · UAT',
    description: 'Delivered a compliant, audit-ready banking platform with complex integrations. Managed UAT, regulatory docs, and production go-live.',
    cta: 'Explore the delivery approach',
    badge: 'Zero critical post-launch defects',
    image: '/case-fintech.jpg',
    layout: 'right-image',
  },
];

function CaseStudySection({ 
  study, 
  index 
}: { 
  study: typeof caseStudies[0]; 
  index: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0-30%)
      if (study.layout === 'left-image') {
        scrollTl
          .fromTo(imageRef.current, 
            { x: '-60vw', opacity: 0, scale: 0.985 }, 
            { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
            0
          )
          .fromTo(textRef.current, 
            { x: '40vw', opacity: 0 }, 
            { x: 0, opacity: 1, ease: 'none' }, 
            0.05
          );
      } else if (study.layout === 'top-image') {
        scrollTl
          .fromTo(imageRef.current, 
            { y: '-60vh', opacity: 0 }, 
            { y: 0, opacity: 1, ease: 'none' }, 
            0
          )
          .fromTo(textRef.current, 
            { y: '30vh', opacity: 0 }, 
            { y: 0, opacity: 1, ease: 'none' }, 
            0.08
          )
          .fromTo(accentRef.current, 
            { scale: 0, opacity: 0 }, 
            { scale: 1, opacity: 0.18, ease: 'none' }, 
            0
          );
      } else {
        scrollTl
          .fromTo(textRef.current, 
            { x: '-50vw', opacity: 0 }, 
            { x: 0, opacity: 1, ease: 'none' }, 
            0
          )
          .fromTo(imageRef.current, 
            { x: '60vw', opacity: 0, scale: 0.985 }, 
            { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
            0
          )
          .fromTo(accentRef.current, 
            { scaleY: 0, opacity: 0 }, 
            { scaleY: 1, opacity: 1, transformOrigin: 'top', ease: 'none' }, 
            0
          );
      }

      // EXIT (70-100%)
      if (study.layout === 'left-image') {
        scrollTl
          .to(imageRef.current, 
            { x: '-22vw', opacity: 0, ease: 'power2.in' }, 
            0.7
          )
          .to(textRef.current, 
            { x: '12vw', opacity: 0, ease: 'power2.in' }, 
            0.7
          );
      } else if (study.layout === 'top-image') {
        scrollTl
          .to(imageRef.current, 
            { y: '-18vh', opacity: 0, ease: 'power2.in' }, 
            0.7
          )
          .to(textRef.current, 
            { y: '10vh', opacity: 0, ease: 'power2.in' }, 
            0.7
          )
          .to(accentRef.current, 
            { scale: 0.6, opacity: 0, ease: 'power2.in' }, 
            0.7
          );
      } else {
        scrollTl
          .to(textRef.current, 
            { x: '-14vw', opacity: 0, ease: 'power2.in' }, 
            0.7
          )
          .to(imageRef.current, 
            { x: '18vw', opacity: 0, ease: 'power2.in' }, 
            0.7
          )
          .to(accentRef.current, 
            { scaleY: 0.2, opacity: 0, ease: 'power2.in' }, 
            0.7
          );
      }
    }, section);

    return () => ctx.revert();
  }, [study.layout]);

  const isLeftImage = study.layout === 'left-image';
  const isTopImage = study.layout === 'top-image';
  const isRightImage = study.layout === 'right-image';

  return (
    <section 
      ref={sectionRef} 
      id={index === 0 ? 'work' : undefined}
      className="section-pinned bg-primary-dark"
      style={{ zIndex: 30 + index * 10 }}
    >
      {/* Blueprint crosshair (faint) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-px h-[60vh] bg-[rgba(75,108,255,0.05)]" />
        <div className="absolute w-[60vh] h-px bg-[rgba(75,108,255,0.05)]" />
      </div>

      {/* Image */}
      <div 
        ref={imageRef}
        className={`absolute z-[3] overflow-hidden ${
          isLeftImage 
            ? 'left-[6vw] top-[16vh] w-[46vw] h-[68vh]' 
            : isTopImage 
              ? 'left-0 top-[10vh] w-full h-[42vh]' 
              : 'left-[52vw] top-[16vh] w-[42vw] h-[68vh]'
        }`}
        style={{ opacity: 0 }}
      >
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover image-grade"
        />
      </div>

      {/* Accent elements */}
      {isRightImage && (
        <div 
          ref={accentRef}
          className="absolute left-[50vw] top-[20vh] h-[60vh] w-0.5 accent-line z-[2]"
          style={{ transform: 'scaleY(0)' }}
        />
      )}
      {isTopImage && (
        <div 
          ref={accentRef}
          className="absolute right-[8vw] top-[62vh] w-[18vw] h-[18vw] accent-bg z-[1]"
          style={{ opacity: 0, transform: 'scale(0)' }}
        />
      )}

      {/* Text content */}
      <div 
        ref={textRef}
        className={`absolute z-[5] ${
          isLeftImage 
            ? 'left-[58vw] top-[16vh] w-[34vw]' 
            : isTopImage 
              ? 'left-[8vw] top-[56vh] w-[40vw]' 
              : 'left-[8vw] top-[16vh] w-[36vw]'
        }`}
        style={{ opacity: 0 }}
      >
        <p className="label-mono mb-4">{study.label}</p>
        <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold text-primary-light mb-4 leading-tight">
          {study.title}
        </h2>
        {study.meta && (
          <p className="font-mono text-xs text-slate-light tracking-wide mb-4">
            {study.meta}
          </p>
        )}
        <p className="text-secondary-light leading-relaxed mb-6">
          {study.description}
        </p>
        <a href="#" className="link-accent mb-4 inline-flex">
          {study.cta}
          <ArrowRight className="w-4 h-4" />
        </a>
        {study.badge && (
          <p className="font-mono text-xs text-slate-light tracking-wide mt-4">
            {study.badge}
          </p>
        )}
      </div>
    </section>
  );
}

export default function CaseStudies() {
  return (
    <>
      {caseStudies.map((study, index) => (
        <CaseStudySection key={study.id} study={study} index={index} />
      ))}
    </>
  );
}
