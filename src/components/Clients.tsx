import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Canon', logo: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Fujifilm', logo: 'https://images.pexels.com/photos/14036/pexels-photo-14036.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'IRCAD India', logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Nutrija', logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Kyocera', logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Atlas', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-16 h-16 bg-pink-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Partnering with global brands to deliver exceptional digital experiences
          </p>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 hover:border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Neon glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative">
                {/* Logo container */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-16 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                  />
                  
                  {/* Overlay with client name */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <span className="text-white font-semibold text-sm text-center">
                      {client.name}
                    </span>
                  </div>
                </div>

                {/* Subtle glow border */}
                <div className="absolute inset-0 rounded-xl border border-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Corner accents */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-purple-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated connection lines */}
        <div className="hidden lg:block relative mt-16">
          <div className="flex justify-center items-center space-x-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400 animate-pulse"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse delay-300"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300 shadow-lg shadow-purple-400/50"></div>
            <div className="w-24 h-px bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse delay-700"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-700 shadow-lg shadow-pink-400/50"></div>
            <div className="w-16 h-px bg-gradient-to-r from-pink-400 to-transparent animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '100+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '300%', label: 'Average ROI' },
            { number: '5★', label: 'Client Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:animate-pulse">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;