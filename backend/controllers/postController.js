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

const fs = require("fs");
const path = require("path");

exports.createPost = async (req, res) => {
  try {
    const { title, content, tags, image } = req.body;

    let imageUrl = null;

    if (image) {
      const uploadDir = path.join(__dirname, "../uploads"); // Directory path
      if (!fs.existsSync(uploadDir)) {
        // Check if the directory exists
        fs.mkdirSync(uploadDir, { recursive: true }); // Create the directory if it does not exist
      }

      // Process Base64 image data
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const imageName = `${Date.now()}-image.jpg`; // Unique file name
      const imagePath = path.join(uploadDir, imageName);

      fs.writeFileSync(imagePath, buffer); // Write the file
      imageUrl = `/uploads/${imageName}`; // URL to be stored in the database
    }

    // Create the post with image URL
    const post = await Post.create({
      title,
      content,
      tags: tags || [],
      image: imageUrl,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error); // Detailed error logging
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

    post.title = title || post.title;
    post.content = content || post.content;
    post.tags = tags || post.tags;
    if (imageUrl) post.image = imageUrl;

    await post.save();
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
