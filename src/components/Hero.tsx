import React, { useEffect, useState } from 'react';
import { Phone, Globe, MapPin, ArrowRight, Zap, Shield, Award } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239,68,68,0.15) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-red-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-gray-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-red-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gray-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-lg px-4 py-2 rounded-full mb-4 border border-red-500/30">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-300">Trusted Since 1977</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-white">
                  Your Trusted
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Pharmaceutical
                </span>
                <br />
                <span className="text-gray-300">
                  Partner
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
                Experience excellence in pharmaceutical distribution with our 45+ years of expertise. 
                We connect healthcare providers with quality products across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Phone className="w-4 h-4 group-hover:animate-bounce" />
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-red-500 mb-1 group-hover:scale-110 transition-transform">
                    45+
                  </div>
                  <div className="text-gray-400 font-medium text-sm">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gray-300 mb-1 group-hover:scale-110 transition-transform">
                    60+
                  </div>
                  <div className="text-gray-400 font-medium text-sm">Partner Companies</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-red-400 mb-1 group-hover:scale-110 transition-transform">
                    24/7
                  </div>
                  <div className="text-gray-400 font-medium text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Logo and Cards */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-4">
                {/* Logo Showcase */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-gray-600 hover:border-red-500 transition-all duration-500 hover:scale-105 group text-center">
                  <img 
                    src="/SD_LOGO.png" 
                    alt="Sanjay Distributors Logo" 
                    className="w-24 h-24 object-contain mx-auto mb-3 group-hover:scale-110 transition-transform duration-500"
                  />
                  <h3 className="text-lg font-bold text-white mb-1">Sanjay Distributors</h3>
                  <p className="text-gray-300 text-sm">Excellence Since 1977</p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-2xl text-white hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105">
                    <Award className="w-6 h-6 mb-2" />
                    <h4 className="font-bold mb-1 text-sm">Excellence</h4>
                    <p className="text-xs opacity-90">Industry Leading</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-2xl text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <MapPin className="w-6 h-6 mb-2" />
                    <h4 className="font-bold mb-1 text-sm">Coverage</h4>
                    <p className="text-xs opacity-90">Pan-India Network</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-red-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gray-500/20 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-red-500 rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;