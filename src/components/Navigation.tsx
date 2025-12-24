import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, GraduationCap, Building2, Users, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPageMenuOpen, setIsPageMenuOpen] = useState(false);
  const location = useLocation();
  const pageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get navigation items based on current page
  const getNavItems = () => {
    const baseItems = [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ];
    
    // Show Skills on home page (/) or original page
    if (location.pathname === '/' || location.pathname === '/original') {
      return [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
      ];
    }
    
    // For student page, show Resources instead of Services
    if (location.pathname === '/student') {
      return [
        { label: 'About', href: '#about' },
        { label: 'Resources', href: '#resources' },
        { label: 'Tips', href: '#tips' },
        { label: 'Contact', href: '#contact' },
      ];
    }
    
    // For college page, show Syllabus instead of Experience
    if (location.pathname === '/college') {
      return [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Syllabus', href: '#syllabus' },
        { label: 'Contact', href: '#contact' },
      ];
    }
    
    return baseItems;
  };

  const navItems = getNavItems();

  const pageOptions = [
    { label: 'College & Academic', path: '/college', icon: GraduationCap, color: 'text-blue-400' },
    { label: 'Corporate & Enterprise', path: '/corporate', icon: Building2, color: 'text-green-400' },
    { label: 'Students & Learners', path: '/student', icon: Users, color: 'text-purple-400' },
  ];

  const currentPage = pageOptions.find(page => location.pathname === page.path);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Close page menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pageMenuRef.current && !pageMenuRef.current.contains(event.target as Node)) {
        setIsPageMenuOpen(false);
      }
    };
    if (isPageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isPageMenuOpen]);

  // Scroll to top when navigating to home
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsMobileMenuOpen(false);
    setIsPageMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 text-primary font-mono font-bold text-lg group"
          >
            <Shield className="w-6 h-6 group-hover:animate-pulse-glow transition-all" />
            <span className="hidden sm:inline text-glow">SK_SEC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Page Switcher */}
            {location.pathname !== '/' && (
              <div className="relative mr-4" ref={pageMenuRef}>
                <button
                  onClick={() => setIsPageMenuOpen(!isPageMenuOpen)}
                  className="px-4 py-2 text-muted-foreground hover:text-primary font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:text-glow relative group flex items-center gap-2"
                >
                  {currentPage ? (
                    <>
                      <currentPage.icon className={`w-4 h-4 ${currentPage.color}`} />
                      <span>Switch View</span>
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4" />
                      <span>Pages</span>
                    </>
                  )}
                  <ChevronDown className={`w-3 h-3 transition-transform ${isPageMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Page Dropdown */}
                {isPageMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-primary/20 rounded-lg shadow-lg backdrop-blur-lg z-50">
                    <div className="p-2">
                      <Link
                        to="/"
                        onClick={handleHomeClick}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-mono"
                      >
                        ← Home
                      </Link>
                      <div className="border-t border-primary/10 my-2" />
                      {pageOptions.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          onClick={() => setIsPageMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-colors font-mono ${
                            location.pathname === page.path
                              ? 'bg-primary/20 text-primary'
                              : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                          }`}
                        >
                          <page.icon className={`w-4 h-4 ${page.color}`} />
                          {page.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Section Navigation */}
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-muted-foreground hover:text-primary font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:text-glow relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="cyber"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-primary/20 animate-slide-up">
            <div className="container px-4 py-4 flex flex-col gap-2">
              {/* Page Switcher for Mobile */}
              {location.pathname !== '/' && (
                <>
                  <Link
                    to="/"
                    onClick={handleHomeClick}
                    className="px-4 py-3 text-primary font-mono text-sm uppercase tracking-wider border-b border-primary/10"
                  >
                    ← Home
                  </Link>
                  <div className="px-4 py-2 text-muted-foreground font-mono text-xs uppercase tracking-wider border-b border-primary/10">
                    Switch View:
                  </div>
                  {pageOptions.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 text-left border-b border-primary/10 ${
                        location.pathname === page.path
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      <page.icon className={`w-4 h-4 ${page.color}`} />
                      {page.label}
                    </Link>
                  ))}
                  <div className="border-t border-primary/20 my-2" />
                </>
              )}

              {/* Section Navigation */}
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-muted-foreground hover:text-primary font-mono text-sm uppercase tracking-wider transition-all duration-300 text-left border-b border-primary/10 last:border-0"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-primary mr-2">{`0${index + 1}.`}</span>
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-primary/20 mt-2">
                <span className="text-xs text-muted-foreground font-mono uppercase">Theme</span>
                <ThemeToggle />
              </div>
              <Button
                variant="cyber"
                className="mt-2"
                onClick={() => {
                  scrollToSection('#contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
