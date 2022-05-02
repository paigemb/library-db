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
/*const Publisher = sequelize.define('Publisher', {
  // Model attributes are defined here
  Publisher_ID:{
    type:DataTypes.INTEGER,
    primaryKey: true
  } ,
  Name: DataTypes.TEXT
  // Other model options go here
}, 
{sequelize,
  modelName: 'Publisher',
  tableName: 'Publisher',
  createdAt: 'date_created',
  updatedAt: 'date_updated',
  underscore: true,
  timestamps: false,
  updatedAt: false
});
console.log('pub')
console.log(Publisher === sequelize.models.Publisher); */
// `sequelize.define` also returns the model

//module.exports = Publisher;
/* const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
  
    static associate(models) {
      // define association here
    }
  }
  Publisher.init(
    {
      Publisher_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     Name: DataTypes.TEXT,
    },
    {
      // options
      sequelize,
      modelName: 'Publisher',
      tableName: 'Publisher',
      createdAt: 'date_created',
      updatedAt: 'date_updated',
      underscore: true,
      timestamps: false,
      updatedAt: false
    },
  );
  
  (async() => {
 
    await sequelize.sync({ force: true });
    const authors = await Publisher.findAll()
      console.log(authors)
    //const twilight = Book.build({ name: "Twilight" });
   // await twilight.save();
   // console.log('twilight was saved to the database!');
   // console.log(twilight instanceof Book); // true
   // console.log(twilight.name); // "Jane" 
  })();
  
};
*/
//onst { Sequelize, Model, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite::memory:");

/*const Publisher = sequelize.define("Publisher", {
  Publisher_ID:{
    type:DataTypes.INTEGER,
    primaryKey: true
  } ,
  Name: DataTypes.TEXT
  // Other model options go here
}, 
{sequelize,
  modelName: 'Publisher',
  tableName: 'Publisher',
  createdAt: 'date_created',
  updatedAt: 'date_updated',
  underscore: true,
  timestamps: false,
  updatedAt: false
});*/

const Publisher = sequelize.define('Publisher', {
  // Model attributes are defined here
  Publisher_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
 Name: DataTypes.TEXT,
},
{
  // options
  sequelize,
  modelName: 'Publisher',
  tableName: 'Publisher',
  createdAt: 'date_created',
  updatedAt: 'date_updated',
  underscore: true,
  timestamps: false,
  updatedAt: false
});

console.log('Publisher');
console.log(Publisher === sequelize.models.Publisher);
(async() => {
  try {
    const user = await Publisher.findAll();
    // you can now access the newly created user
    console.log('success', user);
  } catch (err) {
    // print the error details
    console.log(err);
  }
  })();
    

