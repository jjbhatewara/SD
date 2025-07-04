import React from 'react';
import { Phone, Globe, MapPin, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-6 left-6 w-16 h-16 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-gray-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-red-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <img 
                  src="/SD_LOGO.png" 
                  alt="Sanjay Distributors Logo" 
                  className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-pulse">
                  <Sparkles className="w-3 h-3 text-white p-0.5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Sanjay Distributors
                </h3>
                <p className="text-gray-300 font-medium text-sm">Excellence Since 1977</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted pharmaceutical distribution partner, serving healthcare providers across India 
              with quality products, reliable service, and unwavering commitment to excellence for over four decades.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400 animate-pulse" />
              <span>for healthcare excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'distributors', label: 'Our Partners' },
                { id: 'why-choose-us', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <div className="w-1 h-1 bg-red-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 group cursor-pointer" onClick={() => window.open('tel:+919404756265')}>
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors text-sm">+91 9404756265</p>
                </div>
              </div>

              <div className="flex items-start gap-2 group cursor-pointer" onClick={() => window.open('http://www.sanjaydist.in', '_blank')}>
                <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors text-sm">www.sanjaydist.in</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Lane no 5, opp suvarnakar bhuvan,<br />
                    near parola road, Dhule,<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © {currentYear} Sanjay Distributors. All rights reserved. | Crafted with excellence for healthcare.
            </p>
            <div className="flex space-x-6 mt-3 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Quality Policy'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-xs hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;