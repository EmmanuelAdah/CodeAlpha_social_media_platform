const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/users', userController.allUsers);
router.get('/users/:id', userController.getUserById);
router.get('/username/:username', userController.findByUsername);
router.get('/find/email/:email', userController.findByEmail);
router.put('/upload/image', userController.updateImage);

module.exports = router;