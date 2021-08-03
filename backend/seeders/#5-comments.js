'use strict';

const faker = require('faker');
const models = require('../models');
const Post = models.Post;

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkDelete('Comments', null, {});

		await queryInterface.sequelize.query(
			'ALTER TABLE Comments AUTO_INCREMENT = 1;'
		);

		const data = [];
		const posts = await Post.findAll();

		posts.forEach((post, index) => {
			for (let j = 0; j < randomNumber(4); j++) {
				data.push({
					PostId: post.dataValues.id,
					username: j % 2 == 0 ? faker.internet.userName() : '',
					content: faker.lorem.sentences(3),
					valid: randomNumber(2),
					createdAt: new Date(),
					updatedAt: new Date(),
				});
			}
		});

		await queryInterface.bulkInsert('Comments', data);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Comments', null, {});
	},
};

function randomNumber(max) {
	return Math.floor(Math.random() * max);
}
