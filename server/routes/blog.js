const express = require('express');
const router = express.Router();
const { getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,
    getUserBloges} = require('../controllers/blog')
                
router.route('/user').get(getUserBloges)
router.route('/').get(getAllBlogs).post(createBlog)
router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog)





module.exports = router;