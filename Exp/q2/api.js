const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/c1_api").then((result)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});


const empSchema = new mongoose.Schema({
    name:{
        type:String,
       required:true  
   },
   salary:{
    type:Number,
    required:true  
   }
})


const empModel = mongoose.model("emp",empSchema);
const app= express();


app.use(express.json());

app.get('/',async(req,resp)=>{
    const result= await empModel.find();
    console.log(result);
    resp.json(result);
    
})


app.post("/emp/add",async(req,resp)=>{
    const data = new empModel({
        name:req.body.name,
        salary:req.body.salary
    })
    const result = await data.save();
    console.log(result);
    resp.json(result)
})


app.put("/emp/update/:id", async(req,resp)=>{
    try{
        const emp = await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log(emp);
        resp.json(emp);
    }catch(error){
        console.log(error);
    }
})
  

app.delete("/emp/delete/:id",async(req,resp)=>{
    try{
        const empId=await empModel.deleteOne({id:req.params.id});
        console.log(empId);
        resp.json(empId);
    }catch (error){
        console.log(error);
    }

})

app.listen(4444,()=>{
    console.log("running....")
})