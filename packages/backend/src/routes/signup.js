const express = require("express");
const router = express.Router();
const Users = require("../models/user");

//Signup
router.post(
  "/",
  /*async*/ (req, res) => {
    Users.findOne({ email: req.body.email }, async (err, data) => {
      try {
        res.json("The email " + data.email + " is already in use");
      } catch (err) {
        const user = new Users({
          email: req.body.email,
          password: req.body.password
        });

        try {
          const newUser = await user.save();
          res.json(newUser);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      }
    });
  }
);

module.exports = router;
