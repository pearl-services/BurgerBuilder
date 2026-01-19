import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'


export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderNewHomePage = () => (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="text-8xl mb-4 animate-bounce">💻</div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4 font-mono">
          {'<'}<span className="text-blue-600">Hello World</span>{' />'}
        </h1>
        <p className="text-2xl text-gray-700 mb-8 font-mono">
          <span className="text-red-500 font-bold">I'm a Full-Stack Developer specializing in the front-end.</span>
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences through clean code and innovative solutions. 
          Let's build something amazing together.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            🚀
          </div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-3 font-mono">Fast & Efficient</h3>
          <p className="text-gray-600 text-center">
            Optimized code that delivers lightning-fast performance and seamless user experiences.
          </p>
        </div>

        <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            🎨
          </div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-3 font-mono">Creative Design</h3>
          <p className="text-gray-600 text-center">
            Beautiful interfaces that combine aesthetics with functionality for maximum impact.
          </p>
        </div>

        <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            🔧
          </div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-3 font-mono">Problem Solver</h3>
          <p className="text-gray-600 text-center">
            Turning complex challenges into elegant solutions with cutting-edge technologies.
          </p>
        </div>
      </div>

      {/* Code Block Style CTA */}
      <div className="bg-gray-800 border-4 border-black rounded-2xl p-8 shadow-lg text-white font-mono">
        <div className="text-green-400 mb-2">// Ready to start your project?</div>
        <div className="text-blue-300 mb-2">const <span className="text-yellow-300">collaborate</span> = () => {'{'}</div>
        <div className="text-purple-300 ml-8 mb-2">return <span className="text-white">"Let's create something incredible!"</span>;</div>
        <div className="text-blue-300 mb-4">{'}'}</div>
        <button 
          onClick={() => setCurrentPage('contact')}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Get In Touch →
        </button>
      </div>
    </div>
  );
  


  const projects = [
    {
      id: 1,
      icon: '🍔',

      title: 'Burger Builder',
      description: 'This is a fun React application. Notice the attention to detail',
      techStack: ['React', 'HTML', 'CSS'],
      gradient: 'from-red-400 to-red-500',
      buttonColor: 'bg-red-500 hover:bg-red-600',      
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faListCheck} />,
      title: 'Nutrional Facts',
      description: 'This is a demonstration of my pixel-perfect CSS skills.',
      techStack: ['HTTP', 'CSS'],
      gradient: 'from-green-400 to-green-500',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'App Placeholder 3',
      description: 'This is where your third amazing project will be showcased. Add your project details, description, and technology stack here.',
      techStack: ['Vue.js', 'Express', 'MySQL'],
      gradient: 'from-blue-400 to-blue-500',
      buttonColor: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 4,
      icon: '🎯',
      title: 'App Placeholder 4',
      description: 'This is where your fourth amazing project will be showcased. Add your project details, description, and technology stack here.',
      techStack: ['Angular', 'Firebase', 'TypeScript'],
      gradient: 'from-purple-400 to-purple-500',
      buttonColor: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const renderHomePage = () => (
    <>
      <header className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-3 font-mono">
          👨‍💻 Developer Portfolio
        </h1>
        <p className="text-xl text-gray-600 font-mono">
          Building innovative solutions with modern technology
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
            
            <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-full flex items-center justify-center text-4xl mx-auto mb-5`}>
              {project.icon}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              {project.title}
            </h2>

            <p className="text-gray-600 text-center leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`${project.buttonColor} text-white px-3 py-1 rounded-full text-sm transition-colors cursor-pointer`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );

  const renderAboutPage = () => (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 font-mono text-center">About Me</h1>
      
      <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-8xl">
            👤
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hello, I'm [Your Name]</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a passionate software developer with expertise in building modern web applications. 
              I love solving complex problems and creating elegant solutions that make a difference.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I strive to create 
              seamless user experiences and robust, scalable applications.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills & Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'SQL', 'Git'].map((skill, index) => (
            <div key={index} className="bg-gray-100 border-2 border-gray-800 rounded-lg p-3 text-center font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 font-mono text-center">Contact Me</h1>
      
      <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg mb-8">
        <p className="text-gray-600 text-center mb-8 text-lg">
          Let's connect! I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-800">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-2xl">
              📧
            </div>
            <div>
              <div className="font-bold text-gray-800">Email</div>
              <div className="text-gray-600">your.email@example.com</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-800">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
              💼
            </div>
            <div>
              <div className="font-bold text-gray-800">LinkedIn</div>
              <div className="text-gray-600">linkedin.com/in/yourprofile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResumePage = () => (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 font-mono text-center">Resume</h1>
      
      <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-800">Experience</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-bold text-gray-800">Senior Software Developer</h3>
            <p className="text-gray-600 mb-2">Tech Company Inc. • 2022 - Present</p>
            <p className="text-gray-700">
              Lead development of scalable web applications using React and Node.js. 
              Mentored junior developers and implemented best practices across the team.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-gray-800">Software Developer</h3>
            <p className="text-gray-600 mb-2">StartUp Co. • 2020 - 2022</p>
            <p className="text-gray-700">
              Developed and maintained multiple client-facing applications. 
              Collaborated with designers and product managers to deliver high-quality features.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-800">Education</h2>
        
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-xl font-bold text-gray-800">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600 mb-2">University Name • 2016 - 2020</p>
          <p className="text-gray-700">
            Graduated with honors. Focused on software engineering, algorithms, and web development.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-300 p-5">
      {/* Navigation Menu */}
      <nav className="max-w-6xl mx-auto mb-12">
        <div className="bg-white border-4 border-black rounded-2xl shadow-lg p-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Home', icon: '🏠', page: 'home' },
              { name: 'Portfolio', icon: '💼', page: 'portfolio' },
              { name: 'About Me', icon: '👤', page: 'about' },
              { name: 'Resume', icon: '📄', page: 'resume' },
              { name: 'Contact', icon: '📬', page: 'contact' }
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  currentPage === item.page
                    ? 'bg-gray-800 text-white scale-105'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        {currentPage === 'home' && renderNewHomePage()}
        {currentPage === 'portfolio' && renderHomePage()}
        {currentPage === 'about' && renderAboutPage()}
        {currentPage === 'contact' && renderContactPage()}
        {currentPage === 'resume' && renderResumePage()}

        <footer className="text-center text-gray-800 py-5 mt-12">
          <p>&copy; 2026 Developer Portfolio. Built with passion and code.</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
      `}</style>
    </div>
  );  
}

