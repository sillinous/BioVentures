import React, { useState } from 'react';
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
  X
} from 'lucide-react';

// --- Helper Components for the main view ---

const SectorBadge: React.FC<{ sector: Sector }> = ({ sector }) => {
  const colors = {
    [Sector.CLINICAL]: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    [Sector.SUPPLY_CHAIN]: 'bg-blue-100 text-blue-800 border-blue-200',
    [Sector.PRODUCT]: 'bg-rose-100 text-rose-800 border-rose-200',
    [Sector.TECH_SAAS]: 'bg-violet-100 text-violet-800 border-violet-200',
    [Sector.MANUFACTURING]: 'bg-slate-100 text-slate-800 border-slate-200',
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium border ${colors[sector]}`}>
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-teal-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                BioVenture<span className="font-light">Nexus</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setActiveTab('market')}
                className={`text-sm font-medium transition-colors ${activeTab === 'market' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Market Opportunities
              </button>
              <button 
                onClick={() => setActiveTab('generate')}
                className={`text-sm font-medium transition-colors ${activeTab === 'generate' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                AI Architect
              </button>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                Connect Wallet (Coming Soon)
              </button>
            </div>

            <div className="flex items-center md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
             <button 
                onClick={() => { setActiveTab('market'); setMobileMenuOpen(false); }}
                className="block w-full text-left font-medium text-slate-700"
              >
                Market Opportunities
              </button>
              <button 
                onClick={() => { setActiveTab('generate'); setMobileMenuOpen(false); }}
                className="block w-full text-left font-medium text-slate-700"
              >
                AI Architect
              </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Hero */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            The Future of <span className="text-indigo-600">Bio-Business</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Explore transformative business models in the deregulated peptide and wellness economy. 
            From $300/mo subscription clinics to AI-driven drug discovery.
          </p>
        </div>

        {/* Dynamic Content Switching */}
        {activeTab === 'market' ? (
          <div className="space-y-12 animate-fade-in">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                <p className="text-indigo-100 text-sm font-medium uppercase tracking-wider mb-1">Total Addressable Market</p>
                <div className="text-4xl font-bold mb-2">$150B</div>
                <p className="text-indigo-100 text-sm opacity-90">GLP-1 Sector by 2030</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-center">
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">Skincare Segment</p>
                <div className="text-4xl font-bold text-slate-900 mb-2">$63B</div>
                <p className="text-emerald-600 text-sm font-medium flex items-center">
                   <ArrowRight className="w-4 h-4 mr-1 rotate-[-45deg]" /> Growing 10%+ Annually
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-center">
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">High Potential Niche</p>
                <div className="text-2xl font-bold text-slate-900 mb-2">Telehealth SaaS</div>
                <p className="text-slate-600 text-sm">Recurring revenue up to $399/mo/provider</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Market Chart */}
              <div className="lg:col-span-2">
                 <MarketChart />
              </div>

              {/* Quick Info Card */}
              <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-teal-400">Regulatory Insight</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    The current landscape favors distinct separation between <span className="text-white font-semibold">Research Only</span> distribution and <span className="text-white font-semibold">Clinical Prescription</span> models.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Arizona is highlighted as a strategic location due to favorable LLC structures and telehealth adoption.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab('generate')}
                  className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2"
                >
                  Create Strategy <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Opportunities Grid */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Established Models</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EXISTING_OPPORTUNITIES.map((opp) => (
                  <div key={opp.id} className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-indigo-50 transition-colors">
                        <IconForSector sector={opp.sector} />
                      </div>
                      <SectorBadge sector={opp.sector} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{opp.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 flex-grow">{opp.description}</p>
                    
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Revenue</span>
                        <span className="font-medium text-slate-700">{opp.revenuePotential}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                         <span className="text-slate-400">Entry Barrier</span>
                         <span className={`font-medium ${
                           opp.barrierToEntry === 'Low' ? 'text-emerald-600' : 
                           opp.barrierToEntry === 'High' ? 'text-amber-600' : 
                           opp.barrierToEntry === 'Very High' ? 'text-rose-600' :
                           'text-slate-700'
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
          <div className="animate-fade-in">
             <div className="max-w-5xl mx-auto">
                <IdeaGenerator />
             </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm">
            © 2024 BioVenture Nexus. Educational purposes only. Not financial or medical advice.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">Documentation</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">API Status</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;