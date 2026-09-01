import OpenAI from "openai";

if (!process.env.LLM_AI_API_KEY) throw new Error("LLM_AI_API_KEY is not set");

export const client = new OpenAI({
    baseURL: process.env.LLM_AI_BASE_URL,
    apiKey: process.env.LLM_AI_API_KEY,
    timeout: 30000,
})