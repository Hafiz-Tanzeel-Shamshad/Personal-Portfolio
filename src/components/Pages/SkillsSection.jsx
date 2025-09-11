import React from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiLinux,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiPhp,
  SiDocker,
  SiMysql,
  SiPython,
  SiAmazon,  // Fixed: This is the correct import for AWS
  SiCplusplus,
  SiOpenjdk,
  SiDjango,
  SiFastapi,
  SiStreamlit, 
  SiFlask,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiFirebase
} from "react-icons/si";
import { FaChartBar, FaLaptopCode, FaServer, FaDatabase, FaBrain } from "react-icons/fa";

const skills = [
  { name: "Linux", icon: SiLinux, color: "text-yellow-400", level: "Advanced" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500", level: "Expert" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500", level: "Expert" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500", level: "Expert" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", level: "Advanced" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400", level: "Expert" },
  { name: "React", icon: SiReact, color: "text-cyan-400", level: "Advanced" },
  { name: "PHP", icon: SiPhp, color: "text-purple-600", level: "Intermediate" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400", level: "Intermediate" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400", level: "Advanced" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-400", level: "Advanced" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", level: "Advanced" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600", level: "Intermediate" },
  { name: "Python", icon: SiPython, color: "text-yellow-400", level: "Intermediate" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-400", level: "Beginner" }, // Fixed: Using SiAmazon
  { name: "C++", icon: SiCplusplus, color: "text-blue-500", level: "Intermediate" },
  { name: "Java", icon: SiOpenjdk, color: "text-red-500", level: "Intermediate" },

  // ✅ Newly Added
  { name: "Django", icon: SiDjango, color: "text-green-600", level: "Intermediate" },
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-400", level: "Intermediate" },
  { name: "Flask", icon: SiFlask, color: "text-gray-300", level: "Intermediate" },
  { name: "NumPy", icon: SiNumpy, color: "text-blue-400", level: "Intermediate" },
  { name: "Pandas", icon: SiPandas, color: "text-purple-500", level: "Intermediate" },
  { name: "Matplotlib", icon: FaChartBar, color: "text-pink-400", level: "Intermediate" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500", level: "Intermediate" },
  { name: "PyTorch", icon: SiPytorch, color: "text-red-500", level: "Intermediate" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-blue-400", level: "Intermediate" },
  { name: "Streamlit", icon: SiStreamlit, color: "text-red-400", level: "Advanced" },
];

// ✅ Helper component for dots
const SkillDots = ({ filled }) => {
  const total = 5;
  return (
    <div className="flex space-x-1">
      {[...Array(total)].map((_, i) => (
        <span
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${
            i < filled ? "bg-orange-500" : "bg-gray-600"
          }`}
        ></span>
      ))}
    </div>
  );
};

export default function SkillsSlider() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-300 overflow-hidden border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">Technologies & Skills</h2>
        <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-8">
          Expertise in modern technologies with focus on MERN stack, AI/ML, and competitive programming
        </p>

        {/* Auto-scrolling skill cards with pause on hover */}
        <div className="relative overflow-hidden group mb-16">
          <div className="flex w-max space-x-6 animate-slide-left group-hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="p-6 min-w-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className={`text-4xl ${skill.color} mr-4`} />
                  <div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className="text-slate-400">{skill.level}</p>
                  </div>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      skill.level === "Expert"
                        ? "bg-green-400"
                        : skill.level === "Advanced"
                        ? "bg-blue-400"
                        : skill.level === "Intermediate"
                        ? "bg-yellow-400"
                        : "bg-orange-400"
                    }`}
                    style={{
                      width:
                        skill.level === "Expert"
                          ? "95%"
                          : skill.level === "Advanced"
                          ? "85%"
                          : skill.level === "Intermediate"
                          ? "70%"
                          : "50%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Skill Categories Heading - Moved Below Slider */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold mb-4">Skill Categories</h3>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Comprehensive expertise across modern web development and machine learning technologies
          </p>
        </div>

        {/* ✅ Two cards in first row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Frontend */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-cyan-900/30 rounded-lg group-hover:bg-cyan-900/50 transition-colors">
                <FaLaptopCode className="text-3xl text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold ml-4">Frontend Development</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiJavascript className="text-yellow-500 mr-2 text-lg" />
                <span>JavaScript</span>
              </div>
              <SkillDots filled={5} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiReact className="text-cyan-400 mr-2 text-lg" />
                <span>React.js</span>
              </div>
              <SkillDots filled={4} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiBootstrap className="text-purple-500 mr-2 text-lg" />
                <span>Bootstrap</span>
              </div>
              <SkillDots filled={4} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiTailwindcss className="text-cyan-400 mr-2 text-lg" />
                <span>Tailwind CSS</span>
              </div>
              <SkillDots filled={5} />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-green-500 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-900/30 rounded-lg group-hover:bg-green-900/50 transition-colors">
                <FaServer className="text-3xl text-green-400" />
              </div>
              <h3 className="text-lg font-semibold ml-4">Backend Development</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiNodedotjs className="text-green-600 mr-2 text-lg" />
                <span>Node.js</span>
              </div>
              <SkillDots filled={4} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiExpress className="text-gray-400 mr-2 text-lg" />
                <span>Express.js</span>
              </div>
              <SkillDots filled={4} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiDjango className="text-green-700 mr-2 text-lg" />
                <span>Django</span>
              </div>
              <SkillDots filled={3} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiFlask className="text-gray-300 mr-2 text-lg" />
                <span>Flask</span>
              </div>
              <SkillDots filled={3} />
            </div>
          </div>
        </div>

        {/* ✅ Two cards in second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Database & Cloud */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-colors">
                <FaDatabase className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold ml-4">Database & Cloud</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiMongodb className="text-green-600 mr-2 text-lg" />
                <span>MongoDB</span>
              </div>
              <SkillDots filled={4} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiMysql className="text-blue-600 mr-2 text-lg" />
                <span>MySQL</span>
              </div>
              <SkillDots filled={3} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiAmazon className="text-orange-500 mr-2 text-lg" /> {/* Fixed: Using SiAmazon */}
                <span>AWS</span>
              </div>
              <SkillDots filled={2} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiFirebase className="text-yellow-500 mr-2 text-lg" />
                <span>Firebase</span>
              </div>
              <SkillDots filled={3} />
            </div>
          </div>

          {/* AI & ML */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-900/30 rounded-lg group-hover:bg-purple-900/50 transition-colors">
                <FaBrain className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold ml-4">AI & Machine Learning</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiPython className="text-yellow-400 mr-2 text-lg" />
                <span>Python</span>
              </div>
              <SkillDots filled={4} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiScikitlearn className="text-orange-500 mr-2 text-lg" />
                <span>Scikit-learn</span>
              </div>
              <SkillDots filled={3} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <SiPytorch className="text-red-500 mr-2 text-lg" />
                <span>PyTorch</span>
              </div>
              <SkillDots filled={3} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiTensorflow className="text-orange-600 mr-2 text-lg" />
                <span>TensorFlow</span>
              </div>
              <SkillDots filled={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}