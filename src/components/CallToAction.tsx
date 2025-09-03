import React from 'react';
import { ArrowRight, Sparkles, Phone, MapPin } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Dynamic background shapes */}
      <div className="absolute inset-0">
        {/* Large animated shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* 3D geometric elements */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-cyan-400/30 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-8 h-8 border border-pink-400/30 rotate-45 animate-bounce"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Main headline with animated text */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Ready to Bring Your
            <br />
            <span className="relative inline-block">
              Brand to Life?
              <Sparkles className="absolute -top-2 -right-8 w-8 h-8 text-yellow-400 animate-pulse" />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Partner with Imaginator Mediaworks to create growth and visuals that leave an impact. 
            Let's transform your digital presence with AI-driven creativity and data-powered results.
          </p>

          {/* Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 transform">
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            </button>

            <button className="group px-10 py-5 rounded-full text-xl font-bold border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/25">
              <span className="flex items-center">
                View Portfolio
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Contact Panel */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative backdrop-blur-xl bg-white/5 border border-gray-700/50 group-hover:border-gray-600/50 rounded-3xl p-8 transition-all duration-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-gray-400">Ready to start your digital transformation journey?</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Contact */}
                <div className="flex items-center justify-center p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all group">
                  <Phone className="w-6 h-6 text-cyan-400 mr-4 group-hover:animate-pulse" />
                  <div>
                    <div className="text-sm text-gray-400 font-medium">Call Us</div>
                    <div className="text-cyan-300 font-semibold">+91 78692 30308</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center p-4 rounded-xl bg-purple-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all group">
                  <MapPin className="w-6 h-6 text-purple-400 mr-4 group-hover:animate-pulse" />
                  <div>
                    <div className="text-sm text-gray-400 font-medium">Visit Us</div>
                    <div className="text-purple-300 font-semibold text-sm">LG 14, Ahimsa Tower</div>
                    <div className="text-purple-300 font-semibold text-sm">Indore, MP</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 right-4 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;