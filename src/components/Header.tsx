import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <img 
                src="/SD_LOGO.png" 
                alt="Sanjay Distributors Logo" 
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-red-500 leading-tight">
                Sanjay Distributors
              </h1>
              <p className="text-xs text-gray-600 font-medium mt-1">Since 1977 • Excellence in Distribution</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 bg-white/90 backdrop-blur-lg rounded-full px-2 py-2 shadow-lg border border-gray-200">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'distributors', label: 'Partners' },
              { id: 'why-choose-us', label: 'Why Us' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 rounded-full transition-all duration-300 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 p-4">
            <div className="flex flex-col space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'distributors', label: 'Partners' },
                { id: 'why-choose-us', label: 'Why Us' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-left px-3 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 rounded-xl transition-all duration-300 font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;