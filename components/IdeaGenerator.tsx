import React, { useState } from 'react';
import { generateBusinessPlan } from '../services/geminiService';
import { AiGeneratedPlan, UserContext } from '../types';
import { Loader2, Sparkles, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const IdeaGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<AiGeneratedPlan | null>(null);
  const [formData, setFormData] = useState<UserContext>({
    budget: '$10k - $50k',
    location: 'Arizona, USA',
    skills: 'Marketing & Sales',
    targetMarket: 'Anti-aging & Wellness',
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
      alert("Failed to generate plan. Please ensure API Key is set.");
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
          <h2 className="text-xl font-bold text-slate-800">AI Business Architect</h2>
        </div>
        
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Estimated Budget</label>
            <select 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
            >
              <option value="Under $5k (Bootstrap)">Under $5k (Bootstrap)</option>
              <option value="$10k - $50k">$10k - $50k (Small Start)</option>
              <option value="$50k - $200k">$50k - $200k (Clinic/Retail)</option>
              <option value="$200k+">$200k+ (Manufacturing/Scale)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Your Primary Skillset</label>
            <input 
              type="text"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.skills}
              onChange={(e) => handleInputChange('skills', e.target.value)}
              placeholder="e.g. Medical Degree, Digital Marketing, Logistics"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Target Location</label>
            <input 
              type="text"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="e.g. Arizona (LLC Friendly)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Target Market Segment</label>
            <select 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.targetMarket}
              onChange={(e) => handleInputChange('targetMarket', e.target.value)}
            >
              <option value="GLP-1 Weight Loss">GLP-1 Weight Loss</option>
              <option value="Anti-aging & Longevity">Anti-aging & Longevity</option>
              <option value="Fitness & Performance">Fitness & Performance</option>
              <option value="Skincare & Beauty">Skincare & Beauty</option>
              <option value="Tech & SaaS">Tech & SaaS</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Preferred Business Model</label>
            <select 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.businessModel}
              onChange={(e) => handleInputChange('businessModel', e.target.value)}
            >
              <option value="Any / Best Fit">Any / Best Fit</option>
              <option value="SaaS / Digital Platform">SaaS / Digital Platform</option>
              <option value="Physical Clinic / Medspa">Physical Clinic / Medspa</option>
              <option value="E-commerce / D2C">E-commerce / D2C</option>
              <option value="B2B Distribution / Supply Chain">B2B Distribution / Supply Chain</option>
              <option value="Manufacturing / R&D">Manufacturing / R&D</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 text-white font-semibold rounded-xl transition-all shadow-md flex justify-center items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Generate Blueprint"}
          </button>
        </form>
      </div>

      {/* Result Section */}
      <div className="relative">
        {!plan && !loading && (
          <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-slate-400 p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            <Sparkles className="w-12 h-12 mb-4 text-slate-300" />
            <p className="text-center">Configure your profile and hit Generate<br/>to receive a custom execution plan.</p>
          </div>
        )}

        {loading && (
          <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 rounded-2xl bg-white shadow-inner">
             <div className="relative w-16 h-16 mb-4">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-200 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
             </div>
             <p className="text-indigo-900 font-medium">Analyzing regulatory frameworks...</p>
             <p className="text-slate-500 text-sm">Cross-referencing peptide market data...</p>
          </div>
        )}

        {plan && !loading && (
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-8 shadow-2xl ring-1 ring-white/10 animate-fade-in-up">
            <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-teal-500/30">
              Recommended Strategy
            </div>
            <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              {plan.businessName}
            </h3>
            <p className="text-indigo-200 italic mb-6 text-lg">"{plan.elevatorPitch}"</p>

            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h4 className="flex items-center gap-2 font-semibold text-teal-300 mb-2">
                  <CheckCircle className="w-4 h-4" /> Monetization
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{plan.monetizationStrategy}</p>
              </div>

              <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                <h4 className="flex items-center gap-2 font-semibold text-amber-400 mb-2">
                  <AlertTriangle className="w-4 h-4" /> Regulatory Compliance
                </h4>
                <p className="text-amber-100/80 text-sm leading-relaxed">{plan.complianceNote}</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Launch Roadmap</h4>
                <ul className="space-y-3">
                  {plan.stepsToLaunch.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="min-w-[24px] h-6 flex items-center justify-center bg-indigo-600 rounded-full text-xs font-bold text-white mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaGenerator;