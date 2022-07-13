const joi = require('joi');
const { badRequest } = require('../errors');

module.exports = {
  validateLoginData: (loginData) => {
    const schema = joi.object({
      email: joi.string().required().email(),
      password: joi.string().required().not().empty(),
    }).required().label('loginData');

    joi.assert(loginData, schema, badRequest('Some required fields are missing'));
  },
};
