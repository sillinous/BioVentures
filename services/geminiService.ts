import { GoogleGenAI, Type, Schema } from "@google/genai";
import { RESEARCH_CONTEXT } from "../constants";
import { AiGeneratedPlan, UserContext } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generatedPlanSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    businessName: {
      type: Type.STRING,
      description: "A catchy, modern name for the business."
    },
    elevatorPitch: {
      type: Type.STRING,
      description: "A 2-sentence value proposition."
    },
    monetizationStrategy: {
      type: Type.STRING,
      description: "How the business makes money (specific numbers based on research context)."
    },
    complianceNote: {
      type: Type.STRING,
      description: "Specific regulatory warning or advice based on the business type (FDA, Research Only, etc)."
    },
    stepsToLaunch: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "5 actionable steps to start."
    }
  },
  required: ["businessName", "elevatorPitch", "monetizationStrategy", "complianceNote", "stepsToLaunch"]
};

export const generateBusinessPlan = async (userContext: UserContext): Promise<AiGeneratedPlan> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing");
  }

  const prompt = `
    You are a senior Biotech Business Strategist.
    Using the following Research Context, generate a specific, viable business plan for a user.
    
    ${RESEARCH_CONTEXT}

    User Profile:
    - Budget: ${userContext.budget}
    - Skills/Background: ${userContext.skills}
    - Location: ${userContext.location}
    - Target Market Segment: ${userContext.targetMarket}
    - Preferred Business Model: ${userContext.businessModel}

    Create a transformative business concept that fits their constraints and leverages the open regulatory environment (or navigates current ones cleverly).
    
    CRITICAL INSTRUCTIONS:
    1. If "Preferred Business Model" is specified (not "Any"), the plan MUST use that model. For example, if "SaaS", do not suggest a physical clinic.
    2. Focus specifically on the "Target Market Segment" provided.
    3. Be realistic about costs and regulations.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: generatedPlanSchema,
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AiGeneratedPlan;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};