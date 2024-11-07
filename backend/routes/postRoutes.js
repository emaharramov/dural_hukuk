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
  .get(getPosts) // Lists all posts, accessible to everyone
  .post(protect, isAdmin, upload.single("image"), createPost); // Create a new post, admin only

router
  .route("/:id")
  .get(getPostById) // Retrieve a specific post, accessible to everyone
  .put(protect, isAdmin, updatePost) // Update a specific post, admin only
  .delete(protect, isAdmin, deletePost); // Delete a specific post, admin only

module.exports = router;
