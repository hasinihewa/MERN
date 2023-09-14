const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const userschema= new Schema({
    name:{
        type : String,
        required: true
    },
    Contact_No:{
        type : Number,
        required: true
    },
    Email:{
        type : String,
        required: true
    },
    IdNo:{
        type : String,
        required: true
    },
    Address:{
        type : String,
        required: true
    }
})

const User = mongoose.model("user", userschema);
module.exports = User;