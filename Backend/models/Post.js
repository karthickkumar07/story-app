const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  kavidhai: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Post", PostSchema);
