var express = require("express");
var router = express.Router();
var db = require("../services/mysql");

/* GET home page. */
router.get("/", function(req, res, next) {
  let id = 70;
  db.getProduct(id, (err, results) => {
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
