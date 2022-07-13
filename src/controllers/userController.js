const userService = require('../services/userService');
const jwtService = require('../services/jwtService');
const { validateLoginData } = require('../services/validations');

module.exports = {

  checkLoginData: async (req, res) => {
    validateLoginData(req.body);
    await userService.checkLoginData(req.body);
    const { email } = req.body;
    const token = jwtService.createToken({ email });
    res.status(200).json({ token });
  },

  create: async (req, res) => {
    const { email } = await userService.create(req.body);
    const token = jwtService.createToken({ email });
    res.status(201).json({ token });
  },

};
