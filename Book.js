/* const Sequelize = require('sequelize');


const Book = database.define(
  'books',
  {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    publisher_id: {
      type: Sequelize.INTEGER
    }, 
    author_id: {
      type: Sequelize.INTEGER
  
    },
    ISBN: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

User.readAll = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.send({ users });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = Book; */
const Book = require('./library-db/models/book.model.js');
(async() => {
  const twilight = Book.build({ name: "Twilight" });
  await twilight.save();
  console.log('twilight was saved to the database!');
  console.log(twilight instanceof Book); // true
  console.log(twilight.name); // "Jane"
})();