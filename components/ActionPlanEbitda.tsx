"use client";
import React from 'react';

export function ActionPlanEbitda() {
  const ebitdaStatus = [
    { label: "Đang cứu", value: "3" },
    { label: "Nguy cơ", value: "0" },
    { label: "Đang hồi phục", value: "0" },
    { label: "Đã cứu", value: "0" }
  ];

  const ebitdaBranches = [
    { name: "Bình Thạnh", status: "Đang cứu", percent: "-49%", trend: "từ -49%", note: "Chưa gán · T6/2026" },
    { name: "Thủ Đức", status: "Đang cứu", percent: "-15%", trend: "từ -15%", note: "Chưa gán · T6/2026" },
    { name: "Tây Ninh", status: "Đang cứu", percent: "-13%", trend: "từ -13%", note: "Chưa gán · T6/2026" }
  ];

  const quickStats = [
    { label: "DOANH THU", value: "585,7 Tr", chart: "line-up" },
    { label: "SL LEAD", value: "264", chart: "line-down" },
    { label: "ROAS", value: "1.54", chart: "line-up-alt" },
    { label: "TBK MỚI", value: "3,3 Tr", chart: "line-down-alt" }
  ];

  return (
    <div className="mb-10">
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
        <div className="mb-6">
          <h3 className="text-sm font-bold text-white mb-4">Cứu chi nhánh lỗ EBITDA</h3>
          
          {/* Status Boxes */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {ebitdaStatus.map((status, idx) => (
              <div key={idx} className="bg-[#0f1523] border border-slate-800 rounded p-4 flex flex-col">
                <span className="text-[10px] text-slate-500 mb-2">{status.label}</span>
                <span className="text-xl font-bold text-white">{status.value}</span>
              </div>
            ))}
          </div>

          {/* Branches List */}
          <div className="grid grid-cols-3 gap-4">
            {ebitdaBranches.map((branch, idx) => (
              <div key={idx} className="bg-[#0f1523] border border-slate-800 rounded p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white text-sm">{branch.name}</h4>
                  <span className="text-[10px] text-red-400 border border-red-900/50 bg-red-950/30 px-2 py-0.5 rounded">{branch.status}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-red-500">{branch.percent}</span>
                  <span className="text-[10px] text-slate-500">{branch.trend}</span>
                </div>
                <p className="text-[10px] text-slate-500">{branch.note}</p>
                <div className="w-full h-0.5 bg-slate-800 mt-3 relative">
                   <div className="absolute right-0 top-0 h-full bg-slate-600 w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="bg-[#0f1523] border border-slate-800 rounded-xl p-5 relative overflow-hidden flex flex-col h-28">
              <span className="text-[10px] text-slate-500 font-bold uppercase mb-1 z-10">{stat.label}</span>
              <span className="text-3xl font-bold text-white z-10">{stat.value}</span>
              
              {/* Mini Charts in background */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 text-cyan-500 opacity-90 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                  {stat.chart === 'line-up' && (
                    <path d="M0,35 L20,35 L40,25 L60,10 L80,25 L100,15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  )}
                  {stat.chart === 'line-down' && (
                    <path d="M0,25 L20,15 L40,35 L60,25 L80,30 L100,30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  )}
                  {stat.chart === 'line-up-alt' && (
                    <path d="M0,30 L20,25 L40,10 L60,20 L80,15 L100,25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  )}
                  {stat.chart === 'line-down-alt' && (
                    <path d="M0,15 L20,10 L40,30 L60,20 L80,35 L100,25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  )}
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}