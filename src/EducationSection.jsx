export default function EducationSection() {
  const bars = [
    { title: "Data Structures & Algorithms", color: "bg-blue-400", value: "90%" },
    { title: "Object-Oriented Programming", color: "bg-green-400", value: "85%" },
    { title: "Web Development", color: "bg-cyan-400", value: "80%" },
    { title: "Machine Learning", color: "bg-purple-400", value: "75%" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Education</h2>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h3>
          <p className="text-slate-300 mt-2">Riphah International University</p>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
            Currently pursuing BSCS with a comprehensive curriculum covering both theoretical
            foundations and practical applications in computer science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-blue-400">Core Subjects</h4>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Operating Systems</li>
              <li>Database Systems</li>
              <li>Data Structures</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-yellow-400">Advanced Topics</h4>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Design & Analysis of Algorithms</li>
              <li>Theory of Automata</li>
              <li>Computer Organization</li>
              <li>Assembly Language</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-green-400">Specializations</h4>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Computer Vision</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>

        {/* Highlighted Bars (Optional Visual) */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl shadow-md space-y-4">
          {bars.map((bar, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium">{bar.title}</span>
                <span className="text-slate-400">{bar.value}</span>
              </div>
              <div className="w-full h-2 bg-gray-600 rounded-full">
                <div className={`h-2 rounded-full ${bar.color}`} style={{ width: bar.value }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
