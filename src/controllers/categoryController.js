const categoryService = require('../services/categoryService');
const { validateCategoryData } = require('../services/validations');

module.exports = {

  create: async (req, res) => {
    validateCategoryData(req.body);
    const category = await categoryService.create(req.body);
    res.status(201).json(category);
  },

  list: async (_req, res) => {
    const categories = await categoryService.list();
    res.status(200).json(categories);
  },

};
