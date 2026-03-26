const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let posts = [];

app.get("/", (req, res) => {
  res.send("Backend OK");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: Date.now(),
    title,
    content,
  };

  posts.push(newPost);

  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server chạy " + PORT);
});