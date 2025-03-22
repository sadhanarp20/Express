const express = require('express');

const app = express();

app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(2000,()=>{
    console.log("connected to server")
})