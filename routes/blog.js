var express = require('express');
var router = express.Router();
var db = require('../db');
var multer = require('multer');

var storage = multer.diskStorage({

    destination: function(req , file , cb ){
        cb(null , 'uploads/') } ,


     filename : function(req , file , cb ){
        cb(null ,  Date.now() + file.originalname  ) } 
})
     var upload =  multer ({storage:storage})


router.get('/' , function(req , res , next){

    res.send("welcome");
    // res.render('blogcreate' , { title:'create blogs '   })
})

router.get('/create' , function(req , res ,next){

    
    res.render('blogcreate' , { title:'create blogs '   })
})

router.post('/upload' ,  upload.single("file")   ,  function(req , res ,next){

    var fileinfo = req.file ;
    var title = req.body.file_name ;
    console.log(title);
    res.redirect('/blog/create');
    // console.log(fileinfo) ;

    
})

router.post('/uploads' ,  upload.array("file" , 3)   ,  function(req , res ,next){

    var fileinfo = req.files;
    var title = req.body.file_name ;
    console.log(title);
    res.redirect('/blog/create');
    // console.log(fileinfo) ;

    
})

module.exports = router ;