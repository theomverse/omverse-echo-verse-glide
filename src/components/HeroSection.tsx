
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

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
      className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                style={{
                  transform: `scale(${1 + scrollY * 0.0002})`
                }}
              >
                <AnimatedText text="Welcome to" />
                <br />
                <AnimatedText text="OMVERSE" delay={500} />
              </h1>
              
              <p className="text-xl lg:text-2xl text-green-100 max-w-md">
                <AnimatedText text="Where every app is a universe" delay={1000} />
              </p>
            </div>

            {/* App Cards Carousel */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-200">Featured Apps</h3>
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {[
                  { name: 'AppOne', color: 'from-blue-500 to-blue-700' },
                  { name: 'AppTwo', color: 'from-purple-500 to-purple-700' },
                  { name: 'AppThree', color: 'from-orange-500 to-orange-700' },
                  { name: 'AppFour', color: 'from-pink-500 to-pink-700' }
                ].map((app, index) => (
                  <div
                    key={app.name}
                    className="flex-shrink-0 group cursor-pointer"
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className={`w-48 h-32 bg-gradient-to-br ${app.color} rounded-xl p-4 backdrop-blur-lg bg-opacity-20 border border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl`}>
                      <div className="h-full flex flex-col justify-between">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{app.name[3]}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">{app.name}</h4>
                          <p className="text-white/70 text-sm">Explore universe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - App Showcase */}
          <div className="relative">
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
