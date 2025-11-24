const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/users', userController.allUsers);
router.get('/users/:id', userController.getUserById);
router.get('/users/username/:username', userController.findByUsername);
router.get('/users/find/email/:email', userController.findByEmail);

module.exports = router;