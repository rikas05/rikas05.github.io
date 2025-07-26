import { Code, Database, Brain, ChevronsRight } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI/ML Frameworks',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Numpy', 'Pandas', 'Seaborn', 'Matplotlib', 'NLP', 'Transformer']
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: ['Node.js', 'React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'Programming & Databases',
      icon: Database,
      skills: ['Python', 'C', 'Java', 'SQL', 'MongoDB', 'Supabase']
    },
  ];

  const specializations = [
    'Predictive Modeling',
    'Data Preprocessing & Feature Engineering',
    'Deep Learning',
    'Supervised Learning Algorithms',
    'Python for AI & Automation',
    'Model Evaluation & Optimization',
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/60 group transition-all duration-300 hover:border-cyan-400/50 hover:bg-gray-800/60"
            >
              <div className="flex items-center gap-4 mb-4">
                <category.icon className="h-8 w-8 md:h-10 md:w-10 text-cyan-400" />
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-300">
                    <ChevronsRight className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
            AI/ML Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {specializations.map((spec) => (
              <span
                key={spec}
                className="px-4 md:px-6 py-2 md:py-3 bg-gray-800/50 border border-transparent rounded-full text-blue-300 font-medium hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 cursor-default"
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
