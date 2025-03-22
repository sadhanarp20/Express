const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
})

const empModel = mongoose.model("emp",empSchema);
module.exports = empModel;