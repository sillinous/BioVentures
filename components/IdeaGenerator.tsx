import React, { useState, useEffect } from 'react';
import { generateBusinessPlan } from '../services/geminiService';
import { AiGeneratedPlan, UserContext } from '../types';
import { 
  Loader2, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  Target, 
  BrainCircuit, 
  Users, 
  Search, 
  TrendingUp, 
  ShieldAlert, 
  PieChart, 
  Wallet,
  HandCoins,
  Scale,
  TestTube2,
  Clock,
  Briefcase,
  Map,
  FileText,
  ListTodo
} from 'lucide-react';

const IdeaGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [plan, setPlan] = useState<AiGeneratedPlan | null>(null);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'financials' | 'risk' | 'execution'>('blueprint');
  const [formData, setFormData] = useState<UserContext>({
    budget: '$10k - $50k',
    location: 'Arizona, USA',
    skills: 'Marketing & Sales',
    targetMarket: 'Longevity & Anti-aging',
    businessModel: 'Any / Best Fit'
  });

  const loadingMessages = [
    "Ingesting Global Regulatory Frameworks...",
    "Analyzing Local Competitor Density...",
    "Synthesizing High-Yield Moat Strategy...",
    "Calculating Financial Projections...",
    "Finalizing Strategic Blueprint..."
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (loading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPlan(null);
    try {
      const result = await generateBusinessPlan(formData);
      setPlan(result);
      setActiveTab('blueprint');
    } catch (error) {
      console.error(error);
      alert("System overload. Please attempt generation again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof UserContext, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const ScoreBar: React.FC<{ label: string; score: number; color: string }> = ({ label, score, color }) => (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
        <span>{label}</span>
        <span>{score}/10</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-1000`} 
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Form Section - Takes up less width now */}
      <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Sparkles className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Venture Intelligence</h2>
        </div>
        
        <form onSubmit={handleGenerate} className="space-y-5">
          <div>
            <label className="block text-xs font-black text-slate-400 mb-1 uppercase tracking-widest">Investment Budget</label>
            <select 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm font-medium"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
            >
              <option value="Under $5k (Bootstrap)">Under $5k (Bootstrap)</option>
              <option value="$10k - $50k">$10k - $50k (Lean Startup)</option>
              <option value="$50k - $200k">$50k - $200k (Expansion Phase)</option>
              <option value="$200k+">$200k+ (Enterprise Scale)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 mb-1 uppercase tracking-widest">Strategic Location</label>
            <input 
              type="text"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="e.g. Austin, TX"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 mb-1 uppercase tracking-widest">Competitive Advantage</label>
            <input 
              type="text"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
              value={formData.skills}
              onChange={(e) => handleInputChange('skills', e.target.value)}
              placeholder="e.g. Bio-Chemical Engineering"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 mb-1 uppercase tracking-widest">High-Growth Segment</label>
            <select 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
              value={formData.targetMarket}
              onChange={(e) => handleInputChange('targetMarket', e.target.value)}
            >
              <option value="Biohacking & Performance">Biohacking & Performance</option>
              <option value="Longevity & Anti-aging">Longevity & Anti-aging</option>
              <option value="Cognitive Enhancement (Nootropics)">Cognitive Enhancement</option>
              <option value="Autologous Bio-Banking">Autologous Bio-Banking</option>
              <option value="Precision Microbiome">Precision Microbiome</option>
              <option value="Neuro-Performance (VNS/PBM)">Neuro-Performance</option>
              <option value="Mitochondrial Optimization">Mitochondrial Optimization</option>
              <option value="DeSci IP Development">DeSci IP Development</option>
              <option value="GLP-1 Metabolic Health">GLP-1 Metabolic Health</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 mb-1 uppercase tracking-widest">Revenue Archetype</label>
            <select 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
              value={formData.businessModel}
              onChange={(e) => handleInputChange('businessModel', e.target.value)}
            >
              <option value="Any / Best Fit">Any / Best Fit</option>
              <option value="SaaS / Data Platform">SaaS / Data Platform</option>
              <option value="Clinical Operations">Clinical Operations</option>
              <option value="D2C Health Product">D2C Health Product</option>
              <option value="Compounding / Logistics">Compounding / Logistics</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-xl flex justify-center items-center gap-2 group border border-indigo-500"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : (
              <>
                Synthesize Blueprint
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Result Section - Takes up more width */}
      <div className="lg:col-span-8 relative h-full min-h-[600px]">
        {!plan && !loading && (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
               <Target className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-600 mb-2">Awaiting Input</h3>
            <p className="text-center font-medium text-slate-400 max-w-xs">Configure the strategic parameters to generate a high-alpha business architecture.</p>
          </div>
        )}

        {loading && (
          <div className="h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden relative">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             <div className="relative z-10 flex flex-col items-center">
               <div className="relative w-24 h-24 mb-10">
                  <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                  <BrainCircuit className="absolute inset-0 m-auto text-indigo-500 w-10 h-10 animate-pulse" />
               </div>
               <p className="text-indigo-900 font-black text-2xl mb-2 tracking-tight animate-pulse">{loadingMessages[loadingStep]}</p>
               <div className="flex gap-1 mt-4">
                 {loadingMessages.map((_, i) => (
                   <div key={i} className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${i <= loadingStep ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                 ))}
               </div>
             </div>
          </div>
        )}

        {plan && !loading && (
          <div className="bg-slate-900 text-white rounded-2xl shadow-2xl ring-1 ring-white/10 animate-fade-in-up border border-slate-800 flex flex-col h-full max-h-[800px] overflow-hidden">
            {/* Header */}
            <div className="p-8 pb-4 border-b border-white/5 bg-slate-900/95">
              <div className="flex justify-between items-start mb-4">
                <div className="px-3 py-1 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                  Verified Architecture
                </div>
              </div>
              <h3 className="text-4xl font-black mb-2 text-white leading-none tracking-tight">
                {plan.businessName}
              </h3>
              <p className="text-slate-400 font-medium text-lg italic leading-snug border-l-2 border-indigo-500 pl-4 py-1">"{plan.elevatorPitch}"</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 bg-slate-900/50 backdrop-blur overflow-x-auto">
              {[
                { id: 'blueprint', label: 'Blueprint', icon: Map },
                { id: 'financials', label: 'Financials', icon: Wallet },
                { id: 'risk', label: 'Risk Analysis', icon: ShieldAlert },
                { id: 'execution', label: 'Roadmap', icon: ListTodo },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 text-xs font-black uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'border-indigo-500 text-white bg-white/5' 
                      : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="p-8 overflow-y-auto custom-scrollbar flex-grow bg-slate-900">
              
              {activeTab === 'blueprint' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                      <h4 className="flex items-center gap-2 font-black text-cyan-400 mb-3 text-[10px] uppercase tracking-widest">
                        <CheckCircle className="w-3 h-3" /> Monetization Strategy
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed font-medium">{plan.monetizationStrategy}</p>
                    </div>
                    <div className="bg-indigo-500/10 p-5 rounded-xl border border-indigo-500/20">
                      <h4 className="flex items-center gap-2 font-black text-indigo-300 mb-3 text-[10px] uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3" /> Competitive Moat
                      </h4>
                      <p className="text-slate-200 text-sm leading-relaxed font-medium">{plan.moatStrategy}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-black text-white text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                       Market Context
                       <div className="h-px bg-slate-800 flex-grow"></div>
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {plan.competitorAnalysis.profiles.map((comp, idx) => (
                        <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex justify-between items-center group hover:bg-slate-800 transition-colors">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                               <Users className="w-3 h-3 text-slate-500" />
                               <span className="font-bold text-slate-200 text-sm">{comp.name}</span>
                            </div>
                            <span className="text-xs text-slate-400 block max-w-md">{comp.description}</span>
                          </div>
                          <div className="text-right">
                             <span className="text-[9px] font-black uppercase text-indigo-500 tracking-wider block mb-1">Edge</span>
                             <span className="text-[10px] font-bold text-white bg-indigo-500/20 px-2 py-1 rounded border border-indigo-500/30">{comp.competitiveEdge}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'financials' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
                        <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2 flex items-center gap-2">
                          <Scale className="w-3 h-3 text-indigo-400" /> Startup Legal
                        </h5>
                        <p className="text-lg font-black text-white">{plan.financialTransparency.startupCosts.legal}</p>
                     </div>
                     <div className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
                        <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2 flex items-center gap-2">
                          <TestTube2 className="w-3 h-3 text-emerald-400" /> R&D Setup
                        </h5>
                        <p className="text-lg font-black text-white">{plan.financialTransparency.startupCosts.researchAndDev}</p>
                     </div>
                     <div className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
                        <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2 flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 text-cyan-400" /> Initial CAC
                        </h5>
                        <p className="text-lg font-black text-white">{plan.financialTransparency.startupCosts.marketing}</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                       <h5 className="text-[10px] font-black uppercase text-slate-400 mb-4 flex items-center gap-2">
                         <PieChart className="w-3 h-3 text-rose-400" /> Unit Economics
                       </h5>
                       <div className="space-y-4">
                         <div className="flex justify-between items-center pb-2 border-b border-white/5">
                           <span className="text-sm text-slate-400">Projected Margin</span>
                           <span className="text-sm font-bold text-white">{plan.financialTransparency.projectedProfitMargins}</span>
                         </div>
                         <div className="flex justify-between items-center pb-2 border-b border-white/5">
                           <span className="text-sm text-slate-400">Break-Even</span>
                           <span className="text-sm font-bold text-white">{plan.financialTransparency.breakEvenTimeline}</span>
                         </div>
                         <div className="flex justify-between items-center">
                           <span className="text-sm text-slate-400">Exit Multiple</span>
                           <span className="text-sm font-bold text-emerald-400">{plan.financialTransparency.exitValuationEstimate}</span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h5 className="text-[10px] font-black uppercase text-slate-400 mb-4 flex items-center gap-2">
                         <HandCoins className="w-3 h-3 text-amber-400" /> Capital Stack
                       </h5>
                       <div className="flex flex-wrap gap-2 mb-6">
                        {plan.financialTransparency.fundingOptions.map((opt, i) => (
                          <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded text-xs font-bold">
                            {opt}
                          </span>
                        ))}
                      </div>
                      <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2 flex items-center gap-2">
                         <Wallet className="w-3 h-3 text-white" /> Pricing Model
                       </h5>
                       <p className="text-sm font-medium text-slate-200">{plan.financialTransparency.pricingModel}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'risk' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="space-y-5">
                      <h4 className="flex items-center gap-2 font-black text-rose-400 text-[10px] uppercase tracking-widest mb-2">
                        <ShieldAlert className="w-3 h-3" /> Risk Factors
                      </h4>
                      <ScoreBar label="Regulatory Friction" score={plan.regulatoryRisk} color="bg-rose-500" />
                      <ScoreBar label="Market Readiness" score={plan.marketRisk} color="bg-orange-500" />
                      <ScoreBar label="Operational Load" score={plan.executionRisk} color="bg-amber-500" />
                    </div>
                    <div className="space-y-5">
                      <h4 className="flex items-center gap-2 font-black text-cyan-400 text-[10px] uppercase tracking-widest mb-2">
                        <TrendingUp className="w-3 h-3" /> Reward Potential
                      </h4>
                      <ScoreBar label="Financial Upside" score={plan.financialReward} color="bg-cyan-500" />
                      <ScoreBar label="Strategic IP Value" score={plan.strategicReward} color="bg-emerald-500" />
                    </div>
                  </div>
                  
                  <div className="bg-amber-500/10 p-6 rounded-xl border border-amber-500/20">
                    <h4 className="flex items-center gap-2 font-black text-amber-400 mb-3 text-[10px] uppercase tracking-widest">
                      <AlertTriangle className="w-4 h-4" /> Compliance Pathway
                    </h4>
                    <p className="text-amber-100/90 text-sm leading-relaxed font-medium">{plan.complianceNote}</p>
                  </div>
                </div>
              )}

              {activeTab === 'execution' && (
                <div className="animate-fade-in">
                  <h4 className="font-black text-white mb-6 text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                     Tactical Roadmap
                     <div className="h-px bg-slate-800 flex-grow"></div>
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {plan.stepsToLaunch.map((step, idx) => (
                      <div key={idx} className="flex gap-5 group p-4 bg-slate-800/30 hover:bg-slate-800 rounded-xl transition-all border border-slate-700/50 hover:border-slate-600">
                        <div className="min-w-[40px] h-10 flex items-center justify-center bg-slate-900 rounded-lg text-sm font-black text-indigo-400 border border-slate-700 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all shadow-lg">
                          0{idx + 1}
                        </div>
                        <div className="flex-grow">
                          <span className="text-sm text-slate-200 font-medium group-hover:text-white transition-colors leading-relaxed block">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
                    <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 flex items-center gap-2">
                      <Search className="w-3 h-3" /> Validation Vectors (Search Terms)
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {plan.competitorAnalysis.suggestedSearchTerms.map((term, idx) => (
                        <span key={idx} className="bg-slate-700/50 text-slate-300 px-3 py-1.5 rounded-lg text-[10px] font-bold border border-slate-600/50 hover:bg-slate-700 transition-colors cursor-default">
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaGenerator;