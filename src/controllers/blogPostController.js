const blogPostService = require('../services/blogPostService');
const categoryService = require('../services/categoryService');
const { validatePostData, validatePostDataToEdit } = require('../services/validations');

module.exports = {

  create: async (req, res) => {
    validatePostData(req.body);
    await categoryService.checkIfAllExist(req.body.categoryIds);
    const post = await blogPostService.create(req.body);
    res.status(201).json(post);
  },

  list: async (_req, res) => {
    const posts = await blogPostService.list();
    res.status(200).json(posts);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const post = await blogPostService.getById(id);
    res.status(200).json(post);
  },

  update: async (req, res) => {
    validatePostDataToEdit(req.body);
    const { id } = req.params;
    const { userId } = req.tokenPayload;
    const post = await blogPostService.update(id, userId, req.body);
    res.status(200).json(post);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const { userId } = req.tokenPayload;
    await blogPostService.delete(id, userId);
    res.status(204).end();
  },

};
