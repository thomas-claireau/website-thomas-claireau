'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('PostTags', {
			PostId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: 'Posts',
					key: 'id',
				},
			},
			TagId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: 'Tags',
					key: 'id',
				},
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
