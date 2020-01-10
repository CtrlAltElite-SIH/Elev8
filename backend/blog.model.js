const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let Blog = Schema({
    date: {
      type: Date,
      default: Date.now
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    author: {
      type: String
    }
  });

  module.exports= mongoose.model("Blog",Blog);