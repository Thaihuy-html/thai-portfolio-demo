const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const app = express();
app.use(express.json());

const supabase = createClient('URL_SUPABASE_CUA_BAN', 'KEY_SUPABASE_CUA_BAN');

// Endpoint để Coze gọi vào
app.post('/add-blog', async (req, res) => {
  const { title, content } = req.body;
  const { data, error } = await supabase
    .from('blogs')
    .insert([{ title, content, author: 'AI Agent' }]);
  
  if (error) return res.status(500).json(error);
  return res.json({ message: "Đã đăng bài thành công!", data });
});

app.listen(3000, () => console.log('Server chạy trên cổng 3000'));