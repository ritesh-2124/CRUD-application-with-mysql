const bcrypt = require('bcrypt');

const Hashpassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

module.exports = Hashpassword;