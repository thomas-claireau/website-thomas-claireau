const express = require('express');
const {
	createComment,
	getComments,
	getComment,
	updateComment,
	deleteComment,
} = require('../controllers/comment');
const router = express.Router();

router.post('/', createComment);
router.get('/', getComments); // ?post_id=X -> get comments by post
router.get('/:id(\\d+)', getComment);
router.patch('/:id(\\d+)', updateComment);
router.delete('/:id(\\d+)', deleteComment);

module.exports = router;
