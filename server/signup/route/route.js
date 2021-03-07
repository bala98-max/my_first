const express = require('express');
const mongoose = require('mongoose');
const { update, db } = require('../schema/schema');

const route = express.Router();

const SupUser = require('../schema/schema');


route.get('/',async(req,res)=>{

    try{
        const find = await SupUser.find();
        res.json(find)
    }catch(err){
        res.send(err)
    }
})


route.post('/', async(req,res)=>{

    const username = await req.body.username;
    const find = await SupUser.find({ UserName:username });
   
    
    if(find.length == 0){
        const newuser = await new SupUser({
            UserName : req.body.username,
            Email : req.body.email,
            Password : req.body.password,
            Mobile: req.body.mobile,
            })
            const save =  await newuser.save()
              
        try{
            res.send(save)
        }catch(err){
            res.json(err)
        }
    }else{
        res.json('username is not available')
    }
})  

route.put('/:username',async (req,res)=>{
    const name = await req.params.username;
    const user = await SupUser.find({UserName: name});
    
    // console.log(name)
if(user.length == 0){
    res.send("invaild")
}else{
    
    const id = await user[0]. _id;

    const data = await req.body;

    const Update = await SupUser.findByIdAndUpdate(
        {_id : id},
        {$set:{ Email: data.email, Mobile: data.mobile}}
    )
 
    try{
        const save = await Update.save()
        res.send(save)
    }catch(err){
        res.json('Error')
    }
}
    
    
})
route.delete('/:username',async(req,res)=>{
    const name = await req.params.username;
    const user  = await SupUser.find({UserName: name});
    const id = user[0]._id;
    try{
     
    const user = await SupUser.findByIdAndDelete({_id: id});
        res.json('deleted')
    }catch(err){
        res.json(err)
    }
})

module.exports = route;