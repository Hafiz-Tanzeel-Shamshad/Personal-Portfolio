import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import projects from "./data/projects";
import { getTagStyle } from "./utils/colorUtils";

export default function FeaturedProjects () {
  const [showAll, setShowAll] = useState(false);

  // Determine which projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Featured Projects
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work spanning web development, machine
            learning, and full-stack applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((p, index) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg 
                         hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 
                         transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-44 md:h-48 bg-slate-800 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-400 flex-1">{p.description}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs ${getTagStyle()}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>


                {/* Buttons */}
                <div className="mt-5 flex gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-purple-600 hover:bg-purple-700 
                               text-white rounded-md text-sm transition flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 border border-gray-700 text-sm 
                               rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show All Button - Only render if there are more than 3 projects */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                         text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center 
                         gap-2 mx-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {showAll ? (
                <>
                  <FaChevronUp /> Show Less
                </>
              ) : (
                <>
                  <FaChevronDown /> Show All Projects ({projects.length})
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}