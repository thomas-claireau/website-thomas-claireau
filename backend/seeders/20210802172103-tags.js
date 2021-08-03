'use strict';

const faker = require('faker');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Tags', null, {});

		await queryInterface.sequelize.query(
			'ALTER TABLE Tags AUTO_INCREMENT = 1;'
		);

		const now = new Date();
		const data = [];

		for (let i = 0; i < 5; i++) {
			data.push({
				name: faker.lorem.word(),
				createdAt: now,
				updatedAt: now,
			});
		}

		await queryInterface.bulkInsert('Tags', data);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('Tags', null, {});
	},
};
