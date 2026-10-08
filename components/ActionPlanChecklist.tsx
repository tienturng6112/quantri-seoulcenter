"use client";
import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

export function ActionPlanChecklist() {
  const projects = [
    { month: "10/2026", type: "SECRET DAY/ HAPPYDAY", branch: "Long Khánh", actDate: "04/10/2026", startDate: "01/10/2026" },
    { month: "10/2026", type: "SECRET DAY/ HAPPYDAY", branch: "Bà Rịa", actDate: "10/10/2026", startDate: "07/10/2026" },
    { month: "10/2026", type: "SECRET DAY/ HAPPYDAY", branch: "Vũng Tàu", actDate: "11/10/2026", startDate: "08/10/2026" },
    { month: "10/2026", type: "SECRET DAY/ HAPPYDAY", branch: "Tây Ninh", actDate: "11/10/2026", startDate: "08/10/2026" },
    { month: "10/2026", type: "SECRET DAY/ HAPPYDAY", branch: "Tân Uyên", actDate: "18/10/2026", startDate: "15/10/2026" },
    { month: "10/2026", type: "SECRET DAY/ HAPPYDAY", branch: "Dĩ An", actDate: "24/10/2026", startDate: "21/10/2026" },
    { month: "10/2026", type: "SECRET DAY/ HAPPYDAY", branch: "Bình Phước", actDate: "25/10/2026", startDate: "22/10/2026" },
    { month: "10/2026", type: "SECRET DAY/ HAPPYDAY", branch: "Bình Thạnh", actDate: "25/10/2026", startDate: "22/10/2026" },
  ];

  return (
    <div className="mb-10">
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
        
        {/* Header Bảng */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-bold text-white">Dự án / Checklist</h3>
          <select className="bg-[#1e293b] border border-slate-700 text-slate-300 text-xs rounded-md px-3 py-1.5 outline-none appearance-none cursor-pointer">
            <option>10/2026</option>
          </select>
        </div>

        {/* Bảng Dữ liệu */}
        <div className="w-full overflow-x-auto custom-scrollbar">
          <table className="w-full text-xs text-left whitespace-nowrap">
            <thead className="text-[10px] text-slate-500 uppercase border-b border-slate-800">
              <tr>
                <th className="py-3 px-4 font-normal">THÁNG</th>
                <th className="py-3 px-4 font-normal">LOẠI DỰ ÁN</th>
                <th className="py-3 px-4 font-normal">CHI NHÁNH</th>
                <th className="py-3 px-4 font-normal">NGÀY DIỄN RA</th>
                <th className="py-3 px-4 font-normal">NGÀY BẮT ĐẦU CHẠY</th>
                <th className="py-3 px-4 font-normal text-right">LIÊN KẾT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {projects.map((proj, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors text-slate-300">
                  <td className="py-3 px-4">{proj.month}</td>
                  <td className="py-3 px-4">{proj.type}</td>
                  <td className="py-3 px-4">{proj.branch}</td>
                  <td className="py-3 px-4">{proj.actDate}</td>
                  <td className="py-3 px-4">{proj.startDate}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="flex items-center gap-1 text-[10px] text-slate-300 bg-[#1e293b] border border-slate-700 px-2 py-1 rounded hover:text-white hover:bg-slate-700 transition-colors">
                        <ExternalLink size={12}/> Mở sheet
                      </button>
                      <button className="text-slate-500 hover:text-slate-300">
                         <ChevronDown size={14}/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}