export enum Sector {
  CLINICAL = 'Clinical Services',
  SUPPLY_CHAIN = 'Supply Chain & Distribution',
  PRODUCT = 'Product & Retail',
  TECH_SAAS = 'Tech & SaaS',
  MANUFACTURING = 'Manufacturing & R&D',
  REGENERATIVE = 'Regenerative & Longevity'
}

export interface BusinessOpportunity {
  id: string;
  title: string;
  sector: Sector;
  description: string;
  regulatoryHurdles: string;
  fundingLandscape: string;
  revenuePotential: string;
  barrierToEntry: 'Low' | 'Medium' | 'High' | 'Very High';
  regulatoryRisk: 'Low' | 'Medium' | 'High';
  // New fields for charting
  yieldScore: number; // 1-10 (Financial Reward)
  riskScore: number; // 1-10 (Regulatory/Execution Risk)
  tags: string[];
}

export interface UserContext {
  budget: string;
  skills: string;
  location: string;
  targetMarket: string;
  businessModel: string;
}

export interface CompetitorProfile {
  name: string;
  description: string;
  competitiveEdge: string;
}

export interface FinancialTransparency {
  startupCosts: {
    legal: string;
    researchAndDev: string;
    marketing: string;
  };
  pricingModel: string;
  fundingOptions: string[];
  projectedProfitMargins: string;
  breakEvenTimeline: string;
  exitValuationEstimate: string;
}

export interface AiGeneratedPlan {
  businessName: string;
  elevatorPitch: string;
  monetizationStrategy: string;
  moatStrategy: string;
  regulatoryRisk: number;
  marketRisk: number;
  executionRisk: number;
  financialReward: number;
  strategicReward: number;
  complianceNote: string;
  stepsToLaunch: string[];
  competitorAnalysis: {
    profiles: CompetitorProfile[];
    suggestedSearchTerms: string[];
  };
  financialTransparency: FinancialTransparency;
}