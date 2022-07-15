const jwtService = require('../services/jwtService');

const validateToken = (req, _res, next) => {
  const { authorization: token } = req.headers;
  const { data } = jwtService.validateToken(token);
  req.tokenPayload = data;
  next();
};

module.exports = validateToken;
