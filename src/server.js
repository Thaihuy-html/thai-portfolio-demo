const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let posts = [];

// 👉 API nhận bài từ Coze
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: Date.now(),
    title,
    content,
  };

  posts.push(newPost);

  console.log("Bài mới:", newPost);

  res.json({ success: true });
});

// 👉 API trả bài cho React
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(5000, () => console.log("Server chạy"));