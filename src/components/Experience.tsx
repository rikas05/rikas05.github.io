import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'AI/ML Intern',
    organization: 'Torc infotech',
    location: 'Kochi, Kerala',
    period: 'May 2023 - May 2023',
    description: 'Acquired essential skills during the internship focused on the fundamentals of Artificial Intelligence and Machine Learning, gaining hands-on exposure to key concepts and workflows.',
    technologies: ['AI/ML', 'Python', 'Machine Learning'],
    achievements: ['Gained hands-on exposure to AI/ML concepts', 'Learned fundamental workflows in ML']
  },
  {
    title: 'Python Intern',
    organization: 'Facein Technologies',
    location: 'Kochi, Kerala',
    period: 'December 2024',
    description: 'Acquired hands on experience through the internship in advanced Python programming, including automation, data handling and real world scripting techniques.',
    technologies: ['Python', 'Automation', 'Data Handling', 'Scripting'],
    achievements: ['Developed automation scripts', 'Enhanced data handling skills', 'Applied Python in real-world scenarios']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gray-700"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex flex-col md:block items-center">
                {/* Timeline Icon */}
                <div className={`z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4 md:mb-0
                  ${index % 2 === 0 ? 'md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2' : 'md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2'}
                  bg-blue-500`}
                >
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white"/>
                </div>
                {/* Card */}
                <div className={`w-full flex-col md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} items-center md:items-stretch`}> 
                  <div className="w-full md:w-5/12">
                    <div className="bg-gray-800/40 md:backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-gray-700/60 transition-all duration-300 hover:border-cyan-400/50 hover:bg-gray-800/60 mt-0 md:mt-0">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                        <div className="text-xs md:text-sm text-cyan-300 font-medium">{exp.period}</div>
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 mb-4">
                        <span className="font-semibold">{exp.organization}</span>, {exp.location}
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">{exp.description}</p>
                      
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span key={idx} className="inline-block bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div>
                          <h4 className="text-white font-semibold text-xs md:text-sm mb-2">Key Achievements:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-300 text-xs leading-relaxed">{achievement}</li>
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
      </div>
    </section>
  );
};

export default Experience;