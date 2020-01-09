//jshint esversion:6

const mongoose = require("mongoose");
const Schema = mongoose.Schema;




let Internship = Schema({
    name :{
        type:String
    },
    companyName :{
        type:String
    },
    skillSet:{
        type:[String]
    },
    location:{
        type:String
    },
    stipend:{
        type:Number
    },
    duration:{
        type:Number
    }

});

module.exports= mongoose.model("Internship",Internship);