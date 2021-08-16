const models = require('../models');
const Tag = models.Tag;
const { handleError } = require('../functions');

exports.createTag = (req, res, next) => {
	Tag.create(req.body)
		.then((tag) => res.status(201).json(tag))
		.catch((error) => handleError(res, error));
};

exports.getTags = (req, res, next) => {
	const options = {};

	if (req.query.limit > 0) options.limit = Number(req.query.limit);

	Tag.findAll(options)
		.then((tags) => res.status(200).json(tags))
		.catch((error) => handleError(res, error));
};

exports.getTag = (req, res, next) => {
	const id = req.params.id;

	Tag.findOne({
		where: { id },
	})
		.then((tag) => {
			if (!tag) return res.status(404).json({ error: 'Tag not found' });

			return res.status(200).json(tag);
		})
		.catch((error) => handleError(res, error));
};

exports.updateTag = (req, res, next) => {
	const id = req.params.id;

	Tag.findOne({ where: { id }, attributes: ['id'] })
		.then((tag) => {
			if (!tag) return res.status(404).json({ error: 'Tag not found' });

			if (req.body.hasOwnProperty('id'))
				return res.status(403).json({ error: 'Unable to modify ID' });

			Tag.update(req.body, { where: { id } })
				.then(() => res.status(204).json(null))
				.catch((error) => handleError(res, error));
		})
		.catch((error) => handleError(res, error));
};

exports.deleteTag = (req, res, next) => {
	const id = req.params.id;

	Tag.findOne({ where: { id }, attributes: ['id'] })
		.then((tag) => {
			if (!tag) return res.status(404).json({ error: 'Tag not found' });

			Tag.destroy({ where: { id } })
				.then(() => res.status(204).json(null))
				.catch((error) => handleError(res, error));
		})
		.catch((error) => handleError(res, error));
};
