// 1. Import hình ảnh từ thư mục assets (Dùng dấu ../ để lùi ra ngoài thư mục pages)
import solarImg from '../assets/solar.jpg'; 

export default function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* CỘT BÊN TRÁI: NỘI DUNG CHỮ */}
        <div className="order-2 md:order-1">
          <p className="text-[#4ade80] font-medium tracking-widest mb-4 uppercase text-sm border-l-2 border-[#4ade80] pl-3">
            Chuyên gia năng lượng mặt trời
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Chào bạn, tôi là <br />
            <span className="text-[#4ade80]">Đỗ Quang Thái</span>
          </h1>
          <h2 className="text-2xl text-gray-300 mb-6 font-semibold italic">
            Kỹ sư hiện trường (Solar Site Engineer)
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Kỹ sư điện hiện trường dày dặn kinh nghiệm với chuyên môn vững chắc về giám sát công trường, lắp đặt hệ thống điện và quản lý kỹ thuật. Cam kết về chất lượng, an toàn và hiệu quả dự án.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#4ade80] text-[#7a8daa] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:bg-white transition-all duration-300">
              Lưu liên hệ
            </button>
            <button className="border border-gray-700 text-white px-8 py-4 rounded-xl hover:bg-white/5 transition-all">
              Tải hồ sơ năng lực
            </button>
          </div>
        </div>

        {/* CỘT BÊN PHẢI: HÌNH ẢNH solar.JPG */}
        <div className="relative group order-1 md:order-2">
          {/* Hiệu ứng khung trang trí phía sau ảnh */}
          <div className="absolute -inset-4 border-2 border-[#4ade80]/20 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
          
          <div className="w-full h-[550px] bg-[#112240] rounded-3xl border border-gray-800 flex items-center justify-center overflow-hidden relative shadow-2xl">
            {/* THAY ĐỔI TẠI ĐÂY: Sử dụng biến solarImg đã import */}
            <img 
              src={solarImg} 
              alt="Kỹ sư Đỗ Quang Thái" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
            />
            
            {/* Lớp phủ trang trí trên ảnh */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60"></div>
            
            <div className="absolute bottom-8 left-8 right-8 text-center bg-[#0a1628]/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              <span className="text-[#4ade80] text-xl font-bold block">THAIHUYTECH.IO</span>
              <span className="text-white/30 text-xs font-black uppercase tracking-[0.2em]">Solar Energy Solutions</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}