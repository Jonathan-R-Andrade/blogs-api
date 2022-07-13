const userService = require('../services/userService');
const jwtService = require('../services/jwtService');
const { validateLoginData, validateUserData } = require('../services/validations');

module.exports = {

  checkLoginData: async (req, res) => {
    validateLoginData(req.body);
    await userService.checkLoginData(req.body);
    const { email } = req.body;
    const token = jwtService.createToken({ email });
    res.status(200).json({ token });
  },

  create: async (req, res) => {
    validateUserData(req.body);
    const { email } = await userService.create(req.body);
    const token = jwtService.createToken({ email });
    res.status(201).json({ token });
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(200).json(user);
  },

};
