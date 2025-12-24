import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SecuritySolutionsSection from '@/components/SecuritySolutionsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CVESlider from '@/components/CVESlider';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';

const Index = () => {
  useEffect(() => {
    // Update page title and meta for SEO
    document.title = 'Sathish Kumar Balakrishnan | Cybersecurity Expert & Security Architect';
  }, []);

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SecuritySolutionsSection />
      <SkillsSection />
      <ExperienceSection />
      <CVESlider />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
