const mongoose = require('mongoose')

let PetSchema = new mongoose.Schema({
    nameanimal:String,
    typeanimal:String,
    racetype:String,
    years:Number,
    file:String,
    commit:String,
    idUser:String,
    creationPetDate: {type:Date, default: Date.now}
});


module.exports = mongoose.model('pet', PetSchema, 'pets')