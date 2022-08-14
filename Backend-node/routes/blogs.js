const express = require('express');
const blogsHandler = require('../handlers/blogs');
const auth = require('../auth/authentication');

router = express.Router();

router.route('/')
    .get(blogsHandler.getAllBlogs)
    .post(blogsHandler.createBlogs);

router.route('/:blogsID')
    .get(blogsHandler.getBlogByID)
    .put(blogsHandler.updateBlog)
    .delete(blogsHandler.deleteBlogs);

module.exports = router;