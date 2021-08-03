'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('Posts', 'tags');
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('Posts', 'tags', {
			type: Sequelize.STRING,
		});
	},
};
