export default function StatsSection() {
  const stats = [
    { label: "Năm kinh nghiệm", value: "05+" },
    { label: "Dự án hoàn thành", value: "100+" },
    { label: "Công suất lắp đặt (MWp)", value: "50+" },
    { label: "Đối tác EPC", value: "20+" },
  ];

  return (
    <section className="py-20 px-8 bg-[#112240]/30 border-y border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-2">{stat.value}</h3>
            <p className="text-gray-400 uppercase text-xs tracking-widest font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}