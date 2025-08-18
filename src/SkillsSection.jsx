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
  SiAmazon,
  SiCplusplus,
  SiOpenjdk
} from "react-icons/si";

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
  { name: "AWS", icon: SiAmazon, color: "text-orange-400", level: "Beginner" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-500", level: "Advanced" },
  { name: "Java", icon: SiOpenjdk, color: "text-red-500", level: "Advanced" },
];

export default function SkillsSlider() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">Technologies & Skills</h2>
        <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-8">
          Expertise in modern technologies with focus on MERN stack, AI/ML, and competitive programming
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <h3 className="font-semibold text-blue-400 mb-2">Frontend</h3>
            <p className="text-sm text-slate-400">React, HTML, CSS, JavaScript, Tailwind</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-green-400 mb-2">Backend</h3>
            <p className="text-sm text-slate-400">Node.js, Express.js, PHP</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-yellow-400 mb-2">Database</h3>
            <p className="text-sm text-slate-400">MongoDB, MySQL</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-purple-400 mb-2">Languages</h3>
            <p className="text-sm text-slate-400">C++, Java, Python, JavaScript</p>
          </div>
        </div>
      </div>

      {/* Auto-scrolling skill cards */}
      {/* Auto-scrolling skill cards with pause on hover */}
<div className="relative overflow-hidden group">
  <div className="flex w-max space-x-6 animate-slide-left group-hover:[animation-play-state:paused]">

          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="p-6 min-w-64 bg-slate-800 rounded-xl border border-slate-700 hover:bg-slate-700 transition-all"
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
                    skill.level === 'Expert' ? 'bg-green-400' :
                    skill.level === 'Advanced' ? 'bg-blue-400' :
                    skill.level === 'Intermediate' ? 'bg-yellow-400' :
                    'bg-orange-400'
                  }`}
                  style={{
                    width:
                      skill.level === 'Expert'
                        ? '95%'
                        : skill.level === 'Advanced'
                        ? '85%'
                        : skill.level === 'Intermediate'
                        ? '70%'
                        : '50%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Focus Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Programming Languages Focus</h3>
          <p className="text-slate-300">Strong foundation in competitive programming and software development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
            <div className="flex items-center mb-4">
              <SiCplusplus className="text-4xl text-blue-500 mr-4" />
              <div>
                <h4 className="text-xl font-semibold">C++</h4>
                <p className="text-slate-400">Data Structures & Algorithms, Competitive Programming</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Strong foundation in DSA, problem-solving, and competitive programming.
              Experienced with STL, dynamic programming, and graph algorithms.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
            <div className="flex items-center mb-4">
              <SiOpenjdk className="text-4xl text-red-500 mr-4" />
              <div>
                <h4 className="text-xl font-semibold">Java</h4>
                <p className="text-slate-400">Object-Oriented Programming, Enterprise Development</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Proficient in OOP concepts, design patterns, and enterprise application development.
              Experience with Spring framework and database integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
