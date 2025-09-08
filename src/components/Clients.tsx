import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Canon', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAe1BMVEX////LICbIAADKHCLtw8TLISj8+PjKGB/FAADMJizrysrMODzCAAD+/Pz26enchonJCxLUaWjHAAfgpKTcjYz68vLKERry2Nn14+P03t/w0tPqvL3VbW/NPEHagYLSWVzhnp/mr7DXdnnPSU3MMTbTYGHfl5jRUlXPRUb3RUitAAALdklEQVR4nO1ba7uiLBdOUFEbjTygppmnrP//C1+sTE62y9kz+7nm5f6oCIubxTqBm42GhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhobGt8JPgizLU4o8z4LE/2l5fhBB6hVR3O5P3XW7PXancxtHhZcG/4+cZGZUnXoCQIgxuQHjEADsdm1dpPZPi/dXkZjDvqdEIGiIgCQE8LRr8p+W8a8hi8otpUJigqXEPQ+Hn5bzryAYTm6o5AKScbuAG1MQo6799zXEbk4Qy1vEMBBwcLdvd3HVnntqQ6BB8HX4aXH/MLLSIDIZloEdozKpo01sO0mSIG3OACDa9PxP7xizJ6ptQsDFtDn36ttBbQEIiRv9lKx/HH4NVGRA0HvK9hGABsLxP+p07cpRGVAC6qUvTDCS1SZf9ezf8FarD98ohnmn5RtjqdmA+LjsP+7O2GmDVwMnh/hCHCfsYu9FPOvbXmk5jlt5Irl+UpyJA45x+mKedpJHVUfNvQP6867IXmYTftCcseNc40xsZWd1R13GJUo2g2Op2Dgvr/0O3BuBaokPP0nrqzO6IeqlAeibhYZ+UFyc0bvTCbUpJ2AQbR1KO/08HJaGSQ7DkRJxWx2IMJ3QqQiW9rCd1/1NIgKcgZtcklYYUE8CsdNvgFI32mXLcAgnHwQGZaskHx0QYfad06k8kZ01F4CnRuA6t6FsuoA8lgmBMlMOY5YhINhwrckPWHRC7pCrhErSAT1Fgk458xEcKgc8ZmShjSrYCF/YBfv0nCgKC8W4RXVfBa5DLLW006hjObPA5aEFiRf37BsD7OQ94B8qBKiH2w9R3R6fpFLyjpGkTcEhRoAVKZx6zMwWsG82CjbwWbkcd9RMQkN6ftX9vIg7rPJThDQ8a97QhYRvc7fdibnrxR4cycXZTQeQRbb1uG5+ccLMULg8cPQFZuUCfn2Qa45v8qYk/O5Q0EGuagd7Q3pkdwHnfQJzOBOgCOduAlhMp3TKR0CkJjDZBAUVXaIzPAtSJDHdJdReTBx7HdMbBF0zb5isaaHcIyk3fhqdcShIK9MBSb1sOOx2Hhc5XfR0P7ZXl0e6SSyFYb4LcJp02G6qIxVQbgiKplSQQUUK+c2blLfsat7Tfh2y7XEfPaZA01I3hPJQqCvqE5LTEpmOcP9iqzT9JC0E7jD5QPsw7LfOL4eDYKOhcdekbCjJo4WoH6Rzx1xRUhu6W3i3c7737cwGydtyLNKo2R/ty+4CHsIIE4fuEY5jidxLdCCX3+Uc8vMkKwGlNymRnxVRHUkQ+LirR+I9mzZnceKI9loPJ0lIizce7aNn5mlWYu4LYlCqAkYsQ+QDgb6Kdn3IP5bowPvl6MofHpaB2u+C0V+bpngSNi4/K9SPPPtMg10oaDEEHu0pqA2BD56OeJo589QfRPJhRsOfRWHGeaaJnQR7nkaRjkmnlfC29/UM8fBGNbkSJMSx0CAW6Jhm7ceCPeboKJ4LDaLZyDXifPGVG0t6fbqbPZ9/IdJBOm6bcgjam2oh54UCMfD4eNeS9E6k4zkDzlEIdNiX57uwnDsUP5n89gIdEE5r03CLJtKB98vzu32JgPtmsSMRDDfpBAcu0gF2jxeiCrN0DHPcA905r0pa/hMKh2VfuXNHZFzKJtABjeVKV9oTauw+qHRceAkhFD59RQevWDMdOasFgIl1B8kh4fIFHVtzGuvXCzpQb24WkMRjULyYtikg+ha84wOaNXQMrFkBTNFlDgEmQMzIupKO62JebwLili/iVRmpUDrAZ77zFXTw2whf5gnnF0k9CGO719FBLksRadCBc/NlxYdDYizJsJqOgtMBiOeI0S8l44G6eTIr6TgtzS3e1i+i1VvHqVkUTVMUZnpfNLsVghzMG48VdAgWgolLN7F0WAYZo7+SDjFZmpBXr/0JjTarkwUcQKNi41JFY3XLL4TdAipOvT6nIyh5gkOmLmNuJeNh1L9JB1rys9nLfZIU1TV8VDmsMdbG14ouXC662hMX1HxOx0EwEMhi6jgK4zH7lm/Wjpc4tD3mA0lIwr462CfB1RLOeHxOh6QBDmOcWzmNn7f+WlP6ORl+dFWdZo75v5hJgIiN7T+noxEzMcBYo9oSjQfpnp5nJR3dZ85jxM5QpOTjdIjbCTSFXPX9czoi0XtgxvQfpMiDCRtW2o7jx8eNlawaeKz0A2hB8Q05ssbjczpqwVVxhSFbJJ+dzdqo9EW1Q4lIrKxQMi514RWVIx/gQMwajxV0SHX/X8zyld9Oh0Haz9jIHLGuAi6TDJFU76JpJhPmfYN2UN8999dAQZZvoOPFeZMKoqmHeDe/zLbSXj8zxmOFKZXrzf3cXyAaWvK7toMSupjDqWAK84WoYl/nW0F+aDCe8XM6ClfcmdYvRt3EtSGX59qupMMgzOp+DbHcSS58xluI6uEwbH9Oh3eVtx9j7GJhNCaKWk3HZbkcJiEQfBtENd8gEwo5dMrzZvycjvQk5WlsVcMTLC2jqmvpgGR4/wKpKSgvdIVyiB8Jxo8c5xaf05FUctpqzaPZfFIAmUOBtXRYLw/hBIj1enT8ijADzMq3IqOtRedBbTejzbzyoH42VGvpoOpXvedcbHsziHRIMb53FMwbE6evoIMaD/FIDdfM8nC7hU3A1tMBjeidi05ZlL9Dh2jtw/LZ+Qo6bLnIw0465yI/9ph8PR0G6c2vzUcS94dNI2RNaCs2K8RYAFlP47GmViqdp9AxGWVmjQdymVV9lw5F+mXg7ZeZi12PLu4NUyqG1Zbz7HsNHYl0kgktxnez5SE2232bDktxvm2Q7Rfm1I8MEjabRAp8hHOJXPaM4NlkDR00EpOKXkyFmKm/ESZefZ+Og5h03PuCL4NTPybodhWqFMOwK1dQ9Rv5rhXpfouOzV46+GeS/GSmgz/mfpeOjSknWmN78CI6TTpA3487Uwx8DFKyZudAkCHd4P01tVhHR4KEDtnDEH+6jWM5vPxv00FlVvFhAHcpPG0cjPBD5U+i4wuZk1gPEyM8X8WC3iTJOjroEghTY6ItfzonDzveG7xPxyY9Kn/bIKDNJQ/j2+bRgcStp96kyxjh0bTHO6t2sqN6h7t8ECr+YKohrKSDLodQkZ5jcb+621K8FWz6B3RsgspSXemCAOxN5kc4OsOs6R2C0IUxbY5U8nL6Korq/Xj/ZzymbnrBG5PfpGMzYE6f53tWG/uWREEsHSZ+QsfGbi5IeccNO24ZmWme5Xl+KIZTCAgKtzs2bK2xXIQAFONdNjLylot3DZzsN+nY1C7rsJgS3s2zIEUa+hEdNMaMO6IkBIUAEHe77SGmU0QI9+JBbb1V/glDVw2VY4xhi75gysnX07EpOnZ/k9MjlsktNF6EUvyA9CEd1KLGF6z+3Ynm7RTjjWqMj61cTC1OsoKMW237uD4tHhdOd0hiIdt9637HA2nrMouAL0WeJHlxxBbC11pxy8BFHMEsHewLboiodIHqv8D79DBAp8FUpTP5cBUuGkMCUDWNSCMnyAK5d3MUA+4xZOgI+TcyHZukOZN59bBx3u3OhBDH3XmqDMMlXIeEoYN9zn8UFHW5xSAUYgVI6EZxT0Ox9PeA7Q0XAh4nceNteXzdzXfpkisvCwy9r+jAX9JxuzPsgmnPwNv/euAYm+p03OJXhGynw+5XdFBkXjG0FwOwwMd93HjKu+9PQtJiKDs4tkbHc9wcWKk8U8Ddlqbi48kA2gfhRaGeY2bW+x6M5+QUTnht+WFZiEOZz0u/BftUObUgP3hFM8S73S4eosY7pK9PrJnPKN5r/T2ws9QbBaViFof8T/4I7o9/A1LY//Wfze+C/qP/omloaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGho/JfxP9dC2GHpMGYqAAAAAElFTkSuQmCC' },
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
