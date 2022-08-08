const mysql = require('mysql');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('crud_application', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}
);
  
module.exports = sequelize;