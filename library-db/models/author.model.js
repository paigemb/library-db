const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://paige.biggs:password@localhost:5432/library');
sequelize .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');

    //Book.sync({force:true}).then(()=>{
      //return Book.create({ISBN: 'is this working'})
      
   // });
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });  

/* const Author = sequelize.define('Author', {
  // Model attributes are defined here
  Author_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true},
  Name: DataTypes.TEXT
  // Other model options go here

},
{sequelize,
  modelName: 'Author',
  tableName: 'Author',
  createdAt: 'date_created',
  updatedAt: 'date_updated',
  underscore: true,
  timestamps: false,
  updatedAt: false
}); */

// `sequelize.define` also returns the model

/*   Author.prototype.getAllAuthors = function () {
   const authors = Author.findAll();
   return authors;
  } */
//module.exports = Author;

// Find all users

/*  const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Author.init(
    {
      Author_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     Name: DataTypes.TEXT,
    },
    {
      // options
      sequelize,
      modelName: 'Author',
      tableName: 'Author',
      createdAt: 'date_created',
      updatedAt: 'date_updated',
      underscore: true,
      timestamps: false,
      updatedAt: false
    },
  );
  return Author;
}; 
 */
const Author = sequelize.define('Author', {
  // Model attributes are defined here
  Author_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
 Name: DataTypes.TEXT,
},
{
  // options
  sequelize,
  modelName: 'Author',
  tableName: 'Author',
  createdAt: 'date_created',
  updatedAt: 'date_updated',
  underscore: true,
  timestamps: false,
  updatedAt: false
});

console.log('Author');
console.log(Author === sequelize.models.Author);
(async() => {
  try {
    const user = await Author.findAll();
    // you can now access the newly created user
    console.log('success', user);
  } catch (err) {
    // print the error details
    console.log(err);
  }
  })();
    
  //   const users = await Author.findAll();
    //console.log(users.every(user => user instanceof Author)); // true
    //console.log("All users:", JSON.stringify(users, null, 2));
    //const twilight = Book.build({ name: "Twilight" });
   // await twilight.save();
   // console.log('twilight was saved to the database!');
   // console.log(twilight instanceof Book); // true
   // console.log(twilight.name); // "Jane" 
