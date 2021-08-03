'use strict';

const model = require('../models');
const post = require('../models/post');
const Post = model.Post;
const Tag = model.Tag;

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('PostTags', null, {});

		const posts = await Post.findAll({ attributes: ['id'] });
		const tags = await Tag.findAll({ attributes: ['id'] });
		const data = [];
		const now = new Date();

		posts.forEach((post, index) => {
			const randomTag = tags[randomNumber(tags.length)];

			data.push({
				PostId: post.dataValues.id,
				TagId: randomTag.dataValues.id,
				createdAt: now,
				updatedAt: now,
			});
		});

		await queryInterface.bulkInsert('PostTags', data);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('PostTags', null, {});
	},
};

function randomNumber(max) {
	return Math.floor(Math.random() * max);
}
