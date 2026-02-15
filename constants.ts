import { BusinessOpportunity, Sector } from './types';

export const EXISTING_OPPORTUNITIES: BusinessOpportunity[] = [
  {
    id: '1',
    title: 'Specialized Weight Loss Clinics',
    sector: Sector.CLINICAL,
    description: 'Physical or virtual clinics offering GLP-1 injections, coaching, and plans. High recurring revenue potential.',
    revenuePotential: '$300/mo per patient',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'Medium',
    tags: ['GLP-1', 'Telehealth', 'Subscription']
  },
  {
    id: '2',
    title: 'Compounding Pharmacy Partnership',
    sector: Sector.SUPPLY_CHAIN,
    description: 'Partner with suppliers for custom semaglutide formulations. Focus on FDA-compliant storage.',
    revenuePotential: '22% Annual Growth',
    barrierToEntry: 'High',
    regulatoryRisk: 'High',
    tags: ['B2B', 'Pharmacy', 'Logistics']
  },
  {
    id: '3',
    title: 'Peptide Research Distribution',
    sector: Sector.SUPPLY_CHAIN,
    description: 'Sell high-purity peptides B2B to labs and universities. Requires strict "Research Only" compliance.',
    revenuePotential: '$2M/year potential',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'Medium',
    tags: ['E-commerce', 'B2B', 'Niche']
  },
  {
    id: '4',
    title: 'Holistic Wellness Hubs',
    sector: Sector.CLINICAL,
    description: 'Combine peptides with HRT/TRT, nutrition, and community to differentiate from "pill mills".',
    revenuePotential: 'High LTV',
    barrierToEntry: 'High',
    regulatoryRisk: 'Medium',
    tags: ['Brick & Mortar', 'Wellness', 'Premium']
  },
  {
    id: '5',
    title: 'Peptide Skincare Brand',
    sector: Sector.PRODUCT,
    description: 'Develop peptide-infused serums targeting collagen/wrinkles. $63B market opportunity.',
    revenuePotential: 'High Margins',
    barrierToEntry: 'Low',
    regulatoryRisk: 'Low',
    tags: ['D2C', 'Beauty', 'Cosmetics']
  },
  {
    id: '6',
    title: 'White-Label Telehealth SaaS',
    sector: Sector.TECH_SAAS,
    description: 'Platform for clinics to handle prescriptions, EMR integration, and compliance.',
    revenuePotential: '$149-399/mo per provider',
    barrierToEntry: 'High',
    regulatoryRisk: 'Low',
    tags: ['Software', 'B2B', 'Scale']
  },
  {
    id: '7',
    title: 'Contract Manufacturing (CMO)',
    sector: Sector.MANUFACTURING,
    description: 'Produce peptide APIs for pharma/biotech. Massive scale-up potential for vaccines/cosmetics.',
    revenuePotential: '$100M+ Capacity',
    barrierToEntry: 'Very High',
    regulatoryRisk: 'High',
    tags: ['Industrial', 'Biotech', 'Pharma']
  },
  {
    id: '8',
    title: 'Peptide Consulting Agency',
    sector: Sector.TECH_SAAS,
    description: 'Launch services for new clinics: SOPs, marketing, supplier vetting.',
    revenuePotential: '$10k+ per client',
    barrierToEntry: 'Low',
    regulatoryRisk: 'Low',
    tags: ['Services', 'Consulting', 'B2B']
  }
];

export const RESEARCH_CONTEXT = `
Context from research:
1. Weight Loss Clinics: $150B market by 2030. $300/mo/patient. Virtual models viable.
2. Compounding: Custom semaglutide, FDA-compliant storage needed.
3. Distribution: Bulk peptides to pharmacies or research labs. High margins (40-80%).
4. Holistic Hubs: Combine GLP-1 with HRT/TRT.
5. Skincare: $63B market. Peptide serums. D2C.
6. SaaS: White-label telehealth platforms ($149-399/mo/provider).
7. Manufacturing: CMOs for API production.
8. Consulting: SOPs and marketing for new launches.
Location focus: Arizona (LLC friendly).
Regulatory: FDA compliance key (Research-only vs GMP).
`;
