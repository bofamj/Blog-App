const { StatusCodes } = require('http-status-codes')

const getAllBlogs = (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'all blogs'})
}
const createBlog = (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'create user blogs'})
}
const getBlog = (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'all a singel blog'})
}
const updateBlog = (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'update user blogs'})
}
const deleteBlog = (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'delete user blogs'})
}






module.exports ={
    getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
}