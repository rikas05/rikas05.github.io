import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Python Fundamentals',
    organization: 'Coddy.tech',
    location: 'Remote',
    period: 'December 2023',
    description: 'Completed a python fundamentals course on coddy.tech(remote), enhancing python coding skills and its core programming concepts.',
    certificateUrl: './mefvrc-python.pdf',
    skills: ['Python', 'Programming Fundamentals', 'Core Concepts']
  },
  {
    title: 'Machine Learning A-Z: AI, Python & R',
    organization: 'Udemy',
    location: 'Online',
    period: 'August 2025',
    description: 'Completed a comprehensive machine learning course covering supervised, unsupervised, and reinforcement learning algorithms; data preprocessing techniques; model evaluation metrics; dimensionality reduction methods; and modern ensemble learning approaches.',
    certificateUrl: './Machine Learning - Udemy.pdf',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Data Preprocessing', 'Model Evaluation', 'Dimensionality Reduction', 'Ensemble Learning', 'Deep Learning']
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-green-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-emerald-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Certifications & Courses
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div key={cert.title} className="group">
              <div className="bg-gray-800/40 md:backdrop-blur-sm p-6 rounded-2xl border border-gray-700/60 transition-all duration-300 hover:border-green-400/50 hover:bg-gray-800/60 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{cert.title}</h3>
                
                <div className="text-sm text-gray-400 mb-3">
                  <span className="font-semibold">{cert.organization}</span>
                  {cert.location && <span>, {cert.location}</span>}
                </div>
                
                <div className="text-xs text-emerald-300 font-medium mb-3">{cert.period}</div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{cert.description}</p>
                
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="inline-block bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-auto">
                  <a
                    href={cert.certificateUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-300 group-hover:gap-3"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm md:text-base">
            Continuously learning and expanding my skill set through various online platforms and courses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 