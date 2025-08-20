
import { useEffect, useRef, useState, useCallback } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Throttled scroll handler for better performance
  const throttledScrollHandler = useCallback(() => {
    let ticking = false;
    
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only add scroll listener on desktop for parallax
    const scrollHandler = throttledScrollHandler();
    if (!isMobile) {
      window.addEventListener('scroll', scrollHandler, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [throttledScrollHandler, isMobile]);

  // Mobile-optimized text animation
  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    if (isMobile) {
      // Simple fade-in for mobile
      return (
        <span className={`inline-block transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          {text}
        </span>
      );
    }

    // Character-by-character animation for desktop
    return (
      <span className="inline-block">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-300 ${
              isVisible 
                ? 'text-white transform translate-y-0' 
                : 'text-gray-800 transform translate-y-2'
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black overflow-hidden reduce-motion"
      style={{
        background: 'linear-gradient(135deg, #1a3d2e 0%, #0f2419 50%, #000000 100%)'
      }}
    >
      {/* Conditional Parallax Background - Desktop Only */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)'
          }}
        />
      )}

      {/* Static background for mobile */}
      {isMobile && (
        <div className="absolute inset-0 opacity-10 bg-gradient-radial from-white/10 to-transparent" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-150px)] sm:min-h-[calc(100vh-200px)]">
          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 
                className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white"
                style={!isMobile ? {
                  transform: `scale(${1 + scrollY * 0.0002})`
                } : {}}
              >
                <AnimatedText text="Welcome to" />
                <br />
                <AnimatedText text="OMVERSE" delay={500} />
              </h1>
              
              <p className="text-lg xs:text-xl sm:text-2xl text-green-100 max-w-md mx-auto lg:mx-0">
                <AnimatedText text="Where every app is a universe" delay={1000} />
              </p>
            </div>

            {/* App Cards Carousel - Mobile Optimized */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-green-200">Featured Apps</h3>
              <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 mobile-scroll-optimized">
                {[
                  { name: 'AppOne', color: 'from-blue-500 to-blue-700' },
                  { name: 'AppTwo', color: 'from-purple-500 to-purple-700' },
                  { name: 'AppThree', color: 'from-orange-500 to-orange-700' },
                  { name: 'AppFour', color: 'from-pink-500 to-pink-700' }
                ].map((app, index) => (
                  <div
                    key={app.name}
                    className="flex-shrink-0 group touch-button mobile-touch-target"
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className={`w-40 sm:w-48 h-28 sm:h-32 bg-gradient-to-br ${app.color} rounded-xl p-3 sm:p-4 backdrop-blur-lg bg-opacity-20 border border-white/20 transition-all duration-300 ${
                      isMobile ? 'active:scale-95' : 'hover:scale-105 hover:-translate-y-2 hover:shadow-2xl'
                    }`}>
                      <div className="h-full flex flex-col justify-between">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">{app.name[3]}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm sm:text-lg">{app.name}</h4>
                          <p className="text-white/70 text-xs sm:text-sm">Explore universe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - App Showcase - Hidden on Mobile for Performance */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 rounded-2xl" />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">App {i + 1}</h4>
                      <p className="text-green-200 text-sm">Universe</p>
                    </div>
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

export default HeroSection;
