const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petsSchema = new Schema({

 
    namepet:{
        type:String,
        trim:true,
    },
    raza:{
        type:String,
        trim:true,
    },
    tipo:{
        type:String,
        trim:true,
    },
    anios:{
        type:Number,
    },
    avatarUrl:{
        type:String,
        trim:true,
    },
    
    available:{
        type:Boolean,
        default:true,
    }

});

module.exports = mongoose.model('Pets', petsSchema);