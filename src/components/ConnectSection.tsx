
import { Instagram, Linkedin, X, Mail } from 'lucide-react';

const ConnectSection = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: '#', 
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-400/10'
    },
    { 
      name: 'X (Twitter)', 
      icon: X, 
      href: '#', 
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-900/10'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: '#', 
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:hello@omverse.com', 
      color: 'hover:text-teal-400',
      bgColor: 'hover:bg-teal-400/10'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-600 to-cyan-800" id="lets-talk">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Let's Talk
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Ready to explore the universe of possibilities? Connect with us and let's create something amazing together.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className={`group relative p-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${social.bgColor}`}
                aria-label={social.name}
              >
                <IconComponent 
                  size={32} 
                  className={`text-white transition-colors duration-300 ${social.color}`} 
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.name}
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="space-y-6">
          <button className="bg-white text-teal-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Start Your Journey
          </button>
          
          <p className="text-teal-100">
            Or drop us an email at{' '}
            <a 
              href="mailto:hello@omverse.com" 
              className="text-white font-semibold hover:underline transition-all duration-300"
            >
              hello@omverse.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
