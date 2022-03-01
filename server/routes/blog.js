const express = require('express');
const router = express.Router();
const { getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,
    getUserBloges} = require('../controllers/blog')
                

router.route('/').get(getAllBlogs).post(createBlog)
router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog)
router.route('/user').get(getUserBloges)




module.exports = router;