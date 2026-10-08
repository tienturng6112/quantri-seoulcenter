"use client";
import React from 'react';
import { 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { SlidersHorizontal } from 'lucide-react';

export function ModuleI() {
  // Dữ liệu giả lập dựa trên biểu đồ hình 23
  const chartData = [
    { date: '01/10', doanhThu: 55, roas: 0.2, slDataMoi: 25 },
    { date: '02/10', doanhThu: 100, roas: 0.5, slDataMoi: 65 },
    { date: '03/10', doanhThu: 90, roas: 0.3, slDataMoi: 50 },
    { date: '04/10', doanhThu: 210, roas: 1.2, slDataMoi: 25 },
    { date: '05/10', doanhThu: 70, roas: 0.8, slDataMoi: 45 },
    { date: '06/10', doanhThu: 15, roas: 0.1, slDataMoi: 15 },
    { date: '07/10', doanhThu: 25, roas: 0.2, slDataMoi: 25 },
    { date: '08/10', doanhThu: 0, roas: 0, slDataMoi: 0 },
  ];

  // Custom Tooltip cho biểu đồ để hiển thị đẹp mắt trên nền tối
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] border border-slate-700 p-3 rounded-lg shadow-xl text-xs z-50">
          <p className="text-white font-bold mb-2 border-b border-slate-700 pb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex justify-between gap-4 py-0.5">
              <span style={{ color: entry.color }}>
                {entry.name === 'DOANH THU' ? '■' : '●'} {entry.name}
              </span>
              <span className="font-bold text-white">
                {entry.value} {entry.name === 'DOANH THU' ? 'tr' : ''}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-10 border-t border-slate-800 pt-8 mt-8">
      {/* Header Module I */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">
            I · XU HƯỚNG THỜI GIAN (THEO NGÀY)
          </p>
          <h3 className="text-lg font-bold text-white">Xu hướng theo ngày</h3>
        </div>
        <button className="text-slate-400 hover:text-white p-1 transition-colors">
          <SlidersHorizontal size={14} />
        </button>
      </div>

      {/* Khu vực Biểu đồ */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 10, bottom: 10, left: -20 }}
            >
              <CartesianGrid stroke="#1e293b" vertical={false} strokeDasharray="3 3" />
              
              {/* Trục X hiển thị ngày */}
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                fontSize={10} 
                stroke="#64748b" 
              />
              
              {/* Trục Y bên trái cho Doanh thu */}
              <YAxis 
                yAxisId="left" 
                axisLine={false} 
                tickLine={false} 
                fontSize={10} 
                stroke="#64748b"
                tickFormatter={(val) => val === 0 ? '0 đ' : `${val} tr`}
              />
              
              {/* Trục Y bên phải cho ROAS và SL Data mới */}
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                axisLine={false} 
                tickLine={false} 
                fontSize={10} 
                stroke="#64748b" 
              />
              
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', opacity: 0.4 }} />
              
              <Legend 
                wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} 
                iconType="circle"
              />
              
              {/* Cột Doanh Thu */}
              <Bar 
                yAxisId="left" 
                dataKey="doanhThu" 
                name="DOANH THU" 
                fill="#3b82f6" 
                barSize={60} 
                radius={[2, 2, 0, 0]} 
                legendType="square"
              />
              
              {/* Đường ROAS */}
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="roas" 
                name="ROAS" 
                stroke="#a855f7" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 4 }} 
              />
              
              {/* Đường SL Data Mới */}
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="slDataMoi" 
                name="SL Data mới" 
                stroke="#2dd4bf" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 4 }} 
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
