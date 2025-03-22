const mongoose = require('mongoose');
const connectMongo=()=>{
    mongoose.connect("mongodb://localhost:27017/MVC").then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.log(err);
    });

}
module.exports = connectMongo;