const Blog = require('../models/Blog');

// @DESC        GET ALL BLOGS
// @ROUTE       GET /api/v1/blogs
// @ACCESS      PUBLIC
exports.getBlogs = async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: 'Get All Blogs'
    })
};

// @DESC        GET SINGLE BLOGS
// @ROUTE       GET /api/v1/blogs/:id
// @ACCESS      PUBLIC
exports.getBlog = async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: 'Single Blog'
    })
};

// @DESC        CREATE A SINGLE BLOG
// @ROUTE       POST /api/v1/blogs/:id
// @ACCESS      PRIVATE
exports.createBlog = async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: 'Blog Created'
    })
};

// @DESC        UPDATE A SINGLE BLOG
// @ROUTE       PUT /api/v1/blogs/:id
// @ACCESS      PRIVATE
exports.updateBlog = async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: 'Blog updated'
    })
};

// @DESC        DELETE A SINGLE BLOG
// @ROUTE       DELETE /api/v1/blogs/:id
// @ACCESS      PRIVATE
exports.deleteBlog = async (req, res, next) => {
    res.status(200).json({
        success: true,
    })
};