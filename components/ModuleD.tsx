"use client";
import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export function ModuleD() {
  const tableD1 = [
    { name: "BÌNH THẠNH", dt: "106,6 tr", dtkm: "55 tr", data: "38", kh: "179", km: "8", roasMoi: "1,42", roasLm: "0,35", tbk: "6,9 tr", cr: "21,1%" },
    { name: "THỦ ĐỨC", dt: "105,7 tr", dtkm: "41,7 tr", data: "35", kh: "191", km: "10", roasMoi: "0,95", roasLm: "0,77", tbk: "4,2 tr", cr: "28,6%" },
    { name: "DĨ AN", dt: "80 tr", dtkm: "27,6 tr", data: "35", kh: "185", km: "16", roasMoi: "0,93", roasLm: "0,54", tbk: "1,7 tr", cr: "45,7%" },
    { name: "LONG KHÁNH", dt: "78,1 tr", dtkm: "52,8 tr", data: "16", kh: "120", km: "10", roasMoi: "2,55", roasLm: "2,26", tbk: "5,3 tr", cr: "62,5%" },
    { name: "TÂY NINH", dt: "73,5 tr", dtkm: "47 tr", data: "30", kh: "134", km: "15", roasMoi: "5,77", roasLm: "5,42", tbk: "3,1 tr", cr: "50%" },
    { name: "BÀ RỊA", dt: "58,9 tr", dtkm: "36,5 tr", data: "38", kh: "106", km: "11", roasMoi: "2,71", roasLm: "2,2", tbk: "3,3 tr", cr: "28,9%" },
    { name: "BÌNH PHƯỚC", dt: "37,8 tr", dtkm: "4,9 tr", data: "22", kh: "94", km: "5", roasMoi: "0,43", roasLm: "0,28", tbk: "978.400 đ", cr: "22,7%" },
    { name: "TÂN UYÊN", dt: "27,6 tr", dtkm: "15,4 tr", data: "31", kh: "103", km: "8", roasMoi: "0,55", roasLm: "0,39", tbk: "1,9 tr", cr: "25,8%" },
    { name: "VŨNG TÀU", dt: "17,5 tr", dtkm: "4,6 tr", data: "19", kh: "129", km: "4", roasMoi: "0,44", roasLm: "0,4", tbk: "1,1 tr", cr: "21,1%" },
  ];

  const chartD1 = [
    { name: "BÌNH THẠNH", doanhThu: 106.6, roas: 1.42 },
    { name: "THỦ ĐỨC", doanhThu: 105.7, roas: 0.95 },
    { name: "DĨ AN", doanhThu: 80, roas: 0.93 },
    { name: "LONG KHÁNH", doanhThu: 78.1, roas: 2.55 },
    { name: "TÂY NINH", doanhThu: 73.5, roas: 5.77 },
    { name: "BÀ RỊA", doanhThu: 58.9, roas: 2.71 },
    { name: "BÌNH PHƯỚC", doanhThu: 37.8, roas: 0.43 },
    { name: "TÂN UYÊN", doanhThu: 27.6, roas: 0.55 },
    { name: "VŨNG TÀU", doanhThu: 17.5, roas: 0.44 },
  ];

  // Dữ liệu bảng D2 cập nhật mới nhất (đầy đủ các Vùng/Chi nhánh)
  const tableD2 = [
    { isGroup: true, name: "TMV HCM - DNB", count: "(9)", fKpi: 121, fThuc: 120, fPer: "99,2%", fDiff: "+93", gKpi: 21, gThuc: 22, gPer: "104,8%", gDiff: "+17", tKpi: 21, tThuc: 59, tPer: "281%", tDiff: "+54" },
    { name: "BÀ RỊA", fKpi: 18, fThuc: 26, fPer: "144,4%", fDiff: "+22", gKpi: 2, gThuc: 0, gPer: "0%", gDiff: "+-0", tKpi: 2, tThuc: 4, tPer: "200%", tDiff: "+4" },
    { name: "BÌNH PHƯỚC", fKpi: 12, fThuc: 12, fPer: "100%", fDiff: "+9", gKpi: 1, gThuc: 2, gPer: "200%", gDiff: "+2", tKpi: 1, tThuc: 4, tPer: "400%", tDiff: "+4" },
    { name: "BÌNH THẠNH", fKpi: 13, fThuc: 4, fPer: "30,8%", fDiff: "+1", gKpi: 3, gThuc: 4, gPer: "133,3%", gDiff: "+3", tKpi: 3, tThuc: 9, tPer: "300%", tDiff: "+8" },
    { name: "DĨ AN", fKpi: 18, fThuc: 14, fPer: "77,8%", fDiff: "+10", gKpi: 2, gThuc: 3, gPer: "150%", gDiff: "+3", tKpi: 3, tThuc: 9, tPer: "300%", tDiff: "+8" },
    { name: "LONG KHÁNH", fKpi: 11, fThuc: 11, fPer: "100%", fDiff: "+9", gKpi: 1, gThuc: 0, gPer: "0%", gDiff: "+-0", tKpi: 1, tThuc: 2, tPer: "200%", tDiff: "+2" },
    { name: "TÂN UYÊN", fKpi: 18, fThuc: 22, fPer: "122,2%", fDiff: "+18", gKpi: 1, gThuc: 1, gPer: "100%", gDiff: "+1", tKpi: 2, tThuc: 6, tPer: "300%", tDiff: "+6" },
    { name: "TÂY NINH", fKpi: 6, fThuc: 10, fPer: "166,7%", fDiff: "+9", gKpi: 1, gThuc: 5, gPer: "500%", gDiff: "+5", tKpi: 2, tThuc: 8, tPer: "400%", tDiff: "+8" },
    { name: "THỦ ĐỨC", fKpi: 12, fThuc: 10, fPer: "83,3%", fDiff: "+7", gKpi: 7, gThuc: 6, gPer: "85,7%", gDiff: "+4", tKpi: 5, tThuc: 12, tPer: "240%", tDiff: "+11" },
    { name: "VŨNG TÀU", fKpi: 13, fThuc: 11, fPer: "84,6%", fDiff: "+8", gKpi: 3, gThuc: 1, gPer: "33,3%", gDiff: "+0", tKpi: 2, tThuc: 5, tPer: "250%", tDiff: "+5" },
  ];

  // Hàm tạo màu nền cho cột % tùy theo giá trị
  const getPercentColor = (percentStr: string) => {
    const num = parseFloat(percentStr.replace('%', '').replace(',', '.'));
    if (num >= 100) return 'bg-emerald-800/40 text-emerald-400 font-bold'; // Đạt chỉ tiêu (Màu xanh lá sáng)
    if (num > 0 && num < 100) return 'bg-[#102a27] text-emerald-500 font-bold'; // Chưa đạt (Màu xanh rêu đậm)
    return 'bg-orange-900/30 text-orange-400 font-bold'; // 0% (Màu nâu/cam)
  };

  const CustomTooltipD1 = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] border border-slate-700 p-3 rounded shadow-xl text-xs z-50">
          <p className="text-white font-bold mb-2 border-b border-slate-700 pb-1">{label}</p>
          <div className="flex justify-between gap-4 py-0.5">
            <span className="text-blue-400">● Doanh thu</span>
            <span className="font-bold text-white">{payload[0]?.value} tr</span>
          </div>
          <div className="flex justify-between gap-4 py-0.5">
            <span className="text-emerald-400">● ROAS Mới</span>
            <span className="font-bold text-white">{payload[1]?.value}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-10">
      
      {/* KHỐI D1 */}
      <div className="grid grid-cols-5 gap-4 mb-4 border-t border-slate-800 pt-8 mt-8">
        
        {/* Bảng D1 */}
        <div className="col-span-3 bg-[#111827] border border-slate-800 rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">D · GÓC NHÌN VÙNG → CHI NHÁNH</p>
              <h3 className="text-sm font-bold text-white">Doanh thu theo khu vực / chi nhánh</h3>
            </div>
          </div>
          
          <div className="flex-1 overflow-auto custom-scrollbar">
            <table className="w-full text-xs text-right whitespace-nowrap">
              <thead className="text-[10px] text-slate-500 border-b border-slate-800 uppercase bg-[#0f1523]">
                <tr>
                  <th className="py-2 px-2 text-left font-normal">Vùng / Chi nhánh</th>
                  <th className="py-2 px-2 font-normal">Doanh thu</th>
                  <th className="py-2 px-2 font-normal">DT KM</th>
                  <th className="py-2 px-2 font-normal">SL Data mới</th>
                  <th className="py-2 px-2 font-normal">SL KH</th>
                  <th className="py-2 px-2 font-normal">SL KM</th>
                  <th className="py-2 px-2 font-normal">ROAS Mới</th>
                  <th className="py-2 px-2 font-normal">ROAS LM</th>
                  <th className="py-2 px-2 font-normal">TBK mới</th>
                  <th className="py-2 px-2 font-normal">%CR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {/* Dòng Header Vùng */}
                <tr className="bg-blue-900/10 text-white font-bold hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <td className="py-2 px-2 text-left flex items-center gap-1">
                    <ChevronDown className="text-slate-400" size={14}/>
                    TMV HCM - DNB <span className="text-[10px] text-slate-500 font-normal">(9 CN)</span>
                  </td>
                  <td className="py-2 px-2">585,7 tr</td>
                  <td className="py-2 px-2">285,4 tr</td>
                  <td className="py-2 px-2">264</td>
                  <td className="py-2 px-2">1.241</td>
                  <td className="py-2 px-2">87</td>
                  <td className="py-2 px-2 text-emerald-400">1,39</td>
                  <td className="py-2 px-2 text-emerald-400">0,99</td>
                  <td className="py-2 px-2">3,3 tr</td>
                  <td className="py-2 px-2">33%</td>
                </tr>
                
                {/* Các dòng Chi nhánh con */}
                {tableD1.map((row, idx) => (
                  <tr key={idx} className="text-slate-400 hover:bg-slate-800/30 transition-colors">
                    <td className="py-2 px-2 pl-8 text-left uppercase">{row.name}</td>
                    <td className="py-2 px-2 text-white font-medium">{row.dt}</td>
                    <td className="py-2 px-2">{row.dtkm}</td>
                    <td className="py-2 px-2 text-[#94a3b8]">{row.data}</td>
                    <td className="py-2 px-2 text-[#94a3b8]">{row.kh}</td>
                    <td className="py-2 px-2 text-[#94a3b8]">{row.km}</td>
                    <td className="py-2 px-2 font-medium text-[#f8fafc]">{row.roasMoi}</td>
                    <td className="py-2 px-2 font-medium text-[#f8fafc]">{row.roasLm}</td>
                    <td className="py-2 px-2">{row.tbk}</td>
                    <td className="py-2 px-2 text-[#e2e8f0]">{row.cr}</td>
                  </tr>
                ))}
                
                {/* Dòng Tổng cộng */}
                <tr className="bg-[#151e2f] border-t border-slate-700 font-bold text-white">
                  <td className="py-3 px-2 text-left">Tổng cộng</td>
                  <td className="py-3 px-2">585,7 tr</td>
                  <td className="py-3 px-2">285,4 tr</td>
                  <td className="py-3 px-2">264</td>
                  <td className="py-3 px-2">1.241</td>
                  <td className="py-3 px-2">87</td>
                  <td className="py-3 px-2 text-emerald-400">1,39</td>
                  <td className="py-3 px-2 text-emerald-400">0,99</td>
                  <td className="py-3 px-2">3,3 tr</td>
                  <td className="py-3 px-2">33%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Biểu đồ D1 */}
        <div className="col-span-2 bg-[#111827] border border-slate-800 rounded-lg p-4 flex flex-col">
          <div className="flex justify-end mb-4">
            <button className="text-slate-400 hover:text-white p-1 transition-colors">
              <SlidersHorizontal size={14}/>
            </button>
          </div>
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer height="100%" width="100%">
              <ComposedChart data={chartD1} margin={{ top: 10, right: 30, bottom: 20, left: -20 }}>
                <CartesianGrid stroke="#1e293b" vertical={false}/>
                <XAxis dataKey="name" fontSize={8} fill="#64748b" tickLine={false} axisLine={false} angle={-35} textAnchor="end" />
                <YAxis yAxisId="left" fontSize={10} fill="#64748b" tickLine={false} axisLine={false} tickFormatter={(val) => val === 0 ? '0 đ' : `${val} tr`} />
                <YAxis yAxisId="right" orientation="right" fontSize={10} fill="#64748b" tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltipD1 />} cursor={{ fill: '#1e293b', opacity: 0.4 }} />
                <Bar yAxisId="left" dataKey="doanhThu" fill="#3b82f6" barSize={20} radius={[2, 2, 0, 0]}/>
                <Line yAxisId="right" type="monotone" dataKey="roas" stroke="#10b981" strokeWidth={2} dot={false} activeDot={{ r: 4 }}/>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* KHỐI D2 */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">D2 · BẢNG THEO DÕI TRỌNG ĐIỂM THEO VÙNG</p>
            <h3 className="text-sm font-bold text-white">Trọng điểm theo vùng (target vs thực đạt)</h3>
          </div>
          <div className="flex bg-[#1e293b] rounded-md p-0.5 text-[11px] font-medium border border-slate-700">
            <button className="text-slate-400 px-4 py-1.5 rounded hover:text-white transition-colors">Vận Hành</button>
            <button className="bg-slate-700 text-white px-4 py-1.5 rounded shadow-sm">MKT</button>
          </div>
        </div>
        
        <p className="text-[10px] text-slate-500 mb-4">
          Tiến độ đúng = 22,6% • +/- TĐĐ = thực đạt - KPI × tiến độ • TikTok: KPI riêng từ 09/2026 (trước đó dùng "data khác")
        </p>

        <div className="w-full overflow-x-auto custom-scrollbar">
          <table className="w-full text-xs text-center whitespace-nowrap">
            <thead className="text-[10px] uppercase border-b border-slate-800 bg-[#0f1523]">
              <tr>
                <th rowSpan={2} className="py-2 px-4 text-left text-slate-500 font-normal border-r border-slate-800">Vùng / Chi nhánh</th>
                <th colSpan={4} className="py-2 px-2 text-slate-400 font-medium border-r border-slate-800">FB MESS</th>
                <th colSpan={4} className="py-2 px-2 text-slate-400 font-medium border-r border-slate-800">GOOGLE</th>
                <th colSpan={4} className="py-2 px-2 text-slate-400 font-medium">TikTok</th>
              </tr>
              <tr className="text-slate-500 font-normal border-t border-slate-800">
                <th className="py-2 px-2 border-r border-slate-800/50">KPI DATA</th>
                <th className="py-2 px-2 border-r border-slate-800/50">Thực đạt</th>
                <th className="py-2 px-2 border-r border-slate-800/50">%</th>
                <th className="py-2 px-2 border-r border-slate-800">+/- TĐĐ</th>
                <th className="py-2 px-2 border-r border-slate-800/50">KPI DATA</th>
                <th className="py-2 px-2 border-r border-slate-800/50">Thực đạt</th>
                <th className="py-2 px-2 border-r border-slate-800/50">%</th>
                <th className="py-2 px-2 border-r border-slate-800">+/- TĐĐ</th>
                <th className="py-2 px-2 border-r border-slate-800/50">KPI DATA</th>
                <th className="py-2 px-2 border-r border-slate-800/50">Thực đạt</th>
                <th className="py-2 px-2 border-r border-slate-800/50">%</th>
                <th className="py-2 px-2">+/- TĐĐ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {tableD2.map((row, idx) => {
                if (row.isGroup) {
                  return (
                    <tr key={idx} className="bg-blue-900/10 hover:bg-slate-800/50 transition-colors cursor-pointer border-b border-slate-800">
                      <td className="py-3 px-4 text-left flex items-center gap-1 font-bold text-white">
                        <ChevronDown className="text-slate-400" size={14}/>
                        {row.name} <span className="text-[10px] text-slate-500 font-normal">{row.count}</span>
                      </td>
                      <td className="py-3 px-2 text-slate-400 border-l border-slate-800/50">{row.fKpi}</td>
                      <td className="py-3 px-2 font-bold text-white">{row.fThuc}</td>
                      <td className={`py-3 px-2 ${getPercentColor(row.fPer)}`}>{row.fPer}</td>
                      <td className="py-3 px-2 font-bold text-emerald-500 border-r border-slate-800">{row.fDiff}</td>
                      
                      <td className="py-3 px-2 text-slate-400">{row.gKpi}</td>
                      <td className="py-3 px-2 font-bold text-white">{row.gThuc}</td>
                      <td className={`py-3 px-2 ${getPercentColor(row.gPer)}`}>{row.gPer}</td>
                      <td className="py-3 px-2 font-bold text-emerald-500 border-r border-slate-800">{row.gDiff}</td>
                      
                      <td className="py-3 px-2 text-slate-400">{row.tKpi}</td>
                      <td className="py-3 px-2 font-bold text-white">{row.tThuc}</td>
                      <td className={`py-3 px-2 ${getPercentColor(row.tPer)}`}>{row.tPer}</td>
                      <td className="py-3 px-2 font-bold text-emerald-500">{row.tDiff}</td>
                    </tr>
                  )
                }
                return (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4 text-left pl-8 text-[#94a3b8] uppercase">{row.name}</td>
                    
                    <td className="py-3 px-2 text-slate-400 border-l border-slate-800/50">{row.fKpi}</td>
                    <td className="py-3 px-2 font-bold text-white">{row.fThuc}</td>
                    <td className={`py-3 px-2 ${getPercentColor(row.fPer)}`}>{row.fPer}</td>
                    <td className="py-3 px-2 font-bold text-emerald-500 border-r border-slate-800">{row.fDiff}</td>
                    
                    <td className="py-3 px-2 text-slate-400">{row.gKpi}</td>
                    <td className="py-3 px-2 font-bold text-white">{row.gThuc}</td>
                    <td className={`py-3 px-2 ${getPercentColor(row.gPer)}`}>{row.gPer}</td>
                    <td className="py-3 px-2 font-bold text-emerald-500 border-r border-slate-800">{row.gDiff}</td>
                    
                    <td className="py-3 px-2 text-slate-400">{row.tKpi}</td>
                    <td className="py-3 px-2 font-bold text-white">{row.tThuc}</td>
                    <td className={`py-3 px-2 ${getPercentColor(row.tPer)}`}>{row.tPer}</td>
                    <td className="py-3 px-2 font-bold text-emerald-500">{row.tDiff}</td>
                  </tr>
                )
              })}
              {/* Dòng Tổng Cộng D2 */}
              <tr className="bg-[#151e2f] border-t border-slate-700 font-bold text-white">
                <td className="py-3 px-4 text-left">Tổng cộng</td>
                <td className="py-3 px-2 text-slate-400 border-l border-slate-800/50">121</td>
                <td className="py-3 px-2">120</td>
                <td className="py-3 px-2 bg-emerald-800/40 text-emerald-400">99,2%</td>
                <td className="py-3 px-2 text-emerald-500 border-r border-slate-800">+93</td>
                <td className="py-3 px-2 text-slate-400">21</td>
                <td className="py-3 px-2">22</td>
                <td className="py-3 px-2 bg-emerald-800/40 text-emerald-400">104,8%</td>
                <td className="py-3 px-2 text-emerald-500 border-r border-slate-800">+17</td>
                <td className="py-3 px-2 text-slate-400">21</td>
                <td className="py-3 px-2">59</td>
                <td className="py-3 px-2 bg-emerald-800/40 text-emerald-400">281%</td>
                <td className="py-3 px-2 text-emerald-500">+54</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}