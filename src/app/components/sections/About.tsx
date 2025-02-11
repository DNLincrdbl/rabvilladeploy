'use client';
import { useState, useEffect } from 'react';

const stats = [
  { number: '10+', label: 'Év tapasztalat' },
  { number: '1000+', label: 'Elégedett vendég' },
  { number: '4.9', label: 'Értékelési átlag' },
  { number: '95%', label: 'Visszatérő vendég' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById('about-section');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-16 lg:mb-0">
              <img
                src="/595179819.jpg"
                alt="Szálloda külső"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-2/3 rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <img
                src="/rablaki7813729.jpg"
                alt="Szálloda belső"
                className="w-full h-[300px] object-cover"
              />
            </div>
            
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full bg-primary/10 rounded-2xl" />
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Fedezze fel a tökéletes 
              <span className="text-primary block">pihenés otthonát</span>
            </h2>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Szálláshelyünk több mint egy évtizede nyújt felejthetetlen élményeket vendégeinek. 
              Modern kényelem és tradicionális vendégszeretet találkozik nálunk, hogy az Ön 
              pihenése tökéletes legyen.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2 group">
              Ismerje meg szolgáltatásainkat
              <svg 
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;