"use client";
import React from 'react';
import { BarChart, Bar, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SlidersHorizontal, ChevronRight } from 'lucide-react';

export function ModuleE() {
  // Dữ liệu giả lập cho 4 biểu đồ (giữ nguyên)
  const chart1Data = [
    { name: 'FACEBOOK ADS', value: 600, color: '#3b82f6' }, { name: 'TIKTOK', value: 80, color: '#f59e0b' },
    { name: 'GOOGLE', value: 120, color: '#3b82f6' }, { name: 'OFFLINE', value: 250, color: '#3b82f6' },
    { name: 'CHI NHÁNH', value: 70, color: '#3b82f6' }, { name: 'NHÂN VIÊN KD', value: 40, color: '#3b82f6' },
  ];

  const chart2Data = [
    { name: 'FACEBOOK ADS', chiPhi: 70, doanhThu: 270, roas: 2.1 }, { name: 'CHI NHÁNH', chiPhi: 20, doanhThu: 120, roas: 1.5 },
    { name: 'GOOGLE', chiPhi: 30, doanhThu: 84, roas: 0.8 }, { name: 'CỘNG TÁC VIÊN', chiPhi: 10, doanhThu: 29, roas: 0.5 },
  ];

  const chart3Data = [
    { name: 'FACEBOOK ADS', gia: 600000, cr: 35 }, { name: 'TIKTOK', gia: 1700000, cr: 10 },
    { name: 'GOOGLE', gia: 1200000, cr: 22 }, { name: 'OFFLINE', gia: 0, cr: 85 },
  ];

  const chart4Data = [
    { name: 'FACEBOOK ADS', khachMoi: 42 }, { name: 'CHI NHÁNH', khachMoi: 17 },
    { name: 'CỘNG TÁC VIÊN', khachMoi: 10 }, { name: 'GOOGLE', khachMoi: 5 },
  ];

  // ĐÃ CẬP NHẬT: Dữ liệu Bảng Module E theo đúng 3 ảnh mới
  const tableData = [
    { name: "FACEBOOK ADS", count: "(5)", dataMoi: 122, giaData: "673.930 đ", cr: "35,2%", slKm: 43, slKc: 547, slKh: 590, slLich: 342, dt: "269,4 tr", dtKm: "122,3 tr", dtKc: "147,1 tr", tbkMoi: "2,8 tr", tbkCu: "268.935 đ", roasLm: "1,03", roasMoi: "1,49" },
    { name: "CHI NHÁNH", count: "(3)", dataMoi: 20, giaData: "—", cr: "85%", slKm: 17, slKc: 213, slKh: 230, slLich: 168, dt: "120,4 tr", dtKm: "66,6 tr", dtKc: "53,8 tr", tbkMoi: "3,9 tr", tbkCu: "252.470 đ", roasLm: "—", roasMoi: "—" },
    { name: "GOOGLE", count: "(4)", dataMoi: 22, giaData: "—", cr: "22,7%", slKm: 5, slKc: 117, slKh: 122, slLich: 79, dt: "84,3 tr", dtKm: "55,2 tr", dtKc: "29,1 tr", tbkMoi: "11 tr", tbkCu: "249.017 đ", roasLm: "—", roasMoi: "—" },
    { name: "CỘNG TÁC VIÊN", count: "(1)", dataMoi: "—", giaData: "—", cr: "—", slKm: 7, slKc: 32, slKh: 39, slLich: 41, dt: "29,3 tr", dtKm: "14,1 tr", dtKc: "15,1 tr", tbkMoi: "2 tr", tbkCu: "473.062 đ", roasLm: "—", roasMoi: "—" },
    { name: "NHÂN VIÊN KINH DOANH", count: "(2)", dataMoi: 13, giaData: "—", cr: "38,5%", slKm: 5, slKc: 59, slKh: 64, slLich: 42, dt: "22,8 tr", dtKm: "13,2 tr", dtKc: "9,6 tr", tbkMoi: "2,6 tr", tbkCu: "162.661 đ", roasLm: "—", roasMoi: "—" },
    { name: "TỔNG ĐÀI", count: "(2)", dataMoi: 5, giaData: "—", cr: "60%", slKm: 3, slKc: 31, slKh: 34, slLich: 26, dt: "15,6 tr", dtKm: "8,3 tr", dtKc: "7,3 tr", tbkMoi: "2,8 tr", tbkCu: "234.646 đ", roasLm: "—", roasMoi: "—" },
    { name: "(không xác định)", count: "(1)", dataMoi: "—", giaData: "—", cr: "—", slKm: 1, slKc: 45, slKh: 46, slLich: "1.330", dt: "14 tr", dtKm: "0 đ", dtKc: "14 tr", tbkMoi: "0 đ", tbkCu: "310.355 đ", roasLm: "—", roasMoi: "—" },
    { name: "OFFLINE", count: "(1)", dataMoi: 21, giaData: "—", cr: "9,5%", slKm: 2, slKc: 29, slKh: 31, slLich: 4, dt: "7,8 tr", dtKm: "0 đ", dtKc: "7,8 tr", tbkMoi: "0 đ", tbkCu: "267.517 đ", roasLm: "—", roasMoi: "—" },
    { name: "ZALO", count: "(1)", dataMoi: 2, giaData: "—", cr: "100%", slKm: 2, slKc: 11, slKh: 13, slLich: 7, dt: "7,2 tr", dtKm: "1,2 tr", dtKc: "6 tr", tbkMoi: "600.000 đ", tbkCu: "546.364 đ", roasLm: "—", roasMoi: "—" },
    { name: "TIKTOK", count: "(4)", dataMoi: 59, giaData: "1,7 tr", cr: "3,4%", slKm: 2, slKc: 14, slKh: 16, slLich: 25, dt: "6,6 tr", dtKm: "4,4 tr", dtKc: "2,2 tr", tbkMoi: "2,2 tr", tbkCu: "157.429 đ", roasLm: "—", roasMoi: "0,04" },
    { name: "WEB", count: "(4)", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: 33, slKh: 33, slLich: 7, dt: "4,7 tr", dtKm: "—", dtKc: "4,7 tr", tbkMoi: "—", tbkCu: "142.061 đ", roasLm: "—", roasMoi: "—" },
    { name: "CHƯA XÁC ĐỊNH", count: "(2)", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: 12, slKh: 12, slLich: 9, dt: "2,7 tr", dtKm: "—", dtKc: "2,7 tr", tbkMoi: "—", tbkCu: "229.000 đ", roasLm: "—", roasMoi: "—" },
    { name: "APP MOBILE", count: "(1)", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: 5, slKh: 5, slLich: "—", dt: "851.000 đ", dtKm: "—", dtKc: "851.000 đ", tbkMoi: "—", tbkCu: "170.200 đ", roasLm: "—", roasMoi: "—" },
    { name: "INSTAGRAM", count: "(1)", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: 1, slKh: 1, slLich: "—", dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "0 đ", roasLm: "—", roasMoi: "—" },
    { name: "CÔNG CỤ", count: "(1)", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: 1, slKh: 1, slLich: "—", dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "0 đ", roasLm: "—", roasMoi: "—" },
    { name: "PARTNERSHIP", count: "(1)", dataMoi: "—", giaData: "—", cr: "—", slKm: "—", slKc: 3, slKh: 3, slLich: "—", dt: "0 đ", dtKm: "—", dtKc: "0 đ", tbkMoi: "—", tbkCu: "0 đ", roasLm: "—", roasMoi: "—" },
  ];

  // Custom Tooltip chung
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] border border-slate-700 p-3 rounded shadow-xl text-xs z-50">
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
    <div className="mb-10 border-t border-slate-800 pt-8 mt-8">
      {/* Header Module E */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">E · GÓC NHÌN NGUỒN-KÊNH → NGUỒN DATA MỚI</p>
          <h3 className="text-lg font-bold text-white">Nguồn-kênh và nguồn Data mới</h3>
        </div>
        <button className="text-slate-400 hover:text-white p-1 transition-colors">
          <SlidersHorizontal size={14}/>
        </button>
      </div>

      {/* Lưới 4 Biểu đồ */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Biểu đồ 1 */}
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <h4 className="text-xs font-bold text-white mb-1">SL Data mới theo Nguồn-Kênh</h4>
          <p className="text-[9px] text-slate-500 mb-4">top 12 nguồn - kênh theo SL Data mới</p>
          <div className="w-full h-[200px]">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart data={chart1Data} margin={{ top: 20, right: 10, bottom: 20, left: -20 }}>
                <CartesianGrid stroke="#1e293b" vertical={false}/>
                <XAxis dataKey="name" fontSize={8} stroke="#64748b" tickLine={false} axisLine={false} angle={-35} textAnchor="end"/>
                <YAxis fontSize={10} stroke="#64748b" tickLine={false} axisLine={false}/>
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', opacity: 0.4 }} />
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {chart1Data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Biểu đồ 2 */}
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <h4 className="text-xs font-bold text-white mb-1">Chi phí · Doanh thu · ROAS theo kênh</h4>
          <p className="text-[9px] text-slate-500 mb-4">top 12 nguồn-kênh theo doanh thu</p>
          <div className="w-full h-[200px]">
            <ResponsiveContainer height="100%" width="100%">
              <ComposedChart data={chart2Data} margin={{ top: 20, right: 10, bottom: 20, left: -20 }}>
                <CartesianGrid stroke="#1e293b" vertical={false}/>
                <XAxis dataKey="name" fontSize={8} stroke="#64748b" tickLine={false} axisLine={false} angle={-35} textAnchor="end"/>
                <YAxis yAxisId="left" fontSize={10} stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(val) => `${val} tr`} />
                <YAxis yAxisId="right" orientation="right" fontSize={10} stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', opacity: 0.4 }} />
                <Bar yAxisId="left" dataKey="chiPhi" name="Chi phí" fill="#f59e0b" barSize={10}/>
                <Bar yAxisId="left" dataKey="doanhThu" name="Doanh thu" fill="#3b82f6" barSize={15} radius={[2, 2, 0, 0]}/>
                <Line yAxisId="right" type="monotone" dataKey="roas" name="ROAS" stroke="#10b981" strokeWidth={2} dot={false}/>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Biểu đồ 3 */}
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <h4 className="text-xs font-bold text-white mb-1">Giá Data mới & %CR theo kênh</h4>
          <p className="text-[9px] text-slate-500 mb-4">top 12 nguồn - kênh theo SL Data mới • cột = giá 1 data (thấp = tốt) • đường = %CR ra KH mới (cao = tốt)</p>
          <div className="w-full h-[200px]">
            <ResponsiveContainer height="100%" width="100%">
              <ComposedChart data={chart3Data} margin={{ top: 20, right: 10, bottom: 20, left: -10 }}>
                <CartesianGrid stroke="#1e293b" vertical={false}/>
                <XAxis dataKey="name" fontSize={8} stroke="#64748b" tickLine={false} axisLine={false} angle={-35} textAnchor="end"/>
                <YAxis yAxisId="left" fontSize={10} stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(val) => val >= 1000000 ? `${val/1000000} tr` : val} />
                <YAxis yAxisId="right" orientation="right" fontSize={10} stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', opacity: 0.4 }} />
                <Bar yAxisId="left" dataKey="gia" name="Giá Data mới" fill="#a855f7" barSize={20} radius={[2, 2, 0, 0]}/>
                <Line yAxisId="right" type="monotone" dataKey="cr" name="%CR" stroke="#2dd4bf" strokeWidth={2} activeDot={{ r: 4 }}/>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Biểu đồ 4 */}
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <h4 className="text-xs font-bold text-white mb-1">Khách mới & Chi phí/khách mới theo kênh</h4>
          <p className="text-[9px] text-slate-500 mb-4">top 12 nguồn - kênh theo số khách mới (CP/khách = chi phí ÷ khách mới)</p>
          <div className="w-full h-[200px]">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart data={chart4Data} margin={{ top: 20, right: 10, bottom: 20, left: -20 }}>
                <CartesianGrid stroke="#1e293b" vertical={false}/>
                <XAxis dataKey="name" fontSize={8} stroke="#64748b" tickLine={false} axisLine={false} angle={-35} textAnchor="end"/>
                <YAxis fontSize={10} stroke="#64748b" tickLine={false} axisLine={false}/>
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', opacity: 0.4 }} />
                <Bar dataKey="khachMoi" name="Khách mới" fill="#10b981" barSize={25} radius={[2, 2, 0, 0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* BẢNG DỮ LIỆU ACCORDION (ĐÃ CẬP NHẬT) */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
        <h4 className="text-xs font-bold text-white mb-4">Nguồn theo Nguồn Data mới</h4>
        
        <div className="w-full overflow-x-auto custom-scrollbar">
          <table className="w-full text-xs text-right whitespace-nowrap">
            <thead className="text-[9px] text-slate-500 uppercase border-b border-slate-800 bg-[#0f1523]">
              <tr>
                <th className="py-3 px-4 text-left font-normal">NGUỒN DATA MỚI</th>
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
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-slate-300">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors cursor-pointer">
                  <td className="py-3 px-4 text-left font-bold text-white flex items-center gap-2">
                    <ChevronRight className="text-slate-500" size={14}/>
                    {row.name} <span className="text-slate-500 text-[10px] font-normal">{row.count}</span>
                  </td>
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
                </tr>
              ))}
              {/* Dòng Tổng cộng ĐÃ CẬP NHẬT */}
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
