const userService = require('../services/userService');
const { validateLoginData } = require('../services/validations');

module.exports = {

  checkLoginData: async (req, res) => {
    validateLoginData(req.body);
    await userService.checkLoginData(req.body);
    res.status(200).json({ token: 'TOKEN AQUI' });
  },

};
