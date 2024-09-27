import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const addBook = async(req,res) => {
    try {
        const bookData = await Book.create(req.body);
        res.status(200).json(bookData);

    } catch (error) {
        console.log("Error while adding book", error);
        res.status(500).json(error);
    }
}