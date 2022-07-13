const { User } = require('../database/models');
const { badRequest } = require('../errors');

module.exports = {

  checkLoginData: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      throw badRequest('Invalid fields');
    }
  },

};
