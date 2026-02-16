import React, { useState } from 'react';
import { generateBusinessPlan } from '../services/geminiService';
import { AiGeneratedPlan, UserContext } from '../types';
import { Loader2, Sparkles, CheckCircle, AlertTriangle, ShieldCheck, Zap, ArrowRight, Target, BrainCircuit, Users, Search } from 'lucide-react';

const IdeaGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<AiGeneratedPlan | null>(null);
  const [formData, setFormData] = useState<UserContext>({
    budget: '$10k - $50k',
    location: 'Arizona, USA',
    skills: 'Marketing & Sales',
    targetMarket: 'Longevity & Anti-aging',
    businessModel: 'Any / Best Fit'
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateBusinessPlan(formData);
      setPlan(result);
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Sparkles className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Venture Intelligence Engine</h2>
        </div>
        
        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1 uppercase tracking-tight text-[10px]">Investment Budget</label>
              <select 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
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
              <label className="block text-sm font-medium text-slate-600 mb-1 uppercase tracking-tight text-[10px]">Strategic Location</label>
              <input 
                type="text"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="e.g. Austin, TX"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1 uppercase tracking-tight text-[10px]">Your Competitive Advantage (Background)</label>
            <input 
              type="text"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.skills}
              onChange={(e) => handleInputChange('skills', e.target.value)}
              placeholder="e.g. Bio-Chemical Engineering, Performance Coaching"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1 uppercase tracking-tight text-[10px]">High-Growth Segment</label>
              <select 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.targetMarket}
                onChange={(e) => handleInputChange('targetMarket', e.target.value)}
              >
                <option value="Biohacking & Performance">Biohacking & Performance</option>
                <option value="Longevity & Anti-aging">Longevity & Anti-aging</option>
                <option value="Personalized Medicine">Personalized Medicine</option>
                <option value="Research & Development">Research & Development</option>
                <option value="GLP-1 Metabolic Health">GLP-1 Metabolic Health</option>
                <option value="Neuro-Performance">Neuro-Performance</option>
                <option value="Women's Hormonal Health">Women's Hormonal Health</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1 uppercase tracking-tight text-[10px]">Revenue Archetype</label>
              <select 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.businessModel}
                onChange={(e) => handleInputChange('businessModel', e.target.value)}
              >
                <option value="Any / Best Fit">Any / Best Fit</option>
                <option value="SaaS / Data Platform">SaaS / Data Platform</option>
                <option value="Clinical Operations">Clinical Operations</option>
                <option value="D2C Health Product">D2C Health Product</option>
                <option value="Compounding / Logistics">Compounding / Logistics</option>
                <option value="Laboratory / Manufacturing">Laboratory / Manufacturing</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-xl flex justify-center items-center gap-2 group border border-indigo-500"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : (
              <>
                Synthesize Strategic Blueprint
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Result Section */}
      <div className="relative h-full">
        {!plan && !loading && (
          <div className="h-full min-h-[520px] flex flex-col items-center justify-center text-slate-400 p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
               <Target className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-center font-semibold text-slate-500 max-w-xs">Awaiting strategic input parameters for analysis...</p>
          </div>
        )}

        {loading && (
          <div className="h-full min-h-[520px] flex flex-col items-center justify-center p-8 rounded-2xl bg-white shadow-inner border border-slate-100 overflow-hidden">
             <div className="relative w-24 h-24 mb-10">
                <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                <BrainCircuit className="absolute inset-0 m-auto text-indigo-500 w-10 h-10 animate-pulse" />
             </div>
             <p className="text-indigo-900 font-black text-2xl mb-2 tracking-tight">Synthesizing Alpha...</p>
             <p className="text-slate-500 text-sm font-medium animate-pulse">Running Monte Carlo simulations on regulatory risk...</p>
          </div>
        )}

        {plan && !loading && (
          <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl ring-1 ring-white/10 animate-fade-in-up border border-slate-800 overflow-y-auto max-h-[85vh] custom-scrollbar">
            <div className="flex justify-between items-start mb-6 sticky top-0 bg-slate-900/95 backdrop-blur py-2 z-10 border-b border-white/5">
              <div className="px-4 py-1.5 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                Venture Alpha Result
              </div>
              <div className="flex gap-4">
                 <div className="text-center">
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Risk</div>
                    <div className={`text-xl font-black ${plan.riskRewardScore.risk > 7 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {plan.riskRewardScore.risk}/10
                    </div>
                 </div>
                 <div className="text-center">
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Reward</div>
                    <div className="text-xl font-black text-cyan-400">
                      {plan.riskRewardScore.reward}/10
                    </div>
                 </div>
              </div>
            </div>

            <h3 className="text-3xl font-black mb-2 text-white leading-none tracking-tight">
              {plan.businessName}
            </h3>
            <p className="text-slate-400 font-medium mb-8 text-lg italic leading-snug border-l-2 border-indigo-500 pl-4 py-1">"{plan.elevatorPitch}"</p>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/[0.07] transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-cyan-400 mb-2 text-[10px] uppercase tracking-widest">
                    <CheckCircle className="w-3 h-3" /> Monetization Model
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed font-medium">{plan.monetizationStrategy}</p>
                </div>
                <div className="bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/20 hover:bg-indigo-500/[0.15] transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-indigo-300 mb-2 text-[10px] uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3" /> Competitive Moat
                  </h4>
                  <p className="text-slate-200 text-xs leading-relaxed font-medium">{plan.moatStrategy}</p>
                </div>
              </div>

              <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                <h4 className="flex items-center gap-2 font-black text-amber-400 mb-2 text-[10px] uppercase tracking-widest">
                  <AlertTriangle className="w-3 h-3" /> Regulatory Pathway
                </h4>
                <p className="text-amber-100/80 text-xs leading-relaxed font-medium">{plan.complianceNote}</p>
              </div>

              {/* Competitor Analysis Section */}
              <div className="space-y-4">
                <h4 className="font-black text-white text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                   Competitive Landscape
                   <div className="h-px bg-slate-800 flex-grow"></div>
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {plan.competitorAnalysis.profiles.map((comp, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/[0.08] transition-all group">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                        <span className="font-bold text-slate-100 text-sm">{comp.name}</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-2 leading-relaxed">{comp.description}</p>
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/5">
                        <span className="text-[10px] font-black uppercase text-indigo-500 tracking-wider">Edge:</span>
                        <span className="text-[10px] font-medium text-slate-300">{comp.competitiveEdge}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 flex items-center gap-2">
                    <Search className="w-3 h-3" /> Research Vectors
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {plan.competitorAnalysis.suggestedSearchTerms.map((term, idx) => (
                      <span key={idx} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md text-[10px] font-medium border border-slate-600/50">
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-black text-white mb-4 text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                   Execution roadmap
                   <div className="h-px bg-slate-800 flex-grow"></div>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {plan.stepsToLaunch.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 group p-3 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-slate-800">
                      <div className="min-w-[32px] h-8 flex items-center justify-center bg-slate-800 rounded-lg text-[12px] font-black text-indigo-400 border border-slate-700 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all shadow-sm">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaGenerator;