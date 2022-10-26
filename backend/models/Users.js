const mongoose = require("mongoose");
const { stringify } = require("querystring");

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true 
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now

    }
})

// A Mongoose model is a wrapper on the Mongoose schema.
//  A Mongoose schema defines the structure of the document, 
//  default values, validators, etc., whereas a Mongoose model
//   provides an interface to the database for creating, querying, 
//   updating, deleting records, etc.

module.exports = mongoose.model('Users',userSchema);