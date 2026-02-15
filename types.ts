export enum Sector {
  CLINICAL = 'Clinical Services',
  SUPPLY_CHAIN = 'Supply Chain & Distribution',
  PRODUCT = 'Product & Retail',
  TECH_SAAS = 'Tech & SaaS',
  MANUFACTURING = 'Manufacturing & R&D'
}

export interface BusinessOpportunity {
  id: string;
  title: string;
  sector: Sector;
  description: string;
  revenuePotential: string;
  barrierToEntry: 'Low' | 'Medium' | 'High' | 'Very High';
  regulatoryRisk: 'Low' | 'Medium' | 'High';
  tags: string[];
}

export interface UserContext {
  budget: string;
  skills: string;
  location: string;
  targetMarket: string;
  businessModel: string;
}

export interface AiGeneratedPlan {
  businessName: string;
  elevatorPitch: string;
  monetizationStrategy: string;
  complianceNote: string;
  stepsToLaunch: string[];
}