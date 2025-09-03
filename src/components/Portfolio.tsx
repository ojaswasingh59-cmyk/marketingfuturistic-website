import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Palette, ShoppingBag } from 'lucide-react';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Revolution',
      type: 'E-commerce',
      category: 'E-commerce Consultancy',
      description: 'Complete digital transformation for a luxury fashion brand',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: ShoppingBag,
      color: 'cyan'
    },
    {
      id: 2,
      title: 'Brand Storytelling',
      type: 'Motion Graphics',
      category: 'Motion Graphics',
      description: 'Animated explainer video series for SaaS platform',
      image: 'https://images.pexels.com/photos/7652037/pexels-photo-7652037.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Play,
      color: 'purple'
    },
    {
      id: 3,
      title: 'Digital Campaign',
      type: 'Digital Marketing',
      category: 'Digital Marketing',
      description: 'Multi-channel marketing campaign with 300% ROI increase',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Palette,
      color: 'pink'
    },
    {
      id: 4,
      title: 'Interactive Experience',
      type: 'Motion Graphics',
      category: 'Motion Graphics',
      description: 'Interactive product showcase with 3D animations',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Play,
      color: 'purple'
    },
    {
      id: 5,
      title: 'Growth Strategy',
      type: 'Digital Marketing',
      category: 'Digital Marketing',
      description: 'AI-powered marketing automation and lead generation',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Palette,
      color: 'pink'
    },
    {
      id: 6,
      title: 'Platform Optimization',
      type: 'E-commerce',
      category: 'E-commerce Consultancy',
      description: 'Conversion rate optimization and UX enhancement',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      icon: ShoppingBag,
      color: 'cyan'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-400',
      purple: 'border-purple-400/30 bg-purple-500/10 text-purple-400',
      pink: 'border-pink-400/30 bg-pink-500/10 text-pink-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Showcasing our latest work in digital innovation and creative excellence
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className={`p-3 rounded-full border ${colorClasses} backdrop-blur-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses} mb-3`}>
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400/50 group-hover:via-purple-400/50 group-hover:to-pink-400/50 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => {
                const Icon = project.icon;
                const colorClasses = getColorClasses(project.color);
                
                return (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      <div className="p-6">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses} mb-3`}>
                          <Icon className="w-3 h-3 mr-1" />
                          {project.category}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-700 hover:border-cyan-400/50 transition-all hover:bg-cyan-500/10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: projects.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-700 hover:border-cyan-400/50 transition-all hover:bg-cyan-500/10"
            >
              <ChevronRight className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;