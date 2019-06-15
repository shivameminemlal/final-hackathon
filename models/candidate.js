const mongoose = require('mongoose');
const secretUser = require('../config/secret.js').user;
const secretPassword = require('../config/secret.js').password;



var Schema = mongoose.Schema;
var userSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('user',userSchema);
