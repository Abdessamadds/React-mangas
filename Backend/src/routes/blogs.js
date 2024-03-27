const express = require("express");
const router = express.Router();
// const Blogs = require('../models/blogsModel');
const { createBlog, getAllBlogs, getSingleBlog, deleteBlog, updateBlog } = require("../controllers/blogsController");

// Get All workouts
router.get("/", getAllBlogs);

// get single workout
router.get("/:id", getSingleBlog);

// Post a new blog
router.post("/", createBlog);

// Delete a blog
router.delete("/:id", deleteBlog);

// Update a  blog
router.patch("/:id",updateBlog);

module.exports = router;
