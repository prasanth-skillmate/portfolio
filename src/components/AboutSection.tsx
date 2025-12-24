import { useState, useEffect, useRef } from 'react';
import { Shield, Code, Eye, Zap } from 'lucide-react';
import Confetti from './Confetti';

type CommandState = {
  fullCommand: string;
  fullOutput: string;
  displayedCommandLength: number;
  displayedOutputLength: number;
  isTypingCommand: boolean;
  isShowingOutput: boolean;
  isComplete: boolean;
};

const terminalCommandsData = [
  {
    command: 'cat profile.txt',
    output: 'A passionate cybersecurity professional with over a decade of experience in protecting organizations from evolving digital threats.',
  },
  {
    command: 'echo $MISSION',
    output: '"To secure the digital frontier and empower organizations to operate fearlessly in cyberspace."',
  },
  {
    command: 'ls certifications/',
    output: 'CISSP | CEH | OSCP | CISM | GCIH | ISO 27001 Lead Auditor',
  },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [commands, setCommands] = useState<CommandState[]>(
    terminalCommandsData.map((cmd) => ({
      fullCommand: cmd.command,
      fullOutput: cmd.output,
      displayedCommandLength: 0,
      displayedOutputLength: 0,
      isTypingCommand: false,
      isShowingOutput: false,
      isComplete: false,
    }))
  );
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [userCommands, setUserCommands] = useState<Array<{ command: string; output: string }>>([]);
  const [commandCount, setCommandCount] = useState(0);
  const [ctfStage, setCtfStage] = useState<'enumeration' | 'exploitation' | 'shell' | 'flag' | 'none'>('none');
  const [hasShell, setHasShell] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);

  const highlights = [
    {
      icon: Shield,
      title: 'Defense Expert',
      description: 'Building impenetrable security architectures',
    },
    {
      icon: Code,
      title: 'Ethical Hacker',
      description: 'Finding vulnerabilities before attackers do',
    },
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Staying ahead of emerging cyber threats',
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Swift incident handling and recovery',
    },
  ];

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setIsVisible(true);
          hasAnimatedRef.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // CTF command handlers
  const handleCommand = (input: string): string => {
    const trimmedInput = input.trim().toLowerCase();
    const parts = trimmedInput.split(' ');
    const command = parts[0];
    const args = parts.slice(1).join(' ');

    // Increment command count and check limit
    let newCount = 0;
    setCommandCount((prev) => {
      newCount = prev + 1;
      return newCount;
    });

    // Check if command limit reached (after 5 commands)
    if (newCount > 5 && !hasShell) {
      return "⚠️ Command limit reached! Use 'reset' to try again or 'clear' to start over.";
    }
    
    // Warning at 4 commands
    if (newCount === 4 && !hasShell) {
      // Still process the command, but we'll show warning in UI
    }

    switch (command) {
      case 'pwd':
        setCtfStage('enumeration');
        return '/home/user/sathish';
      
      case 'ls':
        if (ctfStage === 'none') setCtfStage('enumeration');
        if (hasShell) {
          return 'backup.sh  flag.txt  README';
        }
        return 'backup.sh  flag.txt  README';
      
      case 'cat':
        if (args.includes('backup.sh') || args === 'backup.sh') {
          setCtfStage('exploitation');
          return `#!/bin/bash
# Vulnerable backup script
# Warning: This script runs with elevated privileges
tar -czf /tmp/backup.tar.gz *
echo "Backup completed"`;
        }
        if (args.includes('flag.txt') || args === 'flag.txt') {
          if (!hasShell) {
            return 'cat: flag.txt: Permission denied';
          }
          setCtfStage('flag');
          setShowConfetti(true);
          return '🎉 CYBER{SECURITY_MASTER_2024} 🎉\n\nCongratulations! You successfully:\n1. Enumerated the system\n2. Found the vulnerable script\n3. Exploited it to get a shell\n4. Read the flag!\n\nYou\'re a true cybersecurity expert! 🚀';
        }
        if (args.includes('readme') || args === 'readme') {
          return 'Welcome to the CTF challenge!\n\nYour goal: Get a shell and read flag.txt\n\nHint: Check the backup script...';
        }
        return `cat: ${args || 'file'}: No such file or directory`;
      
      case './backup.sh':
      case 'bash':
      case 'sh':
        if (args.includes('backup.sh') || command === './backup.sh') {
          if (ctfStage === 'exploitation' || ctfStage === 'enumeration' || ctfStage === 'none') {
            setHasShell(true);
            setCtfStage('shell');
            return '$ Shell access granted!\nYou now have elevated privileges.\nTry reading the flag now...';
          }
          return 'Permission denied. Try enumerating first (pwd, ls).';
        }
        if (hasShell) {
          return '$ Shell is already active.';
        }
        return `command not found: ${command}`;
      
      case 'whoami':
        if (hasShell) {
          return 'root';
        }
        return 'user';
      
      case 'help':
        if (hasShell) {
          return 'You have shell access! Try: cat flag.txt';
        }
        return 'Available commands: pwd, ls, cat, help, clear\n\nGoal: Get a shell and read flag.txt\nHint: Start with enumeration (pwd, ls)';
      
      case 'clear':
        setUserCommands([]);
        setCommandCount(0);
        setCtfStage('none');
        setHasShell(false);
        setShowConfetti(false);
        return '';
      
      case 'reset':
        setUserCommands([]);
        setCommandCount(0);
        setCtfStage('none');
        setHasShell(false);
        setShowConfetti(false);
        return 'CTF challenge reset. Good luck!';
      
      case '':
        return '';
      
      default:
        return `command not found: ${command}`;
    }
  };

  // Enable interactive mode after animation completes
  useEffect(() => {
    if (showFinalCursor && !isInteractive) {
      const timer = setTimeout(() => {
        setIsInteractive(true);
        setShowHint(true);
        // Hide hint after 5 seconds
        setTimeout(() => setShowHint(false), 5000);
      }, 200); // Reduced delay: 200ms before interactive mode
      return () => clearTimeout(timer);
    }
  }, [showFinalCursor, isInteractive]);

  // Handle keyboard input
  useEffect(() => {
    if (!isInteractive || !terminalRef.current) return;

    const terminal = terminalRef.current;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if terminal is focused
      if (document.activeElement !== terminal) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        if (userInput.trim()) {
          const output = handleCommand(userInput);
          setUserCommands((prev) => [...prev, { command: userInput, output }]);
          setUserInput('');
        } else {
          // Empty enter, just show prompt
          setUserCommands((prev) => [...prev, { command: '', output: '' }]);
        }
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        setUserInput((prev) => prev.slice(0, -1));
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // Regular character input (exclude special keys)
        e.preventDefault();
        setUserInput((prev) => prev + e.key);
      }
    };

    terminal.addEventListener('keydown', handleKeyDown);
    return () => {
      terminal.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInteractive, userInput]);

  // Typing animation effect
  useEffect(() => {
    if (!isVisible || currentCommandIndex >= commands.length) {
      if (currentCommandIndex >= commands.length && !showFinalCursor) {
        // All commands completed, show final cursor
        setTimeout(() => setShowFinalCursor(true), 100); // Reduced delay: 100ms
      }
      return;
    }

    const currentCommand = commands[currentCommandIndex];
    let timeoutId: NodeJS.Timeout;

    // Start typing the command
    if (!currentCommand.isTypingCommand && !currentCommand.isComplete) {
      setCommands((prev) => {
        const updated = [...prev];
        updated[currentCommandIndex] = { ...updated[currentCommandIndex], isTypingCommand: true };
        return updated;
      });

      // Type command character by character
      const typeCommand = () => {
        setCommands((prev) => {
          const current = prev[currentCommandIndex];
          if (current.displayedCommandLength < current.fullCommand.length) {
            const updated = [...prev];
            const newLength = updated[currentCommandIndex].displayedCommandLength + 1;
            updated[currentCommandIndex] = {
              ...updated[currentCommandIndex],
              displayedCommandLength: newLength,
            };
            
            // Schedule next character
            if (newLength < current.fullCommand.length) {
              setTimeout(() => typeCommand(), 15); // Faster typing: 15ms per character
            } else {
              // Command fully typed, wait then show output
              setTimeout(() => {
                setCommands((prev) => {
                  const updated = [...prev];
                  updated[currentCommandIndex] = {
                    ...updated[currentCommandIndex],
                    isTypingCommand: false,
                    isShowingOutput: true,
                  };
                  return updated;
                });

                // Type output character by character
                const typeOutput = () => {
                  setCommands((prev) => {
                    const current = prev[currentCommandIndex];
                    if (current.displayedOutputLength < current.fullOutput.length) {
                      const updated = [...prev];
                      const newLength = updated[currentCommandIndex].displayedOutputLength + 1;
                      updated[currentCommandIndex] = {
                        ...updated[currentCommandIndex],
                        displayedOutputLength: newLength,
                      };
                      
                      // Schedule next character or completion
                      if (newLength < current.fullOutput.length) {
                        setTimeout(() => typeOutput(), 10); // Very fast output typing: 10ms per character
                      } else {
                        // Output complete, mark command as complete
                        updated[currentCommandIndex] = {
                          ...updated[currentCommandIndex],
                          isShowingOutput: false,
                          isComplete: true,
                        };
                        // Wait before starting next command
                        setTimeout(() => {
                          setCurrentCommandIndex((prev) => prev + 1);
                        }, 200); // Reduced wait: 200ms between commands
                      }
                      
                      return updated;
                    }
                    return prev;
                  });
                };
                typeOutput();
              }, 100); // Reduced pause: 100ms after command before showing output
            }
            
            return updated;
          }
          return prev;
        });
      };
      typeCommand();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isVisible, currentCommandIndex]);

  // Get stage label and emoji
  const getStageInfo = () => {
    switch (ctfStage) {
      case 'enumeration':
        return { label: '🔍 Enumeration', color: 'text-primary' };
      case 'exploitation':
        return { label: '⚡ Exploitation', color: 'text-secondary' };
      case 'shell':
        return { label: '🐚 Shell Access', color: 'text-accent' };
      case 'flag':
        return { label: '🏁 Flag Captured!', color: 'text-primary' };
      default:
        return { label: 'Ready to start', color: 'text-muted-foreground' };
    }
  };

  const stageInfo = getStageInfo();

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">
      <Confetti trigger={showConfetti} />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-primary text-sm uppercase tracking-widest mb-4">
              {'// About Me'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Your <span className="text-primary text-glow">Cyber Guardian</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo & Terminal Window */}
            <div className="relative space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center md:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-primary/30 ring-4 ring-primary/10 shadow-2xl">
                    <img
                      src="/images/sathish-profile.png"
                      alt="Sathish Kumar Balakrishnan - Cybersecurity Expert"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Terminal Window */}
              <div className="relative">
                <div className="bg-card border border-primary/30 rounded-lg overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-primary/20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                      <span className="ml-2 font-mono text-xs text-muted-foreground">about_sathish.sh</span>
                    </div>
                    {isInteractive && (
                      <div className="flex items-center gap-3 text-xs">
                        <span className={`font-mono ${stageInfo.color}`}>
                          {stageInfo.label}
                        </span>
                        {commandCount > 0 && (
                          <span className="text-muted-foreground font-mono">
                            Commands: {commandCount}/5
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Terminal Content */}
                  <div
                    ref={terminalRef}
                    tabIndex={isInteractive ? 0 : -1}
                    className={`p-6 font-mono text-sm space-y-3 scanline min-h-[280px] ${
                      isInteractive ? 'cursor-text focus:outline-none focus:ring-2 focus:ring-primary/50' : ''
                    }`}
                    onClick={() => {
                      if (isInteractive && terminalRef.current) {
                        terminalRef.current.focus();
                      }
                    }}
                  >
                    {commands.map((cmd, idx) => {
                      const displayedCommand = cmd.fullCommand.substring(0, cmd.displayedCommandLength);
                      const displayedOutput = cmd.fullOutput.substring(0, cmd.displayedOutputLength);
                      const [commandName, ...commandArgs] = displayedCommand.split(' ');
                      const isCurrentCommand = idx === currentCommandIndex;
                      const showCommandCursor = isCurrentCommand && cmd.isTypingCommand;
                      const showOutputCursor = isCurrentCommand && cmd.isShowingOutput && !cmd.isComplete;

                      return (
                        <div key={idx} className="space-y-1">
                          <p>
                            <span className="text-secondary">$</span>{' '}
                            {displayedCommand && (
                              <>
                                <span className="text-primary">{commandName}</span>
                                {commandArgs.length > 0 && ' ' + commandArgs.join(' ')}
                              </>
                            )}
                            {showCommandCursor && <span className="typing-cursor" />}
                          </p>
                          {(cmd.isShowingOutput || cmd.isComplete) && displayedOutput && (
                            <p className="text-muted-foreground pl-4">
                              {displayedOutput}
                              {showOutputCursor && <span className="typing-cursor" />}
                            </p>
                          )}
                        </div>
                      );
                    })}
                    
                    {/* Blinking cursor after all commands (before interactive mode) */}
                    {showFinalCursor && !isInteractive && (
                      <p>
                        <span className="text-secondary">$</span>{' '}
                        <span className="typing-cursor" />
                      </p>
                    )}

                    {/* Interactive hint */}
                    {isInteractive && showHint && (
                      <p className="text-muted-foreground/70 text-xs italic animate-fade-out">
                        💡 CTF Challenge: Get a shell and read flag.txt! Start with: pwd
                      </p>
                    )}
                    
                    {/* Command limit warning */}
                    {isInteractive && commandCount >= 4 && !hasShell && (
                      <p className="text-yellow-500 text-xs font-mono animate-pulse">
                        ⚠️ Warning: {5 - commandCount} command{5 - commandCount === 1 ? '' : 's'} remaining!
                      </p>
                    )}

                    {/* User commands and responses */}
                    {userCommands.map((userCmd, idx) => (
                      <div key={idx} className="space-y-1">
                        {userCmd.command && (
                          <p>
                            <span className="text-secondary">$</span>{' '}
                            <span className="text-foreground">{userCmd.command}</span>
                          </p>
                        )}
                        {userCmd.output && (
                          <div className="text-muted-foreground pl-4 whitespace-pre-line">
                            {userCmd.output}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Interactive input line */}
                    {isInteractive && (
                      <p>
                        <span className="text-secondary">$</span>{' '}
                        <span className="text-foreground">{userInput}</span>
                        <span className="typing-cursor" />
                      </p>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-primary/30 rounded-lg -z-10" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-secondary/30 rounded-lg -z-10" />
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card/30 border border-primary/10 rounded-lg hover:border-primary/40 transition-all duration-300 group cursor-default"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
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
  );
};

export default AboutSection;
