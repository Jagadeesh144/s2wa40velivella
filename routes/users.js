var express = require('express');
var router = express.Router();
var times=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  times=times+1;
  res.send(`respond with a resource: ${times}`);
});

module.exports = router;
