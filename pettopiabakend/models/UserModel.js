//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let UserSchema = new Schema( {
    firstname: String,
    lastname: String,
    email: String,
    password: String,  
    phone:String,
    dni:String,
    address: String,
    country: String,
    city: String,
    rol: { 
        type: Number, 
        default: 2 
    },
    creationDate: { 
        type: Date, 
        default: Date.now 
    },
} )

module.exports = mongoose.model('user', UserSchema,'Users')