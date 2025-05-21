
import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AI Associate: Salesforce",
      date: "Oct 2024",
      organization: "Salesforce"
    },
    {
      title: "Enterprise Design Thinking Practitioner, Co-Creator: IBM",
      date: "Feb 2024",
      organization: "IBM"
    },
    {
      title: "Basics of Python, Creative Thinking: Infosys Springboard",
      date: "Feb 2025",
      organization: "Infosys"
    },
    {
      title: "Fundamentals of Generative AI: Microsoft",
      date: "Sep 2024",
      organization: "Microsoft"
    },
    {
      title: "AI Foundations Associate: Oracle",
      date: "Feb 2025",
      organization: "Oracle"
    },
    {
      title: "Azure AI Document Intelligence: Microsoft",
      date: "Oct 2024",
      organization: "Microsoft"
    },
    {
      title: "App sec Practitioner: Secops",
      date: "Mar 2025",
      organization: "Secops"
    }
  ];

  const valueAddedCourses = [
    "C Nano degree || Prepinsta",
    "Python Nano degree || Prepinsta",
    "Basics of IOT || Great Learning",
    "Functions of Python || Great Learning",
    "Salesforce and Oracle || AI and Cloud"
  ];

  const tools = [
    "MS Tool",
    "Canva",
    "VS Code",
    "Xilinx",
    "Matlab"
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Certifications & Skills" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold text-portfolio-navy">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{cert.organization}</p>
                    <p className="text-gray-500 text-sm">{cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Value Added Courses</h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {valueAddedCourses.map((course, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-3"></span>
                        <span className="text-gray-700">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Tools</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
