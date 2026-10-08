"use client";
import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';

const GaugeChart = ({ score, color, label }: { score: number, color: string, label: string }) => {
  const radius = 60;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="relative w-[120px] h-[60px] flex items-end justify-center">
        <svg height={radius} width={radius * 2} className="absolute bottom-0">
          <path
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset: 0 }}
            strokeWidth={stroke}
            stroke="#1e293b"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeLinecap="round"
            d={`M ${stroke},${radius} a ${normalizedRadius},${normalizedRadius} 0 0,1 ${normalizedRadius * 2},0`}
          />
          <path
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeWidth={stroke}
            stroke={color}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeLinecap="round"
            d={`M ${stroke},${radius} a ${normalizedRadius},${normalizedRadius} 0 0,1 ${normalizedRadius * 2},0`}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute bottom-0 flex items-baseline gap-0.5 translate-y-2">
          <span className="text-4xl font-bold text-white leading-none">{score}</span>
          <span className="text-sm text-slate-500 font-medium">/100</span>
        </div>
      </div>
      <span className="text-xs font-bold mt-3" style={{ color: color }}>{label}</span>
    </div>
  );
};

export function ActionPlanAI() {
  const summaryStatus = [
    { value: 9, label: "Tất cả", color: "text-blue-400 border-blue-500 bg-blue-950/20" },
    { value: 4, label: "Nguy cấp", color: "text-red-500 border-red-500 bg-red-950/20" },
    { value: 1, label: "Rủi ro cao", color: "text-orange-500 border-orange-500 bg-orange-950/20" },
    { value: 3, label: "Cần chú ý", color: "text-yellow-500 border-yellow-500 bg-yellow-950/20" },
    { value: 1, label: "Ổn định", color: "text-emerald-500 border-emerald-500 bg-emerald-950/20" },
  ];

  const aiCards = [
    {
      name: "Bà Rịa",
      info: "TMV HCM - DNB · CN 78",
      badge: "Nguy cấp",
      score: 72,
      gaugeColor: "#0ea5e9", // cyan-500
      desc: "Tổng doanh thu mới đạt gần 53% mức kỳ vọng theo tiến độ thời gian nên chi nhánh đang ở trạng thái rủi ro cao, dù tuần đầu tháng ghi nhận doanh thu tương đương cùng kỳ tháng trước và ROAS tổng tốt trên 2,7. Về marketing, tổng data đ...",
      tasks: [
        { title: "Siết lại cơ cấu ngân sách quảng cáo giữa Facebook, Google và ...", sub: "Ưu tiên cao · Facebook đang mang lại phần lớn khách và chuyển đổi tốt nh..." },
        { title: "Thiết kế mini-chương trình tái khám và upsell cho khách cũ nhằ...", sub: "Ưu tiên cao · TBK khách cũ đang ở khoảng 2,68 triệu, trong khi khách cũ đa..." },
        { title: "Tập trung phễu data→lịch→khách cho dịch vụ Phun xăm và Ná...", sub: "Ưu tiên vừa · Phun xăm đang nhận khoảng 41% chi phí MKT và tạo 13 lead, 3 ..." },
      ]
    },
    {
      name: "Bình Thạnh",
      info: "TMV HCM - DNB · CN 40",
      badge: "Cần chú ý",
      score: 78,
      gaugeColor: "#0ea5e9", // cyan-500
      desc: "Tính đến hết ngày 7, chi nhánh đang bám khá sát tiến độ doanh thu: đạt khoảng 106,6 triệu, tương đương 94% mức kỳ vọng theo thời gian, trong bối cảnh chỉ mới qua 22,6% tháng. Điểm mạnh lớn là doanh thu đã tăng gấp đôi so với cùng...",
      tasks: [
        { title: "Giảm mạnh ngân sách TikTok và Google, dồn lại cho Facebook ...", sub: "Ưu tiên cao · TikTok đang chi khoảng 52% tổng ngân sách, mới ra 1 lead đ..." },
        { title: "Siết lại phễu gọi và chốt lịch cho tệp lead tháng này", sub: "Ưu tiên cao · Hiện còn khoảng 28% nguồn lead tháng này đang ở trạng thái..." },
        { title: "Điều chỉnh dịch vụ mồi: giảm tập trung Phun xăm, tăng nội dung...", sub: "Ưu tiên vừa · Hơn 66% chi phí MKT đang dồn vào Phun xăm nhưng chưa ra kh..." },
      ]
    },
    {
      name: "Long Khánh",
      info: "TMV HCM - DNB · CN 59",
      badge: "Rủi ro cao",
      score: 78,
      gaugeColor: "#0ea5e9", // cyan-500
      desc: "Doanh thu hiện mới đạt khoảng 69% mức kỳ vọng theo tiến độ ngày, sức khỏe vận hành ở mức cảnh giác: chưa rơi vào vùng nguy cấp nhưng nếu giữ nhịp trên thì rất dễ hụt đích tháng. Điểm sáng là kênh Facebook đang gánh phần lớn...",
      tasks: [
        { title: "Siết ngân sách TikTok/Google, dồn trọng tâm sang Facebook v...", sub: "Ưu tiên cao · Facebook đang chiếm 30% ngân sách kế hoạch kênh nhưn..." },
        { title: "Tạo phễu nội dung và ưu đãi riêng cho dịch vụ Mụn – Nám đang...", sub: "Ưu tiên cao · Hiện 2 dịch vụ này nhận khoảng 66% chi phí MKT nhưng mới t..." },
        { title: "Tăng giá trị hóa đơn khách cũ bằng combo và kịch bản upsell tạ...", sub: "Ưu tiên cao · TBK khách cũ giảm rất mạnh so với cùng kỳ trong khi số khách c..." },
      ]
    }
  ];

  return (
    <div className="mb-10">
      
      {/* Thanh Tóm tắt (Summary Bar) */}
      <div className="flex flex-wrap gap-4 mb-6">
        {summaryStatus.map((item, idx) => (
          <div key={idx} className={`flex-1 min-w-[120px] rounded-lg border-t-2 bg-[#111827] border-x border-b border-slate-800 ${item.color.split(' ')[1]} flex flex-col items-center justify-center py-4 shadow-sm`}>
            <p className={`text-2xl font-bold ${item.color.split(' ')[0]}`}>{item.value}</p>
            <p className="text-[11px] text-slate-400 mt-1 uppercase">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Grid 3 Thẻ Nhận định AI */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {aiCards.map((card, idx) => (
          <div key={idx} className="bg-[#111827] border border-slate-800 rounded-lg p-5 flex flex-col">
            
            {/* Header Thẻ */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-sm font-bold text-white">{card.name}</h4>
                <p className="text-[10px] text-slate-500">{card.info}</p>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded font-medium border ${card.badge === 'Nguy cấp' ? 'bg-red-950/40 text-red-400 border-red-900/50' : card.badge === 'Cần chú ý' ? 'bg-yellow-950/40 text-yellow-500 border-yellow-900/50' : 'bg-orange-950/40 text-orange-500 border-orange-900/50'}`}>
                {card.badge}
              </span>
            </div>

            {/* Gauge Chart & Stats */}
            <GaugeChart score={card.score} color={card.gaugeColor} label={card.badge} />
            
            <div className="flex justify-between border-t border-slate-800 pt-3 mb-4 mt-2">
              <div className="text-center flex-1 border-r border-slate-800">
                <p className="text-white font-bold text-sm">—</p>
                <p className="text-[9px] text-slate-500">Hôm nay</p>
              </div>
              <div className="text-center flex-1 border-r border-slate-800">
                <p className="text-white font-bold text-sm">—</p>
                <p className="text-[9px] text-slate-500">Sắp tới</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-white font-bold text-sm">0</p>
                <p className="text-[9px] text-slate-500">Vấn đề</p>
              </div>
            </div>

            {/* AI Nhận định & Checklist */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5 text-indigo-400">
                  <Sparkles size={14} />
                  <span className="text-xs font-bold">Nhận định AI</span>
                </div>
                <a href="#" className="text-[10px] text-blue-400 hover:underline">Xem thêm</a>
              </div>
              
              <p className="text-[11px] text-slate-400 leading-relaxed mb-4 line-clamp-3">
                {card.desc}
              </p>

              <div className="flex flex-col gap-2 mt-auto">
                {card.tasks.map((task, tIdx) => (
                  <div key={tIdx} className="flex items-start justify-between p-2.5 bg-[#0f1523] border border-slate-800 rounded">
                    <div className="flex-1 pr-2 overflow-hidden">
                      <p className="text-xs font-bold text-slate-300 truncate" title={task.title}>{task.title}</p>
                      <p className="text-[9px] text-slate-500 truncate" title={task.sub}>{task.sub}</p>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      <button className="w-6 h-6 bg-emerald-900/20 border border-emerald-900/50 text-emerald-500 rounded flex items-center justify-center hover:bg-emerald-800/40 transition-colors">
                        <Check size={12} strokeWidth={3}/>
                      </button>
                      <button className="w-6 h-6 bg-red-900/20 border border-red-900/50 text-red-500 rounded flex items-center justify-center hover:bg-red-800/40 transition-colors">
                        <X size={12} strokeWidth={3}/>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="text-xs font-bold text-slate-300 bg-[#1e293b] px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
          Xem thêm 3 chi nhánh
        </button>
      </div>
    </div>
  );
}