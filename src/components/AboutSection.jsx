// 1. Import 2 tấm hình từ thư mục assets
import imgSolar2 from '../assets/solar2.jpg';
import imgSolar3 from '../assets/solar3.jpg';

export default function AboutSection() {
  return (
    <section className="px-8 py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* CỘT BÊN TRÁI: THÔNG TIN CHỮ */}
        <div className="space-y-6">
          <p className="text-[#4ade80] text-sm uppercase tracking-wider font-bold border-l-2 border-[#4ade80] pl-3">
            Về tôi
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Tại sao nên chọn tôi cho dự án của bạn?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Tôi là một kỹ sư điện hiện trường có năng lực chuyên môn vững chắc. Sự kết hợp giữa kỹ năng quản lý và kiến thức kỹ thuật chuyên sâu giúp tôi luôn đảm bảo dự án vận hành an toàn nhất.
          </p>
          <ul className="space-y-4">
            {[
              'Chuyên gia thiết kế Solar', 
              'Quản lý dự án chuyên nghiệp', 
              'Kỹ sư vận hành & bảo trì (O&M)', 
              'Điều phối nhà thầu EPC'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white font-medium hover:text-[#4ade80] transition-colors duration-300">
                <span className="w-2 h-2 bg-[#4ade80] rounded-full shadow-[0_0_8px_#4ade80]"></span> 
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CỘT BÊN PHẢI: 2 TẤM HÌNH SOLAR2 VÀ SOLAR3 */}
        <div className="grid grid-cols-2 gap-6 relative">
            {/* Hiệu ứng decor phía sau */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#4ade80]/10 blur-3xl -z-10"></div>
            
            {/* TẤM HÌNH 1: solar2.jpg */}
            <div className="h-80 bg-[#112240] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group relative">
                <img 
                  src={imgSolar2} 
                  alt="Dự án Solar 2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-[#4ade80] text-xs font-bold uppercase">Field Work</span>
                </div>
            </div>
            
            {/* TẤM HÌNH 2: solar3.jpg (có mt-12 để tạo độ lệch so le đẹp mắt) */}
            <div className="h-80 bg-[#112240] rounded-2xl mt-12 overflow-hidden shadow-2xl border border-white/5 group relative">
                <img 
                  src={imgSolar3} 
                  alt="Dự án Solar 3" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-[#4ade80] text-xs font-bold uppercase">Installation</span>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
}