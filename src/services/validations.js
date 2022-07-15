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
    if (error) throw badRequest(error.message);
  },

  validateCategoryData: (categoryData) => {
    const schema = joi.object({
      name: joi.string().required().not().empty(),
    }).required().label('category');

    const { error } = schema.validate(categoryData);
    if (error) throw badRequest(error.message);
  },

  validatePostData: (postData) => {
    const schema = joi.object({
      title: joi.string().required().not().empty(),
      content: joi.string().required().not().empty(),
      categoryIds: joi.array().items(
        joi.number().min(1).label('id'),
      ).required().min(1),
    }).required().label('post');

    joi.assert(postData, schema, badRequest('Some required fields are missing'));
  },
};
