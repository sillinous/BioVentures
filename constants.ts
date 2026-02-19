import { BusinessOpportunity, Sector } from './types';

export const EXISTING_OPPORTUNITIES: BusinessOpportunity[] = [
  {
    id: '1',
    title: 'Precision GLP-1 Optimization',
    sector: Sector.CLINICAL,
    description: 'Combining metabolic peptides with continuous glucose monitoring (CGM) and AI coaching for long-term weight maintenance.',
    regulatoryHurdles: 'Requires 503A sourcing compliance and medical oversight licenses.',
    fundingLandscape: 'High PE/VC interest; massive M&A potential from big-box retailers.',
    revenuePotential: '$450/mo per patient',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'Medium',
    yieldScore: 7.5,
    riskScore: 5.0,
    tags: ['Metabolic', 'Telehealth', 'AI']
  },
  {
    id: 'reg-1',
    title: 'Exosome Distribution Network',
    sector: Sector.REGENERATIVE,
    description: 'Cold-chain logistics for MSC-derived exosomes used in topical aesthetics and localized joint repair applications.',
    regulatoryHurdles: 'Strict biologic storage requirements and FDA IND pathways for non-topical use.',
    fundingLandscape: 'High-growth niche; popular with family offices focused on biotech logistics.',
    revenuePotential: '$5M - $15M Annual',
    barrierToEntry: 'High',
    regulatoryRisk: 'High',
    yieldScore: 8.8,
    riskScore: 8.5,
    tags: ['Biologics', 'Logistics', 'Supply Chain']
  },
  {
    id: 'noot-1',
    title: 'Cognitive Peptide Concierge',
    sector: Sector.CLINICAL,
    description: 'Telehealth platform for executive performance, prescribing intranasal Semax, Selank, and Cerebrolysin protocols.',
    regulatoryHurdles: 'Navigating off-label compounding regulations; strictly clinician-guided.',
    fundingLandscape: 'High-net-worth target demographic; strong subscription potential.',
    revenuePotential: '$300-$500/mo subscription',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'Medium',
    yieldScore: 6.5,
    riskScore: 6.0,
    tags: ['Nootropics', 'Peptides', 'Performance']
  },
  {
    id: 'mito-1',
    title: 'Mitochondrial Energy (MEO) Hubs',
    sector: Sector.PRODUCT,
    description: 'Subscription service for Urolithin A, NAD+ precursors, and CoQ10, coupled with cellular energy (ATP) testing.',
    regulatoryHurdles: 'DSHEA compliance for supplement claims; FTC oversight on anti-aging marketing.',
    fundingLandscape: 'High LTV; appealing to wellness-focused Angel syndicates.',
    revenuePotential: '75% Gross Margin',
    barrierToEntry: 'Low',
    regulatoryRisk: 'Low',
    yieldScore: 5.5,
    riskScore: 2.5,
    tags: ['Mitochondria', 'Supplements', 'NAD+']
  },
  {
    id: 'pgdh-1',
    title: '15-PGDH Inhibitor Therapeutics',
    sector: Sector.REGENERATIVE,
    description: 'Development of small molecule inhibitors to elevate Prostaglandin E2 (PGE2), reversing cartilage degeneration and sarcopenia.',
    regulatoryHurdles: 'High FDA scrutiny for novel small molecules; Phase I/II safety trials required.',
    fundingLandscape: 'Top-tier Biotech VC target due to massive osteoarthritis addressable market.',
    revenuePotential: 'Billion-dollar Exit Potential',
    barrierToEntry: 'Very High',
    regulatoryRisk: 'High',
    yieldScore: 9.8,
    riskScore: 9.5,
    tags: ['Osteoarthritis', 'Sarcopenia', 'Biotech']
  },
  {
    id: 'neuro-1',
    title: 'VNS Neuro-Recovery Centers',
    sector: Sector.CLINICAL,
    description: 'Clinics using non-invasive Vagus Nerve Stimulation (VNS) and Photobiomodulation for systemic inflammation and PTSD.',
    regulatoryHurdles: 'FDA 510(k) clearance for devices; state medical board oversight.',
    fundingLandscape: 'High growth in "Bio-Electronic" medicine; MedTech VC interest.',
    revenuePotential: '$350/session',
    barrierToEntry: 'High',
    regulatoryRisk: 'Medium',
    yieldScore: 7.2,
    riskScore: 4.5,
    tags: ['Bio-Electronics', 'Neurology', 'VNS']
  },
  {
    id: 'bank-1',
    title: 'Autologous Bio-Banking',
    sector: Sector.REGENERATIVE,
    description: 'Cryopreservation service for client\'s own adipose-derived stem cells and immune cells for future immunotherapies.',
    regulatoryHurdles: 'FDA 21 CFR 1271 (HCT/Ps) compliance for autologous use.',
    fundingLandscape: 'Asset-heavy startup costs; steady recurring revenue (storage fees).',
    revenuePotential: '$2k Extraction + $500/yr',
    barrierToEntry: 'High',
    regulatoryRisk: 'Low',
    yieldScore: 6.8,
    riskScore: 3.5,
    tags: ['Stem Cells', 'Banking', 'Insurance']
  },
  {
    id: 'reg-2',
    title: 'Longevity Diagnostics Hub',
    sector: Sector.REGENERATIVE,
    description: 'Retail centers offering biological age testing (Epigenetic clocks), DEXA scans, and VO2 Max assessment.',
    regulatoryHurdles: 'CLIA waiver for in-house blood work and state-level lab regulations.',
    fundingLandscape: 'High LTV; attractive to franchise-model private equity.',
    revenuePotential: '$1,200/initial assessment',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'Low',
    yieldScore: 6.0,
    riskScore: 3.0,
    tags: ['Diagnostics', 'Retail', 'Longevity']
  },
  {
    id: 'desci-1',
    title: 'DeSci IP-NFT Foundry',
    sector: Sector.TECH_SAAS,
    description: 'Incubator that funds "unpatentable" longevity molecules and tokenizes the resulting IP.',
    regulatoryHurdles: 'SEC/FinCEN compliance for digital assets; complex IP licensing.',
    fundingLandscape: 'Crypto-native VCs and Decentralized Autonomous Organizations (DAOs).',
    revenuePotential: 'Equity + Royalty Stream',
    barrierToEntry: 'Very High',
    regulatoryRisk: 'Medium',
    yieldScore: 9.0,
    riskScore: 7.0,
    tags: ['Web3', 'IP', 'DeSci']
  },
  {
    id: 'micro-1',
    title: 'Precision Microbiome Modulation',
    sector: Sector.PRODUCT,
    description: 'AI-driven gut sequencing paired with custom-compounded synbiotics and bacteriophages for metabolic health.',
    regulatoryHurdles: 'GRAS status for supplements vs FDA biologic pathways for phages.',
    fundingLandscape: 'Hot sector; significant VC interest in "Food as Medicine" tech.',
    revenuePotential: '$150/mo + Testing',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'Medium',
    yieldScore: 5.8,
    riskScore: 4.0,
    tags: ['Microbiome', 'AI', 'Gut Health']
  },
  {
    id: 'mat-1',
    title: 'Intergenerational Epigenetic Coaching',
    sector: Sector.TECH_SAAS,
    description: 'AI platform for expectant mothers to optimize fetal epigenetics through targeted multi-omic intervention.',
    regulatoryHurdles: 'HIPAA compliance; ethical review boards (IRB) for research-adjacent data.',
    fundingLandscape: 'FemTech and Longevity cross-over; significant seed interest.',
    revenuePotential: '$2k - $5k LTV',
    barrierToEntry: 'Medium',
    regulatoryRisk: 'Low',
    yieldScore: 6.2,
    riskScore: 2.0,
    tags: ['FemTech', 'Epigenetics', 'AI']
  },
  {
    id: '7',
    title: 'API Manufacturing (Peptides)',
    sector: Sector.MANUFACTURING,
    description: 'Scaling domestic production of high-purity Peptide APIs for compounding pharmacies.',
    regulatoryHurdles: 'cGMP facility certification and DEA/ISO standards compliance.',
    fundingLandscape: 'Capital intensive; Private Equity and Government grants/subsidies.',
    revenuePotential: '$100M+ Capacity',
    barrierToEntry: 'Very High',
    regulatoryRisk: 'High',
    yieldScore: 8.5,
    riskScore: 8.0,
    tags: ['Manufacturing', 'Biotech', 'B2B']
  }
];

export const RESEARCH_CONTEXT = `
Context from research:
1. Regenerative Medicine: MSC-derived exosomes for tissue remodeling. New focus on "Cell-Free" therapies.
2. Cognitive Enhancement: Rising demand for "Nootropics 2.0" featuring intranasal peptides like Semax and Selank.
3. 15-PGDH Inhibition: Emerging "Holy Grail" for regenerating cartilage/muscle via PGE2 restoration.
4. Bio-Banking: "Biological Insurance" trend where patients bank young stem cells.
5. Bio-Electronic Medicine: Vagus Nerve Stimulation (VNS) and Photobiomodulation (PBM) as "digital drugs".
6. Microbiome: The "Gut-Brain Axis" market is shifting from generic probiotics to precision bacteriophage.
7. DeSci: Use of IP-NFTs to fund research that traditional Big Pharma ignores.
8. Economics: "Longevity-as-a-Service" models show 300% higher retention than traditional wellness programs.
`;