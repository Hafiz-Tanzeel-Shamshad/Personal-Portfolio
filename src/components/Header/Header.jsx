import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header 
      className={`bg-[#0f172a]  text-white shadow-lg px-6 md:px-9 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        shrink ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo Only */}
        <Link to="/"
          className="backdrop-blur-md bg-white/10 border border-white/30 rounded-full flex items-center justify-center w-14 h-14 md:w-16 md:h-16"
          style={{
            boxShadow: "0 6px 30px 0 rgba(120, 120, 220, 0.25)",
          }}
        >
          <span className="text-2xl md:text-3xl font-extrabold select-none drop-shadow-lg animate-gradient-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            HT
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base font-medium">
          <Link to="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <a href="/#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </a>
          <Link to="/certifications" className="hover:text-purple-400 transition-colors">
            Certifications
          </Link>
          <Link to="/experience" className="hover:text-purple-400 transition-colors">
            Experience
          </Link>
          <Link to="/tech-notes" className="hover:text-purple-400 transition-colors">
            Tech Notes
          </Link>
          <a href="/#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-gray-700 mt-4 py-4">
          <nav className="flex flex-col gap-3 px-4 text-sm font-medium">
            <Link to="/" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              Home
            </Link>
            <a href="/#projects" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              Projects
            </a>
            <Link to="/certifications" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              Certifications
            </Link>
            <Link to="/experience" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              Experience
            </Link>
            <Link to="/tech-notes" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              Tech Notes
            </Link>
            <a href="/#about" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              About
            </a>
            <a href="/#skills" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              Skills
            </a>
            <a href="/#education" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              Education
            </a>
            <a href="/#contact" className="hover:text-purple-400 transition-colors py-2" onClick={closeMobileMenu}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
