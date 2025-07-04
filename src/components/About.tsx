import React from 'react';
import { Award, Users, Target, Shield, Sparkles, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4 border border-red-200">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-800">Our Story</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              About Sanjay Distributors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established in 1977, we have been at the forefront of pharmaceutical distribution in India, 
              building trust through reliability, quality, and exceptional service for over four decades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img 
                src="/warehouse.jpg" 
                alt="Modern pharmaceutical warehouse with organized medicine storage" 
                className="relative rounded-3xl shadow-xl w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-60 animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Journey
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  Founded in 1977 in Dhule, Maharashtra, Sanjay Distributors began as a small family business 
                  with a vision to bridge the gap between pharmaceutical manufacturers and healthcare providers.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our commitment to quality, reliability, and customer satisfaction has enabled us to build 
                  strong partnerships with leading pharmaceutical companies while serving healthcare providers 
                  across the region with excellence.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                    <Award className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-semibold text-red-800">ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                    <Shield className="w-4 h-4 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-800">Quality Assured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-semibold text-red-800">Growing Strong</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to maintaining the highest standards in pharmaceutical distribution.",
                gradient: "from-red-500 to-red-600"
              },
              {
                icon: Users,
                title: "Relationships",
                description: "Building lasting partnerships with manufacturers and healthcare providers.",
                gradient: "from-gray-600 to-gray-700"
              },
              {
                icon: Target,
                title: "Precision",
                description: "Accurate inventory management and timely delivery across all operations.",
                gradient: "from-red-600 to-red-700"
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "Transparent business practices and ethical pharmaceutical distribution.",
                gradient: "from-gray-700 to-gray-800"
              }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;