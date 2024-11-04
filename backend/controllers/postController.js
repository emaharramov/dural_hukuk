// controllers/postController.js
const Post = require("../models/Post");

// Tüm gönderileri getirme
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name"); // Gönderileri kullanıcı adlarıyla birlikte getir
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Belirli bir gönderiyi ID ile getirme
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "name");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Yeni bir gönderi oluşturma
exports.createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Resim dosyasının yolunu al

    const post = await Post.create({
      title,
      content,
      tags: tags || [], // Tags yoksa boş dizi olarak kaydet
      image: imageUrl,
      author: req.user.id, // Kullanıcının ID'sini al (auth middleware'dan geliyor)
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Belirli bir gönderiyi güncelleme
exports.updatePost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Yalnızca gerekli alanları güncelle
    post.title = title || post.title;
    post.content = content || post.content;
    post.tags = tags || post.tags;
    if (imageUrl) post.image = imageUrl;

    await post.save(); // Değişiklikleri kaydet
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Belirli bir gönderiyi silme
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
