import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Mathcoms LLC',
    role: 'Technical Project Manager',
    period: 'May 2025 — Nov 2025',
    location: 'Dubai, UAE',
    description: 'Led end-to-end delivery of enterprise FinTech platforms including Loan Origination Systems (LOS), risk analytics, asset classification, and provisioning solutions for banking clients.',
    achievements: [
      'Owned technical project execution across requirements finalization, system design, development tracking, UAT, and production releases',
      'Coordinated API-based integrations, ETL processes, and middleware connectivity',
      'Created BRD, FRD, SRS, data mapping sheets, and solution documentation',
      'Led UAT planning, defect triaging, and PWT sessions for business readiness',
      'Also led PM-IQ (AI-enabled Project Management tool) delivery with AI/ML engineers',
    ],
    technologies: ['FinTech', 'LOS', 'API', 'ETL', 'AI/ML', 'Jira', 'Confluence'],
  },
  {
    company: 'Kapiz Innovators Pvt Ltd',
    role: 'Technical Project Manager & Director',
    period: 'Feb 2024 — May 2025',
    location: 'India',
    description: 'Spearheaded development and deployment of FashQuik, a quick-commerce fashion delivery platform with innovative features.',
    achievements: [
      'Designed Try & Buy, Insta Returns, Last Mile Delivery, and Omni Channel Store Fulfillment',
      'Led cross-functional teams (backend, frontend, mobile, QA, infrastructure)',
      'Built cloud-native scalable infrastructure for exponential growth',
      'Managed full SDLC from ideation to optimization and scaling',
      'Managed vendor relationships and legal/compliance alignment',
    ],
    technologies: ['Quick Commerce', 'Cloud Native', 'Mobile Apps', 'Vendor Management'],
  },
  {
    company: 'Hurix Systems Pvt. Ltd',
    role: 'Associate Project Manager',
    period: 'May 2021 — Nov 2023',
    location: 'India',
    description: 'Managed delivery of enterprise SaaS and cloud-hosted platforms across E-learning, Health, Publishing and Banking domains, serving 20+ clients across US, EU, and APAC.',
    achievements: [
      'Led cross-functional Agile teams for SaaS and PaaS solutions',
      'Oversaw product lifecycle, system enhancements, and feature prioritization',
      'Owned UAT execution, defect management, and production deployments',
      'Managed SSO, ETL data flows, and integrations (Class Link, Google Classroom, LTI, SAML)',
      'Defined long-term IT strategy and technology roadmaps',
    ],
    technologies: ['SaaS', 'PaaS', 'SSO', 'LTI', 'SAML', 'ETL', 'Agile'],
  },
  {
    company: 'WhiteHat Education Pvt Ltd',
    role: 'Technical Support Engineer',
    period: 'May 2020 — Mar 2021',
    location: 'India',
    description: 'Provided technical support and troubleshooting for educational technology platforms.',
    achievements: [],
    technologies: [],
  },
  {
    company: 'Azuma Hospitality LLP',
    role: 'IT Officer / Engineer',
    period: 'Jul 2018 — Jan 2020',
    location: 'UAE',
    description: 'Managed IT infrastructure and systems for hospitality operations.',
    achievements: [],
    technologies: [],
  },
  {
    company: 'Sharooq Al Madina Tours & Travels',
    role: 'Travel Sales Consultant',
    period: 'Jan 2013 — Aug 2015',
    location: 'UAE',
    description: 'Managed travel bookings and customer relationships.',
    achievements: [],
    technologies: [],
  },
  {
    company: 'Spanco BPO Ltd (Respondez)',
    role: 'Sales Executive',
    period: 'Jun 2011 — Jan 2013',
    location: 'India',
    description: 'International sales and customer service operations.',
    achievements: [],
    technologies: [],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef} 
      id="experience"
      className="relative w-full py-20 lg:py-32 bg-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <p className="label-mono mb-4">Career Journey</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A decade of delivering enterprise technology solutions across diverse industries and geographies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const hasDetails = exp.achievements.length > 0;

              return (
                <div 
                  key={exp.company + exp.period}
                  className={`reveal relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index > 0 ? 'lg:mt-12' : ''
                  }`}
                >
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full accent-bg border-4 border-white shadow-md" />
                  </div>

                  {/* Content */}
                  <div 
                    className={`${
                      isLeft ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'
                    }`}
                  >
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all duration-300">
                      {/* Header */}
                      <div className={`flex flex-col ${isLeft ? 'lg:items-end' : 'lg:items-start'} mb-4`}>
                        <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                          <Briefcase className="w-4 h-4 text-indigo-500" />
                          <span className="label-mono">{exp.company}</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                          {exp.role}
                        </h3>
                        <div className={`flex flex-wrap items-center gap-3 text-sm text-gray-500 ${isLeft ? 'lg:justify-end' : ''}`}>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      {hasDetails && (
                        <ul className={`space-y-2 mb-4 ${isLeft ? 'lg:text-right' : ''}`}>
                          {exp.achievements.map((achievement, i) => (
                            <li 
                              key={i} 
                              className={`flex items-start gap-2 text-sm text-gray-600 ${isLeft ? 'lg:flex-row-reverse' : ''}`}
                            >
                              <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies */}
                      {exp.technologies.length > 0 && (
                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : ''}`}>
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
