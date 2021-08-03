const express = require('express');
require('dotenv').config();
const usersRoutes = require('./routes/user');
const postsRoutes = require('./routes/post');
const commentsRoutes = require('./routes/comment');
const auth = require('./middlewares/auth');
const emptyBody = require('./middlewares/empty-body');
const basicAuth = require('express-basic-auth');

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', process.env.FRONT_URL);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PATCH, DELETE, OPTIONS'
	);
	next();
});

app.use(express.json());

app.use(emptyBody);

app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);

module.exports = app;
