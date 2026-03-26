import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"; // ĐẢM BẢO CÓ DÒNG NÀY
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import SignInPage from "./pages/SignInPage";
import Editor from "./pages/Editor";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a1628] text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/admin/editor" element={<Editor />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}