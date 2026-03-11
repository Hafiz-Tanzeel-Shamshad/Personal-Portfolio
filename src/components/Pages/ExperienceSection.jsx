import React from "react";
import experiences from "../../data/experiences";

export default function ExperienceSection() {
  return (
    <section className="pt-8 pb-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">Experience</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Practical experience from internships, freelance work, and hands-on
            projects that shaped my development journey.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-700 bg-slate-800/60 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-blue-300">{item.company}</p>
                </div>
                <span className="text-sm text-gray-400">{item.duration}</span>
              </div>

              <p className="mt-4 text-gray-300">{item.description}</p>

              <ul className="mt-4 grid gap-2 md:grid-cols-3">
                {item.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-300 bg-slate-900/60 border border-slate-700 rounded-md px-3 py-2"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
