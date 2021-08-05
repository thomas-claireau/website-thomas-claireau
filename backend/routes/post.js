const express = require('express');
const {
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost,
} = require('../controllers/post');

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id(\\d+)', getPost);
router.patch('/:id(\\d+)', updatePost);
router.delete('/:id(\\d+)', deletePost);

module.exports = router;
