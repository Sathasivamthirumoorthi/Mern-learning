const express = require("express");
const mongoose = require("mongoose");
const app = express();
const postsRoute = require('./routes/post');
const usersRoute = require('./routes/users');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
// middlewares
app.use('/post',postsRoute);
app.use('/users',usersRoute);

const uri = "mongodb+srv://siva:admin2001@cluster0.snknbgj.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("connected to db")
    }catch(error){
        console.log("error ", error)
    }
}


connect()

    
app.use(express.json());    
 
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));