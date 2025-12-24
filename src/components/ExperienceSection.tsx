import { useState } from 'react';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      type: 'work',
      title: 'Privacy and Information Security Manager (PISM)',
      company: 'e6data',
      period: '2024 - Present',
      description: 'Responsible for security deliverables which include but not limited to architecture, principles, risk management, compliance, and penetration testing to ensure the organization\'s security posture. Driving security governance & compliance (ISO 27001, SOC 2, GDPR, HIPAA) for a global Data Analytics SaaS platform.',
      achievements: [
        'Managing security architecture, principles, and risk management',
        'Ensuring ISO 27001, SOC 2, GDPR, HIPAA compliance',
        'Conducting penetration testing and security assessments',
        'Leading security strategy and operations for global SaaS platform',
      ],
    },
    {
      type: 'work',
      title: 'Senior Security Engineer',
      company: 'Oportun',
      period: '2023 - 2024',
      description: 'Enhanced the organization\'s security posture through the implementation of red teaming exercises, penetration testing, and various other offensive security initiatives. Managed Breach and Attack Simulation (BAS) exercises to identify and mitigate security vulnerabilities.',
      achievements: [
        'Implemented red teaming exercises and offensive security initiatives',
        'Managed Breach and Attack Simulation (BAS) exercises',
        'Conducted penetration testing and security assessments',
        'Enhanced overall security posture through continuous security validation',
      ],
    },
    {
      type: 'work',
      title: 'Technical Manager',
      company: 'Cyber SecurityWorks (CSW)',
      period: '2021 - 2023',
      description: 'Led team of 10+ security analysts performing advanced penetration testing, security audits, and threat hunting. Improved security posture of 150+ enterprise and government customers across 12+ countries. Notable contributions to finance ministries in UAE and Uganda.',
      achievements: [
        'Led team of 10+ security analysts',
        'Improved security for 150+ enterprise and government clients',
        'Led security audits for finance ministries (UAE, Uganda)',
        'Conducted security audits across 12+ countries',
        'Discovered 23 zero-day vulnerabilities (CVEs)',
        'Found critical business logic flaws in banking applications',
      ],
    },
    {
      type: 'work',
      title: 'Senior Security Analyst',
      company: 'Cyber SecurityWorks (CSW)',
      period: '2018 - 2021',
      description: 'Performed advanced penetration testing, web/network security audits, and vulnerability assessments. Audited web applications, networks, and mobile applications for enterprise and government clients. Conducted security reviews for various government projects across India.',
      achievements: [
        'Performed web/network security audits for government projects',
        'Conducted vulnerability assessments and penetration testing',
        'Trained 1,000+ police officers in mobile forensics',
        'Discovered multiple zero-day vulnerabilities',
      ],
    },
    {
      type: 'work',
      title: 'Security Analyst',
      company: 'Cyber SecurityWorks (CSW)',
      period: '2014 - 2018',
      description: 'Built and managed Security Operations Center, performed security audits, and conducted risk assessments. Performed penetration testing for web, mobile, and network security. Started career in offensive security and threat detection.',
      achievements: [
        'Built SOC from ground up',
        'Performed security audits for multiple Indian state governments',
        'Conducted black box testing covering 1000+ IP addresses',
        'Developed expertise in web, network, and mobile security',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-primary text-sm uppercase tracking-widest mb-4">
              {'// Experience'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Career <span className="text-primary text-glow">Timeline</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-background border-2 border-primary rounded-full z-10">
                  <div className="absolute inset-1 bg-primary rounded-full animate-pulse-glow" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className={`bg-card border rounded-xl transition-all duration-300 overflow-hidden ${
                    expandedIndex === index 
                      ? 'border-primary/50 shadow-lg' 
                      : 'border-primary/20 hover:border-primary/40'
                  }`}>
                    {/* Clickable Header */}
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full text-left p-6 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg transition-colors">
                          {exp.type === 'work' ? (
                            <Briefcase className="w-5 h-5 text-primary" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-semibold text-lg mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full font-mono text-xs text-primary">
                            {exp.period}
                          </div>
                        </div>
                        <div className="flex-shrink-0 pt-1">
                          {expandedIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {expandedIndex === index && (
                      <div className="px-6 pb-6 border-t border-primary/20 animate-in slide-in-from-top-2 duration-300">
                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed pt-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">
                            Key Achievements:
                          </p>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <span className="text-secondary">✓</span>
                                <span className="text-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
