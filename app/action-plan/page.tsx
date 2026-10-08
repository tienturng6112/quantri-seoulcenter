"use client";
import React from 'react';
import { ActionPlanCalendar } from '@/components/ActionPlanCalendar';
import { ActionPlanAlerts } from '@/components/ActionPlanAlerts';
import { ActionPlanAI } from '@/components/ActionPlanAI';
import { ActionPlanEbitda } from '@/components/ActionPlanEbitda';
import { ActionPlanProposals } from '@/components/ActionPlanProposals';
import { ActionPlanChecklist } from '@/components/ActionPlanChecklist';
import { Sidebar } from '@/components/Sidebar';
import { Key, Sun, Bell, LogOut } from 'lucide-react';

export default function ActionPlanPage() {
  return (
    <div className="flex h-screen w-full bg-[#0b1120] overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <Sidebar />

      {/* ================= KHỐI BÊN PHẢI ================= */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* HEADER (Đứng im) */}
        <header className="h-16 shrink-0 bg-[#0f1523] border-b border-slate-800 flex items-center justify-end px-6 gap-4">
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

        {/* NỘI DUNG CHÍNH - CHO PHÉP SCROLL Ở ĐÂY */}
        <main className="flex-1 p-6 overflow-y-auto custom-scrollbar relative">
          <ActionPlanCalendar />
          <ActionPlanAlerts />
          <ActionPlanAI />
          <ActionPlanEbitda />
          <ActionPlanProposals />
          <ActionPlanChecklist />
        </main>
        
      </div>
    </div>
  );
}