var express = require('express');
var router = express.Router();

const controllers = require('../controllers/db.controller')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
