// utils/colorUtils.js
const colors = [
  "green", "yellow", "purple", "orange",
  "sky", "emerald", "indigo", "pink", "red", "teal",
  "cyan", "lime", "rose", "violet", "fuchsia", "amber"
];

export function getTagStyle(tag) {
  // Generate hash from tag text to pick a consistent color
  const hash = Array.from(tag).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const color = colors[hash % colors.length];

  // Return professional subtle background + border + text
  return `bg-${color}-500/10 text-${color}-400 border border-${color}-500/20 px-3 py-1 rounded-full text-sm font-medium`;
}
