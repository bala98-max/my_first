const mongoose = require('mongoose');


const user = new mongoose.Schema({
    UserName:{
        type:String,
        minlength:3,
        maxlength:15,
        lowercase:true,
        match:/[a-z]/
    },
    Email:{
        type:String,
        lowercase:true,
        match:/^([a-z\d-]+)@([a-z]+)\.([a-z]{2,4})$/
    },
    Mobile:{
        type:String,
        match:/^(0|[+91]{3})?[7-9][0-9]{9,12}$/
    },
    Password:{
        type:String,
        minlength:6,
        maxlength:16,
        match:/[a-z\d-]/
    }
})


module.exports = mongoose.model("SupUser",user);