
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAppsPanel, setShowAppsPanel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      // Show apps panel after scrolling past hero section (approximately 600px)
      setShowAppsPanel(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredApps = [
    { name: 'Creative Studio', icon: '🎨', color: 'from-purple-500 to-purple-700' },
    { name: 'Data Analytics', icon: '📊', color: 'from-blue-500 to-blue-700' },
    { name: 'Social Connect', icon: '🌐', color: 'from-green-500 to-green-700' },
    { name: 'AI Assistant', icon: '🤖', color: 'from-orange-500 to-orange-700' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="transition-all duration-300 group-hover:scale-110">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-700 to-green-900 rounded-xl flex items-center justify-center"
                   style={{
                     background: 'linear-gradient(135deg, #1a3d2e 0%, #0f2419 100%)'
                   }}>
                <span className="text-white font-bold text-lg lg:text-xl">O</span>
              </div>
            </div>
            <span className={`font-bold text-xl lg:text-2xl transition-all duration-500 ${
              isScrolled 
                ? 'text-gray-900' 
                : 'text-white'
            } hidden sm:block`}>
              THE OMVERSE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Apps', "Let's Talk", 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace("'", '').replace(' ', '-')}`}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-green-700' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Let's Talk CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#lets-talk"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-green-500 hover:to-green-600 glow-effect"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100 pb-6' 
            : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 space-y-4">
            {['Home', 'Apps', "Let's Talk", 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace("'", '').replace(' ', '-')}`}
                className={`block font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:bg-gray-100' 
                    : 'text-white/90 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#lets-talk"
              className="block bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-3 px-4 rounded-full font-semibold transition-all duration-300 hover:from-green-500 hover:to-green-600 mx-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      </div>

      {/* Animated Apps Panel - NewGenGen Style */}
      <div className={`fixed top-20 right-4 z-40 transition-all duration-700 ${
        showAppsPanel && !isMobileMenuOpen
          ? 'opacity-100 translate-x-0 scale-100' 
          : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 p-4 w-64">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Access</h3>
          <div className="space-y-2">
            {featuredApps.map((app, index) => (
              <div
                key={app.name}
                className="group flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${app.color.includes('purple') ? '#8b5cf6, #7c3aed' : app.color.includes('blue') ? '#3b82f6, #2563eb' : app.color.includes('green') ? '#10b981, #059669' : '#f97316, #ea580c'}`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-xl">{app.icon}</div>
                <div>
                  <div className="text-white font-medium text-sm">{app.name}</div>
                  <div className="text-white/80 text-xs">Explore now</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
