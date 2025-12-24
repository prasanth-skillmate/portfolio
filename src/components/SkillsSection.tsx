import { useEffect, useState, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Penetration Testing', level: 95 },
    { name: 'Network Security', level: 90 },
    { name: 'Cloud Security (AWS/Azure/GCP)', level: 88 },
    { name: 'Incident Response', level: 92 },
    { name: 'Malware Analysis', level: 85 },
    { name: 'Security Architecture', level: 90 },
    { name: 'SIEM & Log Analysis', level: 87 },
    { name: 'Vulnerability Assessment', level: 93 },
  ];

  const tools = [
    'Kali Linux', 'Burp Suite', 'Metasploit', 'Wireshark',
    'Nmap', 'OWASP ZAP', 'Splunk', 'Nessus',
    'IDA Pro', 'Ghidra', 'Terraform', 'Docker',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-primary text-sm uppercase tracking-widest mb-4">
              {'// Skills & Tools'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Technical <span className="text-primary text-glow">Arsenal</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Bars */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary font-mono">{'>'}</span>
                Core Competencies
              </h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-foreground">{skill.name}</span>
                    <span className="font-mono text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Grid */}
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary font-mono">{'>'}</span>
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="p-3 bg-card border border-primary/20 rounded-lg text-center font-mono text-sm hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 cursor-default group"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s ease-out ${index * 50}ms`,
                    }}
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8 p-6 bg-card/50 border border-primary/20 rounded-xl">
                <h4 className="font-display font-semibold mb-4 text-primary">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {['CISSP', 'CEH', 'OSCP', 'CISM', 'GCIH', 'AWS Security', 'ISO 27001 Lead Auditor'].map((cert, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full font-mono text-xs text-primary hover:bg-primary/20 transition-colors"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
