const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesSchema = new Schema({

 
    name:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    urlImage:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
    },
    available:{
        type:Boolean,
        default:true,
    }

});

module.exports = mongoose.model('Services', servicesSchema);