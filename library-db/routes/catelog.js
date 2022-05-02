
const express = require('express');
const router = express.Router();
//controller modules

var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var publisher_controller = require('../controllers/publisherController');

router.get('/', book_controller.index);

// GET request for one Book.
//router.get('/book/:ISBN', book_controller.book_detail);

// GET request for list of all Book items.
//router.get('/books', book_controller.book_list);

//router.get('/author/:Author_ID', author_controller.author_detail);

// GET request for list of all Authors.
//router.get('/authors', author_controller.author_list);

//router.get('/publisher/Publisher_ID', publisher_controller.publisher_detail);

// GET request for list of all Publishers
//router.get('/publishers', publisher_controller.publisher_list);

module.exports = router;

