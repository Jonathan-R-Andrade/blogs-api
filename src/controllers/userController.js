const userService = require('../services/userService');
const jwtService = require('../services/jwtService');
const { validateLoginData, validateUserData } = require('../services/validations');

module.exports = {

  checkLoginData: async (req, res) => {
    validateLoginData(req.body);
    const { id: userId } = await userService.checkLoginData(req.body);
    const token = jwtService.createToken({ userId });
    res.status(200).json({ token });
  },

  create: async (req, res) => {
    validateUserData(req.body);
    const { id: userId } = await userService.create(req.body);
    const token = jwtService.createToken({ userId });
    res.status(201).json({ token, userId });
  },

  list: async (_req, res) => {
    const users = await userService.list();
    res.status(200).json(users);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(200).json(user);
  },

};
