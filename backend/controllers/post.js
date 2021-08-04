const models = require('../models');
const Post = models.Post;
const { handleError } = require('../functions.js');

exports.createPost = (req, res, next) => {
	Post.create(req.body)
		.then((post) => res.status(201).json(post))
		.catch((error) => handleError(res, error));
};

exports.getPosts = (req, res, next) => {};

exports.getPost = (req, res, next) => {};

exports.updatePost = (req, res, next) => {};

exports.deletePost = (req, res, next) => {};
