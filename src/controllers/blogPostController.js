const blogPostService = require('../services/blogPostService');

module.exports = {

  create: async (req, res) => {
    const post = await blogPostService.create(req.body);
    res.status(201).json(post);
  },

};
