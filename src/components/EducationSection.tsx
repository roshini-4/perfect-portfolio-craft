
import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      institution: 'SNS COLLEGE OF ENGINEERING',
      degree: 'B.E ELECTRONICS AND COMMUNICATION ENGINEERING',
      period: 'CGPA: 9.18%',
    },
    {
      institution: 'MURUGU MATRIC HR SEC SCHOOL',
      degree: 'HSC || 2022',
      period: '89.5%',
    },
    {
      institution: 'MURUGU MATRIC HR SEC SCHOOL',
      degree: 'SSLC || 2020',
      period: '78.2%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" subtitle="My academic background" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">{item.institution}</h3>
                <p className="text-gray-700 mb-1">{item.degree}</p>
                <p className="text-gray-600 font-medium">{item.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
