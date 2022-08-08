const bcrypt = require('bcrypt');
const sequelize = require('../db');

const Hashpassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

module.exports = Hashpassword;