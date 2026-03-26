export default function ServicesSection() {
  const offerings = [
    { title: "Lắp đặt & Giám sát", desc: "Năng lực chuyên môn vượt trội trong lắp đặt hiện trường và giám sát hệ thống điện mặt trời (Solar PV)." },
    { title: "Quản lý tiến độ", desc: "Đảm bảo bàn giao dự án đúng hạn, tối thiểu hóa sai sót lắp đặt và giảm thiểu việc phải làm lại (rework)." },
    { title: "Điều phối kỹ thuật", desc: "Kỹ năng điều phối hiệu quả với các nhà thầu EPC, thực hiện báo cáo và hồ sơ hiện trường minh bạch." },
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-[#4ade80] uppercase tracking-widest text-sm mb-2 font-bold italic">Special Offer</p>
        <h2 className="text-4xl font-bold text-white">Năng lực chuyên môn chuyên sâu</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {offerings.map((s, i) => (
          <div key={i} className="bg-[#112240] p-10 rounded-2xl border border-gray-800 hover:border-[#4ade80]/50 transition-all group">
            <h3 className="text-xl font-bold text-[#4ade80] mb-4 group-hover:text-white transition-colors">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed italic">"{s.desc}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}