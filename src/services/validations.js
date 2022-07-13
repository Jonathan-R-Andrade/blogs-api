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

  validateUserData: (userData) => {
    const schema = joi.object({
      displayName: joi.string().required().min(8),
      email: joi.string().required().email(),
      password: joi.string().required().min(6),
      image: joi.string(),
    }).required().label('user');

    const { error } = schema.validate(userData);
    if (error) throw (badRequest(error.message));
  },
};
