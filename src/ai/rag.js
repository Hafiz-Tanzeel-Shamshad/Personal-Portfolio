import { model } from "./gemini";
import { knowledge } from "./knowledge";

let requestCount = 0;
const DAILY_LIMIT = 50;

export async function askAI(question) {
  requestCount++;

  if (requestCount > DAILY_LIMIT) {
    console.warn(`Quota warning: ${requestCount} requests sent (limit: ${DAILY_LIMIT})`);
  }

  const prompt = `
You are Hafiz Tanzeel's portfolio assistant.
Answer only from this information:

${knowledge}

User question:
${question}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

export function getRequestCount() {
  return requestCount;
}
