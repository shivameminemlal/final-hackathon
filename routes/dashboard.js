const router = require('express').Router();

router.get('/',function(req,res){
    res.render('dashboard.ejs');
})

module.exports = router;


