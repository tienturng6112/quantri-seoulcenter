"use client";
import React from 'react';
import { BarChart, Bar, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { SlidersHorizontal } from 'lucide-react';

export function ModuleF() {
  const chartF1Data = [
    { name: 'PX', value: 74, color: '#3b82f6' }, { name: 'TONGHOP', value: 37, color: '#06b6d4' },
    { name: 'NAM+', value: 28, color: '#2dd4bf' }, { name: 'MUN', value: 15, color: '#a855f7' },
    { name: 'MUN+', value: 14, color: '#eab308' }, { name: 'MESO', value: 10, color: '#22c55e' },
    { name: 'CLG', value: 9, color: '#ec4899' }, { name: 'LONG', value: 3, color: '#f43f5e' },
    { name: 'NAM', value: 2, color: '#3b82f6' }, { name: 'RODL', value: 1, color: '#3b82f6' },
    { name: 'RO', value: 1, color: '#3b82f6' }, { name: 'TAMTRANG', value: 1, color: '#3b82f6' },
  ];

  const chartF2Data = [
    { name: 'PX', dtKm: 47.6, tyLe: 23 }, { name: 'NAM+', dtKm: 32.2, tyLe: 21.4 },
    { name: 'MUN+', dtKm: 30.2, tyLe: 78.6 }, { name: 'TONGHOP', dtKm: 26.6, tyLe: 29.7 },
    { name: 'MESO', dtKm: 10.5, tyLe: 60 }, { name: 'MUN', dtKm: 5.5, tyLe: 20 },
    { name: 'TAMTRANG', dtKm: 4.9, tyLe: 100 }, { name: 'LONG', dtKm: 1.1, tyLe: 33.3 },
  ];

  // DỮ LIỆU ĐÃ CẬP NHẬT THEO HÌNH 30 VÀ 31
  const tableFData = [
    { tag: "KHÔNG TAG", dataMoi: 67, giaData: "—", cr: "43,3%", slKm: 29, slKc: 959, slKh: 988, slLich: "1.666", dt: "382,2 tr", dtKm: "126,3 tr", dtKc: "255,9 tr", tbkMoi: "4,4 tr", tbkCu: "266.811 đ", roasLm: "—", roasMoi: "—", tyTrong: "25,4%" },
    { tag: "PX", dataMoi: 74, giaData: "1,6 tr", cr: "23%", slKm: 17, slKc: 33, slKh: 50, slLich: 93, dt: "65,2 tr", dtKm: "47,6 tr", dtKc: "17,6 tr", tbkMoi: "2,8 tr", tbkCu: "533.030 đ", roasLm: "0,32", roasMoi: "0,41", tyTrong: "28%" },
    { tag: "NAM+", dataMoi: 28, giaData: "891.281 đ", cr: "21,4%", slKm: 6, slKc: 25, slKh: 31, slLich: 53, dt: "39,8 tr", dtKm: "32,2 tr", dtKc: "7,6 tr", tbkMoi: "5,4 tr", tbkCu: "305.757 đ", roasLm: "0,92", roasMoi: "1,29", tyTrong: "10,6%" },
    { tag: "MUN+", dataMoi: 14, giaData: "1,1 tr", cr: "78,6%", slKm: 11, slKc: 25, slKh: 36, slLich: 52, dt: "33,1 tr", dtKm: "30,2 tr", dtKc: "2,9 tr", tbkMoi: "2,7 tr", tbkCu: "114.840 đ", roasLm: "1,53", roasMoi: "1,97", tyTrong: "5,3%" },
    { tag: "TONGHOP", dataMoi: 37, giaData: "96.406 đ", cr: "29,7%", slKm: 11, slKc: 47, slKh: 58, slLich: 91, dt: "30,7 tr", dtKm: "26,6 tr", dtKc: "4,1 tr", tbkMoi: "2,4 tr", tbkCu: "87.596 đ", roasLm: "4,91", roasMoi: "7,45", tyTrong: "14%" },
    { tag: "MESO", dataMoi: 10, giaData: "551.844 đ", cr: "60%", slKm: 6, slKc: 22, slKh: 28, slLich: 38, dt: "13,6 tr", dtKm: "10,5 tr", dtKc: "3,1 tr", tbkMoi: "1,7 tr", tbkCu: "141.227 đ", roasLm: "1,83", roasMoi: "1,9", tyTrong: "3,8%" },
    { tag: "MUN", dataMoi: 15, giaData: "698.188 đ", cr: "20%", slKm: 3, slKc: 10, slKh: 13, slLich: 25, dt: "11,6 tr", dtKm: "5,5 tr", dtKc: "6,1 tr", tbkMoi: "1,8 tr", tbkCu: "606.300 đ", roasLm: "0,53", roasMoi: "0,53", tyTrong: "5,7%" },
    { tag: "TAMTRANG", dataMoi: 1, giaData: "—", cr: "100%", slKm: 1, slKc: 3, slKh: 4, slLich: 6, dt: "5,8 tr", dtKm: "4,9 tr", dtKc: "880.000 đ", tbkMoi: "4,9 tr", tbkCu: "293.333 đ", roasLm: "—", roasMoi: "—", tyTrong: "0,4%" },
    { tag: "LONG", dataMoi: 3, giaData: "2,4 tr", cr: "33,3%", slKm: 1, slKc: 13, slKh: 14, slLich: 19, dt: "3,1 tr", dtKm: "1,1 tr", dtKc: "2 tr", tbkMoi: "1,1 tr", tbkCu: "153.846 đ", roasLm: "—", roasMoi: "0,16", tyTrong: "1,1%" },
    { tag: "CLG", dataMoi: 9, giaData: "—", cr: "22,2%", slKm: 2, slKc: 5, slKh: 7, slLich: 13, dt: "600.000 đ", dtKm: "600.000 đ", dtKc: "0 đ", tbkMoi: "300.000 đ", tbkCu: "0 đ", roasLm: "—", roasMoi: "—", tyTrong: "3,4%" },
    { tag: "NAM", dataMoi: 2, giaData: "632.040 đ", cr: "—", slKm: "—", slKc: 3, slKh: 3, slLich: 3, dt: "108.999 đ", dtKm: "—", dtKc: "108.999 đ", tbkMoi: "—", tbkCu: "36.333 đ", roasLm: "—", roasMoi: "—", tyTrong: "0,8%" },
    { tag: "RODL", dataMoi: 1, giaData: "853.998 đ", cr: "—", slKm: "—", slKc: 1, slKh: 1, slLich: 4, dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "0 đ", roasLm: "—", roasMoi: "—", tyTrong: "0,4%" },
    { tag: "RO", dataMoi: 1, giaData: "—", cr: "—", slKm: "—", slKc: 4, slKh: 4, slLich: 5, dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "0 đ", roasLm: "—", roasMoi: "—", tyTrong: "0,4%" },
    { tag: "BAP", dataMoi: 1, giaData: "—", cr: "—", slKm: "—", slKc: "—", slKh: "—", slLich: 1, dt: "—", dtKm: "—", dtKc: "—", tbkMoi: "—", tbkCu: "—", roasLm: "—", roasMoi: "—", tyTrong: "0,4%" },
    { tag: "BEO", dataMoi: 1, giaData: "—", cr: "—", slKm: "—", slKc: 1, slKh: 1, slLich: 4, dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "0 đ", roasLm: "—", roasMoi: "—", tyTrong: "0,4%" },
    { tag: "NAMDL", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: 1, slKh: 1, slLich: 2, dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "0 đ", roasLm: "—", roasMoi: "—", tyTrong: "0%" },
    { tag: "TREHOADL", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: 1, slKh: 1, slLich: 2, dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "0 đ", roasLm: "—", roasMoi: "—", tyTrong: "0%" },
    { tag: "MESODL", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: "—", slKh: "—", slLich: "—", dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "—", roasLm: "—", roasMoi: "—", tyTrong: "0%" },
    { tag: "CSD", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: "—", slKh: "—", slLich: 3, dt: "—", dtKm: "—", dtKc: "—", tbkMoi: "—", tbkCu: "—", roasLm: "—", roasMoi: "—", tyTrong: "0%" },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] border border-slate-700 p-3 rounded shadow-xl text-xs z-50">
          <p className="text-white font-bold mb-2 border-b border-slate-700 pb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex justify-between gap-4 py-0.5">
              <span style={{ color: entry.color }}>● {entry.name || 'Giá trị'}</span>
              <span className="font-bold text-white">{entry.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="mb-6 border-t border-slate-800 pt-8 mt-8">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">F · GÓC NHÌN PHỄU (TAG_MKT)</p>
            <h3 className="text-lg font-bold text-white">Phễu theo TAG_MKT</h3>
          </div>
          <button className="text-slate-400 hover:text-white p-1 transition-colors">
            <SlidersHorizontal size={14}/>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
            <h4 className="text-xs font-bold text-white mb-4">SL Data mới theo TAG</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer height="100%" width="100%">
                <BarChart layout="vertical" data={chartF1Data} margin={{ top: 10, right: 30, left: 10, bottom: -10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false}/>
                  <XAxis type="number" fontSize={10} stroke="#64748b" tickLine={false} axisLine={false}/>
                  <YAxis type="category" dataKey="name" fontSize={9} stroke="#cbd5e1" fontWeight="bold" tickLine={false} axisLine={false} width={70}/>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', opacity: 0.4 }} />
                  <Bar dataKey="value" barSize={8} radius={[0, 2, 2, 0]}>
                    {chartF1Data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
            <h4 className="text-xs font-bold text-white mb-1">Doanh thu KM & Tỷ lệ chốt theo TAG</h4>
            <p className="text-[9px] text-slate-500 mb-4">top 14 TAG theo doanh thu khách mới</p>
            <div className="w-full h-[280px]">
              <ResponsiveContainer height="100%" width="100%">
                <ComposedChart data={chartF2Data} margin={{ top: 20, right: 10, bottom: 20, left: -20 }}>
                  <CartesianGrid stroke="#1e293b" vertical={false}/>
                  <XAxis dataKey="name" fontSize={8} stroke="#64748b" tickLine={false} axisLine={false} angle={-35} textAnchor="end"/>
                  <YAxis yAxisId="left" fontSize={10} stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(val) => `${val} tr`} />
                  <YAxis yAxisId="right" orientation="right" fontSize={10} stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', opacity: 0.4 }} />
                  <Bar yAxisId="left" dataKey="dtKm" name="Doanh thu KM" fill="#3b82f6" barSize={20} radius={[2, 2, 0, 0]}/>
                  <Line yAxisId="right" type="monotone" dataKey="tyLe" name="Tỷ lệ chốt" stroke="#2dd4bf" strokeWidth={2} dot={false} activeDot={{ r: 4 }}/>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bảng F ĐÃ CẬP NHẬT */}
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <h4 className="text-xs font-bold text-white mb-4">Doanh thu · %CR · Tỷ trọng theo TAG</h4>
          <div className="w-full overflow-x-auto custom-scrollbar">
            <table className="w-full text-xs text-right whitespace-nowrap">
              <thead className="text-[9px] text-slate-500 uppercase border-b border-slate-800 bg-[#0f1523]">
                <tr>
                  <th className="py-3 px-4 text-left font-normal">TAG</th>
                  <th className="py-3 px-2 font-normal">DATA MỚI</th>
                  <th className="py-3 px-2 font-normal">GIÁ DATA MỚI</th>
                  <th className="py-3 px-2 font-normal">CR %</th>
                  <th className="py-3 px-2 font-normal">SL KM</th>
                  <th className="py-3 px-2 font-normal">SL KC</th>
                  <th className="py-3 px-2 font-normal">SL KH</th>
                  <th className="py-3 px-2 font-normal">SL LỊCH</th>
                  <th className="py-3 px-2 font-normal">DOANH THU</th>
                  <th className="py-3 px-2 font-normal">DT KM</th>
                  <th className="py-3 px-2 font-normal">DT KC</th>
                  <th className="py-3 px-2 font-normal">TBK MỚI</th>
                  <th className="py-3 px-2 font-normal">TBK CŨ</th>
                  <th className="py-3 px-2 font-normal">ROAS LM</th>
                  <th className="py-3 px-2 font-normal">ROAS MỚI</th>
                  <th className="py-3 px-2 font-normal">TỶ TRỌNG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 text-slate-300">
                {tableFData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4 text-left font-bold text-white">{row.tag}</td>
                    <td className="py-3 px-2">{row.dataMoi}</td>
                    <td className="py-3 px-2 text-slate-400">{row.giaData}</td>
                    <td className="py-3 px-2">{row.cr}</td>
                    <td className="py-3 px-2 text-slate-400">{row.slKm}</td>
                    <td className="py-3 px-2 text-slate-400">{row.slKc}</td>
                    <td className="py-3 px-2 text-slate-400">{row.slKh}</td>
                    <td className="py-3 px-2 text-slate-400">{row.slLich}</td>
                    <td className="py-3 px-2 font-bold text-white">{row.dt}</td>
                    <td className="py-3 px-2 text-slate-400">{row.dtKm}</td>
                    <td className="py-3 px-2 text-slate-400">{row.dtKc}</td>
                    <td className="py-3 px-2 text-slate-400">{row.tbkMoi}</td>
                    <td className="py-3 px-2 text-slate-400">{row.tbkCu}</td>
                    <td className="py-3 px-2">{row.roasLm}</td>
                    <td className="py-3 px-2">{row.roasMoi}</td>
                    <td className="py-3 px-2 font-bold text-white">{row.tyTrong}</td>
                  </tr>
                ))}
                {/* Dòng Tổng cộng */}
                <tr className="bg-[#151e2f] border-t border-slate-700 font-bold text-white">
                  <td className="py-3 px-4 text-left">Tổng cộng</td>
                  <td className="py-3 px-2">264</td>
                  <td className="py-3 px-2">701.103 đ</td>
                  <td className="py-3 px-2">33%</td>
                  <td className="py-3 px-2">87</td>
                  <td className="py-3 px-2">1.153</td>
                  <td className="py-3 px-2">1.240</td>
                  <td className="py-3 px-2">2.080</td>
                  <td className="py-3 px-2">585,7 tr</td>
                  <td className="py-3 px-2">285,4 tr</td>
                  <td className="py-3 px-2">300,3 tr</td>
                  <td className="py-3 px-2">3,3 tr</td>
                  <td className="py-3 px-2">260.410 đ</td>
                  <td className="py-3 px-2">1,09</td>
                  <td className="py-3 px-2">1,54</td>
                  <td className="py-3 px-2">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODULE G */}
      <div className="mb-10 border-t border-slate-800 pt-8 mt-8">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">G · GÓC NHÌN PHÒNG BAN</p>
            <h3 className="text-lg font-bold text-white">Hiệu suất theo nhóm CS</h3>
          </div>
          <button className="text-slate-400 hover:text-white p-1 transition-colors">
            <SlidersHorizontal size={14}/>
          </button>
        </div>
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <p className="text-red-500 text-xs font-medium font-mono leading-relaxed bg-red-950/20 p-4 rounded border border-red-900/50">
            Power BI DAX lỗi: The query referenced a relationship between '&lt;oii&gt;FACT_APT&lt;/oii&gt;[&lt;oii&gt;ID_NV_ĐẶT_LỊCH(FN)&lt;/oii&gt;]' and '&lt;oii&gt;DIM_DS_NS_TTKD_ALL_TIME&lt;/oii&gt;[&lt;oii&gt;Mã nhân viên&lt;/oii&gt;]', which depends on a column that is not in a valid state.
          </p>
        </div>
      </div>
    </>
  );
}