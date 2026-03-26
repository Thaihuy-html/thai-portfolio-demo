import { useParams, Link } from 'react-router-dom';
// 1. THÊM DÒNG NÀY: Import hình ảnh từ thư mục assets
import hinhSolar4 from '../assets/solar4.jpg'; 

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl min-h-screen">
      <Link to="/blog" className="text-[#4ade80] hover:underline mb-8 inline-block font-medium">
        ← Quay lại danh sách
      </Link>
      
      <article>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Bài viết kỹ thuật số {id}: Giải pháp năng lượng sạch
        </h1>
        <div className="flex items-center gap-4 text-gray-400 mb-10">
          <span className="bg-[#4ade80]/20 text-[#4ade80] px-3 py-1 rounded text-xs">Kỹ Thuật Solar</span>
          <span>Ngày đăng: 22/03/2026</span>
        </div>

        {/* 2. SỬA CHỖ NÀY: Thay link Unsplash bằng biến hinhSolar4 */}
        <div className="w-full h-[450px] bg-gray-800 rounded-3xl mb-12 overflow-hidden shadow-2xl border border-white/5">
          <img 
            src={hinhSolar4} 
            alt="Giải pháp Solar 4" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
          />
        </div>

        <div className="text-gray-300 text-lg leading-loose space-y-6">
          <p>Năng lượng mặt trời không chỉ là xu hướng, mà là giải pháp bền vững cho tương lai. Trong bài viết này, chúng ta sẽ đi sâu vào các khía cạnh kỹ thuật...</p>
          <h2 className="text-2xl font-bold text-[#4ade80]">1. Tầm quan trọng của giám sát công trường</h2>
          <p>Là một kỹ sư hiện trường, việc đảm bảo từng tấm pin được lắp đúng góc nghiêng là yếu tố tiên quyết...</p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;