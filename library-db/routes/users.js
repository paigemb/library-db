var express = require('express');
const { restart } = require('nodemon');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('You are cool');
});

module.exports = router;
