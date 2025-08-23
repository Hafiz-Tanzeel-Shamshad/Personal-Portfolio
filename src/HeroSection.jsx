import { MdEmail, MdWork, MdSchool } from "react-icons/md";
import { SiGithub, SiLinkedin, SiYoutube, SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import React, { useRef, useEffect, useState } from "react";
import myImage from "./assets/img.jpg"; // Replace with your actual image path

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
  const sectionRef = useRef(null);
  const projectsTarget = 15;
  const yearsTarget = 3;

  useEffect(() => {
    const animateCount = (setter, target, duration = 1200) => {
      let startTimestamp = null;
      const startValue = 0;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(
          easedProgress * (target - startValue) + startValue
        );
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
        } else {
          setProjects(0);
          setYears(0);
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
      className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-16 px-4"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Text Content */}
        <div className="flex-1 order-2 md:order-1">
          {/* 👋 Greeting */}
          <p className="text-xl italic text-green-400 mb-2 animate-fadeIn flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Hi, my name is
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-purple-400">Hafiz </span>
            <span className="text-blue-300">Tanzeel </span>
          </h1>

          {/* Typewriter Effect */}
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
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-gray-800 text-white px-6 py-3 rounded-md border border-gray-700 hover:bg-gray-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
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

          {/* Stats */}
          
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-20 blur-lg"></div>
            <img
              src={myImage}
              alt="Hafiz Tanzeel Shamshad"
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;