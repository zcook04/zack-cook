const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxLength: [50, 'Name can be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxLength: [500, 'Description can not be more than 500 characters'],
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
    maxLength: [50, 'Author can be no longer than 50 characators']
  },
  email: {
    type: String,
    match: [
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
      'Please add a valid email',
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blog', BlogSchema);