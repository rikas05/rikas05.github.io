import React from 'react';
import { ExternalLink, Github, Brain, Eye, MessageSquare, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Class Management App',
      description: 'A full-stack web application covering all class management activities including attendance marking and monitoring, fee management and managing individual student information',
      icon: Eye,
      technologies: ['Python', 'Django', 'HTML'],
      features: [ 'Web interface', 'Attendance Marking', 'Fee Management', 'Student Data'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Real-time Cyclone Alert and Location Monitoring System',
      description: 'A real-time cyclone alert system to predict and monitor cyclone patterns and a location monitoring system to track individuals trapped in the danger zone and to provide assistance if required',
      icon: MessageSquare,
      technologies: ['Machine learning(Random forest)', 'React', 'Node js', 'Supabase'],
      features: ['Real time tracking', 'Location monitoring', 'Timely alerts', 'Disaster Management'],
      github: 'https://github.com/AKomplished-bug/Disaster-Alert-and-Location-Monitoring-system',
      live: 'https://example.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Resume Matcher using NLP',
      description: 'Built an AI-powered Resume Matcher that compares resumes with job descriptions using NLP techniques like Word2Vec, TF-IDF, and cosine similarity to provide match scores and skill gap analysis.',
      icon: MessageSquare,
      technologies: ['Python', 'Skicit-learn', 'Gensim', 'SymSpell py','NLTK','PDFMiner'],
      features: ['Advanced text Preprocessing', 'Semantic Analysis', 'Cosine Similarity Scoring', 'Skill Gap Analysis'],
      github: 'https://github.com/rikas05/Resume-Matcher',
      live: 'https://example.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative AI/ML solutions that demonstrate technical expertise and real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-[1.02] overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-slate-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-slate-600"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white rounded-lg transition-all duration-300`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;