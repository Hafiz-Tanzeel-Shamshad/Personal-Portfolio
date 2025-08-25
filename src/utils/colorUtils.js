// utils/colorUtils.js
const colorMap = {
  green: "bg-green-500/10 text-green-400 border border-green-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  orange: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  sky: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  indigo: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  pink: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  red: "bg-red-500/10 text-red-400 border border-red-500/20",
  teal: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  lime: "bg-lime-500/10 text-lime-400 border border-lime-500/20",
  rose: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
  violet: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
  fuchsia: "bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20",
  amber: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
};

const colors = Object.keys(colorMap);

let globalTagIndex = 0; // 🔑 keeps track across ALL projects

export function getTagStyle() {
  const color = colors[globalTagIndex % colors.length];
  globalTagIndex++; // move to next color for the next tag
  return `${colorMap[color]} px-3 py-1 rounded-full text-sm font-medium`;
}
