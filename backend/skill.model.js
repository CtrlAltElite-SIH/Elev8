//jshint esversion:6


const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let SkillSchema = Schema({
    name: {
      type: String
    },
    rating: {
      type: Number
    }
  });
  module.exports= mongoose.model("Skill",Skill);