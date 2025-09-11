import React from 'react';

export default function EducationSection() {
  const skillsData = [
    { title: "Data Structures & Algorithms", level: 90, color: "from-blue-500 to-blue-600" },
    { title: "Object-Oriented Programming", level: 85, color: "from-emerald-500 to-emerald-600" },
    { title: "Web Development", level: 80, color: "from-cyan-500 to-cyan-600" },
    { title: "Machine Learning", level: 75, color: "from-purple-500 to-purple-600" }
  ];

  const academicHighlights = [
    { label: "Current CGPA", value: "3.7/4.0" },
    { label: "Expected Graduation", value: "2025" },
    { label: "Academic Standing", value: "Dean's List" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-slate-900"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Education Card */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-600/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* University Logo Placeholder */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-2xl font-bold text-white">RIU</div>
            </div>
            
            {/* Education Details */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-blue-400 text-xl font-semibold mb-3">Riphah International University</p>
              <p className="text-slate-300 leading-relaxed max-w-3xl">
                Pursuing a comprehensive Computer Science degree with focus on modern software development practices, 
                artificial intelligence, and emerging technologies. The program emphasizes both theoretical foundations 
                and practical industry-relevant skills.
              </p>
            </div>

            {/* Academic Stats */}
            <div className="grid grid-cols-1 gap-4 lg:min-w-[200px]">
              {academicHighlights.map((item, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-xl p-4 text-center border border-slate-600/30">
                  <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                  <div className="text-lg font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <h4 className="text-xl font-bold text-blue-400">Core Foundations</h4>
            </div>
            <ul className="space-y-3">
              {["Operating Systems", "Database Systems", "Data Structures", "Object-Oriented Programming"].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-60"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-yellow-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <h4 className="text-xl font-bold text-yellow-400">Advanced Concepts</h4>
            </div>
            <ul className="space-y-3">
              {["Algorithm Design & Analysis", "Theory of Automata", "Computer Architecture", "Assembly Language"].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-60"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
              <h4 className="text-xl font-bold text-emerald-400">Specializations</h4>
            </div>
            <ul className="space-y-3">
              {["Machine Learning", "Deep Learning", "Computer Vision", "Full-Stack Development"].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 opacity-60"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

       

        {/* Additional Information */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-600/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-300">Currently in final year • Actively seeking opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}