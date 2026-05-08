import { Award, Globe, Users, Briefcase, CheckCircle2, Sparkles } from 'lucide-react';

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
  'BFSI & Banking',
  'FinTech',
  'SaaS Platforms',
  'E-commerce',
  'Warehouse Management',
  'EdTech',
  'HealthTech',
  'Digital Publishing',
  'Quick Commerce',
];

export default function About() {
  return (
    <section 
      id="about"
      className="relative w-full py-20 lg:py-32 bg-gray-50"
    >
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <p className="label-mono mb-4">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            I turn ambiguity into delivery.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="reveal space-y-6">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Result Driven IT Project Manager with 11+ years of overall experience delivering enterprise 
              technology platforms, cloud-hosted solutions, SaaS products, and system integrations 
              across <span className="text-gray-900 font-medium">BFSI, FinTech, E-Learning, Warehouse Management, and Digital Commerce</span> domains.
            </p>
            
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Proven expertise in end-to-end project delivery, Agile/Waterfall methodologies, stakeholder management, 
              and regulatory-compliant environments, coordinating cross-functional engineering teams, vendors, and 
              stakeholders to deliver scalable, secure, and high-availability solutions.
            </p>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Strong exposure to platform implementations, API-driven integrations, cloud environments, 
              UAT, release management, and production go-lives, with a hands-on, execution-focused 
              approach aligned to enterprise standards.
            </p>

            <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <Sparkles className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Generative AI:</span> Leveraging ChatGPT, Gemini, and Claude to accelerate project planning, 
                requirement analysis, and delivery efficiency — improving output by ~30%.
              </p>
            </div>

            <div className="pt-4">
              <p className="label-mono mb-4">Domains</p>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <span 
                    key={domain}
                    className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-lg shadow-sm"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal space-y-8">
            <div className="relative w-full aspect-[4/3] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/zaheen-portrait.png" 
                alt="Zaheen Parkar" 
                className="w-full h-full object-cover object-top"
                style={{ filter: 'contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.label}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-lg accent-bg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                      <p className="text-gray-900 font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="label-mono mb-3">Core Competencies</p>
              <div className="space-y-2">
                {[
                  'End-to-end project delivery (PMP, Agile, Scrum)',
                  'API & system integrations (REST, SDK, SAML, OAuth)',
                  'Cloud environments (AWS EC2, S3, RDS, Lambda)',
                  'Generative AI tools (ChatGPT, Gemini, Claude)',
                  'Technical documentation (BRD, FRD, SRS, User Stories)',
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{skill}</span>
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
