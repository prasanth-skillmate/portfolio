import { useEffect, useState } from 'react';

interface ConfettiProps {
  trigger: boolean;
  duration?: number;
}

const Confetti = ({ trigger, duration = 3000 }: ConfettiProps) => {
  const [isActive, setIsActive] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    if (trigger) {
      setIsActive(true);
      // Generate random confetti particles
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1 + Math.random() * 2,
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => {
        setIsActive(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-0 w-2 h-2 rounded-full animate-confetti-fall"
          style={{
            left: `${particle.left}%`,
            backgroundColor: [
              'hsl(175, 100%, 50%)',
              'hsl(140, 100%, 50%)',
              'hsl(280, 100%, 60%)',
              'hsl(0, 84%, 60%)',
              'hsl(45, 100%, 50%)',
            ][Math.floor(Math.random() * 5)],
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      {/* Party popper emojis */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`emoji-${i}`}
          className="absolute top-0 text-2xl animate-confetti-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${1.5 + Math.random()}s`,
          }}
        >
          🎉
        </div>
      ))}
    </div>
  );
};

export default Confetti;

