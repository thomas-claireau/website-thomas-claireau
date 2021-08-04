'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('PostTags', {
			PostId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				onDelete: 'CASCADE',
				references: {
					model: 'Posts',
					key: 'id',
				},
				allowNull: false,
			},
			TagId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				onDelete: 'CASCADE',
				references: {
					model: 'Tags',
					key: 'id',
				},
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('PostTags');
	},
};
