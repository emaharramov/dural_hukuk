const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const { protect, isAdmin } = require("../middlewares/authMiddlewares");
const upload = require("../middlewares/upload");
const router = express.Router();

router
  .route("/")
  .get(getPosts)
  .post(protect, isAdmin, upload.single("image"), createPost);

router
  .route("/:id")
  .get(getPostById)
  .put(protect, isAdmin, updatePost)
  .delete(protect, isAdmin, deletePost);

module.exports = router;
