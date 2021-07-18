const Blog = require('../models/Blog');
const mongoose = require('mongoose')

// @DESC        GET ALL BLOGS
// @ROUTE       GET /api/v1/blogs
// @ACCESS      PUBLIC
exports.getBlogs = async (req, res, next) => {
    const blogs = await Blog.find({}, (err, data) => {
        if (err) return res.status(500).json(err)
        return data
    })
    res.status(200).json(blogs)
};

// @DESC        GET SINGLE BLOGS
// @ROUTE       GET /api/v1/blogs/:id
// @ACCESS      PUBLIC
exports.getBlog = async (req, res, next) => {
    try{
        const blog = await Blog.findById(req.params.id)
        if(blog){
            return res.status(200).json(blog)
        } else {
            return res.status(200).json({success: false, msg: `Blog by id ${req.params.id} not found.`})
        }
        
    } catch (err) {
        return res.status(400).json({success: false, msg: `Blog id ${req.params.id} is invalid`})
    }

    
};

// @DESC        CREATE A SINGLE BLOG
// @ROUTE       POST /api/v1/blogs/:id
// @ACCESS      PRIVATE
exports.createBlog = async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: 'Blog Created'
    })

    // const blog1 = new Blog({
    //     title: 'Test2',
    //     description: 'test2 desc',
    //     author: 'Zack cook2',
    //     email: 'Zack2@zack.com',
    //   })
      
    //   blog1.save((err, res) => {
    //     if (err) {
    //       return console.log(err)
    //     }
    //     return console.log('success')
    //   })
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