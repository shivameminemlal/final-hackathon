const router = require('express').Router();
const user = require('../models/candidate.js');

router.post('/login',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    user.findOne({username : username, password : password},function(err,result){
        //console.log(err)
        //console.log(result)
        if(err) {
            console.log(err);
            
         } else if(!result) {
             //console.log(result);
             console.log('incorrect username/password');
            
        } else {
            //console.log(result);
            console.log('logged in');
            res.redirect('/');
        }
    })
});

module.exports = router;