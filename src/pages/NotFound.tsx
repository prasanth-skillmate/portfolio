import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shield, Home, Rocket, AlertTriangle, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import MatrixRain from "@/components/MatrixRain";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Glitch effect animation
    const glitchInterval = setInterval(() => {
      const chars = "0123456789ABCDEF";
      const glitched = Array.from({ length: 3 }, () => 
        chars[Math.floor(Math.random() * chars.length)]
      ).join("");
      setGlitchText(glitched);
      
      setTimeout(() => {
        setGlitchText("404");
      }, 100);
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, [location.pathname]);

  const handleWayBackHome = () => {
    navigate("/");
  };

  return (
    <main className="relative h-screen bg-background text-foreground overflow-hidden flex items-center justify-center">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Animated Stars/Planets */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 relative z-10 py-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center h-full">
          {/* Terminal-style Header */}
          <div className="mb-2 sm:mb-3 font-mono text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary">ERROR</span>
            <span className="text-muted-foreground">// Route not found</span>
          </div>

          {/* Main 404 Display */}
          <div className="relative mb-2 sm:mb-3">
            {/* Glitch Effect */}
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-mono text-primary text-glow relative leading-none"
              style={{
                textShadow: `
                  0 0 10px currentColor,
                  0 0 20px currentColor,
                  0 0 30px currentColor,
                  0 0 40px currentColor
                `,
              }}
            >
              <span className="relative inline-block">
                {glitchText}
                {/* Glitch overlay */}
                <span 
                  className="absolute inset-0 text-red-500 opacity-0 animate-pulse"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
                    transform: 'translate(2px, -2px)',
                  }}
                >
                  {glitchText}
                </span>
                <span 
                  className="absolute inset-0 text-blue-500 opacity-0 animate-pulse"
                  style={{
                    clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
                    transform: 'translate(-2px, 2px)',
                  }}
                >
                  {glitchText}
                </span>
              </span>
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-3 sm:mb-4 space-y-2">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary animate-pulse" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display">
                <span className="text-foreground">Houston, we have a</span>
                <br />
                <span className="text-primary text-glow">problem.</span>
              </h2>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-mono">
              {'>'} Page not found
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-card/50 border border-primary/20 rounded-lg backdrop-blur-sm">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <code className="text-xs sm:text-sm text-muted-foreground font-mono">
                {location.pathname}
              </code>
            </div>
          </div>

          {/* Astronaut/Shield Illustration Area */}
          <div className="mb-3 sm:mb-4 relative">
            <div className="relative inline-block">
              {/* Shield Icon with Animation */}
              <div className="relative">
                <Shield className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-primary/30 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Rocket className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/50 rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary/50 rounded-full" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center mb-3 sm:mb-4">
            <Button
              variant="cyber"
              size="lg"
              onClick={handleWayBackHome}
              className="group w-full sm:w-auto min-w-[180px] sm:min-w-[200px] text-sm sm:text-base"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Way Back Home
            </Button>
            
            <Button
              variant="cyber-outline"
              size="lg"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] text-sm sm:text-base"
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-2 sm:mt-3 pt-3 sm:pt-4 border-t border-primary/20">
            <p className="text-xs sm:text-sm text-muted-foreground font-mono">
              {'//'} The page you're looking for has been moved, deleted, or never existed.
            </p>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              {'//'} Error Code: 404 | Status: Not Found | Time: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
