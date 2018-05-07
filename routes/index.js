var express = require('express');
var personGenerator = require('../../person-generator/index.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soul-Mate', person: personGenerator() });
});

module.exports = router;
