var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var data = {
    Value: 13,
    Resource: "Test"
  };
  res.send(data);
});

module.exports = router;