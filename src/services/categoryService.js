const { Category } = require('../database/models');

module.exports = {

  create: async (categoryData) => {
    const category = await Category.create(categoryData);
    return category.toJSON();
  },

};
