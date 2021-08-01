'use strict';

const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Users', [
			{
				email: process.env.API_ADMIN_EMAIL,
				password: await bcrypt.hash(process.env.API_ADMIN_PASSWORD, 10),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
