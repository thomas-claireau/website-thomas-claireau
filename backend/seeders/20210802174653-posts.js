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
				userId: 0,
				thumbnail: faker.image.imageUrl(),
				tags: null,
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
