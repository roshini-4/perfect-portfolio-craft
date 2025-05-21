
import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Headphones, Bicycle } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    'Teamwork',
    'Time Management',
    'Leadership',
    'Effective Communication',
    'Critical Thinking',
  ];

  const languages = [
    { name: 'English', level: 'R|W|S' },
    { name: 'Tamil', level: 'R|W|S' },
    { name: 'Kannada', level: 'R|W|S' },
  ];

  const hobbies = [
    { name: 'Reading Books', icon: <Book className="mr-2" size={18} /> },
    { name: 'Listening Music', icon: <Headphones className="mr-2" size={18} /> },
    { name: 'Cycling', icon: <Bicycle className="mr-2" size={18} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Skills & Interests" subtitle="What I bring to the table" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-portfolio-navy mb-4">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} className="bg-portfolio-navy hover:bg-portfolio-accent py-2 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-portfolio-navy mb-4">Languages</h3>
              <ul className="space-y-2">
                {languages.map((language, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-700">{language.name}</span>
                    <span className="text-gray-500">{language.level}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-portfolio-navy mb-4">Hobbies</h3>
              <ul className="space-y-3">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    {hobby.icon}
                    {hobby.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
