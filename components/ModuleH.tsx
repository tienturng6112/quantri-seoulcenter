"use client";
import React from 'react';
import { SlidersHorizontal, Info } from 'lucide-react';

export function ModuleH() {
  // Dữ liệu Bảng H2
  const tableH2 = [
    { type: "1 HĐ", count: 324, countPer: "98,5%", avgDt: "1,2 tr", totalDt: "390,6 tr", dtPer: "86,3%" },
    { type: "2 HĐ", count: 5, countPer: "1,5%", avgDt: "12,4 tr", totalDt: "62 tr", dtPer: "13,7%" },
    { type: "Tổng", count: 329, countPer: "100%", avgDt: "1,4 tr", totalDt: "452,6 tr", dtPer: "100%", isBold: true },
  ];

  // Dữ liệu Biểu đồ ngang H2
  const barH2 = [
    { label: "T1/26", w1: "65%", w2: "25%", text1: "241/504", text2: "47,8%" },
    { label: "T2/26", w1: "50%", w2: "35%", text1: "166/274", text2: "60,6%" },
    { label: "T3/26", w1: "48%", w2: "35%", text1: "167/343", text2: "48,7%" },
    { label: "T4/26", w1: "55%", w2: "30%", text1: "195/403", text2: "48,4%" },
    { label: "T5/26", w1: "58%", w2: "35%", text1: "204/436", text2: "46,8%" },
    { label: "T6/26", w1: "60%", w2: "30%", text1: "224/401", text2: "55,9%" },
    { label: "T7/26", w1: "70%", w2: "25%", text1: "264/491", text2: "53,8%" },
    { label: "T8/26", w1: "75%", w2: "20%", text1: "309/517", text2: "59,8%" },
    { label: "T9/26 (mới)", w1: "85%", w2: "10%", text1: "324/442", text2: "73,3%" },
    { label: "T10/26 (mới)", w1: "20%", w2: "5%", text1: "92/95", text2: "96,8%" },
  ];

  // Dữ liệu Bảng H3 (Cohort)
  const cohortH3 = [
    { name: "Khách mới T1/26", total: 504, data: ["97,4%", "24,6%", "25%", "15,9%", "13,9%", "13,9%", "10,7%", "9,9%", "8,5%", "4,4%"] },
    { name: "Khách mới T2/26", total: 274, data: [null, "93,1%", "24,1%", "16,8%", "12,4%", "10,6%", "9,9%", "7,7%", "7,7%", "2,9%"] },
    { name: "Khách mới T3/26", total: 343, data: [null, null, "97,7%", "29,7%", "20,7%", "16%", "14,6%", "12,2%", "8,7%", "3,8%"] },
    { name: "Khách mới T4/26", total: 403, data: [null, null, null, "97,3%", "26,6%", "22,8%", "18,4%", "17,9%", "15,9%", "6%"] },
    { name: "Khách mới T5/26", total: 436, data: [null, null, null, null, "97%", "32,1%", "21,8%", "20,2%", "16,7%", "5%"] },
    { name: "Khách mới T6/26", total: 401, data: [null, null, null, null, null, "98%", "28,7%", "21,7%", "16,7%", "5,7%"] },
    { name: "Khách mới T7/26", total: 491, data: [null, null, null, null, null, null, "98,6%", "31,6%", "22,8%", "6,7%"] },
    { name: "Khách mới T8/26", total: 517, data: [null, null, null, null, null, null, null, "99,2%", "28,8%", "6,4%"] },
    { name: "Khách mới T9/26", total: 442, data: [null, null, null, null, null, null, null, null, "100%", "12,7%"] },
    { name: "Khách mới T10/26", total: 95, data: [null, null, null, null, null, null, null, null, null, "100%"] },
  ];

  // Helper render màu cho cohort
  const getCohortColor = (val: string | null) => {
    if (!val) return "bg-[#111827]";
    const num = parseFloat(val.replace("%", "").replace(",", "."));
    if (num > 90) return "bg-cyan-500 text-slate-900 font-bold";
    if (num > 25) return "bg-teal-700 text-white";
    if (num > 15) return "bg-teal-800 text-white";
    if (num > 10) return "bg-teal-900/80 text-white";
    return "bg-[#1e293b] text-slate-300";
  };

  return (
    <div className="mb-10">
      {/* Header Module H */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">H · TỶ LỆ CHUYỂN ĐỔI PHỄU</p>
          <h3 className="text-lg font-bold text-white">TLCĐ Inbox → Data → Lịch → Khách (mới tạo trong tháng)</h3>
        </div>
        <button className="text-slate-400 hover:text-white p-1 transition-colors">
          <SlidersHorizontal size={14}/>
        </button>
      </div>

      {/* H1: Progress Bars */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <p className="text-[10px] text-slate-400 mb-2 uppercase">TLCĐ Inbox → Data</p>
          <p className="text-2xl font-bold text-white mb-3">108,1%</p>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-cyan-500 rounded-full" style={{ width: '100%' }}></div>
          </div>
          <p className="text-[9px] text-slate-500">128 data mới (FB) / 111 inbox mới (page ads)</p>
        </div>
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <p className="text-[10px] text-slate-400 mb-2 uppercase">TLCĐ Data → Lịch</p>
          <p className="text-2xl font-bold text-white mb-3">44,7%</p>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-teal-500 rounded-full" style={{ width: '44.7%' }}></div>
          </div>
          <p className="text-[9px] text-slate-500">118 lịch mới / 264 data mới</p>
        </div>
        <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
          <p className="text-[10px] text-slate-400 mb-2 uppercase">TLCĐ Lịch → Khách</p>
          <p className="text-2xl font-bold text-white mb-3">50%</p>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <p className="text-[9px] text-slate-500">59 KH mới / 118 lịch mới</p>
        </div>
      </div>

      {/* H2: Đóng góp khách mới */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">H2 · ĐÓNG GÓP KHÁCH MỚI</p>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Đóng góp khách mới (2026) <Info className="text-slate-500 cursor-pointer" size={14}/>
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-[#1e293b] rounded-md p-0.5 text-[11px] font-medium border border-slate-700">
              <button className="bg-slate-700 text-white px-3 py-1.5 rounded shadow-sm">Theo Số hoá đơn</button>
              <button className="text-slate-400 px-3 py-1.5 rounded hover:text-white transition-colors">Theo Giá trị hoá đơn</button>
              <button className="text-slate-400 px-3 py-1.5 rounded hover:text-white transition-colors">Theo Số SP-DV</button>
            </div>
            <label className="flex items-center gap-2 text-xs text-cyan-400 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-cyan-500" /> Chỉ HĐ có tiền
            </label>
          </div>
        </div>

        {/* Bảng tổng kết H2 */}
        <div className="w-full overflow-x-auto custom-scrollbar mb-6">
          <table className="w-full text-xs text-right whitespace-nowrap">
            <thead className="text-[10px] text-slate-500 uppercase border-b border-slate-800 bg-[#0f1523]">
              <tr>
                <th className="py-2 px-4 text-left font-normal">Số HĐ / khách</th>
                <th className="py-2 px-2 font-normal">Số khách</th>
                <th className="py-2 px-2 font-normal">%Số khách</th>
                <th className="py-2 px-2 font-normal">TB DT/khách</th>
                <th className="py-2 px-2 font-normal">Tổng DT</th>
                <th className="py-2 px-2 font-normal">%DT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-slate-300">
              {tableH2.map((row, idx) => (
                <tr key={idx} className={row.isBold ? "font-bold text-white bg-[#151e2f]" : "hover:bg-slate-800/30 transition-colors"}>
                  <td className="py-2 px-4 text-left">{row.type}</td>
                  <td className="py-2 px-2">{row.count}</td>
                  <td className="py-2 px-2">{row.countPer}</td>
                  <td className="py-2 px-2">{row.avgDt}</td>
                  <td className="py-2 px-2">{row.totalDt}</td>
                  <td className="py-2 px-2">{row.dtPer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Khách 1 hóa đơn */}
        <div className="mb-2 flex items-center gap-2">
          <h4 className="text-xs font-bold text-white">Khách 1 hóa đơn, chưa quay lại</h4>
          <span className="text-[9px] text-slate-500 italic">(theo tháng tạo khách · tính cả năm đến nay)</span>
          <Info className="text-slate-500" size={12}/>
        </div>
        <div className="flex gap-4 text-[10px] mb-3">
          <span className="flex items-center gap-1 text-orange-500"><div className="w-2 h-2 bg-orange-500 rounded-sm"></div> 1 HĐ, chưa quay lại</span>
          <span className="flex items-center gap-1 text-blue-500"><div className="w-2 h-2 bg-blue-600 rounded-sm"></div> Đã quay lại (≥2 HĐ)</span>
        </div>

        <div className="space-y-1.5 text-xs text-slate-400">
          {barH2.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-20">{item.label}</span>
              <div className="flex-1 flex h-4 bg-slate-800/50">
                <div className="bg-[#f97316]" style={{ width: item.w1 }}></div>
                <div className="bg-[#2563eb]" style={{ width: item.w2 }}></div>
              </div>
              <div className="w-24 text-right flex gap-1 justify-end text-[10px]">
                <span className="text-orange-400">{item.text1}</span>
                <span className="text-slate-500">•</span>
                <span className="text-white font-bold">{item.text2}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 pt-2 font-bold">
            <span className="w-20 text-white">Tổng</span>
            <div className="flex-1"></div>
            <div className="w-28 text-right flex gap-1 justify-end text-[11px]">
              <span className="text-orange-500">2.186/3.906</span>
              <span className="text-slate-500">•</span>
              <span className="text-white font-bold">56%</span>
            </div>
          </div>
        </div>
      </div>

      {/* H3: Giữ chân khách mới */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">H3 · GIỮ CHÂN KHÁCH MỚI</p>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Giữ chân khách mới (2026)
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-[#1e293b] rounded-md p-0.5 text-[11px] font-medium border border-slate-700">
              <button className="bg-slate-700 text-white px-3 py-1.5 rounded shadow-sm">%</button>
              <button className="text-slate-400 px-3 py-1.5 rounded hover:text-white transition-colors">Số khách</button>
            </div>
            <label className="flex items-center gap-2 text-xs text-cyan-400 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-cyan-500" /> Chỉ HĐ có tiền
            </label>
          </div>
        </div>
        <p className="text-[10px] text-slate-500 mb-4">
          Mỗi hàng là lứa khách mới theo tháng tạo ID · mỗi ô là % khách của lứa đó còn phát sinh hóa đơn trong tháng tương ứng (đếm theo số khách, không theo tiền — màu ô luôn đậm nhạt theo %).
        </p>

        <div className="w-full overflow-x-auto custom-scrollbar">
          <table className="w-full text-xs text-center border-collapse">
            <thead className="text-[10px] text-slate-400 uppercase bg-[#0f1523]">
              <tr>
                <th className="p-2 text-left font-normal border border-slate-800">Lứa khách mới</th>
                <th className="p-2 font-normal border border-slate-800">Số khách</th>
                {[...Array(10)].map((_, i) => (
                  <th key={i} className="p-2 font-normal border border-slate-800">T{i+1}/26</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cohortH3.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-800/30">
                  <td className="p-2 text-left font-bold text-white border border-slate-800">{row.name}</td>
                  <td className="p-2 text-slate-300 font-bold border border-slate-800">{row.total}</td>
                  {row.data.map((val, cIdx) => (
                    <td key={cIdx} className={`p-2 border border-slate-800/50 ${getCohortColor(val)}`}>
                      {val || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}
