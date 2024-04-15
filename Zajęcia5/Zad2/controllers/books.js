const Book = require('../models/book');

exports.listBooks = (req, res) => {
    const books = [new Book(1, 'Example Book', 2022, 1)]; 
    res.render('books', { books });
};
