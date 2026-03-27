import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import các hình ảnh từ thư mục assets của bạn
import imgSolar5 from '../assets/solar5.jpg'; 
import imgSolar2 from '../assets/solar2.jpg';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Danh sách các bài viết có sẵn (Hard-coded)
  const manualPosts = [
    { 
      id: "manual-1", 
      title: "Kỹ thuật lắp đặt Inverter tiết kiệm diện tích", 
      desc: "Làm thế nào để bố trí hệ thống biến tần tối ưu cho các hộ gia đình và doanh nghiệp nhằm đảm bảo hiệu suất cao nhất...", 
      date: "22/03/2026", 
      img: imgSolar5 
    },
    { 
      id: "manual-2", 
      title: "Quy trình bảo trì tấm pin mặt trời định kỳ", 
      desc: "Hướng dẫn các bước vệ sinh và kiểm tra hiệu suất pin định kỳ hàng năm giúp tăng tuổi thọ và độ bền cho hệ thống...", 
      date: "20/03/2026", 
      img: imgSolar2 
    },
  ];

  useEffect(() => {
    // 2. Gọi API để lấy bài viết mới từ Coze/Render
    fetch('https://thai-backend-ph5l.onrender.com/api/posts')
      .then(response => response.json())
      .then(data => {
        // Chuẩn hóa dữ liệu từ AI để khớp với giao diện của bạn
        const aiPosts = data.map(post => ({
          id: post.id || Math.random(), 
          title: post.title,
          // Nếu không có mô tả ngắn, lấy 150 ký tự đầu của nội dung
          desc: post.description || post.content.substring(0, 150) + "...", 
          date: post.date || "Mới nhất",
          // Nếu AI không gửi ảnh, dùng ảnh solar mặc định
          img: post.image || imgSolar5 
        }));

        // 3. GỘP MẢNG: Bài cũ hiện trước, bài AI hiện sau
        // Nếu muốn bài AI hiện lên đầu, hãy đổi thành: [...aiPosts, ...manualPosts]
        setPosts([...manualPosts, ...aiPosts]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Lỗi kết nối API:', error);
        // Nếu API lỗi, vẫn hiện các bài viết cũ để web không bị trống
        setPosts(manualPosts);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen bg-[#0a1628]">
      {/* Tiêu đề trang */}
      <div className="mb-12 border-l-4 border-[#4ade80] pl-6">
        <p className="text-[#4ade80] font-medium tracking-widest text-sm uppercase mb-2">Kiến thức chuyên ngành</p>
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">Blog Kỹ Thuật</h1>
      </div>

      {loading ? (
        <div className="text-white text-center">Đang tải bài viết...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="group bg-[#112240] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#4ade80]/50 transition-all duration-300 shadow-xl flex flex-col">
              
              {/* PHẦN HÌNH ẢNH */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
              </div>

              {/* PHẦN NỘI DUNG */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[#4ade80]"></span>
                  {post.date}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#4ade80] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-2 bg-[#4ade80]/10 text-[#4ade80] px-6 py-3 rounded-xl font-bold hover:bg-[#4ade80] hover:text-[#0a1628] transition-all border border-[#4ade80]/20"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;