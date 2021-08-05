const express = require('express');
const {
	createTag,
	getTags,
	getTag,
	updateTag,
	deleteTag,
} = require('../controllers/tag');
const router = express.Router();

router.post('/', createTag);
router.get('/', getTags);
router.get('/:id(\\d+)', getTag);
router.patch('/:id(\\d+)', updateTag);
router.delete('/:id(\\d+)', deleteTag);

module.exports = router;
