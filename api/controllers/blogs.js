const Blog = require('../models/Blog');

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
            return res.status(204).end()
        }

    } catch (err) {
        return res.status(400).json({success: false, msg: `Blog id ${req.params.id} is invalid`})
    }
};

// @DESC        CREATE A SINGLE BLOG
// @ROUTE       POST /api/v1/blogs
// @ACCESS      PRIVATE
exports.createBlog = async (req, res, next) => {
    try{
        const newBlog = new Blog(req.body)
        const alreadyExists = await Blog.findOne({"title": req.body.title })
        console.log(alreadyExists)
        if (alreadyExists) {
            return res.status(400).json({success: false, msg: "Blog with that title already exists"})
        }
        newBlog.save()
        return res.status(203).json({success: true, msg: `Successfully created new Blog ${newBlog.title}`})
    } catch (err) {
        return res.status(500).json({success: false, msg: "An error occured saving blog to database", err: err})
    }
};

// @DESC        UPDATE A SINGLE BLOG
// @ROUTE       PUT /api/v1/blogs/:id
// @ACCESS      PRIVATE
exports.updateBlog = async (req, res, next) => {
    try{
        const blog = await Blog.findOneAndUpdate({_id: req.params.id}, req.body, { new: true})
        if(blog){
            return res.status(200).json({success: true, msg: blog})
        } else {
            return res.status(404).json({success: false, msg: `${req.params.id} was not found in blogs`})
        }

    } catch (err) {
        return res.status(400).json({success: false, msg: `Blog id ${req.params.id} is invalid`})
    }

};

// @DESC        DELETE A SINGLE BLOG
// @ROUTE       DELETE /api/v1/blogs/:id
// @ACCESS      PRIVATE
exports.deleteBlog = async (req, res, next) => {
    try{
        const blog = await Blog.findOneAndDelete({_id: req.params.id})
        if(blog && String(blog._id) === String(req.params.id)){
            return res.status(200).json({success: true, msg: `${blog.title} (${req.params.id})successfully deleted.`})
        } else {
            return res.status(404).json({success: false, msg: `${req.params.id} was not found in blogs`})
        }

    } catch (err) {
        console.log(err)
        return res.status(400).json({success: false, msg: `Blog id ${req.params.id} is invalid`})
    }
};