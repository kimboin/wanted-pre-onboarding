var express = require('express');
var router = express.Router();

// require maria.js
const maria = require('../db/connect/maria');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET TEST */
router.get('/api/get/demo', function(req, res) {
  res.status(200).json({
    "message" : "call get api demo"
  });
});

/* POST TEST */
router.get('/api/post/demo', function(req, res) {
  res.status(200).json({
    "message" : "call post api demo"
  });
});

module.exports = router;
