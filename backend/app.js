const express = require('express');
require('dotenv').config();
const usersRoutes = require('./routes/user');
const postsRoutes = require('./routes/post');
const commentsRoutes = require('./routes/comment');
const tagRoutes = require('./routes/tag');
const emptyBody = require('./middlewares/empty-body');

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', process.env.FRONT_URL);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
	next();
});

app.use(express.json());

app.use(emptyBody);

app.use(function (req, res, next) {
	res.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
	res.set('Pragma', 'no-cache');
	res.set('Expires', 0);
	next();
});

app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/tags', tagRoutes);

module.exports = app;
