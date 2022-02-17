const { StatusCodes } = require('http-status-codes')

const getAllBlogs = (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'all blogs'})
}






module.exports ={
    getAllBlogs
}