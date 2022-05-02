/*module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Book', {
    ISBN: {
      type: DataTypes.TEXT,
      primaryKey: true
    } ,
    Title: DataTypes.TEXT,
    Author_ID: DataTypes.INTEGER,
    Publisher_ID: DataTypes.INTEGER,
    Description: DataTypes.TEXT
    // Other model options go here
  }, {sequelize,
    modelName: 'Book',
    tableName: 'Book',
    createdAt: 'date_created',
    updatedAt: 'date_updated',
    underscore: true,
    timestamps: false,
    updatedAt: false});
}; */
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://paige.biggs:password@localhost:5432/library');
sequelize .authenticate()
 .then(function(err) {
    console.log('Connection has been established successfully.');

  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });  


const Book = sequelize.define('Book', {
  // Model attributes are defined here
  ISBN: {
    type: DataTypes.TEXT,
    primaryKey: true
  } ,
  Title: DataTypes.TEXT,
  Author_ID: DataTypes.INTEGER,
  Publisher_ID: DataTypes.INTEGER,
  Description: DataTypes.TEXT
  // Other model options go here
}, {sequelize,
  modelName: 'Book',
  tableName: 'Book',
  createdAt: 'date_created',
  updatedAt: 'date_updated',
  underscore: true,
  timestamps: false,
  updatedAt: false});

console.log('book');
console.log(Book === sequelize.models.Book);
// `sequelize.define` also returns the model
// (async() => {
//   try {
//     const user = await Book.findAll();
//     // you can now access the newly created user
//     console.log('success', user);
//   } catch (err) {
//     // print the error details
//     console.log(err);
//   }
//   })();
  // Book.prototype.getAllBooks = function () {
  //  const books = Book.findAll();
   // return books;
  // } 
  //module.exports = Book;
 
 /* const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
    
      static associate(models) {
        // define association here
      }
    }
    Book.init(
      {
        ISBN: {
          type: DataTypes.TEXT,
          primaryKey: true,
          autoIncrement: true,
        },
       Title: DataTypes.TEXT,
      },
     { Author_ID: DataTypes.INTEGER,
     },
      {
        Publisher_ID: DataTypes.INTEGER,
     },
      {
      Description: DataTypes.TEXT,
      },
      {
        // options
        sequelize,
        modelName: 'Book',
        tableName: 'Book',
        createdAt: 'date_created',
        updatedAt: 'date_updated',
        underscore: true,
        timestamps: false,
        updatedAt: false
      },
    );
    return Book;
  }
  (async() => {
    //const jane = await Book.create({ name: "Jane" });
// console.log(jane); // Don't do this
  //  console.log(jane.toJSON()); // This is good!
  //  console.log(JSON.stringify(jane, null, 4));
      //const twilight = Book.build({ name: "Twilight" });
      //await twilight.save();
      //console.log('twilight was saved to the database!');
      //console.log(twilight instanceof Book); // true
      //onsole.log(twilight.name); // "Jane" 
    })(); */