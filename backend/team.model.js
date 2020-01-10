const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let TeamSchema = Schema({
    name: {
      type: String
    },
    technology: {
      type: String
    }
  });

  module.exports= mongoose.model("Team",Team);