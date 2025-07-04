import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Building2 } from 'lucide-react';
import { pharmaceuticalCompanies } from '../data/pharmaceuticalCompanies';

const Distributors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(5);
      } else {
        setItemsPerView(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= pharmaceuticalCompanies.length ? 0 : prevIndex + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, pharmaceuticalCompanies.length - itemsPerView) : Math.max(0, prevIndex - itemsPerView)
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [itemsPerView]);

  const visibleCompanies = pharmaceuticalCompanies.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section id="distributors" className="py-12 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gray-500 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4 border border-red-200">
              <Building2 className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-800">Our Partners</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Authorized Distributor For
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We proudly serve as authorized distributors for leading pharmaceutical companies, 
              ensuring authentic products and reliable supply chains across India.
            </p>
          </div>

          {/* Enhanced Carousel Container */}
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl shadow-xl p-6 border border-gray-200 overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-gray-500/5 to-red-500/5 pointer-events-none"></div>
              
              <div className="relative flex items-center justify-between">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 z-20 w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 shadow-xl rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 text-white"
                  aria-label="Previous companies"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Companies Grid */}
                <div className="flex-1 mx-12">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {visibleCompanies.map((company, index) => (
                      <div
                        key={`${currentIndex}-${index}`}
                        className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-white transition-all duration-500 min-h-[100px] border border-transparent hover:border-red-200 hover:shadow-lg"
                      >
                        <div className="relative w-12 h-12 mb-3">
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl"></div>
                          <div className="relative w-full h-full flex items-center justify-center">
                            <img
                              src={`https://logo.clearbit.com/${company.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`}
                              alt={`${company} logo`}
                              className="w-8 h-8 object-contain rounded relative z-10"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            <div 
                              className="absolute inset-0 text-white font-bold text-sm hidden items-center justify-center"
                              style={{ display: 'none' }}
                            >
                              {company.charAt(0)}
                            </div>
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Sparkles className="w-2 h-2 text-white p-0.5" />
                          </div>
                        </div>
                        <h3 className="text-xs font-bold text-gray-900 text-center leading-tight group-hover:text-red-800 transition-colors duration-300">
                          {company}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-2 z-20 w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 shadow-xl rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 text-white"
                  aria-label="Next companies"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Enhanced Pagination Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(pharmaceuticalCompanies.length / itemsPerView) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * itemsPerView)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / itemsPerView) === index
                        ? 'bg-gradient-to-r from-red-600 to-red-700 scale-125 shadow-lg'
                        : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-1 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-3xl p-6">
                <p className="text-gray-600 mb-4 text-base">
                  <span className="font-bold text-2xl text-red-600">
                    {pharmaceuticalCompanies.length}+
                  </span>
                  <br />
                  trusted pharmaceutical partners and growing...
                </p>
                <div className="max-w-xl mx-auto">
                  <p className="text-gray-700 font-semibold mb-4 text-base">
                    Looking to partner with us? We're always open to new collaborations.
                  </p>
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Building2 className="w-4 h-4" />
                    Partner With Us
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributors;