const { User } = require('../database/models');
const { badRequest, conflict, notFound } = require('../errors');

module.exports = {

  checkLoginData: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      throw badRequest('Invalid fields');
    }
  },

  create: async (userData) => {
    const [user, created] = await User.findOrCreate({
      where: { email: userData.email },
      defaults: userData,
    });
    if (!created) throw conflict('User already registered');
    return user.toJSON();
  },

  getById: async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) throw notFound('User does not exist');
    return user.toJSON();
  },

};
