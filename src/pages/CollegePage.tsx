import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Presentation, 
  FileText,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  Globe,
  MapPin,
  Clock,
  Target,
  Code,
  Shield,
  Briefcase,
  Zap,
  ArrowRight,
  Building2,
  Laptop,
  Trophy,
  MoreHorizontal,
  TrendingUp,
  HelpCircle,
  CheckCircle,
  X
} from 'lucide-react';

const CollegePage = () => {
  useEffect(() => {
    document.title = 'Sathish Kumar Balakrishnan | Cyber Security Programs for Colleges';
  }, []);

  const whatsappUrl = 'https://wa.me/919840969548?text=Hi%20Sathish%2C%20we%20need%20cyber%20security%20training%20for%20our%20college.%20Can%20we%20discuss%3F';
  const callUrl = 'tel:+919840969548';
  const emailUrl = 'mailto:cybersecure8@gmail.com?subject=Cyber%20Security%20Training%20Request%20-%20College';

  // Program Library Data
  const programLevels = [
    {
      id: 'level1',
      title: 'LEVEL 1 – FOUNDATIONS OF CYBER SECURITY',
      subtitle: 'Beginner',
      audience: 'For 1st–2nd year students / non-security background',
      topics: [
        {
          number: 1,
          title: 'Cyber Security Fundamentals',
          content: [
            'What is Cyber Security? Why it matters today',
            'CIA Triad (Confidentiality, Integrity, Availability)',
            'Threats vs Vulnerabilities vs Risks',
            'Cyber kill chain (how attacks actually happen)',
            'Common myths about cybersecurity careers'
          ]
        },
        {
          number: 2,
          title: 'Computer & OS Fundamentals (Security Perspective)',
          content: [
            'How computers really work',
            'Windows & Linux internals (high level)',
            'Users, permissions, processes, memory',
            'Why misconfiguration causes breaches'
          ]
        },
        {
          number: 3,
          title: 'Networking Essentials for Security',
          content: [
            'OSI & TCP/IP models (security relevance)',
            'IP addressing, ports, protocols',
            'DNS, HTTP/HTTPS – how data flows',
            'Introduction to firewalls & proxies'
          ]
        },
        {
          number: 4,
          title: 'Introduction to Cyber Attacks',
          content: [
            'Malware, phishing, ransomware',
            'Password attacks',
            'Website hacks (high-level)',
            'Real breach stories explained simply'
          ]
        },
        {
          number: 5,
          title: 'Ethics, Responsibility & Cyber Awareness',
          content: [
            'Ethical vs illegal hacking',
            'Cyber laws & student responsibilities',
            'Safe internet practices',
            'Responsible disclosure'
          ]
        }
      ],
      outcome: 'Students understand how attacks happen and why security exists.'
    },
    {
      id: 'level2',
      title: 'LEVEL 2 – CORE SECURITY SKILLS',
      subtitle: 'Intermediate',
      audience: 'For 2nd–3rd year students / serious learners',
      topics: [
        {
          number: 6,
          title: 'Linux for Cyber Security',
          content: [
            'Linux fundamentals',
            'File systems, permissions, processes',
            'Bash basics for security automation',
            'Using Linux as a security professional'
          ]
        },
        {
          number: 7,
          title: 'Security Networking (Hands-On)',
          content: [
            'Network scanning & enumeration',
            'Packet analysis (Wireshark)',
            'Firewalls, IDS/IPS basics',
            'VPN concepts and tunneling'
          ]
        },
        {
          number: 8,
          title: 'Cryptography & Secure Communication',
          content: [
            'Encryption vs hashing vs encoding',
            'Symmetric & asymmetric encryption',
            'Digital certificates & PKI',
            'HTTPS explained practically'
          ]
        },
        {
          number: 9,
          title: 'Web Application Security',
          content: [
            'How websites work (frontend + backend)',
            'OWASP Top 10 vulnerabilities',
            'SQL Injection, XSS, CSRF',
            'Secure coding principles'
          ]
        },
        {
          number: 10,
          title: 'Ethical Hacking Methodology',
          content: [
            'Reconnaissance',
            'Scanning & enumeration',
            'Exploitation basics',
            'Post-exploitation concepts',
            'Reporting & documentation'
          ]
        },
        {
          number: 11,
          title: 'Security Tools Exposure',
          content: [
            'Kali Linux ecosystem',
            'Nmap, Burp Suite, Metasploit',
            'Vulnerability scanners',
            'Password testing tools'
          ]
        }
      ],
      outcome: 'Students can think like attackers and defenders.'
    },
    {
      id: 'level3',
      title: 'LEVEL 3 – ADVANCED & SPECIALIZED DOMAINS',
      subtitle: 'Advanced',
      audience: 'Final year / PG / serious security aspirants',
      topics: [
        {
          number: 12,
          title: 'Advanced Web & API Security',
          content: [
            'Business logic flaws',
            'Authentication & authorization issues',
            'API security testing',
            'Secure design mistakes'
          ]
        },
        {
          number: 13,
          title: 'Cloud Security (AWS / Azure / GCP Concepts)',
          content: [
            'Shared responsibility model',
            'Cloud IAM & misconfigurations',
            'Storage security (S3, blobs)',
            'Container & Kubernetes basics'
          ]
        },
        {
          number: 14,
          title: 'Mobile Application Security',
          content: [
            'Android & iOS architecture',
            'Mobile threat landscape',
            'Static & dynamic analysis',
            'Secure mobile development practices'
          ]
        },
        {
          number: 15,
          title: 'Malware Analysis & Threat Intelligence',
          content: [
            'Types of malware',
            'Static vs dynamic analysis',
            'Sandboxing concepts',
            'Threat actor behavior'
          ]
        },
        {
          number: 16,
          title: 'Digital Forensics & Incident Response',
          content: [
            'Incident lifecycle',
            'Evidence collection',
            'Log analysis',
            'Root cause analysis',
            'Post-incident reporting'
          ]
        },
        {
          number: 17,
          title: 'SOC Operations & Blue Teaming',
          content: [
            'SIEM basics',
            'Log monitoring & alerts',
            'Detection engineering concepts',
            'Security monitoring workflows'
          ]
        },
        {
          number: 18,
          title: 'Identity, Access & Zero Trust',
          content: [
            'Authentication & authorization models',
            'MFA, SSO concepts',
            'Privileged access risks',
            'Zero Trust principles'
          ]
        },
        {
          number: 19,
          title: 'Governance, Risk & Compliance (GRC)',
          content: [
            'Risk assessment',
            'Policies & standards',
            'ISO 27001, SOC 2, GDPR overview',
            'Audit readiness mindset'
          ]
        }
      ],
      outcome: 'Students are industry-ready across multiple security roles.'
    },
    {
      id: 'level4',
      title: 'LEVEL 4 – INDUSTRY READINESS & CAREER TRACKS',
      subtitle: 'Career Focus',
      audience: 'Final year / Placement ready students',
      topics: [
        {
          number: 20,
          title: 'Career Paths in Cyber Security',
          content: [
            'Penetration Tester',
            'SOC Analyst',
            'Security Engineer',
            'Cloud Security',
            'GRC & Compliance',
            'AppSec & DevSecOps'
          ]
        },
        {
          number: 21,
          title: 'Resume, Portfolio & Interview Prep',
          content: [
            'Security resume building',
            'GitHub & lab portfolios',
            'Real-world project showcase',
            'Interview questions & scenarios'
          ]
        },
        {
          number: 22,
          title: 'Certifications Mapping (Optional)',
          content: [
            'CEH, Security+, OSCP (conceptual mapping)',
            'Cloud security certs',
            'GRC certifications',
            '(No exam-centric teaching — skill-centric approach)'
          ]
        }
      ],
      outcome: 'Students are placement-ready with clear career direction.'
    }
  ];

  const supportServices = [
    {
      icon: Presentation,
      title: 'Workshops',
      duration: '1–3 days',
      description: 'Build practical skills students can use immediately',
      details: 'Focused sessions on specific cybersecurity topics'
    },
    {
      icon: Zap,
      title: 'Bootcamps',
      duration: '5–10 days',
      description: 'Transform beginners into confident security practitioners',
      details: 'Intensive hands-on training programs'
    },
    {
      icon: BookOpen,
      title: 'Credit Courses',
      duration: '30/40/60 hours',
      description: 'Earn credits while building industry-ready skills',
      details: 'Structured courses that fit your curriculum'
    },
    {
      icon: GraduationCap,
      title: 'Semester Programs',
      duration: 'Full semester',
      description: 'Comprehensive programs that prepare students for placements',
      details: 'Comprehensive semester-long programs'
    },
    {
      icon: Users,
      title: 'FDP',
      duration: 'Custom',
      description: 'Enable your staff to deliver cutting-edge cybersecurity education',
      details: 'Train your faculty to deliver cybersecurity education'
    },
    {
      icon: Laptop,
      title: 'Lab Setup Guidance',
      duration: 'Ongoing',
      description: 'Create industry-standard cybersecurity labs for hands-on learning',
      details: 'Complete guidance for setting up cybersecurity labs'
    },
    {
      icon: Target,
      title: 'Mentorship & Career Readiness',
      duration: 'Ongoing',
      description: 'Prepare students for successful cybersecurity careers',
      details: 'Personalized mentorship for student success'
    },
    {
      icon: Briefcase,
      title: 'Internships + Real-Time Projects',
      duration: 'Custom',
      description: 'Give students real-world experience that employers value',
      details: 'Live projects and internship opportunities'
    },
    {
      icon: FileText,
      title: 'Final Year Projects',
      duration: 'Custom',
      description: 'Guide students to create portfolio-worthy cybersecurity projects',
      details: 'Support for final year cybersecurity projects'
    },
    {
      icon: Award,
      title: 'Jury & Evaluation',
      duration: 'On request',
      description: 'Provide expert evaluation and feedback on student work',
      details: 'Serve as jury for projects, competitions, and evaluations'
    },
    {
      icon: Trophy,
      title: 'Cyber Competitions',
      duration: 'Custom',
      description: 'Organize events that showcase student talent and build college reputation',
      details: 'Organize and judge cybersecurity competitions and events'
    },
    {
      icon: MoreHorizontal,
      title: 'Other Requirements',
      duration: 'Custom',
      description: 'Have a unique requirement? Let\'s discuss. I\'m just a call away',
      details: 'Custom cybersecurity solutions for specific college requirements'
    }
  ];

  const deliveryOptions = [
    '1–3 Day Workshops',
    '30 / 40 / 60 Hour Credit Courses',
    'FDP / Faculty Enablement Programs',
    'Semester-long Electives',
    'Bootcamps',
    'Internship Programs',
    'Industry Consulting & Lab Setup Support'
  ];

  const whyItWorks = [
    'NEP 2020 compliant + industry-aligned curriculum that\'s already placed 500+ students',
    '7k+ students trained with many placed in top cybersecurity positions',
    'Direct placement support through internships and industry connections',
    'Enhances college reputation as a cybersecurity education leader',
    'Fully customizable per department (CSE, IT, Cyber Security, AI & DS, MCA)',
    '14 years industry experience + 50+ colleges served = proven track record',
    'Pan-India & international delivery (Uganda, Dubai, Indonesia, Thailand, and more)'
  ];

  const industries = [
    'Government', 'Education', 'Health', 'Finance & Revenue', 'Legal (Law)', 
    'Banking', 'Technology', 'Automation', 'Energy', 'Transport', 
    'Navy', 'Social Welfare', 'Human Capital Management', 'Space Applications', 'Geoinformatics'
  ];

  const travelLocations = [
    'Uganda', 'Dubai', 'Indonesia', 'Thailand', 'Maldives',
    'Bengaluru', 'Kodaikanal', 'Puducherry'
  ];

  // Testimonials from skillmate.ai/sathish
  const testimonials = [
    {
      id: '1',
      name: 'Adarsh Patel',
      text: 'Sathishkumar Balakrishnan is an excellent mentor with strong expertise in Cyber Security. He explains complex concepts in a clear and structured manner, making them easy to understand and apply. His guidance is practical, industry-oriented, and highly relevant to real-world scenarios.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '2',
      name: 'Mithun',
      text: 'I attended the Certificate Course on Artificial Intelligence under the Advanced IT Skills Training program, and the learning experience was excellent. Sathish Kumar explained AI concepts in a clear and structured manner, making even complex topics easy to understand. The sessions were practical, interactive, and aligned with real-world applications.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '3',
      name: 'Pooja Jayekumar',
      text: 'The 4-day IBM CSR AI program was highly informative and well-organized. The trainer explained AI concepts clearly and guided us effectively through hands-on Azure AI labs. The practical approach and real-world examples made learning engaging and industry-relevant.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '4',
      name: 'VINOTINI U',
      text: 'From my perspective, the 4-day IBM CSR AI training was a very informative and valuable experience. I gained hands-on exposure to AI concepts using Microsoft Azure. The mentor explained the topics clearly and made the sessions engaging and easy to follow.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '5',
      name: 'Adithiyaa S',
      text: 'The session provided a clear understanding of Azure AI services, with a strong focus on exploring real-time AI-related applications. Concepts were explained in a clear and structured manner. The session was interactive and engaging, encouraging participation throughout.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '6',
      name: 'Vanitha A',
      text: 'I am extremely grateful for the four-day training program on Artificial Intelligence. You demonstrated excellent subject knowledge and explained AI concepts in a clear, structured, and engaging manner. The sessions were well organized, interactive, and included practical examples that made complex topics easy to understand.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '7',
      name: 'Mohamed Salman MR',
      text: 'Huge thanks to Sathish sir for an amazing 4-day deep dive into Azure AI! His step-by-step approach and emphasis on the importance of Cybersecurity made the sessions both engaging and easy to follow. I truly appreciated how he linked every concept to real-world applications.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '8',
      name: 'shakthiswaran M',
      text: 'Had a very insightful session with Sathish sir on Azure AI and cybersecurity. He explained the concepts clearly, showed how to apply them in real projects, and guided me on how these skills can help in my career. He explained every topic in a very easy and simple way.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '9',
      name: 'Saranya N',
      text: 'Focusing on hands-on practice is exactly what is needed today. The way you guided us to perform tasks independently while providing continuous support created a highly effective learning experience. You handled the session exceptionally well sir, and I learned a great deal about Azure.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '10',
      name: 'puvirajan',
      text: 'I would like to express my sincere thanks to my mentor for handling the Microsoft Azure AI course so effectively. The sessions were well-structured and covered both theoretical concepts and practical aspects. The mentor explained complex topics in a clear and understandable manner.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '11',
      name: 'Banumathi',
      text: 'We learned many new and useful things through your guidance, especially how Azure AI can be applied in real-world scenarios. The session was interactive and informative. I strongly believe that the knowledge gained from this session will be very helpful for my future career.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '12',
      name: 'Sahil Sharma',
      text: 'Had a wonderful experience with satish, his knowledge & experience took me to next level of learning',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '13',
      name: 'Merwin J',
      text: 'An inspiring mentor who provided clear direction, practical insights, and constant encouragement. Your guidance made a lasting impact on my learning and growth.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '14',
      name: 'Dhanalaxmi.A',
      text: 'The session was handled very well, sir. I learned many new things about Azure AI through practical examples and clear explanations. The mentor and student interaction was good, and all doubts were clarified patiently.',
      link: 'https://skillmate.ai/sathish',
      rating: 4
    },
    {
      id: '15',
      name: 'Roshni J P',
      text: 'I sincerely thank you sir, for the hands-on training session and teaching AI concepts, you shared real-time industry realities, which was very motivating and helpful.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '16',
      name: 'Devakumaran M',
      text: 'Thank you for your patience, support, and valuable guidance. Your mentorship helped me grow technically and professionally with confidence.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '17',
      name: 'Kishore S',
      text: 'Overall, it was a very good session. I learned a lot about Azure AI through multiple labs and gained valuable hands-on experience. The trainer explained the concepts with real-world examples, which made learning effective.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    },
    {
      id: '18',
      name: 'Aravind R',
      text: 'The session was really nice and useful for us Sir. The way you explained the concepts was very easy to capture. I learned a lot about AI with hands-on experience. I truly appreciate you Sir for supporting us throughout the course.',
      link: 'https://skillmate.ai/sathish',
      rating: 5
    }
  ];

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <MatrixRain />
      <Navigation />

      {/* Hero Section - Clean & Trust-Focused */}
      <section className="relative py-16 md:py-24 overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card/50 border border-blue-400/30 rounded-full backdrop-blur-sm mb-4">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono text-xs text-blue-400">14 Years Training Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 leading-tight">
              <span className="text-foreground">Turn Your Students Into</span>
              <br />
              <span className="text-blue-400 text-glow">Cybersecurity Professionals Who Get Hired</span>
            </h1>

            {/* Single Value Prop */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              From zero to hired. The practical cybersecurity program colleges choose for placement results. 7k+ students trained. 50+ colleges trust us.
            </p>

            {/* Risk Reversal */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm mb-6">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span className="font-mono text-xs text-green-500">No long-term contracts • Start with a pilot workshop</span>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  variant="cyber"
                  size="lg"
                  className="group bg-green-500 hover:bg-green-600 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-5 w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get Your Custom Proposal
                </Button>
              </a>
              <a href="#syllabus" className="text-xs sm:text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                Preview Curriculum →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Section - Compact Like Corporate Page */}
      <section id="about" className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Track Record'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Proven Experience in <span className="text-blue-400 text-glow">Academic Training</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
              {[
                { 
                  value: '14', 
                  label: 'Years Training Experience',
                  icon: Award,
                  description: 'Industry & academic'
                },
                { 
                  value: '7k+', 
                  label: 'Students Trained',
                  icon: Users,
                  description: 'Across workshops & sessions'
                },
                { 
                  value: '50+', 
                  label: 'Colleges Visited',
                  icon: GraduationCap,
                  description: 'Pan-India & international'
                },
                { 
                  value: '100+', 
                  label: 'Guest Lectures & Jury',
                  icon: Presentation,
                  description: 'Academic engagements'
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-3 md:p-4 bg-card/30 border border-blue-400/20 rounded-lg backdrop-blur-sm group hover:border-blue-400/50 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5 justify-center md:justify-start">
                    <stat.icon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 text-glow leading-none">
                    {stat.value}
                  </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider text-center md:text-left mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground/70 text-center md:text-left">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Outcomes Section */}
      <section className="py-16 md:py-20 relative bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Proven Results'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Measurable Impact on <span className="text-blue-400 text-glow">Student Success</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Unlike generic training programs, we focus on outcomes that matter to colleges and students.
              </p>
            </div>

            {/* Success Stories Preview */}
            <div className="mb-10 p-6 bg-blue-400/5 border border-blue-400/20 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-400/20 rounded-lg flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-400" />
                    </div>
                <div>
                  <h3 className="font-semibold text-sm mb-2 text-blue-400">Success Stories</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Colleges report measurable improvements in placement rates, student confidence, and industry readiness after implementing our programs.
                  </p>
                  <a 
                    href={`${whatsappUrl}&text=${encodeURIComponent("Hi, I'd like to see case studies or success stories from colleges you've worked with. Can you share some examples?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    <span>Request case studies</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  </div>
                </div>
                    </div>
                    
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Placement Readiness',
                  value: 'Industry-Ready',
                  description: 'Students gain practical skills employers actually need, not just theory',
                  metric: 'Students consistently land internships and placements'
                },
                {
                  icon: TrendingUp,
                  title: 'Career Advancement',
                  value: 'Higher Salaries',
                  description: 'Cybersecurity graduates earn significantly more than general IT roles',
                  metric: 'Higher earning potential vs. general IT roles'
                },
                {
                  icon: Award,
                  title: 'College Reputation',
                  value: 'Enhanced Branding',
                  description: 'Become known as a cybersecurity education leader in your region',
                  metric: 'Improved placement rates & industry recognition'
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="p-3 bg-blue-400/10 rounded-lg w-fit mb-3 group-hover:bg-blue-400/20 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-400 text-glow mb-2">
                      {item.value}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="text-xs font-semibold text-blue-400 border-t border-blue-400/20 pt-3">
                      {item.metric}
                    </div>
                  </CardContent>
                </Card>
              ))}
                  </div>
                </div>
              </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Why Choose Me'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Unlike Training Companies, <span className="text-blue-400 text-glow">I'm a Practicing Expert</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Industry Practitioner, Not Just a Teacher',
                  description: '14 years as a practicing security architect means I teach what actually works in real companies, not outdated theory.'
                },
                {
                  icon: Target,
                  title: 'One Expert, Complete Picture',
                  description: 'Instead of managing multiple vendors, you get one expert who understands your entire cybersecurity education needs.'
                },
                {
                  icon: Code,
                  title: 'Real-World Focus',
                  description: 'Every module includes hands-on labs, real attack scenarios, and tools used by actual security teams today.'
                },
                {
                  icon: Users,
                  title: 'Proven Track Record',
                  description: '7k+ students trained, 50+ colleges served, 100+ guest lectures. Results speak louder than promises.'
                }
                ].map((item, index) => (
                <Card
                    key={index}
                  className="group border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
                  >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-blue-400/10 rounded-lg w-fit group-hover:bg-blue-400/20 transition-colors flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <CardTitle className="text-lg group-hover:text-blue-400 transition-colors mb-2">
                        {item.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  </CardHeader>
                </Card>
                ))}
              </div>

            {/* Competitive Comparison */}
            <div className="mt-12 p-6 bg-muted/30 border border-blue-400/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">vs. Other Options</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">Generic Training Companies</div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2 justify-center">
                      <X className="w-3 h-3 text-red-400" />
                      <span>Outdated curriculum</span>
            </div>
                    <div className="flex items-center gap-2 justify-center">
                      <X className="w-3 h-3 text-red-400" />
                      <span>No industry experience</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <X className="w-3 h-3 text-red-400" />
                      <span>Multiple vendors</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">In-House Faculty</div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2 justify-center">
                      <X className="w-3 h-3 text-red-400" />
                      <span>Limited industry exposure</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <X className="w-3 h-3 text-red-400" />
                      <span>Time-consuming setup</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <X className="w-3 h-3 text-red-400" />
                      <span>Curriculum gaps</span>
                    </div>
                  </div>
                </div>
                <div className="text-center p-3 bg-blue-400/10 rounded-lg border border-blue-400/30">
                  <div className="text-sm font-semibold text-blue-400 mb-2">With Me</div>
                  <div className="space-y-1 text-xs text-blue-400">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-3 h-3" />
                      <span>Current industry practices</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-3 h-3" />
                      <span>14 years hands-on experience</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-3 h-3" />
                      <span>One expert, complete solution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <TestimonialsSection 
          testimonials={testimonials}
          title="What Students Say"
          subtitle="7k+ students trained across 50+ colleges. Feedback from cybersecurity, AI, Azure, and emerging technology training programs."
        />
      )}

      {/* College Logos Section - Interactive Sliding */}
      <section className="py-16 md:py-20 relative bg-muted/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Trusted By Colleges'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Colleges I've Worked With <span className="text-blue-400 text-glow">Across India</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Trusted for cybersecurity training, jury services, and academic sessions. These institutions have engaged me for various academic programs and evaluations.
              </p>
            </div>

            {/* Infinite Sliding Logos */}
            <div className="relative overflow-hidden">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/10 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/10 to-transparent z-10 pointer-events-none" />
              
              <div className="flex gap-6 animate-slide-logos hover:[animation-play-state:paused]">
                {/* First set of logos */}
                {[
                  { 
                    name: 'Veltech', 
                    logo: '/images/colleges/veltech.png',
                    website: 'https://www.veltech.edu.in/'
                  },
                  { 
                    name: 'St. Peters', 
                    logo: '/images/colleges/st-peters.png',
                    website: 'https://www.spcet.ac.in/'
                  },
                  { 
                    name: 'Manakula Vinayagar Institute of Technology', 
                    logo: '/images/colleges/mvit.png',
                    website: 'https://www.mvit.edu.in/'
                  },
                  { 
                    name: 'SRM Easwari Ramapuram', 
                    logo: '/images/colleges/srm.png',
                    website: 'https://www.srmist.edu.in/'
                  },
                  { 
                    name: 'SA Engineering College', 
                    logo: '/images/colleges/sa-engineering.jpg',
                    website: 'https://www.saec.ac.in/'
                  },
                  { 
                    name: 'Bharathi University', 
                    logo: '/images/colleges/bharathi.png',
                    website: 'https://www.bharathuniv.ac.in/'
                  },
                  { 
                    name: 'Madras School of Social Work', 
                    logo: '/images/colleges/mssw.png',
                    website: 'https://www.mssw.in/'
                  }
                ].map((college, index) => (
                  <a
                    key={`first-${index}`}
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center p-4 bg-card border border-blue-400/10 rounded-lg hover:border-blue-400/30 transition-all min-w-[180px] h-24 flex-shrink-0 hover:scale-105 hover:shadow-lg"
                    title={`Visit ${college.name} website`}
                  >
                    <img
                      src={college.logo}
                      alt={`${college.name} logo`}
                      className="max-w-full max-h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-text text-xs text-muted-foreground text-center font-semibold';
                          fallback.textContent = college.name.split(' ')[0];
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </a>
                ))}
                
                {/* Duplicate set for seamless infinite scroll */}
                {[
                  { 
                    name: 'Veltech', 
                    logo: '/images/colleges/veltech.png',
                    website: 'https://www.veltech.edu.in/'
                  },
                  { 
                    name: 'St. Peters', 
                    logo: '/images/colleges/st-peters.png',
                    website: 'https://www.spcet.ac.in/'
                  },
                  { 
                    name: 'Manakula Vinayagar Institute of Technology', 
                    logo: '/images/colleges/mvit.png',
                    website: 'https://www.mvit.edu.in/'
                  },
                  { 
                    name: 'SRM Easwari Ramapuram', 
                    logo: '/images/colleges/srm.png',
                    website: 'https://www.srmist.edu.in/'
                  },
                  { 
                    name: 'SA Engineering College', 
                    logo: '/images/colleges/sa-engineering.jpg',
                    website: 'https://www.saec.ac.in/'
                  },
                  { 
                    name: 'Bharathi University', 
                    logo: '/images/colleges/bharathi.png',
                    website: 'https://www.bharathuniv.ac.in/'
                  },
                  { 
                    name: 'Madras School of Social Work', 
                    logo: '/images/colleges/mssw.png',
                    website: 'https://www.mssw.in/'
                  }
                ].map((college, index) => (
                  <a
                    key={`second-${index}`}
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center p-4 bg-card border border-blue-400/10 rounded-lg hover:border-blue-400/30 transition-all min-w-[180px] h-24 flex-shrink-0 hover:scale-105 hover:shadow-lg"
                    title={`Visit ${college.name} website`}
                  >
                    <img
                      src={college.logo}
                      alt={`${college.name} logo`}
                      className="max-w-full max-h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-text text-xs text-muted-foreground text-center font-semibold';
                          fallback.textContent = college.name.split(' ')[0];
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </a>
                ))}
              </div>
                  </div>

            <div className="text-center mt-8">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-blue-400">Note:</span> Engagements include cybersecurity training sessions, jury services for projects/competitions, and academic workshops across these institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Library - Moved Higher */}
      <section id="syllabus" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Program Library'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                Choose Your <span className="text-blue-400 text-glow">Track</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm mb-6">
                Comprehensive syllabus organized into 4 progressive levels. Select modules based on your needs.
              </p>
              
              {/* Quick Start Guidance */}
              <div className="max-w-3xl mx-auto mb-8">
                <Card className="bg-blue-400/5 border-blue-400/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-400/20 rounded-lg flex-shrink-0">
                        <Target className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-sm mb-2 text-blue-400">Quick Start Guide</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          <span className="font-semibold text-foreground">Most colleges start with:</span> Level 1 (Foundations) + Level 2 (Core Skills) for comprehensive coverage. Level 3 & 4 are ideal for advanced programs and placement-focused tracks.
                        </p>
                        <a 
                          href={`${whatsappUrl}&text=${encodeURIComponent("Hi, I'd like guidance on which program levels would work best for our college. Can we discuss?")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-500 transition-colors"
                        >
                          <span>Not sure which level?</span>
                          <span className="font-semibold">Let's discuss your needs</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Tabs defaultValue="level1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-muted/50 h-auto">
                {programLevels.map((level, index) => {
                  const levelNumbers = ['01', '02', '03', '04'];
                  return (
                    <TabsTrigger
                      key={level.id}
                      value={level.id}
                      className="data-[state=active]:bg-blue-400/20 data-[state=active]:text-blue-400 text-xs sm:text-sm py-2 sm:py-3 px-2 sm:px-4"
                    >
                      <span className="hidden lg:inline">{level.title.split('–')[0].trim()}</span>
                      <span className="hidden sm:inline lg:hidden">Level {levelNumbers[index]}</span>
                      <span className="sm:hidden">L{levelNumbers[index]}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {programLevels.map((level) => (
                <TabsContent key={level.id} value={level.id} className="mt-4 sm:mt-6">
                  <Card className="border-blue-400/20">
                    <CardHeader className="pb-3 sm:pb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <Badge variant="outline" className="border-blue-400/50 text-blue-400 w-fit text-xs sm:text-sm">
                          {level.subtitle}
                        </Badge>
                        <span className="text-xs sm:text-sm text-muted-foreground">{level.audience}</span>
                      </div>
                      <CardTitle className="text-lg sm:text-2xl">{level.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Accordion type="single" collapsible className="w-full">
                        {level.topics.map((topic) => (
                          <AccordionItem key={topic.number} value={`topic-${topic.number}`} className="border-blue-400/20">
                            <AccordionTrigger className="text-left hover:text-blue-400 py-3 sm:py-4">
                              <div className="flex items-start gap-2 sm:gap-3">
                                <span className="font-mono text-blue-400 font-bold text-sm sm:text-base">{topic.number}.</span>
                                <span className="font-semibold text-sm sm:text-base">{topic.title}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4">
                              <ul className="space-y-2 pl-6 sm:pl-8">
                                {topic.content.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                    <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-400/10 border border-blue-400/20 rounded-lg">
                        <p className="text-xs sm:text-sm font-semibold text-blue-400 mb-1">✅ Outcome:</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{level.outcome}</p>
                </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Objection Handling Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Common Questions'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Addressing Your <span className="text-blue-400 text-glow">Concerns</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Here are answers to questions colleges often ask before starting.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: 'What if our faculty isn\'t ready for cybersecurity training?',
                  answer: 'No problem. I handle all delivery. Your faculty can observe and learn, or we can include FDP sessions to upskill them. Many colleges start with me delivering, then transition to faculty-led sessions later.'
                },
                {
                  question: 'How do we measure success and ROI?',
                  answer: 'We track placement rates, internship conversions, student projects, and industry feedback. You\'ll receive regular progress reports. Most colleges see measurable improvement in cybersecurity placement rates within 6-12 months.'
                },
                {
                  question: 'What\'s the minimum commitment required?',
                  answer: 'Flexible. Start with a 1-3 day workshop to test the waters, or go all-in with a semester program. No long-term contracts. We work around your academic calendar and budget constraints. Most colleges start with a pilot workshop before committing to larger programs.'
                },
                {
                  question: 'Can this fit our existing curriculum?',
                  answer: 'Absolutely. I customize every program to align with your syllabus, credit hours, and department requirements. We can integrate into existing courses or create standalone modules.'
                },
                {
                  question: 'What about lab setup and infrastructure?',
                  answer: 'I provide complete guidance on lab setup, including cloud options that require minimal infrastructure. Many colleges use cloud labs, so physical infrastructure isn\'t always needed.'
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`question-${index}`} className="border-blue-400/20">
                  <AccordionTrigger className="text-left hover:text-blue-400 py-4">
                    <div className="flex items-start gap-3 flex-grow">
                      <div className="p-2 bg-blue-400/10 rounded-lg flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="font-semibold text-base sm:text-lg">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 pl-12 sm:pl-14">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* What I Can Support - Consolidated into Categories */}
      <section id="services" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// One-Stop Solution'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                End-to-End Cyber Security <span className="text-blue-400 text-glow">Support</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm mb-8">
                Everything your college needs, organized by category. Most colleges start with Training Programs, then add Support Services as needed.
              </p>
            </div>

            {/* Training Programs Category */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                <div className="p-2 bg-blue-400/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Training Programs</h3>
                <Badge variant="outline" className="border-green-500/30 text-green-500 text-xs whitespace-nowrap">
                  Most Popular
                </Badge>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {supportServices.slice(0, 5).map((service, index) => (
                  <Card
                  key={index}
                    className="group border-blue-400/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <CardHeader className="flex-grow pb-3">
                      <div className="p-3 bg-blue-400/10 rounded-lg w-fit mb-3 group-hover:bg-blue-400/20 transition-colors">
                        <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                      <div className="space-y-2 mb-2">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-base sm:text-lg group-hover:text-blue-400 transition-colors leading-tight flex-1 min-w-0">
                            {service.title}
                          </CardTitle>
                    </div>
                        <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-400 w-fit">
                          {service.duration}
                        </Badge>
                  </div>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 mt-auto">
                      <a 
                        href={`${whatsappUrl}&text=${encodeURIComponent(`Hi, I'd like details about ${service.title} for our college.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-blue-400/30 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/50 text-xs"
                        >
                          Get Details
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
                  </div>
            </div>

            {/* Support Services Category */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                <div className="p-2 bg-blue-400/20 rounded-lg">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Support & Career Services</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {supportServices.slice(5, 9).map((service, index) => (
                  <Card
                    key={index}
                    className="group border-blue-400/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <CardHeader className="flex-grow pb-3">
                      <div className="p-3 bg-blue-400/10 rounded-lg w-fit mb-3 group-hover:bg-blue-400/20 transition-colors">
                        <service.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="space-y-2 mb-2">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-base sm:text-lg group-hover:text-blue-400 transition-colors leading-tight flex-1 min-w-0">
                            {service.title}
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-400 w-fit">
                          {service.duration}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 mt-auto">
                      <a 
                        href={`${whatsappUrl}&text=${encodeURIComponent(`Hi, I'd like details about ${service.title} for our college.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-blue-400/30 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/50 text-xs"
                        >
                          Get Details
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
                </div>
            </div>

            {/* Additional Services Category */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                <div className="p-2 bg-blue-400/20 rounded-lg">
                  <MoreHorizontal className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Additional Services</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {supportServices.slice(9).map((service, index) => (
                  <Card
                    key={index}
                    className="group border-blue-400/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <CardHeader className="flex-grow pb-3">
                      <div className="p-3 bg-blue-400/10 rounded-lg w-fit mb-3 group-hover:bg-blue-400/20 transition-colors">
                        <service.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="space-y-2 mb-2">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-base sm:text-lg group-hover:text-blue-400 transition-colors leading-tight flex-1 min-w-0">
                            {service.title}
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-400 w-fit">
                          {service.duration}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 mt-auto">
                      <a 
                        href={`${whatsappUrl}&text=${encodeURIComponent(`Hi, I'd like details about ${service.title} for our college.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-blue-400/30 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/50 text-xs"
                        >
                          Get Details
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold text-blue-400">Note:</span> Detailed proposals, pricing, and custom program outlines available on request.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="cyber-outline"
                  size="lg"
                  className="border-blue-400/30 text-blue-400 hover:bg-blue-400/10"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Request Custom Proposal
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Engagement Works - Doodle Style */}
      <section id="engagement" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Process'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                How Engagement <span className="text-blue-400 text-glow">Works</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-sm">
                Simple, college-friendly process to get started. No long-term contracts, no hidden fees.
              </p>
            </div>

            {/* Doodle Flow - Responsive */}
            <div className="relative">
              {/* Desktop: Horizontal Flow with Doodle Lines */}
              <div className="hidden lg:block relative">
                <div className="flex items-start justify-between gap-4 relative">
                  {[
                    {
                      step: 1,
                      title: 'Share Requirement',
                      description: 'You share requirement (department, students, duration, dates)'
                    },
                    {
                      step: 2,
                      title: 'Tailored Plan',
                      description: 'I share a tailored plan + module map'
                    },
                    {
                      step: 3,
                      title: 'Finalize Schedule',
                      description: 'We finalize schedule + lab setup requirements'
                    },
                    {
                      step: 4,
                      title: 'Delivery & Support',
                      description: 'Delivery + assessments + final report / next steps (optional)'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex-1 relative">
                      {/* Doodle Arrow Between Steps (Desktop) */}
                      {index < 3 && (
                        <div className="absolute top-12 left-full w-full h-0.5 z-0" style={{ width: 'calc(100% - 2rem)' }}>
                          <svg
                            className="absolute top-0 left-0 w-full h-full"
                            viewBox="0 0 200 20"
                            preserveAspectRatio="none"
                            style={{ overflow: 'visible' }}
                          >
                            <path
                              d={`M 0 10 Q ${50 + index * 20} ${5 + (index % 2) * 10} 100 10 T 200 10`}
                              stroke="rgb(96 165 250)"
                              strokeWidth="2.5"
                              fill="none"
                              strokeLinecap="round"
                              className="opacity-50"
                              style={{
                                filter: 'drop-shadow(0 0 2px rgba(96, 165, 250, 0.5))',
                                strokeDasharray: '4,4'
                              }}
                            />
                            <path
                              d="M 190 10 L 200 5 M 200 10 L 190 15"
                              stroke="rgb(96 165 250)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              className="opacity-60"
                            />
                          </svg>
                        </div>
                      )}
                      
                      <Card className="border-blue-400/30 relative hover:border-blue-400/60 transition-all bg-card/50 backdrop-blur-sm hover:scale-105 hover:shadow-lg" style={{ 
                        borderStyle: 'dashed', 
                        borderWidth: '2px',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(96, 165, 250, 0.1)'
                      }}>
                        <CardHeader className="pb-3">
                          <div 
                            className="absolute -top-4 -left-4 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-background transition-transform hover:rotate-12"
                            style={{ 
                              boxShadow: '0 0 0 2px rgba(96, 165, 250, 0.2), 0 4px 12px rgba(96, 165, 250, 0.3)',
                              transform: `rotate(${-5 + index * 2}deg)`
                            }}
                          >
                            {item.step}
                          </div>
                          <CardTitle className="text-base mt-2 font-semibold">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile/Tablet: Vertical Flow with Doodle Lines */}
              <div className="lg:hidden space-y-6 relative">
                {[
                  {
                    step: 1,
                    title: 'Share Requirement',
                    description: 'You share requirement (department, students, duration, dates)'
                  },
                  {
                    step: 2,
                    title: 'Tailored Plan',
                    description: 'I share a tailored plan + module map'
                  },
                  {
                    step: 3,
                    title: 'Finalize Schedule',
                    description: 'We finalize schedule + lab setup requirements'
                  },
                  {
                    step: 4,
                    title: 'Delivery & Support',
                    description: 'Delivery + assessments + final report / next steps (optional)'
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    {/* Doodle Arrow Between Steps (Mobile) */}
                    {index < 3 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 z-0">
                        <svg
                          className="absolute top-0 left-0 w-full h-full"
                          viewBox="0 0 20 60"
                          preserveAspectRatio="none"
                          style={{ overflow: 'visible' }}
                        >
                          <path
                            d={`M 10 0 Q ${10 + (index % 2 === 0 ? -5 : 5)} 20 10 30 T 10 60`}
                            stroke="rgb(96 165 250)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            className="opacity-50"
                            style={{
                              filter: 'drop-shadow(0 0 2px rgba(96, 165, 250, 0.5))',
                              strokeDasharray: '4,4'
                            }}
                          />
                          <path
                            d="M 10 50 L 5 55 M 10 50 L 15 55"
                            stroke="rgb(96 165 250)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="opacity-60"
                          />
                        </svg>
                      </div>
                    )}
                    
                    <Card className="border-blue-400/30 relative hover:border-blue-400/60 transition-all bg-card/50 backdrop-blur-sm hover:scale-105 hover:shadow-lg" style={{ 
                      borderStyle: 'dashed', 
                      borderWidth: '2px',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(96, 165, 250, 0.1)'
                    }}>
                      <CardHeader className="pb-3">
                        <div 
                          className="absolute -top-4 -left-4 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-background transition-transform hover:rotate-12"
                          style={{ 
                            boxShadow: '0 0 0 2px rgba(96, 165, 250, 0.2), 0 4px 12px rgba(96, 165, 250, 0.3)',
                            transform: `rotate(${-5 + index * 2}deg)`
                          }}
                        >
                          {item.step}
                        </div>
                        <CardTitle className="text-base mt-2 font-semibold">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8 md:mt-12">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="cyber"
                  size="lg"
                  className="group bg-green-500 hover:bg-green-600 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Start Your Engagement
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-On Labs & Internships - Compact */}
      <section id="labs-internships" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Practical Component'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                Hands-On Learning & <span className="text-blue-400 text-glow">Real-World Exposure</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-400/20">
                <CardHeader>
                  <div className="p-3 bg-blue-400/10 rounded-lg w-fit mb-3">
                    <Laptop className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">Hands-On Labs & Practical Component</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Dedicated lab environments (local / cloud)',
                      'Vulnerable applications & systems',
                      'Attack–defense simulations',
                      'Capture-the-Flag (CTF) style learning',
                      'Safe & ethical lab isolation'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-400/20">
                <CardHeader>
                  <div className="p-3 bg-blue-400/10 rounded-lg w-fit mb-3">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                  <CardTitle className="text-xl">Internships & Real-World Exposure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Live project internships',
                      'Security assessments on dummy/real setups',
                      'Tool building & automation',
                      'Bug analysis & reporting practice',
                      'Mentorship-driven learning'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Flexibility & Benefits - Consolidated */}
      <section id="delivery" className="py-16 md:py-24 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Flexibility & Benefits'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                Flexible Delivery & <span className="text-blue-400 text-glow">Why It Works</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm">
                Multiple delivery formats to fit your calendar, plus proven benefits for your college.
              </p>
            </div>

            {/* Delivery Options */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4 text-center">Delivery Formats</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {deliveryOptions.map((option, index) => (
                  <Badge
                  key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    {option}
                  </Badge>
                ))}
                    </div>
            </div>

            {/* Benefits */}
                    <div>
              <h3 className="text-lg font-semibold mb-4 text-center">Why This Works for Colleges</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {whyItWorks.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card border border-blue-400/10 rounded-lg hover:border-blue-400/40 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                ))}
                  </div>
                  </div>
          </div>
        </div>
      </section>

      {/* Industry Exposure & Delivery - Consolidated */}
      <section id="industry" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
                {'// Industry Experience & Reach'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
                Real-World Experience Across <span className="text-blue-400 text-glow">Industries & Locations</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm">
                Worked across diverse sectors and delivered training Pan-India & internationally, bringing real-world insights to your students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Industries */}
              <Card className="border-blue-400/20">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <CardTitle>Industries Served</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-3 py-1 text-xs border-blue-400/30 text-muted-foreground hover:text-blue-400 hover:border-blue-400/50 transition-colors"
                      >
                        {industry}
                      </Badge>
                    ))}
                </div>
                </CardContent>
              </Card>

              {/* Locations */}
              <Card className="border-blue-400/20">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <CardTitle>Delivery Locations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-blue-400 mb-2">International:</p>
                      <div className="flex flex-wrap gap-2">
                        {travelLocations.slice(0, 5).map((location, index) => (
                          <Badge key={index} variant="outline" className="border-blue-400/30 text-blue-400 text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {location}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-400 mb-2">India:</p>
                      <div className="flex flex-wrap gap-2">
                        {travelLocations.slice(5).map((location, index) => (
                          <Badge key={index} variant="outline" className="border-blue-400/30 text-blue-400 text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {location}
                          </Badge>
                        ))}
                        <Badge variant="outline" className="border-blue-400/30 text-blue-400 text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          + More cities
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

export default CollegePage;

