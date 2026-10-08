"use client";
import React from 'react';
import { 
  Key, Sun, Bell, LogOut, Calendar, ChevronDown, RefreshCcw 
} from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { ModuleA } from '@/components/ModuleA';
import { ModuleB } from '@/components/ModuleB';
import { ModuleC } from '@/components/ModuleC';
import { ModuleD } from '@/components/ModuleD';
import { ModuleE } from '@/components/ModuleE';
import { ModuleF } from '@/components/ModuleF';
import { ModuleH } from '@/components/ModuleH';
import { ModuleI } from '@/components/ModuleI';
import { ModuleH6H7 } from '@/components/ModuleH6H7';

export default function SeoulCenterDashboard() {
  return (
    <div className="flex h-screen bg-[#0b1120] text-slate-300 font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* HEADER */}
        <header className="h-16 shrink-0 border-b border-slate-800 bg-[#0f1523] flex items-center justify-end px-6 gap-4">
          <button className="flex items-center gap-2 text-xs text-slate-300 bg-[#1e293b] px-3 py-1.5 rounded border border-slate-700 hover:bg-slate-700">
            <Key size={14} /> Đổi mật khẩu
          </button>
          <button className="text-slate-400 hover:text-white"><Sun size={18} /></button>
          <button className="text-slate-400 hover:text-white relative">
            <Bell size={18} />
            <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[8px] font-bold px-1 rounded-full">99+</span>
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">TN</div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Trương Nguyễn Trung Tiến</span>
              <span className="text-[9px] text-slate-500">OPERATOR</span>
            </div>
          </div>
          
          <button className="flex items-center gap-2 text-xs text-slate-400 ml-2 hover:text-white">
            <LogOut size={14} /> Đăng xuất
          </button>
        </header>

        {/* SCROLLABLE AREA */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-[#0b1120]">
          
          {/* TITLE & ACTIONS */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Dashboard Seoul Center</h2>
              <p className="text-xs text-slate-400">Tổng hợp KPI, cam kết MTD và hiệu suất theo chi nhánh/nguồn/kênh từ Power BI.</p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-emerald-900/20 border border-emerald-800/50 text-emerald-500 px-3 py-1.5 rounded-md text-xs font-medium cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                LIVE - dữ liệu đến 07/10/2026
              </div>
              <button className="bg-[#0f766e] hover:bg-teal-600 border border-teal-500 text-white px-4 py-1.5 rounded-md text-xs font-bold transition-colors shadow-sm">
                + KPI Cam kết tháng
              </button>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="bg-[#111827] border border-slate-800 rounded-lg p-5 mb-6">
            <div className="grid grid-cols-8 gap-3 mb-4">
              
              <div className="col-span-1">
                <label className="block text-[10px] text-slate-500 mb-1">Brand</label>
                <div className="flex bg-[#1e293b] border border-slate-700 rounded-md overflow-hidden text-xs">
                  <button className="bg-blue-900/50 text-blue-400 font-medium px-3 py-1.5 flex-1 border border-blue-800 rounded">Tất cả</button>
                  <button className="text-slate-400 px-2 py-1.5 hover:bg-slate-700/50 flex-1 transition-colors">SC</button>
                  <button className="text-slate-400 px-2 py-1.5 hover:bg-slate-700/50 flex-1 transition-colors">SCC</button>
                </div>
              </div>

              <div className="col-span-1">
                <label className="block text-[10px] text-slate-500 mb-1">Tháng</label>
                <div className="flex items-center justify-between bg-[#1e293b] border border-slate-700 rounded-md px-3 py-1.5 text-xs text-white cursor-pointer hover:border-slate-500 transition-colors">
                  <span>Tháng Mười 2026</span> <Calendar size={12} className="text-slate-400" />
                </div>
              </div>

              <div className="col-span-1">
                <label className="block text-[10px] text-slate-500 mb-1">Từ ngày</label>
                <div className="flex items-center justify-between bg-[#1e293b] border border-slate-700 rounded-md px-3 py-1.5 text-xs text-white cursor-pointer hover:border-slate-500 transition-colors">
                  <span>dd / mm / yyyy</span> <Calendar size={12} className="text-slate-400" />
                </div>
              </div>

              <div className="col-span-1">
                <label className="block text-[10px] text-slate-500 mb-1">Đến ngày</label>
                <div className="flex items-center justify-between bg-[#1e293b] border border-slate-700 rounded-md px-3 py-1.5 text-xs text-white cursor-pointer hover:border-slate-500 transition-colors">
                  <span>dd / mm / yyyy</span> <Calendar size={12} className="text-slate-400" />
                </div>
              </div>

              <div className="col-span-1">
                <label className="block text-[10px] text-slate-500 mb-1">Vùng</label>
                <div className="flex items-center justify-between bg-[#1e293b] border border-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 cursor-pointer hover:border-slate-500 transition-colors">
                  <span>— Tất cả —</span> <ChevronDown size={12} />
                </div>
              </div>

              <div className="col-span-1">
                <label className="block text-[10px] text-slate-500 mb-1">Chi nhánh</label>
                <div className="flex items-center justify-between bg-[#1e293b] border border-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 cursor-pointer hover:border-slate-500 transition-colors">
                  <span>— Tất cả —</span> <ChevronDown size={12} />
                </div>
              </div>

              <div className="col-span-1">
                <label className="block text-[10px] text-slate-500 mb-1">Nguồn - Kênh</label>
                <div className="flex items-center justify-between bg-[#1e293b] border border-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 cursor-pointer hover:border-slate-500 transition-colors">
                  <span>— Tất cả —</span> <ChevronDown size={12} />
                </div>
              </div>

              <div className="col-span-1">
                <label className="block text-[10px] text-slate-500 mb-1">TAG_MKT</label>
                <div className="flex gap-2">
                  <div className="flex-1 flex items-center justify-between bg-[#1e293b] border border-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 cursor-pointer hover:border-slate-500 transition-colors">
                    <span>— Tất cả —</span> <ChevronDown size={12} />
                  </div>
                  <button className="bg-[#1e293b] border border-slate-700 hover:bg-slate-700 text-slate-300 px-2 py-1.5 rounded-md flex items-center gap-1 text-xs transition-colors">
                    <RefreshCcw size={12} /> Tải lại
                  </button>
                </div>
              </div>

            </div>

            <div className="flex items-center gap-6 text-[11px] pt-1">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer hover:text-white transition-colors">
                <div className="w-3.5 h-3.5 rounded border border-slate-600 flex items-center justify-center"></div> Chỉ chi nhánh SOS
              </label>
              <div className="flex items-center gap-3 bg-[#1e293b] px-3 py-1.5 rounded-md border border-slate-700">
                <span className="text-slate-500">Nhanh:</span>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors px-1">Hôm qua</span>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors px-1">7 ngày qua</span>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors px-1">30 ngày qua</span>
                <span className="bg-blue-900/40 text-blue-400 border border-blue-800 px-3 py-0.5 rounded-full font-medium cursor-default">Tháng này</span>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors px-1">Tháng trước</span>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors px-1">Quý này</span>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors px-1">Năm nay</span>
              </div>
            </div>
          </div>

          {/* HIỂN THỊ MODULE A Ở ĐÂY */}
          <ModuleA />
          <ModuleB />
          <ModuleC />
          <ModuleD />
          <ModuleE />
          <ModuleF />
          <ModuleH />
          <ModuleH6H7 />
          <ModuleI />
        </div>
      </main>
    </div>
  );
}
