const express = require('express');
const router = express.Router();
const {getAllBlogs} = require('../controllers/blog')

router.get('/',getAllBlogs)





module.exports = router;