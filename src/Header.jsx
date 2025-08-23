import React, { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";

const Header = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`bg-[#0f172a]  text-white shadow-lg px-9 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        shrink ? "py-2" : "py-4"
      }`}
    >
      <div  className="ml-8 max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo Only */}
        <div
          className="backdrop-blur-md bg-white/10 border border-white/30 rounded-full flex items-center justify-center w-16 h-16"
          style={{
            boxShadow: "0 6px 30px 0 rgba(120, 120, 220, 0.25)",
          }}
        >
          <span className="text-3xl font-extrabold select-none drop-shadow-lg animate-gradient-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            HT
          </span>
        </div>

        {/* Right: Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium">
          <a href="#home" className="hover:text-purple-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </a>
          {/* <a href="#blog" className="hover:text-purple-400 transition-colors">
            Blog
          </a> */}
          <a href="#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </a>

          {/* Admin Button */}
          {/* <button className="flex items-center justify-center gap-2 bg-[#111827] px-4 py-2 rounded-lg hover:bg-[#1f2937] transition-colors shadow-md">
            <FaCog className="text-lg" />
            <span className="font-semibold text-sm">Admin</span>
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
