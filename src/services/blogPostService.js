const { Op } = require('sequelize');
const { BlogPost, User, Category, PostCategory, sequelize } = require('../database/models');
const { notFound, unauthorized } = require('../errors');

module.exports = {

  create: async (userId, postData) => {
    const result = await sequelize.transaction(async (t) => {
      const { dataValues: post } = await BlogPost.create(
        { ...postData, userId }, { transaction: t },
      );

      const associationPostCategories = postData
        .categoryIds.map((category) => ({ postId: post.id, categoryId: category }));

      await PostCategory.bulkCreate(associationPostCategories, { transaction: t });

      return post;
    });
  
    return result;
  },

  list: async () => {
    const posts = await BlogPost.findAll({ 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  },

  getById: async (id) => {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!post) throw notFound('Post does not exist');
    return post.toJSON();
  },

  update: async (id, userId, { title, content }) => {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!post) throw notFound('Post does not exist');
    if (post.userId !== userId) throw unauthorized('Unauthorized user');

    await post.update({ title, content });
    return post.toJSON();
  },

  delete: async (id, userId) => {
    const post = await BlogPost.findOne({ where: { id } });

    if (!post) throw notFound('Post does not exist');
    if (post.userId !== userId) throw unauthorized('Unauthorized user');

    await post.destroy();
  },

  getBySearchTerm: async (searchTerm) => {
    const posts = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${searchTerm}%` } },
          { content: { [Op.like]: `%${searchTerm}%` } },
        ],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  },

};
