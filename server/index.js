const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


require('dotenv/config');


  


mongoose.connect(process.env.url,{ useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false});
const con = mongoose.connection;

con.on('open',()=>{
    console.log('DB connected..!')
})
//for handel post req
app.use(express.json())

//handel requst form diffrent orgin
app.use(cors())



//routes 
const signup = require('./signup/route/route');
app.use('/signup',signup);
const signin = require('./signin/route/route')
app.use('/signin',signin);


app.listen(9000,()=>{
    console.log("server start at port:9000")
})