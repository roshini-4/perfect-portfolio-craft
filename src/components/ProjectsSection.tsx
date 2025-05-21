
import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "DTMF Car Automation",
      description: "A car automation system controlled by Dual-tone multi-frequency signaling, allowing remote control via mobile phone tones.",
      tech: ["Electronics", "Automation", "Mobile Integration"]
    },
    {
      title: "IOT based Irrigation System",
      description: "Smart irrigation system that monitors soil moisture and environmental conditions to automatically water plants when needed.",
      tech: ["IoT", "Sensors", "Automation"]
    },
    {
      title: "AI Integrated Headphones",
      description: "Headphones with integrated AI capabilities for noise cancellation, voice recognition, and personalized audio experiences.",
      tech: ["AI", "Audio Engineering", "Electronics"]
    },
    {
      title: "Automated Petrol Pump using RFID",
      description: "A system that automates fuel dispensing through RFID tag identification, enhancing security and efficiency.",
      tech: ["RFID", "Automation", "Security"]
    }
  ];

  const internship = {
    company: "Postulate Info Tech Pvt Ltd",
    role: "UI/UX Design Intern",
    description: "Completed internship in the domain of UI/UX Design, working on real-world projects and gaining hands-on experience in interface design."
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects & Experience" subtitle="My work and internships" />
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-portfolio-navy">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-portfolio-navy text-xs text-white px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Internship Experience</h3>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-portfolio-navy">{internship.company}</CardTitle>
              <CardDescription className="text-gray-600 font-medium">{internship.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{internship.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
