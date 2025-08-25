// utils/colorUtils.js
const skillColorMap = {
  // Web Frameworks & Libraries
  React: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border border-green-500/20",
  MongoDB: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  Express: "bg-gray-500/10 text-gray-400 border border-gray-500/20",
  "Next.js": "bg-slate-500/10 text-slate-200 border border-slate-500/20",
  Angular: "bg-red-500/10 text-red-400 border border-red-500/20",
  Vue: "bg-green-400/10 text-green-300 border border-green-400/20",

  // Styling Frameworks
  Tailwind: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
  Bootstrap: "bg-purple-500/10 text-purple-400 border border-purple-500/20",

  // Databases
  PostgreSQL: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  MySQL: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  SQLite: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  Firebase: "bg-amber-500/10 text-amber-400 border border-amber-500/20", // 🔥

  // Languages
  JavaScript: "bg-yellow-400/10 text-yellow-300 border border-yellow-400/20",
  PHP: "bg-indigo-600/10 text-indigo-500 border border-indigo-600/20",
  "Assembly Language": "bg-pink-700/10 text-pink-500 border border-pink-700/20",
  Python: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  Java: "bg-red-600/10 text-red-500 border border-red-600/20", // ☕
  "C++": "bg-blue-700/10 text-blue-500 border border-blue-700/20", // 🟦

  // AI & ML
  TensorFlow: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  PyTorch: "bg-red-500/10 text-red-400 border border-red-500/20",
  OpenCV: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  ScikitLearn: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  Streamlit: "bg-red-600/10 text-red-500 border border-red-600/20",

  // Backend / API
  Django: "bg-green-700/10 text-green-500 border border-green-700/20",
  Flask: "bg-gray-600/10 text-gray-400 border border-gray-600/20",
  FastAPI: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
  GraphQL: "bg-pink-600/10 text-pink-400 border border-pink-600/20",
  RESTAPI: "bg-blue-600/10 text-blue-400 border border-blue-600/20",
  Laravel: "bg-rose-600/10 text-rose-500 border border-rose-600/20",

  // Mobile
  Flutter: "bg-blue-400/10 text-blue-300 border border-blue-400/20", // 🦋

  // Other Tools
  WebSocket: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
  Docker: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
  Git: "bg-orange-600/10 text-orange-500 border border-orange-600/20",
  GitHub: "bg-gray-700/10 text-gray-400 border border-gray-700/20",
  AWS: "bg-yellow-600/10 text-yellow-500 border border-yellow-600/20",
};

export function getTagStyle(tag) {
  return `${
    skillColorMap[tag] ||
    "bg-gray-500/10 text-gray-400 border border-gray-500/20"
  } px-3 py-1 rounded-full text-sm font-medium`;
}
