import { Code, Heart } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiLinkedin,
  SiX,
} from "react-icons/si";
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
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand / Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Code className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold">Hafiz Tanzeel Shamshad</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              MERN Stack Developer and AI/ML enthusiast passionate about
              creating modern, scalable web applications and exploring the
              frontiers of technology.
            </p>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-sm text-slate-400">Built with:</span>
              <div className="flex space-x-2">
                <SiReact className="text-cyan-400 text-lg" title="React" />
                <SiNodedotjs className="text-green-400 text-lg" title="Node.js" />
                <SiTailwindcss className="text-blue-400 text-lg" title="Tailwind CSS" />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://github.com/hafiz-tanzeel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <SiGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/hafiz-tanzeel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <SiLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 bg-slate-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <MdEmail className="text-xl" />
              </a>
              <a
                href="https://twitter.com/hafiz_tanzeel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <SiX className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["about", "skills", "projects", "blog", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MdWeb /> Web Development
              </li>
              <li className="flex items-center gap-2">
                <MdArticle /> Technical Writing
              </li>
              <li className="flex items-center gap-2">
                <MdRateReview /> Code Review
              </li>
              <li className="flex items-center gap-2">
                <MdSchool /> Mentoring
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <span className="text-cyan-400">Frontend:</span> React, JavaScript
              </li>
              <li>
                <span className="text-green-400">Backend:</span> Node.js, Express
              </li>
              <li>
                <span className="text-yellow-400">Database:</span> MongoDB, MySQL
              </li>
              <li>
                <span className="text-purple-400">Languages:</span> C++, Java, Python
              </li>
              <li>
                <span className="text-blue-400">Focus:</span> AI/ML, DSA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            © {currentYear} Hafiz Tanzeel Shamshad. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-slate-400">
            <span>Made with</span>
            <Heart className="mx-1 h-4 w-4 text-red-500" />
            <span>and</span>
            <Code className="mx-1 h-4 w-4 text-blue-400" />
            <span>in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
