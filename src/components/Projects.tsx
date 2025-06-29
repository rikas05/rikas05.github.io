import React from 'react';
import { Github, School, NotebookText, CloudLightning, ExternalLink, LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  features: string[];
  github: string;
  live: string | null;
  gradient: string;
}

const projectsData: Project[] = [
  {
    title: 'Class Management App',
    description: 'A full-stack web application covering all class management activities including attendance marking and monitoring, fee management and managing individual student information.',
    icon: School,
    technologies: ['Python', 'Django', 'HTML'],
    features: [ 'Web interface', 'Attendance Marking', 'Fee Management', 'Student Data'],
    github: 'https:/f/github.com',
    live: null,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Real-time Cyclone Alert System',
    description: 'A real-time cyclone alert system to predict and monitor cyclone patterns and a location monitoring system to track individuals trapped in the danger zone and to provide assistance if required.',
    icon: CloudLightning,
    technologies: ['Machine learning(Random forest)', 'React', 'Node js', 'Supabase'],
    features: ['Real time tracking', 'Location monitoring', 'Timely alerts', 'Disaster Management'],
    github: 'https://github.com/AKomplished-bug/Disaster-Alert-and-Location-Monitoring-system',
    live: null,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Resume Matcher using NLP',
    description: 'Built an AI-powered Resume Matcher that compares resumes with job descriptions using NLP techniques like Word2Vec, TF-IDF, and cosine similarity to provide match scores and skill gap analysis.',
    icon: NotebookText,
    technologies: ['Python', 'Scikit-learn', 'Gensim', 'SymSpellPy','NLTK','PDFMiner'],
    features: ['Advanced text Preprocessing', 'Semantic Analysis', 'Cosine Similarity Scoring', 'Skill Gap Analysis'],
    github: 'https://github.com/rikas05/Resume-Matcher',
    live: null,
    gradient: 'from-green-500 to-teal-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/60 overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:scale-105 group"
            >
              <div className={`h-2.5 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <h4 className="text-lg font-semibold text-cyan-300 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                            {project.features.map((feature) => (
                                <li key={feature} className="flex items-center text-gray-300 text-sm">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-cyan-300 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mt-6 border-t border-gray-700/60 pt-6">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300">
                        <Github className="h-5 w-5" />
                        <span>Code</span>
                    </a>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-cyan-500/80 hover:bg-cyan-500 text-white rounded-lg transition-colors duration-300">
                            <ExternalLink className="h-5 w-5" />
                            <span>Live Demo</span>
                        </a>
                    )}
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