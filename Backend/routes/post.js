const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//add kavidha
router.post("/addkavidhai", (req, res) => {
  const post = new Post(req.body);
  post.save((err, pos) => {
    if (err) {
      return res.status(400).json({
        error: "post cannot be added",
      });
    }
    return res.json(pos);
  });
});

module.exports = router;

//get all kavidhai
router.get("/allkavidhai", (req, res) => {
  Post.find().exec((err, kavidha) => {
    if (err) {
      return res.status(400).json({
        error: "no kavidhai found",
      });
    }
    res.json(kavidha);
  });
});

// get single kavidhai
router.get("/allkavidhai/:name", (req, res) => {
  Post.find({ author: req.params.name }, (err, post) => {
    if (err) {
      return res.status(400).json({
        error: "failed to fetch",
      });
    } else {
      return res.json(post);
    }
  });
});
