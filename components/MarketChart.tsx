import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { year: '2023', glp1: 20, peptides: 40, regenerative: 15 },
  { year: '2024', glp1: 35, peptides: 48, regenerative: 28 },
  { year: '2025', glp1: 55, peptides: 58, regenerative: 45 },
  { year: '2026', glp1: 80, peptides: 68, regenerative: 75 },
  { year: '2028', glp1: 110, peptides: 80, regenerative: 130 },
  { year: '2030', glp1: 150, peptides: 90, regenerative: 210 },
];

const MarketChart: React.FC = () => {
  return (
    <div className="h-[400px] w-full bg-slate-900 rounded-3xl shadow-2xl border border-white/5 p-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-500 opacity-50" />
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-white font-black text-lg tracking-tight uppercase">Aggregated Alpha Projections</h3>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Market Size (Billions USD) // CAGR Analysis</p>
        </div>
        <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="text-emerald-400 text-[10px] font-black uppercase tracking-tighter">Regenerative Lead Sector (+32% YoY)</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorGlp1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPeptides" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRegen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
          <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} tickFormatter={(v) => `$${v}B`} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
            itemStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}
          />
          <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
          <Area type="monotone" dataKey="glp1" stroke="#14b8a6" fillOpacity={1} fill="url(#colorGlp1)" name="Metabolic Health" strokeWidth={3} />
          <Area type="monotone" dataKey="peptides" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPeptides)" name="Performance Peptides" strokeWidth={3} />
          <Area type="monotone" dataKey="regenerative" stroke="#f43f5e" fillOpacity={1} fill="url(#colorRegen)" name="Regenerative/Longevity" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketChart;