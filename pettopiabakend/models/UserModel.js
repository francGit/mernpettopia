const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    identification: Number,
    password:String,
    phone:Number,
    email:String,
    address:String,
    country:String,
    city:String
});


module.exports = mongoose.model('user', UserSchema, 'users')