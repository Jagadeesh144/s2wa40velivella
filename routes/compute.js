var express = require('express');
var router = express.Router();
var value;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
     value =Number(search_params.get("x"))
    if(value == 0)
    value=Math.random()
    res.write("Computes the values for Math.atan and math.cbrt function."+"\n")
    res.write('Math.log() applied to '+value+" is "+Math.log(value)+"\n");
    res.write('Math.log10() applied to '+value+" is "+Math.log10(value)+"\n");
    res.end('Math.imul() applied to '+value+" is "+Math.imul(value));
 });

module.exports = router;