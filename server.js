const express = require('express');
const mongoose=require('mongoose')
const secret = require('./config/secret.js');
const user = require('./models/candidate.js');
const parser = require('body-parser');
const userSignup = require('./routes/signup.js');
const userLogin = require('./routes/user_login.js');
const dashboard = require('./routes/dashboard.js');
const ejs = require('ejs');
const jwt = require('jsonwebtoken');
const port = secret.port;

var app = express();

mongoose.connect('mongodb+srv://shivameminem7lal:shivam123@cluster0-zlhxx.mongodb.net/test?retryWrites=true&w=majority'
,function(err){
    if(err) throw err;
    else {
        console.log('connected to database');
    }
});

app.set('view engine','ejs');

app.use(parser.json());
app.use(parser.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(userSignup);
app.use(userLogin);
app.use(dashboard);

app.listen(port,function(){
    console.log(`listening at ${port}`);  
})