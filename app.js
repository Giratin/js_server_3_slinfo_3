const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo/db_name", (Err)=>{
    if(Err){
        console.log(Err);
    }else{
        console.log("db connected");
    }
})

app.get("/", (req,res)=>{
    res.send("Hello World")
})



app.listen(3000, ()=>{console.log('app on 3000');})