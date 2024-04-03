const Blog = require("../models/blogsModel");
const mongoose = require("mongoose");
// Get all blogs

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single blog

const getSingleBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Manga Not Found" });
  }
  try {
    const blogs = await Blog.findById(id);
    if (!blogs) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a blog

const createBlog = async (req, res) => {
  const { title, description, price } = req.body;
  
  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (!price) {
    emptyFields.push('price')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }
  try {
    // Check if the email already exists in the database
    
    const existingName = await Blog.findOne({
      title: req.body.title,
    });
    if (existingName) {
      return res.status(400).json({ message: "This Manga already exists" });
    }
    const blogs = await Blog.create({ title, description, price });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a blog

const updateBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Manga Not Found" });
  }
  try {
    const blogs = await Blog.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!blogs) {
      return res.status(404).json({ error: "Manga Not Found" });
    }
    res.status(200).json(blogs);
    // res.status(200).json({message: 'Updated Succefully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a blog

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Manga" });
  }
  try {
    const blogs = await Blog.deleteOne({ _id: id });
    if (!blogs) {
      return res.json({ error: "Manga Not Found" });
    }
    // res.status(200).json(blogs);
    res.json({ message: "Manga deleted succefully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};
