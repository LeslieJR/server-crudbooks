const models = require('../models')

const postBook = async (req, res)=>{
    try{
        const {name, isbn, author} = req.body;
        if(!name || !isbn || !author){
            return res.status(409).json({error:'Name, ISBN or author missing'})
        }
        const newBook = new models.book({
            name,
            isbn,
            author
        })
        await newBook.save(); 
        return res.status(201).json(newBook);
    }catch(_){
        return res.status(409).json({error:'Error while creating the book'})
    }
}

const getBook = async (req, res)=>{
    try{
        const {id} = req.params;
        const book = await models.book.findById(id).populate('author');
        return res.status(201).json(book)  
    }catch(_){
        return res.status(409).json({error:'Book was not found'})
    }
}

const getAll = async (req, res)=>{
    try{
        const books = await models.book.find();
        return res.status(201).json(books)  
      }catch{
        return res.status(409).json({error:'Books not found'})
      }
}

//to get all the books of one author
const getAuthorBooks = async (req, res) => {
    try{
        const {id} = req.params
        const books = await models.book.find({author: id})
        return res.status(201).json(books)
    }catch(_){
        return res.status(409).json({error:'This author does not have books'})
    }
}

const updateBook = async (req,res) =>{
    try{
        const {id} = req.params;
        const {name, isbn, author} = req.body;
        const book = await models.book.findOneAndUpdate(
        {_id:id},
        {$set:{name, isbn, author}},
        {new: true}
        )
        return res.status(201).json(book)  
    }catch(_){
        return res.status(409).json({error:'There was an error updating the book'})
    }
    
}

module.exports = {
    postBook,
    getBook,
    getAll,
    getAuthorBooks,
    updateBook
}