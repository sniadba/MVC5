const express = require('express');
const router = express.Router();
const Book = require('../models/book');

let books = [
    new Book('Pan Tadeusz', 'Adam Mickiewicz', 1834),
    new Book('Ferdydurke', 'Witold Gombrowicz', 1937),
    new Book('Quo Vadis', 'Henryk Sienkiewicz', 1896),
    new Book('Nad Niemnem', 'Eliza Orzeszkowa', 1888)
];

router.get('/', (req, res) => {
    res.render('index', { books: books });
});

router.get('/add_book', (req, res) => {
    res.render('add_book');
});

router.post('/add_book', (req, res) => {
    const { title, author, year } = req.body;
    const newBook = new Book(title, author, year);
    books.push(newBook);
    res.redirect('/');
});

router.get('/edit_book/:id', (req, res) => {
    const id = req.params.id;
    const book = books[id];
    res.render('edit_book', { book: book, bookIndex: id });
});

router.post('/edit_book/:id', (req, res) => {
    const id = req.params.id;
    const { title, author, year } = req.body;
    books[id].title = title;
    books[id].author = author;
    books[id].year = year;
    res.redirect('/');
});

router.get('/delete_book/:id', (req, res) => {
    const id = req.params.id;
    books.splice(id, 1);
    res.redirect('/');
});

module.exports = router;