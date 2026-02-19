import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Cell, Legend } from 'recharts';
import { EXISTING_OPPORTUNITIES } from '../constants';
import { Sector } from '../types';

const getColor = (sector: Sector) => {
  switch (sector) {
    case Sector.CLINICAL: return '#10b981'; // emerald-500
    case Sector.SUPPLY_CHAIN: return '#3b82f6'; // blue-500
    case Sector.PRODUCT: return '#f43f5e'; // rose-500
    case Sector.TECH_SAAS: return '#8b5cf6'; // violet-500
    case Sector.MANUFACTURING: return '#64748b'; // slate-500
    case Sector.REGENERATIVE: return '#f59e0b'; // amber-500
    default: return '#94a3b8';
  }
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-xl shadow-xl">
        <p className="text-white font-black text-xs uppercase tracking-wider mb-1">{data.title}</p>
        <p className="text-slate-400 text-[10px] font-bold">{data.sector}</p>
        <div className="mt-2 flex gap-4">
          <div>
            <span className="text-[9px] text-slate-500 uppercase block">Yield</span>
            <span className="text-emerald-400 font-bold">{data.yieldScore}/10</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 uppercase block">Risk</span>
            <span className="text-rose-400 font-bold">{data.riskScore}/10</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const RiskRewardChart: React.FC = () => {
  return (
    <div className="h-[400px] w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-6 overflow-hidden relative">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-slate-900 font-black text-lg tracking-tight uppercase">Alpha Matrix</h3>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Risk vs. Reward Landscape</p>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="85%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            type="number" 
            dataKey="riskScore" 
            name="Risk" 
            domain={[0, 10]} 
            label={{ value: 'Regulatory & Execution Risk', position: 'bottom', offset: 0, fontSize: 10, fill: '#64748b', fontWeight: 700 }}
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            type="number" 
            dataKey="yieldScore" 
            name="Yield" 
            domain={[0, 10]} 
            label={{ value: 'Financial Yield Potential', angle: -90, position: 'left', offset: 0, fontSize: 10, fill: '#64748b', fontWeight: 700 }}
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
          />
          <ZAxis type="number" range={[100, 500]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
          <Scatter name="Opportunities" data={EXISTING_OPPORTUNITIES} fill="#8884d8">
            {EXISTING_OPPORTUNITIES.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.sector)} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskRewardChart;