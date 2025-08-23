import React from 'react';
import { Code, Brain } from 'lucide-react'; // Icons used in the cards
import AnimatedCard from './AnimatedCard'; // Ensure these components exist
import CounterCard from './CounterCard';

const AboutSection = () => {
  return (
    <section id="about" className="py-10 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedCard delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">About Me</span>
          </h2>
        </AnimatedCard>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <AnimatedCard delay={400}>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Computer Science student at Riphah International University,
                specializing in MERN stack development with a keen interest in Artificial Intelligence 
                and Machine Learning. Currently pursuing my BSCS degree, I combine academic knowledge 
                with practical development experience.
              </p>
              <p>
                My expertise spans the full development lifecycle, from designing intuitive user 
                interfaces with React to building robust backend systems with Node.js and Express.js. 
                I'm also exploring the exciting world of AI/ML, working with Python and various 
                machine learning frameworks.
              </p>

              {/* Three Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {/* Education Card */}
                {/* <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Education</h3>
                  <p className="text-sm text-gray-400">BSCS at Riphah International University</p>
                </div> */}

                {/* Development Card */}
                {/* <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Development</h3>
                  <p className="text-sm text-gray-400">MERN Stack & Full-Stack Web Development</p>
                </div> */}

                {/* AI & ML Card */}
                {/* <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">AI & ML</h3>
                  <p className="text-sm text-gray-400">Machine Learning & Data Science</p>
                </div> */}
              </div>
            </div>
          </AnimatedCard>

          {/* Right Side - Stats */}
          <AnimatedCard delay={600}>
            <div className="grid grid-cols-2 gap-6">
              <CounterCard number={15} label="Technologies" delay={800} />
              <CounterCard number={10} label="Subjects Mastered" delay={1000} />
              <CounterCard number={3} label="Years Learning" delay={1200} />
              <CounterCard number={5} label="Frameworks" delay={1400} />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
