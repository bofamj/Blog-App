const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const Blog = require('../models/blog')

//* get all bloges
const getAllBlogs = async (req,res)=>{
    const bloges = await Blog.find()
    res.status(StatusCodes.OK).json({bloges,count:bloges.length})
}


//*create a blog
const createBlog =async (req,res)=>{
     const {titel,discripion,image}=req.body
    if(!titel  || !discripion || !image){
        throw new BadRequestError('please provide the title discripion and imge')
    } 

    req.body.createdBy = req.user.userId
    const blog = await Blog.create(req.body)
    res.status(StatusCodes.CREATED).json(blog)
}


//*get a singel blog
const getBlog =async (req,res)=>{
    const {user:{userId},params:{id:blogId}} = req
    const blog = await Blog.findOne({id:blogId,createdBy:userId})

    res.status(StatusCodes.OK).json(blog)
}

//* update a single blog
const updateBlog =async (req,res)=>{
    const {user:{userId},params:{id:blogId},body:{titel,discripion,image}} = req
    const blog = await Blog.findByIdAndUpdate({_id:blogId,createdBy:userId},req.body,{new:true,runValidators:true})
    res.status(StatusCodes.OK).json(blog)
}


//* delete a single blog
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