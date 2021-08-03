'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.Post.belongsToMany(models.Tag, { through: models.PostTag });

			models.Post.belongsTo(models.User, {
				foreignKey: {
					name: 'userId',
					allowNull: false,
				},
			});
		}
	}
	Post.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			userId: DataTypes.INTEGER,
			thumbnail: DataTypes.STRING,
			content: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Post',
		}
	);

	return Post;
};
