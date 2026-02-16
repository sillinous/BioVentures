import React, { useState, useMemo } from 'react';
import { EXISTING_OPPORTUNITIES } from './constants';
import { Sector } from './types';
import MarketChart from './components/MarketChart';
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
  Search,
  Scale,
  Coins
} from 'lucide-react';

const SectorBadge: React.FC<{ sector: Sector }> = ({ sector }) => {
  const colors = {
    [Sector.CLINICAL]: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    [Sector.SUPPLY_CHAIN]: 'bg-blue-100 text-blue-800 border-blue-200',
    [Sector.PRODUCT]: 'bg-rose-100 text-rose-800 border-rose-200',
    [Sector.TECH_SAAS]: 'bg-violet-100 text-violet-800 border-violet-200',
    [Sector.MANUFACTURING]: 'bg-slate-100 text-slate-800 border-slate-200',
  };

  return (
    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight border ${colors[sector]}`}>
      {sector}
    </span>
  );
};

const IconForSector: React.FC<{ sector: Sector }> = ({ sector }) => {
  switch (sector) {
    case Sector.CLINICAL: return <Building2 className="w-5 h-5 text-emerald-600" />;
    case Sector.SUPPLY_CHAIN: return <Truck className="w-5 h-5 text-blue-600" />;
    case Sector.PRODUCT: return <TestTube2 className="w-5 h-5 text-rose-600" />;
    case Sector.TECH_SAAS: return <Laptop2 className="w-5 h-5 text-violet-600" />;
    case Sector.MANUFACTURING: return <Factory className="w-5 h-5 text-slate-600" />;
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
                Market Intelligence
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
        {/* Dynamic Content */}
        {activeTab === 'market' ? (
          <div className="space-y-12 animate-fade-in">
            {/* Featured Insight Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-black mb-4 leading-none tracking-tighter">
                  Capitalize on the <span className="text-indigo-400">Biological Gold Rush</span>
                </h1>
                <p className="text-lg text-slate-300 font-medium mb-6">
                  The deregulation of the peptide economy is opening multi-billion dollar verticals in 
                  longevity, mental performance, and personalized compounding.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setActiveTab('generate')} className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2">
                    Architect Your Strategy <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-center">
                 <TrendingUp className="w-64 h-64" />
              </div>
            </div>

            {/* Market Data Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <div className="lg:col-span-2">
                 <MarketChart />
              </div>
              <div className="space-y-4">
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Growth Hotspot</h3>
                    <div className="text-3xl font-black text-slate-900 leading-tight">15% CAGR</div>
                    <p className="text-sm text-slate-500 mt-2 font-medium">BPC-157 & Healing peptides are the fastest growing niche in the bio-distribution sector.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Strategic Location</h3>
                    <div className="text-2xl font-black text-slate-900">Phoenix, Arizona</div>
                    <p className="text-sm text-slate-500 mt-2 font-medium">Leading in "Right to Try" legislation and favorable tax structures for biotech startups.</p>
                 </div>
              </div>
            </div>

            {/* Opportunities Feed */}
            <div>
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Model Library</h2>
                  <p className="text-slate-500 font-medium">Validated archetypes for the new wellness economy.</p>
                </div>
                
                <div className="flex items-center gap-2 p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <Filter className="w-4 h-4 text-slate-400 ml-2" />
                  {['All', ...Object.values(Sector)].map((s) => (
                    <button 
                      key={s} 
                      onClick={() => setSelectedSector(s as Sector | 'All')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${selectedSector === s ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOpportunities.map((opp) => (
                  <div key={opp.id} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors border border-slate-100">
                        <IconForSector sector={opp.sector} />
                      </div>
                      <SectorBadge sector={opp.sector} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{opp.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed font-medium line-clamp-2">{opp.description}</p>
                    
                    {/* Expanded Intelligence Section */}
                    <div className="mb-6 space-y-4">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-indigo-50/30 transition-colors">
                        <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                          <Scale className="w-3 h-3" /> Regulatory Hurdles
                        </h4>
                        <p className="text-xs text-slate-600 font-medium leading-tight">
                          {opp.regulatoryHurdles}
                        </p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-teal-50/30 transition-colors">
                        <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                          <Coins className="w-3 h-3" /> Funding Landscape
                        </h4>
                        <p className="text-xs text-slate-600 font-medium leading-tight">
                          {opp.fundingLandscape}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                        <span className="text-slate-400">Revenue potential</span>
                        <span className="text-slate-900">{opp.revenuePotential}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                         <span className="text-slate-400">Barrier</span>
                         <span className={`${
                           opp.barrierToEntry === 'Low' ? 'text-emerald-600' : 
                           opp.barrierToEntry === 'High' ? 'text-amber-600' : 
                           'text-rose-600'
                         }`}>
                           {opp.barrierToEntry}
                         </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in py-6">
             <div className="max-w-6xl mx-auto">
                <div className="mb-10 text-center">
                   <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Strategic Architect</h2>
                   <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                     The AI Architect will analyze your budget, location, and skills to generate a high-alpha business blueprint with risk/reward scoring.
                   </p>
                </div>
                <IdeaGenerator />
             </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="max-w-sm">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-white w-4 h-4" />
                    </div>
                    <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">BioVenture Nexus</span>
                 </div>
                 <p className="text-slate-400 text-sm font-medium leading-relaxed">
                   Decentralized tools for the new era of biological innovation. We bridge the gap between regulatory intelligence and entrepreneurship.
                 </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                 <div>
                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-[10px] tracking-widest">Navigation</h4>
                    <ul className="space-y-2 text-sm font-medium text-slate-500">
                       <li><button onClick={() => setActiveTab('market')} className="hover:text-indigo-600 transition-colors">Intelligence</button></li>
                       <li><button onClick={() => setActiveTab('generate')} className="hover:text-indigo-600 transition-colors">Architect</button></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-[10px] tracking-widest">Compliance</h4>
                    <ul className="space-y-2 text-sm font-medium text-slate-500">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">FDA Guidelines</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">HIPAA Tech</a></li>
                    </ul>
                 </div>
                 <div className="col-span-2 sm:col-span-1">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-[10px] tracking-widest">Resources</h4>
                    <ul className="space-y-2 text-sm font-medium text-slate-500">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">API Docs</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Market Reports</a></li>
                    </ul>
                 </div>
              </div>
           </div>
           <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
             <div>© 2025 BioVenture Nexus // v2.0-stable</div>
             <div className="flex gap-8">
               <a href="#" className="hover:text-slate-900">Privacy Protocol</a>
               <a href="#" className="hover:text-slate-900">Terms of Service</a>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;