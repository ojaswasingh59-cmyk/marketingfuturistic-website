import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Imaginator Mediaworks
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-light">
          Where Creativity Meets AI-Driven Growth
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Transform your digital presence with our cutting-edge e-commerce consultancy, 
          data-driven digital marketing, and stunning motion graphics that captivate your audience.
        </p>
        
        <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 mb-12">
          <span className="flex items-center justify-center">
            Grow your brand us!!
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        {/* Contact Panel */}
        <div className="backdrop-blur-md bg-white/5 border border-cyan-400/30 rounded-2xl p-6 max-w-md mx-auto hover:border-cyan-400/50 transition-all duration-300">
          <div className="space-y-3">
            <div className="flex items-center justify-center text-cyan-300">
              <Phone className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">+91 78692 30308</span>
            </div>
            <div className="flex items-center justify-center text-purple-300">
              <MapPin className="w-5 h-5 mr-3" />
              <span className="text-sm text-center">LG 14, Ahimsa Tower, Indore, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 border border-cyan-400/50 rounded-lg rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-12 h-12 border border-purple-400/50 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;
