
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-portfolio-navy text-white px-4 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Roshini S</Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-portfolio-accent transition-colors">Home</Link>
          <a href="#about" className="hover:text-portfolio-accent transition-colors">About</a>
          <a href="#education" className="hover:text-portfolio-accent transition-colors">Education</a>
          <a href="#skills" className="hover:text-portfolio-accent transition-colors">Skills</a>
          <a href="#certifications" className="hover:text-portfolio-accent transition-colors">Certifications</a>
          <a href="#projects" className="hover:text-portfolio-accent transition-colors">Projects</a>
          <a href="#contact" className="hover:text-portfolio-accent transition-colors">Contact</a>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-portfolio-navy py-2">
          <div className="container mx-auto flex flex-col space-y-3">
            <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-portfolio-accent transition-colors">Home</Link>
            <a href="#about" onClick={toggleMenu} className="block py-2 hover:text-portfolio-accent transition-colors">About</a>
            <a href="#education" onClick={toggleMenu} className="block py-2 hover:text-portfolio-accent transition-colors">Education</a>
            <a href="#skills" onClick={toggleMenu} className="block py-2 hover:text-portfolio-accent transition-colors">Skills</a>
            <a href="#certifications" onClick={toggleMenu} className="block py-2 hover:text-portfolio-accent transition-colors">Certifications</a>
            <a href="#projects" onClick={toggleMenu} className="block py-2 hover:text-portfolio-accent transition-colors">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="block py-2 hover:text-portfolio-accent transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
