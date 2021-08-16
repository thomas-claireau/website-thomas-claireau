'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.Comment.belongsTo(models.Post, {
				foreignKey: {
					name: 'id',
					allowNull: false,
				},
			});
		}
	}

	Comment.init(
		{
			PostId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			username: DataTypes.STRING,
			content: {
				type: DataTypes.TEXT,
			},
			valid: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			sequelize,
			modelName: 'Comment',
		}
	);
	return Comment;
};
