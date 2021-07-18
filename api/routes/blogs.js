const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogs');

// ROUTES FOR /api/v1/bootcamps/

router.route('/').get(getBlogs).post(createBlog);

router
  .route('/:id')
  .get(getBlog)
  .put(updateBlog)
  .delete(deleteBlog);

module.exports = router;