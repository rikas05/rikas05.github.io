import { Code, Brain, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Deep understanding of machine learning algorithms, neural networks, and AI model deployment.'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in building end-to-end AI-powered applications with modern web technologies.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Experienced in optimizing model performance and creating efficient, scalable solutions.'
    },
    {
      icon: Users,
      title: 'Collaborative Leader',
      description: 'Strong communication skills with a track record of leading technical teams and projects.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full md:filter md:blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full md:filter md:blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Building the Future, One Line of Code at a Time
            </h3>
            <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                As a Computer Science graduate with a fervent passion for Artificial Intelligence 
                and Machine Learning, I thrive on leveraging cutting-edge technology to solve 
                complex problems and create meaningful, real-world impact.
              </p>
              <p>
                My journey into AI began as a fascination and has evolved into a dedicated pursuit of excellence. I am constantly exploring new techniques and upskilling in the ever-evolving field of artificial intelligence to build innovative solutions.
              </p>
              <p>
                I believe in continuous learning and staying at the forefront of AI 
                innovation. My goal is to contribute to breakthrough technologies, tackle challenging problems, and advance my skills in a collaborative environment.
              </p>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-2 space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/40 md:backdrop-blur-sm p-6 rounded-2xl border border-gray-700/60 transition-all duration-300 hover:border-cyan-400/50 hover:bg-gray-800/60 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-lg">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
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

export default About;