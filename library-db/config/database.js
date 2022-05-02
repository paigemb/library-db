//database connection

//const pgp = require('pg-promise')(/* options */)
/* const Sequelize = require('sequelize');
const db_url = 'postgres://postgres:password@localhost:5433/database';
const database = new Sequelize(db_url); */
/* db.one('SELECT $1 AS value', 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  }) */
  /* const dbConfig = require("./db.config");
  const Sequelize = require("sequelize");
  const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port:'5432',
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  

  sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
    const Book = sequelize.define("Books", {
   
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
    });
    Book.readAll = async (req, res) => {
      try {
        const books = await Book.findAll();
        return res.send({ books });
      } catch (error) {
        return res.send(error);
      }
    };
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });  


  //db.books = require("Book.js")(sequelize, Sequelize);
  module.exports = db; */

//   const user = 'paige.biggs'
//   const host = 'localhost'
//   const database = 'testdb'
//   const password = 'password'
//   const port = '5432'

//   import { Sequelize, Model, DataTypes } from 'sequelize'

//   const sequelize = new Sequelize(database, user, password, {
//     host,
//     port,
//     dialect: 'postgres',
//     logging: false
//   })

//   import { Sequelize, Model, DataTypes } from 'sequelize'

// const Book extends Model {}

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://paige.biggs:password@localhost:5432/library') 
/* const user = 'paige.biggs'
   const host = 'localhost'
   const database = 'testdb'
   const password = 'password'
   const port = '5432'
const sequelize = new Sequelize(database, user, password, {
       host,
       port,
       dialect: 'postgres',
       logging: false
     }) */
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