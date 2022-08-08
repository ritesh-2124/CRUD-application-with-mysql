const {DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../db');


const Ragister = sequelize.define('ragister', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull:false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    instanceMethods: {
      generateHash: function (Password) {
        console.log(bcrypt.hashSync(Password, bcrypt.genSaltSync(8), null))
        return bcrypt.hashSync(Password, bcrypt.genSaltSync(8), null)
      },
      validPassword: function (Password) {
        console.log(bcrypt.compareSync(Password, this.Password))
        return bcrypt.compareSync(Password, this.Password)
      }
    }
    });


module.exports = Ragister;