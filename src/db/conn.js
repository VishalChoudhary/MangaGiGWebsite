const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/dynamicsite").then(()=>{
    console.log("connection success");
}).catch((err)=>{
    console.log(err);
})

