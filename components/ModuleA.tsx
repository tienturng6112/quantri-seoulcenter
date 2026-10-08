"use client";
import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

export function ModuleA() {
  const kpiCards = [
    { title: "DT (đã VAT)", value: "585,7 tr", dat: "14%", muctieu: "4,2 tỷ", trend: "-8,5% so tiến độ", trendColor: "text-red-500", extra: "" },
    { title: "DT KH mới", value: "285,4 tr", dat: "16,7%", muctieu: "1,7 tỷ", trend: "-5,9% so tiến độ", trendColor: "text-red-500", extra: "48,7% tổng DT" },
    { title: "DT KH cũ", value: "300,3 tr", dat: "11,3%", muctieu: "2,6 tỷ", trend: "-11,2% so tiến độ", trendColor: "text-red-500", extra: "51,3% tổng DT" },
    { title: "DATA FB Mess", value: "120", dat: "99,2%", muctieu: "121", trend: "+76,6% so tiến độ", trendColor: "text-emerald-500", extra: "" },
    { title: "DATA GG", value: "22", dat: "104,8%", muctieu: "21", trend: "+82,2% so tiến độ", trendColor: "text-emerald-500", extra: "" },
    { title: "Khách mới mới", value: "59", dat: "22,9%", muctieu: "258", trend: "+0,3% so tiến độ", trendColor: "text-emerald-500", extra: "" },
    { title: "Khách mới cũ", value: "28", dat: "77,8%", muctieu: "36", trend: "+55,2% so tiến độ", trendColor: "text-emerald-500", extra: "" },
    { title: "KC", value: "1.153", dat: "37,3%", muctieu: "3.093", trend: "+14,7% so tiến độ", trendColor: "text-emerald-500", extra: "" },
    { title: "DATA", value: "264", dat: "162%", muctieu: "163", trend: "+139,4% so tiến độ", trendColor: "text-emerald-500", extra: "" },
    { title: "TBK mới", value: "3.280.722 đ", dat: "83,7%", muctieu: "3.920.986 đ", trend: "-16,3% so mục tiêu", trendColor: "text-red-500", extra: "" },
    { title: "TBK cũ", value: "260.410 đ", dat: "30,4%", muctieu: "856.175 đ", trend: "-69,6% so mục tiêu", trendColor: "text-red-500", extra: "" }
  ];

  const tableData = [
    { name: "TÂY NINH", status: "HOẠT ĐỘNG", camket: "220 tr", thucdat: "73,5 tr", khmoi: "47 tr", khcu: "26,5 tr", percent: "33,4%", barWidth: "33.4%", barColor: "bg-emerald-500" },
    { name: "BÌNH THẠNH", status: "HOẠT ĐỘNG", camket: "500 tr", thucdat: "106,6 tr", khmoi: "55 tr", khcu: "51,5 tr", percent: "21,3%", barWidth: "21.3%", barColor: "bg-yellow-500" },
    { name: "THỦ ĐỨC", status: "HOẠT ĐỘNG", camket: "500 tr", thucdat: "105,7 tr", khmoi: "41,7 tr", khcu: "64 tr", percent: "21,1%", barWidth: "21.1%", barColor: "bg-yellow-500" },
    { name: "DĨ AN", status: "HOẠT ĐỘNG", camket: "500 tr", thucdat: "80 tr", khmoi: "27,6 tr", khcu: "52,4 tr", percent: "16%", barWidth: "16%", barColor: "bg-red-500" },
    { name: "LONG KHÁNH", status: "HOẠT ĐỘNG", camket: "500 tr", thucdat: "78,1 tr", khmoi: "52,8 tr", khcu: "25,3 tr", percent: "15,6%", barWidth: "15.6%", barColor: "bg-red-500" },
    { name: "BÀ RỊA", status: "HOẠT ĐỘNG", camket: "500 tr", thucdat: "58,9 tr", khmoi: "36,5 tr", khcu: "22,5 tr", percent: "11,8%", barWidth: "11.8%", barColor: "bg-red-500" },
    { name: "BÌNH PHƯỚC", status: "HOẠT ĐỘNG", camket: "500 tr", thucdat: "37,8 tr", khmoi: "4,9 tr", khcu: "22,5 tr", percent: "7,9%", barWidth: "7.9%", barColor: "bg-red-500" },
  ];

  const warningList = [
    { name: "VŨNG TÀU", val: "3,5%" }, { name: "TÂN UYÊN", val: "5,9%" },
    { name: "BÌNH PHƯỚC", val: "7,9%" }, { name: "BÀ RỊA", val: "11,8%" },
    { name: "LONG KHÁNH", val: "15,6%" }, { name: "DĨ AN", val: "16%" }
  ];

  return (
    <div className="mb-10">
      {/* Header Module A */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">A · TIẾN ĐỘ CAM KẾT 3 BÊN — LŨY KẾ (MTD)</p>
          <h3 className="text-lg font-bold text-white">Cam kết MTD theo chi nhánh</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-400 font-medium">THỂ HIỆN</span>
          <div className="flex bg-[#1e293b] rounded-md p-0.5 text-[11px] font-medium border border-slate-700">
            <button className="bg-slate-700 text-white px-3 py-1 rounded shadow-sm">% Đạt cả tháng</button>
            <button className="text-slate-400 px-3 py-1 rounded hover:text-white transition-colors">% Tiến độ đúng</button>
          </div>
          <button className="text-slate-400 hover:text-white p-1 transition-colors"><SlidersHorizontal size={14}/></button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5 mb-4">
        <div className="flex justify-between text-xs mb-3">
          <span className="text-blue-500 font-medium">Tiến độ đúng đến hôm nay</span>
          <span className="text-white font-bold">22,6%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full" style={{ width: '22.6%' }}></div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-6 gap-3 mb-4">
        {kpiCards.map((card, idx) => (
          <div key={idx} className="bg-[#111827] border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
            <p className="text-[10px] text-slate-400 mb-1">{card.title}</p>
            <p className="text-xl font-bold text-white mb-2 tracking-tight">{card.value}</p>
            <div className="text-[10px] text-slate-500 mb-0.5 whitespace-nowrap">
              <span className={card.dat.includes('%') ? "text-emerald-500 font-medium" : "text-slate-300"}>{card.dat} đã đạt</span> <span className="ml-0.5">mục tiêu: {card.muctieu}</span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
              <span className={`${card.trendColor} font-medium`}>{card.trend}</span>
              {card.extra && <span className="text-slate-500">{card.extra}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Table & Warning Section */}
      <div className="grid grid-cols-4 gap-4">
        {/* Left Table */}
        <div className="col-span-3 bg-[#111827] border border-slate-800 rounded-lg overflow-hidden flex flex-col">
          <table className="w-full text-xs text-right whitespace-nowrap">
            <thead className="text-[10px] text-slate-500 uppercase border-b border-slate-800 bg-[#0f1523]">
              <tr>
                <th className="py-3 px-4 font-normal text-left">CHI NHÁNH</th>
                <th className="py-3 px-3 font-normal text-center">TÌNH TRẠNG</th>
                <th className="py-3 px-3 font-normal">CAM KẾT DT</th>
                <th className="py-3 px-3 font-normal text-white">THỰC ĐẠT</th>
                <th className="py-3 px-3 font-normal">DT KH MỚI</th>
                <th className="py-3 px-3 font-normal">DT KH CŨ</th>
                <th className="py-3 px-4 font-normal text-left">%ĐẠT DT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-slate-300">
              {tableData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 text-left">
                    <p className="font-bold text-white">{row.name}</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">TMV HCM - DNB</p>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-[9px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{row.status}</span>
                  </td>
                  <td className="py-3 px-3 text-slate-400">{row.camket}</td>
                  <td className="py-3 px-3 font-bold text-white">{row.thucdat}</td>
                  <td className="py-3 px-3 text-slate-400">{row.khmoi}</td>
                  <td className="py-3 px-3 text-slate-400">{row.khcu}</td>
                  <td className="py-3 px-4 text-left flex items-center gap-2">
                    <span className="font-bold text-white w-10">{row.percent}</span>
                    <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${row.barColor}`} style={{ width: row.barWidth }}></div>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="bg-[#151e2f] border-t border-slate-700 font-bold text-white">
                <td colSpan={2} className="py-3 px-4 text-left">Tổng cộng</td>
                <td className="py-3 px-3 text-slate-400">4,2 tỷ</td>
                <td className="py-3 px-3">585,7 tr</td>
                <td className="py-3 px-3 text-slate-400">285,4 tr</td>
                <td className="py-3 px-3 text-slate-400">300,3 tr</td>
                <td className="py-3 px-4 text-left flex items-center gap-2">
                  <span className="w-10">14%</span>
                  <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: '14%' }}></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Warnings */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="bg-[#111827] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold text-red-500 mb-4 border-b border-slate-800 pb-2">Cần chú ý — tụt cam kết</h4>
            <div className="space-y-3">
              {warningList.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-white">{item.name}</p>
                    <p className="text-[9px] text-slate-500">TMV HCM - DNB</p>
                  </div>
                  <span className="text-[10px] text-red-400 bg-red-900/20 px-2 py-0.5 rounded font-bold">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#111827] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold text-emerald-500 mb-4 border-b border-slate-800 pb-2">Vượt cam kết ↑ nêu gương</h4>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-white">TÂY NINH</p>
                <p className="text-[9px] text-slate-500">TMV HCM - DNB</p>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-900/20 px-2 py-0.5 rounded font-bold">33,4%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
