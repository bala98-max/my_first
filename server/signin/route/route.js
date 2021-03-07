const express = require('express');
const mongoose = require('mongoose');

const route = express.Router();

const SinUser = require('../schema/schema');
const SupUser = require('../../signup/schema/schema');
const { findById } = require('../schema/schema');

route.post('/',async(req,res)=>{
    const user = req.body;
    const find = await SupUser.find({ UserName: user.username});
   if(find.length == 1){
        if (user.password === find[0].Password) {
            res.json('yep')
        } else{
            res.json('please enter the valid password')
        }
   }else{
       res.json('Invalid username')
   }
   
})
 


module.exports = route;