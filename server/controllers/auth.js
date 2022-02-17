const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError}= require('../errors')
const User = require('../models/User')

 const register = async (req,res)=>{
    const {name,email,password} = req.body
    if(!email || !name || !password){
        throw new BadRequestError('please provide name , email and password')
    }
    const user  = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json({user})
} 

const login = (req,res)=>{
    res.send('user logedin')
}


module.exports = {
    register,
    login
}