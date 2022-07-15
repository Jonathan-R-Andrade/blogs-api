const { User } = require('../database/models');
const { badRequest, conflict, notFound } = require('../errors');

module.exports = {

  checkLoginData: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      throw badRequest('Invalid fields');
    }
    return user.toJSON();
  },

  create: async (userData) => {
    const [user, created] = await User.findOrCreate({
      where: { email: userData.email },
      defaults: userData,
    });
    if (!created) throw conflict('User already registered');
    return user.toJSON();
  },

  list: async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },

  getById: async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) throw notFound('User does not exist');
    return user.toJSON();
  },

  delete: async (id) => {
    const result = await User.destroy({ where: { id } });
    if (!result) throw notFound('User does not exist');
  },

};
