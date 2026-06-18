import { model } from "./gemini";

const EMBEDDINGS_URL = "/embeddings.json";
let embeddingsCache = null;

async function loadEmbeddings() {
  if (!embeddingsCache) {
    const res = await fetch(EMBEDDINGS_URL);
    embeddingsCache = await res.json();
  }
  return embeddingsCache;
}

function cosineSimilarity(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

function findTopChunks(queryEmb, chunks, n) {
  return chunks
    .map((c) => ({ text: c.text, score: cosineSimilarity(queryEmb, c.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}

async function embedText(text) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${import.meta.env.VITE_GEMINI_KEY}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: { parts: [{ text }] } }),
  });
  if (!res.ok) throw new Error(`Embedding API error: ${res.status}`);
  const data = await res.json();
  return data.embedding.values;
}

async function retry(fn, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      if (err.message?.includes("503") || err.message?.includes("429")) {
        const delay = (i + 1) * 2000;
        console.warn(`Gemini busy, retrying in ${delay}ms...`);
        await new Promise((r) => setTimeout(r, delay));
      } else {
        throw err;
      }
    }
  }
}

export async function askAI(question) {
  const [chunks, queryEmb] = await Promise.all([
    loadEmbeddings(),
    embedText(question),
  ]);

  const topChunks = findTopChunks(queryEmb, chunks, 5);
  if (topChunks.length === 0) {
    return "I don't have enough information to answer that.";
  }

  const context = topChunks.map((c) => c.text).join("\n\n---\n\n");
  const prompt = [
    "You are Hafiz Tanzeel's portfolio assistant. Be friendly and conversational.",
    "For greetings, small talk, or casual questions, respond naturally.",
    "For factual questions about Hafiz Tanzeel, answer ONLY from the information below.",
    "If the information doesn't contain the answer, say you don't know.",
    "",
    "Information:",
    context,
    "",
    `User: ${question}`,
  ].join("\n");

  const result = await retry(() => model.generateContent(prompt));
  return result.response.text();
}
