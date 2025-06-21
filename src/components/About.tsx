import React from 'react';
import { Code, Brain, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Deep understanding of machine learning algorithms, neural networks, and AI model deployment'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies and building end-to-end AI-powered applications'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Experienced in optimizing model performance and creating efficient, scalable solutions'
    },
    {
      icon: Users,
      title: 'Collaborative Leader',
      description: 'Strong communication skills with experience leading technical teams and projects'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Building the Future with AI
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              As a recent Computer Science graduate with an enthusiasm for Artificial Intelligence 
              and Machine Learning, I'm passionate about leveraging cutting-edge technology to solve 
              complex problems and create meaningful impact.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              My journey in AI/ML began during my undergraduate studies, where I wanted to develop a project leveraging AI/ML. Since then, 
              I've focused on upskilling myself in the field of artificial intelligence trying to solve real life problems using AI.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I believe in the power of continuous learning and staying at the forefront of AI 
              innovation. My goal is to contribute to breakthrough technologies which can tackle different problems and help me to advance my skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <item.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;