import { 
  Shield, 
  Search, 
  Lock, 
  Server, 
  Users, 
  FileWarning,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before malicious actors do.',
      features: ['Web Application Testing', 'Network Penetration', 'API Security Testing'],
    },
    {
      icon: Shield,
      title: 'Security Architecture',
      description: 'Design and implement robust security frameworks tailored to your organization.',
      features: ['Zero Trust Design', 'Cloud Security', 'Infrastructure Hardening'],
    },
    {
      icon: FileWarning,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security breaches.',
      features: ['Threat Containment', 'Forensic Analysis', 'Recovery Planning'],
    },
    {
      icon: Lock,
      title: 'Compliance & Audit',
      description: 'Ensure your organization meets industry security standards and regulations.',
      features: ['ISO 27001', 'SOC 2', 'GDPR Compliance'],
    },
    {
      icon: Server,
      title: 'Security Operations',
      description: '24/7 monitoring and threat detection to protect your digital assets.',
      features: ['SIEM Management', 'Threat Hunting', 'Log Analysis'],
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Empower your team with knowledge to recognize and prevent cyber threats.',
      features: ['Phishing Simulation', 'Security Awareness', 'Executive Training'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-primary text-sm uppercase tracking-widest mb-4">
              {'// Services'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Security <span className="text-primary text-glow">Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive cybersecurity services designed to protect, detect, and respond to modern threats.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 bg-card border border-primary/10 rounded-xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                
                {/* Icon */}
                <div className="relative mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="relative space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <button className="relative inline-flex items-center gap-1 text-primary text-sm font-mono group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              variant="cyber-outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discuss Your Security Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
