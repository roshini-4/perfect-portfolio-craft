
import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "91+ 7397562369",
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "roshini.s2208@gmail.com",
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Kanakkampalayam, Tirupur",
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/roshini-s-snsinsitutions",
      link: "https://www.linkedin.com/in/roshini-s-snsinsitutions",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Contact Me" subtitle="Get in touch" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-portfolio-navy p-2 rounded text-white mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-portfolio-navy">{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-portfolio-accent hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Send a Message</h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Get in touch with me</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="w-full" />
                  </div>
                  <div>
                    <Input placeholder="Subject" className="w-full" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="w-full min-h-[120px]" />
                  </div>
                  <Button type="submit" className="bg-portfolio-navy hover:bg-portfolio-accent">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
