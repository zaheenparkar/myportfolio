import { useRef, useState } from 'react';
import { 
  Workflow, 
  Wrench, 
  FileText,
  Code2,
  Database,
  Cloud,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

const skillCategories = [
  {
    id: 'project-management',
    title: 'Project Management',
    icon: Workflow,
    description: 'End-to-end delivery expertise across methodologies',
    skills: [
      'Agile & Scrum (CSM® Certified)',
      'Waterfall & Hybrid Models',
      'PMP Frameworks',
      'Sprint Planning & Backlog Grooming',
      'Risk Assessment & Mitigation',
      'Budget Planning & Forecasting',
      'Resource Allocation',
      'Stakeholder Management',
    ],
  },
  {
    id: 'technical',
    title: 'Technical Skills',
    icon: Code2,
    description: 'Hands-on technical capabilities',
    skills: [
      'Angular 15+ (Components, Services, Routing)',
      'TypeScript & JavaScript',
      'REST API Integration',
      'SQL (MySQL, SQL Server)',
      'Database Design & Queries',
      'Postman & API Testing',
      'Swagger Documentation',
      'Chrome DevTools Debugging',
    ],
  },
  {
    id: 'integration',
    title: 'Integration & APIs',
    icon: Database,
    description: 'System integration and data flow expertise',
    skills: [
      'REST API Design & Consumption',
      'SDK Integration',
      'SAML & OAuth Authentication',
      'SSO Implementation',
      'ETL Processes',
      'Middleware & API Gateways',
      'CDP Platforms',
      'Data Lake Ecosystems',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Cloud platform experience',
    skills: [
      'AWS EC2 & S3',
      'AWS RDS & IAM',
      'Lambda Functions',
      'Cloud Architecture',
      'Environment Troubleshooting',
      'CI/CD Pipelines',
      'Microservices',
      'Container Concepts',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    description: 'Project management and collaboration tools',
    skills: [
      'Jira & Confluence',
      'ClickUp & Trello',
      'Zoho Suite',
      'Microsoft Office Suite',
      'Slack & Teams',
      'Git & GitHub',
      'Figma (Basic)',
      'Draw.io & Lucidchart',
    ],
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: FileText,
    description: 'Business and technical documentation',
    skills: [
      'Business Requirements (BRD)',
      'Functional Requirements (FRD)',
      'Software Requirements (SRS)',
      'User Stories & Use Cases',
      'Data Mapping Sheets',
      'Wireframes & Mockups',
      'Acceptance Criteria',
      'API Documentation',
    ],
  },
];

const domains = [
  'BFSI & Banking',
  'FinTech',
  'SaaS Platforms',
  'E-commerce',
  'EdTech',
  'HealthTech',
  'Digital Publishing',
  'Quick Commerce',
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('project-management');

  return (
    <section 
      ref={sectionRef} 
      id="skills"
      className="relative w-full py-20 lg:py-32 bg-gray-50"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <p className="label-mono mb-4">Expertise</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Competencies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning project management, technical delivery, 
            and system integration across enterprise domains.
          </p>
        </div>

        {/* Domains */}
        <div className="reveal mb-12">
          <p className="label-mono mb-4 text-center">Industry Domains</p>
          <div className="flex flex-wrap justify-center gap-2">
            {domains.map((domain) => (
              <span 
                key={domain}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm rounded-lg shadow-sm hover:border-indigo-300 hover:shadow-md transition-all"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;

            return (
              <div 
                key={category.id}
                className="reveal"
              >
                <div 
                  className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'border-indigo-300 shadow-md' : 'border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                    className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg accent-bg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-display text-lg font-semibold text-gray-900">
                          {category.title}
                        </h3>
                        <p className="text-gray-500 text-xs">{category.description}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {/* Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <div className="px-5 pb-5">
                      <div className="pt-2 border-t border-gray-100">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                          {category.skills.map((skill) => (
                            <div 
                              key={skill}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="reveal mt-16">
          <p className="label-mono mb-6 text-center">Certifications</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Certified Scrum Master (CSM®)', org: 'Scrum Alliance' },
              { name: 'ITIL Foundation', org: 'AXELOS' },
              { name: 'Conflict Management & De-Escalation', org: 'Customer Service' },
              { name: 'SQL & Oracle DBA Orientation', org: 'Database' },
              { name: 'Front-End Web Development', org: 'Web Dev' },
            ].map((cert) => (
              <div 
                key={cert.name}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full accent-bg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">{cert.name}</p>
                  <p className="text-gray-500 text-xs">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
