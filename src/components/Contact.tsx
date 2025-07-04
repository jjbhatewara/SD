import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gray-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-red-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4 border border-red-200">
              <MessageCircle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-800">Get In Touch</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your pharmaceutical distribution needs? We're here to help you 
              with reliable service and competitive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+91 9404756265",
                      gradient: "from-red-500 to-red-600",
                      action: () => window.open('tel:+919404756265')
                    },
                    {
                      icon: Mail,
                      title: "Website",
                      content: "www.sanjaydist.in",
                      gradient: "from-gray-600 to-gray-700",
                      action: () => window.open('http://www.sanjaydist.in', '_blank')
                    },
                    {
                      icon: MapPin,
                      title: "Address",
                      content: "Lane no 5, opp suvarnakar bhuvan, near parola road, Dhule, Maharashtra, India",
                      gradient: "from-red-600 to-red-700"
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Closed",
                      gradient: "from-gray-700 to-gray-800"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className={`group flex items-start gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 ${item.action ? 'cursor-pointer' : ''}`}
                      onClick={item.action}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-base">{item.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line leading-relaxed text-sm">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white resize-none"
                      placeholder="Tell us about your pharmaceutical distribution needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;