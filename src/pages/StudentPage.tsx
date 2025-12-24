import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { BookOpen, Lightbulb, Target, Users, GraduationCap, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StudentPage = () => {
  useEffect(() => {
    document.title = 'Sathish Kumar Balakrishnan | Student Resources & Career Guidance';
  }, []);

  const studentResources = [
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Curated resources to help you learn cybersecurity from basics to advanced topics.',
      features: ['Free Tutorials', 'Practice Labs', 'Study Guides', 'Video Content'],
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Get advice on building your cybersecurity career path and landing your dream job.',
      features: ['Career Roadmaps', 'Resume Reviews', 'Interview Prep', 'Job Search Tips'],
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Connect with an experienced professional for personalized guidance and support.',
      features: ['1-on-1 Sessions', 'Career Advice', 'Skill Development', 'Networking Tips'],
    },
    {
      icon: GraduationCap,
      title: 'Certification Prep',
      description: 'Resources and guidance to help you prepare for industry certifications.',
      features: ['CEH Study Guide', 'OSCP Prep Tips', 'CISSP Resources', 'Exam Strategies'],
    },
    {
      icon: Code,
      title: 'Hands-On Projects',
      description: 'Real-world projects to build your portfolio and practical skills.',
      features: ['CTF Challenges', 'Lab Exercises', 'Portfolio Projects', 'GitHub Resources'],
    },
    {
      icon: Rocket,
      title: 'Getting Started',
      description: 'Begin your cybersecurity journey with step-by-step guidance for beginners.',
      features: ['First Steps Guide', 'Essential Skills', 'Tools to Learn', 'Learning Path'],
    },
  ];

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <MatrixRain />
      <Navigation />

      {/* Hero Section - Student Focused */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-purple-400/30 rounded-full mb-8 md:mb-12 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span className="font-mono text-sm text-purple-400">Student Resources</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
              <span className="text-foreground">Your Journey to</span>
              <br />
              <span className="text-purple-400 text-glow">Cybersecurity Success</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Learn from someone who's been where you are. Get free resources, career guidance, 
              and mentorship to kickstart your cybersecurity career.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16 px-2">
              <Button
                variant="cyber"
                size="xl"
                onClick={() => {
                  const element = document.querySelector('#resources');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group w-full sm:w-auto"
              >
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
                <span className="whitespace-normal sm:whitespace-nowrap">Explore Resources</span>
              </Button>
              <a
                href="https://skillmate.ai/sathish"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="cyber-outline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">Get Mentorship</span>
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { value: '7k', label: 'Students Helped' },
                { value: '50+', label: 'Free Resources' },
                { value: '11+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-card/30 border border-purple-400/20 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 text-glow">
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
      </section>

      {/* About Section - Student Focus */}
      <section id="about" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block font-mono text-purple-400 text-sm uppercase tracking-widest mb-4">
                {'// My Story'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                From Student to <span className="text-purple-400 text-glow">Security Expert</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative space-y-6">
                {/* Profile Photo */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-purple-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-purple-400/30 ring-4 ring-purple-400/10 shadow-2xl">
                      <img
                        src="/images/sathish-profile.png"
                        alt="Sathish Kumar Balakrishnan - Cybersecurity Mentor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Terminal Window */}
                <div className="relative">
                  <div className="bg-card border border-purple-400/30 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-purple-400/20">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-purple-400" />
                      <span className="ml-2 font-mono text-xs text-muted-foreground">my_journey.sh</span>
                    </div>
                    
                    <div className="p-6 font-mono text-sm space-y-3">
                      <p><span className="text-secondary">$</span> <span className="text-purple-400">cat</span> student_story.txt</p>
                      <p className="text-muted-foreground pl-4">
                        I started just like you - passionate about cybersecurity but unsure where to begin. 
                        Through years of learning, certifications, and real-world experience, I've built 
                        a successful career. Now I want to help you do the same!
                      </p>
                      <p><span className="text-secondary">$</span> <span className="text-purple-400">echo</span> $MISSION</p>
                      <p className="text-muted-foreground pl-4">
                        "To make cybersecurity education accessible and help students 
                        avoid the mistakes I made along the way."
                      </p>
                      <p><span className="text-secondary">$</span> <span className="text-purple-400">ls</span> certifications/</p>
                      <p className="text-muted-foreground pl-4">
                        CISSP | CEH | OSCP | CISM | GCIH | AWS Security
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Lightbulb,
                    title: 'Learn from Experience',
                    description: 'Get insights from 11+ years in the industry',
                  },
                  {
                    icon: Target,
                    title: 'Clear Career Path',
                    description: 'Understand what it takes to succeed in cybersecurity',
                  },
                  {
                    icon: Users,
                    title: 'Community Support',
                    description: 'Connect with other students and professionals',
                  },
                  {
                    icon: Rocket,
                    title: 'Practical Learning',
                    description: 'Hands-on projects and real-world scenarios',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card/30 border border-purple-400/10 rounded-lg hover:border-purple-400/40 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-purple-400/10 rounded-lg group-hover:bg-purple-400/20 transition-colors">
                      <item.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-purple-400 transition-colors">
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

      {/* Resources Section */}
      <section id="resources" className="py-20 md:py-32 relative bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block font-mono text-purple-400 text-sm uppercase tracking-widest mb-4">
                {'// Free Resources'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Student <span className="text-purple-400 text-glow">Resources</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Everything you need to start and grow your cybersecurity career
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentResources.map((resource, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-card border border-purple-400/10 rounded-xl hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative mb-4 inline-flex p-3 bg-purple-400/10 rounded-lg group-hover:bg-purple-400/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-purple-400" />
                  </div>

                  <h3 className="relative text-xl font-display font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="relative text-muted-foreground text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <ul className="relative space-y-2">
                    {resource.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12 px-2">
              <a
                href="https://skillmate.ai/sathish"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto max-w-full"
              >
                <Button
                  variant="cyber-outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <span className="text-center">Get Free Resources & Mentorship</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block font-mono text-purple-400 text-sm uppercase tracking-widest mb-4">
                {'// Career Tips'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Tips for <span className="text-purple-400 text-glow">Success</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Start with Fundamentals',
                  description: 'Build a strong foundation in networking, operating systems, and programming before diving into advanced topics.',
                  tip: 'Master the basics - they never go out of style!',
                },
                {
                  title: 'Get Hands-On Experience',
                  description: 'Set up a home lab, practice with CTF challenges, and work on real projects. Theory alone won\'t get you far.',
                  tip: 'Practice > Theory. Build, break, and learn!',
                },
                {
                  title: 'Earn Certifications',
                  description: 'Start with entry-level certs (Security+, CEH) and work your way up. They validate your knowledge to employers.',
                  tip: 'Certifications open doors - but experience keeps them open.',
                },
                {
                  title: 'Build Your Network',
                  description: 'Join cybersecurity communities, attend conferences, and connect with professionals. Your network is your net worth.',
                  tip: 'The cybersecurity community is welcoming - don\'t be afraid to reach out!',
                },
                {
                  title: 'Stay Curious',
                  description: 'Cybersecurity evolves rapidly. Follow security news, read blogs, and never stop learning.',
                  tip: 'The day you stop learning is the day you become obsolete.',
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-purple-400/20 rounded-xl hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-purple-400/10 rounded-lg">
                      <Lightbulb className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {tip.description}
                      </p>
                      <p className="text-purple-400 text-sm font-mono italic">
                        💡 {tip.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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

export default StudentPage;

