const CustomError = require('./CustomError');

const errors = {
  badRequest: (message) => (
    new CustomError(400, message || 'Bad Request')
  ),
  conflict: (message) => (
    new CustomError(409, message || 'Conflict')
  ),
  notFound: (message) => (
    new CustomError(404, message || 'Not Found')
  ),
  unauthorized: (message) => (
    new CustomError(401, message || 'Unauthorized')
  ),
};

module.exports = errors;
