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

import React, { useRef, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import myImage from "./assets/img.jpg"; // Replace with your actual image path

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
      ref={sectionRef}
      className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 px-4"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side - Text Content */}
        <div className="flex-1">
          {/* 👋 Greeting */}
          <p className="text-xl italic text-green-400 mb-2 animate-fadeIn flex items-center gap-2">
            <span role="img" aria-label="wave"></span> Hi, my name is
          </p>


          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="text-purple-400">Hafiz </span>
            <span className="text-blue-300">Tanzeel </span>
           
          </h1>

          {/* Typewriter Effect */}
          <p className="text-xl mt-4 text-blue-300">
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
          <p className="mt-4 text-lg max-w-xl">
            Building modern, scalable web applications with MongoDB, Express.js,
            React, and Node.js. Passionate about creating seamless user
            experiences and exploring the frontiers of artificial intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800">
              View My Work
            </button>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-white text-purple-600 px-5 py-2 rounded-md border hover:bg-purple-50"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-6 flex gap-10 text-center text-sm">
            <div>
              <p className="text-green-400 text-xl font-bold">{projects}+</p>
              <p>Projects</p>
            </div>
            <div>
              <p className="text-blue-400 text-xl font-bold">{years}+</p>
              <p>Years Learning</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xl font-bold">BSCS</p>
              <p>In Progress</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={myImage}
            alt="Hafiz Tanzeel Shamshad"
            className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
