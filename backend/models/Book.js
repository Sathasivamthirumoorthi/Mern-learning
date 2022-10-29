const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    isbn : {
        type : String,
        required : true 
    },
    title : {
        type : String,
        required : true
    },
    subject :{
        type : String,
        required : true
    },
    publisher :{
        type : String,
        required : true
    },
    language :{
        type : String,
        required : true
    },
    pages :{
        type : String,
        required : true
    }
})


module.exports = mongoose.model('Book',BookSchema)
