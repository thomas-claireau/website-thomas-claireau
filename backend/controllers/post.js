const models = require('../models');
const Post = models.Post;
const User = models.User;
const Tag = models.Tag;
const PostTag = models.PostTag;
const { handleError } = require('../functions.js');

exports.createPost = async (req, res, next) => {
	try {
		return await res.status(201).json(await Post.create(req.body))
	} catch (error) {
		return await res.status(500).json({ error });
	}
	// Post.create(req.body)
	// 	.then((post) => res.status(201).json(post))
	// 	.catch((error) => handleError(res, error));
};

exports.getPosts = async (req, res, next) => {
	try {
		const options = {};

		if (req.query.limit > 0) options.limit = Number(req.query.limit);

		options.attributes = [
			'id',
			'title',
			'description',
			'thumbnail',
			'read',
			'updatedAt',
		];

		options.include = [
			{
				model: User,
				attributes: ['firstname', 'lastname', 'avatar'],
			},
		];

		if (req.query.tag_id > 0) {
			options.include.push({
				model: Tag,
				through: PostTag,
				where: { id: Number(req.query.tag_id) },
				attributes: ['name'],
			});
		}

		// const posts = await Post.findAll(options);

		return res.status(200).json(await Post.findAll(options));
	} catch (error) {
		return await res.status(500).json({ error });
	}
};

exports.getPost = (req, res, next) => {
	const id = req.params.id;

	Post.findOne({
		where: { id },
		include: [
			{
				model: Tag,
				through: PostTag,
				attributes: ['name'],
			},
			{
				model: User,
				attributes: ['firstname', 'lastname', 'avatar'],
			},
		],
	})
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
