import React from 'react';
import { Cpu, Users, Zap, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Imaginator Mediaworks
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                We are a forward-thinking creative agency that harnesses the power of AI and cutting-edge technology 
                to deliver exceptional digital experiences. Our team of creative professionals and data scientists 
                work together to transform your vision into reality.
              </p>
              
              <p>
                From e-commerce optimization to compelling motion graphics, we provide comprehensive solutions 
                that drive growth and engagement. Our approach combines creative excellence with analytical precision 
                to ensure every project delivers measurable results.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                <Cpu className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">AI-Driven</h3>
              </div>
              <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Collaborative</h3>
              </div>
              <div className="text-center p-4 bg-pink-500/10 rounded-xl border border-pink-400/20 hover:border-pink-400/40 transition-all">
                <Zap className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Innovation</h3>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-cyan-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+91 78692 30308</span>
                </div>
                <div className="flex items-center text-purple-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Ahimsa Tower, Indore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
              {/* Abstract Workspace Elements */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-cyan-400 to-transparent rounded-full opacity-60"></div>
                  <div className="h-4 bg-gradient-to-r from-purple-400 to-transparent rounded-full opacity-40 w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-pink-400 to-transparent rounded-full opacity-50 w-1/2"></div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl animate-pulse"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400/30 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>

              {/* AI-Inspired Network */}
              <div className="mt-8 relative">
                <div className="flex justify-between items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-4"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-400 to-pink-400 mx-4"></div>
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Team Collaboration Visual */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg flex items-center justify-center border border-gray-600/30">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400/50 rounded-lg rotate-45 animate-spin-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-400/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;