import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="px-8 py-6 fixed top-0 w-full z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-white">THAI HUY</span>
          <span className="text-[#4ade80]">TECH</span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-[#4ade80] transition-colors font-medium">
            Trang chủ
          </Link>
          <a href="#about" className="text-gray-300 hover:text-[#4ade80] transition-colors font-medium">
            Giới thiệu
          </a>
          <a href="#services" className="text-gray-300 hover:text-[#4ade80] transition-colors font-medium">
            Năng lực
          </a>
          <Link to="/blog" className="text-gray-300 hover:text-[#4ade80] transition-colors font-medium">
            Blog kỹ thuật
          </Link>
        </nav>

        {/* Cụm nút hành động */}
        <div className="flex items-center gap-6">
          <Link 
            to="/sign-in" 
            className="hidden md:block text-sm text-gray-400 hover:text-[#4ade80] transition-colors font-medium"
          >
            Admin
          </Link>
          
          {/* Nút Liên hệ đã sửa lỗi bị tối */}
          <button className="bg-[#4ade80] text-[#a8b2c5] font-bold px-6 py-2.5 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#4ade80]/20 active:scale-95">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </header>
  );
}