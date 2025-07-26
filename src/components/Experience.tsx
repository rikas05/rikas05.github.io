import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'AI/ML Intern',
    organization: 'Torc infotech',
    location: 'Kochi, Kerala',
    period: 'May 2023 - May 2023',
    description: 'Acquired essential skills during the internship focused on the fundamentals of Artificial Intelligence and Machine Learning, gaining hands-on exposure to key concepts and workflows.',
  },
  {
    type: 'education',
    title: 'Python Fundamentals',
    organization: 'Coddy.tech',
    location: 'Remote',
    period: 'December 2023',
    description: 'Completed a python fundamentals course on coddy.tech(remote), enhancing python coding skills and its core programming concepts.',
  },
  {
    type: 'work',
    title: 'Python Intern',
    organization: 'Facein Technologies',
    location: 'Kochi, Kerala',
    period: 'December 2024',
    description: 'Acquired hands on experience through the internship in advanced Python programming, including automation, data handling and real world scripting techniques.',
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    organization: 'Mangalam College of Engineering',
    location: 'Ettumanur, Kottayam',
    period: '2021 - 2025',
    description: 'Comprehensive coursework in computer science fundamentals, software development and data driven problem solving. Led a university-funded project on a real-time cyclone alert system.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full md:filter md:blur-3xl md:animate-pulse" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gray-700"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative">
                <div className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-full left-1/2 -translate-x-1/2 -top-5 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center
                  ${exp.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                  {exp.type === 'work' ? <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white"/> : <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white"/>}
                </div>
                
                <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="w-full md:w-5/12">
                    <div className="bg-gray-800/40 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-gray-700/60 transition-all duration-300 hover:border-cyan-400/50 hover:bg-gray-800/60">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                        <div className="text-xs md:text-sm text-cyan-300 font-medium">{exp.period}</div>
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 mb-4">
                        <span className="font-semibold">{exp.organization}</span>, {exp.location}
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{exp.description}</p>
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