import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechFlow Solutions',
      role: 'CEO',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      quote: 'Imaginator Mediaworks transformed our digital presence completely. Their AI-driven approach to e-commerce optimization increased our conversion rates by 180%. The team is incredibly professional and innovative.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Global Retail Corp',
      role: 'Marketing Director',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      quote: 'The motion graphics and explainer videos they created for our product launch were absolutely stunning. The attention to detail and creative vision exceeded all our expectations. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'StartupVision',
      role: 'Founder',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      quote: 'Working with Imaginator was a game-changer for our startup. Their data-driven digital marketing strategy helped us achieve 300% ROI within the first quarter. The team is responsive and results-oriented.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kumar',
      company: 'InnovaCorp',
      role: 'VP Operations',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      quote: 'Exceptional service and outstanding results. Their one-stop solution approach saved us time and resources while delivering premium quality work. The AI-driven insights were particularly valuable.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hear what our clients have to say about their experience with us
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Quote Text */}
                    <div className="mb-8 mt-4">
                      <p className="text-lg md:text-xl leading-relaxed text-gray-200 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="mb-6 flex justify-center">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-gradient-to-r from-cyan-400 to-purple-400 mr-4 object-cover"
                      />
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-white mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-cyan-400 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-pink-400/50 rounded-full animate-pulse delay-1000"></div>

                    {/* Neon border effect on hover */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="group p-4 rounded-full border border-gray-700 hover:border-cyan-400/50 transition-all hover:bg-cyan-500/10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group p-4 rounded-full border border-gray-700 hover:border-cyan-400/50 transition-all hover:bg-cyan-500/10"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Client logos strip */}
        <div className="mt-16 flex justify-center items-center space-x-8 opacity-50">
          <div className="text-gray-500 text-sm font-medium">Trusted by:</div>
          <div className="flex space-x-6">
            {['Canon', 'Fujifilm', 'Kyocera', 'Atlas'].map((brand, index) => (
              <div key={index} className="text-gray-600 text-sm font-medium hover:text-gray-400 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;