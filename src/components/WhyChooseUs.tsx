import React from 'react';
import { Target, TrendingUp, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Target,
      title: 'One-Stop Solution',
      description: 'Complete digital transformation under one roof - from strategy to execution',
      color: 'cyan'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Approach',
      description: 'Every decision backed by analytics and AI-powered insights for maximum impact',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'ROI-Focused Results',
      description: 'Measurable outcomes that directly contribute to your business growth and success',
      color: 'pink'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-800 animate-pulse" style={{ animationDelay: `${i * 50}ms` }}></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Three core pillars that set us apart in the digital landscape
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-y-1/2 animate-pulse"></div>
          <div className="hidden lg:block absolute top-1/2 left-1/2 right-1/4 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transform -translate-y-1/2 animate-pulse delay-500"></div>

          {/* Glowing connection nodes */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-lg shadow-cyan-400/50"></div>
          <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-300 shadow-lg shadow-purple-400/50"></div>
          <div className="hidden lg:block absolute top-1/2 right-1/4 w-4 h-4 bg-pink-400 rounded-full transform translate-x-1/2 -translate-y-1/2 animate-pulse delay-700 shadow-lg shadow-pink-400/50"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const colors = {
                cyan: 'from-cyan-400/20 to-cyan-600/5 border-cyan-400/30 text-cyan-400',
                purple: 'from-purple-400/20 to-purple-600/5 border-purple-400/30 text-purple-400',
                pink: 'from-pink-400/20 to-pink-600/5 border-pink-400/30 text-pink-400'
              };
              
              return (
                <div key={index} className="relative group">
                  {/* Infographic Card */}
                  <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${colors[advantage.color as keyof typeof colors]} border backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl`}>
                    {/* Floating icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${colors[advantage.color as keyof typeof colors]} rounded-2xl flex items-center justify-center border mx-auto group-hover:animate-pulse`}>
                        <Icon className={`w-10 h-10 ${colors[advantage.color as keyof typeof colors].split(' ')[4]}`} />
                      </div>
                      
                      {/* Orbital rings */}
                      <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow"></div>
                      <div className="absolute inset-2 rounded-full border border-white/5 animate-reverse-spin"></div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white text-center">
                      {advantage.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-center">
                      {advantage.description}
                    </p>

                    {/* Number indicator */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center border border-white/20 text-white font-bold text-lg">
                      {index + 1}
                    </div>

                    {/* Animated corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;