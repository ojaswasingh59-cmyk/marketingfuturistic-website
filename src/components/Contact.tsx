import React from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch with our team of experts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start group">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all mr-4">
                  <Phone className="w-6 h-6 text-cyan-400 group-hover:animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <p className="text-cyan-300 font-medium">+91 78692 30308</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-400/20 group-hover:border-purple-400/40 transition-all mr-4">
                  <Mail className="w-6 h-6 text-purple-400 group-hover:animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <p className="text-purple-300 font-medium">hello@imaginatormedia.com</p>
                  <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start group">
                <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-400/20 group-hover:border-pink-400/40 transition-all mr-4">
                  <MapPin className="w-6 h-6 text-pink-400 group-hover:animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Office</h4>
                  <p className="text-pink-300 font-medium">LG 14, Ahimsa Tower</p>
                  <p className="text-pink-300 font-medium">Indore, Madhya Pradesh</p>
                  <p className="text-gray-400 text-sm">Visit us for in-person consultation</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-4">Why Choose Imaginator?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-cyan-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center text-purple-300">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="text-sm">Global Reach</span>
                </div>
                <div className="flex items-center text-pink-300">
                  <Send className="w-4 h-4 mr-2" />
                  <span className="text-sm">Fast Delivery</span>
                </div>
                <div className="flex items-center text-cyan-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">Expert Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:outline-none text-white transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:outline-none text-white transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:outline-none text-white transition-all"
                    placeholder="Your Company (Optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:outline-none text-white transition-all">
                    <option value="">Select a Service</option>
                    <option value="ecommerce">E-commerce Consultancy</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="motion">Motion Graphics & Videos</option>
                    <option value="all">All Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:outline-none text-white transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 right-4 w-1 h-1 bg-pink-400/50 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Map placeholder with dark theme */}
        <div className="mt-16 relative">
          <div className="h-64 rounded-3xl bg-gray-800/50 border border-gray-700/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                <h4 className="text-2xl font-bold text-white mb-2">Visit Our Office</h4>
                <p className="text-gray-400">LG 14, Ahimsa Tower, Indore, Madhya Pradesh</p>
              </div>
            </div>
            
            {/* Neon grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-8 h-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div key={i} className="border border-cyan-400/20"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;