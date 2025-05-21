
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center bg-portfolio-navy text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-white rounded-full overflow-hidden border-4 border-white">
              <img 
                src="/lovable-uploads/157160d2-23a2-4965-ac41-536090d17148.png" 
                alt="Roshini S" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Roshini S</h1>
            <p className="text-xl md:text-2xl mb-8">Passionate Electronic Engineer</p>
            <p className="mb-10 text-lg">
              Fuelled by relentless creativity and a magnetic love for innovation, I weave bold ideas into reality.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact">
                <Button className="bg-white text-portfolio-navy hover:bg-portfolio-accent hover:text-white">
                  Contact Me
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-portfolio-navy">
                  View Projects
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
