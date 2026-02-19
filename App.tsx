import React, { useState, useMemo } from 'react';
import { EXISTING_OPPORTUNITIES } from './constants';
import { Sector } from './types';
import MarketChart from './components/MarketChart';
import RiskRewardChart from './components/RiskRewardChart';
import IdeaGenerator from './components/IdeaGenerator';
import { 
  Building2, 
  TestTube2, 
  Truck, 
  Laptop2, 
  Factory, 
  ArrowRight,
  Menu,
  X,
  TrendingUp,
  Filter,
  Scale,
  Coins,
  Dna,
  Zap,
  Microscope,
  Stethoscope,
  Activity,
  BatteryCharging
} from 'lucide-react';

const SectorBadge: React.FC<{ sector: Sector }> = ({ sector }) => {
  const colors = {
    [Sector.CLINICAL]: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    [Sector.SUPPLY_CHAIN]: 'bg-blue-100 text-blue-800 border-blue-200',
    [Sector.PRODUCT]: 'bg-rose-100 text-rose-800 border-rose-200',
    [Sector.TECH_SAAS]: 'bg-violet-100 text-violet-800 border-violet-200',
    [Sector.MANUFACTURING]: 'bg-slate-100 text-slate-800 border-slate-200',
    [Sector.REGENERATIVE]: 'bg-amber-100 text-amber-800 border-amber-200',
  };

  return (
    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight border ${colors[sector]}`}>
      {sector}
    </span>
  );
};

const IconForSector: React.FC<{ sector: Sector }> = ({ sector }) => {
  switch (sector) {
    case Sector.CLINICAL: return <Stethoscope className="w-5 h-5 text-emerald-600" />;
    case Sector.SUPPLY_CHAIN: return <Truck className="w-5 h-5 text-blue-600" />;
    case Sector.PRODUCT: return <TestTube2 className="w-5 h-5 text-rose-600" />;
    case Sector.TECH_SAAS: return <Laptop2 className="w-5 h-5 text-violet-600" />;
    case Sector.MANUFACTURING: return <Factory className="w-5 h-5 text-slate-600" />;
    case Sector.REGENERATIVE: return <Dna className="w-5 h-5 text-amber-600" />;
    default: return <Building2 className="w-5 h-5" />;
  }
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'market' | 'generate'>('market');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<Sector | 'All'>('All');

  const filteredOpportunities = useMemo(() => {
    if (selectedSector === 'All') return EXISTING_OPPORTUNITIES;
    return EXISTING_OPPORTUNITIES.filter(opp => opp.sector === selectedSector);
  }, [selectedSector]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveTab('market')}>
              <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <TrendingUp className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 uppercase">
                BioVenture<span className="text-indigo-600 font-light">Nexus</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => setActiveTab('market')}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-lg ${activeTab === 'market' ? 'bg-slate-100 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                Intelligence
              </button>
              <button 
                onClick={() => setActiveTab('generate')}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-lg ${activeTab === 'generate' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                Strategy Architect
              </button>
            </div>

            <div className="flex items-center md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'market' ? (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Insight Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">Live Intelligence Feed</span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter">
                  The <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Regenerative</span> Economy is Here.
                </h1>
                <p className="text-xl text-slate-400 font-medium mb-8 leading-relaxed max-w-xl">
                  Build multi-modal longevity protocols. Leverage VNS, Mitochondrial optimization, and DeSci to architect the future of health.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setActiveTab('generate')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl flex items-center gap-3">
                    Architect New Venture <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
                 <Dna className="w-full h-full text-white" />
              </div>
            </div>

            {/* Trends Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { title: 'Mitochondrial Alpha', growth: '+285%', icon: <BatteryCharging className="w-4 h-4 text-emerald-500" />, desc: 'Urolithin A & NAD+ cellular fueling.' },
                 { title: 'VNS Bio-Electronics', growth: '+210%', icon: <Zap className="w-4 h-4 text-amber-500" />, desc: 'Systemic inflammation management via biofeedback.' },
                 { title: 'Multi-Omic DeSci', growth: '+140%', icon: <Microscope className="w-4 h-4 text-indigo-500" />, desc: 'Crowdfunded longevity data marketplaces.' },
                 { title: 'Phase 0 Clinics', growth: '+320%', icon: <Activity className="w-4 h-4 text-rose-500" />, desc: 'Rapid localized clinical data acquisition.' },
               ].map((trend, i) => (
                 <div key={i} className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">{trend.icon}</div>
                      <span className="text-emerald-600 text-xs font-black">{trend.growth}</span>
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1 uppercase tracking-tight">{trend.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{trend.desc}</p>
                 </div>
               ))}
            </div>

            {/* Market Charts Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RiskRewardChart />
              <MarketChart />
            </div>

            {/* Opportunities Feed */}
            <div>
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-2 uppercase">Venture Archetypes</h2>
                  <p className="text-slate-500 font-medium text-lg">Validated models for the high-alpha regenerative landscape.</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
                  <Filter className="w-4 h-4 text-slate-400 ml-3" />
                  {['All', ...Object.values(Sector)].map((s) => (
                    <button 
                      key={s} 
                      onClick={() => setSelectedSector(s as Sector | 'All')}
                      className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all whitespace-nowrap ${selectedSector === s ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOpportunities.map((opp) => (
                  <div key={opp.id} className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-indigo-500 transition-colors" />
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors border border-slate-100">
                        <IconForSector sector={opp.sector} />
                      </div>
                      <SectorBadge sector={opp.sector} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors tracking-tight leading-none">{opp.title}</h3>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium line-clamp-3">{opp.description}</p>
                    
                    <div className="mb-8 space-y-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-indigo-50/50 transition-colors">
                        <h4 className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">
                          <Scale className="w-3 h-3" /> Regulatory Barrier
                        </h4>
                        <p className="text-xs text-slate-700 font-bold leading-tight">
                          {opp.regulatoryHurdles}
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-teal-50/50 transition-colors">
                        <h4 className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">
                          <Coins className="w-3 h-3" /> Funding Pulse
                        </h4>
                        <p className="text-xs text-slate-700 font-bold leading-tight">
                          {opp.fundingLandscape}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex justify-between items-center pt-6 border-t border-slate-100">
                      <div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Target Yield</div>
                        <div className="text-sm font-black text-slate-900 tracking-tight">{opp.revenuePotential}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Risk Profile</div>
                        <div className={`text-xs font-black uppercase tracking-tighter ${
                           opp.regulatoryRisk === 'Low' ? 'text-emerald-500' : 
                           opp.regulatoryRisk === 'Medium' ? 'text-amber-500' : 
                           'text-rose-500'
                         }`}>
                           {opp.regulatoryRisk} Alpha
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in py-6">
             <div className="max-w-7xl mx-auto">
                <div className="mb-14 text-center">
                   <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Strategy Architect</h2>
                   <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                     Input variables to synthesize high-alpha localized business models using bio-electronics, mitochondrial optimization, and multi-omics.
                   </p>
                </div>
                <IdeaGenerator />
             </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-start gap-16">
              <div className="max-w-md">
                 <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-white w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">BioVenture Nexus</span>
                 </div>
                 <p className="text-slate-500 text-lg font-medium leading-relaxed">
                   The secure intelligence layer for longevity founders. We navigate the gap between scientific discovery and commercialization in the regenerative era.
                 </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 flex-grow">
                 <div>
                    <h4 className="font-black text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Methods</h4>
                    <ul className="space-y-4 text-sm font-bold text-slate-500">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">VNS Protocols</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Mito-Optimization</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">PBM Devices</a></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-black text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Jurisdictions</h4>
                    <ul className="space-y-4 text-sm font-bold text-slate-500">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Florida Hub</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Arizona Corridor</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">DAO Governance</a></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-black text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Nexus</h4>
                    <ul className="space-y-4 text-sm font-bold text-slate-500">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Data Marketplace</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Investor Nodes</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">DeSci Alliance</a></li>
                    </ul>
                 </div>
              </div>
           </div>
           <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
             <div>© 2025 BioVenture Nexus Protocol // Secure Execution Layer</div>
             <div className="flex gap-12">
               <a href="#" className="hover:text-slate-900">Alpha Disclaimer</a>
               <a href="#" className="hover:text-slate-900">Privacy Nodes</a>
               <a href="#" className="hover:text-slate-900">Legal Architecture</a>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;