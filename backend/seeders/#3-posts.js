'use strict';

const faker = require('faker');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Posts', null, {});

		await queryInterface.sequelize.query(
			'ALTER TABLE Posts AUTO_INCREMENT = 1;'
		);

		const data = [];

		for (let i = 0; i < 100; i++) {
			data.push({
				title: faker.lorem.words(),
				description: faker.lorem.sentences(2),
				userId: 1, // user with ID=1
				thumbnail: faker.image.imageUrl(),
				content: faker.lorem.paragraphs(10),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}

		await queryInterface.bulkInsert('Posts', data);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Posts', null, {});
	},
};
