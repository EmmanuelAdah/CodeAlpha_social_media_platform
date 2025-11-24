const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.get('/posts/:userId', postController.getAllPosts);
router.post('/create/post', postController.createPost);
router.get("/post/getByID/:id", postController.findById);
router.delete('/delete/:id', postController.deletePost);
router.delete('/delete/all/:userId', postController.deleteAllPosts);
router.patch('/update/:id', postController.updatePost);
router.patch('/post/like/:id', postController.likePost);


module.exports = router;