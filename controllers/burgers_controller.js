const express = require("express");

const router = express.Router();

const test = require("../models/burger.js");

router.get("/", (req, res) => {
  test.all(function (data) {
    console.log(data);
  });
  res.send("Hello world!");
});

module.exports = router;