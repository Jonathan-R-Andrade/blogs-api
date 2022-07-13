const CustomError = require('./CustomError');

const errors = {
  badRequest: (message) => (
    new CustomError(400, message || 'Bad Request')
  ),
  conflict: (message) => (
    new CustomError(409, message || 'Conflict')
  ),
};

module.exports = errors;
