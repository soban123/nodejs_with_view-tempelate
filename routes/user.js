var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
    


    var query = "select * from user"

    db.query(query , function ( err , rows , fields ){
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        // res.json(rows)
      
        res.render('users' , {title: 'USER' , data : rows} )
    })
  });

  router.get('/adduser' , function(req , res ,next){

    res.render('addusers' , { title:'ADD USERS'   })
})



router.post('/adduser' , function(req , res , next ){
    
    var name = req.body.name ;
    var email = req.body.email ;
    var status = req.body.status ;
    var phone = req.body.phone ;
    var year = req.body.year ;

    // res.json( status );
    
    var query = `insert into user (name , email , password , status , phone , year ) VALUES ('${name}' , '${email}' , 'password' , '${status}' , '${phone}' , '${year}' ) ` ;
   
    db.query(query , function ( err ,rows ){
        if (err) throw err ;
// res.json(rows);
        res.redirect('/user');
    })
   })


   router.get('/update/:id' , function(req , res ,next){

    var id = req.params.id ;
   
    var query = `select * from user where id = '${id}' `
    
    db.query(query , function ( err , rows , fields ){
        if (err) throw err ;
      
        res.render('updateuser' , {title: 'Update USER' , data : rows[0] } )
    })
})


router.post('/update/:id' , function(req ,res , next){
    var id = req.params.id ;
    var name = req.body.name ;
    var email = req.body.email ;
    var status = req.body.status ;
    var phone = req.body.phone ;
    var year = req.body.year ;

    var query = `UPDATE user set name = '${name}' , email = '${email}' , status = '${status}' , phone = '${phone}' , year = '${year}' where id = '${id}' ` ;
   
    db.query(query , function ( err ,rows ){
        if (err) throw err ;

        res.redirect('/user');
    })
})


router.get('/delete/:id' , function(req , res ,next){

    var id = req.params.id ;
   
    var query = `Delete from user where id = '${id}' `
    
    db.query(query , function ( err , rows , fields ){
        if (err) throw err ;
        res.redirect('/user');
    })
})

  


  
module.exports = router;