
import { useState } from 'react';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const termsContent = `
**Terms and Conditions for THE OMVERSE**

Last updated: 18/06/2025

Welcome to THE OMVERSE. These Terms and Conditions govern your use of our website. By accessing or using this website, you agree to comply with and be bound by the following terms.

**1. Acceptance of Terms**
By accessing this website, you accept these Terms and Conditions. If you do not agree with any part of these terms, please do not use the website.

**2. Intellectual Property Rights**
All content on THE OMVERSE, including text, graphics, logos, images, and design, is the property of THE OMVERSE and protected by applicable intellectual property laws. You may not reuse or reproduce any part of this site without our prior written permission.

**3. Restrictions**
You are specifically restricted from:
• Republishing website material without credit
• Selling or sublicensing material from the website
• Using this website in any way that is damaging or illegal

**4. No User Accounts**
THE OMVERSE does not allow the creation of user accounts or profiles.

**5. Limitation of Liability**
THE OMVERSE shall not be held liable for any direct or indirect damages resulting from the use or inability to use the website.

**6. Governing Law**
These terms are governed by the laws of India. Any disputes will be handled under the jurisdiction of Indian courts.

**7. Contact Information**
If you have any questions about these Terms, please contact us at omverse69@gmail.com.
  `;

  const privacyContent = `
**Privacy Policy for THE OMVERSE**

Last updated: 18/06/2025

At THE OMVERSE, we respect your privacy. This policy outlines how we handle information — even though we do not collect personal data.

**1. No Data Collection**
We do not collect personal identification information such as names, emails, or phone numbers through our website.

**2. No Cookies**
Our website does not use cookies or tracking technologies.

**3. No Third-Party Services**
We do not use third-party analytics, advertising, or data processing services.

**4. Children's Privacy**
Our website is not directed toward children under 13. We do not knowingly collect data from children.

**5. Changes to this Privacy Policy**
We may update this Privacy Policy as needed. Any changes will be posted on this page with a new "Last Updated" date.

**6. Contact Us**
If you have questions or concerns about our privacy practices, please contact us at omverse69@gmail.com.
  `;

  return (
    <>
      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Terms and Conditions</h2>
              <button 
                onClick={() => setShowTerms(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            <div className="prose max-w-none">
              {termsContent.split('\n').map((line, index) => (
                <p key={index} className={`${line.startsWith('**') ? 'font-bold text-lg mt-4' : 'mb-2'}`}>
                  {line.replace(/\*\*/g, '')}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            <div className="prose max-w-none">
              {privacyContent.split('\n').map((line, index) => (
                <p key={index} className={`${line.startsWith('**') ? 'font-bold text-lg mt-4' : 'mb-2'}`}>
                  {line.replace(/\*\*/g, '')}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-16" id="contact">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-700 to-green-900 rounded-lg flex items-center justify-center"
                     style={{
                       background: 'linear-gradient(135deg, #1a3d2e 0%, #0f2419 100%)'
                     }}>
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
                    <button 
                      onClick={() => {
                        const targetId = link.toLowerCase();
                        const element = document.getElementById(targetId) || document.body;
                        element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </button>
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
                  href="mailto:omverse69@gmail.com"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold"
                >
                  omverse69@gmail.com
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
              <button 
                onClick={() => setShowTerms(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
              >
                Terms & Conditions
              </button>
              <button 
                onClick={() => setShowPrivacy(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
