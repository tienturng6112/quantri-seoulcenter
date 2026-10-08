"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { SlidersHorizontal } from 'lucide-react';

export function ModuleC() {
  // Dữ liệu cho biểu đồ Line Chart bên phải
  const chartData = [
    { date: '10-01', giaKh: 7, giaLead: 1.2, roas: 0.5 },
    { date: '10-02', giaKh: 3, giaLead: 0.8, roas: 1.8 },
    { date: '10-03', giaKh: 2.2, giaLead: 0.7, roas: 1.5 },
    { date: '10-04', giaKh: 1.8, giaLead: 1.1, roas: 3.4 },
    { date: '10-05', giaKh: 2, giaLead: 0.8, roas: 1.2 },
    { date: '10-06', giaKh: 2.1, giaLead: 0.6, roas: 0.9 },
    { date: '10-07', giaKh: 1.8, giaLead: 0.3, roas: 0.8 },
    { date: '10-08', giaKh: 0, giaLead: 0, roas: 0 },
  ];

  // Custom Tooltip cho biểu đồ
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] border border-slate-700 p-3 rounded-lg shadow-xl text-xs">
          <p className="text-white font-bold mb-2 border-b border-slate-700 pb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex justify-between gap-4 py-0.5">
              <span style={{ color: entry.color }}>● {entry.name}</span>
              <span className="font-bold text-white">{entry.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-2 gap-4 mb-10 border-t border-slate-800 pt-8 mt-8">
      
      {/* CỘT TRÁI: Phễu chi phí */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">C · PHỄU CHI PHÍ → DOANH THU</p>
            <h3 className="text-sm font-bold text-white">Phễu chi phí → doanh thu</h3>
          </div>
          <button className="text-slate-400 hover:text-white p-1 transition-colors">
            <SlidersHorizontal size={14}/>
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-3">
          {/* Dòng 1 */}
          <div className="relative">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">SL Data mới</span>
              <span className="text-white font-bold">264</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-slate-500 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 pl-2 border-l border-slate-700">Data mới → Lịch mới: 44,7%</p>

          {/* Dòng 2 */}
          <div className="relative">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">SL Inbox mới</span>
              <span className="text-white font-bold">1.075</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-slate-500 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

          {/* Dòng 3 */}
          <div className="relative">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">SL Lịch mới</span>
              <span className="text-white font-bold">118</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-slate-500 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 pl-2 border-l border-slate-700">Lịch mới → KH mới LM: 50%</p>

          {/* Dòng 4 */}
          <div className="relative">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">SL KH mới</span>
              <span className="text-white font-bold">87</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-slate-500 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>

          {/* Dòng 5 (Doanh thu) */}
          <div className="relative mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-blue-500 font-bold">Doanh thu</span>
              <span className="text-white font-bold">585,7 tr</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4 text-xs font-bold text-white">
          <p>ROAS: <span className="text-emerald-500">1,39</span></p>
          <p>%CR: <span className="text-blue-500">33%</span></p>
        </div>
      </div>

      {/* CỘT PHẢI: Biểu đồ */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5 flex flex-col">
        <div className="mb-6">
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">C · PHỄU CHI PHÍ → DOANH THU</p>
          <h3 className="text-sm font-bold text-white">ROAS · Giá Data mới · Giá khách theo ngày</h3>
        </div>
        
        <div className="flex-1 w-full min-h-[250px]">
          <ResponsiveContainer height="100%" width="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="#1e293b" vertical={false}/>
              <XAxis axisLine={false} dataKey="date" fontSize={10} stroke="#64748b" tickLine={false}/>
              
              {/* Cột Y Trái (Tiền) */}
              <YAxis axisLine={false} fontSize={10} stroke="#64748b" tickFormatter={(val) => val === 0 ? '0 đ' : `${val} tr`} tickLine={false} yAxisId="left" />
              
              {/* Cột Y Phải (Tỷ lệ/ROAS) */}
              <YAxis axisLine={false} fontSize={10} orientation="right" stroke="#64748b" tickLine={false} yAxisId="right"/>
              
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#334155', strokeWidth: 1, strokeDasharray: '4 4' }} />
              <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px', fontSize: '10px' }}/>
              
              <Line activeDot={{ r: 4 }} dataKey="giaKh" dot={false} name="GIÁ KH MỚI NGÀY" stroke="#a855f7" strokeWidth={2} type="monotone" yAxisId="left" />
              <Line activeDot={{ r: 4 }} dataKey="giaLead" dot={false} name="GIÁ LEAD MỚI" stroke="#eab308" strokeWidth={2} type="monotone" yAxisId="left" />
              <Line activeDot={{ r: 4 }} dataKey="roas" dot={false} name="ROAS" stroke="#2dd4bf" strokeWidth={2} type="monotone" yAxisId="right" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
    </div>
  );
}
