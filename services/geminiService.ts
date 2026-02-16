import { GoogleGenAI, Type } from "@google/genai";
import { RESEARCH_CONTEXT } from "../constants";
import { AiGeneratedPlan, UserContext } from "../types";

// Schema for the AI generated business plan
const generatedPlanSchema = {
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
      description: "Detailed revenue model including margins and projected LTV."
    },
    moatStrategy: {
      type: Type.STRING,
      description: "The unique competitive advantage (e.g., specific skills integration, local regulatory arbitrage)."
    },
    riskRewardScore: {
      type: Type.OBJECT,
      properties: {
        risk: { type: Type.NUMBER, description: "1-10 scale" },
        reward: { type: Type.NUMBER, description: "1-10 scale" }
      },
      required: ["risk", "reward"],
      propertyOrdering: ["risk", "reward"]
    },
    complianceNote: {
      type: Type.STRING,
      description: "Detailed regulatory guidance (e.g., specific legal statutes to research in the target location)."
    },
    stepsToLaunch: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "5 actionable, high-level strategic steps."
    },
    competitorAnalysis: {
      type: Type.OBJECT,
      properties: {
        profiles: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              description: { type: Type.STRING },
              competitiveEdge: { type: Type.STRING }
            },
            required: ["name", "description", "competitiveEdge"]
          }
        },
        suggestedSearchTerms: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      },
      required: ["profiles", "suggestedSearchTerms"],
      propertyOrdering: ["profiles", "suggestedSearchTerms"]
    }
  },
  required: [
    "businessName", 
    "elevatorPitch", 
    "monetizationStrategy", 
    "moatStrategy", 
    "riskRewardScore", 
    "complianceNote", 
    "stepsToLaunch",
    "competitorAnalysis"
  ],
  propertyOrdering: [
    "businessName", 
    "elevatorPitch", 
    "monetizationStrategy", 
    "moatStrategy", 
    "riskRewardScore", 
    "complianceNote", 
    "stepsToLaunch",
    "competitorAnalysis"
  ]
};

/**
 * Generates a detailed business plan based on user context using Gemini 3 Pro.
 */
export const generateBusinessPlan = async (userContext: UserContext): Promise<AiGeneratedPlan> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    You are a world-class Biotech Strategist and Partner at a Tier-1 VC firm.
    
    RESEARCH NUGGETS:
    ${RESEARCH_CONTEXT}

    USER CONTEXT:
    - Budget: ${userContext.budget}
    - Skills/Edge: ${userContext.skills}
    - Location: ${userContext.location}
    - Target Market: ${userContext.targetMarket}
    - Business Model: ${userContext.businessModel}

    OBJECTIVE:
    Generate a transformative business blueprint that exploits current regulatory openings in health and biotech.
    
    COMPETITOR ANALYSIS TASK:
    Analyze the competitive landscape for this specific idea in ${userContext.location}. 
    Provide 3 hypothetical or representative competitor profiles (Direct or Indirect).
    Suggest 5 precise search terms for the user to conduct deep local market research.

    STRATEGIC REQUIREMENTS:
    1. PROPOSED MOAT: Identify a "moat" based on the user's specific location and skills.
    2. REGULATORY ARBITRAGE: Suggest ways to navigate the 503A/503B compounding divide or "Research Only" paths safely.
    3. NUMBERS: Provide realistic financial benchmarks based on the research context.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: generatedPlanSchema,
        temperature: 0.75,
        thinkingConfig: { thinkingBudget: 2000 }
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