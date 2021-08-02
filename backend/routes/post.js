const express = require('express');
const {
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost,
} = require('../controllers/post');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.put('/', auth, updatePost);
router.delete('/', auth, deletePost);

module.exports = router;
