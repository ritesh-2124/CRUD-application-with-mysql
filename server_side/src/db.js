const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('crud_application', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
}
);
sequelize.sync()
  
module.exports = sequelize;