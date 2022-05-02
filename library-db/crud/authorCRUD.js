const Author = require('../models/author.model');
var author = {
    findAll: findAll,
    findById: findById,
}

function findAll() {
    return Author.findAll();
}

function findById(Author_ID) {
    return Author.findByPk(Author_ID);
}


module.exports = author;