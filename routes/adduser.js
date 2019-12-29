var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
    res.render('addusers', { title: 'ADD USERS ' });
  });

  


  
module.exports = router;