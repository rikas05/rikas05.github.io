import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Hi, I'm <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Rikas Mohammed N</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6 font-light">
              AI/ML Specialist & Developer
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              I build intelligent solutions with Python, NLP, and a passion for applied machine learning and deep learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="assets/Rikas_Resume.pdf"
                download
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/30"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com/rikas05" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/rikas-mohammed-n/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:rikasmohammedn@gmail.com" className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2 backdrop-blur-sm border border-cyan-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                {
                  <img src="assets\Rikas_image.jpg" alt="Rikas Mohammed N" className="w-full h-full object-cover" />
                }
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500">Your Image Here</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl"></div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-gray-500 hover:text-white transition-colors duration-300"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;