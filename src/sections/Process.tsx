import { useRef } from 'react';
import { Search, PenTool, Code, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Stakeholder mapping, requirements gathering, risk assessment, and project charter creation.',
    details: [
      'Business requirements analysis',
      'Technical feasibility study',
      'Risk register creation',
      'Stakeholder identification',
    ],
    icon: Search,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    number: '02',
    title: 'Design',
    description: 'User flows, wireframes, API contracts, and technical architecture planning.',
    details: [
      'User journey mapping',
      'Wireframe & prototype creation',
      'API contract definition',
      'System architecture design',
    ],
    icon: PenTool,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Agile sprints, QA processes, CI/CD pipelines, and comprehensive documentation.',
    details: [
      'Sprint planning & execution',
      'Code review & QA testing',
      'CI/CD implementation',
      'Technical documentation',
    ],
    icon: Code,
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'UAT execution, production rollout, monitoring setup, and knowledge transfer.',
    details: [
      'UAT planning & execution',
      'Production deployment',
      'Monitoring & alerting',
      'Team training & handoff',
    ],
    icon: Rocket,
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef} 
      id="process"
      className="relative w-full py-20 lg:py-32 bg-white"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <p className="label-mono mb-4">My Approach</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How I Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A proven delivery methodology that ensures projects are completed on time, 
            within budget, and to the highest quality standards.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div 
                key={step.number}
                className="reveal group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Connector Line - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-300 to-transparent" />
                    <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-300" />
                  </div>
                )}

                <div className="relative h-full p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-1">
                    <span className="font-display text-5xl font-bold text-indigo-100">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1.5">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1 h-1 rounded-full bg-indigo-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Ready to start your next project?
          </p>
          <a 
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
