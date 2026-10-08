"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';

export function ModuleH6H7() {
  // Dữ liệu bảng H6 - Khách giới thiệu
  const tableH6Data = [
    { isGroup: true, name: "TMV HCM - DNB", count: "(9 CN)", data: 13, khachMoi: 5, dtKm: 13, tyTrong: "5,7%" },
    { name: "BÀ RỊA", data: 4, khachMoi: 2, dtKm: 7, tyTrong: "18,2%" },
    { name: "THỦ ĐỨC", data: 1, khachMoi: 1, dtKm: 2, tyTrong: "10%" },
    { name: "TÂY NINH", data: 2, khachMoi: 1, dtKm: 0, tyTrong: "6,7%" },
    { name: "DĨ AN", data: 3, khachMoi: 1, dtKm: 4, tyTrong: "6,3%" },
    { name: "TÂN UYÊN", data: 2, khachMoi: 0, dtKm: 0, tyTrong: "0%" },
    { name: "BÌNH THẠNH", data: 1, khachMoi: 0, dtKm: 0, tyTrong: "0%" },
    { name: "LONG KHÁNH", data: 0, khachMoi: 0, dtKm: 0, tyTrong: "0%" },
    { name: "BÌNH PHƯỚC", data: 0, khachMoi: 0, dtKm: 0, tyTrong: "0%" },
    { name: "VŨNG TÀU", data: 0, khachMoi: 0, dtKm: 0, tyTrong: "0%" },
  ];

  // Dữ liệu bảng H7 - Khách Cộng tác viên
  const tableH7Data = [
    { isGroup: true, name: "TMV HCM - DNB", count: "(9 CN)", data: 0, khachMoi: 7, dtKm: 14, chiTieu: 76, datChiTieu: "9,2%" },
    { name: "THỦ ĐỨC", data: 0, khachMoi: 2, dtKm: 1, chiTieu: 10, datChiTieu: "20%" },
    { name: "BÀ RỊA", data: 0, khachMoi: 1, dtKm: 2, chiTieu: 8, datChiTieu: "12,5%" },
    { name: "TÂN UYÊN", data: 0, khachMoi: 1, dtKm: 7, chiTieu: 8, datChiTieu: "12,5%" },
    { name: "VŨNG TÀU", data: 0, khachMoi: 1, dtKm: 3, chiTieu: 8, datChiTieu: "12,5%" },
    { name: "DĨ AN", data: 0, khachMoi: 1, dtKm: 1, chiTieu: 9, datChiTieu: "11,1%" },
    { name: "BÌNH THẠNH", data: 0, khachMoi: 1, dtKm: 0, chiTieu: 9, datChiTieu: "11,1%" },
    { name: "LONG KHÁNH", data: 0, khachMoi: 0, dtKm: 0, chiTieu: 8, datChiTieu: "0%" },
    { name: "BÌNH PHƯỚC", data: 0, khachMoi: 0, dtKm: 0, chiTieu: 8, datChiTieu: "0%" },
    { name: "TÂY NINH", data: 0, khachMoi: 0, dtKm: 0, chiTieu: 8, datChiTieu: "0%" },
  ];

  // Hàm helper để render thanh tiến độ mini ở cột "% ĐẠT CHỈ TIÊU" và "TỈ TRỌNG"
  const renderProgressBar = (percentStr: string) => {
    const val = parseFloat(percentStr.replace('%', '').replace(',', '.'));
    const width = val > 0 ? `${val}%` : '0%';
    const colorClass = val > 0 ? 'bg-emerald-500' : 'bg-slate-700';
    
    return (
      <div className="flex items-center justify-end gap-2">
         <div className="w-10 h-1 bg-slate-800 rounded-full overflow-hidden flex justify-start">
           <div className={`h-full ${colorClass} rounded-full`} style={{ width: width }}></div>
         </div>
         <span className="w-10 text-right text-slate-400">{percentStr}</span>
      </div>
    )
  };

  return (
    <div className="mb-10 flex flex-col gap-6">
      
      {/* MODULE H6: KHÁCH GIỚI THIỆU */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
        <div className="mb-4">
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">H6 · KHÁCH GIỚI THIỆU</p>
          <h3 className="text-sm font-bold text-white">Khách đến từ giới thiệu — theo vùng và chi nhánh</h3>
        </div>

        <div className="flex flex-col xl:flex-row gap-4">
          {/* CỘT TRÁI - 3 Thẻ thống kê H6 */}
          <div className="w-full xl:w-[280px] flex flex-col gap-4 flex-shrink-0">
            <div className="bg-[#0f1523] border border-slate-800 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">Khách mới từ giới thiệu</p>
              <p className="text-3xl font-bold text-emerald-500 mb-1">5</p>
              <p className="text-[10px] text-slate-500 mb-3">chiếm 5,7% tổng khách mới</p>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '5.7%' }}></div>
              </div>
            </div>
            
            <div className="bg-[#0f1523] border border-slate-800 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">Doanh thu khách mới nhóm này</p>
              <p className="text-2xl font-bold text-white mb-1">13,2 tr</p>
              <p className="text-[10px] text-slate-500">trung bình 2,6 tr/khách</p>
            </div>

            <div className="bg-[#0f1523] border border-slate-800 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">Tỉ lệ chốt của nhóm</p>
              <p className="text-2xl font-bold text-white mb-1">38,5%</p>
              <p className="text-[10px] text-slate-500">5 khách / 13 data giới thiệu</p>
            </div>
          </div>

          {/* CỘT PHẢI - Bảng chi tiết H6 */}
          <div className="flex-1 overflow-x-auto custom-scrollbar border border-slate-800 rounded-lg bg-[#0f1523]">
            <table className="w-full text-xs text-right whitespace-nowrap">
              <thead className="text-[10px] text-slate-500 uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left font-normal">VÙNG / CHI NHÁNH</th>
                  <th className="py-3 px-4 font-normal">DATA</th>
                  <th className="py-3 px-4 font-normal">KHÁCH MỚI</th>
                  <th className="py-3 px-4 font-normal">DT KM (TRIỆU ĐỒNG)</th>
                  <th className="py-3 px-4 font-normal text-right">TỈ TRỌNG / KHÁCH MỚI CN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 bg-[#111827]">
                {tableH6Data.map((row, idx) => {
                  if (row.isGroup) {
                    return (
                      <tr key={idx} className="bg-blue-900/10 hover:bg-slate-800/50 transition-colors cursor-pointer border-b border-slate-800">
                        <td className="py-3 px-4 text-left flex items-center gap-1 font-bold text-white">
                          <ChevronDown className="text-slate-400" size={14}/>
                          {row.name} <span className="text-[10px] text-slate-500 font-normal">{row.count}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{row.data}</td>
                        <td className="py-3 px-4 font-bold text-emerald-500">{row.khachMoi}</td>
                        <td className="py-3 px-4 text-slate-400">{row.dtKm}</td>
                        <td className="py-3 px-4 font-bold">{renderProgressBar(row.tyTrong)}</td>
                      </tr>
                    )
                  }
                  return (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-4 text-left pl-8 text-[#94a3b8] uppercase">{row.name}</td>
                      <td className="py-3 px-4 text-slate-400">{row.data}</td>
                      <td className="py-3 px-4 font-bold text-emerald-500">{row.khachMoi}</td>
                      <td className="py-3 px-4 text-slate-400">{row.dtKm}</td>
                      <td className="py-3 px-4">{renderProgressBar(row.tyTrong)}</td>
                    </tr>
                  )
                })}
                <tr className="bg-[#151e2f] border-t border-slate-700 font-bold text-white">
                  <td className="py-3 px-4 text-left uppercase">Tổng</td>
                  <td className="py-3 px-4">13</td>
                  <td className="py-3 px-4 text-emerald-500">5</td>
                  <td className="py-3 px-4">13</td>
                  <td className="py-3 px-4">{renderProgressBar("5,7%")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODULE H7: KHÁCH CỘNG TÁC VIÊN */}
      <div className="bg-[#111827] border border-slate-800 rounded-lg p-5">
        <div className="mb-4">
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-1 uppercase">H7 · KHÁCH CỘNG TÁC VIÊN</p>
          <h3 className="text-sm font-bold text-white">Khách đến từ cộng tác viên — thực đạt so với chỉ tiêu</h3>
        </div>

        <div className="flex flex-col xl:flex-row gap-4">
          {/* CỘT TRÁI - 3 Thẻ thống kê H7 */}
          <div className="w-full xl:w-[280px] flex flex-col gap-4 flex-shrink-0">
            <div className="bg-[#0f1523] border border-slate-800 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">Khách CTV / chỉ tiêu tháng</p>
              <p className="text-3xl font-bold text-emerald-500 mb-1 flex items-baseline gap-1">
                7 <span className="text-xl text-slate-500 font-normal">/ 76</span>
              </p>
              <p className="text-[10px] text-slate-500 mb-3">đạt 9,2% chỉ tiêu · chiếm 8% tổng khách mới</p>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '9.2%' }}></div>
              </div>
            </div>
            
            <div className="bg-[#0f1523] border border-slate-800 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">Doanh số CTV / chỉ tiêu tháng</p>
              <p className="text-2xl font-bold text-white mb-1">14,1 tr</p>
              <p className="text-[10px] text-slate-500 mb-3">chỉ tiêu 354 tr · đạt 4%</p>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '4%' }}></div>
              </div>
            </div>

            <div className="bg-[#0f1523] border border-slate-800 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">Tỉ lệ chốt của nhóm</p>
              <p className="text-2xl font-bold text-white mb-1">—</p>
              <p className="text-[10px] text-slate-500">7 khách / 0 data CTV · TB 2 tr/khách</p>
            </div>
          </div>

          {/* CỘT PHẢI - Bảng chi tiết H7 */}
          <div className="flex-1 overflow-x-auto custom-scrollbar border border-slate-800 rounded-lg bg-[#0f1523]">
            <table className="w-full text-xs text-right whitespace-nowrap">
              <thead className="text-[10px] text-slate-500 uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left font-normal">VÙNG / CHI NHÁNH</th>
                  <th className="py-3 px-4 font-normal">DATA</th>
                  <th className="py-3 px-4 font-normal">KHÁCH MỚI</th>
                  <th className="py-3 px-4 font-normal">DT KM (TRIỆU ĐỒNG)</th>
                  <th className="py-3 px-4 font-normal">CHỈ TIÊU KH</th>
                  <th className="py-3 px-4 font-normal text-right">% ĐẠT CHỈ TIÊU</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 bg-[#111827]">
                {tableH7Data.map((row, idx) => {
                  if (row.isGroup) {
                    return (
                      <tr key={idx} className="bg-blue-900/10 hover:bg-slate-800/50 transition-colors cursor-pointer border-b border-slate-800">
                        <td className="py-3 px-4 text-left flex items-center gap-1 font-bold text-white">
                          <ChevronDown className="text-slate-400" size={14}/>
                          {row.name} <span className="text-[10px] text-slate-500 font-normal">{row.count}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{row.data}</td>
                        <td className="py-3 px-4 font-bold text-emerald-500">{row.khachMoi}</td>
                        <td className="py-3 px-4 text-slate-400">{row.dtKm}</td>
                        <td className="py-3 px-4 text-slate-400">{row.chiTieu}</td>
                        <td className="py-3 px-4 font-bold">{renderProgressBar(row.datChiTieu)}</td>
                      </tr>
                    )
                  }
                  return (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-4 text-left pl-8 text-[#94a3b8] uppercase">{row.name}</td>
                      <td className="py-3 px-4 text-slate-400">{row.data}</td>
                      <td className="py-3 px-4 font-bold text-emerald-500">{row.khachMoi}</td>
                      <td className="py-3 px-4 text-slate-400">{row.dtKm}</td>
                      <td className="py-3 px-4 text-slate-400">{row.chiTieu}</td>
                      <td className="py-3 px-4">{renderProgressBar(row.datChiTieu)}</td>
                    </tr>
                  )
                })}
                <tr className="bg-[#151e2f] border-t border-slate-700 font-bold text-white">
                  <td className="py-3 px-4 text-left uppercase">Tổng</td>
                  <td className="py-3 px-4">0</td>
                  <td className="py-3 px-4 text-emerald-500">7</td>
                  <td className="py-3 px-4">14</td>
                  <td className="py-3 px-4">76</td>
                  <td className="py-3 px-4">{renderProgressBar("9,2%")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
