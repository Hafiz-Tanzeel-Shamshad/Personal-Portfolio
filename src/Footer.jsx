import { SiYoutube, SiLeetcode, SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdWeb, MdRateReview, MdSchool, MdArticle } from "react-icons/md";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand / Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Custom Logo */}
              <div
                className="backdrop-blur-md bg-white/10 border border-white/30 rounded-full flex items-center justify-center w-14 h-14"
                style={{
                  boxShadow: "0 6px 30px 0 rgba(120, 120, 220, 0.25)",
                }}
              >
                <span className="text-2xl font-extrabold select-none drop-shadow-lg animate-gradient-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  HT
                </span>
              </div>

              {/* Name */}
              <span className="text-xl font-bold">Hafiz Tanzeel Shamshad</span>
            </div>

            <p className="text-slate-400 mb-6 max-w-md text-sm leading-relaxed">
              MERN Stack Developer and AI/ML enthusiast passionate about
              creating modern, scalable web applications and exploring the
              frontiers of technology.
            </p>

            {/* Social Links */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-xs">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">Connect With Me</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Hafiz-Tanzeel-Shamshad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="GitHub"
                >
                  <SiGithub className="text-lg group-hover:text-[#6e5494]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hafiztanzeel-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="text-lg group-hover:text-[#0a66c2]" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=hafiztanzeel.pk@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="Email"
                >
                  <MdEmail className="text-lg group-hover:text-[#ea4335]" />
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLIU5O_PDxNPhElJOMdIOuPNF1ZrI-pSiH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="YouTube"
                >
                  <SiYoutube className="text-lg group-hover:text-[#ff0000]" />
                </a>
                <a
                  href="https://leetcode.com/u/Hafiz-Tanzeel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="LeetCode"
                >
                  <SiLeetcode className="text-lg group-hover:text-[#f89f1b]" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["about", "skills", "projects", "blog", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <MdWeb className="text-cyan-400" /> Web Development
              </li>
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <MdArticle className="text-green-400" /> Technical Writing
              </li>
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <MdRateReview className="text-yellow-400" /> Code Review
              </li>
              <li className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <MdSchool className="text-purple-400" /> Mentoring
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="transition-colors duration-300 hover:text-white">
                <span className="text-cyan-400 font-medium">Frontend:</span> React, JavaScript
              </li>
              <li className="transition-colors duration-300 hover:text-white">
                <span className="text-green-400 font-medium">Backend:</span> Node.js, Express
              </li>
              <li className="transition-colors duration-300 hover:text-white">
                <span className="text-yellow-400 font-medium">Database:</span> MongoDB, MySQL
              </li>
              <li className="transition-colors duration-300 hover:text-white">
                <span className="text-purple-400 font-medium">Languages:</span> C++, Java, Python
              </li>
              <li className="transition-colors duration-300 hover:text-white">
                <span className="text-blue-400 font-medium">Focus:</span> AI/ML, DSA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-xs text-slate-500">
              © {currentYear} Hafiz Tanzeel Shamshad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}