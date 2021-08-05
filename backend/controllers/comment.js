const models = require('../models');
const Comment = models.Comment;
const { handleError } = require('../functions');

exports.createComment = (req, res, next) => {
	Comment.create(req.body)
		.then((comment) => res.status(201).json(comment))
		.catch((error) => handleError(res, error));
};

exports.getComments = (req, res, next) => {
	const options = {};

	options.attributes = [
		'id',
		'PostId',
		'username',
		'content',
		'valid',
		'createdAt',
		'updatedAt',
	];

	if (req.query.post_id > 0)
		options.where = { PostId: Number(req.query.post_id) };

	if (req.query.limit > 0) options.limit = Number(req.query.limit);

	Comment.findAll(options)
		.then((comments) => res.status(200).json(comments))
		.catch((error) => handleError(res, error));
};

exports.getComment = (req, res, next) => {
	const id = req.params.id;

	Comment.findOne({
		where: { id },
		attributes: [
			'id',
			'PostId',
			'username',
			'content',
			'valid',
			'createdAt',
			'updatedAt',
		],
	})
		.then((comment) => {
			if (!comment)
				return res.status(404).json({ error: 'Comment not found' });

			return res.status(200).json(comment);
		})
		.catch((error) => handleError(res, error));
};

exports.updateComment = (req, res, next) => {
	const id = req.params.id;

	Comment.findOne({ where: { id }, attributes: ['id'] })
		.then((comment) => {
			if (!comment)
				return res.status(404).json({ error: 'Comment not found' });

			if (req.body.hasOwnProperty('id'))
				return res.status(403).json({ error: 'Unable to modify ID' });

			Comment.update(req.body, { where: { id } })
				.then(() => res.status(204).json(null))
				.catch((error) => handleError(res, error));
		})
		.catch((error) => handleError(res, error));
};

exports.deleteComment = (req, res, next) => {
	const id = req.params.id;

	Comment.findOne({ where: { id }, attributes: ['id'] })
		.then((comment) => {
			if (!comment)
				return res.status(404).json({ error: 'Comment not found' });

			Comment.destroy({ where: { id } })
				.then(() => res.status(204).json(null))
				.catch((error) => handleError(res, error));
		})
		.catch((error) => handleError(res, error));
};
