import { useRef } from 'react';
import { Award, Globe, Users, Briefcase, CheckCircle2 } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    label: 'Experience',
    value: '11+ Years',
  },
  {
    icon: Award,
    label: 'Certifications',
    value: 'CSM® · ITIL',
  },
  {
    icon: Globe,
    label: 'Global Delivery',
    value: 'US · EU · APAC',
  },
  {
    icon: Users,
    label: 'Clients Served',
    value: '20+ Enterprise',
  },
];

const domains = [
  'BFSI & FinTech',
  'SaaS Platforms',
  'E-commerce',
  'EdTech',
  'HealthTech',
  'Digital Publishing',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef} 
      id="about"
      className="relative w-full py-20 lg:py-32 bg-primary-dark"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <p className="label-mono mb-4">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-light mb-6">
            I turn ambiguity into delivery.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left - Bio */}
          <div className="reveal space-y-6">
            <p className="text-secondary-light text-base lg:text-lg leading-relaxed">
              Technical Project Manager with 11+ years of overall experience delivering enterprise 
              technology platforms, cloud-hosted solutions, SaaS products, and system integrations 
              across <span className="text-primary-light font-medium">BFSI, FinTech, E-Learning, and Digital Commerce</span> domains.
            </p>
            
            <p className="text-secondary-light text-base lg:text-lg leading-relaxed">
              Proven track record of managing end-to-end technical project delivery, coordinating 
              cross-functional engineering teams, vendors, and stakeholders to deliver scalable, 
              secure, and high-availability solutions.
            </p>

            <p className="text-secondary-light text-base lg:text-lg leading-relaxed">
              Strong exposure to platform implementations, API-driven integrations, cloud environments, 
              UAT, release management, and production go-lives, with a hands-on, execution-focused 
              approach aligned to enterprise standards.
            </p>

            {/* Domains */}
            <div className="pt-4">
              <p className="label-mono mb-4">Domains</p>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <span 
                    key={domain}
                    className="px-3 py-1.5 bg-navy-800 border border-[rgba(245,247,255,0.14)] text-secondary-light text-sm rounded-sm"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Highlights & Photo */}
          <div className="reveal space-y-8">
            {/* Portrait */}
            <div className="relative w-full aspect-[4/3] max-w-md mx-auto lg:mx-0 overflow-hidden card-border">
              <img 
                src="/zaheen-portrait.png" 
                alt="Zaheen Parkar" 
                className="w-full h-full object-cover object-top"
                style={{ filter: 'contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/70 via-transparent to-transparent" />
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.label}
                    className="flex items-center gap-3 p-4 bg-navy-800/50 card-border"
                  >
                    <div className="w-10 h-10 rounded-sm accent-bg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-light uppercase tracking-wide">{item.label}</p>
                      <p className="text-primary-light font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Skills Quick List */}
            <div className="p-4 bg-navy-800/30 card-border">
              <p className="label-mono mb-3">Core Competencies</p>
              <div className="space-y-2">
                {[
                  'End-to-end project delivery (PMP, Agile, Scrum)',
                  'API & system integrations (REST, SDK, SAML, OAuth)',
                  'Cloud environments (AWS EC2, S3, RDS, Lambda)',
                  'Technical documentation (BRD, FRD, SRS, User Stories)',
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-accent flex-shrink-0" />
                    <span className="text-secondary-light text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
