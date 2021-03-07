const mongoose = require('mongoose');



const user = new mongoose.Schema({
    UserName:{
        type:String,
        minlength:3,
        maxlength:12,
        lowercase:true,
        match:/[a-z]/
    },
    Password:{
        type:String,
        minlength:6,
        maxlength:8,
        match:/[a-z\d-]/
    }
})

module.exports = mongoose.model('SinUser',user);