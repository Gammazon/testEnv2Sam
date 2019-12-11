var express = require("express");
var router = express.Router();
var db = require("../services/mysql");

/* GET home page. */
router.get("/", function(req, res, next) {
  db.getProduct((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
  // res.send("api working");
  // res.end();
});

module.exports = router;
