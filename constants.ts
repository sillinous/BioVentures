import { BusinessOpportunity, Sector } from './types';

export const EXISTING_OPPORTUNITIES: BusinessOpportunity[] = [
  {
    id: '1',
    title: 'Specialized Weight Loss Clinics',
    sector: Sector.CLINICAL,
    description: 'Physical or virtual clinics offering GLP-1 injections, coaching, and plans. High recurring revenue potential.',
    regulatoryHurdles: 'Requires 503A/B sourcing compliance and medical oversight licenses.',
    fundingLandscape: 'High PE/VC interest; massive M&A potential from big-box retailers.',
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
    regulatoryHurdles: 'Strict DQSA compliance and state pharmacy board inspections.',
    fundingLandscape: 'Asset-heavy; often debt-financed or funded by health conglomerates.',
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
    regulatoryHurdles: 'Non-human use labels; liability insurance hurdles are significant.',
    fundingLandscape: 'Bootstrapping common; Niche Angel investors in biochemical logistics.',
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
    regulatoryHurdles: 'CLIA waiver for in-house testing and local zoning for wellness centers.',
    fundingLandscape: 'High LTV; attractive to family offices and franchise investors.',
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
    regulatoryHurdles: 'Cosmetic labeling vs drug claims; FTC advertising regulations.',
    fundingLandscape: 'D2C-friendly; high potential for seed-round VC funding.',
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
    regulatoryHurdles: 'HIPAA/SOC2 compliance and multi-state medical parity laws.',
    fundingLandscape: 'Classic SaaS metrics; High valuation multiples for high retention.',
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
    regulatoryHurdles: 'cGMP facility certification and ISO standards adherence.',
    fundingLandscape: 'Capital intensive; Private Equity and Government grants/subsidies.',
    revenuePotential: '$100M+ Capacity',
    barrierToEntry: 'Very High',
    regulatoryRisk: 'High',
    tags: ['Industrial', 'Biotech', 'Pharma']
  },
  {
    id: '8',
    title: 'Bio-Data Marketplace',
    sector: Sector.TECH_SAAS,
    description: 'Enable patients to monetize their anonymized health data (DNA/Biomarkers) for biotech research.',
    regulatoryHurdles: 'GDPR/CCPA/HIPAA data privacy and patient consent frameworks.',
    fundingLandscape: 'Web3/Tech VCs interested in decentralized data ownership.',
    revenuePotential: 'High Data Value',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'Medium',
    tags: ['Data', 'Web3', 'Research']
  },
  {
    id: '9',
    title: 'Regenerative Medicine Clinic',
    sector: Sector.CLINICAL,
    description: 'Focus on tissue repair and joint health using GHK-Cu, BPC-157, and MSC-derived exosomes.',
    regulatoryHurdles: 'Strict regenerative claim restrictions; Investigational New Drug (IND) barriers.',
    fundingLandscape: 'Premium cash-pay model; self-funding common due to high margins.',
    revenuePotential: 'High Premium',
    barrierToEntry: 'High',
    regulatoryRisk: 'High',
    tags: ['Regenerative', 'Clinical', 'Premium']
  },
  {
    id: '10',
    title: 'Personalized Nootropic Lab',
    sector: Sector.MANUFACTURING,
    description: 'On-demand production of cognitive peptide blends (Semax/Selank) customized via AI profile.',
    regulatoryHurdles: 'Controlled substance analogues and state lab licenses.',
    fundingLandscape: 'Early stage biohacking niche; mostly Angel or Crypto-wealth funded.',
    revenuePotential: 'Premium Pricing',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'High',
    tags: ['Biohacking', 'Manufacturing']
  },
  {
    id: '11',
    title: 'DeSci IP Marketplace',
    sector: Sector.TECH_SAAS,
    description: 'Crowdfunded clinical trials for unpatentable longevity molecules via IP-NFTs.',
    regulatoryHurdles: 'SEC securities laws vs utility tokens; IP ownership rights.',
    fundingLandscape: 'Decentralized Autonomous Organizations (DAOs) and niche tech VCs.',
    revenuePotential: 'Transaction Fees',
    barrierToEntry: 'High',
    regulatoryRisk: 'Low',
    tags: ['Finance', 'Web3', 'Pharma']
  },
  {
    id: '12',
    title: 'DNA-Targeted Peptide Compounding',
    sector: Sector.SUPPLY_CHAIN,
    description: 'Next-gen pharmacy service that compounds metabolic and recovery peptides based on genomic testing.',
    regulatoryHurdles: 'CLIA lab certification plus pharmacy board oversight.',
    fundingLandscape: 'Precision medicine VCs; Strategic acquisition by diagnostic giants.',
    revenuePotential: 'Massive Upsell',
    barrierToEntry: 'Very High',
    regulatoryRisk: 'High',
    tags: ['Personalized', 'Compounding', 'B2C']
  }
];

export const RESEARCH_CONTEXT = `
Context from research:
1. Weight Loss Market: Projected $150B by 2030. Compound Semaglutide is the primary driver.
2. Biohacking & Performance: Recovery peptides (BPC-157, TB-500) growing at 15% CAGR. Athletes moving from traditional opioids to peptide-based healing.
3. Longevity & Anti-aging: Global focus on "Healthspan" vs Lifespan. Market shift towards epigentic testing + personalized interventions.
4. Personalized Medicine: Consumer genomic testing ($2B market) creates demand for customized drug protocols (Pharmacogenomics).
5. Research & Development: Open R&D laws in specific states (AZ/FL) allow for innovative "Phase 0" observational trials using decentralized models.
6. Skincare: Topical peptides like GHK-Cu have 90% consumer trust ratings in luxury segments.
7. Economics: Average acquisition cost (CAC) for a GLP-1 patient is $150-$250, but LTV exceeds $3,000.
8. DeSci: Decentralized Science is emerging as a way to fund "Stage 0" trials for longevity molecules using blockchain for IP tracking.
Regulatory: FDA 503A vs 503B compounding rules are the primary legal hurdle. "Research Only" label is a high-risk but high-speed entry strategy.
`;