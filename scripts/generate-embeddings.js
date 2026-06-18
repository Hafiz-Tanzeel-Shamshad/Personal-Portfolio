import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createInterface } from "readline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const GEMINI_KEY = process.env.VITE_GEMINI_KEY;

async function main() {
  let apiKey = GEMINI_KEY;

  if (!apiKey) {
    const envPath = join(ROOT, ".env");
    if (existsSync(envPath)) {
      const env = readFileSync(envPath, "utf-8");
      const match = env.match(/^VITE_GEMINI_KEY=(.+)$/m);
      if (match) apiKey = match[1].trim();
    }
  }

  if (!apiKey) {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    apiKey = await new Promise((resolve) => {
      rl.question("Enter your Gemini API key: ", (key) => {
        rl.close();
        resolve(key.trim());
      });
    });
  }

  if (!apiKey) {
    console.error("VITE_GEMINI_KEY not found. Set it in .env or pass it.");
    process.exit(1);
  }

  const knowledgeContent = readFileSync(join(ROOT, "src", "ai", "knowledge.js"), "utf-8");
  const match = knowledgeContent.match(/`([\s\S]*)`/);
  if (!match) {
    console.error("Could not parse knowledge.js template literal");
    process.exit(1);
  }

  const knowledge = match[1].replace(/\r\n/g, "\n");
  const chunks = chunkKnowledge(knowledge);

  console.log(`Generated ${chunks.length} chunks`);
  chunks.forEach((c, i) => console.log(`  [${i + 1}] ${c.slice(0, 60).replace(/\n/g, " ")}...`));

  const embeddings = [];
  for (let i = 0; i < chunks.length; i++) {
    console.log(`Embedding chunk ${i + 1}/${chunks.length}...`);
    const embedding = await embedText(apiKey, chunks[i]);
    embeddings.push({ text: chunks[i], embedding });
  }

  writeFileSync(join(ROOT, "public", "embeddings.json"), JSON.stringify(embeddings, null, 2));
  console.log(`\nSaved ${embeddings.length} embeddings to public/embeddings.json`);
}

function chunkKnowledge(text) {
  const lines = text.split("\n");
  const MAIN_HEADERS = [
    "Professional Summary:", "Experience:", "Education:", "Skills:",
    "Projects:", "Areas of Expertise:", "Achievements:",
    "Career Interests:", "Contact:",
  ];

  const boundaries = [];
  let skippedAchievements = false;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!MAIN_HEADERS.includes(t)) continue;

    if (t === "Achievements:") {
      const prev = boundaries[boundaries.length - 1];
      const prevHeader = prev !== undefined ? lines[prev].trim() : null;
      if (prevHeader === "Projects:" && !skippedAchievements) {
        skippedAchievements = true;
        continue;
      }
    }

    boundaries.push(i);
  }

  const sections = [];
  for (let i = 0; i < boundaries.length; i++) {
    const start = boundaries[i];
    const end = i + 1 < boundaries.length ? boundaries[i + 1] : lines.length;
    sections.push({
      header: lines[start].trim(),
      content: lines.slice(start + 1, end).join("\n").trim(),
    });
  }

  const chunks = [];

  for (const s of sections) {
    if (s.header === "Experience:" || s.header === "Projects:") {
      const entries = splitEntries(s.content);
      for (const entry of entries) {
        chunks.push(s.header + "\n" + entry);
      }
    } else if (s.header === "Skills:") {
      const cats = s.content.split(/\n(?=(?:Programming Languages|Frontend|Backend|Artificial Intelligence|Databases|Cloud|Version Control):)/);
      for (const c of cats) {
        const clean = c.trim();
        if (clean.length > 10) chunks.push("Skills: " + clean);
      }
    } else {
      let text = s.header + "\n" + s.content;
      if (s.header === "Education:") {
        text = text.replace(/\bCGPA\b/g, "CGPA (GPA)");
      }
      if (s.header === "Professional Summary:") {
        const name = "Name: Hafiz Tanzeel Shamshad (Hafiz Tanzeel)\n";
        text = s.header + "\n" + name + s.content;
      }
      if (s.header === "Achievements:") {
        text = text.replace(/\bCGPA\b/g, "CGPA (GPA)");
      }
      chunks.push(text);
    }
  }

  return chunks.filter((c) => c.trim().length > 10);
}

function splitEntries(content) {
  const blocks = content.split(/\n\n+/);
  const entries = [];
  let current = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    const firstLine = trimmed.split("\n")[0].trim();
    const isField = /:\s*$/.test(firstLine);

    if (!isField && current.length > 0) {
      entries.push(current.join("\n\n"));
      current = [];
    }
    current.push(trimmed);
  }
  if (current.length > 0) entries.push(current.join("\n\n"));

  return entries;
}

async function embedText(apiKey, text) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: { parts: [{ text }] } }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Embedding API error (${res.status}): ${err}`);
  }
  const data = await res.json();
  return data.embedding.values;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
