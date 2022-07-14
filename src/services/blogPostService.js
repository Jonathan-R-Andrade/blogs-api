const { BlogPost, PostCategory, sequelize } = require('../database/models');

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

};