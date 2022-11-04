const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customersSchema = new Schema({

    name:{
        type:String,
        trim:true,
    },
    lastname:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true,
    },
    phone:{
        type:String,
        trim:true,
    }

});

module.exports = mongoose.model('Customers', customersSchema);