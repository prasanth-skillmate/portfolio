import { useEffect, useState } from 'react';
import { Shield, Lock, Terminal, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Cybersecurity Expert',
    'Penetration Tester',
    'Security Architect',
    'Threat Hunter',
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting && charIndex <= currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 100);
      } else if (!isDeleting && charIndex > currentRole.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayText(currentRole.substring(0, charIndex));
        charIndex--;
        timeout = setTimeout(type, 50);
      } else {
        isDeleting = false;
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 ring-4 ring-primary/10">
                <img
                  src="/images/sathish-profile.png"
                  alt="Sathish Kumar Balakrishnan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Terminal Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-primary/30 rounded-full mb-6 md:mb-8 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">root@security:~$</span>
            <span className="font-mono text-sm text-muted-foreground">whoami</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary text-glow glitch">Sathish Kumar</span>
            <br />
            <span className="text-foreground">Balakrishnan</span>
          </h1>

          {/* Animated Role */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-3xl font-mono text-secondary">
              {'> '}{displayText}
              <span className="typing-cursor" />
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Protecting digital assets and fortifying cyber defenses with 
            <span className="text-primary"> cutting-edge security solutions</span>. 
            Your trusted partner in the battle against cyber threats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="cyber"
              size="xl"
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              <Shield className="w-5 h-5 group-hover:animate-pulse" />
              Secure Your Systems
            </Button>
            <Button
              variant="cyber-outline"
              size="xl"
              onClick={() => scrollToSection('#services')}
            >
              <Lock className="w-5 h-5" />
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Security Audits' },
              { value: '99.9%', label: 'Threat Detection' },
              { value: '24/7', label: 'Monitoring' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-card/30 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary text-glow group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
