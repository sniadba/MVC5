const Author = require('../models/author');

exports.listAuthors = (req, res) => {
    const authors = [new Author(1, 'John Doe')];
    res.render('authors', { authors });
};
