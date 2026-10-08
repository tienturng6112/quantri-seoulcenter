"use client";
import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { SlidersHorizontal } from 'lucide-react';

export function ModuleB() {
  const kpiData = [
    { title: 'Doanh thu', value: '28,6 tr', trend: '9,4%', isUp: true, data: [10, 12, 9, 15, 20, 18, 28] },
    { title: 'ROAS Mới', value: '0,84', trend: '18%', isUp: true, data: [0.5, 0.6, 0.5, 0.7, 0.8, 0.75, 0.84] },
    { title: 'ROAS LM', value: '0,84', trend: '26,9%', isUp: true, data: [0.4, 0.5, 0.6, 0.5, 0.7, 0.8, 0.84] },
    { title: 'SL Data mới', value: '27', trend: '80%', isUp: true, data: [10, 15, 12, 18, 22, 20, 27] },
    { title: 'SL lịch mới', value: '14', trend: '100%', isUp: true, data: [2, 5, 4, 8, 10, 12, 14] },
    { title: 'KH mới', value: '7', trend: '22,2%', isUp: false, data: [12, 10, 11, 9, 8, 9, 7] },
    { title: 'KH cũ', value: '120', trend: '4%', isUp: false, data: [130, 125, 128, 122, 124, 121, 120] },
    { title: 'Giá Data mới', value: '459.072 đ', trend: '69,2%', isUp: false, data: [800, 750, 700, 600, 500, 480, 459] },
    { title: 'Giá lịch mới', value: '885.354 đ', trend: '72,3%', isUp: false, data: [1500, 1400, 1200, 1000, 950, 900, 885] },
    { title: 'Giá KH mới', value: '1,8 tr', trend: '28,8%', isUp: false, data: [2.5, 2.3, 2.4, 2.1, 2.0, 1.9, 1.8] },
    { title: 'TBK mới', value: '1.480.285,57', trend: '16%', isUp: false, data: [1800, 1750, 1600, 1550, 1500, 1490, 1480] },
    { title: 'TBK cũ', value: '152.340,84', trend: '84,7%', isUp: true, data: [80, 90, 100, 120, 140, 145, 152] },
    { title: 'TLCĐ Data→Lịch', value: '51,9%', trend: '11,1%', isUp: true, data: [30, 35, 40, 38, 45, 48, 51.9] },
    { title: 'TLCĐ Lịch→Khách LM', value: '42,9%', trend: '62,5%', isUp: false, data: [80, 75, 70, 60, 55, 50, 42.9] },
  ];

  return (
    <div className="mb-10 border-t border-slate-800 pt-8 mt-8">
      {/* Header Module B */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">B · HÀNG KPI LÕI</p>
          <h3 className="text-lg font-bold text-white">Chỉ số KPI tổng quan</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-400 font-medium">THỂ HIỆN</span>
          <div className="flex bg-[#1e293b] rounded-md p-0.5 text-[11px] font-medium border border-slate-700">
            <button className="bg-slate-700 text-white px-3 py-1 rounded shadow-sm">Hôm qua</button>
            <button className="text-slate-400 px-3 py-1 rounded hover:text-white transition-colors">3 ngày</button>
            <button className="text-slate-400 px-3 py-1 rounded hover:text-white transition-colors">7 ngày</button>
            <button className="text-slate-400 px-3 py-1 rounded hover:text-white transition-colors">Tháng này (cùng kỳ)</button>
            <button className="text-slate-400 px-3 py-1 rounded hover:text-white transition-colors">Tùy chỉnh</button>
          </div>
          <button className="text-slate-400 hover:text-white p-1 transition-colors"><SlidersHorizontal size={14}/></button>
        </div>
      </div>

      {/* Grid of Sparkline Cards */}
      <div className="grid grid-cols-6 gap-4">
        {kpiData.map((item, index) => (
          <div key={index} className="bg-[#111827] border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[11px] text-slate-400">{item.title}</p>
              <span className={`text-[10px] font-bold flex items-center gap-0.5 ${item.isUp ? 'text-emerald-500' : 'text-red-500'}`}>
                {item.isUp ? '▲' : '▼'} {item.trend}
              </span>
            </div>
            <p className="text-xl font-bold text-white mb-3 tracking-tight">{item.value}</p>
            <div className="h-10 w-full">
              <ResponsiveContainer height="100%" width="100%">
                <LineChart data={item.data.map(val => ({ value: val }))}>
                  <YAxis domain={['dataMin', 'dataMax']} hide/>
                  <Line dataKey="value" dot={false} isAnimationActive={false} stroke="#0ea5e9" strokeWidth={2} type="monotone"/>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
