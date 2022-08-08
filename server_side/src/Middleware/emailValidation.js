const emailValidator = require('deep-email-validator');

const emailValidate = async function isEmailValid(email) {
    return emailValidator.validate(email)
  }

module.exports = emailValidate;



