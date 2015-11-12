var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('mide', { title: 'Express' });
});

module.exports = router;
