const categoryService = require('../services/categoryService');
const { validateCategoryData } = require('../services/validations');

module.exports = {

  create: async (req, res) => {
    validateCategoryData(req.body);
    const category = await categoryService.create(req.body);
    res.status(201).json(category);
  },

};
