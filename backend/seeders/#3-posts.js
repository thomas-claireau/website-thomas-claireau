'use strict';

const faker = require('faker');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Posts', null, {});

		await queryInterface.sequelize.query(
			'ALTER TABLE Posts AUTO_INCREMENT = 1;'
		);

		const data = [];
		const paragraphs = [];

		for (let i = 0; i < 100; i++) {
			for (let j = 0; j < faker.datatype.number(10); j++) {
				paragraphs.push(`<p>${faker.lorem.paragraph()}</p>`);
			}

			data.push({
				title: i + '-' + faker.lorem.words(),
				description: faker.lorem.sentences(2),
				userId: 1, // user with ID=1
				thumbnail: faker.image.imageUrl(),
				content: paragraphs.join(''),
				read: faker.datatype.number(30),
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
