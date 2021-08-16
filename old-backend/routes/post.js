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
router.get('/', getPosts); // ?tag_id=X -> get posts by tag ID
router.get('/:id(\\d+)', getPost);
router.patch('/:id(\\d+)', updatePost);
router.delete('/:id(\\d+)', deletePost);

module.exports = router;
