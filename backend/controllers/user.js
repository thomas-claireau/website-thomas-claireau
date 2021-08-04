const models = require('../models');
const User = models.User;
const { handleError } = require('../functions.js');

exports.createUser = (req, res, next) => {
	User.create(req.body)
		.then((user) => res.status(201).json(user))
		.catch(handleError);
};

exports.getUsers = (req, res, next) => {
	User.findAll()
		.then((users) => res.status(200).json(users))
		.catch(handleError);
};

exports.getUser = (req, res, next) => {
	const id = req.params.id;

	User.findOne({ where: { id } })
		.then((user) => {
			if (!user) return res.status(404).json({ error: 'User not found' });

			return res.status(200).json(user);
		})
		.catch(handleError);
};

exports.updateUser = (req, res, next) => {
	const id = req.params.id;

	User.findOne({ where: { id } })
		.then((user) => {
			if (!user) return res.status(404).json({ error: 'User not found' });

			if (req.body.hasOwnProperty('id'))
				return res.status(403).json({ error: 'Unable to modify ID' });

			User.update(req.body, { where: { id } })
				.then(() => res.status(204).json(null))
				.catch(handleError);
		})
		.catch(handleError);
};

exports.deleteUser = (req, res, next) => {
	const id = req.params.id;

	User.findOne({ where: { id } })
		.then((user) => {
			if (!user) return res.status(404).json({ error: 'User not found' });

			User.destroy({ where: { id } })
				.then(() => res.status(204).json(null))
				.catch(handleError);
		})
		.catch(handleError);
};
