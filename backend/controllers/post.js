const models = require('../models');
const Post = models.Post;
const Tag = models.Tag;
const PostTag = models.PostTag;
const { handleError } = require('../functions.js');

exports.createPost = (req, res, next) => {
	Post.create(req.body)
		.then((post) => res.status(201).json(post))
		.catch((error) => handleError(res, error));
};

exports.getPosts = (req, res, next) => {
	const options = {};

	if (req.query.limit > 0) options.limit = Number(req.query.limit);

	if (req.query.tag_id > 0) {
		Post.findAll({
			include: {
				model: Tag,
				through: PostTag,
				where: { id: Number(req.query.tag_id) },
			},
		})
			.then((posts) => res.status(200).json(posts))
			.catch((error) => handleError(res, error));
	} else {
		Post.findAll(options)
			.then((posts) => res.status(200).json(posts))
			.catch((error) => handleError(res, error));
	}
};

exports.getPost = (req, res, next) => {
	const id = req.params.id;

	Post.findOne({ where: { id } })
		.then((post) => {
			if (!post) return res.status(404).json({ error: 'Post not found' });

			return res.status(200).json(post);
		})
		.catch((error) => handleError(res, error));
};

exports.updatePost = (req, res, next) => {
	const id = req.params.id;

	Post.findOne({ where: { id } })
		.then((post) => {
			if (!post) return res.status(404).json({ error: 'Post not found' });

			if (req.body.hasOwnProperty('id'))
				return res.status(403).json({ error: 'Unable to modify ID' });

			Post.update(req.body, { where: { id } })
				.then(() => res.status(204).json(null))
				.catch((error) => handleError(res, error));
		})
		.catch((error) => handleError(res, error));
};

exports.deletePost = (req, res, next) => {
	const id = req.params.id;

	Post.findOne({ where: { id } })
		.then((post) => {
			if (!post) return res.status(404).json({ error: 'Post not found' });

			Post.destroy({ where: { id } })
				.then(() => res.status(204).json(null))
				.catch((error) => handleError(res, error));
		})
		.catch((error) => handleError(res, error));
};
