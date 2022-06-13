// import the Sequelize constructor from the library
import Sequelize from 'sequelize';
require('dotenv').config();


if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}


// // create a connection to db
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   //process.env.SECRET_KEY,
//   {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );


export default sequelize;