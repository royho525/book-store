const {Author, Book} = require("../model/models");

const authorController = {
    //ADD AUTHOR
    addAuthor: async(req,res) =>{
        try {
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL AUTHOR
    getAllAuthors: async(req,res) =>{
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET AN AUTHOR
    getAnAuthor: async(req, res) =>{
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (err) {
            res.status(500).json(err);            
        }
    },
    //UPDATE AUTHOR
    updateAnAuthor: async(req,res) =>{
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({$set: req.body});
            res.status(200).json("Updated successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //DELETE AN AUTHOR
    deleteAuthor: async(req,res) =>{
        try {
            await Book.updateMany({author: req.params.id}, {author: null});
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
module.exports = authorController;