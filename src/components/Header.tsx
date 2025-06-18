
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-base">O</span>
            </div>
            <span className={`font-bold text-lg lg:text-xl transition-all duration-500 ${
              isScrolled 
                ? 'opacity-0 translate-x-[-20px]' 
                : 'opacity-100 translate-x-0'
            } ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
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
                    ? 'text-gray-900 hover:text-green-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 space-y-3">
            {['Home', 'Apps', "Let's Talk", 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace("'", '').replace(' ', '-')}`}
                className={`block font-medium py-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-green-600' 
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* App Icons Slider - appears on scroll */}
      <div className={`transition-all duration-500 ${
        isScrolled 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-[-20px] pointer-events-none'
      }`}>
        <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 py-2">
          <div className="animate-scroll-left flex space-x-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">A{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
