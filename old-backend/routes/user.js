const express = require('express');
const {
	createUser,
	getUsers,
	getUser,
	updateUser,
	deleteUser,
} = require('../controllers/user');
const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id(\\d+)', getUser);
router.patch('/:id(\\d+)', updateUser);
router.delete('/:id(\\d+)', deleteUser);

module.exports = router;
