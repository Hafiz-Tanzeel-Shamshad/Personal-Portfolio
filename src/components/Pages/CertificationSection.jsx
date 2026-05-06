import React, { useMemo, useState } from "react";
import certifications from "../../data/certifications";

export default function CertificationSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedQuery = searchTerm.trim().toLowerCase();

  const filteredCertificates = useMemo(() => {
    if (!normalizedQuery) {
      return certifications;
    }

    return certifications.filter((certificate) => {
      const title = certificate.title?.toLowerCase() || "";
      const issuer = certificate.issuer?.toLowerCase() || "";
      const category = certificate.category?.toLowerCase() || "";
      const description = certificate.description?.toLowerCase() || "";

      return (
        title.includes(normalizedQuery) ||
        issuer.includes(normalizedQuery) ||
        category.includes(normalizedQuery) ||
        description.includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

  const grouped = filteredCertificates.reduce(
    (acc, certificate) => {
      const section = certificate.category?.trim() || "Other";

      if (!acc.map[section]) {
        acc.map[section] = [];
        acc.order.push(section);
      }

      acc.map[section].push(certificate);
      return acc;
    },
    { map: {}, order: [] }
  );

  grouped.order.sort((a, b) => a.localeCompare(b));

  const isPdf = (path) => typeof path === "string" && path.toLowerCase().endsWith(".pdf");
  const sectionLabels = {
    Compiler: "Compiler Construction",
    Assembly: "Assembly Language",
    Database: "Database Design",
    "Flutter application develpment": "Flutter Application Develpment",
    "C++ Programming": "C++ Programming Essentials",
  };

  return (
    <section
      className="pt-10 pb-20 bg-[radial-gradient(circle_at_top,_#1f2b4a_0%,_#0f172a_45%,_#0b1220_100%)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-8 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Certifications
              </h2>
              <p className="mt-3 text-slate-300 max-w-2xl">
                Certificates that reflect my continuous learning journey in web
                development, software engineering, and AI.
              </p>
            </div>
            <div className="w-full max-w-md">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Search certificates
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 focus-within:border-cyan-300/60 focus-within:ring-2 focus-within:ring-cyan-400/30">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by title, issuer, or category"
                  className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  aria-label="Search certificates"
                />
                {searchTerm ? (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wide text-slate-300 hover:text-white hover:border-white/20 transition"
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {filteredCertificates.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center text-slate-300">
            No certificates match your search. Try a different keyword.
          </div>
        ) : (
          grouped.order.map((section) => (
            <div key={section} className="mb-12 last:mb-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-white/10" />
                <h3 className="text-2xl font-bold text-white">
                  {sectionLabels[section] || section}
                </h3>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {grouped.map[section].map((certificate) => (
                  <article
                    key={certificate.id}
                    className="group bg-slate-900/70 border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/30 hover:-translate-y-1 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="h-48 bg-slate-950/80 overflow-hidden flex items-center justify-center relative">
                      {certificate.image ? (
                        isPdf(certificate.image) ? (
                          <>
                            <iframe
                              src={`${certificate.image}#toolbar=0&navpanes=0&scrollbar=0`}
                              title={`${certificate.title} preview`}
                              className="w-full h-full"
                            />
                            <a
                              href={certificate.image}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute bottom-2 right-2 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-wide text-white/90 hover:bg-black/80 transition"
                              aria-label={`Open ${certificate.title} PDF`}
                            >
                              Open PDF
                            </a>
                          </>
                        ) : (
                          <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                        )
                      ) : (
                        <span className="text-sm text-slate-400">Image coming soon</span>
                      )}
                    </div>

                    <div className="p-5">
                      {certificate.issuer ? (
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-semibold">
                          {certificate.issuer}
                        </p>
                      ) : null}
                      <h4 className="mt-2 text-lg font-semibold text-white">
                        {certificate.title}
                      </h4>
                      {certificate.description ? (
                        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                          {certificate.description}
                        </p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
