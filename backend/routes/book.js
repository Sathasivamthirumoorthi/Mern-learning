const express = require("express");
const Book = require("../models/Book");
const router = express.Router() 

router.get('/', async (req,res)=>{
    try{
        const books = await Book.find()
        res.json(books)
    }catch(error){
        res.json({message : error})
    }
});

router.post('/',(req,res)=>{
    // console.log(req.body)
    const book = new Book({
        isbn : req.body.isbn,
        title : req.body.title,
        subject : req.body.subject,
        publisher : req.body.publisher,
        language : req.body.language,
        pages : req.body.pages
    })
    book.save().then(data =>{
        res.status(200).json(data)
    }).catch(error =>{
        res.json({message : error})
    })
})


router.delete('/:bookId', async (req,res)=>{
    try{
        const removeBook = await Book.remove({_id : req.params.bookId})
        res.json(removeBook);
    }catch(error){
        res.json(error);
    }
})


module.exports = router;

// npm i body-parser