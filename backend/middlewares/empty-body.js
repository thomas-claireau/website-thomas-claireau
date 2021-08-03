// check if req.body is empty
module.exports = (req, res, next) => {
	const allowMethods = ['POST', 'PATCH'];

	if (!Object.keys(req.body).length && allowMethods.includes(req.method))
		return res.status(403).json({ error: 'The data body must not be empty' });

	next();
};
