"use client";
import React from 'react';
import { AlertTriangle, Sparkles } from 'lucide-react';

export function ActionPlanAlerts() {
  const alerts = [
    {
      name: "Vũng Tàu",
      region: "TMV HCM - DNB",
      level: "Nguy cấp",
      content: [
        { type: 'normal', text: "Doanh thu đang hụt rất sâu so với tiến độ: mới đạt khoảng 18 triệu so với mục tiêu 500 triệu, tương đương khoảng 15% mức kỳ vọng trong khi đã qua 22,6% tháng, nếu không bù nhịp sớm thì cuối tháng rất khó về đích." },
        { type: 'danger', text: "Hiệu quả chuyển đổi giảm mạnh so với cùng kỳ: tỷ lệ data thành lịch rớt từ khoảng 64% xuống 31,6%, số lịch mới từ 18 xuống còn 6 và khách mới từ data từ 9 xuống 3; chứng tỏ phễu khai thác data đang bị gãy ở tầng gọi lịch, không tận dụng nổi lượng lead ít ỏi đang có." },
        { type: 'normal', text: "Chi phí marketing đã sử dụng tới khoảng 78% ngân sách kế hoạch ngay tuần đầu nhưng data chỉ mới 19 lead, ROAS tạm thời khoảng 0,44 so với cùng kỳ hơn 3,4; giá lead bình quân hơn 550 nghìn/lead, vượt ngưỡng chuẩn 300 nghìn thì chưa chạm nhưng Facebook khoảng 874 nghìn/lead và TikTok hơn 589 nghìn/lead đều đang cao so với mặt bằng tốt, làm cho chi phí trên mỗi khách mới trong ngày lên tới hơn 2,6 triệu." },
        { type: 'normal', text: "Chi nhánh đang mang rủi ro dài hạn rất lớn về khách rời bỏ: lũy kế 2026 có 338 khách mới đã mua thì 230 khách chỉ mua 1 hóa đơn (khoảng 64,6%), riêng nhóm khách mới đã đủ thời gian theo dõi có 192 trên 307 khách chỉ mua một lần (hơn 62,5%), cho thấy quy trình hẹn tái khám, gọi ý lộ trình điều trị và chăm sóc sau bán tại điểm đang chưa tốt, khiến chi nhánh phải phụ thuộc nặng vào việc tìm khách mới mà không tận dụng được tệp khách cũ." },
      ],
      suggestion: "Rà soát và chỉnh phễu data→lịch trong 5 ngày tới"
    },
    {
      name: "Bình Phước",
      region: "TMV HCM - DNB",
      level: "Nguy cấp",
      content: [
        { type: 'normal', text: "Doanh thu mới đạt khoảng 35% mức kỳ vọng theo tiến độ tháng trong khi đã đi qua 22,6% thời gian, cho thấy nhịp chốt đơn đầu tháng chậm hơn nhu cầu, đặc biệt khi phần lớn doanh thu lại đến từ khách cũ chứ không phải tăng trưởng khách mới." },
        { type: 'normal', text: "Ngân sách marketing đã dùng tới 92% kế hoạch nhưng ROAS toàn kênh hiện quanh 0,43 và thấp hơn nhiều so với cùng kỳ (xấp xỉ 0,88), nghĩa là dòng chi cho quảng cáo đang chưa quay về tương xứng doanh thu, trong khi tháng mới ở giai đoạn đầu nên áp lực phải kéo doanh thu bù trong quãng thời gian còn lại sẽ rất lớn." },
        { type: 'normal', text: "Giá lead kênh trả phí đang cao hơn chuẩn: Facebook khoảng 762 nghìn/lead, TikTok trên 500 nghìn/lead; so cùng kỳ tháng trước thì giá lead bình quân toàn chi nhánh cũng đã tăng thêm khoảng 26% (từ khoảng 406 nghìn lên hơn 512 nghìn), khiến chi phí trên mỗi khách mới thực tế càng dội lên trong bối cảnh sức mua không tăng tương ứng." },
        { type: 'danger', text: "Tỷ lệ khách rời bỏ đang cao: lũy kế 2026 có 287 khách mới đã đủ thời gian theo dõi nhưng 150 khách chỉ mua đúng 1 hóa đơn rồi không quay lại (khoảng 55%); nghĩa là hơn một nửa khách mới biến mất sau lần đầu, làm giảm mạnh giá trị vòng đời khách và khiến chi nhánh phải phụ thuộc vào quảng cáo liên tục để bù khách mới trong điều kiện thị trường địa phương dân cư thưa và xin data offline khó." },
      ],
      suggestion: "Chia ca gọi hết 100% lead chưa khai thác và lead ấm trong 5 ngày tới"
    },
    {
      name: "Tân Uyên",
      region: "TMV HCM - DNB",
      level: "Nguy cấp",
      content: [
        { type: 'normal', text: "Chi phí marketing đã giải ngân khoảng 160% kế hoạch cả tháng ngay khi mới qua 22,6% thời gian, trong khi ROAS toàn chi nhánh mới quanh mức 0,55 do đặc thù đầu tháng lead chưa kịp chuyển hóa; nếu tiếp tục giữ nhịp chi tiêu hiện tại mà không cải thiện chi phí/lead thì sẽ rất khó đảm bảo hiệu quả ngân sách cho cả tháng." },
        { type: 'normal', text: "Hiệu quả kênh TikTok đang rất kém: mới tạo được 6 data nhưng giá data lên tới khoảng 2,65 triệu (vượt xa ngưỡng chuẩn 800 nghìn), chưa ra khách mới nào và ROAS bằng 0 dù đã tiêu vượt hơn 20 lần ngân sách kế hoạch của kênh – đây là nguồn kéo chi phí chung tăng mạnh, cần xử lý gấp." },
        { type: 'danger', text: "Tỷ lệ chuyển đổi data thành lịch đã giảm rõ rệt so với cùng kỳ: từ khoảng 51,5% xuống còn 38,7%, số lịch mới từ data cũng giảm từ 17 còn 12 và khách mới từ data từ 7 còn 4, cho thấy khâu tư vấn – chốt lịch đang yếu đi, ảnh hưởng trực tiếp đến lượng khách mới dù lượng data tổng gần như không đổi." },
      ],
      suggestion: "Siết ngân sách TikTok, dồn lại cho Facebook và Google đang ra số"
    },
    {
      name: "Bà Rịa",
      region: "TMV HCM - DNB",
      level: "Nguy cấp",
      content: [
        { type: 'normal', text: "Doanh thu mới hoàn thành khoảng 52,2% mức kỳ vọng theo tiến độ thời gian, trong khi đã qua 22,6% tháng, nên áp lực hoàn thành mục tiêu 500 triệu là rất lớn dù bước đầu doanh thu nhỉnh hơn cùng kỳ tháng trước (gần 58,9 triệu so với 58,7 triệu)." },
        { type: 'normal', text: "Cơ cấu kênh marketing mất cân đối: Facebook đang mang lại 26/38 lead với giá lead khoảng 399 nghìn và ROAS xấp xỉ 1, nhưng đã tiêu khoảng 63% ngân sách kế hoạch; TikTok chỉ mang về 4 lead với giá khoảng 712 nghìn/lead, chưa ra khách và ROAS 0 nhưng lại đang tiêu gấp gần 4 lần kế hoạch tháng; Google chưa có lead mới nào dù đã dùng khoảng 31% ngân sách và vẫn ghi nhận doanh thu nhỏ từ khách cũ, cho thấy nguồn này gần như không đóng góp data đầu vào." },
        { type: 'normal', text: "Kho lead tháng này còn nhiều dư địa khai thác: trong 38 lead đã về có tới 13 lead từng liên hệ được nhưng chưa chốt và 4 lead chưa từng liên hệ, nghĩa là còn ít nhất 17 data ấm và nguội chưa được tận dụng tối đa; nếu không có chiến dịch gọi lại và nuôi lại nhóm này trong những tuần tới, tỷ lệ chuyển đổi và doanh thu khách mới sẽ khó cải thiện kịp mục tiêu." },
      ],
      suggestion: "Siết lại cơ cấu ngân sách quảng cáo giữa Facebook, Google và TikTok trong 7-10 ngày tới"
    }
  ];

  return (
    <div className="mb-10 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="text-red-500 fill-red-500" size={16} />
        <h3 className="text-sm font-bold text-white uppercase tracking-wide">CẦN BAN LÃNH ĐẠO CAN THIỆP</h3>
        <span className="text-xs text-slate-500 ml-2">AI xếp hạng theo mức khẩn — kèm lý do, không chỉ dán màu · 4 chi nhánh</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {alerts.map((alert, idx) => (
          <div key={idx} className="bg-[#111827] border border-slate-800 rounded-lg flex flex-col overflow-hidden">
            {/* Thân card */}
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-bold text-white text-sm">{alert.name}</span>
                  <span className="text-slate-500 text-xs ml-2">{alert.region}</span>
                </div>
                <span className="bg-red-950/40 text-red-400 border border-red-900/50 text-[10px] px-2 py-0.5 rounded font-medium">
                  {alert.level}
                </span>
              </div>
              
              <div className="space-y-4">
                {alert.content.map((p, pIdx) => (
                  <p key={pIdx} className={`text-[13px] leading-relaxed ${p.type === 'danger' ? 'text-red-400 font-medium' : 'text-slate-400'}`}>
                    {p.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Footer card (AI Đề xuất) */}
            <div className="bg-[#0f1523] border-t border-slate-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-medium">
                <Sparkles size={14} className="flex-shrink-0" />
                <span className="uppercase text-[10px] font-bold tracking-wider flex-shrink-0">AI ĐỀ XUẤT</span>
                <span className="text-slate-300 ml-1 truncate" title={alert.suggestion}>{alert.suggestion}</span>
              </div>
              <button className="bg-[#1e293b] text-white text-xs px-4 py-1.5 rounded hover:bg-slate-700 transition-colors border border-slate-700 flex-shrink-0">
                Chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
