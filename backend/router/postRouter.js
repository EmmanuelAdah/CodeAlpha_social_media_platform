const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.get('/get/:userId', postController.getAllPosts);
router.post('/create', postController.createPost);
router.get("/getByID/:id", postController.findById);
router.delete('/delete/:id', postController.deletePost);
router.delete('/delete/all/:userId', postController.deleteAllPosts);
router.patch('/update/:id', postController.updatePost);
router.patch('/like/:id', postController.likePost);


module.exports = router;