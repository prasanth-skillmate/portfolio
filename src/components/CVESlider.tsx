import { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CVE {
  id: string;
  product: string;
  vulnerability: string;
  logo?: string;
  reference: string;
}

const cveData: CVE[] = [
  // WordPress Plugins
  {
    id: 'CVE-2015-9228',
    product: 'Photocrati NextGEN Gallery WordPress Plugin',
    vulnerability: 'Malicious File Upload',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-9228',
  },
  {
    id: 'CVE-2015-9229',
    product: 'Photocrati NextGEN Gallery WordPress Plugin',
    vulnerability: 'Multiple Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-9229',
  },
  {
    id: 'CVE-2015-9230',
    product: 'BulletProof Security WordPress Plugin',
    vulnerability: 'Stored Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-9230',
  },
  {
    id: 'CVE-2017-14530',
    product: 'Blubrry PowerPress Podcast WordPress Plugin',
    vulnerability: 'Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-14530',
  },
  {
    id: 'CVE-2015-9537',
    product: 'NextGEN Gallery WordPress Plugin',
    vulnerability: 'Multiple Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-9537',
  },
  {
    id: 'CVE-2015-9538',
    product: 'NextGEN Gallery WordPress Plugin',
    vulnerability: 'Directory Traversal',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-9538',
  },
  {
    id: 'CVE-2015-9539',
    product: 'Fast Secure Contact Form WordPress Plugin',
    vulnerability: 'Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-9539',
  },
  {
    id: 'CVE-2017-14530',
    product: 'Crony Cronjob Manager WordPress Plugin',
    vulnerability: 'Cross site Request Forgery',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-14530',
  },
  // NETGEAR
  {
    id: 'CVE-2016-11014',
    product: 'NETGEAR JNR1010',
    vulnerability: 'Missing Access Control',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-11014',
  },
  {
    id: 'CVE-2016-11015',
    product: 'NETGEAR JNR1010',
    vulnerability: 'Cross site Request Forgery',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-11015',
  },
  {
    id: 'CVE-2016-11016',
    product: 'NETGEAR JNR1010',
    vulnerability: 'Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-11016',
  },
  // WSO2 Products
  {
    id: 'CVE-2017-14651',
    product: 'Data Analytics Server WSO2',
    vulnerability: 'Multiple Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-14651',
  },
  {
    id: 'CVE-2019-20434',
    product: 'API Manager WSO2',
    vulnerability: 'Multiple Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20434',
  },
  {
    id: 'CVE-2019-20435',
    product: 'API Manager WSO2',
    vulnerability: 'Reflected Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20435',
  },
  {
    id: 'CVE-2019-20436',
    product: 'API Manager WSO2',
    vulnerability: 'Stored Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20436',
  },
  {
    id: 'CVE-2019-20437',
    product: 'API Manager WSO2',
    vulnerability: 'Stored Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20437',
  },
  {
    id: 'CVE-2019-20438',
    product: 'API Manager WSO2',
    vulnerability: 'Stored Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20438',
  },
  {
    id: 'CVE-2019-20439',
    product: 'API Manager WSO2',
    vulnerability: 'Reflected Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20439',
  },
  {
    id: 'CVE-2019-20440',
    product: 'API Manager WSO2',
    vulnerability: 'Reflected Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20440',
  },
  {
    id: 'CVE-2019-20441',
    product: 'API Manager WSO2',
    vulnerability: 'Stored Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20441',
  },
  {
    id: 'CVE-2019-20442',
    product: 'API Manager WSO2',
    vulnerability: 'Stored Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20442',
  },
  {
    id: 'CVE-2019-20443',
    product: 'API Manager WSO2',
    vulnerability: 'Stored Cross site scripting',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20443',
  },
  // TIBCO
  {
    id: 'CVE-2018-18809',
    product: 'JasperSoft TIBCO',
    vulnerability: 'Directory Traversal',
    reference: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-18809',
  },
];

const CVESlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const cardWidth = 320; // w-80 = 320px
  const cardGap = 16; // gap-4 = 16px
  const cardWidthWithGap = cardWidth + cardGap;

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const scrollPosition = index * cardWidthWithGap;
    scrollContainerRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  // Initialize scroll position
  useEffect(() => {
    scrollToCard(0);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const moveNext = () => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % cveData.length;
        scrollToCard(next);
        return next;
      });
    };

    // Move one card, wait 1 second, then move again
    intervalRef.current = setInterval(() => {
      moveNext();
    }, 2000); // 1 second pause + 1 second for transition

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % cveData.length;
        scrollToCard(next);
        return next;
      });
    }, 2000);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + cveData.length) % cveData.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
    startAutoAdvance();
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % cveData.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
    startAutoAdvance();
  };

  const getProductIcon = (product: string) => {
    // Determine icon/logo based on product name with larger, more visible icons
    if (product.includes('NextGEN') || product.includes('Photocrati')) {
      // Green grid icon for NextGEN Gallery plugins
      return (
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-green-400/30">
          <div className="grid grid-cols-2 gap-1.5 p-1.5">
            <div className="w-5 h-5 bg-white rounded-sm shadow-sm"></div>
            <div className="w-5 h-5 bg-white rounded-sm shadow-sm"></div>
            <div className="w-5 h-5 bg-white rounded-sm shadow-sm"></div>
            <div className="w-5 h-5 bg-white rounded-sm shadow-sm"></div>
          </div>
        </div>
      );
    }
    if (product.includes('WordPress')) {
      return (
        <div className="w-16 h-16 bg-gradient-to-br from-[#21759b] to-[#1e6a8e] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-[#21759b]/30">
          <div className="text-center">
            <div className="text-2xl mb-0.5">🟢</div>
            <div className="text-xs">WP</div>
          </div>
        </div>
      );
    }
    if (product.includes('BulletProof')) {
      // BPS logo with dark rounded square, vertical gradient, diagonal letters, and blue bar
      return (
        <div className="w-16 h-16 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg border-2 border-gray-700/50 relative overflow-hidden">
          {/* Blue horizontal bar with gradient - lighter in middle, darker at edges */}
          <div className="absolute w-full h-5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-90" style={{
            top: '50%',
            transform: 'translateY(-50%)'
          }}></div>
          
          {/* Letters with 3D embossed effect, arranged diagonally */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* B - Upper left */}
            <span className="absolute top-1.5 left-2 text-white font-black text-base leading-none uppercase" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 1px 2px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}>B</span>
            
            {/* P - Center, larger, on top of blue bar */}
            <span className="absolute text-white font-black text-2xl leading-none uppercase" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 1px 2px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}>P</span>
            
            {/* S - Lower right */}
            <span className="absolute bottom-1.5 right-2 text-white font-black text-base leading-none uppercase" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 1px 2px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}>S</span>
          </div>
        </div>
      );
    }
    if (product.includes('Blubrry')) {
      // Blubrry PowerPress logo - stylized "p" with gradient, plug, and blueberry icon
      return (
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-gray-200 p-2">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="blubrryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>
            
            {/* Stylized lowercase "p" with gradient */}
            <path
              d="M 25 20 Q 25 15 30 15 L 50 15 Q 65 15 70 30 Q 70 45 60 50 Q 70 55 70 70 L 70 85 L 25 85 L 25 20 Z"
              fill="url(#blubrryGradient)"
              stroke="none"
              strokeWidth="2"
            />
            
            {/* Electrical plug at the beginning (top-left) */}
            <rect x="20" y="12" width="8" height="6" rx="1" fill="#4ade80" />
            <line x1="22" y1="15" x2="22" y2="10" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
            <line x1="26" y1="15" x2="26" y2="10" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
            
            {/* Blueberry/Podcast icon in the upper curve */}
            <circle cx="65" cy="30" r="8" fill="#1e40af" />
            <path d="M 65 22 Q 65 20 67 20 Q 69 20 69 22" stroke="#0f172a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M 63 25 Q 63 23 61 23" stroke="#0f172a" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path d="M 67 25 Q 67 23 69 23" stroke="#0f172a" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );
    }
    if (product.includes('Fast Secure')) {
      // Light plaid pattern - pale yellow/cream background with subtle gray grid
      return (
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg flex items-center justify-center shadow-lg border-2 border-yellow-200/50 relative overflow-hidden">
          {/* Subtle gray grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(156, 163, 175, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(156, 163, 175, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px'
          }}></div>
          {/* Additional grid layer for darker intersections */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(107, 114, 128, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(107, 114, 128, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0'
          }}></div>
        </div>
      );
    }
    if (product.includes('Crony')) {
      // Crony logo - dark red background with scattered lighter red hexagons
      return (
        <div className="w-16 h-16 bg-red-900 rounded-lg flex items-center justify-center shadow-lg border-2 border-red-800/50 relative overflow-hidden">
          {/* Scattered hexagons pattern */}
          <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full opacity-60">
            {/* Hexagon 1 - top left */}
            <polygon
              points="12,8 18,8 21,14 18,20 12,20 9,14"
              fill="#ef4444"
              opacity="0.7"
              style={{ filter: 'blur(0.5px)' }}
            />
            {/* Hexagon 2 - center */}
            <polygon
              points="28,24 34,24 37,30 34,36 28,36 25,30"
              fill="#dc2626"
              opacity="0.8"
              style={{ filter: 'blur(0.5px)' }}
            />
            {/* Hexagon 3 - bottom right */}
            <polygon
              points="44,40 50,40 53,46 50,52 44,52 41,46"
              fill="#f87171"
              opacity="0.6"
              style={{ filter: 'blur(0.5px)' }}
            />
            {/* Hexagon 4 - top right */}
            <polygon
              points="48,12 54,12 57,18 54,24 48,24 45,18"
              fill="#dc2626"
              opacity="0.7"
              style={{ filter: 'blur(0.5px)' }}
            />
            {/* Hexagon 5 - bottom left */}
            <polygon
              points="8,36 14,36 17,42 14,48 8,48 5,42"
              fill="#ef4444"
              opacity="0.65"
              style={{ filter: 'blur(0.5px)' }}
            />
            {/* Hexagon 6 - middle left */}
            <polygon
              points="16,28 22,28 25,34 22,40 16,40 13,34"
              fill="#f87171"
              opacity="0.55"
              style={{ filter: 'blur(0.5px)' }}
            />
            {/* Hexagon 7 - middle right */}
            <polygon
              points="40,28 46,28 49,34 46,40 40,40 37,34"
              fill="#dc2626"
              opacity="0.7"
              style={{ filter: 'blur(0.5px)' }}
            />
          </svg>
        </div>
      );
    }
    if (product.includes('NETGEAR')) {
      return (
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-gray-200 p-2">
          <img 
            src="/images/netgear-logo.svg" 
            alt="NETGEAR Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    if (product.includes('WSO2')) {
      // WSO2 logo - "WS" in orange, circular "O" with waveform, "2" in black
      return (
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-gray-200 p-2">
          <div className="flex items-center justify-center gap-0.5">
            {/* WS in orange */}
            <span className="text-orange-500 font-bold text-lg leading-none">WS</span>
            
            {/* Circular O with waveform */}
            <div className="relative">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                {/* Orange circle with black border */}
                <circle cx="12" cy="12" r="10" fill="#f97316" stroke="#000" strokeWidth="1.5" />
                {/* White waveform inside */}
                <path
                  d="M 6 12 L 8 8 L 10 12 L 12 8 L 14 12 L 16 8 L 18 12"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* 2 in black */}
            <span className="text-black font-bold text-lg leading-none">2</span>
          </div>
        </div>
      );
    }
    if (product.includes('TIBCO') || product.includes('JasperSoft')) {
      return (
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-gray-200 p-2">
          <img 
            src="/images/jaspersoft-tibco-logo.png" 
            alt="JasperSoft TIBCO Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    return (
      <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white shadow-lg border-2 border-gray-600/30">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
    );
  };

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Zero-Day Vulnerabilities Discovered</h2>
          <p className="text-muted-foreground">
            {cveData.length} CVEs discovered across multiple platforms and products
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg h-12 w-12 rounded-full"
            aria-label="Previous CVE"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Right Arrow Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg h-12 w-12 rounded-full"
            aria-label="Next CVE"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-hidden scrollbar-hide px-16"
            style={{
              scrollBehavior: 'smooth',
            }}
          >
            <div className="flex gap-4 py-2" style={{ width: 'max-content' }}>
              {cveData.map((cve, index) => (
                <Card
                  key={cve.id}
                  className="flex-shrink-0 w-80 h-48 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
                  onClick={() => window.open(cve.reference, '_blank')}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Product Icon/Logo - Uniform size */}
                      <div className="flex-shrink-0 flex items-center">
                        {getProductIcon(cve.product)}
                      </div>

                      {/* CVE Details - Uniform layout */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="mb-3 flex-1">
                          <h3 className="font-semibold text-xs text-muted-foreground mb-1.5 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', minHeight: '2.5rem' }}>
                            {cve.product}
                          </h3>
                          <p className="text-sm font-semibold mb-2 text-foreground overflow-hidden text-ellipsis whitespace-nowrap">{cve.vulnerability}</p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t mt-auto">
                          <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                            {cve.id}
                          </span>
                          <a
                            href={cve.reference}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-primary hover:text-primary/80 hover:underline flex items-center gap-1 transition-colors whitespace-nowrap"
                          >
                            Reference
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CVESlider;

