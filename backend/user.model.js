//jshint esversion:6

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BlogSchema = Schema({
    date: {
         type : Date, default: Date.now 
    },
    title :{
        type : String
    },
    content :{
        type : String
    }

});

let SkillSchema = Schema({
    name : {
        type : String
    },
    rating :{
        type : Number
    }

});

let TeamSchema = Schema({
    name :{
        type : String
    },
    technology :{
        type : String
    }

});


let User = Schema({
    name :{
        type:String
    },
    userName :{
        type:String
    },
    userType:{
        type:String
    },
    rating:{
        type: Number
    },
    about:{
        content:{
            type:String
        },
        github:{
            type: String
        },
        linkedIn:{
            type: String
        },
        facebook:{
            type:String
        },
        weblink:[{
            type : String
        }],
        skills :[SkillSchema]
        },
    team : [TeamSchema],
    blogs:[BlogSchema]

});

module.exports= mongoose.model("User",User);