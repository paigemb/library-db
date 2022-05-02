//var Sequelize = require("sequelize");
//const sequelize = new Sequelize('postgres://paige.biggs:password@localhost:5432/library');
//var Book = require("../models/book.model");
//var sequelize = new Sequelize('postgres://paige.biggs:password@localhost:5432/library');
//const { Sequelize } = require('sequelize');

//const sequelize = new Sequelize('postgres://paige.biggs:password@localhost:5432/library') 
//module.exports = {
 //   Book: Book(sequelize, Sequelize.DataTypes),
//}
//var Book = require('../models/book.model.js')
var Author = require('../models/author.model.js')
var Publisher = require('../models/publisher.model.js')
var book_count = 0; 

//var BookInstance = require('../models/bookinstance');
//const Book = require('../models').Book;
//const Book 
//= db.Book;
//const Op = db.Sequelize.Op;

//var Book = models.Book;
//var Author = models.Author; 
//var Publisher = models.Publisher;

var async = require('async');
    

//res.render('index', {title: 'Local Library Home', data: authors})
console.log("hi")

exports.index = function(req, res) {

        res.render('index', { title: 'Local Library Home', data: 5 });

};

/* exports.index = (req, res) => {
    //const title = req.query.title;
    //var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
   
    db.Book.findAll({attributes: ['Title', 'Author']})
      .then(data => {
        //res.send(data);
        res.render('index', { title: 'Local Library Home', data: data })
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving books."
        });
      });
  }; */

  /* exports.index = function(req, res) {
    return Book
    .findAll()
    .then(Book => res.status(200).res.render('index', { title: 'Local Library Home', data: Book }))
    .catch((error) => {
      console.log(error.toString());
      res.status(400).render('index', { title: 'Local Library Home', data: 0 });
    })
} */


// Display list of all books.
 exports.book_list = function(req, res) {

    res.send('NOT IMPLEMENTED: Book create GET');

  
  };
 
// Display detail page for a specific book.
/* exports.book_detail = function(req, res, next) {

    async.parallel({
        book: function(callback) {

            Book.findById(req.params.id)
              .populate('author')
              .populate('genre')
              .exec(callback);
        },
        book_instance: function(callback) {

          BookInstance.find({ 'book': req.params.id })
          .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.book==null) { // No results.
            var err = new Error('Book not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('book_detail', { title: results.book.title, book:  results.book, book_instances: results.book_instance } );
    });

}; */
// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};