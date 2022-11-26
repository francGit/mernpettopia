//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let PetSchema = new Schema( {
    nameanimal: String,
    typeanimal: String,
    racetype: String,
    years: String,  
    file: String,  
    commit: String,  
    userId: String,  
    creationDate: { 
        type: Date, 
        default: Date.now 
    },
} )

module.exports = mongoose.model('pet', PetSchema,'Pets')