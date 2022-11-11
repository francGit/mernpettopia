const mongoose = require('mongoose')

let PetSchema = new mongoose.Schema({
    nameanimal:String,
    typeanimal:String,
    racetype:String,
    years:Number,
    file:String,
    commit:String,
    idUser:Number
});


module.exports = mongoose.model('pets', PetSchema, 'pets')