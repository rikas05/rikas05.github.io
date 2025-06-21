import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI/ML Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Numpy', 'Panda', 'seaborn']
    },
    {
      title: 'Web Development',
      skills: ['Node js', 'React js', 'HTML', 'CSS', 'Javascript']
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'Java', 'React js', 'SQL', 'Node js']
    },
  ];

  const specializations = [
    'Predcitive Modeling',
    'Data Preprocessing & Feature Engineering',
    'Deep Learning',
    'Supervised Learning Algorithms',
    'Python for AI & Automation',
    'Model Evaluation & Optimization',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern AI/ML technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">AI/ML Specializations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 font-medium hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
