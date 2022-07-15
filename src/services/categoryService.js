const { Category } = require('../database/models');
const { badRequest } = require('../errors');

module.exports = {

  create: async (categoryData) => {
    const category = await Category.create(categoryData);
    return category.toJSON();
  },

  list: async () => {
    const categories = await Category.findAll();
    return categories;
  },

  checkIfAllExist: async (categoryIds) => {
    const { count } = await Category.findAndCountAll({
      where: { id: categoryIds },
    });
    if (count !== categoryIds.length) throw badRequest('"categoryIds" not found');
  },

};
