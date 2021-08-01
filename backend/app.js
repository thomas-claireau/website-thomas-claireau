const express = require('express');
require('dotenv').config();
const postsRoutes = require('./routes/post');
const usersRoutes = require('./routes/user');

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', process.env.FRONT_URL);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use(express.json());

app.use('/api/posts', postsRoutes);
app.use('/api/auth', usersRoutes);

module.exports = app;
