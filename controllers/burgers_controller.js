var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  test.all(function (data) {
    console.log(data);
  });
  res.send("Hello world!");
});


// Export routes for server.js to use.
module.exports = router;