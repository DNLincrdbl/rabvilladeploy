'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        // setIsScrolled(true);
      } else {
        // setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { href: 'home', label: 'Főoldal' },
    { href: 'about', label: 'Rólunk' },
    { href: 'rooms', label: 'Szobák' },
    { href: 'contact', label: 'Kapcsolat' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          <div 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Rab-Villa
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300">
              Foglalás
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100 py-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300">
              Foglalás
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;