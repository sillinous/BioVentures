import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2023', glp1: 20, peptides: 40 },
  { year: '2024', glp1: 35, peptides: 48 },
  { year: '2025', glp1: 55, peptides: 58 },
  { year: '2026', glp1: 80, peptides: 68 },
  { year: '2028', glp1: 110, peptides: 80 },
  { year: '2030', glp1: 150, peptides: 90 },
];

const MarketChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4">
      <h3 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Projected Market Size (Billions USD)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(value) => `$${value}B`} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#cbd5e1' }}
          />
          <Area type="monotone" dataKey="peptides" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} name="General Peptides" />
          <Area type="monotone" dataKey="glp1" stackId="1" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.2} name="GLP-1 Market" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketChart;
