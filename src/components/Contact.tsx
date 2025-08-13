import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    { icon: Mail, value: 'rikasmohammedn@gmail.com', href: 'mailto:rikasmohammedn@gmail.com' },
    { icon: Phone, value: '+91 8590996041', href: 'tel:+918590996041' },
    { icon: MapPin, value: 'Alappuzha, Kerala, India', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rikas05' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rikas-mohammed-n/' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse"></div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            {contactInfo.map((item) => (
              <a 
                key={item.value} 
                href={item.href}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-800/40 md:backdrop-blur-sm rounded-2xl border border-gray-700/60 transition-all duration-300 hover:border-cyan-400/50 hover:bg-gray-800/60"
              >
                <item.icon className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">{item.value}</span>
              </a>
            ))}
            <div className="flex justify-center pt-2 md:pt-4">
                {socialLinks.map((social) => (
                    <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-gray-800/40 md:backdrop-blur-sm rounded-full border border-gray-700/60 text-gray-400 hover:text-white hover:border-cyan-400/50 hover:bg-gray-800/60 transition-all duration-300 mx-1 md:mx-2">
                        <social.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;