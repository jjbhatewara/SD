import React from 'react';
import { Clock, Shield, Truck, Users, Star, Globe, Zap, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "45+ Years Experience",
      description: "Nearly five decades of expertise in pharmaceutical distribution.",
      gradient: "from-red-500 to-red-600",
      delay: "0"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Strict quality control and proper storage conditions.",
      gradient: "from-gray-600 to-gray-700",
      delay: "100"
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Efficient logistics network ensuring prompt delivery.",
      gradient: "from-red-600 to-red-700",
      delay: "200"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Professional customer service team available round the clock.",
      gradient: "from-gray-700 to-gray-800",
      delay: "300"
    },
    {
      icon: Star,
      title: "Regulatory Compliance",
      description: "Full compliance with pharmaceutical regulations.",
      gradient: "from-red-500 to-red-600",
      delay: "400"
    },
    {
      icon: Globe,
      title: "Wide Network",
      description: "Extensive distribution covering urban and rural areas.",
      gradient: "from-gray-600 to-gray-700",
      delay: "500"
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(107,114,128,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-red-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-gray-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-10 h-10 bg-red-400/20 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-4 border border-white/20">
              <Zap className="w-4 h-4 text-red-400" />
              <span className="text-sm font-semibold text-white">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why Choose
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                {' '}Sanjay Distributors
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine decades of experience with modern practices to deliver exceptional 
              pharmaceutical distribution services that healthcare providers can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold text-white">Ready to Partner with Us?</h3>
                <Award className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-gray-300 mb-6 text-base max-w-xl mx-auto">
                Join hundreds of healthcare providers who trust Sanjay Distributors for their pharmaceutical needs. 
                Experience the difference that 45+ years of excellence makes.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-2xl font-bold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Contact Us Today
                <Zap className="w-5 h-5 animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;