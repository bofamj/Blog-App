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
        default:'data:image/jpeg;base64,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'
        /* require:[true,'please add a image'] */
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:[true,'please provide user']
    }
},{timestamps:true})



module.exports = mongoose.model('Blog',blogSchema)