import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    title: 'B.Tech in Computer Science',
    organization: 'Mangalam College of Engineering',
    location: 'Ettumanur, Kottayam',
    period: '2021 - 2025',
    description: 'Comprehensive coursework in computer science fundamentals, software development and data driven problem solving. Led a university-funded project on a real-time cyclone alert system.',
    gpa: '8.5',
    highlights: ['Computer Science Fundamentals', 'Software Development', 'Data Structures & Algorithms', 'Database Management', 'Cyclone Alert System Project']
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid gap-8 md:gap-12">
          {education.map((edu, index) => (
            <div key={edu.title} className="relative">
              <div className="bg-gray-800/40 md:backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/60 transition-all duration-300 hover:border-purple-400/50 hover:bg-gray-800/60">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">{edu.title}</h3>
                      <div className="text-sm md:text-base text-purple-300 font-medium">{edu.period}</div>
                    </div>
                    
                    <div className="text-sm md:text-base text-gray-400 mb-3">
                      <span className="font-semibold">{edu.organization}</span>
                      {edu.location && <span>, {edu.location}</span>}
                    </div>
                    
                    {edu.gpa && (
                      <div className="mb-4">
                        <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                    
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">{edu.description}</p>
                    
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-300 text-sm md:text-base">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 