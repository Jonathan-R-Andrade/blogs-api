const categoryService = require('../services/categoryService');

module.exports = {

  create: async (req, res) => {
    const category = await categoryService.create(req.body);
    res.status(201).json(category);
  },

};
