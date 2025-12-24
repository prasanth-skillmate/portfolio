import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Shield, TrendingUp, Building2, CheckCircle2, BarChart3, Lock, AlertTriangle, Target, MessageCircle, ArrowRight, Users, Award, Globe, FileCheck, Clock, Code, User, Users2, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CorporatePage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // All items collapsed by default

  useEffect(() => {
    document.title = 'Sathish Kumar Balakrishnan | Enterprise Cybersecurity Solutions';
  }, []);

  const corporateServices = [
    {
      icon: Lock,
      problem: 'Your board is asking about security, and you don\'t have answers. Attackers could already be inside.',
      title: 'Penetration Testing & Assessments',
      solution: 'I find vulnerabilities before attackers do — including zero-days others miss',
      description: '11+ years conducting assessments. Discovered 23 CVEs. Found critical business logic flaws in banking apps that could cause huge financial loss. Performed black box testing covering 1000+ IP addresses.',
      features: ['Web, Network, Mobile, Wireless Testing', 'Business Logic Vulnerability Assessment', 'API Security Reviews'],
      outcome: 'Know exactly what\'s broken before attackers exploit it',
    },
    {
      icon: Shield,
      problem: 'You\'re fixing security issues after breaches happen. Your team is exhausted from constant firefighting.',
      title: 'Security Architecture',
      solution: 'I design security that prevents incidents from happening — based on 11+ years of finding vulnerabilities',
      description: 'Currently managing security architecture for global SaaS platform. Led security teams that improved posture for 150+ enterprise clients. Design frameworks that stop problems before they start.',
      features: ['Network Architectural Review', 'WAF/IPS/Firewall Security Review', 'Secure Configuration Review'],
      outcome: 'Stop firefighting. Build security that prevents incidents.',
    },
    {
      icon: BarChart3,
      problem: 'Your enterprise customers require SOC 2/ISO 27001, but you\'re not sure if you\'ll pass. Failed audits mean lost deals.',
      title: 'Compliance & Audit',
      solution: 'I ensure you pass audits the first time — ISO 27001 Lead Auditor with proven track record',
      description: 'Currently driving compliance (ISO 27001, SOC 2, GDPR, HIPAA) for global Data Analytics SaaS platform. Performed internal security audits for Ministry of Finance (Uganda). Ensured clean certifications and faster audit closure.',
      features: ['ISO 27001 Lead Auditor', 'SOC 2 Compliance', 'GDPR & HIPAA Compliance'],
      outcome: 'Pass audits the first time. Close enterprise deals faster.',
    },
    {
      icon: Building2,
      problem: 'Threats happen 24/7, but you can\'t watch everything. You need someone who knows how attackers actually think.',
      title: 'Security Operations (SOC)',
      solution: 'I monitor and detect threats around the clock — with expertise in threat hunting and APT attacks',
      description: 'Built SOC from ground up. Trained professionals in threat detection using Vectra, SentinelOne, CrowdStrike, Cortex XDR. Expert in Advanced Persistent Threat (APT) attacks and threat hunting.',
      features: ['SOC & Incident Response', 'Threat Hunting', 'SIEM Implementation'],
      outcome: 'Detect threats before they become breaches. Know what attackers are doing.',
    },
    {
      icon: CheckCircle2,
      problem: 'A breach just happened. Your team is panicking. You need someone who\'s handled this before and knows exactly what to do.',
      title: 'Incident Response',
      solution: 'I contain threats fast and minimize damage — trained 1,000+ police officers in forensics',
      description: 'Expert in digital forensics and incident response. Trained 1,000+ police officers in mobile forensics. Conducted red/blue teaming exercises. Know how to contain threats and recover quickly.',
      features: ['Threat Containment', 'Forensic Analysis', 'Recovery Planning'],
      outcome: 'Contain breaches fast. Minimize business impact. Get back to normal quickly.',
    },
    {
      icon: TrendingUp,
      problem: 'You need a security roadmap, but don\'t know where to start. Every consultant gives different advice.',
      title: 'Executive Security Advisory',
      solution: 'I provide the roadmap based on 11+ years finding vulnerabilities and managing security for 150+ clients',
      description: 'Led 10+ security analysts. Improved security posture for enterprises across 12+ countries. Currently managing security strategy for global SaaS platform. Provide clear direction based on real experience.',
      features: ['Risk Assessment & Management', 'Security Strategy', 'Threat Modeling Review'],
      outcome: 'Clear roadmap. Confident decisions. Security that actually works.',
    },
  ];

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <MatrixRain />
      <Navigation />

      {/* Hero Section - Corporate Focused */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-green-400/30 rounded-full mb-8 md:mb-12 backdrop-blur-sm">
              <Building2 className="w-4 h-4 text-green-400" />
              <span className="font-mono text-sm text-green-400">Enterprise Solutions</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 leading-tight">
              <span className="text-foreground">The security expert who discovered</span>
              <br />
              <span className="text-green-400 text-glow">23 zero-day vulnerabilities.</span>
              <br />
              <span className="text-foreground">Now securing your business.</span>
            </h1>

            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
              Currently managing security for global SaaS platform. Previously found critical flaws in banking apps and government systems.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto mb-8">
              <span className="text-green-400 font-semibold">150+ clients secured</span> • 
              <span className="text-green-400 font-semibold"> 12+ countries</span> • 
              <span className="text-green-400 font-semibold"> 11+ years</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-10 px-2">
              <a 
                href={`https://wa.me/919840969548?text=${encodeURIComponent("Hi, I saw your corporate page. Tell me which problems you're facing, and I'll show you which services solve them.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button
                variant="cyber"
                size="xl"
                  className="group w-full sm:w-auto bg-green-500 hover:bg-green-600"
              >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="whitespace-normal sm:whitespace-nowrap">Get Free Security Assessment</span>
              </Button>
              </a>
              <Button
                variant="cyber-outline"
                size="xl"
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto"
              >
                <span className="whitespace-normal sm:whitespace-nowrap">See How Services Work</span>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: '23', label: 'Zero-Days Discovered', icon: Award },
                { value: '150+', label: 'Enterprise Clients', icon: Building2 },
                { value: '12+', label: 'Countries Served', icon: Globe },
                { value: '11+', label: 'Years Experience', icon: Shield },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-card/30 border border-green-400/20 rounded-lg backdrop-blur-sm group hover:border-green-400/50 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5 justify-center md:justify-start">
                    <stat.icon className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 text-glow leading-none">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider text-center md:text-left">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Corporate Focus */}
      <section id="about" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block font-mono text-green-400 text-sm uppercase tracking-widest mb-4">
                {'// Why Companies Choose Me'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4 md:mb-5">
                Why companies choose me: <span className="text-green-400 text-glow">I find what others miss</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Join 150+ companies who secured their business. Sleep better knowing vulnerabilities are found and fixed before attackers exploit them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative space-y-6">
                {/* Profile Photo */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-green-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-green-400/30 ring-4 ring-green-400/10 shadow-2xl">
                      <img
                        src="/images/sathish-profile.png"
                        alt="Sathish Kumar Balakrishnan - Enterprise Security Architect"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Credibility Box */}
                <div className="relative">
                  <div className="bg-card border border-green-400/30 rounded-lg p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">23 Zero-Day Vulnerabilities Discovered</h3>
                        <p className="text-sm text-muted-foreground">
                          Found critical flaws in products like NETGEAR, WordPress, WSO2, and JasperSoft. 
                          Awarded cash prizes for discoveries that protected millions of users.
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-green-400/20 pt-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">Current Role:</span> Privacy and Information Security Manager (PISM) 
                        at <span className="text-green-400 font-semibold">e6data</span>, driving security governance & compliance for a global Data Analytics SaaS platform.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-400/10 border border-green-400/30 rounded text-xs font-mono text-green-400">
                          <Shield className="w-3 h-3" />
                          ISO 27001 Lead Auditor
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-400/10 border border-green-400/30 rounded text-xs font-mono text-green-400">
                          <Shield className="w-3 h-3" />
                          CEH
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-400/10 border border-green-400/30 rounded text-xs font-mono text-green-400">
                          <Award className="w-3 h-3" />
                          23 CVEs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {[
                    {
                      icon: Building2,
                      title: '150+ Enterprise Clients Across 12+ Countries',
                      description: 'Improved security posture for finance ministries (UAE, Uganda) and enterprises across banking, healthcare, and technology. Real results, not promises.',
                    },
                  {
                    icon: Shield,
                    title: 'Led 10+ Security Analysts',
                    description: 'Built and managed security teams, improved security posture for 150+ enterprise and government customers. Currently managing security for global SaaS platform.',
                  },
                  {
                    icon: FileCheck,
                    title: 'ISO 27001 Lead Auditor',
                    description: 'Driving security governance & compliance (ISO 27001, SOC 2, GDPR, HIPAA) for global Data Analytics SaaS platform. Ensured clean certifications and faster audit closure.',
                  },
                    {
                      icon: Award,
                      title: 'Found Critical Business Logic Flaws',
                      description: 'Discovered vulnerabilities in banking applications that could have caused $5M+ in losses. Performed black box testing covering 1000+ IP addresses. Fixed before attackers found them.',
                    },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card/30 border border-green-400/10 rounded-lg hover:border-green-400/40 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-green-400/10 rounded-lg group-hover:bg-green-400/20 transition-colors">
                      <item.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-green-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Corporate Services */}
      <section id="services" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block font-mono text-green-400 text-sm uppercase tracking-widest mb-4">
                {'// The Services You Actually Need'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                The <span className="text-green-400 text-glow">6 services</span> your company actually needs — all from one expert
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Each service solves a specific business problem. Stop hiring 5 vendors. Get everything you need from one expert who's proven it at scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {corporateServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-card border border-green-400/10 rounded-xl hover:border-green-400/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  {/* Problem */}
                  <div className="relative mb-4 flex items-start gap-3">
                    <div className="p-2 bg-red-500/10 rounded-lg flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-red-400 uppercase tracking-wider mb-1">Problem</p>
                      <p className="text-sm font-semibold text-foreground leading-relaxed mb-2">{service.problem}</p>
                      <p className="text-xs text-red-400/80 italic">Risk: {service.title.includes('Penetration') ? 'Breach could cost $4.45M+ (IBM 2023)' :
                        service.title.includes('Architecture') ? 'Reactive security costs 3x more than proactive' :
                        service.title.includes('Compliance') ? 'Failed audits mean lost deals, delayed funding' :
                        service.title.includes('SOC') ? 'Undetected threats become breaches within 30 days' :
                        service.title.includes('Incident') ? 'Every hour of delay increases breach cost by 10%' :
                        'Poor security strategy wastes budget, creates gaps'}</p>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="relative mb-4 flex items-start gap-3">
                    <div className="p-2 bg-green-400/10 rounded-lg flex-shrink-0">
                      <service.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-green-400 uppercase tracking-wider mb-1">Service</p>
                      <h3 className="text-lg font-display font-semibold mb-1 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.solution}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative text-sm text-muted-foreground mb-4 leading-relaxed pl-9">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="relative space-y-2 mb-4 pl-9">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div className="relative mt-4 pt-4 border-t border-green-400/20 pl-9">
                    <p className="text-xs font-mono text-green-400 uppercase tracking-wider mb-1">Outcome</p>
                    <p className="text-sm font-semibold text-green-400">{service.outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12 px-2">
              <a 
                href={`https://wa.me/919840969548?text=${encodeURIComponent("Hi, I reviewed your services. Which ones would solve my security problems?")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button
                  variant="cyber"
                size="lg"
                  className="group w-full sm:w-auto bg-green-500 hover:bg-green-600"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-center">Start Securing Your Business</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section id="differentiation" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block font-mono text-green-400 text-sm uppercase tracking-widest mb-4">
                {'// Why Me vs. Other Security Consultants'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                What <span className="text-green-400 text-glow">only I offer</span> — proven at scale
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Most consultants talk about security. I've discovered 23 zero-days, secured finance ministries, and currently manage security for global SaaS platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  metric: '23',
                  label: 'Zero-Days Discovered',
                  comparison: 'Verified CVEs (CVE database)',
                  icon: Award,
                  color: 'text-green-400',
                },
                {
                  metric: '150+',
                  label: 'Enterprise Clients Secured',
                  comparison: 'Including finance ministries (UAE, Uganda)',
                  icon: Building2,
                  color: 'text-blue-400',
                },
                {
                  metric: '12+',
                  label: 'Countries Served',
                  comparison: 'Government & enterprise clients globally',
                  icon: Globe,
                  color: 'text-purple-400',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-green-400/10 rounded-xl hover:border-green-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 ${item.color === 'text-green-400' ? 'bg-green-400/10' : item.color === 'text-blue-400' ? 'bg-blue-400/10' : 'bg-purple-400/10'} rounded-lg`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold ${item.color} mb-2 leading-none`}>
                    {item.metric}
                  </div>
                  <p className="font-semibold text-sm mb-2">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.comparison}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-green-400/20 rounded-xl">
                <h3 className="font-display font-semibold text-lg mb-4 text-green-400">
                  ✓ What Makes Me Different
                </h3>
                <ul className="space-y-3">
                  {[
                    'Currently managing security for global SaaS platform (not just consulting)',
                    'Led security audits for finance ministries in UAE and Uganda (government experience)',
                    'Discovered 23 CVEs in products like NETGEAR, WordPress, WSO2 (proven track record)',
                    'Found critical business logic flaws in banking apps (real-world impact)',
                    'Trained 1,000+ police officers in forensics (unique expertise)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-card border border-green-400/20 rounded-xl">
                <h3 className="font-display font-semibold text-lg mb-4 text-green-400">
                  ✓ Unique Credentials
                </h3>
                <ul className="space-y-3">
                  {[
                    '23 verified CVEs in products like NETGEAR, WordPress, WSO2 (CVE database)',
                    'Security audits for finance ministries in UAE and Uganda (government experience)',
                    'Currently managing security for global SaaS platform (hands-on, not just consulting)',
                    'Found critical business logic flaws in banking apps (real-world impact)',
                    'Trained 1,000+ police officers in mobile forensics (unique credential)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block font-mono text-green-400 text-sm uppercase tracking-widest mb-4">
                {'// Trusted By'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                Join <span className="text-green-400 text-glow">150+ companies</span> who secured their business
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                From finance ministries to SaaS startups — companies trust me to find vulnerabilities before attackers do
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Building2,
                  title: 'Finance Ministries',
                  description: 'Led security audits for Ministry of Finance in UAE and Uganda',
                  color: 'text-blue-400',
                },
                {
                  icon: Shield,
                  title: 'Enterprise Clients',
                  description: 'Improved security for 150+ enterprise clients across 12+ countries',
                  color: 'text-green-400',
                },
                {
                  icon: Award,
                  title: 'Global SaaS Platform',
                  description: 'Currently managing security for global Data Analytics SaaS platform',
                  color: 'text-purple-400',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-green-400/10 rounded-xl hover:border-green-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 ${item.color === 'text-blue-400' ? 'bg-blue-400/10' : item.color === 'text-green-400' ? 'bg-green-400/10' : 'bg-purple-400/10'} rounded-lg`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Note about testimonials */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground font-mono italic">
                {'// Client testimonials available upon request (NDA-protected engagements)'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why One Expert Section */}
      <section id="why-one-expert" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block font-mono text-green-400 text-sm uppercase tracking-widest mb-4">
                {'// Why One Expert Instead of Multiple Vendors'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                One person who understands your <span className="text-green-400 text-glow">entire security picture</span>
              </h2>
            </div>

            {/* Comparison Table */}
            <div className="mb-12 overflow-x-auto">
              <div className="min-w-full inline-block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-6 bg-green-400/10 border-2 border-green-400/50 rounded-xl">
                    <h3 className="font-display font-semibold text-xl mb-4 text-green-400 text-center">
                      ✓ One Expert (Me)
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'One point of contact',
                        'No vendor coordination overhead',
                        'Consistent methodology across all services',
                        'No gaps or handoffs between services',
                        'Save $50K+ annually',
                        'Faster decision-making',
                        'One person knows your entire security posture',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-red-400/10 border-2 border-red-400/50 rounded-xl">
                    <h3 className="font-display font-semibold text-xl mb-4 text-red-400 text-center">
                      ✗ Multiple Vendors
                    </h3>
                    <ul className="space-y-3">
                      {[
                        '5+ points of contact to manage',
                        'Coordination overhead and meetings',
                        'Different methodologies and standards',
                        'Gaps between services, handoff issues',
                        'Higher total cost ($50K+ more annually)',
                        'Slower decision-making (5 vendors to consult)',
                        'No one person knows your full security picture',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Shield,
                  title: 'No gaps between services',
                  description: 'Services work together seamlessly. No handoffs, no miscommunication, no blind spots.',
                },
                {
                  icon: Users,
                  title: 'One point of contact',
                  description: 'Instead of managing five vendors, you have one expert who knows your entire security posture.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Consistent approach',
                  description: 'Same methodology, same standards, same quality across all your security needs.',
                },
                {
                  icon: TrendingUp,
                  title: 'Save $50K+ annually vs. managing 5 vendors',
                  description: 'No vendor markup, no coordination overhead, no finger-pointing when issues arise. One expert who delivers everything you need at a fraction of the cost.',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card border border-green-400/10 rounded-xl hover:border-green-400/40 transition-all duration-300 group"
                >
                  <div className="p-3 bg-green-400/10 rounded-lg group-hover:bg-green-400/20 transition-colors flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section id="urgency" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 bg-card border border-red-400/30 rounded-xl">
              <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold font-display mb-3">
                Most companies wait until <span className="text-red-400">after a breach</span>. Don't be one of them.
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3 leading-relaxed">
                <span className="font-semibold text-foreground">Average breach costs $4.45M</span> (IBM 2023). 
                Most breaches happen within 30 days of vulnerability discovery. I've found critical flaws 
                in banking apps, government systems, and enterprise platforms. Your systems could have similar issues right now.
              </p>
              <p className="text-xs md:text-sm font-semibold text-red-400 mb-4">
                Every day you wait is another day attackers can exploit vulnerabilities.
              </p>
              <p className="text-xs md:text-sm font-semibold text-foreground mb-4">
                Currently accepting new clients. Book your security assessment now.
              </p>
              <a 
                href={`https://wa.me/919840969548?text=${encodeURIComponent("Hi, I need a security assessment. Can we discuss?")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="cyber"
                  size="lg"
                  className="group bg-red-500 hover:bg-red-600"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Book Your Security Assessment
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block font-mono text-green-400 text-sm uppercase tracking-widest mb-4">
                {'// What Companies Like Yours Get'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                Real-world <span className="text-green-400 text-glow">combinations</span> that work
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Banking Application Security Audit',
                  company: 'Leading Financial Services Company',
                  problem: 'Critical business logic flaws could allow unauthorized transactions, causing millions in losses.',
                  services: 'Penetration Testing + Business Logic Assessment',
                  result: 'Found 3 critical business logic flaws that could have caused $5M+ in losses. Fixed before attackers discovered them. Passed regulatory audit.',
                  metrics: '3 critical flaws found | $5M+ potential loss prevented',
                },
                {
                  title: 'SaaS Platform SOC 2 Compliance',
                  company: 'Data Analytics SaaS Startup',
                  problem: 'Enterprise customers require SOC 2. Need to pass audit in 3 months for Series A funding.',
                  services: 'SOC 2 Compliance + Security Architecture',
                  result: 'Achieved SOC 2 Type II certification in 3 months (industry avg: 6 months). Closed $2M enterprise deal. Successfully raised Series A.',
                  metrics: 'SOC 2 in 3 months | $2M deal closed',
                },
                {
                  title: 'Government Finance Ministry Security',
                  company: 'Ministry of Finance (UAE)',
                  problem: 'Web application handling tax certificates needs security audit. Critical for citizen trust and data protection.',
                  services: 'Web Application Security Assessment + Compliance Review',
                  result: 'Identified and fixed critical vulnerabilities. Improved security posture. Passed government security standards. Protected citizen data.',
                  metrics: 'Government audit passed | Critical vulnerabilities fixed',
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-green-400/10 rounded-xl hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="mb-3">
                    <h3 className="font-display font-semibold text-lg mb-1 text-green-400">
                      {useCase.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground">{useCase.company}</p>
                  </div>
                  <p className="text-xs font-semibold text-red-400 mb-2">Problem:</p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {useCase.problem}
                  </p>
                  <p className="text-xs font-semibold text-red-400 mb-1">Risk if ignored:</p>
                  <p className="text-xs text-muted-foreground mb-3 italic">
                    {useCase.title.includes('Banking') ? 'Potential $5M+ in losses, regulatory fines, customer trust loss' :
                     useCase.title.includes('SaaS') ? 'Lost enterprise deals, failed Series A, competitive disadvantage' :
                     'Citizen data breach, government trust loss, regulatory penalties'}
                  </p>
                  <p className="text-xs font-semibold text-green-400 mb-1">Services:</p>
                  <p className="text-sm font-mono text-muted-foreground mb-3">
                    {useCase.services}
                  </p>
                  <p className="text-xs font-semibold text-green-400 mb-1">Result:</p>
                  <p className="text-sm text-foreground leading-relaxed font-medium mb-3">
                    {useCase.result}
                  </p>
                  <div className="pt-3 border-t border-green-400/20">
                    <p className="text-xs font-mono text-green-400 font-semibold">
                      {useCase.metrics}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey & Experience - Expandable Clean Format */}
      <section id="experience" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block font-mono text-green-400 text-sm uppercase tracking-widest mb-3 md:mb-4">
                {'// Career Journey & Experience'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-2 md:mb-3">
                <span className="text-green-400 text-glow">11+ Years</span> of Security Excellence
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Click on any role to see detailed achievements and responsibilities
              </p>
            </div>

            {/* Clean Vertical List - Expandable */}
            <div className="space-y-4 md:space-y-5">
              {[
                {
                  year: '2024 - Present',
                  title: 'Privacy and Information Security Manager (PISM)',
                  company: 'e6data',
                  icon: Clock,
                  shortDescription: 'Responsible for security deliverables including architecture, principles, risk management, compliance, and penetration testing',
                  fullDescription: 'Responsible for security deliverables which include but not limited to architecture, principles, risk management, compliance, and penetration testing to ensure the organization\'s security posture. Driving security governance & compliance (ISO 27001, SOC 2, GDPR, HIPAA) for a global Data Analytics SaaS platform.',
                  achievements: [
                    'Managing security architecture, principles, and risk management',
                    'Ensuring ISO 27001, SOC 2, GDPR, HIPAA compliance',
                    'Conducting penetration testing and security assessments',
                    'Leading security strategy and operations for global SaaS platform',
                  ],
                },
                {
                  year: '2023 - 2024',
                  title: 'Senior Security Engineer',
                  company: 'Oportun',
                  icon: Zap,
                  shortDescription: 'Enhanced security posture through red teaming exercises, penetration testing, and offensive security initiatives',
                  fullDescription: 'Enhanced the organization\'s security posture through the implementation of red teaming exercises, penetration testing, and various other offensive security initiatives. Managed Breach and Attack Simulation (BAS) exercises to identify and mitigate security vulnerabilities.',
                  achievements: [
                    'Implemented red teaming exercises and offensive security initiatives',
                    'Managed Breach and Attack Simulation (BAS) exercises',
                    'Conducted penetration testing and security assessments',
                    'Enhanced overall security posture through continuous security validation',
                  ],
                },
                {
                  year: '2021 - 2023',
                  title: 'Technical Manager',
                  company: 'Cyber SecurityWorks (CSW)',
                  icon: Users2,
                  shortDescription: 'Led team of 10+ security analysts, improved security for 150+ clients across 12+ countries',
                  fullDescription: 'Led team of 10+ security analysts performing advanced penetration testing, security audits, and threat hunting. Improved security posture of 150+ enterprise and government customers across 12+ countries. Notable contributions to finance ministries in UAE and Uganda. Managed security operations and threat detection.',
                  achievements: [
                    'Led team of 10+ security analysts',
                    'Improved security for 150+ enterprise and government clients',
                    'Led security audits for finance ministries (UAE, Uganda)',
                    'Conducted security audits across 12+ countries',
                    'Discovered 23 zero-day vulnerabilities (CVEs)',
                    'Found critical business logic flaws in banking applications',
                    'Managed security operations and threat detection',
                  ],
                },
                {
                  year: '2018 - 2021',
                  title: 'Senior Security Analyst',
                  company: 'Cyber SecurityWorks (CSW)',
                  icon: Code,
                  shortDescription: 'Audited web applications, networks, and mobile applications for enterprise and government clients',
                  fullDescription: 'Performed advanced penetration testing, web/network security audits, and vulnerability assessments. Audited web applications, networks, and mobile applications for enterprise and government clients. Conducted security reviews for various government projects across India.',
                  achievements: [
                    'Performed web/network security audits for government projects',
                    'Conducted vulnerability assessments and penetration testing',
                    'Trained 1,000+ police officers in mobile forensics',
                    'Discovered multiple zero-day vulnerabilities',
                  ],
                },
                {
                  year: '2014 - 2018',
                  title: 'Security Analyst',
                  company: 'Cyber SecurityWorks (CSW)',
                  icon: User,
                  shortDescription: 'Performed penetration testing for web, mobile, and network security',
                  fullDescription: 'Built and managed Security Operations Center, performed security audits, and conducted risk assessments. Performed penetration testing for web, mobile, and network security. Started career in offensive security and threat detection.',
                  achievements: [
                    'Built SOC from ground up',
                    'Performed security audits for multiple Indian state governments',
                    'Conducted black box testing covering 1000+ IP addresses',
                    'Developed expertise in web, network, and mobile security',
                  ],
                },
              ].map((item, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <div
                    key={index}
                    className={`bg-card border rounded-xl transition-all duration-300 overflow-hidden ${
                      isExpanded 
                        ? 'border-green-400/50 shadow-lg' 
                        : 'border-green-400/20 hover:border-green-400/40'
                    }`}
                  >
                    {/* Clickable Header */}
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="w-full text-left p-5 md:p-6 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          {/* Year Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full mb-3">
                            <item.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="font-mono text-xs font-semibold text-green-400">
                              {item.year}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="font-display font-semibold text-base md:text-lg lg:text-xl mb-1.5 text-foreground">
                            {item.title}
                          </h3>
                          
                          {/* Company */}
                          <p className="text-sm md:text-base font-semibold text-green-400 mb-2">
                            {item.company}
                          </p>

                          {/* Short Description - Always Visible */}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.shortDescription}
                          </p>
                        </div>

                        {/* Expand/Collapse Icon */}
                        <div className="flex-shrink-0 pt-1">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-green-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-green-400" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-green-400/20 animate-in slide-in-from-top-2 duration-300">
                        {/* Full Description */}
                        <p className="text-sm md:text-base text-muted-foreground mb-5 leading-relaxed pt-4">
                          {item.fullDescription}
                        </p>

                        {/* Key Achievements */}
                        <div>
                          <p className="text-xs font-semibold text-green-400 mb-3 uppercase tracking-wider">
                            Key Achievements:
                          </p>
                          <ul className="space-y-2.5">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground">
                                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default CorporatePage;

