import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 border-t border-primary/20 bg-card/50 mt-8 md:mt-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span className="font-mono text-xs md:text-sm text-muted-foreground">
              SK_SECURITY © {new Date().getFullYear()}
            </span>
          </div>

          {/* Tagline */}
          <p className="font-mono text-xs md:text-sm text-muted-foreground flex items-center gap-1 text-center">
            Crafted with <Heart className="w-3 h-3 md:w-4 md:h-4 text-destructive flex-shrink-0" /> for a secure digital world
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-xs md:text-sm text-primary hover:text-glow transition-all"
          >
            [↑] Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
