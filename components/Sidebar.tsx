"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart2, ClipboardCheck, BookOpen, Gauge, 
  LayoutGrid, Layers, Link2, Link as LinkIcon, 
  Users, Building, ShieldAlert, Activity, FileText, 
  CheckCircle, ClipboardList, LogOut, Key, User, LifeBuoy 
} from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();

  // Kiểm tra xem route hiện tại có khớp không
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-[#0f1523] border-r border-slate-800 flex flex-col shrink-0">
      <div className="p-4 flex items-center gap-3 border-b border-slate-800 shrink-0">
        <div className="w-8 h-8 bg-rose-600 rounded grid grid-cols-2 gap-0.5 p-1.5">
           <div className="bg-white rounded-sm"></div><div className="bg-white rounded-sm"></div>
           <div className="bg-white rounded-sm"></div><div className="bg-white rounded-sm"></div>
        </div>
        <div>
          <h1 className="text-white font-bold text-sm tracking-wide">SEOUL CENTER</h1>
          <p className="text-[9px] text-slate-500 uppercase">Access Command</p>
        </div>
      </div>
      
      <div className="flex-1 py-4 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
        
        {/* QUẢN TRỊ KPI */}
        <div className="px-3">
           <p className="text-[10px] font-bold text-slate-500 mb-2 px-2 uppercase tracking-wider">QUẢN TRỊ KPI</p>
           <div className="flex flex-col gap-0.5">
              <Link href="/" className={`flex items-center gap-3 px-3 py-2 transition-colors ${isActive('/') ? 'text-blue-400 bg-blue-900/20 border-l-2 border-blue-500 rounded-r-lg' : 'text-slate-400 hover:text-white rounded-lg'}`}>
                <BarChart2 size={16} />
                <span className="text-sm font-medium">Dashboard Seoul Center</span>
              </Link>
              <Link href="/action-plan" className={`flex items-center gap-3 px-3 py-2 transition-colors ${isActive('/action-plan') ? 'text-blue-400 bg-blue-900/20 border-l-2 border-blue-500 rounded-r-lg' : 'text-slate-400 hover:text-white rounded-lg'}`}>
                <ClipboardCheck size={16} />
                <span className="text-sm font-medium">Action Plan Chi Nhánh</span>
              </Link>
              <Link href="/knowledge" className={`flex items-center gap-3 px-3 py-2 transition-colors ${isActive('/knowledge') ? 'text-blue-400 bg-blue-900/20 border-l-2 border-blue-500 rounded-r-lg' : 'text-slate-400 hover:text-white rounded-lg'}`}>
                <BookOpen size={16} />
                <span className="text-sm font-medium">Cơ sở tri thức</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Gauge size={16} />
                <span className="text-sm font-medium">Thống kê sử dụng</span>
              </Link>
           </div>
        </div>

        {/* QUẢN TRỊ QUYỀN */}
        <div className="px-3">
           <p className="text-[10px] font-bold text-slate-500 mb-2 px-2 uppercase tracking-wider">QUẢN TRỊ QUYỀN</p>
           <div className="flex flex-col gap-0.5">
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <LayoutGrid size={16} />
                <span className="text-sm font-medium">Tổng quan tài sản số</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Layers size={16} />
                <span className="text-sm font-medium">Other Asset</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Link2 size={16} />
                <span className="text-sm font-medium">Facebook Assets</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <LinkIcon size={16} />
                <span className="text-sm font-medium">Khớp UID</span>
              </Link>
           </div>
        </div>

        {/* NHÂN SỰ */}
        <div className="px-3">
           <p className="text-[10px] font-bold text-slate-500 mb-2 px-2 uppercase tracking-wider">NHÂN SỰ</p>
           <div className="flex flex-col gap-0.5">
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Users size={16} />
                <span className="text-sm font-medium">Nhân viên</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Building size={16} />
                <span className="text-sm font-medium">Phòng ban</span>
              </Link>
           </div>
        </div>

        {/* KIỂM SOÁT RỦI RO */}
        <div className="px-3">
           <p className="text-[10px] font-bold text-slate-500 mb-2 px-2 uppercase tracking-wider">KIỂM SOÁT RỦI RO</p>
           <div className="flex flex-col gap-0.5">
              <Link href="#" className="flex items-center justify-between px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <ShieldAlert size={16} />
                  <span className="text-sm font-medium">Risk & Audit</span>
                </div>
                <span className="bg-red-950/80 text-red-400 text-[10px] font-bold px-1.5 py-0.5 rounded">5</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Activity size={16} />
                <span className="text-sm font-medium">Tình trạng đồng bộ</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <FileText size={16} />
                <span className="text-sm font-medium">Nhật ký hoạt động</span>
              </Link>
           </div>
        </div>

        {/* QUY TRÌNH */}
        <div className="px-3">
           <p className="text-[10px] font-bold text-slate-500 mb-2 px-2 uppercase tracking-wider">QUY TRÌNH</p>
           <div className="flex flex-col gap-0.5">
              <Link href="#" className="flex items-center justify-between px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} />
                  <span className="text-sm font-medium">Đề xuất & Duyệt</span>
                </div>
                <span className="bg-yellow-900/50 text-yellow-500 text-[10px] font-bold px-1.5 py-0.5 rounded">1</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <ClipboardList size={16} />
                <span className="text-sm font-medium">Yêu cầu của tôi</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <LogOut size={16} />
                <span className="text-sm font-medium">Offboarding</span>
              </Link>
           </div>
        </div>

        {/* HỆ THỐNG */}
        <div className="px-3 mb-4">
           <p className="text-[10px] font-bold text-slate-500 mb-2 px-2 uppercase tracking-wider">HỆ THỐNG</p>
           <div className="flex flex-col gap-0.5">
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Key size={16} />
                <span className="text-sm font-medium">API Tokens</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg transition-colors">
                <User size={16} />
                <span className="text-sm font-medium">Tài khoản</span>
              </Link>
           </div>
        </div>
        
      </div>
      
      <div className="p-4 flex flex-col gap-3 border-t border-slate-800 shrink-0">
        <button className="flex items-center justify-center gap-2 w-full py-2 bg-[#1e293b] text-slate-300 text-xs rounded hover:bg-slate-700 transition-colors border border-slate-700">
          <LifeBuoy size={14} /> Trung tâm hỗ trợ
        </button>
        <div className="flex items-center gap-2 text-[10px] text-slate-400 px-1">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Backend healthy
        </div>
      </div>
    </aside>
  );
}
