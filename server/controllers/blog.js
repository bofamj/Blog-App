const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const Blog = require('../models/blog')

//* get all bloges
const getAllBlogs = async (req,res)=>{
    //const blog = await Blog.find()
    res.status(StatusCodes.OK).json(await Blog.find())
    
}
/*const getAllBlogs = async (req,res)=>{
    const bloges = await Blog.find()
    res.status(StatusCodes.OK).json({bloges,count:bloges.length})
    
}*/ 

//*get a user blog

 const getUserBloges = async (req,res)=>{
    try{
        
        //const bloge = await Blog.find({createdBy:req.user.userId})
        res.status(StatusCodes.OK).json(await Blog.find({createdBy:req.user.userId})) 
    }catch(error){
        console.log(error);
    }
    
} 


//*create a blog
const createBlog =async (req,res)=>{
    
        try{
            const {titel,discripion,image}=req.body
            if(!titel||!discripion||!image ){
                //throw new BadRequestError('please provide the title discripion and image ')
                res.status(400).json({err,maseg:'please provide the title discripion and image'})
            } 
            /* if(!titel||!discripion||!image){
                res.status(500).send('please provide the title discripion and image')
            } */
            req.body.createdBy = req.user.userId
            req.body.author = req.user.name
            const blog = await Blog.create(req.body)
            res.status(StatusCodes.CREATED).json(blog)
        }catch(error){
            res.status(400).json({maseg:'please provide the title discripion and image'})
        }
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
    
        //const blog = await Blog.findByIdAndUpdate({_id:blogId,createdBy:userId},req.body,{new:true,runValidators:true})
    res.status(StatusCodes.OK).json(await Blog.findByIdAndUpdate({_id:blogId,createdBy:userId},req.body,{new:true,runValidators:true}))     
  
       
  
}


//* delete a single blog
const deleteBlog =async (req,res)=>{
    const {user:{userId},params:{id:blogId}}=req
    const blog = await Blog.findByIdAndDelete({_id:blogId,createdBy:userId})
    res.status(StatusCodes.OK).json(blog._id)
    
}






module.exports ={
    getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,
    getUserBloges
}