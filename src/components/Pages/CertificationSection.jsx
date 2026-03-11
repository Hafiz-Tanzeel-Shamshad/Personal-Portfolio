import React from "react";
import certifications from "../../data/certifications";

export default function CertificationSection() {
  return (
    <section
      className="pt-8 pb-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">Certifications</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Certificates that reflect my continuous learning journey in web
            development, software engineering, and AI.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <article
              key={certificate.id}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-slate-800 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                  {certificate.issuer}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {certificate.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {certificate.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
