const blogPostService = require('../services/blogPostService');
const categoryService = require('../services/categoryService');
const { validatePostData } = require('../services/validations');

module.exports = {

  create: async (req, res) => {
    validatePostData(req.body);
    await categoryService.checkIfAllExist(req.body.categoryIds);
    const post = await blogPostService.create(req.body);
    res.status(201).json(post);
  },

};
