const router = require('express').Router();
const user = require('../models/candidate.js');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
// const db2 = require('../models/admin.js');

router.get('/signup',function(req,res){
    res.render('userLogin.ejs');
});

router.post('/signup',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;
    console.log(req.body);
    
   // bcryptjs.genSalt(saltRounds,function(err,result){
        // if(err) throw err;
            // if(err) throw err;
           var newUser = new user({
                username : username,
                password : password,
                role : role
            });
            newUser.save(function(err){
                 if(err) throw err;
                 else {
                    console.log('new user created');
                    res.send('new user created');
                    
                 }
            })
        });


// router.post('/signup',function(req,res){
//     var username = req.body.username;
//     var password = req.body.password;
//     var role = req.body.role;
//     console.log(req.body);
//     user.findOne({username : username, password : password},function(err,result){
//         if(err) {
//             console.log(err);
            
//         } else if(result) {
//             console.log('account already exists');
            
//         } else {
//             console.log('sign up successfull');
//             res.redirect('/');
//         }
//     })
// })

module.exports = router;