
import React from 'react';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-navy">Profile</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Fueled by relentless creativity and a magnetic love for innovation, I weave 
              bold ideas into reality. A storyteller at heart, a strategist by mind, and a 
              dreamer by spirit — always chasing the next horizon. I believe in the 
              alchemy of passion, perseverance, and a sprinkle of magic.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-portfolio-navy">Personal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700"><span className="font-semibold">Phone:</span> 91+ 7397562369</p>
                <p className="text-gray-700"><span className="font-semibold">Email:</span> roshini.s2208@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-700"><span className="font-semibold">Location:</span> Kanakkampalayam, Tirupur</p>
                <p className="text-gray-700">
                  <span className="font-semibold">LinkedIn:</span> 
                  <a 
                    href="https://www.linkedin.com/in/roshini-s-snsinsitutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-accent hover:underline ml-1"
                  >
                    linkedin.com/in/roshini-s-snsinsitutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
