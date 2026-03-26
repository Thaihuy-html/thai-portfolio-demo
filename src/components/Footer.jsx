export default function Footer() {
  return (
    <footer className="bg-[#112240] py-16 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Cột 1: Giới thiệu ngắn */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            ĐỖ QUANG <span className="text-[#4ade80]">THÁI</span>
          </h3>
          <p className="text-gray-400 max-w-xs leading-relaxed italic">
            "Kỹ sư điện hiện trường dày dặn kinh nghiệm, chuyên thi công và bảo trì hệ thống điện mặt trời (Solar)."
          </p>
        </div>

        {/* Cột 2: Thông tin liên hệ lấy từ hình ảnh của bạn */}
        <div className="space-y-4">
          <p className="text-white font-bold uppercase tracking-widest text-sm">Thông tin liên hệ</p>
          <div className="text-gray-400 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[#4ade80]">📧</span>
              <a href="mailto:qthaido@gmail.com" className="hover:text-[#4ade80] transition-all">qthaido@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#4ade80]">📞</span>
              <a href="tel:+84934656359" className="hover:text-[#4ade80] transition-all">0934.656.359</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#4ade80]">📍</span>
              <span>Võ Dõng, Thống Nhất, Đồng Nai</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#4ade80]">🌐</span>
              <span className="text-sm">Thaihuytech.io</span>
            </div>
          </div>
        </div>

        {/* Cột 3: Liên kết nhanh hoặc Mạng xã hội */}
        <div>
          <p className="text-white font-bold uppercase tracking-widest text-sm mb-6">Kết nối</p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-xl bg-[#0a1628] border border-gray-700 flex items-center justify-center text-white hover:border-[#4ade80] hover:text-[#4ade80] transition-all group">
              <span className="font-bold">FB</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-[#0a1628] border border-gray-700 flex items-center justify-center text-white hover:border-[#4ade80] hover:text-[#4ade80] transition-all group">
              <span className="font-bold">ZL</span>
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-500 italic">
            * Tư vấn kỹ thuật 24/7
          </p>
        </div>
      </div>

      {/* Dòng bản quyền dưới cùng */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm">
        © 2026 Đỗ Quang Thái. Thiết kế bởi ThaiHuyTech.
      </div>
    </footer>
  );
}