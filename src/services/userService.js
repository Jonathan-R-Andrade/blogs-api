const { User } = require('../database/models');

module.exports = {

  checkLoginData: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      throw new Error('E-mail não cadastrado ou senha inválida');
    }
  },

};
