const User = require('../models/User')
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors')


const auth = async (req,res,next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('Invalid authorization')
    }
    const token = jwt.authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token,process.env.SECRET_KEY)
        req.user =  {userId:payload.userId,name:payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Invalid authorization')
    }
}


module.exports = auth