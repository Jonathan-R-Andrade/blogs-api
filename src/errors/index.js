const CustomError = require('./CustomError');

const errors = {
  badRequest: (message) => (
    new CustomError(400, message || 'Bad Request')
  ),
};

module.exports = errors;
