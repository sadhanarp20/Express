const express = require('express');

const app = express();

app.get("/",(req,resp)=>{
   resp.sendFile('./test/home.html',{root:__dirname});
})

app.get("about",(req,resp)=>{
    resp.sendFile('./test/about.html',{root_dirname});
})

app.listen(2000,()=>{
    console.log("running...")
})