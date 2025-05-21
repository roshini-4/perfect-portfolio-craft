
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Roshini S</h3>
            <p className="text-sm mt-1">Electronic Engineer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; {currentYear} Roshini S. All rights reserved.</p>
            <p className="text-xs mt-1">Passionate Electronic Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
