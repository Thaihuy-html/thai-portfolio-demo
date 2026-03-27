import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgSolar5 from '../assets/solar5.jpg'; 
import imgSolar2 from '../assets/solar2.jpg';

const Blog = () => {
  // 1. Tạo trạng thái để lưu danh sách bài viết
  const [posts, setPosts] = useState([]);

  // 2. Hàm lấy dữ liệu từ Backend
  useEffect(() => {
    fetch('https://thai-backend-ph5l.onrender.com/api/posts')
      .then(response => response.json())
      .then(data => {
        // Nếu bài viết từ AI thiếu ảnh hoặc mô tả, chúng ta sẽ gán mặc định cho nó đẹp
        const formattedData = data.map(post => ({
          ...post,
          img: post.image || imgSolar5, // Nếu AI không gửi ảnh, dùng ảnh solar5
          desc: post.description || post.content.substring(0, 150) + "...", // Cắt ngắn nội dung làm mô tả
          date: post.date || "Mới nhất"
        }));
        setPosts(formattedData);
      })
      .catch(error => console.error('Lỗi lấy dữ liệu:', error));
  }, []);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen bg-[#0a1628]">
      <div className="mb-12 border-l-4 border-[#4ade80] pl-6">
        <p className="text-[#4ade80] font-medium tracking-widest text-sm uppercase mb-2">Kiến thức chuyên ngành</p>
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">Blog Kỹ Thuật</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="group bg-[#112240] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#4ade80]/50 transition-all duration-300 shadow-xl">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>

            <div className="p-8">
              <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#4ade80]"></span>
                {post.date}
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#4ade80] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed line-clamp-2">
                {post.desc}
              </p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 bg-[#4ade80]/10 text-[#4ade80] px-6 py-3 rounded-xl font-bold hover:bg-[#4ade80] hover:text-[#0a1628] transition-all border border-[#4ade80]/20">
                Xem chi tiết →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;