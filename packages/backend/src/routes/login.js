const express = require("express");
const router = express.Router();
const Users = require("../models/user");

//Login
router.post("/", async (req, res) => {
  //Check if user exists in database
  user = await Users.findOne({ email: req.body.email });
  if (user == null) {
    return res.status(400).json("User does not exist");
  }

  try {
    //If password from database matches then login is successful
    if (req.body.password == user.password) {
      res.json("Successful Login");
    } else {
      res.json("Failed Login");
    }
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
