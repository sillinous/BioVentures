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
      description: "The unique competitive advantage. Be contrarian and specific to the location."
    },
    regulatoryRisk: { 
      type: Type.NUMBER, 
      description: "Decomposed score (1-10) for risk stemming from laws/FDA. 10 is impossible to execute." 
    },
    marketRisk: { 
      type: Type.NUMBER, 
      description: "Decomposed score (1-10) for risk of low demand or high competition." 
    },
    executionRisk: { 
      type: Type.NUMBER, 
      description: "Decomposed score (1-10) for operational complexity." 
    },
    financialReward: { 
      type: Type.NUMBER, 
      description: "Decomposed score (1-10) for potential profit margins and ROI. 10 is a unicorn." 
    },
    strategicReward: { 
      type: Type.NUMBER, 
      description: "Decomposed score (1-10) for potential IP creation or long-term moat." 
    },
    complianceNote: {
      type: Type.STRING,
      description: "Detailed regulatory guidance (e.g., specific legal statutes to research in the target location)."
    },
    stepsToLaunch: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "5 actionable, high-level strategic steps with timelines."
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
    },
    financialTransparency: {
      type: Type.OBJECT,
      properties: {
        startupCosts: {
          type: Type.OBJECT,
          properties: {
            legal: { type: Type.STRING, description: "Estimate for compliance/incorporation" },
            researchAndDev: { type: Type.STRING, description: "Estimate for R&D/Sourcing" },
            marketing: { type: Type.STRING, description: "Estimate for initial CAC" }
          },
          required: ["legal", "researchAndDev", "marketing"],
          propertyOrdering: ["legal", "researchAndDev", "marketing"]
        },
        pricingModel: { type: Type.STRING, description: "Proposed pricing (e.g. $299/mo subscription)" },
        fundingOptions: { 
          type: Type.ARRAY, 
          items: { type: Type.STRING },
          description: "Recommended funding paths"
        },
        projectedProfitMargins: {
          type: Type.STRING,
          description: "Estimated margins (e.g., 'High (60%+)', 'Medium (30-40%)', 'Low (<20%)')"
        },
        breakEvenTimeline: {
          type: Type.STRING,
          description: "Estimated time to profitability (e.g., '18-24 months')"
        },
        exitValuationEstimate: {
          type: Type.STRING,
          description: "Projected exit valuation based on sector multiples (e.g., '$50M - $200M')"
        }
      },
      required: ["startupCosts", "pricingModel", "fundingOptions", "projectedProfitMargins", "breakEvenTimeline", "exitValuationEstimate"],
      propertyOrdering: ["startupCosts", "pricingModel", "fundingOptions", "projectedProfitMargins", "breakEvenTimeline", "exitValuationEstimate"]
    }
  },
  required: [
    "businessName", 
    "elevatorPitch", 
    "monetizationStrategy", 
    "moatStrategy", 
    "regulatoryRisk",
    "marketRisk",
    "executionRisk",
    "financialReward",
    "strategicReward",
    "complianceNote", 
    "stepsToLaunch",
    "competitorAnalysis",
    "financialTransparency"
  ],
  propertyOrdering: [
    "businessName", 
    "elevatorPitch", 
    "monetizationStrategy", 
    "moatStrategy", 
    "regulatoryRisk",
    "marketRisk",
    "executionRisk",
    "financialReward",
    "strategicReward",
    "complianceNote", 
    "stepsToLaunch",
    "competitorAnalysis",
    "financialTransparency"
  ]
};

/**
 * Generates a detailed business plan based on user context using Gemini 3 Pro.
 */
export const generateBusinessPlan = async (userContext: UserContext): Promise<AiGeneratedPlan> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    You are a world-class Biotech Strategist and Partner at a Tier-1 VC firm specializing in REGENERATIVE HEALTH, BIO-ELECTRONICS, and LONGEVITY.
    
    RESEARCH NUGGETS:
    ${RESEARCH_CONTEXT}

    USER CONTEXT:
    - Budget: ${userContext.budget}
    - Skills/Edge: ${userContext.skills}
    - Location: ${userContext.location}
    - Target Market: ${userContext.targetMarket}
    - Business Model: ${userContext.businessModel}

    OBJECTIVE:
    Synthesize a transformative business blueprint. Specifically consider the following methodologies:
    1. MITOCHONDRIAL HEALTH: Integrating NAD+, Urolithin A, and cellular energy testing.
    2. BIO-ELECTRONICS: Vagus Nerve Stimulation (VNS) or Photobiomodulation (PBM).
    3. DESCI: Tokenizing IP or licensing anonymized patient multi-omic data.
    4. REGENERATIVE CLINICS: localized arbitrage using Phase 0 trial frameworks.

    DECOMPOSED SCORING TASK (1-10):
    - regulatoryRisk: How hard is the FDA/legal path for this multi-modal idea?
    - marketRisk: Is the consumer ready for this "future health" concept?
    - executionRisk: Complexity of managing biologics or advanced data platforms.
    - financialReward: Potential for high-ticket cash-pay or exit via M&A.
    - strategicReward: Long-term IP value or "first-mover" advantage in this specific location.

    STRATEGIC REQUIREMENTS:
    - Identify a localized "moat" based on ${userContext.location}.
    - Suggest a way to use "Phase 0" or "Observational Trials" to safely scale clinical data.
    - Be CONTRARIAN in the Moat Strategy. Don't just say "Quality", say "Exclusive License to X" or "Regulatory Sandbox in Y".
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: generatedPlanSchema,
        temperature: 0.8,
        thinkingConfig: { thinkingBudget: 4000 }
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