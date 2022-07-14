const jwtService = require('../services/jwtService');

const validateToken = (req, _res, next) => {
  const { authorization: token } = req.headers;
  jwtService.validateToken(token);
  next();
};

module.exports = validateToken;
