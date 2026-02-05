import { useRef, useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Code2,
  ShoppingBag,
  Brain,
  Building2,
  GraduationCap
} from 'lucide-react';

const projects = [
  {
    id: 'fashquik',
    title: 'FashQuik',
    subtitle: 'Quick-Commerce Fashion Delivery Platform',
    category: 'E-commerce',
    icon: ShoppingBag,
    company: 'Kapiz Innovators Pvt Ltd',
    period: 'Feb 2024 — May 2025',
    role: 'Technical Project Manager & Director',
    overview: 'A last-mile fashion delivery platform with innovative features that set it apart from competitors. Built cloud-native infrastructure to handle exponential growth and high transaction volumes.',
    features: [
      'Try & Buy — Customers can try items before purchasing',
      'Insta Returns — Seamless instant return process',
      'Last Mile Delivery — Optimized delivery routing',
      'Omni Channel Store Fulfillment — Unified inventory across channels',
    ],
    achievements: [
      'Led cross-functional teams (backend, frontend, mobile, QA, infrastructure)',
      'Managed full SDLC from ideation to optimization and scaling',
      'Built cloud-native scalable infrastructure for exponential growth',
      'Managed vendor relationships and legal/compliance alignment',
      'Defined technical roadmap ensuring product scalability and performance',
    ],
    technologies: ['Cloud Native', 'Mobile Apps', 'Node.js', 'React', 'AWS', 'Microservices'],
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    id: 'los',
    title: 'FinTech LOS & Risk Platforms',
    subtitle: 'Loan Origination & Risk Analytics System',
    category: 'FinTech',
    icon: Building2,
    company: 'Mathcoms LLC',
    period: 'May 2025 — Nov 2025',
    role: 'Technical Project Manager',
    overview: 'Enterprise banking platform for loan origination, risk analytics, asset classification, and provisioning solutions. Delivered compliant, audit-ready systems with complex integrations.',
    features: [
      'Loan Origination System (LOS) — End-to-end loan processing',
      'Risk Analytics — Real-time risk assessment and scoring',
      'Asset Classification — Automated asset categorization',
      'Provisioning Solutions — Regulatory compliance reporting',
    ],
    achievements: [
      'Owned technical project execution from requirements to production',
      'Coordinated API-based integrations and ETL processes',
      'Created comprehensive BRD, FRD, SRS, and data mapping documentation',
      'Led UAT planning, defect triaging, and PWT sessions',
      'Ensured compliance-aligned delivery for audit requirements',
    ],
    technologies: ['Banking APIs', 'ETL', 'Risk Engines', 'SQL', 'Middleware', 'UAT'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'pmiq',
    title: 'PM-IQ',
    subtitle: 'AI-Enabled Project Management Tool',
    category: 'SaaS / AI',
    icon: Brain,
    company: 'Mathcoms LLC',
    period: 'May 2025 — Nov 2025',
    role: 'Technical Project Manager',
    overview: 'An intelligent project management platform leveraging AI/ML to automate workflows, predict timelines, and enhance team productivity.',
    features: [
      'AI-Powered Task Automation — Smart task assignment and tracking',
      'Predictive Analytics — Timeline and risk predictions',
      'Natural Language Processing — Conversational project queries',
      'Integration Hub — API/SDK connectivity with popular tools',
    ],
    achievements: [
      'Defined BRDs, SRS, user flows, and automation workflows',
      'Coordinated with AI/ML engineers, UI/UX, and backend teams',
      'Facilitated Agile ceremonies and sprint planning using Jira',
      'Oversaw API/SDK integrations and data-driven feature enhancements',
    ],
    technologies: ['AI/ML', 'NLP', 'Python', 'React', 'Node.js', 'REST APIs'],
    color: 'from-violet-500/20 to-indigo-500/20',
  },
  {
    id: 'zanichelli',
    title: 'Zanichelli PWA & K.AI',
    subtitle: 'Progressive Web App with AI Learning Assistant',
    category: 'EdTech',
    icon: GraduationCap,
    company: 'Hurix Systems Pvt. Ltd',
    period: '2021 — 2023',
    role: 'Associate Project Manager',
    overview: 'Progressive Web Application implementation for Italian educational publisher with AI-powered learning assistant (K.AI) for personalized student support.',
    features: [
      'Progressive Web App — Offline-capable learning platform',
      'K.AI Assistant — AI-powered tutoring and Q&A',
      'Content Delivery — Optimized educational content distribution',
      'Analytics Dashboard — Learning progress tracking',
    ],
    achievements: [
      'Managed PWA implementation across web, iOS, and Android platforms',
      'Coordinated AI/ML integration for K.AI learning assistant',
      'Ensured cross-platform compatibility and performance',
      'Delivered for 20+ enterprise clients across US, EU, and APAC',
    ],
    technologies: ['PWA', 'AI/ML', 'Angular', 'Node.js', 'MongoDB', 'LTI'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 'enterprise-saas',
    title: 'Enterprise SaaS Platforms',
    subtitle: 'Multi-Tenant SaaS & PaaS Solutions',
    category: 'Enterprise',
    icon: Layers,
    company: 'Hurix Systems Pvt. Ltd',
    period: 'May 2021 — Nov 2023',
    role: 'Associate Project Manager',
    overview: 'Managed delivery of enterprise SaaS and PaaS platforms across E-learning, Health, Publishing, and Banking domains serving 20+ global clients.',
    features: [
      'Single Sign-On (SSO) — Unified authentication across platforms',
      'ETL Data Flows — Automated data synchronization',
      'User Management — Role-based access control',
      'Third-Party Integrations — Class Link, Google Classroom, LTI, SAML',
    ],
    achievements: [
      'Led cross-functional Agile teams for SaaS and PaaS solutions',
      'Oversaw product lifecycle and feature prioritization',
      'Established QA and defect management processes',
      'Defined long-term IT strategy and technology roadmaps',
    ],
    technologies: ['SaaS', 'PaaS', 'SSO', 'SAML', 'OAuth', 'ETL', 'Microservices'],
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 'angular-dashboards',
    title: 'Angular Web Applications',
    subtitle: 'Responsive Business Dashboards & Portals',
    category: 'Web Development',
    icon: Code2,
    company: 'Freelance / Various',
    period: '2018 — Present',
    role: 'Frontend Developer / PM',
    overview: 'Developed multiple responsive Angular-based websites and dashboards for small businesses, including product listing pages, admin dashboards, and customer portals.',
    features: [
      'Product Listing Pages — E-commerce catalog interfaces',
      'Admin Dashboards — Business management panels',
      'Customer Portals — Self-service user interfaces',
      'Responsive Design — Mobile-first approach',
    ],
    achievements: [
      'Built component-based architecture with Angular 15+',
      'Implemented services, routing, forms, and REST API consumption',
      'Delivered pixel-perfect responsive designs',
    ],
    technologies: ['Angular 15+', 'TypeScript', 'RxJS', 'REST APIs', 'Sass', 'Bootstrap'],
    color: 'from-red-500/20 to-rose-500/20',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section 
      ref={sectionRef} 
      id="projects"
      className="relative w-full py-20 lg:py-32 bg-primary-dark"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <p className="label-mono mb-4">Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-light mb-6">
            Key Projects
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto">
            A selection of enterprise platforms, SaaS products, and system integrations 
            I've delivered across FinTech, E-commerce, and EdTech domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            const isExpanded = expandedProject === project.id;

            return (
              <div 
                key={project.id}
                className="reveal group relative bg-navy-800/50 card-border overflow-hidden hover:border-indigo-accent/40 transition-all duration-300"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-sm accent-bg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="label-mono text-xs">{project.category}</span>
                        <h3 className="font-display text-xl lg:text-2xl font-bold text-primary-light">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-light text-sm mb-2">{project.subtitle}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-slate-light">
                    <span>{project.company}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-light/50" />
                    <span>{project.period}</span>
                  </div>

                  {/* Overview */}
                  <p className="text-secondary-light text-sm mb-4 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[800px]' : 'max-h-0'}`}>
                    {/* Features */}
                    <div className="mb-4">
                      <p className="label-mono text-xs mb-2">Key Features</p>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-secondary-light">
                            <CheckCircle2 className="w-4 h-4 text-indigo-accent flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <p className="label-mono text-xs mb-2">Achievements</p>
                      <ul className="space-y-1.5">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-secondary-light">
                            <ArrowRight className="w-4 h-4 text-indigo-accent flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-navy-900 text-slate-light text-xs rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className="text-indigo-accent text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                      <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
