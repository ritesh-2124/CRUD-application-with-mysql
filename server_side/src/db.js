const mysql = require('mysql');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('crud application', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}
);
  
module.exports = sequelize;