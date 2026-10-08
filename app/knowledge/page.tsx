"use client";
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Key, Sun, Bell, LogOut, Search, Maximize2, Hash, Sparkles, BookOpen } from 'lucide-react';

export default function KnowledgeBasePage() {
  const [activeCategory, setActiveCategory] = useState('dashboard');

  const menuDashboard = [
    "Tiến độ Cam kết 3 bên (MTD)",
    "Hàng KPI lõi (15 thẻ)",
    "Phễu chi phí → doanh thu",
    "Góc nhìn Vùng — Chi nhánh",
    "Trọng điểm theo Vùng (Vận hành)",
    "Nguồn–Kênh · Nguồn Data mới",
    "Phễu theo TAG_MKT",
    "Hiệu suất nhóm CS",
    "Theo dõi Lead & Lịch sử cuộc gọi",
    "Tỷ lệ chuyển đổi Inbox — Data — ...",
    "Đóng góp khách mới (2026)",
    "Giữ chân khách mới (2026)",
    "Xu hướng theo ngày"
  ];

  const menuActionPlan = [
    "Thanh lọc phạm vi (Command Bar)",
    "Trạng thái chi nhánh (4 mức)",
    "Điểm sức khỏe (Health Gauge)",
    "SOS Lane & Nhịp sức khỏe (Pulse)",
    "Lưới sức khỏe chi nhánh",
    "Nhận định AI (AI Box) & Phân tích sâu",
    "Chi tiết chi nhánh (Drawer)",
    "Bảng Cam kết MTD (trong chi tiết CN)",
    "% Khách khiếu nại",
    "Nhịp doanh thu theo tuần",
    "EBITDA Rescue (chi nhánh lỗ)",
    "Lịch MKT & Đề xuất hoạt động",
    "Cơ chế chấm điểm AI (ap-v14)"
  ];

  const menuTraCuu = [
    "Từ điển chỉ số",
    "Tra công thức nhanh",
    "Máy tính ví dụ"
  ];

  return (
    <div className="flex h-screen w-full bg-[#0b1120] overflow-hidden">
      
      {/* KHAI BÁO SIDEBAR ĐÃ ĐƯỢC TÁCH RA */}
      <Sidebar />

      {/* ================= KHỐI BÊN PHẢI ================= */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
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

        {/* ================= NỘI DUNG CƠ SỞ TRI THỨC ================= */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* INNER SIDEBAR */}
          <div className="w-72 bg-[#0b1120] border-r border-slate-800 flex flex-col shrink-0 p-4 overflow-hidden">
            <h2 className="text-xl font-bold text-white mb-2">Cơ sở tri thức</h2>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">Giải thích từng khối và công thức của trang Dashboard và Action Plan — tra cứu nhanh, dễ hiểu.</p>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
              <input 
                type="text" 
                placeholder="Tìm khối, chỉ số, công thức..." 
                className="w-full bg-[#1e293b] border border-slate-700 text-slate-300 text-xs rounded-md pl-9 pr-3 py-2 outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-6">
              
              {/* MENU DASHBOARD */}
              <div>
                <p 
                  onClick={() => setActiveCategory('dashboard')}
                  className={`text-[10px] font-bold mb-2 uppercase flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors ${activeCategory === 'dashboard' ? 'text-blue-400' : 'text-slate-500'}`}
                >
                  <span className={`w-3 h-3 border rounded-sm ${activeCategory === 'dashboard' ? 'border-blue-400 bg-blue-400/20' : 'border-slate-500'}`}></span> DASHBOARD SEOUL CENTER
                </p>
                {activeCategory === 'dashboard' && (
                  <ul className="flex flex-col gap-1 border-l border-slate-800 ml-1.5 pl-2.5">
                    {menuDashboard.map((item, idx) => (
                      <li key={idx} className={`text-xs cursor-pointer py-1 truncate transition-colors ${idx === 0 ? 'text-blue-400 font-medium' : 'text-slate-400 hover:text-white'}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* MENU ACTION PLAN */}
              <div>
                <p 
                  onClick={() => setActiveCategory('action-plan')}
                  className={`text-[10px] font-bold mb-2 uppercase flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors ${activeCategory === 'action-plan' ? 'text-blue-400' : 'text-slate-500'}`}
                >
                  <span className={`w-3 h-3 border rounded-sm ${activeCategory === 'action-plan' ? 'border-blue-400 bg-blue-400/20' : 'border-slate-500'}`}></span> ACTION PLAN CHI NHÁNH
                </p>
                {activeCategory === 'action-plan' && (
                  <ul className="flex flex-col gap-1 border-l border-slate-800 ml-1.5 pl-2.5">
                    {menuActionPlan.map((item, idx) => (
                      <li key={idx} className={`text-xs cursor-pointer py-1 truncate transition-colors ${idx === 5 ? 'text-blue-400 font-medium' : 'text-slate-400 hover:text-white'}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* MENU TRA CỨU */}
              <div>
                <p className="text-[10px] font-bold text-slate-500 mb-2 uppercase flex items-center gap-1.5">
                  <BookOpen size={12}/> TRA CỨU
                </p>
                <ul className="flex flex-col gap-1 ml-1.5 pl-2.5 border-l border-slate-800">
                  {menuTraCuu.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-400 hover:text-white cursor-pointer py-1 flex items-center gap-2">
                      <Hash size={10} className="opacity-50"/> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <main className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-[#0f1523]">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">

              {/* ======================= KHỐI DASHBOARD ======================= */}
              {activeCategory === 'dashboard' && (
                <>
                  {/* THẺ 14: Tiến độ Cam kết 3 bên (MTD) */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="grid grid-cols-2 gap-4 h-40">
                          <div className="bg-[#0f1523] border border-slate-800 rounded p-4"></div>
                          <div className="bg-[#0f1523] border border-slate-800 rounded p-4"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối A · Cam kết</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Tiến độ Cam kết 3 bên (MTD)</h2>
                      <p className="text-xs text-slate-400 mb-6">Theo dõi từ đầu tháng đến hiện tại (MTD) mỗi chi nhánh đã đạt bao nhiêu so với con số CAM KẾT của tháng. Có thanh tiến độ, thẻ tóm tắt và bảng từng chi nhánh.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Thanh "% ngày đã trôi" của tháng</li>
                        <li>Thẻ tóm tắt: Doanh thu, DT KH mới/cũ (%đạt + tiến độ theo mục tiêu tháng, kèm tỷ trọng trên tổng DT), Data FB/GG, Khách mới/cũ, TBK mới/cũ (thực đạt vs cam kết)</li>
                        <li>Bảng chi nhánh: Cam kết DT · Thực đạt · DT KH mới · DT KH cũ · % đạt</li>
                        <li>2 panel: chi nhánh đang Tụt và đang Vượt cam kết</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">% đạt (cả tháng) <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Doanh thu ÷ Cam kết DT</span></p>
                        <p className="text-[10px] text-slate-500">Phần cam kết tháng đã hoàn thành. Đầu tháng số nhỏ, đủ 100% là đạt cam kết.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">% theo nhịp độ (pace) <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Thực đạt ÷ (Cam kết × % ngày đã trôi)</span></p>
                        <p className="text-[10px] text-slate-500">Đang nhanh hay chậm so với mốc lẽ ra đạt tới hôm nay. Màu thanh dựa trên số này.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Lệch theo tiến độ <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Thực đạt - (Cam kết × % ngày đã trôi)</span></p>
                        <p className="text-[10px] text-slate-500">Đang dư hay hụt so với mốc kỳ vọng của hôm nay.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Màu thanh <span className="text-emerald-500 ml-2">≥100% xanh</span> <span className="text-orange-500 ml-2">{'<'}100% vàng</span> <span className="text-red-500 ml-2">{'<'}80% đỏ</span></p>
                        <p className="text-[10px] text-slate-500">Dựa trên % theo nhịp độ, không phải % cả tháng.</p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>% ngày đã trôi tính đến hết HÔM QUA (số ngày đã qua ÷ số ngày của tháng).</li>
                          <li>Đầu tháng nhiều chi nhánh chưa nhập cam kết/target — hiện "—".</li>
                          <li>Nếu lọc theo Nguồn-Kênh, con số % cam kết sẽ sai (có cảnh báo riêng).</li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Hàng KPI lõi (15 thẻ)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Phễu chi phí → doanh thu</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Bảng Cam kết MTD (trong chi tiết CN)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Nhịp độ (pace) & % ngày đã trôi</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 15: Hàng KPI lõi (15 thẻ) */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="grid grid-cols-5 gap-2 h-40">
                          <div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div><div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                          <div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div><div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                          <div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div><div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                          <div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div><div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                          <div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div><div className="bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối B · KPI</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Hàng KPI lõi (15 thẻ)</h2>
                      <p className="text-xs text-slate-400 mb-6">Bộ thẻ chỉ số chính của toàn hệ thống/chi nhánh: doanh thu, chi phí, hiệu quả quảng cáo, khách, giá... kèm so sánh với kỳ trước và biểu đồ nhỏ.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Doanh thu, Chi phí MKT, ROAS (Mới & LM)</li>
                        <li>Số Data mới, Số lịch, Khách mới/cũ</li>
                        <li>Giá Data mới, Giá lịch, Giá KH mới, TBK mới/cũ</li>
                        <li>Tỷ lệ chuyển đổi Data→Lịch, Lịch→Khách</li>
                        <li>So sánh kỳ: Hôm qua / 3 ngày / 7 ngày / cùng kỳ tháng trước</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">ROAS Mới <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">DT khách mới ÷ Chi phí MKT</span></p>
                        <p className="text-[10px] text-slate-500">1 đồng quảng cáo ra bao nhiêu đồng doanh thu khách mới.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">ROAS LM <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">DT khách mới (lịch mới) ÷ Chi phí MKT</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">Giá KH mới <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Chi phí MKT ÷ Số khách mới</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">Giá lịch mới <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Chi phí MKT ÷ Số lịch mới</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">TLCĐ Data→Lịch <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Số lịch mới ÷ Số Data (lead)</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">TLCĐ Lịch→Khách LM <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Số khách mới từ data ÷ Số lịch mới</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">% so kỳ trước <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">(Kỳ này - Kỳ trước) ÷ |Kỳ trước|</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>So "cùng kỳ" chỉ đúng khi đang xem tháng hiện tại.</li>
                          <li>Khách cũ = đếm khách khác nhau (không cộng theo ngày để tránh dội số).</li>
                          <li>Giá lead/giá khách/chi phí: giảm là tốt (xanh).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Phễu chi phí → doanh thu</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">ROAS</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">TBK (Tiền bình quân/khách)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 16: Phễu chi phí → doanh thu */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-2xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="flex flex-col gap-2 h-40 justify-center">
                          <div className="w-full h-3 bg-blue-900 rounded"><div className="w-[90%] h-full bg-blue-500 rounded"></div></div>
                          <div className="w-[80%] h-3 bg-indigo-900 rounded"><div className="w-[70%] h-full bg-indigo-500 rounded"></div></div>
                          <div className="w-[60%] h-3 bg-purple-900 rounded"><div className="w-[50%] h-full bg-purple-500 rounded"></div></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối C · Phễu</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Phễu chi phí → doanh thu</h2>
                      <p className="text-xs text-slate-400 mb-6">Nhìn dòng chảy từ tiền quảng cáo bỏ ra cho tới doanh thu thu về, qua từng bậc, để thấy đang rơi rụng ở khâu nào.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>6 bậc: Chi phí MKT → Số Data (lead) → Inbox → Số lịch mới → Khách mới → Doanh thu</li>
                        <li>Tỷ lệ chuyển đổi giữa các bậc</li>
                        <li>Biểu đồ ROAS & giá theo ngày</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Tỷ lệ chuyển <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Bậc sau ÷ Bậc trước</span></p>
                        <p className="text-[10px] text-slate-500">Vd Data→Lịch mới = Số lịch mới ÷ Số Data.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">ROAS <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">DT khách mới ÷ Chi phí MKT</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Inbox ở phễu này là tổng inbox (khác khối Tỷ lệ chuyển đổi phễu dùng inbox quảng cáo theo vùng).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Hàng KPI lõi (15 thẻ)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Tỷ lệ chuyển đổi Inbox → Data → Lịch → Khách</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 17: Góc nhìn Vùng — Chi nhánh */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="flex gap-4 h-48">
                          <div className="flex-1 bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                          <div className="flex-1 bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối D · Vùng</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Góc nhìn Vùng → Chi nhánh</h2>
                      <p className="text-xs text-slate-400 mb-6">Bảng ma trận + biểu đồ so sánh doanh thu, hiệu quả quảng cáo giữa các vùng và chi nhánh trong vùng.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Doanh thu, DT khách mới, Data, Khách, Chi phí theo vùng/CN</li>
                        <li>ROAS, TBK mới, %CR</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">ROAS Mới <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">DT khách mới ÷ Chi phí MKT</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">TBK mới <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">DT khách mới ÷ Số khách mới</span></p>
                        <p className="text-[10px] text-slate-500">Tiền bình quân mỗi khách mới mang lại.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">%CR (gộp) <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Trung bình có trọng số theo Số Data (lead)</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Tỷ số (ROAS, TBK, %CR) được tính lại từ TỔNG khi gộp vùng, không cộng trung bình thô.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Trọng điểm theo Vùng (Vận hành / MKT)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">ROAS</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 18: Trọng điểm theo Vùng */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-2xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="bg-[#0f1523] border border-slate-800 rounded p-2 h-40"></div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối D2 · Vùng</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Trọng điểm theo Vùng (Vận hành / MKT)</h2>
                      <p className="text-xs text-slate-400 mb-6">So thực đạt với TARGET đặt ra theo từng vùng, tách 2 góc nhìn: Vận hành (doanh số/khách) và MKT (theo kênh FB/GG/TikTok).</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>DS tổng/mới/cũ, khách mới/cũ, TBK vs target</li>
                        <li>MKT: Data theo kênh FB/GG/TikTok vs target</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">% đạt <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Thực đạt ÷ Target</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">Lệch theo tiến độ <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Thực đạt - (Target × % ngày đã trôi)</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Ngưỡng tô xanh là mốc theo nhịp độ (pace); target tháng đang dở tính trọn tháng.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Tiến độ Cam kết 3 bên (MTD)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Nguồn-Kênh → Nguồn Data mới</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 19: Nguồn-Kênh */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="flex gap-4 h-40">
                          <div className="flex-1 bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                          <div className="flex-1 bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối E · Nguồn</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Nguồn-Kênh → Nguồn Data mới</h2>
                      <p className="text-xs text-slate-400 mb-6">Xem Data mới đến từ nguồn/kênh nào và mỗi nguồn hiệu quả ra sao (giá, tỷ lệ ra khách, ROAS).</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Cơ cấu Data theo Nguồn-Kênh</li>
                        <li>Chi phí · Doanh thu · ROAS theo nguồn</li>
                        <li>Bảng nguồn (cha=Nguồn-Kênh, con=Nguồn lead)</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">Giá Data <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Chi phí MKT ÷ Số Data</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">CR% <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Số khách mới ÷ Số Data</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">TBK mới <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">DT khách mới ÷ Số khách mới</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">ROAS <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">DT khách mới ÷ Chi phí MKT</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Trong hệ thống, "Nguồn - Kênh" là nguồn lớn còn "Nguồn lead" là kênh chi tiết (ngược tên gọi thường nghĩ).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Phễu theo TAG_MKT</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">%CR (tỷ lệ chuyển đổi)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 20: Phễu theo TAG_MKT */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-2xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="bg-[#0f1523] border border-slate-800 rounded p-2 h-40"></div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối F · Nguồn</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Phễu theo TAG_MKT</h2>
                      <p className="text-xs text-slate-400 mb-6">Bóc Data mới theo nhãn chiến dịch (TAG) để biết chiến dịch nào kéo nhiều lead và hiệu quả ra sao.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Số Data theo TAG</li>
                        <li>Bảng chỉ số theo TAG + tỷ trọng</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">Tỷ trọng <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Data của TAG ÷ Tổng Data</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Dòng "KHÔNG TAG" vẫn giữ để tổng khớp (không bấm lọc được).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Nguồn-Kênh → Nguồn Data mới</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 21: Hiệu suất nhóm CS */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="flex gap-4 h-40">
                          <div className="flex-1 bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                          <div className="flex-1 bg-[#0f1523] border border-slate-800 rounded p-2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối G · Nhân sự</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Hiệu suất nhóm CS</h2>
                      <p className="text-xs text-slate-400 mb-6">Xem khối lượng và hiệu quả chăm sóc của từng phòng ban / nhân sự CS.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Số lượt CS, Số Data CS, Số Data mới</li>
                        <li>TB lượt CS, %CR</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">TB lượt CS <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Số Lượt CS ÷ Số Data CS</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">%CR (gộp) <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Trung bình có trọng số theo Số Data</span></p>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">%CR (tỷ lệ chuyển đổi)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 22: Theo dõi Lead & Lịch sử cuộc gọi */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="bg-[#0f1523] border border-slate-800 rounded p-2 h-40"></div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối G · Nhân sự</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Theo dõi Lead & Lịch sử cuộc gọi</h2>
                      <p className="text-xs text-slate-400 mb-6">Đánh giá kho lead theo TOÀN BỘ lịch sử cuộc gọi (không chỉ kết quả cuộc gọi gần nhất): mỗi lead được xếp vào trạng thái TỐT NHẤT từng đạt.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>6 thẻ KPI: Tổng lead, % kết nối được, % không kết nối được, % có lịch, % thành khách</li>
                        <li>Cột chồng % nhóm lịch sử theo chi nhánh + 2 thanh so lệch "tag cuối vs lịch sử"</li>
                        <li>Bảng chéo Tag cuối × lịch sử gọi, bảng Ngày × NV (theo tag cuối), phễu lead</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">5 nhóm lịch sử <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Ưu tiên: Từng tích cực → Từng kết nối chưa chốt → Kết nối, không tiềm năng → Sai/nhầm số → Không kết nối được</span></p>
                        <p className="text-[10px] text-slate-500">Lead dính nhóm cao là đứng nhóm đó — từng đặt lịch thì mãi là "từng tích cực", dù cuộc gọi gần nhất không bắt máy.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">% kết nối được <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">(Từng tích cực + Từng kết nối chưa chốt + Kết nối, không tiềm năng) ÷ Tổng lead</span></p>
                        <p className="text-[10px] text-slate-500">Từng nói chuyện được ít nhất 1 lần trong lịch sử — kể cả sau đó khách từ chối.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">% không kết nối được <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Lead cả lịch sử chỉ toàn không nghe máy/thuê bao/block ÷ Tổng lead</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>Lịch sử xét TOÀN THỜI GIAN (lead tháng này từng nghe máy tháng trước vẫn tính); bộ lọc chi nhánh/nguồn vẫn áp bình thường.</li>
                          <li>Số ở đây LỆCH với cách đếm theo tag cuối là bình thường — tag cuối xoá quá khứ, lịch sử thì không.</li>
                          <li>Bảng Ngày × NV vẫn theo tag cuối (đúng bản chất nhật ký kết quả gọi từng ngày).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Hiệu suất nhóm CS</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 23: Tỷ lệ chuyển đổi Inbox */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="bg-[#0f1523] border border-slate-800 rounded p-2 h-40"></div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối H · Phễu</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Tỷ lệ chuyển đổi Inbox → Data → Lịch → Khách</h2>
                      <p className="text-xs text-slate-400 mb-6">Phễu chuyển đổi cho nhóm khách MỚI trong tháng, đo từ tin nhắn (inbox quảng cáo) tới khi thành khách.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Inbox→Data</li>
                        <li>Data→Lịch</li>
                        <li>Lịch→Khách (đều tính trên cohort mới)</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">Inbox→Data <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">Lead FB ÷ Inbox quảng cáo</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">Data→Lịch <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">Số lịch mới ÷ Số Data</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">Lịch→Khách <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">Khách mới từ data ÷ Số lịch mới</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>Chỉ tính cohort "mới trong tháng" — không dùng tổng số lịch/khách (tránh lẫn lead cũ).</li>
                          <li>Inbox chỉ tính page chạy quảng cáo, ánh xạ theo vùng/chi nhánh qua bảng page→chi nhánh.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Phễu chi phí → doanh thu</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Inbox quảng cáo</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 24: Đóng góp khách mới */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="bg-[#0f1523] border border-slate-800 rounded p-2 h-40"></div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối H2 · Khách mới</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Đóng góp khách mới (2026)</h2>
                      <p className="text-xs text-slate-400 mb-6">Xem khách MỚI tạo trong năm 2026 mua sắm ra sao (mua mấy lần, hóa đơn to hay nhỏ) và doanh thu tháng đang xem đến từ lứa khách tạo tháng nào.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Bảng 3 góc nhìn: theo Số hóa đơn / khách, theo Nhóm giá trị hóa đơn, theo Số SP-DV / khách (nhóm cuối là "6 trở lên", không chốt max)</li>
                        <li>Biểu đồ: doanh thu tháng đang lọc chia theo lứa khách (khách cũ {'<'}2026 + khách mới từng tháng 2026), kèm dòng Tổng</li>
                        <li>Bảng "Khách 1 hóa đơn, chưa quay lại": mỗi lứa khách theo tháng tạo ID còn bao nhiêu khách đến nay vẫn chỉ có đúng 1 hóa đơn</li>
                        <li>Nút "Chỉ HĐ có tiền" để bỏ hóa đơn 0đ (tặng/bảo hành)</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">%Khách <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">Số khách của nhóm ÷ Tổng khách</span></p>
                        <p className="text-[10px] text-slate-500">Nhóm nào đông khách nhất.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">%DT <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">DT của nhóm ÷ Tổng DT</span></p>
                        <p className="text-[10px] text-slate-500">Nhóm nào mang nhiều tiền nhất — thường lệch với %Khách.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">TB DT/khách <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">DT của nhóm ÷ Số khách của nhóm</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Biểu đồ (quy về DT dashboard) <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">DT Lứa khách × (DT dashboard của tháng ÷ Tổng DT hóa đơn của tháng)</span></p>
                        <p className="text-[10px] text-slate-500">Giữ nguyên cơ cấu % giữa các lứa, chỉnh tổng cho khớp số DT chuẩn của dashboard.</p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>Bảng dùng GIÁ TRỊ HÓA ĐƠN tạo trong kỳ — CHƯA trừ hoàn hủy/công nợ/tiền chưa thực thu; biểu đồ đã quy tổng về DT dashboard.</li>
                          <li>Chạy trên dataset khiếu nại/doanh thu (khác dataset chính) — giờ refresh có thể lệch nhau.</li>
                          <li>Chỉ tính chi nhánh Seoul Center — hóa đơn brand khác (SHARK/PHẪU) đã loại để khớp số khách mới của dashboard.</li>
                          <li>Biểu đồ luôn tính đủ cả năm, chỉ ăn bộ lọc tháng (chọn tháng nào xem tháng đó) + khu vực/chi nhánh.</li>
                          <li>Bảng "1 HĐ, chưa quay lại" luôn tính cả năm đến nay (bỏ bộ lọc tháng) — lứa tạo trong ~2 tháng gần đây gắn nhãn (mới) vì chưa đủ thời gian kết luận.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Giữ chân khách mới (2026)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Hàng KPI lõi (15 thẻ)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 25: Giữ chân khách mới */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="bg-[#0f1523] border border-slate-800 rounded p-2 h-40"></div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối H3 · Khách mới</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Giữ chân khách mới (2026)</h2>
                      <p className="text-xs text-slate-400 mb-6">Ma trận theo dõi từng lứa khách mới (theo tháng tạo ID) còn bao nhiêu % quay lại phát sinh hóa đơn ở các tháng sau — đếm theo SỐ KHÁCH, không theo tiền. Khác khối H2: H2 đo tiền, H3 đo người.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Mỗi hàng = lứa khách mới 1 tháng, kèm quy mô (Số khách)</li>
                        <li>Mỗi ô = % khách của lứa còn có hóa đơn trong tháng đó, màu đậm dần theo %</li>
                        <li>Nút "Chỉ HĐ có tiền" để chỉ tính lần quay lại có thanh toán thật</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">% giữ chân <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">Số khách của lứa có HĐ trong tháng ÷ Quy mô lứa</span></p>
                        <p className="text-[10px] text-slate-500">Vd lứa T1 có 3.500 khách, tháng 8 còn 480 khách có HĐ → giữ chân ~14%.</p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>Ô chéo (tháng tạo = tháng HĐ) thường ≈100% vì khách hay mua ngay tháng tạo ID.</li>
                          <li>1 khách quay lại nhiều lần trong tháng vẫn chỉ đếm 1 — đây là đếm người, không đếm lượt.</li>
                          <li>Luôn trải cả năm 2026, chỉ ăn bộ lọc khu vực/chi nhánh · dataset khiếu nại/doanh thu.</li>
                          <li>Chỉ tính chi nhánh Seoul Center — đã loại hóa đơn brand khác (SHARK/PHẪU).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Đóng góp khách mới (2026)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 26: Xu hướng theo ngày */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 h-32 flex flex-col justify-between">
                         <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">NHỊP DOANH THU THEO TUẦN</p>
                         <div className="flex-1 w-full relative mt-4">
                           <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                             <path d="M0,35 L33,30 L66,20 L100,5" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                         </div>
                         <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold">
                            <span>Tuần 3: 294,8 Tr</span>
                            <span>Tuần 4: 364,1 Tr</span>
                            <span>Tuần 5: 509,9 Tr</span>
                         </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Dashboard Seoul Center</span>
                        <span className="text-[10px] text-slate-500">Khối I · Xu hướng</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Xu hướng theo ngày</h2>
                      <p className="text-xs text-slate-400 mb-6">Biểu đồ diễn biến từng ngày trong kỳ của các chỉ số chính.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Doanh thu, Chi phí MKT, Số Data, ROAS theo ngày (cột hoặc đường)</li>
                      </ul>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Hàng KPI lõi (15 thẻ)</span>
                      </div>
                    </div>
                  </div>
                </>
              )}


              {/* ======================= KHỐI ACTION PLAN ======================= */}
              {activeCategory === 'action-plan' && (
                <>
                  {/* THẺ 1: Thanh lọc phạm vi */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-4 border-b border-slate-800 relative">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <div className="flex bg-[#1e293b] rounded-md p-0.5 text-xs font-medium border border-slate-700">
                          <button className="bg-blue-600 text-white px-4 py-1.5 rounded shadow-sm">Tất cả</button>
                          <button className="text-slate-400 px-4 py-1.5 rounded">SC</button>
                          <button className="text-slate-400 px-4 py-1.5 rounded">SCC</button>
                        </div>
                        <select className="bg-[#1e293b] border border-slate-700 text-slate-300 text-xs rounded-md px-3 py-2 outline-none w-40">
                          <option>Toàn hệ thống</option>
                        </select>
                        <select className="bg-[#1e293b] border border-slate-700 text-slate-300 text-xs rounded-md px-3 py-2 outline-none w-40">
                          <option>Tất cả chi nhánh</option>
                        </select>
                        <div className="flex items-center gap-2 bg-[#312e81]/30 border border-[#312e81] text-indigo-300 text-xs px-3 py-1.5 rounded-md">
                          AI tự chấm sau 10h sáng (1 lần/ngày)
                        </div>
                        <button className="ml-auto bg-blue-600 text-white text-xs px-4 py-1.5 rounded-md">+ Nhập liệu</button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Bộ lọc</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Thanh lọc phạm vi (Command Bar)</h2>
                      <p className="text-xs text-slate-400 mb-6">Chọn xem theo Thương hiệu → Vùng → Chi nhánh. Chi nhánh cụ thể ưu tiên hơn vùng, vùng ưu tiên hơn thương hiệu.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Chọn Brand (SC/SCC) - Vùng - Chi nhánh</li>
                        <li>Chip chế độ AI</li>
                        <li>Nút "Chạy lại AI" (super admin) và "Nhập liệu"</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">Thứ tự ưu tiên <span className="text-blue-400 ml-2">Chi nhánh {'>'} Vùng {'>'} Thương hiệu {'>'} Tất cả</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>AI tự chấm 1 lần/ngày sau 10h sáng (khi dữ liệu Power BI đã kéo xong).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Trạng thái chi nhánh (4 mức)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Nhận định AI (AI Box) & Phân tích sâu</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 2: Trạng thái chi nhánh */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="bg-[#111827] border border-slate-800 rounded p-4 flex items-center justify-between w-full max-w-2xl mt-4">
                         <div className="flex items-center gap-4">
                           <div className="text-2xl font-bold text-white border-l-2 border-red-500 pl-2">35</div>
                           <div>
                             <div className="flex items-center gap-2">
                               <span className="text-sm font-bold text-white">Bà Rịa (78)</span>
                               <span className="text-[9px] bg-red-950/40 text-red-500 border border-red-900 px-1.5 rounded">Nguy cấp</span>
                             </div>
                             <p className="text-[9px] text-slate-500 mt-1">TMV HCM - DNB · QL: --- · Cập nhật 09:26:05 3/8/2026</p>
                           </div>
                         </div>
                         <div className="text-right">
                           <p className="text-[10px] text-slate-400">Tỷ lệ đạt cam kết tháng</p>
                           <p className="text-lg font-bold text-white">2.9%</p>
                         </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Trạng thái chi nhánh (4 mức)</h2>
                      <p className="text-xs text-slate-400 mb-6">Nhãn sức khỏe của chi nhánh. Quan trọng: trạng thái do HỆ THỐNG tự tính theo ngưỡng cứng về doanh thu, KHÔNG để AI tự gán.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Nguy cấp · Rủi ro cao · Cần chú ý · Ổn định</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Tỷ lệ theo tiến độ (ratio) <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Doanh thu ÷ (Target × % ngày đã trôi)</span></p>
                        <p className="text-[10px] text-slate-500">So thực đạt với mức lẽ ra đạt tới hôm nay.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium mb-3">Ngưỡng gán trạng thái <span className="text-red-500 ml-2">{'<'}80% Nguy cấp</span> <span className="text-orange-500 ml-2">{'<'}100% Rủi ro cao</span> <span className="text-yellow-500 ml-2">{'<'}105% Cần chú ý</span> <span className="text-emerald-500 ml-2">≥105% Ổn định</span></p>
                        <div className="flex w-full h-2 rounded-full overflow-hidden mb-1">
                          <div className="bg-red-500 w-[40%]"></div>
                          <div className="bg-orange-500 w-[20%]"></div>
                          <div className="bg-yellow-500 w-[20%]"></div>
                          <div className="bg-emerald-500 w-[20%]"></div>
                        </div>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>Thiếu doanh thu/target/số ngày → không tính được → mới dùng trạng thái AI đề xuất.</li>
                          <li>Đầu tháng doanh thu nhỏ nên dễ rơi "Nguy cấp" dù chỉ mới mấy ngày — đó là do nhịp độ, không phải kết quả cuối tháng.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Điểm sức khỏe (Health Gauge)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Bảng Cam kết MTD (trong chi tiết CN)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 3: Điểm sức khỏe */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center h-48">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative w-[160px] h-[80px] flex items-end justify-center">
                          <svg height="80" width="160" className="absolute bottom-0">
                            <path strokeDasharray="188.4 188.4" style={{ strokeDashoffset: 0 }} strokeWidth="16" stroke="#1e293b" fill="transparent" r="60" cx="80" cy="80" strokeLinecap="round" d="M 16,80 a 60,60 0 0,1 120,0" />
                            <path strokeDasharray="188.4 188.4" style={{ strokeDashoffset: 188.4 - (35/100)*188.4 }} strokeWidth="16" stroke="#ef4444" fill="transparent" r="60" cx="80" cy="80" strokeLinecap="round" d="M 16,80 a 60,60 0 0,1 120,0" />
                          </svg>
                          <div className="absolute bottom-0 flex items-baseline gap-0.5 translate-y-2">
                            <span className="text-5xl font-bold text-white leading-none">35</span>
                            <span className="text-lg text-slate-500 font-medium">/100</span>
                          </div>
                        </div>
                        <span className="text-sm font-bold mt-4 text-red-500">Nguy cấp</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Sức khỏe</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Điểm sức khỏe (Health Gauge)</h2>
                      <p className="text-xs text-slate-400 mb-6">Vòng tròn 0–100 thể hiện sức khỏe tổng thể chi nhánh, do AI chấm dựa trên nhiều yếu tố.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Điểm 0–100</li>
                        <li>Màu theo trạng thái (xanh–đỏ)</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Độ điền vòng <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Chu vi × (1 - điểm ÷ 100)</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">Điểm <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">AI chấm 0-100 (trạng thái vẫn do hệ thống ghi đè theo ngưỡng cứng)</span></p>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Trạng thái chi nhánh (4 mức)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Nhận định AI (AI Box) & Phân tích sâu</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 4: SOS Lane */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full mt-4">
                        <div className="flex items-center gap-2 mb-2">
                           <span className="text-red-500">⚠️</span>
                           <span className="text-xs font-bold text-white uppercase">CẦN BAN LÃNH ĐẠO CAN THIỆP</span>
                           <span className="text-[10px] text-slate-500">AI xếp hạng theo mức khẩn — kèm lý do, không chỉ dán màu · 22 chi nhánh</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                           <div className="bg-[#111827] border border-slate-700 rounded p-3">
                             <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold text-white">Bà Rịa</span>
                                <span className="bg-red-950/40 text-red-500 text-[9px] px-1 rounded">Nguy cấp</span>
                             </div>
                             <p className="text-[9px] text-slate-400">Doanh thu tháng 17,1M ở mức 10% tháng chỉ đạt 29,3% mức kỳ vọng theo tiến độ target 585,9M, cho thấy nhịp tạo doanh thu đầu tháng rất chậm...</p>
                           </div>
                           <div className="bg-[#111827] border border-slate-700 rounded p-3">
                             <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold text-white">Bảo Lộc - Lâm Đồng</span>
                                <span className="bg-red-950/40 text-red-500 text-[9px] px-1 rounded">Nguy cấp</span>
                             </div>
                             <p className="text-[9px] text-slate-400">Doanh thu tháng 8 mới 20,9M so với mức kỳ vọng tiến độ ~52,2M (521,5M x 10%), chỉ đạt ~40,1% nên status bắt buộc ở mức crit...</p>
                           </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Sức khỏe</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">SOS Lane & Nhịp sức khỏe (Pulse)</h2>
                      <p className="text-xs text-slate-400 mb-6">SOS chỉ hiện các chi nhánh Nguy cấp cần can thiệp gấp. Nhịp sức khỏe là 5 ô đếm nhanh theo trạng thái, bấm để lọc lưới.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>SOS: chỉ chi nhánh Nguy cấp, yếu nhất trước</li>
                        <li>5 ô: Tất cả / Nguy cấp / Rủi ro cao / Cần chú ý / Ổn định</li>
                      </ul>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Rủi ro cao/Cần chú ý không vào SOS (đã có ở lưới); SOS rỗng thì ẩn hẳn.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Trạng thái chi nhánh (4 mức)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 5: Lưới sức khỏe */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-64 bg-[#111827] border border-slate-700 rounded-lg p-4 mt-4">
                        <div className="flex justify-between items-start mb-2">
                           <span className="text-xs font-bold text-white">Bà Rịa</span>
                           <span className="text-[8px] bg-red-950/40 text-red-500 px-1 border border-red-900 rounded">Nguy cấp</span>
                        </div>
                        <div className="flex justify-center my-3 text-red-500 font-bold text-2xl">
                          35<span className="text-sm text-slate-500">/100</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-800 pt-2 mb-2 text-[8px] text-center">
                           <div className="flex-1">Hôm nay: —</div>
                           <div className="flex-1">Sắp tới: —</div>
                           <div className="flex-1">Vấn đề: 0</div>
                        </div>
                        <div className="text-[8px] text-slate-400 bg-[#0f1523] p-2 rounded">
                           <span className="text-indigo-400 font-bold">✨ Nhận định AI</span> Doanh thu mới đạt 17.1M, chỉ tương đương ~29.3% mức kỳ vọng...
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Sức khỏe</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Lưới sức khỏe chi nhánh</h2>
                      <p className="text-xs text-slate-400 mb-6">Mỗi chi nhánh một thẻ, xếp chi nhánh yếu nhất lên trước, kèm điểm sức khỏe, trạng thái và số việc đang mở.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Gauge điểm</li>
                        <li>Badge trạng thái + "Quá hạn"</li>
                        <li>"Vấn đề" = số hành động đang mở</li>
                        <li>Tóm tắt nhận định AI</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Vấn đề <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Số hành động đang mở của chi nhánh</span></p>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Điểm sức khỏe (Health Gauge)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Nhận định AI (AI Box) & Phân tích sâu</span>
                      </div>
                    </div>
                  </div>

                  
                  {/* THẺ 6: Nhận định AI */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded z-10">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white z-10"><Maximize2 size={14}/></button>

                      {/* MOCKUP GIAO DIỆN PHÂN TÍCH SÂU & KPI */}
                      <div className="w-full max-w-4xl h-[450px] overflow-y-auto custom-scrollbar bg-[#0f1523] border border-slate-700 rounded-lg p-5 mt-4 relative shadow-2xl">
                        
                        {/* Header Drawer */}
                        <div className="flex items-center justify-between border-l-[3px] border-red-500 pl-3 mb-6 relative">
                          <div className="flex items-center gap-3">
                             <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center font-bold text-white text-sm border border-slate-600 shadow-sm">35</div>
                             <div>
                               <div className="flex items-center gap-2">
                                 <h3 className="text-white font-bold text-base">Bà Rịa <span className="text-slate-500 font-normal">(78)</span></h3>
                                 <span className="bg-red-950/50 text-red-500 text-[9px] px-1.5 py-0.5 rounded border border-red-900/50 font-medium">Nguy cấp</span>
                                 <button className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] px-3 py-1 rounded ml-2 transition-colors font-medium shadow-sm">
                                   <Sparkles size={12}/> Phân tích sâu
                                 </button>
                                 <button className="flex items-center gap-1 bg-[#1e293b] hover:bg-slate-700 text-slate-300 text-[10px] px-3 py-1 rounded border border-slate-700 transition-colors font-medium">
                                   Lịch hoạt động
                                 </button>
                               </div>
                               <p className="text-[9px] text-slate-500 mt-0.5">TMV HCM - ĐNB · QL: — · Cập nhật 09:26:05 3/8/2026</p>
                             </div>
                          </div>
                          <div className="text-right pr-6">
                             <p className="text-[9px] text-slate-400 mb-0.5">Tỷ lệ đạt cam kết tháng</p>
                             <p className="text-white font-bold text-base">2.9%</p>
                          </div>
                        </div>

                        {/* Cam kết MTD */}
                        <div className="bg-[#111827] border border-slate-800 rounded-lg p-4 mb-4">
                          <h4 className="text-xs font-bold text-white mb-3">Cam kết MTD</h4>
                          <table className="w-full text-left">
                             <thead className="text-[9px] text-slate-500 border-b border-slate-800">
                               <tr>
                                 <th className="pb-2 font-normal uppercase tracking-wider">CHI NHÁNH</th>
                                 <th className="pb-2 font-normal uppercase tracking-wider">TÌNH TRẠNG</th>
                                 <th className="pb-2 font-normal uppercase tracking-wider">CAM KẾT DT</th>
                                 <th className="pb-2 font-normal uppercase tracking-wider">THỰC ĐẠT</th>
                                 <th className="pb-2 font-normal uppercase tracking-wider">% ĐẠT CAM KẾT</th>
                               </tr>
                             </thead>
                             <tbody className="text-slate-300 text-[10px]">
                               <tr className="border-b border-slate-800/50">
                                 <td className="py-3">
                                   <p className="font-bold text-white text-xs">BÀ RỊA</p>
                                   <p className="text-[8px] text-slate-500 mt-0.5">TMV HCM - ĐNB</p>
                                 </td>
                                 <td className="py-3"><span className="bg-[#1e293b] text-[8px] px-2 py-1 rounded text-slate-400 font-medium">HOẠT ĐỘNG</span></td>
                                 <td className="py-3 font-medium text-slate-400">585,9 tr</td>
                                 <td className="py-3 font-medium">17,1 tr</td>
                                 <td className="py-3 flex items-center gap-2 font-bold text-white">2,9% <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="w-[10%] h-full bg-red-500"></div></div></td>
                               </tr>
                               <tr>
                                 <td className="py-3 font-bold text-white text-xs">Tổng cộng</td>
                                 <td className="py-3"></td>
                                 <td className="py-3 text-slate-500 font-medium">585,9 tr</td>
                                 <td className="py-3 text-white font-bold">17,1 tr</td>
                                 <td className="py-3 flex items-center gap-2 text-white font-bold">2,9% <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="w-[10%] h-full bg-red-500"></div></div></td>
                               </tr>
                             </tbody>
                          </table>
                        </div>

                        {/* KPI Cards */}
                        <div className="bg-[#111827] border border-slate-800 rounded-lg p-4 mb-4">
                          <div className="flex justify-between items-end mb-4">
                            <div>
                              <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-0.5">B · HÀNG KPI LÕI</p>
                              <h4 className="text-sm font-bold text-white">Chỉ số KPI tổng quan</h4>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-[9px] text-slate-500 uppercase tracking-wider">THỂ HIỆN</span>
                              <div className="flex bg-[#0f1523] border border-slate-800 rounded p-0.5 text-[9px]">
                                <button className="px-3 py-1.5 text-slate-400 hover:text-white transition-colors">Hôm qua</button>
                                <button className="px-3 py-1.5 text-slate-400 hover:text-white transition-colors">3 ngày</button>
                                <button className="px-3 py-1.5 text-slate-400 hover:text-white transition-colors">7 ngày</button>
                                <button className="px-3 py-1.5 bg-[#1e293b] text-white rounded shadow-sm font-medium">Tháng này (cùng kỳ)</button>
                                <button className="px-3 py-1.5 text-slate-400 hover:text-white transition-colors">Tùy chỉnh</button>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-5 gap-3">
                             {[
                               { title: "Doanh thu", val: "17,1 tr", trend: "▲ 194,2%", trendColor: "text-emerald-500", down: false },
                               { title: "Chi phí MKT", val: "4,7 tr", trend: "▲ 6,8%", trendColor: "text-red-500", down: false },
                               { title: "ROAS Mới", val: "1,81", trend: "▲ 416,6%", trendColor: "text-emerald-500", down: true },
                               { title: "ROAS LM", val: "0,18", trend: "", trendColor: "", down: false },
                               { title: "SL Data mới", val: "8", trend: "▲ 100%", trendColor: "text-emerald-500", down: false },
                               { title: "SL lịch", val: "54", trend: "▲ 17,4%", trendColor: "text-emerald-500", down: true },
                               { title: "KH mới", val: "7", trend: "▲ 600%", trendColor: "text-emerald-500", down: true },
                               { title: "KH cũ", val: "42", trend: "▲ 55,6%", trendColor: "text-emerald-500", down: false },
                               { title: "Giá Data mới", val: "590.821 đ", trend: "▼ 46,6%", trendColor: "text-emerald-500", down: true },
                               { title: "Giá lịch", val: "1,6 tr", trend: "▼ 64,4%", trendColor: "text-emerald-500", down: true },
                               { title: "Giá KH mới", val: "675.224 đ", trend: "▼ 84,7%", trendColor: "text-emerald-500", down: false },
                               { title: "TBK mới", val: "1.221.271,43", trend: "▼ 21,2%", trendColor: "text-red-500", down: false },
                               { title: "TBK cũ", val: "204.547,55", trend: "▲ 29,1%", trendColor: "text-emerald-500", down: true },
                               { title: "TLCĐ Data→Lịch", val: "37,5%", trend: "▲ 50%", trendColor: "text-emerald-500", down: false },
                               { title: "TLCĐ Lịch→Khách", val: "33,3%", trend: "", trendColor: "", down: false },
                             ].map((kpi, idx) => (
                                <div key={idx} className="bg-[#0f1523] border border-slate-800/80 rounded-lg p-3 relative h-20 flex flex-col justify-between overflow-hidden group hover:border-slate-600 transition-colors cursor-pointer shadow-sm">
                                  <div className="flex justify-between items-start relative z-10">
                                     <span className="text-[10px] text-slate-400 font-medium">{kpi.title}</span>
                                     {kpi.trend && <span className={`text-[9px] font-bold ${kpi.trendColor}`}>{kpi.trend}</span>}
                                  </div>
                                  <div className="text-base font-bold text-white relative z-10 truncate">{kpi.val}</div>
                                  <div className="absolute bottom-1.5 left-0 w-full h-6 opacity-70 pointer-events-none px-2">
                                    <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full drop-shadow-md">
                                       <path d={kpi.down ? "M0,2 L50,12 L100,18" : "M0,18 L50,8 L100,2"} fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                             ))}
                          </div>
                        </div>

                        {/* % Khách khiếu nại */}
                        <div className="w-80 bg-[#111827] border border-slate-800 rounded-lg p-5">
                           <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-3">% KHÁCH KHIẾU NẠI</p>
                           <p className="text-2xl font-bold text-yellow-500 mb-1">4,1% <span className="text-xs font-normal text-slate-400 ml-1">· 2 ticket</span></p>
                           <p className="text-[10px] text-slate-400 mt-2">Chủ yếu do <span className="font-bold text-white">DO KHÁCH HÀNG</span> (1 KN)</p>
                        </div>

                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">AI</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Nhận định AI (AI Box) & Phân tích sâu</h2>
                      <p className="text-xs text-slate-400 mb-6">Phần AI đọc số liệu chi nhánh rồi viết: tóm tắt tình hình, nguyên nhân, và ĐỀ XUẤT hành động. Admin bấm ✓ để biến đề xuất thành việc giao cho người phụ trách.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Tóm tắt · Nguyên nhân · So với lần chấm trước</li>
                        <li>Đề xuất hành động (duyệt → tạo việc)</li>
                        <li>Nút "Phân tích sâu" (admin) — AI tra thêm web</li>
                      </ul>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>Đề xuất đã tạo việc rồi sẽ được ẩn (chống trùng theo tên).</li>
                          <li>Chế độ thường không tra web; "Phân tích sâu" mới tra web và cho thêm 5-8 đề xuất.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Cơ chế chấm điểm AI (ap-v14)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Trạng thái chi nhánh (4 mức)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 7: Chi tiết chi nhánh */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-2xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2">
                           <span className="text-xs text-white font-bold">Bà Rịa (78)</span>
                           <span className="text-[10px] text-slate-400">Tỷ lệ đạt cam kết: 2.9%</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2 text-[8px] text-slate-400">
                           <div className="bg-[#0f1523] p-2 rounded text-center">Cam kết MTD</div>
                           <div className="bg-[#0f1523] p-2 rounded text-center">Doanh thu</div>
                           <div className="bg-[#0f1523] p-2 rounded text-center">SL Lead</div>
                           <div className="bg-[#0f1523] p-2 rounded text-center">ROAS</div>
                           <div className="bg-[#0f1523] p-2 rounded text-center">TBK</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Chi tiết</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Chi tiết chi nhánh (Drawer)</h2>
                      <p className="text-xs text-slate-400 mb-6">Cửa sổ tổng hợp mọi thứ của 1 chi nhánh: cam kết, KPI, khiếu nại, nhịp tuần, nhận định AI, hành động, EBITDA...</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Header: gauge + trạng thái + "Tỷ lệ đạt cam kết tháng"</li>
                        <li>Bảng Cam kết MTD, 15 thẻ KPI, khiếu nại, biểu đồ tuần</li>
                        <li>Nhận định/nguyên nhân/đề xuất AI, hành động mở</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Tỷ lệ đạt cam kết tháng <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Doanh thu ÷ Target</span></p>
                        <p className="text-[10px] text-slate-500">Phần cam kết tháng đã đạt (tuyệt đối, không điều chỉnh theo ngày).</p>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Bảng Cam kết MTD (trong chi tiết CN)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">% Khách khiếu nại</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 8: Bảng Cam kết MTD */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-2xl bg-[#111827] border border-slate-700 rounded p-4 mt-4">
                         <p className="text-xs text-white font-bold mb-3">Cam kết MTD</p>
                         <table className="w-full text-[10px] text-slate-400 text-left">
                           <thead className="border-b border-slate-700">
                             <tr>
                               <th className="py-2">CHI NHÁNH</th>
                               <th>TÌNH TRẠNG</th>
                               <th>CAM KẾT DT</th>
                               <th>THỰC ĐẠT</th>
                               <th>% ĐẠT CAM KẾT</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr className="border-b border-slate-800">
                               <td className="py-2"><span className="text-white font-bold">BÀ RỊA</span><br/><span className="text-[8px]">TMV HCM - DNB</span></td>
                               <td><span className="bg-slate-800 px-1 rounded">HOẠT ĐỘNG</span></td>
                               <td>585,9 tr</td>
                               <td>17,1 tr</td>
                               <td className="flex items-center gap-1 font-bold text-white">2,9% <div className="w-12 h-1 bg-slate-800 rounded overflow-hidden"><div className="w-[10%] h-full bg-red-500"></div></div></td>
                             </tr>
                           </tbody>
                         </table>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Cam kết</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Bảng Cam kết MTD (trong chi tiết CN)</h2>
                      <p className="text-xs text-slate-400 mb-6">Bảng cam kết cho riêng chi nhánh đang xem. Cột % cho biết đã đạt bao nhiêu phần của cam kết tháng.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Chi nhánh · Tình trạng · Cam kết DT · Thực đạt · % đạt cam kết</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">% đạt cam kết <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Doanh thu ÷ Cam kết DT</span></p>
                        <p className="text-[10px] text-slate-500">Tuyệt đối cả tháng: đủ 100% = đạt cam kết tháng.</p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6 flex flex-col gap-1">
                        <p className="text-xs text-slate-300 font-medium">Màu thanh <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Theo nhịp độ = Doanh thu ÷ (Cam kết × % ngày đã trôi)</span></p>
                        <p className="text-[10px] text-slate-500">Để đầu tháng số nhỏ nhưng không đỏ hết — vẫn biết kịp/trễ.</p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Con số % và màu thanh là 2 thước đo khác nhau (đã đạt vs nhịp độ) — cố tình để bổ sung cho nhau.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Tiến độ Cam kết 3 bên (MTD)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Trạng thái chi nhánh (4 mức)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 9: % Khách khiếu nại */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-md bg-[#111827] border border-slate-700 rounded p-6 mt-4 flex flex-col items-center">
                         <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-4">% KHÁCH KHIẾU NẠI</p>
                         <p className="text-4xl font-bold text-yellow-500 mb-2">4,1% <span className="text-sm font-normal text-slate-400">· 2 ticket</span></p>
                         <p className="text-sm text-slate-400">Chủ yếu do <span className="font-bold text-white">DO KHÁCH HÀNG</span> (1 KN)</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Chi tiết</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">% Khách khiếu nại</h2>
                      <p className="text-xs text-slate-400 mb-6">Tỷ lệ khách có khiếu nại của chi nhánh trong tháng, kèm nguyên nhân chính và cảnh báo nếu có ca nhạy cảm.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>% khách khiếu nại + số ticket</li>
                        <li>Nhóm nguyên nhân chính</li>
                        <li>Dải đỏ "Nhạy cảm" nếu có ca Thái độ NV / Biến chứng</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">% khách khiếu nại <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Số khách có khiếu nại ÷ Tổng khách (× 100%)</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Số liệu đọc TƯƠI mỗi lần mở (không dùng ảnh chụp cũ lúc AI chấm).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Cơ chế chấm điểm AI (ap-v14)</span>
                      </div>
                    </div>
                  </div>


                  {/* THẺ 11: EBITDA Rescue */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-2xl bg-[#111827] border border-slate-700 rounded p-4 mt-4">
                         <div className="grid grid-cols-4 gap-2 text-[10px] mb-4">
                            <div className="bg-[#0f1523] p-2 border border-slate-800 rounded"><span className="text-slate-500">Đang cứu</span><br/><span className="text-white font-bold">18</span></div>
                            <div className="bg-[#0f1523] p-2 border border-slate-800 rounded"><span className="text-slate-500">Nguy cơ</span><br/><span className="text-white font-bold">0</span></div>
                            <div className="bg-[#0f1523] p-2 border border-slate-800 rounded"><span className="text-slate-500">Đang hồi phục</span><br/><span className="text-white font-bold">0</span></div>
                            <div className="bg-[#0f1523] p-2 border border-slate-800 rounded"><span className="text-slate-500">Đã cứu</span><br/><span className="text-white font-bold">0</span></div>
                         </div>
                         <div className="grid grid-cols-3 gap-2 opacity-50">
                            <div className="bg-[#0f1523] p-2 border border-slate-800 rounded h-12"></div>
                            <div className="bg-[#0f1523] p-2 border border-slate-800 rounded h-12"></div>
                            <div className="bg-[#0f1523] p-2 border border-slate-800 rounded h-12"></div>
                         </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">EBITDA</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">EBITDA Rescue (chi nhánh lỗ)</h2>
                      <p className="text-xs text-slate-400 mb-6">Theo dõi các chi nhánh đang lỗ, so mức lỗ hiện tại với mốc nền, và AI đề xuất các cột mốc phục hồi.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Nhóm theo trạng thái phục hồi</li>
                        <li>So loss% với baseline%</li>
                        <li>AI đề xuất milestones phục hồi</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">Cải thiện <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">loss% hiện tại {'<'} loss% nền {'->'} đang đỡ hơn</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Đề xuất milestones của AI không lưu database (tạo mỗi lần xem).</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Cơ chế chấm điểm AI (ap-v14)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 12: Lịch MKT & Đề xuất */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-2xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-70">
                         <div className="flex gap-2 mb-2">
                            <div className="w-16 h-4 bg-blue-600 rounded"></div>
                            <div className="w-16 h-4 bg-yellow-600 rounded"></div>
                            <div className="w-16 h-4 bg-emerald-600 rounded"></div>
                         </div>
                         <div className="flex bg-[#0f1523] rounded h-24 border border-slate-800">
                            <div className="flex-1 border-r border-slate-800 p-2 text-[8px] text-slate-500">Thứ 2</div>
                            <div className="flex-1 p-2 text-[8px] text-slate-500 relative">
                               Thứ 3
                               <div className="absolute top-6 left-2 right-2 bg-indigo-900/50 border border-indigo-500 text-indigo-300 p-1 rounded">2 đang chạy</div>
                            </div>
                         </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Kế hoạch</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Lịch MKT & Đề xuất hoạt động</h2>
                      <p className="text-xs text-slate-400 mb-6">Lịch tuần/tháng hiển thị hoạt động, việc quá hạn, dự án, mốc EBITDA. Bấm vào ngày để mở form theo quyền của bạn.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Hoạt động theo màu loại</li>
                        <li>Việc quá hạn, dự án, mốc EBITDA</li>
                        <li>Đề xuất hoạt động chờ duyệt</li>
                      </ul>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Mở form theo quyền: admin đủ tab; người chỉ được đề xuất thì chỉ thấy tab đề xuất/báo cáo.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Thanh lọc phạm vi (Command Bar)</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 13: Cơ chế chấm điểm AI */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-2xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 opacity-50">
                        <div className="grid grid-cols-5 gap-2 h-16">
                           <div className="bg-[#0f1523] rounded"></div>
                           <div className="bg-[#0f1523] rounded"></div>
                           <div className="bg-[#0f1523] rounded"></div>
                           <div className="bg-[#0f1523] rounded"></div>
                           <div className="bg-[#0f1523] rounded"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">AI</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Cơ chế chấm điểm AI (ap-v14)</h2>
                      <p className="text-xs text-slate-400 mb-6">Cách hệ thống chấm mỗi chi nhánh: gom dữ liệu → tính trạng thái theo ngưỡng cứng (code) → AI viết nhận định/điểm/đề xuất.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Đầu vào: KPI thực đạt & target, khiếu nại, MKT theo nguồn & theo dịch vụ, hoạt động 14 ngày, lần chấm trước</li>
                        <li>Đầu ra: điểm sức khỏe, tóm tắt, nguyên nhân, đề xuất hành động</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">% ngày đã trôi <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">round(ngày trong tháng ÷ số ngày của tháng × 100)</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-2">
                        <p className="text-xs text-slate-300 font-medium">Trạng thái <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Do CODE quyết theo ngưỡng cứng, không để AI gán</span></p>
                      </div>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">Bối cảnh khu vực <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded">Chỉ chế độ "Phân tích sâu" tra web; chế độ thường kế thừa bản sâu {'<'}30 ngày</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                          <li>AI tự chấm sau 10h sáng, 1 lần/ngày, không tra web (tiết kiệm).</li>
                          <li>Bỏ các chỉ số "hệ thống" như tổng inbox khỏi dữ liệu chấm để tránh nhiễu.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Trạng thái chi nhánh (4 mức)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Điểm sức khỏe (Health Gauge)</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Nhận định AI (AI Box) & Phân tích sâu</span>
                      </div>
                    </div>
                  </div>

                  {/* THẺ 10: Nhịp doanh thu theo tuần */}
                  <div className="bg-[#111827] border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-[#1e293b]/50 p-6 border-b border-slate-800 relative flex justify-center items-center">
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-500 bg-[#0f1523] px-2 py-0.5 rounded">Ảnh minh họa</span>
                      <button className="absolute top-2 right-2 text-slate-500 hover:text-white"><Maximize2 size={14}/></button>
                      <div className="w-full max-w-xl bg-[#111827] border border-slate-700 rounded p-4 mt-4 h-32 flex flex-col justify-between">
                         <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">NHỊP DOANH THU THEO TUẦN</p>
                         <div className="flex-1 w-full relative mt-4">
                           <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                             <path d="M0,35 L33,30 L66,20 L100,5" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                         </div>
                         <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold">
                            <span>Tuần 3: 294,8 Tr</span>
                            <span>Tuần 4: 364,1 Tr</span>
                            <span>Tuần 5: 509,9 Tr</span>
                         </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-900/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded font-bold">Action Plan Chi Nhánh</span>
                        <span className="text-[10px] text-slate-500">Chi tiết</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2">Nhịp doanh thu theo tuần</h2>
                      <p className="text-xs text-slate-400 mb-6">Biểu đồ nhỏ cho thấy doanh thu chi nhánh nhích lên/xuống qua từng tuần.</p>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">HIỂN THỊ GÌ</h3>
                      <ul className="text-xs text-slate-300 list-disc pl-4 mb-6 space-y-1">
                        <li>Doanh thu theo tuần (tuần = làm tròn lên ngày ÷ 7)</li>
                      </ul>

                      <h3 className="text-[10px] text-slate-500 font-bold uppercase mb-2">CÔNG THỨC</h3>
                      <div className="bg-[#1e293b] border border-slate-800 rounded p-3 mb-6">
                        <p className="text-xs text-slate-300 font-medium">Tuần trong tháng <span className="text-blue-400 ml-2 bg-blue-900/20 px-1 rounded font-mono">ceil(ngày ÷ 7)</span></p>
                      </div>

                      <div className="bg-yellow-950/20 border border-yellow-900/30 rounded p-4 mb-6">
                        <p className="text-xs font-bold text-yellow-500 mb-1 flex items-center gap-1.5">⚠️ Lưu ý</p>
                        <ul className="text-xs text-slate-300 list-disc pl-4">
                          <li>Ẩn nếu chưa đủ 2 tuần có số liệu.</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>Liên quan:</span>
                        <span className="bg-[#1e293b] px-2 py-1 rounded cursor-pointer hover:text-white">Chi tiết chi nhánh (Drawer)</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
}