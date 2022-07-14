const jwt = require('jsonwebtoken');
const { unauthorized } = require('../errors');

module.exports = {
  createToken: (data) => {
    const jwtOptions = { algorithm: 'HS256' };
    return jwt.sign({ data }, process.env.JWT_SECRET, jwtOptions);
  },

  validateToken: (token) => {
    if (!token) throw unauthorized('Token not found');
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw unauthorized('Expired or invalid token');
    }
  },
};
