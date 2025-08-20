
import { useEffect, useRef, useState } from 'react';

const AppsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Optimized intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.app-card');
            cards.forEach((card, index) => {
              // Shorter delay for mobile
              const delay = isMobile ? index * 100 : index * 150;
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-8');
              }, delay);
            });
          }
        });
      },
      { 
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: isMobile ? '50px' : '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const apps = [
    {
      id: 1,
      name: 'Creative Studio',
      description: 'Design tools for the future',
      image: '/placeholder.svg',
      category: 'Design',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      id: 2,
      name: 'Data Analytics',
      description: 'Insights that matter',
      image: '/placeholder.svg',
      category: 'Analytics',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      id: 3,
      name: 'Social Connect',
      description: 'Connect across universes',
      image: '/placeholder.svg',
      category: 'Social',
      gradient: 'from-pink-600 to-pink-800'
    },
    {
      id: 4,
      name: 'AI Assistant',
      description: 'Your intelligent companion',
      image: '/placeholder.svg',
      category: 'AI',
      gradient: 'from-orange-600 to-orange-800'
    },
    {
      id: 5,
      name: 'Project Manager',
      description: 'Organize your universe',
      image: '/placeholder.svg',
      category: 'Productivity',
      gradient: 'from-emerald-600 to-emerald-800'
    },
    {
      id: 6,
      name: 'Code Editor',
      description: 'Build the future',
      image: '/placeholder.svg',
      category: 'Development',
      gradient: 'from-indigo-600 to-indigo-800'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white reduce-motion" id="apps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Featured Apps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover our collection of powerful applications, each designed to unlock new possibilities in your digital journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {apps.map((app, index) => (
            <div
              key={app.id}
              className={`app-card group bg-white rounded-2xl overflow-hidden transition-all duration-300 opacity-0 translate-y-8 border border-gray-100 ${
                isMobile 
                  ? 'active:scale-95 active:shadow-lg' 
                  : 'hover:shadow-2xl hover:scale-105 hover:-translate-y-2'
              }`}
              style={{
                transitionDelay: `${index * (isMobile ? 100 : 150)}ms`
              }}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${app.gradient} relative overflow-hidden`}>
                <img 
                  src={app.image} 
                  alt={app.name}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium">
                    {app.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {app.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {app.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className={`bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 touch-button mobile-touch-target ${
                    isMobile 
                      ? 'active:from-green-700 active:to-green-800' 
                      : 'hover:from-green-500 hover:to-green-600 hover:scale-105 hover:shadow-lg'
                  }`}>
                    Explore
                  </button>
                  <div className={`w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isMobile 
                      ? 'active:from-green-700 active:to-green-800' 
                      : 'group-hover:from-green-500 group-hover:to-green-600 group-hover:scale-110'
                  }`}>
                    <span className="text-white font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
