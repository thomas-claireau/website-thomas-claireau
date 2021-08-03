const express = require('express');
const {
	createComment,
	getCommentsByPost,
	deleteComment,
} = require('../controllers/comment');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth, createComment);
router.get('/:id', getCommentsByPost);
router.post('/', auth, deleteComment);

module.exports = router;
