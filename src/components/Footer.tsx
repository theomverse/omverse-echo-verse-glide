
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="font-bold text-xl">THE OMVERSE</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Where every app is a universe. Explore infinite possibilities in our digital ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Apps', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h3 className="font-bold text-lg mb-4">Featured Apps</h3>
            <ul className="space-y-2">
              {['Creative Studio', 'Data Analytics', 'Social Connect', 'AI Assistant'].map((app) => (
                <li key={app}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {app}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Have a question?</p>
              <p>Get in touch with us.</p>
              <a 
                href="mailto:hello@omverse.com"
                className="text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold"
              >
                hello@omverse.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 THE OMVERSE. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
