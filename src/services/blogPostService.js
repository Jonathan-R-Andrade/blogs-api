const { BlogPost, User, Category, PostCategory, sequelize } = require('../database/models');
const { notFound } = require('../errors');

module.exports = {

  create: async (postData) => {
    const result = await sequelize.transaction(async (t) => {
      const { dataValues: post } = await BlogPost.create(
        { ...postData, userId: postData.userId || 1 }, { transaction: t },
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

};
