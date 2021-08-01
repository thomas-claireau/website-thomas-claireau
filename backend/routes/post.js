const express = require('express');
const { getPosts } = require('../controllers/post');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth, getPosts);

module.exports = router;
