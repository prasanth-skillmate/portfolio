import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const SecuritySolutionsSection = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: 'College & Academic',
      description: 'For universities, colleges, and educational institutions. Focus on teaching, research, and academic collaboration.',
      path: '/college',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
    },
    {
      icon: Briefcase,
      title: 'Corporate & Enterprise',
      description: 'For businesses and organizations. Focus on security solutions, ROI, and enterprise-grade protection.',
      path: '/corporate',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
    },
    {
      icon: Users,
      title: 'Students & Learners',
      description: 'For students and aspiring cybersecurity professionals. Focus on learning, mentorship, and career guidance.',
      path: '/student',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-primary text-sm uppercase tracking-widest mb-4">
              {'// Security Solutions'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Tailored <span className="text-primary text-glow">Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Select your organization type to explore services customized for your needs
            </p>
          </div>

          {/* Audience Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <Link
                key={index}
                to={audience.path}
                className="group relative p-6 bg-card border border-primary/10 rounded-xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.bgColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                
                {/* Icon */}
                <div className={`relative mb-4 inline-flex p-3 ${audience.bgColor} ${audience.borderColor} border rounded-lg group-hover:scale-110 transition-transform`}>
                  <audience.icon className={`w-6 h-6 ${audience.color}`} />
                </div>

                {/* Content */}
                <h3 className={`relative text-xl font-display font-semibold mb-3 ${audience.color} group-hover:text-glow transition-colors`}>
                  {audience.title}
                </h3>
                <p className="relative text-muted-foreground text-sm mb-4 leading-relaxed">
                  {audience.description}
                </p>

                {/* CTA Link */}
                <div className="relative inline-flex items-center gap-2 text-primary text-sm font-mono group-hover:gap-3 transition-all">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              Not sure which category fits you?
            </p>
            <Button
              variant="cyber-outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me to Discuss Your Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutionsSection;

