const express = require('express');
require('dotenv').config();

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

app.use('/test', (req, res) => {
	res.json({ message: 'coucou' });
});

module.exports = app;
