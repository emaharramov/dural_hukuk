const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: { type: String }, // Resim URL'sini saklayacak alan
  tags: [{ type: String }], // Tag'leri dizi olarak saklamak için alan
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);