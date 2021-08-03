'use strict';

const faker = require('faker');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});

		await queryInterface.sequelize.query(
			'ALTER TABLE Users AUTO_INCREMENT = 1;'
		);

		await queryInterface.bulkInsert(
			'Users',
			[
				{
					firstname: 'Thomas',
					lastname: 'Claireau',
					job: 'Développeur web full stack, spécialisé PHP - React',
					avatar: faker.image.imageUrl(),
					skills: 'PHP, Symfony, React.JS, NodeJS, API REST, Bloggeur',
					resume: `ici le resume`,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
