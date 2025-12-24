import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MatrixRain from '@/components/MatrixRain';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const AudienceSelector = () => {
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
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 relative z-10 pt-12 md:pt-16 pb-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            {/* Profile Photo */}
            <div className="mb-4 md:mb-6 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 ring-4 ring-primary/10">
                  <img
                    src="/images/sathish-profile.png"
                    alt="Sathish Kumar Balakrishnan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-3 md:mb-4 leading-tight">
              <span className="text-foreground">Sathish Kumar</span>
              <br />
              <span className="text-primary text-glow">Balakrishnan</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-2">
              Cybersecurity Expert & Security Architect
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Choose your perspective to explore my portfolio tailored for your needs
            </p>
          </div>

          {/* Audience Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-4">
            {audiences.map((audience, index) => (
              <Link
                key={index}
                to={audience.path}
                className="group relative p-5 md:p-6 bg-card/50 border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.bgColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                
                {/* Icon */}
                <div className={`relative mb-4 inline-flex p-3 ${audience.bgColor} ${audience.borderColor} border rounded-lg group-hover:scale-110 transition-transform`}>
                  <audience.icon className={`w-6 h-6 md:w-7 md:h-7 ${audience.color}`} />
                </div>

                {/* Content */}
                <h3 className={`relative text-lg md:text-xl font-display font-semibold mb-2 md:mb-3 ${audience.color} group-hover:text-glow transition-colors`}>
                  {audience.title}
                </h3>
                <p className="relative text-muted-foreground text-xs md:text-sm leading-relaxed mb-4">
                  {audience.description}
                </p>

                {/* CTA */}
                <div className="relative flex items-center justify-center gap-2 text-primary font-mono text-xs md:text-sm group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-xs text-muted-foreground font-mono">
            {'// Select an audience to view customized content'}
          </p>
        </div>
      </div>
      <WhatsAppFloat />
    </main>
  );
};

export default AudienceSelector;

