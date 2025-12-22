import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

// Cache for context data
let CONTEXT_DATA_CACHE: string | null = null;

/**
 * Load context data from the reports file
 */
async function loadContextData(): Promise<string> {
  if (CONTEXT_DATA_CACHE) {
    return CONTEXT_DATA_CACHE;
  }

  try {
    const response = await fetch("/reportsData.txt");
    if (!response.ok) {
      throw new Error("Failed to load context data");
    }
    CONTEXT_DATA_CACHE = await response.text();
    return CONTEXT_DATA_CACHE;
  } catch (error) {
    console.error("Error loading context data:", error);
    // Return minimal fallback context
    return "Pwani Youth Network (PYN) is a youth empowerment organization in Coastal Kenya.";
  }
}

/**
 * Initialize the Gemini model with context
 */
function getModel(systemInstruction?: string) {
  if (!API_KEY) {
    throw new Error("Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your .env file.");
  }
  
  const genAI = new GoogleGenerativeAI(API_KEY);
  
  // Updated model: gemini-1.5-flash is deprecated (404 error).
  // Use gemini-2.5-flash for fast, efficient responses (stable as of Dec 2025).
  // Alternatives: gemini-2.5-pro (more capable), or gemini-3-flash-preview (cutting-edge preview).
  const config: { model: string; systemInstruction?: string } = { 
    model: "gemini-2.5-flash" 
  };
  
  if (systemInstruction) {
    config.systemInstruction = systemInstruction;
  }
  
  return genAI.getGenerativeModel(config);
}

/**
 * Generate a response using Gemini API with context
 */
export async function generateChatResponse(userMessage: string): Promise<string> {
  try {
    const contextData = await loadContextData();
    
    // Create a system prompt with context
    const systemInstruction = `You are a helpful virtual assistant for Pwani Youth Network (PYN), a youth empowerment organization in Coastal Kenya. 
Your role is to provide accurate information about PYN's programs, initiatives, impact, and services based on the context data provided.

Guidelines:
- Answer questions about PYN's programs, achievements, impact, and activities based on the context provided
- Be friendly, professional, and enthusiastic about youth empowerment
- If a question is outside the context, politely let the user know and suggest they contact PYN directly
- Provide specific numbers and details when available in the context
- Keep responses concise but informative (2-4 sentences typically)
- Use a warm and engaging tone that reflects PYN's community-focused mission
- Format responses in a clear, readable way

CRITICAL FORMATTING RULES (MUST FOLLOW STRICTLY):
- Respond in PLAIN TEXT ONLY
- NEVER use any Markdown formatting: no **bold**, *italics*, _underscores_, # headings, - or * bullet points, numbered lists, or code blocks with backticks
- Do not wrap any text in asterisks, underscores, or other symbols for emphasis
- Do not use any special characters for formatting — keep everything as simple, unformatted plain text

Context about Pwani Youth Network:

${contextData}`;

    const model = getModel(systemInstruction);
    
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating chat response:", error);
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        throw new Error("API key is missing or invalid. Please configure VITE_GEMINI_API_KEY in your .env file.");
      }
      throw new Error(`Failed to generate response: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while generating the response.");
  }
}

/**
 * Check if API key is configured
 */
export function isApiKeyConfigured(): boolean {
  return !!API_KEY;
}
