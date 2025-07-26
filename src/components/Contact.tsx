import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Left Contact Info */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
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

          {/* Right Contact Form */}
          <div className="lg:col-span-2 bg-gray-800/40 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-gray-700/60">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-gray-900/50 border border-gray-700/60 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-gray-900/50 border border-gray-700/60 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full bg-gray-900/50 border border-gray-700/60 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows={5} className="w-full bg-gray-900/50 border border-gray-700/60 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"></textarea>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;