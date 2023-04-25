const mongoose = require("mongoose");

const Schema = mongoose.Schema

const postsSchema = new Schema({

  body:{
    type: String,
    required: true
  },
  userId:{
    type: String,
    required: true
  },
  likes:{
    type: Array,
    required:true
  }


}, {timestamps: true});


module.exports = mongoose.model("posts", postsSchema)