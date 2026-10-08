"use client";
import React from 'react';

export function ActionPlanProposals() {
  const proposals = [
    {
      title: "BÀ RỊA OFFLINE NGÀY 16/10/2026",
      status: "Đã duyệt",
      subTitle: "Bà Rịa · Chiến dịch · 16/10/2026 – 16/10/2026",
      tagCode: "SR",
      tagText: "Seoul Center Bà Rịa",
      scale: "Nhỏ",
      budget: "600.000 đ",
      kpi: "Data 30",
      creator: "Seoul Center Bà Rịa",
      approver: "TP MKT - Hiệp",
      noteQuyMo: "Setup bàn soi da, chuẩn bị: 1. Máy soi da bitmoji + máy soi da cầm tay 2. Các sản phẩm test + mặt nạ 3. Ấn phẩm MKT (standee + meca menu A4) 4. Quà tặng lưu niệm SC dành cho KH (túi bảo tử, túi đáy khảo kéo, ly giữ nhiệt SC)"
    },
    {
      title: "BÀ RỊA TỔ CHỨC OFFLINE TẠI ĐIỂM NGÀY 11/09/2026",
      status: "Đã duyệt",
      subTitle: "Bà Rịa · Chiến dịch · 11/9/2026 – 11/9/2026",
      tagCode: "",
      tagText: "",
      scale: "Nhỏ",
      budget: "588.000 đ",
      kpi: "Data 15 · KH mới 1 · DT 3.500.000 đ",
      creator: "Seoul Center Bà Rịa",
      approver: "TP MKT - Hiệp",
      noteQuyMo: ""
    },
    {
      title: "Tăng TBK khách cũ bằng combo/lộ trình ngắn cho dịch vụ đang mạnh",
      status: "Đã duyệt",
      subTitle: "Bình Phước · Chiến dịch · 18/9/2026 – 18/9/2026",
      tagCode: "SP",
      tagText: "Seoul Center Bình Phước",
      scale: "Nhỏ",
      budget: "0 đ",
      kpi: "Data 100 · KH mới 1 · DT 0 đ",
      creator: "Seoul Center Bình Phước",
      approver: "TP MKT - Hiệp",
      note: "AI gợi ý (P1): TBK khách cũ giảm từ khoảng 854 nghìn xuống 561 nghìn dù số khách cũ vẫn ở mức hơn 200 người, cho thấy khách cũ chủ yếu mua lẻ giá trị nhỏ; trong khi doanh thu khách cũ đang là trụ cột để cứu chi tiêu tháng."
    },
    {
      title: "offline",
      status: "Đã duyệt",
      subTitle: "Thủ Đức · Chiến dịch · 27/9/2026 – 27/9/2026",
      tagCode: "SĐ",
      tagText: "Seoul Center Thủ Đức",
      scale: "Nhỏ",
      budget: "172.000 đ",
      kpi: "Data 200 · KH mới 200 · DT 5.000.000 đ",
      creator: "Seoul Center Thủ Đức",
      approver: "TP MKT - Hiệp",
      noteQuyMo: "https://docs.google.com/spreadsheets/d/1eEojQ5VWvnj-jNceLIDrGpmeiGwcPuHkrTJ-6PFwHkw/edit?gid=1586775002#gid=1586775002"
    },
    {
      title: "Chương trình vòng quay lại điểm + phát thiệp CTV",
      status: "Đã duyệt",
      subTitle: "Bình Thạnh · Chiến dịch · 17/8/2026 – 31/8/2026",
      tagCode: "ST",
      tagText: "Seoul Center Bình Thạnh",
      scale: "Nhỏ",
      budget: "—",
      kpi: "—",
      creator: "Trương Nguyễn Trung Tiến",
      approver: "Huỳnh Ngọc Nhàn",
      noteQuyMo: "Tại chi nhánh tổ chức xoay vòng quay link tương tự SOS và phát thiệp CTV cho các đối tác kèm quà tặng ( ly, túi.... ) nhằm tăng thêm data, doanh thu..",
      note: "Chiến dịch chi nhánh đã được gửi lên chị Nhàn chốt cần duyệt gấp ạ"
    },
    {
      title: "Điều chỉnh ngân sách và nội dung ads theo kênh, dồn khỏi TikTok sang Facebook nhóm dịch vụ đang ra tiền",
      status: "Từ chối",
      subTitle: "Bà Rịa · Chiến dịch · 4/8/2026 – 12/8/2026",
      tagCode: "",
      tagText: "",
      scale: "—",
      budget: "—",
      kpi: "—",
      creator: "Trương Nguyễn Trung Tiến",
      approver: "TP MKT - Hiệp",
      note: "AI gợi ý (P1): TikTok đã tiêu ~696K nhưng chưa tạo được lead/khách (0 data, roas=0), trong khi Facebook tạo 11/12 data nhưng ROAS khách mới thấp; cần tái phân bổ ngân sách nhanh trong những ngày đầu tháng để đủ data và cải thiện hiệu quả kênh trả phí.",
      rejectReason: "Đề xuất phải đầy đủ nội dung"
    }
  ];

  return (
    <div className="mb-10">
      <h3 className="text-sm font-bold text-white mb-4">Đề xuất hoạt động</h3>
      <div className="flex flex-col gap-3">
        {proposals.map((item, idx) => (
          <div key={idx} className="bg-[#111827] border border-slate-800 rounded-lg p-5">
            
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm font-bold text-white uppercase">{item.title}</h4>
              <span className={`text-[10px] px-2 py-0.5 rounded font-medium border ${item.status === 'Đã duyệt' ? 'bg-emerald-950/30 text-emerald-500 border-emerald-900/50' : 'bg-red-950/30 text-red-400 border-red-900/50'}`}>
                {item.status}
              </span>
            </div>
            
            <p className="text-[11px] text-slate-500 mb-3">{item.subTitle}</p>
            
            {item.tagCode && (
              <div className="flex items-center gap-1.5 mb-5">
                 <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-wider">{item.tagCode}</span>
                 <span className="text-xs font-bold text-slate-200">{item.tagText}</span>
              </div>
            )}

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[11px] text-slate-500 mb-1">Quy mô</p>
                  <p className="text-xs text-slate-300">{item.scale}</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 mb-1">Người duyệt</p>
                  <p className="text-xs text-slate-300">{item.approver}</p>
                </div>
              </div>
              
              <div>
                <p className="text-[11px] text-slate-500 mb-1">Ngân sách</p>
                <p className="text-xs text-slate-300">{item.budget}</p>
              </div>
              
              <div>
                <p className="text-[11px] text-slate-500 mb-1">KPI cam kết</p>
                <p className="text-xs text-slate-300">{item.kpi}</p>
              </div>
              
              <div>
                <p className="text-[11px] text-slate-500 mb-1">Người tạo</p>
                <p className="text-xs text-slate-300">{item.creator}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              {item.noteQuyMo && (
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  <span className="font-bold text-slate-200">Ghi chú quy mô:</span> {item.noteQuyMo}
                </p>
              )}

              {item.note && (
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  <span className="font-bold text-slate-200">Ghi chú:</span> {item.note}
                </p>
              )}

              {item.rejectReason && (
                <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                  <span className="font-bold text-slate-200">Lý do duyệt/từ chối:</span> {item.rejectReason}
                </p>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}