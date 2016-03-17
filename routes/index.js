var express = require('express');
var router = express.Router();
var LetvService = require('../services/LetvService');
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/clc',function(req,res){
  LetvService.test(req,res);
});

module.exports = router;
