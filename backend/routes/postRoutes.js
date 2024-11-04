const express = require("express");
const { getPosts, getPostById, createPost, updatePost, deletePost } = require("../controllers/postController");
const { protect, isAdmin } = require("../middlewares/authMiddlewares");
const upload = require("../middlewares/upload"); // Dosya yükleme için middleware
const router = express.Router();

router.route("/")
  .get(getPosts)                 // Tüm gönderileri listeleme (herkes erişebilir)
  .post(protect, isAdmin, upload.single("image"), createPost); // Yeni gönderi oluşturma (yalnızca admin)

router.route("/:id")
  .get(getPostById)              // Belirli bir gönderiyi getirme (herkes erişebilir)
  .put(protect, isAdmin, updatePost)   // Belirli bir gönderiyi güncelleme (yalnızca admin)
  .delete(protect, isAdmin, deletePost); // Belirli bir gönderiyi silme (yalnızca admin)

module.exports = router;