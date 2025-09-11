import { MdEmail, MdWork, MdSchool } from "react-icons/md";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { MdDownload } from "react-icons/md";
import React, { useRef, useEffect, useState } from "react";
import myImage from "../../assets/IMG.jpg"; // Replace with your actual image path

const texts = [
  "Python Developer",
  "ML & AI Enthusiast",
  "Machine Learning Engineer",
  "Deep Learning",
  "Django Developer",
  "Flask Developer",
  "FastAPI Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Researcher",
  "Computer Vision",
  "Software Engineer",
  "DevOps Enthusiast",
  "Open Source Contributor",
  "Tech Educator",
];

const HeroSection = () => {
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const sectionRef = useRef(null);

  const projectsTarget = 15;
  const yearsTarget = 3;
  const clientsTarget = 8;

  useEffect(() => {
    const animateCount = (setter, target, duration = 1200) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(easedProgress * target);
        setter(value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setter(target);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount(setProjects, projectsTarget);
          animateCount(setYears, yearsTarget);
          animateCount(setClients, clientsTarget);
        } else {
          setProjects(0);
          setYears(0);
          setClients(0);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-6 px-20"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="flex-1 order-2 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-500/30 shadow-md mb-4">
            <MdWork className="text-green-400 text-lg animate-pulse" />
            <span className="text-green-300 text-sm font-semibold tracking-wide">
              Available for Work
            </span>
          </div>

          {/* Greeting */}
          <p className="text-xl italic text-green-400 mb-2 animate-fadeIn flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Hi, my name is
          </p>

          <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
            <span className="text-purple-400">Hafiz </span>
            <span className="text-blue-300">Tanzeel </span>
          </h1>

          {/* Typewriter */}
          <p className="text-xl mt-4 text-blue-300 min-h-[32px]">
            <Typewriter
              words={texts}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>
          <p className="mt-3 text-gray-300">
            Computer Science Student at Riphah International University
          </p>
          <p className="mt-4 text-lg max-w-xl text-gray-300">
            Building modern, scalable web applications with MongoDB, Express.js,
            React, and Node.js. Passionate about creating seamless user
            experiences and exploring the frontiers of artificial intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2">
              <MdWork className="text-lg" />
              View My Work
            </button>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="inline-flex items-center gap-2 bg-green-600 text-white 
             px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              <MdDownload className="text-lg" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="bg-gray-800 text-white px-6 py-3 rounded-md border border-gray-700 hover:bg-gray-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/Hafiz-Tanzeel-Shamshad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <SiGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hafiztanzeel-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="text-xl" />
            </a>
            <a
              href="https://leetcode.com/u/Hafiz-Tanzeel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LeetCode"
            >
              <SiLeetcode className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Side - Image + Stats */}
        <div className="flex-1 flex flex-col items-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-20 blur-lg"></div>
            <img
              src={myImage}
              alt="Hafiz Tanzeel Shamshad"
              className="relative rounded-full w-52 h-52 md:w-64 md:h-64 object-cover border-4 border-white shadow-xl z-10"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-xs mt-6">
            {[
              { value: projects, label: "Projects", color: "text-purple-400" },
              { value: years, label: "Years Exp", color: "text-blue-400" },
              { value: clients, label: "Clients", color: "text-green-400" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center"
              >
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}+
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
