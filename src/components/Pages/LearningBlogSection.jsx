import React from "react";
import learningPosts from "../../data/learningPosts";

export default function LearningBlogSection() {
  return (
    <section
      className="pt-8 pb-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Tech Notes
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            A space where I post new learnings, discuss technical points, and
            share practical development insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {learningPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-6"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/40">
                  {post.topic}
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>

              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
