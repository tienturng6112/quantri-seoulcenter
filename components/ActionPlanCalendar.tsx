"use client";
import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Download, Sparkles, AlertTriangle, Circle } from 'lucide-react';

export function ActionPlanCalendar() {
  const days = [
    { name: 'T2', date: '05/10', isToday: false },
    { name: 'T3', date: '06/10', isToday: false },
    { name: 'T4', date: '07/10', isToday: false },
    { name: 'T5', date: '08/10', isToday: true },
    { name: 'T6', date: '09/10', isToday: false },
    { name: 'T7', date: '10/10', isToday: false },
    { name: 'CN', date: '11/10', isToday: false },
  ];

  const branches = [
    { name: "Bà Rịa", status: "danger", events: [{ dayIdx: 5, label: "SECRET DAY/ HAPPYDAY" }] },
    { name: "Bình Phước", status: "danger", events: [] },
    { name: "Tân Uyên", status: "danger", events: [] },
    { name: "Vũng Tàu", status: "danger", events: [{ dayIdx: 6, label: "SECRET DAY/ HAPPYDAY" }] },
    { name: "Long Khánh", status: "warning", events: [] },
    { name: "Bình Thạnh", status: "warning", events: [] },
    { name: "Dĩ An", status: "warning", events: [] },
    { name: "Thủ Đức", status: "warning", events: [] },
    { name: "Tây Ninh", status: "none", events: [] },
  ];

  const legends = [
    { color: 'bg-blue-500', label: 'Livestream' },
    { color: 'bg-yellow-600', label: 'Khuyến mãi' },
    { color: 'bg-emerald-600', label: 'Workshop' },
    { color: 'bg-purple-500', label: 'Happy hour' },
    { color: 'bg-amber-700', label: 'Đào tạo' },
    { color: 'bg-green-700', label: 'Khai trương' },
    { color: 'bg-rose-600', label: 'Chiến dịch' },
    { color: 'bg-fuchsia-600', label: 'Kế hoạch cứu (AI)', hasIcon: true },
    { color: 'bg-yellow-500', label: 'Hành động ngắn hạn' },
    { color: 'bg-[#312e81]', label: 'Dự án / Sự kiện', hasCake: true },
  ];

  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Header & Filter */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Action Plan Chi Nhánh</h2>
          <p className="text-sm text-slate-400">Action Center chi nhánh — sức khỏe CN, lịch MKT, hành động AI đề xuất.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-[#1e293b] rounded-md p-0.5 text-xs font-medium border border-slate-700">
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded shadow-sm">Tất cả</button>
            <button className="text-slate-400 px-4 py-1.5 rounded hover:text-white transition-colors">SC</button>
            <button className="text-slate-400 px-4 py-1.5 rounded hover:text-white transition-colors">SCC</button>
          </div>
          
          <select className="bg-[#1e293b] border border-slate-700 text-slate-300 text-xs rounded-md px-3 py-2 outline-none w-40 appearance-none">
            <option>Toàn hệ thống</option>
          </select>
          
          <select className="bg-[#1e293b] border border-slate-700 text-slate-300 text-xs rounded-md px-3 py-2 outline-none w-40 appearance-none">
            <option>Tất cả chi nhánh</option>
          </select>

          <div className="flex items-center gap-2 bg-[#312e81]/30 border border-[#312e81] text-indigo-300 text-xs px-3 py-1.5 rounded-md">
            <Sparkles size={14} className="text-indigo-400"/>
            AI tự chấm sau 10h sáng (1 lần/ngày) · dữ liệu 09:47 08-10
          </div>
        </div>
      </div>

      {/* Calendar Controls */}
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center bg-[#1e293b] rounded-md border border-slate-700">
          <button className="p-2 text-slate-400 hover:text-white border-r border-slate-700"><ChevronLeft size={16}/></button>
          <span className="px-4 text-xs font-medium text-white">Tháng 10/2026</span>
          <button className="p-2 text-slate-400 hover:text-white border-l border-slate-700"><ChevronRight size={16}/></button>
        </div>
        
        <span className="text-sm font-medium text-slate-300">05/10 – 11/10</span>

        <div className="flex bg-[#1e293b] rounded-md p-0.5 text-xs font-medium border border-slate-700">
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded shadow-sm">Tuần</button>
          <button className="text-slate-400 px-4 py-1.5 rounded hover:text-white transition-colors">Tháng</button>
        </div>
        
        <button className="bg-[#1e293b] border border-slate-700 text-white text-xs px-4 py-1.5 rounded-md hover:bg-slate-800 transition-colors">Hôm nay</button>
        
        <button className="flex items-center gap-2 bg-[#1e293b] border border-slate-700 text-white text-xs px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors">
          <Maximize2 size={14}/> Mở rộng
        </button>
        
        <button className="flex items-center gap-2 bg-[#1e293b] border border-slate-700 text-white text-xs px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors">
          <Download size={14}/> Xuất báo cáo Offline chi nhánh
        </button>
      </div>

      {/* Legends */}
      <div className="flex flex-wrap gap-3 my-2">
        {legends.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-[10px] text-slate-300 bg-[#111827] px-2 py-1 rounded-full border border-slate-800">
            <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
            {item.hasIcon && <Sparkles size={10} className="text-fuchsia-400"/>}
            {item.hasCake && <span>🎂</span>}
            {item.label}
          </div>
        ))}
      </div>

      {/* Grid Lịch */}
      <div className="w-full overflow-x-auto custom-scrollbar rounded-lg border border-slate-800">
        <table className="w-full text-xs text-center border-collapse table-fixed min-w-[900px]">
          <thead>
            <tr>
              <th className="bg-[#1e293b] border-r border-b border-slate-800 p-3 text-left w-40 font-medium text-slate-400">Chi nhánh</th>
              {days.map((day, idx) => (
                <th key={idx} className={`border-r border-b border-slate-800 p-2 font-medium ${day.isToday ? 'bg-blue-600 text-white' : 'bg-[#0f1523] text-slate-400'}`}>
                  <div>{day.name}</div>
                  <div className="text-[10px] opacity-80 mt-0.5">{day.date}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[#111827]">
            {branches.map((branch, rIdx) => (
              <tr key={rIdx} className="hover:bg-slate-800/30">
                <td className="border-r border-b border-slate-800 p-3 text-left bg-[#1e293b]/30">
                  <div className="flex items-center gap-2 font-bold text-slate-300">
                    {branch.status === 'danger' ? (
                      <AlertTriangle size={14} className="text-red-500" />
                    ) : branch.status === 'warning' ? (
                      <Circle size={10} className="text-orange-500 fill-orange-500 ml-0.5" />
                    ) : null}
                    {branch.name}
                  </div>
                </td>
                {/* 7 cột cho 7 ngày */}
                {[0, 1, 2, 3, 4, 5, 6].map((dayIdx) => {
                  const event = branch.events.find(e => e.dayIdx === dayIdx);
                  const isTodayCol = days[dayIdx].isToday;
                  
                  return (
                    <td key={dayIdx} className={`border-r border-b border-slate-800 p-1.5 h-16 relative ${isTodayCol ? 'bg-blue-900/10' : ''}`}>
                      {event && (
                        <div className="bg-[#1e1b4b] border border-indigo-900/50 text-[#a5b4fc] text-[9px] px-2 py-1 rounded flex items-center justify-center gap-1 font-bold w-full truncate">
                          🎂 {event.label}
                        </div>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}