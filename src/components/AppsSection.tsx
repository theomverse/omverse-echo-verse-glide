
import { useEffect, useRef } from 'react';

const AppsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.app-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-8');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const apps = [
    {
      id: 1,
      name: 'Creative Studio',
      description: 'Design tools for the future',
      image: '/placeholder.svg',
      category: 'Design'
    },
    {
      id: 2,
      name: 'Data Analytics',
      description: 'Insights that matter',
      image: '/placeholder.svg',
      category: 'Analytics'
    },
    {
      id: 3,
      name: 'Social Connect',
      description: 'Connect across universes',
      image: '/placeholder.svg',
      category: 'Social'
    },
    {
      id: 4,
      name: 'AI Assistant',
      description: 'Your intelligent companion',
      image: '/placeholder.svg',
      category: 'AI'
    },
    {
      id: 5,
      name: 'Project Manager',
      description: 'Organize your universe',
      image: '/placeholder.svg',
      category: 'Productivity'
    },
    {
      id: 6,
      name: 'Code Editor',
      description: 'Build the future',
      image: '/placeholder.svg',
      category: 'Development'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white" id="apps">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured Apps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of powerful applications, each designed to unlock new possibilities in your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div
              key={app.id}
              className="app-card group bg-black rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 opacity-0 translate-y-8"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-green-700 to-green-900 relative overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, #1a3d2e 0%, #0f2419 100%)'
                   }}>
                <img 
                  src={app.image} 
                  alt={app.name}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium">
                    {app.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {app.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {app.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                          style={{
                            background: 'linear-gradient(135deg, #1a3d2e 0%, #0f2419 100%)'
                          }}>
                    Explore
                  </button>
                  <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300"
                       style={{
                         background: 'linear-gradient(135deg, #1a3d2e 0%, #0f2419 100%)'
                       }}>
                    <span className="text-white font-bold text-sm">→</span>
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
