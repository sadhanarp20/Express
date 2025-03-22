const express = require('express');
const connectMongo = require('./db.js');
const empRoute = require('./route/empRoute.js');

connectMongo();

const app = express();
app.use(express.json());

app.get("/test",(req,resp)=>{
    resp.end("hi");
})

app.use("/emp",empRoute)
app.listen(2020,()=>{
    console.log("running");

})