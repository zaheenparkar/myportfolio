import { useRef } from 'react';
import { Calendar, Download, ArrowRight, Briefcase, Clock, Globe } from 'lucide-react';

const offerings = [
  {
    icon: Briefcase,
    title: 'Project Leadership',
    description: 'End-to-end delivery of MVPs, SaaS platforms, and system integrations',
  },
  {
    icon: Clock,
    title: 'Fast Execution',
    description: 'Agile methodologies with rapid iteration and continuous delivery',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'Experience working with teams across US, EU, and APAC time zones',
  },
];

export default function FreelanceOffer() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef} 
      id="freelance"
      className="relative w-full py-20 lg:py-32 bg-secondary-dark"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'radial-gradient(ellipse at 20% 50%, rgba(75,108,255,0.08) 0%, transparent 50%)' 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Content */}
          <div className="reveal">
            <p className="label-mono mb-4">Availability</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-light mb-6">
              Available for Freelance & Leadership Roles
            </h2>
            <p className="text-secondary-light text-base lg:text-lg mb-8 leading-relaxed">
              I lead technical delivery for MVPs, SaaS platforms, and system integrations— 
              ideal for startups and scale-ups that need to move fast without breaking things.
            </p>

            {/* Offerings */}
            <div className="space-y-4 mb-8">
              {offerings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <div 
                    key={offering.title}
                    className="flex items-start gap-4 p-4 bg-navy-800/50 card-border"
                  >
                    <div className="w-10 h-10 rounded-sm accent-bg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-primary-light mb-1">
                        {offering.title}
                      </h3>
                      <p className="text-secondary-light text-sm">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://calendly.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/Zaheen_Parkar_Resume.pdf"
                download
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Availability Badge */}
            <div className="mt-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-slate-light">
                Available Q2 2026 · Remote / Dubai / Travel
              </span>
            </div>
          </div>

          {/* Right - Image */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-indigo-accent/30" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-indigo-accent/30" />
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden card-border">
                <img 
                  src="/cta-workspace.jpg" 
                  alt="Workspace" 
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.7) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/70 via-transparent to-transparent" />
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 p-4 bg-navy-800 card-border">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-indigo-accent">11+</p>
                    <p className="text-slate-light text-xs">Years Exp.</p>
                  </div>
                  <div className="w-px h-10 bg-[rgba(245,247,255,0.14)]" />
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-indigo-accent">20+</p>
                    <p className="text-slate-light text-xs">Clients</p>
                  </div>
                  <div className="w-px h-10 bg-[rgba(245,247,255,0.14)]" />
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-indigo-accent">6+</p>
                    <p className="text-slate-light text-xs">Domains</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
