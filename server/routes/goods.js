var express = require('express');
var router = express.Router();

var Goods = require('../models/goods');

router.get("/", function (req,res) {
  Goods.find({}, function (err, doc) {
    if(err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      console.info(doc);
      res.json({
        status: "0",
        msg: "",
        result: {
          count:doc.length,
          list:doc
        }
      });
    }
  })
});

module.exports = router;