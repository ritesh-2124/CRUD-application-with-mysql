const { DataTypes} = require('sequelize');
const sequelize = require('../db');


const Address = sequelize.define('addresses', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    },
    Contact: {
        type: DataTypes.STRING
    }
}
);

module.exports = Address;
