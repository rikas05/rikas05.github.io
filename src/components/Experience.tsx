import React from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'AI/ML Intern',
      organization: 'Torc infotech',
      location: 'Kochi, Kerala',
      period: 'May 2023 - May 2023',
      description: 'Acquired essential skills during the internship focused on the fundamentals of Artificial Intelligence and Machine Learning, gaining hands-on exposure to key concepts and workflows.',
      achievements: [
        'Understood and implemented machine learning algorithms',
        'Uderstood the workflow of an AI project in a corporate setiting',
      ]
    },
    {
      type: 'education',
      title: 'Python Fundamentals',
      organization: 'Coddy.tech',
      location: 'Remote',
      period: 'December 2023',
      description: 'Completed a python fundamentals course on coddy.tech(remote).',
      achievements: [
        'Enhanced python coding skills and its core programming concepts', 
      ]
    },
    {
      type: 'work',
      title: 'Python Intern',
      organization: 'Facein Technologies',
      location: 'Kochi, Kerala',
      period: 'December 2024',
      description: 'Acquired hands on experience through the internship in advanced Python programming.',
      achievements: [
        'Enhanced python coding skills in automation, data handling and real world scripting techniques', 
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      organization: 'Mangalam College of Engineering, Ettumanur',
      location: 'Ettumanur, Kottayam',
      period: 'Nov 20201 - April 2025',
      description: 'Comprehensive coursework in computer science fundamentals, software development and data driven problem solving, GPA: 7.47/10',
      achievements: [
        'Relevant Coursework: OOPS, DBMS, SQL, AI Fundamentals, C, Java, Computer Networks',
        'Led university funded final year project on real-time cyclone alert and location monitoring system, recignized for innovation and societal impact',
        'Successfully completed AI/ML and Python internships, gaining hands on experience in workflow automation and collaborative problem solving'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full border-4 ${
                    exp.type === 'work' ? 'border-blue-400 bg-blue-500' : 'border-purple-400 bg-purple-500'
                  } flex items-center justify-center`}>
                    {exp.type === 'work' ? (
                      <Briefcase className="h-7 w-7 text-white" />
                    ) : (
                      <GraduationCap className="h-7 w-7 text-white" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 sm:mb-0">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300 mb-4">
                    <span className="font-medium">{exp.organization}</span>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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