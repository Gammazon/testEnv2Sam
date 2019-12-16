var express = require("express");
var router = express.Router();
var db = require("../services/mysql");

/* GET home page. */
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  db.getProduct(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req);
      res.send(results);
    }
  });
});

module.exports = router;
