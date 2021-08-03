const models = require('../models');
const User = models.User;

exports.createUser = async (req, res, next) => {
	const user = await User.create(req.body);

	res.status(201).json(user);
};

exports.getUsers = (req, res, next) => {
	res.status(200).json('getUsers');
};

exports.getUser = (req, res, next) => {
	res.status(200).json('getUser');
};

exports.updateUser = (req, res, next) => {
	res.status(200).json('updateUser');
};

exports.deleteUser = (req, res, next) => {
	res.status(200).json('deleteUser');
};
