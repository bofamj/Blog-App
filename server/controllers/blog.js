const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const Blog = require('../models/blog')

//* get all bloges
const getAllBlogs = async (req,res)=>{
    const bloges = await Blog.find()
    res.status(StatusCodes.OK).json({bloges,count:bloges.length})
}

//*get a user blog

 const getUserBloges = async (req,res)=>{
    const {user:{userId}}=req
    const bloges = await Blog.find({createdBy:userId})
    res.status(StatusCodes.OK).json({bloges,count:bloges.length})
} 


//*create a blog
const createBlog =async (req,res)=>{
     const {titel,discripion,image}=req.body
    if(!titel  || !discripion ){
        throw new BadRequestError('please provide the title and discripion ')
    } 

    req.body.createdBy = req.user.userId
    const blog = await Blog.create(req.body)
    res.status(StatusCodes.CREATED).json(blog)
}


//*get a singel blog
const getBlog =async (req,res)=>{
    const {user:{userId},params:{id:blogId}} = req
    const blog = await Blog.findOne({id:blogId,createdBy:userId})
    if(!blog){
       res.send('ther is no blog') 
    }
    res.status(StatusCodes.OK).json(blog)
}

//* update a single blog
const updateBlog =async (req,res)=>{
    const {user:{userId},params:{id:blogId},body:{titel,discripion,image}} = req
    const blog = await Blog.findByIdAndUpdate({_id:blogId,createdBy:userId},req.body,{new:true,runValidators:true})
    res.status(StatusCodes.OK).json(blog)
}


//* delete a single blog
const deleteBlog =async (req,res)=>{
    const {user:{userId},params:{id:blogId}}=req
    const blog = await Blog.findByIdAndDelete({_id:blogId,createdBy:userId})
    res.status(StatusCodes.OK).send()
}






module.exports ={
    getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,
    getUserBloges
}