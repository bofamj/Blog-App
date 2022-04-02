const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError}= require('../errors')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
 const register = async (req,res)=>{
    const {name,email,password} = req.body
    if(!email || !name || !password){
        throw new BadRequestError('please provide name , email and password')
    }
    const user  = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
} 

const login =async (req,res)=>{
    const {email,password} = req.body
    if(!email ||  !password){
        throw new BadRequestError('please provide email and password')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new BadRequestError('please provide the right email')
    }
    const isPassowrd  = await user.comparePassword(password)
    if(!isPassowrd){
         throw new BadRequestError('please provide the right passowrd')
    }
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user:{userId:user._id,name:user.name},token})
}


module.exports = {
    register,
    login
}