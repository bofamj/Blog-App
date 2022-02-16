const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'pleass provide a name'],
        minlength:3,
        maxlength:50
    },
    email: {
        type:String,
        require:[true,'pleass provide email'],
        unique:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'please provide a valid email']
    },
    password: {
        type:String,
        require:[true,'pleass provide a password'],
        minlength:6,
    }
})


module.exports = mongoose.model('User', UserSchema)