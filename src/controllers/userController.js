const userService = require('../services/userService');

module.exports = {

  checkLoginData: async (req, res) => {
    await userService.checkLoginData(req.body);
    res.status(200).json({ token: 'TOKEN AQUI' });
  },

};
