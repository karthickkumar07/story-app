const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/adduser", (req, res) => {
  const users = User.findById(req.body.googleId);
  if (!users) {
    const user = new User(req.body);
    user.save((err, u) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "failed",
        });
      }
      return res.json(u);
    });
  }
  return res.status(200).send({
    message: "signed in",
  });
});

module.exports = router;
