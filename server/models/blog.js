const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    titel:{
        type:String,
        require:[true,'please add a titel']
    },
    discripion:{
        type:String,
        require:[true,'please add a discripion']
    },
    image:{
        type:String,
        require:[true,'please add a image']
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:[true,'please provide user']
    }
},{timestamps:true})



module.exports = mongoose.model('Blog',blogSchema)