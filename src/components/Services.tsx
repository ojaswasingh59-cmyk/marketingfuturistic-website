import React from 'react';
import { ShoppingCart, Megaphone, Film } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Consultancy',
      description: 'Transform your online store with AI-powered insights, conversion optimization, and user experience enhancement that drives sales and customer satisfaction.',
      color: 'cyan'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that amplify your brand reach, engage your target audience, and deliver measurable ROI across all digital channels.',
      color: 'purple'
    },
    {
      icon: Film,
      title: 'Motion Graphics & Videos',
      description: 'Captivating explainer videos and motion graphics that tell your story, explain complex concepts, and leave lasting impressions on your audience.',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: 'border-cyan-400/20 hover:border-cyan-400/50',
        bg: 'bg-cyan-500/10',
        icon: 'text-cyan-400',
        glow: 'hover:shadow-cyan-500/25'
      },
      purple: {
        border: 'border-purple-400/20 hover:border-purple-400/50',
        bg: 'bg-purple-500/10',
        icon: 'text-purple-400',
        glow: 'hover:shadow-purple-500/25'
      },
      pink: {
        border: 'border-pink-400/20 hover:border-pink-400/50',
        bg: 'bg-pink-500/10',
        icon: 'text-pink-400',
        glow: 'hover:shadow-pink-500/25'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions powered by creativity and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`relative group p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${colors.glow}`}
              >
                {/* Neon glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 border ${colors.border} group-hover:animate-pulse`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Animated accent line */}
                  <div className={`mt-6 h-1 bg-gradient-to-r from-${service.color}-400 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;