var express = require('express');
var router = express.Router();
var db = require('../db') ;
var isauth = 0 ;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'EXPRESS LOGIN ' });
});

router.get('/student/:email/:password', function(req, res, next) {
  res.render('index', { result: req.params });
  // res.json(req.params) ;
});

router.get('/logedin', function(req, res, next) {
  // if (isauth) {
  res.render( 'adminpannel' , { title: 'ADMIN PANEL'   }); 
  // res.json(req.params) ;
});

router.post('/student/submit' , function(req,res , next){

  var email = req.body.email ;
    var pass = req.body.password ;
var e ='soban12@gmail.com' ;
  // res.json(email);
  var query = `select * from user where email = '${email}' ` ;

  db.query(query  , function ( err , rows , fields ){
    if (err) throw err ;


    
    if (email == rows[0].email  && pass == rows[0].password ){
      isauth = 1 ;
      res.redirect('/logedin' ) 
      
      }
      else {
        res.json('incorrect id and password') ;
      }
   
    
  })

 

 
} )



module.exports = router;
