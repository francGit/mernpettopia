const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({

    sku:{
        type:String,
        trim:true,
        unique:true,
        uppercase:true,
    },
    name:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
    },
    stock:{
        type:Number,
        default:0,
    },
    available:{
        type:Boolean,
        default:true,
    }

});

module.exports = mongoose.model('Products', productsSchema);