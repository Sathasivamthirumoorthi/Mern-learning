const express = require("express")
const Users = require("../models/Users")
const router = express.Router()

router.get('/', async (req,res)=>{
    try{
        const users =  await Users.find()
        res.json(users)
    }catch(error){
        res.json({message : error})
    }   
})


router.post('/',(req,res)=>{
    const user = new Users({
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    })

    user.save().then(data =>{
        res.status(200).json(data)
    }).catch(error =>{
        res.status(400).json(error)
    })
})


router.get('/:userId', async (req,res)=>{
   
    try{
        const user = await Users.findById(req.params.userId);
        res.status(200).json(user);
    }catch(error){
        res.status(400).json({message : error});
    }

})


router.delete('/:userId', async (req,res)=>{
    try{
        const removeUser = await Users.remove({_id : req.params.userId})
        res.json(removeUser);
    }catch(error){
        res.json(error);
    }
})


router.patch('/:userId',async (req,res)=>{
    try{
        const updateUser = await Users.updateOne({_id : req.params.userId} 
            , {$set : {username : req.body.username}})
        
        res.json(updateUser)
    }catch(error){
        res.json(error)
    }
})


module.exports = router