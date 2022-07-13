const jwt = require('jsonwebtoken');

module.exports = {
  createToken: (data) => {
    const jwtOptions = { algorithm: 'HS256' };
    return jwt.sign({ data }, process.env.JWT_SECRET, jwtOptions);
  },
};
