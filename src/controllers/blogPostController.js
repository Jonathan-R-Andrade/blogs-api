const blogPostService = require('../services/blogPostService');
const { validatePostData } = require('../services/validations');

module.exports = {

  create: async (req, res) => {
    validatePostData(req.body);
    const post = await blogPostService.create(req.body);
    res.status(201).json(post);
  },

};
