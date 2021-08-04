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
router.post('/', createPost);
router.put('/', updatePost);
router.delete('/', deletePost);

module.exports = router;
