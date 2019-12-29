var express = require('express');
var router = express.Router();
var db = require('../db')

    router.get('/' , function (req , res , next ){
    var query = "select * from products  "

    db.query(query , function ( err , rows , fields ){
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.json(rows)
      
        // res.render('produScts' , {title: 'products' , data : rows} )
    })
} )

router.get('/create' , function(req , res ,next){

    res.render('createform' , { title:'ADD products'   })
})

router.post('/createform' , function(req , res , next ){
    
    var name = req.body.name ;
    var address = req.body.address ;
    var price = req.body.price ;
    
    var query = `insert into products (name , address , price ) VALUES ('${name}' , '${address}' , '${price}'  ) ` ;
   
    db.query(query , function ( err ,rows ){
        if (err) throw err ;
// res.json(rows);
        res.redirect('/products');
    })
   })

   
router.get('/update/:id' , function(req , res ,next){

    var id = req.params.id ;
   
    var query = `select * from products where id = '${id}' `
    
    db.query(query , function ( err , rows , fields ){
        if (err) throw err ;
      
        res.render('update' , {title: 'Update products' , data : rows[0] } )
    })
})

router.post('/update/:id' , function(req ,res , next){
    var name = req.body.name ;
    var address = req.body.address ;
    var price = req.body.price ;
    var id = req.params.id ;
    var query = `UPDATE products set name = '${name}' , address = '${address}' , price = '${price}' where id = '${id}' ` ;
   
    db.query(query , function ( err ,rows ){
        if (err) throw err ;

        res.redirect('/products');
    })
})

router.get('/delete/:id' , function(req , res ,next){

    var id = req.params.id ;
   
    var query = `Delete from products where id = '${id}' `
    
    db.query(query , function ( err , rows , fields ){
        if (err) throw err ;
        res.redirect('/products');
    })
})

module.exports = router;