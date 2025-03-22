const express = require('express');

 const app = express();
 app.get("/",(req,resp)=>{
    resp.end("hello get request...");
 })

 app.post("/addData",(req,resp)=>{
    resp.end("Added..");
 })

 app.listen(2222,()=>{
    console.log("running...");
 })




 